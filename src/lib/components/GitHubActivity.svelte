<script lang="ts">
	import type { GitHubData } from '$lib/server/github';

	let { github }: { github: GitHubData | null } = $props();

	function contributionColor(count: number, maxCount: number): string {
		if (count === 0) return '#2a2a35';
		const ratio = count / maxCount;
		if (ratio <= 0.25) return '#3d2a5c';
		if (ratio <= 0.5) return '#5c3d99';
		if (ratio <= 0.75) return '#7c5cbf';
		return '#9b6dff';
}

	function formatDate(date: string) {
		return new Date(date).toLocaleDateString('en-US', {
			month: 'short',
			day: 'numeric',
			year: 'numeric'
		});
	}

	const maxCount = $derived(
		github
			? Math.max(...github.contributionWeeks.flat().map((day) => day.count), 1)
			: 1
	);
</script>

<section id="github" class="scroll-mt-16 bg-[#EEEEEE] py-20 text-[#1A1A1A] md:py-24">
	<div class="mx-auto max-w-6xl px-6 md:px-10">
		<h2 class="font-display mb-2 text-4xl font-bold text-[#1A1A1A]">GitHub Activity</h2>
		<p class="mb-12 text-lg text-[#1A1A1A]/60">Repositories, contributions, and languages</p>

		{#if !github}
			<div class="rounded-xl border border-[#1A1A1A]/10 bg-white/60 p-8 text-center">
				<p class="text-[#1A1A1A]/70">
					GitHub data unavailable. Add <code class="rounded bg-[#1A1A1A]/5 px-1.5 py-0.5">GITHUB_TOKEN</code>
					to <code class="rounded bg-[#1A1A1A]/5 px-1.5 py-0.5">.env</code> for local dev, or set it as a
					Cloudflare Worker secret in production.
				</p>
			</div>
		{:else}

			<div class="mb-12 rounded-2xl border border-[#1A1A1A]/10 bg-[#1A1A1A] p-6 text-[#EEEEEE] md:p-8">
				<div class="mb-4 flex items-center justify-between gap-4">
					<h3 class="text-xl font-bold">Contribution Graph</h3>
					<span class="text-sm text-[#EEEEEE]/60">{github.totalContributions} contributions in the last year</span>
				</div>

				<div class="overflow-x-auto pb-2">
					<div class="inline-flex gap-1">
						{#each github.contributionWeeks as week}
							<div class="flex flex-col gap-1">
								{#each week as day}
									<div
										class="h-3 w-3 rounded-sm transition-colors sm:h-3.5 sm:w-3.5"
										style="background-color: {contributionColor(day.count, maxCount)}"
										title="{day.count} contribution{day.count === 1 ? '' : 's'} on {formatDate(day.date)}"
									></div>
								{/each}
							</div>
						{/each}
					</div>
				</div>

				<div class="mt-4 flex items-center justify-end gap-2 text-xs text-[#EEEEEE]/50">
					<span>Less</span>
					{#each [0, Math.ceil(maxCount * 0.25), Math.ceil(maxCount * 0.5), Math.ceil(maxCount * 0.75), maxCount] as level}
						<div
							class="h-3 w-3 rounded-sm"
							style="background-color: {contributionColor(level, maxCount)}"
						></div>
					{/each}
					<span>More</span>
				</div>
			</div>

			<div>
				<div class="mb-6 flex flex-wrap items-end justify-between gap-4">
					<div>
						<h3 class="text-2xl font-bold">Pinned Repositories</h3>
						<p class="mt-1 text-sm text-[#1A1A1A]/55">
							Pin repos on your GitHub profile to update what appears here.
						</p>
					</div>
					<a
						href="https://github.com/sonya-ghale"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-2 rounded-lg border border-[#7c5cbf]/30 bg-[#7c5cbf]/10 px-5 py-2.5 text-sm font-semibold text-[#7c5cbf] no-underline transition-colors hover:border-[#7c5cbf]/50 hover:bg-[#7c5cbf]/20"
					>
						View all on GitHub
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4">
							<path
								fill-rule="evenodd"
								d="M4.25 5.5a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-1.5 0V6.31L5.03 14.03a.75.75 0 0 1-1.06-1.06L11.69 5.25H5.5a.75.75 0 0 1-.75-.75Z"
								clip-rule="evenodd"
							/>
						</svg>
					</a>
				</div>
				<div class="grid grid-cols-1 gap-5 md:grid-cols-2">
					{#each github.pinnedRepos as repo}
						<article
							class="flex h-full flex-col rounded-2xl border border-[#1A1A1A]/10 bg-white/70 p-6 transition-all hover:-translate-y-0.5 hover:border-[#7c5cbf]/40 hover:shadow-[0_8px_30px_rgba(124,92,191,0.12)]"
						>
							<div class="mb-3 flex items-start justify-between gap-3">
								<a
									href={repo.html_url}
									target="_blank"
									rel="noopener noreferrer"
									class="text-lg font-bold text-[#7c5cbf] no-underline hover:underline"
								>
									{repo.name}
								</a>
								<div class="flex shrink-0 gap-3 text-xs text-[#1A1A1A]/50">
									<span>★ {repo.stargazers_count}</span>
									<span>⑂ {repo.forks_count}</span>
								</div>
							</div>

							<p class="mb-4 flex-1 text-sm leading-relaxed text-[#1A1A1A]/65">
								{repo.description ?? 'No description provided.'}
							</p>

							<div class="flex flex-wrap items-center gap-2">
								{#if repo.language}
									<span
										class="rounded-full bg-[#1A1A1A]/5 px-2.5 py-1 text-xs font-medium text-[#1A1A1A]/75"
									>
										{repo.language}
									</span>
								{/if}
								{#each repo.topics.slice(0, 3) as topic}
									<span class="rounded-full bg-[#7c5cbf]/10 px-2.5 py-1 text-xs text-[#7c5cbf]">
										{topic}
									</span>
								{/each}
							</div>
						</article>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</section>
