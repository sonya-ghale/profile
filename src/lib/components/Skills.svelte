<script lang="ts">
	import SectionHeading from './SectionHeading.svelte';

	const skills = [
		{ name: 'TypeScript', level: 'Advanced' },
		{ name: 'Svelte / SvelteKit', level: 'Advanced' },
		{ name: 'React', level: 'Intermediate' },
		{ name: 'Node.js', level: 'Intermediate' },
		{ name: 'Python', level: 'Intermediate' },
		{ name: 'Git & GitHub', level: 'Advanced' }
	];
</script>

<section id="skills" class="mx-auto max-w-6xl scroll-mt-16 px-8 py-20">
	<SectionHeading title="Skills" subtitle="Technologies and tools I work with" />
	<div class="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
		{#each skills as skill}
			<div
				class="flex flex-col gap-1 rounded-xl border border-white/8 bg-white/4 p-5 transition-all hover:-translate-y-0.5 hover:border-accent/30"
			>
				<span class="font-semibold text-foreground">{skill.name}</span>
				<span class="text-sm text-accent-blue">{skill.level}</span>
			</div>
		{/each}
	</div>
</section>
