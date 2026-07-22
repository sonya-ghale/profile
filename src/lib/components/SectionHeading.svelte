<script lang="ts">
	let { title, subtitle }: { title: string; subtitle: string } = $props();
</script>

<h2 class="font-display text-4xl text-foreground">{title}</h2>
<p class="mb-10 text-lg text-muted">{subtitle}</p>
