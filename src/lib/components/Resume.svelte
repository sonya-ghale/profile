<script lang="ts">
	import cvPdf from '$lib/assets/curriculum_vitae/Soniya_Ghale_CV.pdf';

	const education = [
		{
			year: '2025',
			degree: 'Bachelors',
			institution: 'Completed',
			details: 'Finished Bachelor in Computer Application with a focus on software development and web technologies.'
		}
	];

	const certifications = [
		"Frontend Developer Internship in Maharudra",
		"Full Stack Development Internship in GLC Education",
		"React Training Program Completion Certificate"
	];
</script>

<section id="resume" class="bg-[#EEEEEE] py-16 text-[#1A1A1A] sm:py-20 md:py-24">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 md:px-10">
		<div class="mb-10 flex flex-wrap items-end justify-between gap-4 sm:mb-12 sm:gap-6">
			<div>
				<h2 class="font-display text-3xl font-bold sm:text-4xl">Resume</h2>
				<p class="mt-2 text-lg text-[#1A1A1A]/60">Education, certification, and curriculum vitae</p>
			</div>
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
					<h3 class="mb-5 text-xl font-bold">Certifications</h3>
					<div class="flex flex-wrap gap-2">
						{#each certifications as certification}
							<span class="rounded-full bg-[#1A1A1A]/5 px-3 py-1.5 text-sm font-medium text-[#1A1A1A]/80">
								{certification}
							</span>
						{/each}
					</div>
				</div>
			</div>

			<div class="rounded-2xl border border-[#1A1A1A]/10 bg-white/70 p-4 sm:p-6 md:p-8">
				<div class="mb-4 flex flex-wrap items-center justify-between gap-3">
					<h3 class="text-xl font-bold">Curriculum Vitae</h3>
					<a
						href={cvPdf}
						download="Soniya_Ghale_CV.pdf"
						class="inline-flex items-center gap-2 rounded-lg border border-[#1A1A1A]/15 bg-[#1A1A1A]/5 px-4 py-2 text-sm font-semibold text-[#1A1A1A] no-underline transition-colors hover:bg-[#1A1A1A]/10"
					>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4">
							<path
								d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z"
							/>
							<path
								d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z"
							/>
						</svg>
						Download
					</a>
				</div>

				<div class="overflow-hidden rounded-xl  bg-[#1A1A1A]/5">
					<iframe
						src="{cvPdf}#toolbar=0&navpanes=0"
						title="Soniya Ghale curriculum vitae"
						class="h-[28rem] w-full sm:h-[36rem] md:h-[39rem]"
					></iframe>
				</div>

				<p class="mt-3 text-center text-sm text-[#1A1A1A]/50">
					Can't see the preview?
					<a href={cvPdf} target="_blank" rel="noopener noreferrer" class="text-[#7c5cbf] underline">
						Open PDF in a new tab
					</a>
				</p>
			</div>
		</div>
	</div>
</section>
