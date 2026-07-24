<script lang="ts">
	const education = [
		{
			year: '2025',
			degree: 'Formal Education',
			institution: 'Completed',
			details: 'Finished formal education with a focus on software development and web technologies.'
		}
	];

	const experience = [
		{
			period: '2025 — Present',
			role: 'Full-Stack Developer',
			company: 'Hinomaru Technology',
			points: [
				'Build and ship full-stack features across the product.',
				'Progressed from frontend development into mid-level full-stack work.'
			]
		},
		{
			period: '2025',
			role: 'Frontend Developer',
			company: 'Hinomaru Technology',
			points: ['Joined as a Frontend Developer and contributed to production UI features.']
		},
		{
			period: '2024',
			role: 'Frontend Developer Intern',
			company: 'Maharudra',
			points: ['Built responsive interfaces and collaborated on client-facing web experiences.']
		},
		{
			period: '2024',
			role: 'Full Stack Development Intern',
			company: 'GLC Education',
			points: ['Gained hands-on experience across frontend, backend, and project delivery.']
		}
	];

	const skills = [
		'JavaScript',
		'TypeScript',
		'Svelte',
		'React',
		'Python',
		'Django',
		'HTML',
		'CSS',
		'Git',
		'MongoDB'
	];
</script>

<section id="resume" class="scroll-mt-16 bg-[#EEEEEE] py-20 text-[#1A1A1A] md:py-24">
	<div class="mx-auto max-w-6xl px-6 md:px-10">
		<div class="mb-12 flex flex-wrap items-end justify-between gap-6">
			<div>
				<h2 class="font-display text-4xl font-bold">Resume</h2>
				<p class="mt-2 text-lg text-[#1A1A1A]/60">Education, experience, and core skills</p>
			</div>
			<a
				href="/resume.pdf"
				download
				class="inline-flex items-center gap-2 rounded-lg bg-[#1A1A1A] px-5 py-3 text-sm font-semibold text-[#EEEEEE] no-underline transition-colors hover:bg-[#2a2a2a]"
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4">
					<path
						d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z"
					/>
					<path
						d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z"
					/>
				</svg>
				Download PDF
			</a>
		</div>

		<div class="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
			<div class="space-y-8">
				<div class="rounded-2xl border border-[#1A1A1A]/10 bg-white/70 p-6 md:p-8">
					<h3 class="mb-5 text-xl font-bold">Education</h3>
					{#each education as item}
						<div class="border-l-2 border-[#7c5cbf]/40 pl-5">
							<p class="text-sm font-medium text-[#7c5cbf]">{item.year}</p>
							<h4 class="mt-1 text-lg font-semibold">{item.degree}</h4>
							<p class="text-sm text-[#1A1A1A]/70">{item.institution}</p>
							<p class="mt-2 text-sm leading-relaxed text-[#1A1A1A]/60">{item.details}</p>
						</div>
					{/each}
				</div>

				<div class="rounded-2xl border border-[#1A1A1A]/10 bg-white/70 p-6 md:p-8">
					<h3 class="mb-5 text-xl font-bold">Core Skills</h3>
					<div class="flex flex-wrap gap-2">
						{#each skills as skill}
							<span class="rounded-full bg-[#1A1A1A]/5 px-3 py-1.5 text-sm font-medium text-[#1A1A1A]/80">
								{skill}
							</span>
						{/each}
					</div>
				</div>
			</div>

			<div class="rounded-2xl border border-[#1A1A1A]/10 bg-white/70 p-6 md:p-8">
				<h3 class="mb-6 text-xl font-bold">Work Experience</h3>
				<div class="space-y-8">
					{#each experience as item}
						<div class="border-b border-[#1A1A1A]/10 pb-8 last:border-b-0 last:pb-0">
							<div class="mb-3 flex flex-wrap items-baseline justify-between gap-2">
								<h4 class="text-lg font-semibold">{item.role}</h4>
								<span class="text-sm text-[#1A1A1A]/50">{item.period}</span>
							</div>
							<p class="mb-3 text-sm font-medium text-[#7c5cbf]">{item.company}</p>
							<ul class="space-y-2">
								{#each item.points as point}
									<li class="flex gap-2 text-sm leading-relaxed text-[#1A1A1A]/65">
										<span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#7c5cbf]"></span>
										<span>{point}</span>
									</li>
								{/each}
							</ul>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
