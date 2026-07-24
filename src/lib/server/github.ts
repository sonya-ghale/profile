const GITHUB_API = 'https://api.github.com';
const GITHUB_GRAPHQL = 'https://api.github.com/graphql';

const LANGUAGE_COLORS: Record<string, string> = {
	JavaScript: '#f1e05a',
	TypeScript: '#3178c6',
	Python: '#3572A5',
	HTML: '#e34c26',
	CSS: '#563d7c',
	Svelte: '#ff3e00',
	Java: '#b07219',
	Go: '#00ADD8',
	Rust: '#dea584',
	Ruby: '#701516',
	PHP: '#4F5D95',
	'C++': '#f34b7d',
	C: '#555555',
	'C#': '#178600',
	Shell: '#89e051',
	Vue: '#41b883',
	Dart: '#00B4AB',
	Kotlin: '#A97BFF',
	Swift: '#F05138',
	SCSS: '#c6538c'
};

export type GitHubDay = {
	date: string;
	count: number;
};

export type GitHubRepo = {
	name: string;
	description: string | null;
	html_url: string;
	language: string | null;
	stargazers_count: number;
	forks_count: number;
	topics: string[];
	updated_at: string;
};

export type GitHubLanguage = {
	name: string;
	bytes: number;
	percentage: number;
	color: string;
};

export type GitHubWeek = GitHubDay[];

export type GitHubData = {
	username: string;
	name: string | null;
	avatar_url: string;
	public_repos: number;
	totalContributions: number;
	contributionWeeks: GitHubWeek[];
	pinnedRepos: GitHubRepo[];
	repos: GitHubRepo[];
	languages: GitHubLanguage[];
};

type GitHubUser = {
	login: string;
	name: string | null;
	avatar_url: string;
	public_repos: number;
};

type GitHubRepoRaw = {
	name: string;
	description: string | null;
	html_url: string;
	language: string | null;
	stargazers_count: number;
	forks_count: number;
	topics?: string[];
	updated_at: string;
	fork: boolean;
};

function authHeaders(token: string) {
	return {
		Authorization: `Bearer ${token}`,
		Accept: 'application/vnd.github+json',
		'X-GitHub-Api-Version': '2022-11-28'
	};
}

async function fetchUser(token: string): Promise<GitHubUser> {
	const res = await fetch(`${GITHUB_API}/user`, { headers: authHeaders(token) });
	if (!res.ok) throw new Error(`GitHub user fetch failed: ${res.status}`);
	return res.json();
}

async function fetchRepos(token: string): Promise<GitHubRepoRaw[]> {
	const res = await fetch(`${GITHUB_API}/user/repos?per_page=100&sort=updated&type=owner`, {
		headers: authHeaders(token)
	});
	if (!res.ok) throw new Error(`GitHub repos fetch failed: ${res.status}`);
	return res.json();
}

async function fetchRepoLanguages(
	token: string,
	owner: string,
	repo: string
): Promise<Record<string, number>> {
	const res = await fetch(`${GITHUB_API}/repos/${owner}/${repo}/languages`, {
		headers: authHeaders(token)
	});
	if (!res.ok) return {};
	return res.json();
}

async function fetchContributions(
	token: string
): Promise<{ totalContributions: number; weeks: GitHubWeek[] }> {
	const to = new Date();
	const from = new Date();
	from.setFullYear(from.getFullYear() - 1);

	const query = `
		query($from: DateTime!, $to: DateTime!) {
			viewer {
				contributionsCollection(from: $from, to: $to) {
					contributionCalendar {
						totalContributions
						weeks {
							contributionDays {
								contributionCount
								date
							}
						}
					}
				}
			}
		}
	`;

	const res = await fetch(GITHUB_GRAPHQL, {
		method: 'POST',
		headers: {
			...authHeaders(token),
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query,
			variables: {
				from: from.toISOString(),
				to: to.toISOString()
			}
		})
	});

	if (!res.ok) throw new Error(`GitHub GraphQL failed: ${res.status}`);

	const json = await res.json();

	if (json.errors?.length) {
		throw new Error(json.errors[0].message ?? 'GitHub GraphQL error');
	}

	const calendar = json?.data?.viewer?.contributionsCollection?.contributionCalendar;
	if (!calendar) throw new Error('GitHub contributions unavailable');

	const weeks: GitHubWeek[] = calendar.weeks.map(
		(week: { contributionDays: { date: string; contributionCount: number }[] }) =>
			week.contributionDays.map((day) => ({
				date: day.date,
				count: day.contributionCount
			}))
	);

	const summed = weeks.flat().reduce((total, day) => total + day.count, 0);
	const totalContributions = calendar.totalContributions as number;

	return {
		totalContributions: Math.max(totalContributions, summed),
		weeks
	};
}

