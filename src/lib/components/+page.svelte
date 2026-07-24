<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import GitHubActivity from '$lib/components/GitHubActivity.svelte';
	import Resume from '$lib/components/Resume.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Soniya — Developer Portfolio</title>
</svelte:head>

<Navbar />

<main class="bg-[--color-foreground]">
	<Hero />
	<Skills />
	<GitHubActivity github={data.github} />
	<Resume />
	<Contact />
</main>

<Footer />
