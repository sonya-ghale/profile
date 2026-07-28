<script lang="ts">
	let {
		title,
		subtitle,
		variant = 'dark'
	}: { title: string; subtitle: string; variant?: 'light' | 'dark' } = $props();
</script>

<h2 class="font-display text-3xl sm:text-4xl {variant === 'light' ? 'text-[#1A1A1A]' : 'text-[#EEEEEE]'}">
	{title}
</h2>
<p class="mb-8 text-base sm:mb-10 sm:text-lg {variant === 'light' ? 'text-[#1A1A1A]/60' : 'text-[#EEEEEE]/60'}">
	{subtitle}
</p>
