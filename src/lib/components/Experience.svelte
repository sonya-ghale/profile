<script lang="ts">
	import { onMount } from 'svelte';

	type TimelineEntry = {
		year: string;
		title: string;
		subtitle: string;
		description: string;
	};

	const timeline: TimelineEntry[] = [
		{
			year: 'NOW',
			title: 'Full-Stack Developer',
			subtitle: 'Hinomaru Technology',
			description:
				'Currently working at Hinomaru Technology, building and shipping full-stack features across the product. Progressed from frontend work into mid-level full-stack development.'
		},
		{
			year: '2025',
			title: 'Frontend Developer',
			subtitle: 'Hinomaru Technology',
			description:
				'Joined Hinomaru Technology as a Frontend Developer and quickly moved into full-stack responsibilities while contributing to production features.'
		},
		{
			year: '2025',
			title: 'Education',
			subtitle: 'Completed',
			description:
				'Finished my formal education in 2025 with a strong foundation in software development, web technologies, and practical engineering skills.'
		},
		{
			year: '2024',
			title: 'Frontend Developer Intern',
			subtitle: 'Maharudra',
			description:
				'Interned as a Frontend Developer at Maharudra, working on UI implementation, responsive layouts, and collaborating with the team on client-facing web experiences.'
		},
		{
			year: '2024',
			title: 'Full Stack Development Intern',
			subtitle: 'GLC Education',
			description:
				'Completed a Full Stack Development internship at GLC Education, gaining hands-on experience across frontend, backend, and project delivery.'
		}
	];

	let sectionEl: HTMLElement;
	let scrollProgress = $state(0);
	let isVisible = $state(false);

	onMount(() => {
		const updateProgress = () => {
			if (!sectionEl) return;

			const rect = sectionEl.getBoundingClientRect();
			const sectionTop = window.scrollY + rect.top;
			const sectionHeight = sectionEl.offsetHeight;
			const viewportCenter = window.scrollY + window.innerHeight * 0.5;
			const raw = (viewportCenter - sectionTop) / sectionHeight;
			scrollProgress = Math.min(Math.max(raw, 0), 1);
		};

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) isVisible = true;
			},
			{ threshold: 0.15 }
		);

		if (sectionEl) observer.observe(sectionEl);

		updateProgress();
		window.addEventListener('scroll', updateProgress, { passive: true });
		window.addEventListener('resize', updateProgress, { passive: true });
		return () => {
			observer.disconnect();
			window.removeEventListener('scroll', updateProgress);
			window.removeEventListener('resize', updateProgress);
		};
	});
</script>

<section
	id="experience"
	bind:this={sectionEl}
	class="career-section relative scroll-mt-16 overflow-hidden bg-[#1A1A1A] py-24 text-[#EEEEEE] md:py-32"
>
	<div class="relative mx-auto max-w-6xl px-6 md:px-10">
		<h2
			class="font-display mb-20 text-center text-4xl font-bold leading-tight text-[#EEEEEE] md:text-5xl lg:text-6xl"
		>
			My career &amp;
			<span
				class="bg-gradient-to-r from-[#FFFDF5] via-[#F0E6CF] to-[#D9C7A0] bg-clip-text text-transparent"
			>
				experience
			</span>
		</h2>

		<div class="relative mx-auto max-w-5xl">
			<div
				class="timeline-track pointer-events-none absolute bottom-0 top-0 hidden md:left-[7.5rem] md:block lg:left-[9.5rem]"
				aria-hidden="true"
			>
				<div class="timeline-base"></div>

				<div class="timeline-glow" style="height: {scrollProgress * 100}%">
					<div class="timeline-glow-fill"></div>
					<div class="timeline-glow-head">
						<span class="pulse-ring pulse-ring-1"></span>
						<span class="pulse-ring pulse-ring-2"></span>
						<span class="pulse-core"></span>
					</div>
				</div>
			</div>

			<div class="flex flex-col gap-16 md:gap-20">
				{#each timeline as entry, i}
					<article
						class="timeline-entry grid grid-cols-1 gap-4 md:grid-cols-[7rem_13rem_1fr] md:gap-x-10 lg:grid-cols-[9rem_15rem_1fr] lg:gap-x-16"
						class:visible={isVisible}
						style="transition-delay: {i * 120}ms"
					>
						<div class="md:text-right">
							<span class="text-3xl font-bold tracking-tight text-[#EEEEEE] md:text-4xl">
								{entry.year}
							</span>
						</div>

						<div class="md:pr-6">
							<h3 class="text-2xl font-bold leading-tight text-[#EEEEEE] md:text-3xl lg:text-4xl">
								{entry.title}
							</h3>
							<p class="mt-1 text-sm font-medium text-[#E8DFC8] md:text-base">{entry.subtitle}</p>
						</div>

						<p class="max-w-md text-sm leading-relaxed text-[#EEEEEE]/55 md:text-base">
							{entry.description}
						</p>
					</article>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.timeline-track {
		width: 2px;
		margin-left: 0.75rem;
	}

	.timeline-base {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			to bottom,
			transparent 0%,
			rgba(232, 223, 200, 0.15) 15%,
			rgba(232, 223, 200, 0.2) 85%,
			rgba(250, 246, 236, 0.3) 100%
		);
	}

	.timeline-glow {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		will-change: height;
		transition: height 0.4s cubic-bezier(0.22, 1, 0.36, 1);
	}

	.timeline-glow-fill {
		height: 100%;
		width: 100%;
		background: linear-gradient(
			to bottom,
			rgba(255, 253, 245, 0.12) 0%,
			rgba(240, 230, 207, 0.9) 55%,
			rgba(217, 199, 160, 0.95) 100%
		);
		box-shadow:
			0 0 10px 2px rgba(240, 230, 207, 0.55),
			0 0 24px 6px rgba(217, 199, 160, 0.35);
	}

	/* Soft breathing light instead of a hard dot */
	.timeline-glow-head {
		position: absolute;
		bottom: -6px;
		left: 50%;
		height: 4px;
		width: 4px;
		transform: translateX(-50%);
	}

	.pulse-core {
		position: absolute;
		inset: 0;
		border-radius: 9999px;
		background: rgba(255, 253, 245, 0.9);
		filter: blur(1.5px);
		animation: core-breathe 2.4s ease-in-out infinite;
	}

	.pulse-ring {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 4px;
		height: 4px;
		border-radius: 9999px;
		background: radial-gradient(
			circle,
			rgba(240, 230, 207, 0.55) 0%,
			rgba(240, 230, 207, 0.18) 45%,
			transparent 75%
		);
		transform: translate(-50%, -50%);
		filter: blur(2px);
		animation: ring-pulse 2.4s ease-out infinite;
	}

	.pulse-ring-2 {
		animation-delay: 1.2s;
	}

	@keyframes core-breathe {
		0%,
		100% {
			opacity: 0.5;
			transform: scale(0.9);
		}
		50% {
			opacity: 1;
			transform: scale(1.3);
		}
	}

	@keyframes ring-pulse {
		0% {
			opacity: 0.6;
			transform: translate(-50%, -50%) scale(1);
		}
		70% {
			opacity: 0;
			transform: translate(-50%, -50%) scale(8);
		}
		100% {
			opacity: 0;
			transform: translate(-50%, -50%) scale(8);
		}
	}

	.timeline-entry {
		opacity: 0;
		transform: translateY(24px);
		transition:
			opacity 0.6s ease,
			transform 0.6s ease;
	}

	.timeline-entry.visible {
		opacity: 1;
		transform: translateY(0);
	}
</style>