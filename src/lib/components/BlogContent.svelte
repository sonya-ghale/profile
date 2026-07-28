<script lang="ts">
	import { marked } from 'marked';

	let { content }: { content: string } = $props();

	const html = marked.parse(content, { async: false });
</script>

<div class="blog-content">
	{@html html}
</div>

<style>
	.blog-content :global(h1) {
		margin-top: 0;
		margin-bottom: 0.75rem;
		font-size: 1.5rem;
		font-weight: 700;
		color: #1a1a1a;
	}

	.blog-content :global(h1:first-child) {
		display: none;
	}

	.blog-content :global(h2) {
		margin-top: 1.5rem;
		margin-bottom: 0.5rem;
		font-size: 1.375rem;
		font-weight: 700;
		color: #1a1a1a;
	}

	.blog-content :global(h2:first-child) {
		margin-top: 0;
	}

	.blog-content :global(p) {
		margin-top: 0;
		margin-bottom: 0.875rem;
		line-height: 1.75;
	}

	.blog-content :global(p:first-child) {
		margin-top: 0;
	}

	.blog-content :global(hr) {
		margin: 1rem 0;
		border: none;
		border-top: 1px solid rgba(26, 26, 26, 0.1);
	}

	.blog-content :global(strong) {
		font-weight: 600;
		color: #1a1a1a;
	}

	.blog-content :global(em) {
		font-style: italic;
	}

	.blog-content :global(ul),
	.blog-content :global(ol) {
		margin-bottom: 1rem;
		padding-left: 1.5rem;
	}

	.blog-content :global(li) {
		margin-bottom: 0.35rem;
		line-height: 1.7;
	}

	.blog-content :global(code) {
		border-radius: 0.25rem;
		background-color: rgba(26, 26, 26, 0.08);
		padding: 0.125rem 0.375rem;
		font-family: ui-monospace, monospace;
		font-size: 0.875em;
	}

	.blog-content :global(pre) {
		margin-bottom: 1rem;
		overflow-x: auto;
		border-radius: 0.75rem;
		background-color: #1a1a1a;
		padding: 1rem 1.25rem;
	}

	.blog-content :global(pre code) {
		background: none;
		padding: 0;
		color: #eeeeee;
		font-size: 0.875rem;
		line-height: 1.6;
	}
</style>
