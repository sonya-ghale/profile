<script lang="ts">
	import SectionHeading from './SectionHeading.svelte';

	const experience = [
		{
			date: '2024 — Present',
			title: 'Software Developer',
			organization: 'Your Company / Freelance',
			description:
				'Building web applications, collaborating on product features, and shipping user-facing improvements.'
		},
		{
			date: '2020 — 2024',
			title: 'Computer Science',
			organization: 'Your University',
			description: 'Studied software engineering fundamentals, algorithms, and web development.'
		}
	];
</script>

<section id="resume" class="mx-auto max-w-6xl scroll-mt-16 px-8 py-20">
	<SectionHeading title="Resume" subtitle="Experience & education" />
	<div class="flex max-w-2xl flex-col gap-8">
		{#each experience as item}
			<div class="border-l-2 border-accent-purple/40 pl-6">
				<span class="text-sm font-medium text-accent-blue">{item.date}</span>
				<h3 class="mt-1 text-lg text-foreground">{item.title}</h3>
				<p class="mb-2 text-sm text-accent">{item.organization}</p>
				<p class="text-sm text-muted">{item.description}</p>
			</div>
		{/each}
	</div>
</section>
