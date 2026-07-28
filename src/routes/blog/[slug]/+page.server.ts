import { error } from '@sveltejs/kit';
import { getBlogBySlug } from '$lib/blogs';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) => {
	const blog = getBlogBySlug(params.slug);

	if (!blog) {
		error(404, 'Blog not found');
	}

	return { blog };
};
