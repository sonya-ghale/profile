<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { scrollToSection } from '$lib/utils/scroll';

	const navLinksLeft = [
		{ label: 'Skills', href: '/#skills' },
		{ label: 'Experience', href: '/#experience' },
		{ label: 'Contribution', href: '/#github' },
		{ label: 'Resume', href: '/#resume' },
		{ label: 'Blog', href: '/#blogs' },
		{ label: 'Contact', href: '/#contact' }
	];

	const linkedInSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>`;
	const githubSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>`;

	const navLinksRight = [
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/soniya-ghale-681b352a1/', svg: linkedInSvg },
		{ label: 'GitHub', href: 'https://github.com/sonya-ghale', svg: githubSvg }
	];

	let scrolled = $state(false);

	const isHome = $derived(page.url.pathname === '/');
	const navSolid = $derived(!isHome || scrolled);

	const navLinkClass = $derived(
		navSolid ? 'text-[#EEEEEE]/85 hover:text-accent-purple' : 'text-[#EEEEEE] hover:text-accent-purple'
	);

	function handleScroll() {
		scrolled = window.scrollY > 0;
	}

	onMount(() => {
		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<nav
	class="fixed inset-x-0 top-0 z-50 px-4 py-3 transition-colors duration-300 sm:px-6 md:px-8 md:py-4"
	style="background-color: {navSolid ? '#000000' : 'transparent'};"
>
	<div class="mx-auto flex max-w-6xl flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-4">
		<div class="flex items-center justify-between gap-4 md:shrink-0">
			<a href="/" class="no-underline" aria-label="Home">
				<div
					class="rounded-xl bg-gradient-to-br from-accent-purple to-[#5a3d9e] px-4 py-2 font-display text-lg font-bold tracking-tight text-[#EEEEEE] shadow-[0_4px_16px_rgba(124,92,191,0.35)] transition-transform hover:-translate-y-0.5 sm:text-xl"
				>
					SG
				</div>
			</a>

			<div class="flex items-center gap-4 md:hidden">
				{#each navLinksRight as link}
					<a
						href={link.href}
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center no-underline transition-colors {navLinkClass}"
						aria-label={link.label}
					>
						{@html link.svg}
					</a>
				{/each}
			</div>
		</div>

		<ul
			class="m-0 flex list-none gap-x-4 gap-y-2 overflow-x-auto overscroll-x-contain pb-1 [-ms-overflow-style:none] [scrollbar-width:none] md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden"
		>
			{#each navLinksLeft as link}
				<li class="shrink-0">
					<a
						href={link.href}
						class="text-sm font-semibold uppercase tracking-wide whitespace-nowrap no-underline transition-colors sm:text-base {navLinkClass}"
						onclick={(e) => scrollToSection(e, link.href)}
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>

		<div class="hidden items-center gap-4 md:flex md:shrink-0">
			{#each navLinksRight as link}
				<a
					href={link.href}
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide no-underline transition-colors sm:text-base {navLinkClass}"
					aria-label={link.label}
				>
					{@html link.svg}
					<span class="hidden lg:inline">{link.label}</span>
				</a>
			{/each}
		</div>
	</div>
</nav>
