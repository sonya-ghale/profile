import { GITHUB_TOKEN } from '$env/static/private';
import { fetchGitHubData, type GitHubData } from '$lib/server/github';

export async function load() {
	if (!GITHUB_TOKEN) {
		return { github: null as GitHubData | null };
	}

	try {
		const github = await fetchGitHubData(GITHUB_TOKEN);
		return { github };
	} catch (error) {
		console.error('Failed to load GitHub data:', error);
		return { github: null as GitHubData | null };
	}
}
