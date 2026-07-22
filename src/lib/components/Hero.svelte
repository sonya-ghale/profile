<script lang="ts">
	import heroImage from '$lib/assets/gglasses-removebg-preview.png';
	import { scrollToSection } from '$lib/utils/scroll';
</script>

<section
	id="home"
	class="mx-auto flex min-h-screen max-w-6xl scroll-mt-16 flex-col-reverse items-center justify-between gap-12 px-8 pb-16 pt-32 md:flex-row md:pt-28 md:text-left text-center"
>
	<div class="max-w-xl flex-1">
		<p class="mb-2 text-lg font-medium text-accent">Hi, I'm</p>
		<h1
			class="font-display mb-1 bg-gradient-to-br from-foreground to-accent bg-clip-text text-5xl font-bold leading-tight text-transparent md:text-7xl"
		>
			Sonia
		</h1>
		<p class="mb-5 text-xl font-semibold text-accent-blue">Full-Stack Developer</p>
		<p class="mb-8 text-lg leading-relaxed text-muted">
			I build clean, thoughtful web experiences — from polished frontends to reliable backends.
			Passionate about turning ideas into software that people actually enjoy using.
		</p>
		<div class="flex flex-wrap justify-center gap-4 md:justify-start">
			<a
				href="#projects"
				class="inline-block rounded-lg bg-gradient-to-br from-accent-purple to-[#5a3d9e] px-6 py-3 text-sm font-semibold text-white no-underline shadow-[0_4px_20px_rgba(124,92,191,0.35)] transition-transform hover:-translate-y-0.5"
				onclick={(e) => scrollToSection(e, '#projects')}
			>
				View My Work
			</a>
			<a
				href="#contact"
				class="inline-block rounded-lg border border-accent/40 px-6 py-3 text-sm font-semibold text-accent no-underline transition-transform hover:-translate-y-0.5"
				onclick={(e) => scrollToSection(e, '#contact')}
			>
				Get In Touch
			</a>
		</div>
	</div>
	<div class="flex shrink-0 items-end justify-center">
		<img
			src={heroImage}
			alt="Sonia — developer portrait"
			class="h-auto max-w-[260px] object-contain drop-shadow-[0_20px_40px_rgba(124,92,191,0.2)] md:max-w-[380px]"
		/>
	</div>
</section>
