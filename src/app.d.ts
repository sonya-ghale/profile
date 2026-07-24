// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			github: import('$lib/server/github').GitHubData | null;
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
