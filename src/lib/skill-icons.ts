import svelteLogo from '$lib/assets/svelte.jpg';
import vscodeLogo from '$lib/assets/vscide.jpeg';
import canvaLogo from '$lib/assets/canva.svg';
import clipStudioLogo from '$lib/assets/clip-studio.png'; 
import figmaLogo from '$lib/assets/figma.png';

import {
	siCursor,
	siHtml5,
	siGithub,
	siJavascript,
	siTailwindcss,
	siPython,
	siReact,
	siDjango,
	siMongodb,
	siCss,
	siGodotengine,
	type SimpleIcon,
} from 'simple-icons';

export type SkillIcon = {
	src: string;
	alt: string;
};

function svgDataUrl(icon: SimpleIcon): string {
	const svg = `<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"><path fill="#${icon.hex}" d="${icon.path}"/></svg>`;
	return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export const skillIcons: Record<string, SkillIcon> = {
	svelte: { src: svelteLogo, alt: 'Svelte' },
	javascript: { src: svgDataUrl(siJavascript), alt: 'JavaScript' },
	react: { src: svgDataUrl(siReact), alt: 'React' },
	python: { src: svgDataUrl(siPython), alt: 'Python' },
	django: { src: svgDataUrl(siDjango), alt: 'Django' },
	vscode: { src: vscodeLogo, alt: 'Visual Studio Code' },
	cursor: { src: svgDataUrl(siCursor), alt: 'Cursor' },
	github: { src: svgDataUrl(siGithub), alt: 'GitHub' },
	mongodb: { src: svgDataUrl(siMongodb), alt: 'MongoDB' },
	html: { src: svgDataUrl(siHtml5), alt: 'HTML5' },
	css: { src: svgDataUrl(siCss), alt: 'CSS3' },
	godot: { src: svgDataUrl(siGodotengine), alt: 'Godot Engine' },
	figma: { src: figmaLogo, alt: 'Figma' },
	canva: { src: canvaLogo, alt: 'Canva' },
	'clip-studio': { src: clipStudioLogo, alt: 'Clip Studio Paint' },
	'tailwind-css': { src: svgDataUrl(siTailwindcss), alt: 'Tailwind CSS' }
};
