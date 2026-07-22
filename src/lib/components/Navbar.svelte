<script lang="ts">
	import { scrollToSection } from '$lib/utils/scroll';

	const navLinks = [
		{ label: 'Home', href: '#home' },
		{ label: 'Skills', href: '#skills' },
		{ label: 'Projects', href: '#projects' },
		{ label: 'Resume', href: '#resume' },
		{ label: 'Contact', href: '#contact' }
	];
</script>

<nav
	class="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-white/5 bg-background/85 px-8 py-4 backdrop-blur-md md:flex-row flex-col gap-4 md:gap-0 md:px-8 px-4"
>
	<a
		href="#home"
		class="font-display text-xl font-bold text-foreground no-underline"
		onclick={(e) => scrollToSection(e, '#home')}
	>
		Sonia
	</a>
	<ul class="m-0 flex list-none flex-wrap justify-center gap-5 p-0 md:gap-8">
		{#each navLinks as link}
			<li>
				<a
					href={link.href}
					class="text-sm font-medium text-muted no-underline transition-colors hover:text-accent"
					onclick={(e) => scrollToSection(e, link.href)}
				>
					{link.label}
				</a>
			</li>
		{/each}
	</ul>
</nav>
