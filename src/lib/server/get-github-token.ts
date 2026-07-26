import { env } from '$env/dynamic/private';

export function getGitHubToken(platform: App.Platform | undefined): string | undefined {
	// Cloudflare Workers / Pages (production + wrangler preview)
	const cloudflareToken = platform?.env?.GITHUB_TOKEN;
	if (cloudflareToken) return cloudflareToken;

	// Local `npm run dev` — reads from .env via SvelteKit
	return env.GITHUB_TOKEN;
}
