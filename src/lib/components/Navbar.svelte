<script lang="ts">
	import { onMount } from 'svelte';
	import { scrollToSection } from '$lib/utils/scroll';

	const navLinks = [
		// { label: 'Home', href: '#home' },
		{ label: 'Skills', href: '#skills' },
		{ label: 'Projects', href: '#projects' },
		{ label: 'Resume', href: '#resume' },
		{ label: 'Contact', href: '#contact' }
	];

	let scrolled = $state(false);

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
	class="fixed inset-x-0 top-0 z-50 flex flex-col items-center justify-between gap-4 px-4 py-4 text-white transition-colors duration-300 md:flex-row md:gap-0 md:px-8"
	style="background-color: {scrolled ? '#000000' : 'transparent'};"
>
	<ul class="m-0 flex list-none flex-wrap justify-center gap-5 p-4 md:gap-8">
		{#each navLinks as link}
			<li>
				<a
					href={link.href}
					class="text-base font-semibold uppercase text-muted no-underline transition-colors hover:text-accent"
					onclick={(e) => scrollToSection(e, link.href)}
				>
					{link.label}
				</a>
			</li>
		{/each}
	</ul>

	<a
		href="https://www.linkedin.com/in/your-profile"
		target="_blank"
		rel="noopener noreferrer"
		class="flex items-center gap-2 text-base font-semibold uppercase text-muted no-underline transition-colors hover:text-accent"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			class="h-5 w-5"
		>
			<path
				d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
			/>
		</svg>
		LinkedIn
	</a>
</nav>