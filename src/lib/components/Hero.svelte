<script lang="ts">
	import { onMount } from 'svelte';
	import heroImage from '$lib/assets/face.jpg';
	import { scrollToSection } from '$lib/utils/scroll';

	let scrollY = $state(0);
	let isMobile = $state(true);
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
		const media = window.matchMedia('(max-width: 767px)');
		const updateMobile = () => {
			isMobile = media.matches;
		};
		updateMobile();
		media.addEventListener('change', updateMobile);

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			media.removeEventListener('change', updateMobile);
			window.removeEventListener('scroll', handleScroll);
		};
	});

	let imageOffset = $derived(isMobile ? 0 : scrollY);
	let textOffset = $derived(isMobile ? 0 : Math.max(scrollY * -0.5, -120));
	let textOpacity = $derived(isMobile ? 1 : Math.max(1 - scrollY / 500, 0));
</script>

<div class="bg-[#EEEEEE] lg:p-1">
	<header
		class="scan-section relative mx-auto flex min-h-screen w-full max-w-[113rem] flex-col overflow-hidden bg-[#1A1A1A] text-[#EEEEEE] lg:min-h-[calc(100dvh-8px)]"
	>
		<section id="home" class="relative flex flex-1 items-center justify-center px-4 py-28 sm:px-6 md:px-8 md:py-20">
			<div
				class="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 text-center md:flex-row md:items-center md:justify-between md:gap-10 md:text-left"
			>
				<div
					class="w-full max-w-xl"
					style="transform: translateX({textOffset}px); opacity: {textOpacity};"
				>
					<p class="mb-2 text-base font-medium text-[#EEEEEE]/80 sm:text-lg">Hi, I'm</p>
					<h1
						class="font-display mb-1 bg-gradient-to-br from-[#EEEEEE] to-[#EEEEEE]/70 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl md:text-7xl"
					>
						Soniya Ghale
					</h1>
					<p class="mb-5 text-lg font-semibold text-[#EEEEEE]/70 sm:text-xl">Full-Stack Developer</p>
					<div class="flex flex-wrap justify-center gap-3 sm:gap-4 md:justify-start">
						<a
							href="#github"
							class="inline-block rounded-lg bg-gradient-to-br from-accent-purple to-[#5a3d9e] px-5 py-2.5 text-sm font-semibold text-[#EEEEEE] no-underline shadow-[0_4px_20px_rgba(124,92,191,0.35)] transition-transform hover:-translate-y-0.5 sm:px-6 sm:py-3"
							onclick={(e) => scrollToSection(e, '#github')}
						>
							View My Work
						</a>
						<a
							href="#contact"
							class="inline-block rounded-lg border border-[#EEEEEE]/40 px-5 py-2.5 text-sm font-semibold text-[#EEEEEE] no-underline transition-transform hover:-translate-y-0.5 sm:px-6 sm:py-3"
							onclick={(e) => scrollToSection(e, '#contact')}
						>
							Get In Touch
						</a>
					</div>
				</div>

				<div
					class="flex w-full shrink-0 items-center justify-center md:w-auto"
					style="transform: translateY({imageOffset}px);"
				>
					<img
						src={heroImage}
						alt="Soniya — developer portrait"
						class="floating-image h-auto w-full rounded-md max-w-[280px] object-contain drop-shadow-[0_20px_40px_rgba(124,92,191,0.2)] sm:max-w-[250px] md:max-w-[280px] lg:max-w-[280px] xl:max-w-[280px]"
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

	@media (max-width: 767px) {
		.floating-image {
			animation: none;
		}
	}
</style>
