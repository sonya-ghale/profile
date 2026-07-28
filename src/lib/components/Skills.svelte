<script lang="ts">
	import { skillIcons } from '$lib/skill-icons';

	type SkillCategory = 'language' | 'framework' | 'tool' | 'database'
	type FilterCategory = 'all' | SkillCategory

	type Skill = {
		slug: string;
		category: SkillCategory;
		x: number;
		y: number;
		prominent?: boolean;
		description: string;
	};

	const filterOptions: {value: FilterCategory; label: string} [] =[
		{value: 'all', label: 'All'},
		{value: 'language', label: 'Language'},
		{value: 'framework', label: 'Framework'},
		{value: 'tool', label: 'Tools'},
		{value: 'database', label: 'Database'}
	]
	

	const skills: Skill[] = [
		{
			slug: 'svelte',
			category: 'framework',
			x: 44,
			y: 46,
			description:
				'Used to build modern frontend applications with smooth animations, reusable components, and fast performance while learning the Svelte ecosystem.'
		},
		{
			slug: 'javascript',
			category: 'language',
			x: 62,
			y: 32,
			prominent: true,
			description:
				'Used as the primary language for building interactive web applications, handling API requests, and application logic.'
		},
		{
			slug: 'react',
			category: 'framework',
			x: 38,
			y: 28,
			prominent: true,
			description:
				'Built responsive user interfaces with reusable components, hooks, state management, and API integration for multiple web projects.'
		},
		{
			slug: 'python',
			category: 'language',
			x: 65,
			y: 48,
			description:
				'Used for backend development, creating desktop/game applications while exploring different Python frameworks.'
		},
		{
			slug: 'django',
			category: 'framework',
			x: 42,
			y: 62,
			description:
				'Developed full-stack web applications with authentication, database models, CRUD functionality, and REST APIs using Django.'
		},
		{
			slug: 'vscode',
			category: 'tool',
			x: 88,
			y: 42,
			prominent: true,
			description:
				'Primary development environment for coding, debugging, Git integration, and managing projects efficiently.'
		},
		{
			slug: 'cursor',
			category: 'tool',
			x: 24,
			y: 49,
			description:
				'Used as an AI-assisted code editor to improve development speed, refactor code, and accelerate debugging.'
		},
		{
			slug: 'github',
			category: 'tool',
			x: 75,
			y: 68,
			description:
				'Used daily for version control, branching, pull requests, code reviews, and collaborating on development projects.'
		},
		{
			slug: 'mongodb',
			category: 'database',
			x: 22,
			y: 68,
			description:
				'Used as the primary NoSQL database for storing application data, designing schemas, and integrating with backend APIs.'
		},
		{
			slug: 'html',
			category: 'language',
			x: 78,
			y: 28,
			description:
				'Built semantic and accessible page structures as the foundation for responsive web applications.'
		},
		{
			slug: 'css',
			category: 'language',
			x: 19,
			y: 34,
			description:
				'Created responsive layouts, animations, and custom UI designs while ensuring consistent styling across projects.'
		},
		{
			slug: 'godot',
			category: 'tool',
			x: 58,
			y: 68,
			description:
				'Used to learn game development by creating 2D games, implementing gameplay mechanics, UI, and player interactions.'
		},
		{
			slug: 'figma',
			category: 'tool',
			x: 8,
			y: 58,
			description:
				'Designed UI mockups, wireframes, and prototypes before implementing responsive interfaces in code.'
		},
		{
			slug: 'canva',
			category: 'tool',
			x: 82,
			y: 55,
			description:
				'Created presentation materials, promotional graphics, and simple visual assets for personal and academic projects.'
		},
		{
			slug: 'clip-studio',
			category: 'tool',
			x: 48,
			y: 80,
			description:
				'Used for digital illustration, character art, and practicing drawing techniques with raster and vector workflows.'
		},
		{
			slug: 'tailwind-css',
			category: 'framework',
			x: 100,
			y: 62,
			description:
				'Built responsive and modern user interfaces rapidly using utility-first classes, custom themes, and reusable components.'
		},
		{
			slug: 'postgresql',
			category: 'database',
			x: 70,
			y: 80,
			description: ""
		}
	];

	let activeFilter = $state<FilterCategory>('all');
	let hoveredIndex = $state<number | null>(null);

	const filteredSkills = $derived(
		activeFilter === 'all' ? skills : skills.filter((skill) => skill.category === activeFilter)
	);

	const showNetworkMap = $derived(activeFilter === 'all');

	function setFilter(filter: FilterCategory){
		activeFilter =filter;
		hoveredIndex = null;
	}
</script>

<section id="skills" class="scroll-mt-12 bg-[#EEEEEE] px-4 py-10 sm:px-6 md:px-10">
	<div class="mx-auto max-w-6xl">
		<h2 class="font-display mb-2 text-3xl text-[#1A1A1A] sm:text-4xl">Skills & Tools</h2>
		<p class="mb-4 text-base text-[#1A1A1A]/60 sm:text-lg">
			The languages, frameworks, and tools I use to design and build.
		</p>

		<div class="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filter skills by category">
			{#each filterOptions as option}
				<button
					type="button"
					class="rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors sm:px-4 sm:py-2 sm:text-sm {activeFilter === option.value
						? 'border-[#1A1A1A] bg-[#1A1A1A] text-white'
						: 'border-[#1A1A1A]/15 bg-white/80 text-[#1A1A1A]/70 hover:border-[#1A1A1A]/30 hover:text-[#1A1A1A]'}"
					aria-pressed={activeFilter === option.value}
					onclick={() => setFilter(option.value)}
				>
					{option.label}
				</button>
			{/each}
		</div>

		<div
			class="grid grid-cols-2 gap-3 sm:grid-cols-3 {showNetworkMap
				? 'md:hidden'
				: 'md:grid-cols-4 lg:grid-cols-5'}"
		>
			{#each filteredSkills as skill}
				<div class="rounded-xl border border-[#1A1A1A]/10 bg-white/80 p-3 sm:p-4">
					<div class="flex items-center gap-2">
						{#if skillIcons[skill.slug]}
							<span class="flex h-8 w-8 shrink-0 items-center justify-center" aria-hidden="true">
								<img
									src={skillIcons[skill.slug].src}
									alt={skillIcons[skill.slug].alt}
									class="h-full w-full object-contain"
									loading="lazy"
								/>
							</span>
						{:else}
							<span
								class="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-[#1A1A1A]/5 text-xs font-semibold uppercase text-[#1A1A1A]"
							>
								{skill.slug.slice(0, 2)}
							</span>
						{/if}
						<span class="text-xs font-semibold uppercase text-[#1A1A1A]">{skill.slug}</span>
					</div>
				</div>
			{/each}
		</div>

		{#if showNetworkMap}
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
							{#if skillIcons[skill.slug]}
								<span class="flex h-10 w-10 shrink-0 items-center justify-center" aria-hidden="true">
									<img
										src={skillIcons[skill.slug].src}
										alt={skillIcons[skill.slug].alt}
										class="h-full w-full object-contain"
										loading="lazy"
									/>
								</span>
							{:else}
								<span
									class="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-white/10 text-sm font-semibold uppercase"
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
		{/if}
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
