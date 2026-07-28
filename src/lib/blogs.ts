import buildingResponsiveWebsite from '$lib/blog-content/building-responsive-website.md?raw';
import svelteReact from '$lib/blog-content/svelte-react.md?raw';
import whatILearnedUsingReact from '$lib/blog-content/what-i-learned-using-react.md?raw';

export type Blog = {
	slug: string;
	title: string;
	writtenAt: string;
	updatedAt: string;
	tags: string[];
	description: string[];
	content?: string;
};

export const blogs: Blog[] = [
	{
		slug: 'what-i-learned-using-react',
		title: 'What I Learned Using React',
		writtenAt: '2026-07-20',
		updatedAt: '2026-07-28',
		tags: ['React', 'JavaScript', 'Frontend', 'Web Development'],
		description: [
			'When I first started building frontend projects, I used to write everything as one long HTML file with a pile of JavaScript stitched underneath it. It worked — until it didn\'t. That\'s when I started learning React, and it changed the way I think about building UIs.'
		],
		content: whatILearnedUsingReact
	},
	{
		slug: 'svelte-react',
		title: 'React vs Svelte',
		writtenAt: '2026-06-15',
		updatedAt: '2026-07-28',
		tags: ['React', 'Svelte', 'Web Development', 'Comparison'],
		description: [
			'After spending real time building with both React and Svelte, the difference that stands out most isn\'t features — it\'s philosophy. React asks you to build your UI through JavaScript, while Svelte compiles your markup into optimized vanilla JavaScript at build time.'
		],
		content: svelteReact
	},
	{
		slug: 'building-responsive-website',
		title: 'Building Responsive Interfaces',
		writtenAt: '2026-03-01',
		updatedAt: '2026-07-28',
		tags: ['CSS', 'Tailwind', 'UI Design', 'Responsive Design'],
		description: [
			'For the longest time, "responsive design" meant one thing to me: adding a pile of media queries at the bottom of my stylesheet and hoping for the best. The shift happened when I stopped thinking about screen sizes and started thinking about content.'
		],
		content: buildingResponsiveWebsite
	}
];

export function getBlogBySlug(slug: string): Blog | undefined {
	return blogs.find((blog) => blog.slug === slug);
}

export function formatBlogDate(date: string): string {
	return new Date(date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}
