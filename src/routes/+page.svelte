<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Resume from '$lib/components/Resume.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Sonia — Developer Portfolio</title>
</svelte:head>

<Navbar />

<main>
	<Hero />
	<Skills />
	<Projects />
	<Resume />
	<Contact />
</main>

<Footer />
