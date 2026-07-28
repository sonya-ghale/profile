<script lang="ts">
	import svelteLogo from '$lib/assets/svelte.jpg';
	import reactLogo from '$lib/assets/React-logo.png';
	import pythonLogo from '$lib/assets/python.jpg';
	import djangoLogo from '$lib/assets/django.png';
	import vscodeLogo from '$lib/assets/vscide.jpeg';
	import mongodbLogo from '$lib/assets/mongodb.png';
	import cssLogo from '$lib/assets/CSS-Logo.png';
	import godotLogo from '$lib/assets/godot.png';
	import figmaLogo from '$lib/assets/figma.png';

	type Skill = {
		slug: string;
		x: number;
		y: number;
		prominent?: boolean;
		description: string;
		logo?: string;
	};

	const skills: Skill[] = [
		{
			slug: 'svelte',
			x: 44,
			y: 46,
			description:
			'Used to build modern frontend applications with smooth animations, reusable components, and fast performance while learning the Svelte ecosystem.',			logo: svelteLogo
		},
		{
			slug: 'javascript',
			x: 62,
			y: 32,
			prominent: true,
			description:
			'Used as the primary language for building interactive web applications, handling API requests, and application logic.'
		},
		{
			slug: 'react',
			x: 38,
			y: 28,
			prominent: true,
			description:
			'Built responsive user interfaces with reusable components, hooks, state management, and API integration for multiple web projects.',
			logo: reactLogo
		},
		{
			slug: 'python',
			x: 65,
			y: 48,
			description:
			'Used for backend development, creating desktop/game applications while exploring different Python frameworks.',
			logo: pythonLogo
		},
		{
			slug: 'django',
			x: 42,
			y: 62,
			description:
			'Developed full-stack web applications with authentication, database models, CRUD functionality, and REST APIs using Django.',
			logo: djangoLogo
		},
		{
			slug: 'vscode',
			x: 88,
			y: 42,
			prominent: true,
			description:
			'Primary development environment for coding, debugging, Git integration, and managing projects efficiently.',
			logo: vscodeLogo
		},
		{
			slug: 'cursor',
			x: 24,
			y: 49,
			description:'Used as an AI-assisted code editor to improve development speed, refactor code, and accelerate debugging.'
		},
		{
			slug: 'git',
			x: 75,
			y: 68,
			description:
			'Used daily for version control, branching, pull requests, code reviews, and collaborating on development projects.'
		},
		{
			slug: 'mongodb',
			x: 22,
			y: 68,
			description:
			'Used as the primary NoSQL database for storing application data, designing schemas, and integrating with backend APIs.',
			logo: mongodbLogo
		},
		{
			slug: 'html',
			x: 78,
			y: 28,
			description: 'Built semantic and accessible page structures as the foundation for responsive web applications.'

		},
		{
			slug: 'css',
			x: 19,
			y: 34,
			description:
			'Created responsive layouts, animations, and custom UI designs while ensuring consistent styling across projects.',
			logo: cssLogo
		},
		{
			slug: 'godot',
			x: 58,
			y: 68,
			description:
			'Used to learn game development by creating 2D games, implementing gameplay mechanics, UI, and player interactions.',
			logo: godotLogo
		},
		{
			slug: 'figma',
			x: 8,
			y: 58,
			description:
			'Designed UI mockups, wireframes, and prototypes before implementing responsive interfaces in code.',
			logo: figmaLogo
		},
		{
			slug: 'canva',
			x: 82,
			y: 55,
			description: 
			'Created presentation materials, promotional graphics, and simple visual assets for personal and academic projects.'
		},
		{
			slug: 'clip-studio',
			x: 48,
			y: 80,
			description: 
			'Used for digital illustration, character art, and practicing drawing techniques with raster and vector workflows.'
		},
		{
			slug: 'tailwind-css',
			x: 100,
			y: 62,
			description: 
			'Built responsive and modern user interfaces rapidly using utility-first classes, custom themes, and reusable components.'
		}
	];

	let hoveredIndex = $state<number | null>(null);
</script>