async function fetchPinnedRepos(token: string, username: string): Promise<GitHubRepo[]> {
	const query = `
		query($username: String!) {
			user(login: $username) {
				pinnedItems(first: 6, types: REPOSITORY) {
					nodes {
						... on Repository {
							name
							description
							url
							stargazerCount
							forkCount
							updatedAt
							isFork
							primaryLanguage {
								name
							}
							repositoryTopics(first: 10) {
								nodes {
									topic {
										name
									}
								}
							}
						}
					}
				}
			}
		}
	`;

	const res = await fetch(GITHUB_GRAPHQL, {
		method: 'POST',
		headers: {
			...authHeaders(token),
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ query, variables: { username } })
	});

	if (!res.ok) throw new Error(`GitHub pinned repos fetch failed: ${res.status}`);

	const json = await res.json();

	if (json.errors?.length) {
		throw new Error(json.errors[0].message ?? 'GitHub GraphQL error');
	}

	const nodes = json?.data?.user?.pinnedItems?.nodes ?? [];

	return nodes
		.filter((repo: { isFork: boolean }) => !repo.isFork)
		.map(
			(repo: {
				name: string;
				description: string | null;
				url: string;
				stargazerCount: number;
				forkCount: number;
				updatedAt: string;
				primaryLanguage: { name: string } | null;
				repositoryTopics: { nodes: { topic: { name: string } }[] };
			}) => ({
				name: repo.name,
				description: repo.description,
				html_url: repo.url,
				language: repo.primaryLanguage?.name ?? null,
				stargazers_count: repo.stargazerCount,
				forks_count: repo.forkCount,
				topics: repo.repositoryTopics.nodes.map((node) => node.topic.name),
				updated_at: repo.updatedAt
			})
		);
}

async function aggregateLanguages(
	token: string,
	username: string,
	repos: GitHubRepoRaw[]
): Promise<GitHubLanguage[]> {
	const totals: Record<string, number> = {};
	const topRepos = [...repos]
		.filter((repo) => !repo.fork)
		.sort((a, b) => b.stargazers_count - a.stargazers_count)
		.slice(0, 15);

	await Promise.all(
		topRepos.map(async (repo) => {
			const languages = await fetchRepoLanguages(token, username, repo.name);
			for (const [name, bytes] of Object.entries(languages)) {
				totals[name] = (totals[name] ?? 0) + bytes;
			}
		})
	);

	const totalBytes = Object.values(totals).reduce((sum, bytes) => sum + bytes, 0);
	if (totalBytes === 0) return [];

	return Object.entries(totals)
		.map(([name, bytes]) => ({
			name,
			bytes,
			percentage: Math.round((bytes / totalBytes) * 1000) / 10,
			color: LANGUAGE_COLORS[name] ?? '#7c5cbf'
		}))
		.sort((a, b) => b.bytes - a.bytes)
		.slice(0, 10);
}

export async function fetchGitHubData(token: string): Promise<GitHubData> {
	const user = await fetchUser(token);
	const [reposRaw, contributions, pinnedRepos] = await Promise.all([
		fetchRepos(token),
		fetchContributions(token),
		fetchPinnedRepos(token, user.login)
	]);

	const repos = reposRaw
		.filter((repo) => !repo.fork)
		.map((repo) => ({
			name: repo.name,
			description: repo.description,
			html_url: repo.html_url,
			language: repo.language,
			stargazers_count: repo.stargazers_count,
			forks_count: repo.forks_count,
			topics: repo.topics ?? [],
			updated_at: repo.updated_at
		}));

	const languages = await aggregateLanguages(token, user.login, reposRaw);

	return {
		username: user.login,
		name: user.name,
		avatar_url: user.avatar_url,
		public_repos: user.public_repos,
		totalContributions: contributions.totalContributions,
		contributionWeeks: contributions.weeks,
		pinnedRepos,
		repos,
		languages
	};
}
