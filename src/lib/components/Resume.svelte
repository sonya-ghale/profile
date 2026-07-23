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

<section id="resume" class="mx-auto max-w-6xl scroll-mt-16 bg-[#EEEEEE] px-8 py-20 text-[#1A1A1A]">
	<SectionHeading title="Resume" subtitle="Experience & education" variant="light" />
	<div class="flex max-w-2xl flex-col gap-8">
		{#each experience as item}
			<div class="border-l-2 border-accent-purple/40 pl-6">
				<span class="text-sm font-medium text-[#1A1A1A]/70">{item.date}</span>
				<h3 class="mt-1 text-lg text-[#1A1A1A]">{item.title}</h3>
				<p class="mb-2 text-sm text-[#1A1A1A]/80">{item.organization}</p>
				<p class="text-sm text-[#1A1A1A]/60">{item.description}</p>
			</div>
		{/each}
	</div>
</section>
