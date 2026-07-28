<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';

	const links = [
		{ label: 'ghalesoniya166@gmail.com', href: 'mailto:ghalesoniya166@gmail.com' },
		{ label: 'GitHub', href: 'https://github.com/sonya-ghale' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/soniya-ghale-681b352a1/' }
	];
</script>

<svelte:head>
	<title>Contact — Soniya</title>
</svelte:head>

<Navbar />

<main class="min-h-screen bg-[#1A1A1A] text-[#EEEEEE]">
	<section class="section-padding scroll-mt-16 pt-24 sm:pt-28">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
			<a
				href="/"
				class="mb-6 inline-flex items-center gap-2 text-sm font-medium text-[#EEEEEE]/60 no-underline transition-colors hover:text-accent-purple"
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4">
					<path
						fill-rule="evenodd"
						d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
						clip-rule="evenodd"
					/>
				</svg>
				Back to Home
			</a>

			<div class="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
				<div>
					<SectionHeading title="Contact" subtitle="Let's work together" />
					<p class="mb-6 text-[#EEEEEE]/60">
						Have a project in mind or just want to say hello? Send me a message and I'll get back to you.
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
					<ContactForm />
				</div>
			</div>
		</div>
	</section>
</main>

<Footer />
