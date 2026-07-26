<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import GitHubActivity from '$lib/components/GitHubActivity.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Resume from '$lib/components/Resume.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Soniya — Developer Portfolio</title>
</svelte:head>

<Navbar />

<main class="bg-[--color-foreground] overflow-x-hidden">
	<Hero />
	<Skills />
	<Experience />
	<GitHubActivity github={data.github} githubError={data.githubError} />
	<Resume />
	<Contact />
</main>

<Footer />
