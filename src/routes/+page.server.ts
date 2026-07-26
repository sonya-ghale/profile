import { GITHUB_TOKEN } from '$app/env/private';
import { fetchGitHubData, type GitHubData } from '$lib/server/github';
import type { PageServerLoad } from './$types';

export const prerender = false;

export type GitHubLoadError = 'missing_token' | 'api_error';

export const load: PageServerLoad = async ({ platform }) => {
	const token =
		GITHUB_TOKEN?.trim() || platform?.env?.GITHUB_TOKEN?.trim() || undefined;

	if (!token) {
		console.warn(
			'GITHUB_TOKEN not found. Use .env for npm run dev, .dev.vars for wrangler preview, or wrangler secret put GITHUB_TOKEN for production.'
		);
		return {
			github: null as GitHubData | null,
			githubError: 'missing_token' as GitHubLoadError
		};
	}

	try {
		const github = await fetchGitHubData(token);
		return { github, githubError: null };
	} catch (error) {
		const message = error instanceof Error ? error.message : String(error);
		console.error('Failed to load GitHub data:', message);
		return {
			github: null as GitHubData | null,
			githubError: 'api_error' as GitHubLoadError
		};
	}
};
