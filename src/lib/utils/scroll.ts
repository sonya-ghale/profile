export function scrollToSection(event: MouseEvent, href: string) {
	event.preventDefault();
	document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
}
