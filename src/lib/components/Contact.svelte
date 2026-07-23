<script lang="ts">
	import SectionHeading from './SectionHeading.svelte';

	const links = [
		{ label: 'hello@example.com', href: 'mailto:hello@example.com' },
		{ label: 'GitHub', href: 'https://github.com' },
		{ label: 'LinkedIn', href: 'https://linkedin.com' }
	];
</script>

<section id="contact" class="scroll-mt-16 bg-[#1A1A1A] py-20 text-[#EEEEEE]">
	<div class="mx-auto max-w-6xl px-8">
		<SectionHeading title="Contact" subtitle="Let's work together" />
		<div class="max-w-lg">
			<p class="mb-6 text-[#EEEEEE]/60">
				Have a project in mind or just want to say hello? I'd love to hear from you.
			</p>
			<div class="flex flex-wrap gap-4">
				{#each links as link}
					<a
						href={link.href}
						target={link.href.startsWith('http') ? '_blank' : undefined}
						rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
						class="rounded-lg border border-[#EEEEEE]/10 bg-[#EEEEEE]/5 px-5 py-2.5 font-medium text-[#EEEEEE] no-underline transition-colors hover:border-accent-purple/40 hover:bg-accent-purple/15"
					>
						{link.label}
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>