<section id="skills" class="scroll-mt-12 bg-[#EEEEEE] px-4 py-10 sm:px-6 md:px-10">
	<div class="mx-auto max-w-6xl">
		<h2 class="font-display mb-2 text-3xl text-[#1A1A1A] sm:text-4xl">Skills & Tools</h2>
		<p class="mb-6 text-base text-[#1A1A1A]/60 sm:mb-4 sm:text-lg">
			The languages, frameworks, and tools I use to design and build — tap a tool to see my proficiency.
		</p>

		<div class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:hidden">
			{#each skills as skill}
				<div class="rounded-xl border border-[#1A1A1A]/10 bg-white/80 p-3 sm:p-4">
					<div class="mb-2 flex items-center gap-2">
						{#if skill.logo}
							<img src={skill.logo} alt={skill.slug} class="h-8 w-8 object-contain" />
						{:else}
							<span
								class="flex h-8 w-8 items-center justify-center rounded bg-[#1A1A1A]/5 text-xs font-semibold uppercase text-[#1A1A1A]"
							>
								{skill.slug.slice(0, 2)}
							</span>
						{/if}
						<span class="text-xs font-semibold text-[#1A1A1A] uppercase">{skill.slug}</span>
					</div>
				</div>
			{/each}
		</div>

		<div class="relative mx-auto hidden aspect-[16/10] w-full max-w-3xl md:block">
			<svg
				class="pointer-events-none absolute inset-0 h-full w-full"
				viewBox="0 0 100 100"
				preserveAspectRatio="none"
				aria-hidden="true"
			></svg>

			{#each skills as skill, i}
				<button
					type="button"
					class="skill-node group relative -translate-x-1/2 -translate-y-5/5 cursor-default border-none bg-transparent p-3 text-left"
					class:prominent={skill.prominent}
					class:is-hovered={hoveredIndex === i}
					style="left: {skill.x}%; top: {skill.y}%; position: absolute;"
					onmouseenter={() => (hoveredIndex = i)}
					onmouseleave={() => (hoveredIndex = null)}
					onfocus={() => (hoveredIndex = i)}
					onblur={() => (hoveredIndex = null)}
				>
					<span class="block transition-transform duration-200 group-hover:scale-105">
						<span
							class="skill-label font-display block whitespace-nowrap text-[clamp(0.75rem,1.6vw,1.35rem)] font-semibold text-[#1A1A1A] opacity-35 transition-opacity duration-200 group-hover:opacity-0"
							class:opacity-100={skill.prominent}
						>
							/{skill.slug}
						</span>
					</span>

					<div
						class="skill-card pointer-events-none absolute left-1/2 top-full z-20 w-56 -translate-x-1/2 translate-y-1 rounded-md bg-[#1A1A1A] p-4 text-white opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100"
					>
						<div class="mb-2 flex items-center gap-3">
							{#if skill.logo}
								<img src={skill.logo} alt={skill.slug} class="h-10 w-10 object-contain" />
							{:else}
								<span
									class="flex h-10 w-10 items-center justify-center rounded bg-white/10 text-sm font-semibold uppercase"
								>
									{skill.slug.slice(0, 2)}
								</span>
							{/if}
						
						</div>
						<p class="text-xs leading-snug text-white/80">{skill.description}</p>
					</div>
				</button>
			{/each}
		</div>
	</div>
</section>

<style>
	.skill-node {
		transition: transform 0.2s ease;
	}

	.skill-node:hover,
	.skill-node.is-hovered {
		transform: translate(-50%, -50%) scale(1.04);
		z-index: 10;
	}

	.skill-label {
		display: block;
		font-size: clamp(0.75rem, 1.6vw, 1.35rem);
		font-weight: 600;
		color: #1a1a1a;
		opacity: 0.35;
		transition:
			opacity 0.2s ease,
			color 0.2s ease;
	}

	.prominent .skill-label {
		font-size: clamp(1rem, 2.4vw, 2rem);
		font-weight: 700;
		opacity: 1;
	}

	.skill-node:hover .skill-label,
	.skill-node.is-hovered .skill-label {
		opacity: 1;
	}
</style>
