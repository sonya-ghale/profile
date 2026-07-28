<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import BlogContent from '$lib/components/BlogContent.svelte';

	let { data } = $props();
	const blog = $derived(data.blog!);
</script>

<svelte:head>
	<title>{blog.title} — Soniya</title>
</svelte:head>

<Navbar />

<main class="min-h-screen bg-[#EEEEEE] pt-32 sm:pt-28">
	<article class="mx-auto max-w-3xl px-4 pb-10 sm:px-6 sm:pb-12 md:px-8">
		<a
			href="/#blogs"
			class="mb-4 inline-flex items-center gap-2 text-sm font-medium text-[#1A1A1A]/60 no-underline transition-colors hover:text-accent-purple"
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4">
				<path
					fill-rule="evenodd"
					d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
					clip-rule="evenodd"
				/>
			</svg>
			Back to Home
		</a>

		<header class="mb-6">
			<h1 class="font-display text-3xl font-bold sm:text-4xl md:text-5xl">{blog.title}</h1>
			<div class="mt-3 flex flex-wrap gap-2">
				{#each blog.tags as tag}
					<span class="rounded-md bg-accent-purple/15 px-2.5 py-1 text-xs font-medium text-accent-purple">
						{tag}
					</span>
				{/each}
			</div>
		</header>

		<div class="text-base leading-relaxed text-[#1A1A1A]/80 sm:text-lg">
			{#if blog.content}
				<BlogContent content={blog.content} />
			{:else}
				<div class="space-y-6">
					{#each blog.description as paragraph}
						<p>{paragraph}</p>
					{/each}
				</div>
			{/if}
		</div>
	</article>
</main>

<Footer />
