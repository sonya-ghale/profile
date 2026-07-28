import { CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL, RESEND_API_KEY } from '$app/env/private';
import { fail, type Actions } from '@sveltejs/kit';
import { parseContactFormData, sendContactEmail } from '$lib/server/contact';

export const actions = {
	send: async ({ request, platform }) => {
		const apiKey = RESEND_API_KEY?.trim() || platform?.env?.RESEND_API_KEY?.trim();
		const to = CONTACT_TO_EMAIL?.trim() || platform?.env?.CONTACT_TO_EMAIL?.trim();
		const from =
			CONTACT_FROM_EMAIL?.trim() ||
			platform?.env?.CONTACT_FROM_EMAIL?.trim() ||
			'Portfolio <onboarding@resend.dev>';

		if (!apiKey || !to) {
			console.error(
				'Contact form is not configured. Set RESEND_API_KEY and CONTACT_TO_EMAIL in .env (dev), .dev.vars (preview), or wrangler secrets (production).'
			);
			return fail(503, {
				error: 'Contact form is temporarily unavailable.',
				field: '',
				values: { name: '', email: '', message: '' }
			});
		}

		const formData = await request.formData();
		const validation = parseContactFormData(formData);

		if (!validation.ok) {
			return fail(400, {
				error: validation.error.message,
				field: validation.error.field,
				values: {
					name: String(formData.get('name') ?? ''),
					email: String(formData.get('email') ?? ''),
					message: String(formData.get('message') ?? '')
				}
			});
		}

		try {
			const sendPromise = sendContactEmail(validation.value, { apiKey, to, from });

			if (platform?.ctx?.waitUntil) {
				platform.ctx.waitUntil(sendPromise);
			} else {
				sendPromise.catch((error) => {
					const message = error instanceof Error ? error.message : String(error);
					console.error('Background contact email failed:', message);
				});
			}

			return {
				success: true as const,
				message: 'Message sent successfully!',
				error: '',
				field: '',
				values: { name: '', email: '', message: '' }
			};
		} catch (error) {
			const message = error instanceof Error ? error.message : String(error);
			console.error('Failed to send contact email:', message);
			return fail(500, {
				error: 'Failed to send your message. Please try again later.',
				field: '',
				values: {
					name: validation.value.name,
					email: validation.value.email,
					message: validation.value.message
				}
			});
		}
	}
} satisfies Actions;
