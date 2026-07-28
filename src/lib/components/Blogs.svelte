<script lang="ts">
	import SectionHeading from './SectionHeading.svelte';
	import { blogs, formatBlogDate } from '$lib/blogs';
</script>

<section id="blogs" class="section-padding scroll-mt-16 bg-[#1A1A1A] text-[#EEEEEE]">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
		<SectionHeading title="Blog" subtitle="Thoughts, tutorials, and notes" />
		<div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
			{#each blogs as blog}
				<a
					href="/blog/{blog.slug}"
					class="group flex flex-col rounded-xl border border-white/8 p-7 no-underline transition-colors hover:border-accent-purple/40"
				>
					<h3 class="mb-3 text-xl font-semibold text-[#EEEEEE] transition-colors group-hover:text-accent-purple">
						{blog.title}
					</h3>
					<div class="mb-4 space-y-1 text-sm text-[#EEEEEE]/60">
						<p>Written {formatBlogDate(blog.writtenAt)}</p>
						{#if blog.updatedAt !== blog.writtenAt}
							<p>Updated {formatBlogDate(blog.updatedAt)}</p>
						{/if}
					</div>
					<p class="mb-4 line-clamp-3 text-sm leading-relaxed text-[#EEEEEE]/70">
						{blog.description[0]}
					</p>
					<div class="flex flex-wrap gap-2">
						{#each blog.tags as tag}
							<span class="rounded-md bg-accent-purple/20 px-2.5 py-1 text-xs text-accent">
								{tag}
							</span>
						{/each}
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>
