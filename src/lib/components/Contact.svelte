<script lang="ts">
	import SectionHeading from './SectionHeading.svelte';
	import ContactForm from './ContactForm.svelte';

	const links = [
		{ label: 'ghalesoniya166@gmail.com', href: 'mailto:ghalesoniya166@gmail.com' },
		{ label: 'GitHub', href: 'https://github.com/sonya-ghale' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/soniya-ghale-681b352a1/' }
	];
</script>

<section id="contact" class="section-padding scroll-mt-16 bg-[#1A1A1A] text-[#EEEEEE]">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
		<SectionHeading title="Contact" subtitle="Let's work together" />
		<div class="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
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

			<div class="rounded-2xl border border-[#EEEEEE]/10 bg-[#EEEEEE]/5 p-6 sm:p-8">
				<ContactForm formAction="/contact?/send" />
			</div>
		</div>
	</div>
</section>
