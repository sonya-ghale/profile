import { fetchGitHubData, type GitHubData } from '$lib/server/github';
import { getGitHubToken } from '$lib/server/get-github-token';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ platform }) => {
	const token = getGitHubToken(platform);

	if (!token) {
		console.warn('GITHUB_TOKEN not found. Use .env for npm run dev, .dev.vars for wrangler preview, or Cloudflare secrets in production.');
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
