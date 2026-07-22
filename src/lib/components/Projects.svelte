<script lang="ts">
	import SectionHeading from './SectionHeading.svelte';

	const projects = [
		{
			title: 'Dev Profile',
			description:
				'A personal portfolio built with SvelteKit, featuring smooth scroll navigation and a responsive layout.',
			tags: ['SvelteKit', 'TypeScript', 'CSS']
		},
		{
			title: 'Project Two',
			description: 'A placeholder project — swap this out with one of your own builds.',
			tags: ['React', 'API', 'Tailwind']
		},
		{
			title: 'Project Three',
			description: 'Another placeholder. Add links, screenshots, or live demos here.',
			tags: ['Node.js', 'PostgreSQL']
		}
	];
</script>

<section id="projects" class="scroll-mt-16 bg-white/2 py-20">
	<div class="mx-auto max-w-6xl px-8">
		<SectionHeading title="Projects" subtitle="Things I've built" />
		<div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
			{#each projects as project}
				<article
					class="rounded-xl border border-white/8  p-7 transition-colors hover:border-accent/25"
				>
					<h3 class="mb-3 text-xl text-foreground">{project.title}</h3>
					<p class="mb-4 text-sm leading-relaxed text-muted">{project.description}</p>
					<div class="flex flex-wrap gap-2">
						{#each project.tags as tag}
							<span class="rounded-md bg-accent-purple/20 px-2.5 py-1 text-xs text-accent">{tag}</span>
						{/each}
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
