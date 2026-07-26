import { GITHUB_TOKEN } from '$app/env/private';
import { fetchGitHubData, type GitHubData } from '$lib/server/github';
import type { PageServerLoad } from './$types';

export const prerender = false;

export const load: PageServerLoad = async () => {
	const token = GITHUB_TOKEN || undefined;

	if (!token) {
		console.warn(
			'GITHUB_TOKEN not found. Use .env for npm run dev, .dev.vars for wrangler preview, or a Worker secret in production.'
		);
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
