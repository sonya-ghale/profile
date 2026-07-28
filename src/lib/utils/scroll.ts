import { goto } from '$app/navigation';
import { tick } from 'svelte';

function getSectionHash(href: string): string {
	const hashIndex = href.indexOf('#');
	if (hashIndex === -1) return '';
	return href.slice(hashIndex);
}

function scrollToHash(hash: string) {
	if (!hash) return;
	document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
}

export async function scrollToSection(event: MouseEvent, href: string) {
	const hash = getSectionHash(href);
	if (!hash) return;

	event.preventDefault();

	if (window.location.pathname === '/') {
		scrollToHash(hash);
		return;
	}

	await goto('/', { hash: hash.slice(1) });
	await tick();
	scrollToHash(hash);
}
