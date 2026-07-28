/// <reference path="../worker-configuration.d.ts" />

// See https://svelte.dev/docs/kit/types#app.d.ts
declare global {
	namespace App {
		interface PageData {
			github?: import('$lib/server/github').GitHubData | null;
			githubError?: import('./routes/+page.server').GitHubLoadError | null;
			blog?: import('$lib/blogs').Blog;
		}
		interface Platform {
			env: Env;
			ctx: ExecutionContext;
			caches: CacheStorage;
			cf?: IncomingRequestCfProperties;
		}
	}
}

export {};
