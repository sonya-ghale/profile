/// <reference path="../worker-configuration.d.ts" />

// See https://svelte.dev/docs/kit/types#app.d.ts
declare global {
	namespace App {
		interface PageData {
			github: import('$lib/server/github').GitHubData | null;
		}
		interface Platform {
			env: Env;
		}
	}
}

export {};
