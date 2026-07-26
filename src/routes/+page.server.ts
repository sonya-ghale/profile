import { fetchGitHubData, type GitHubData } from '$lib/server/github';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ platform }) => {
	const token = platform?.env.GITHUB_TOKEN;

	if (!token) {
		return { github: null as GitHubData | null };
	}

	try {
		const github = await fetchGitHubData(token);
		return { github };
	} catch (error) {
		console.error('Failed to load GitHub data:', error);
		return { github: null as GitHubData | null };
	}
};
