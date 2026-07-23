<script lang="ts">
	import { onMount } from 'svelte';
	import heroImage from '$lib/assets/gglasses-removebg-preview.png';
	import { scrollToSection } from '$lib/utils/scroll';
	import Navbar from './Navbar.svelte';

	let scrollY = $state(0);
	let ticking = false;

	function handleScroll() {
		if (!ticking) {
			ticking = true;
			requestAnimationFrame(() => {
				scrollY = window.scrollY;
				ticking = false;
			});
		}
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});

	let imageOffset = $derived(scrollY * 1);
	let textOffset = $derived(Math.max(scrollY * -0.5, -120));
	let textOpacity = $derived(Math.max(1 - scrollY / 500, 0));
</script>

<div class="bg-[#EEEEEE] lg:p-1">
	<header
		class="scan-section relative mx-auto flex min-h-screen w-full max-w-[113rem] flex-col overflow-hidden bg-[#1A1A1A] text-[#EEEEEE] lg:min-h-[calc(100dvh-8px)]"
	>

		<section id="home" class="relative flex flex-1 items-center justify-center px-2">
			<div
			class="mx-auto flex w-full max-w-5xl items-center justify-between gap-10 text-center md:flex-row"
		>
				<div
    class="max-w-xl items-left justify-center"
    style="transform: translateX({textOffset}px); opacity: {textOpacity};"
				>
					<p class="mb-2 text-lg font-medium text-[#EEEEEE]/80">Hi, I'm</p>
					<h1
						class="font-display mb-1 bg-gradient-to-br from-[#EEEEEE] to-[#EEEEEE]/70 bg-clip-text text-5xl font-bold leading-tight text-transparent md:text-7xl"
					>
						Soniya Ghale
					</h1>
					<p class="mb-5 text-xl font-semibold text-[#EEEEEE]/70">Full-Stack Developer</p>
					<div class="flex flex-wrap justify-center gap-4">
						<a
							href="#projects"
							class="inline-block rounded-lg bg-gradient-to-br from-accent-purple to-[#5a3d9e] px-6 py-3 text-sm font-semibold text-[#EEEEEE] no-underline shadow-[0_4px_20px_rgba(124,92,191,0.35)] transition-transform hover:-translate-y-0.5"
							onclick={(e) => scrollToSection(e, '#projects')}
						>
							View My Work
						</a>
						<a
							href="#contact"
							class="inline-block rounded-lg border border-[#EEEEEE]/40 px-6 py-3 text-sm font-semibold text-[#EEEEEE] no-underline transition-transform hover:-translate-y-0.5"
							onclick={(e) => scrollToSection(e, '#contact')}
						>
							Get In Touch
						</a>
					</div>
				</div>
				<div
					class="flex shrink-0 items-center justify-center"
					style="transform: translateY({imageOffset}px);"
				>
					<img
						src={heroImage}
						alt="Sonia — developer portrait"
						class="floating-image h-auto max-w-[260px] object-contain drop-shadow-[0_20px_40px_rgba(124,92,191,0.2)] md:max-w-[380px] lg:max-w-[520px] xl:max-w-[600px]"
					/>
				</div>
			</div>
		</section>
	</header>
</div>

<style>
	.scan-section {
		clip-path: inset(0 0 100% 0);
		animation: reveal-section 1.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
	}

	@keyframes reveal-section {
		0% {
			clip-path: inset(0 0 100% 0);
		}
		100% {
			clip-path: inset(0 0 0% 0);
		}
	}

	.floating-image {
		animation: float 6s ease-in-out infinite;
		animation-delay: 1.8s;
		will-change: transform;
	}

	@keyframes float {
		0% {
			transform: translateY(0px);
		}
		25% {
			transform: translateY(-8px);
		}
		50% {
			transform: translateY(-16px);
		}
		75% {
			transform: translateY(-8px);
		}
		100% {
			transform: translateY(0px);
		}
	}
</style>
