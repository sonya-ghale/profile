export type ContactPayload = {
	name: string;
	email: string;
	message: string;
};

export type ContactValidationError = {
	field: keyof ContactPayload;
	message: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function parseContactFormData(formData: FormData):
	| { ok: true; value: ContactPayload }
	| { ok: false; error: ContactValidationError } {
	return validateContactPayload({
		name: formData.get('name'),
		email: formData.get('email'),
		message: formData.get('message')
	});
}

export function validateContactPayload(data: unknown):
	| { ok: true; value: ContactPayload }
	| { ok: false; error: ContactValidationError } {
	if (!data || typeof data !== 'object') {
		return { ok: false, error: { field: 'name', message: 'Invalid form data.' } };
	}

	const { name, email, message } = data as Record<string, unknown>;

	if (typeof name !== 'string' || !name.trim()) {
		return { ok: false, error: { field: 'name', message: 'Name is required.' } };
	}

	if (name.trim().length > 100) {
		return { ok: false, error: { field: 'name', message: 'Name must be 100 characters or fewer.' } };
	}

	if (typeof email !== 'string' || !email.trim()) {
		return { ok: false, error: { field: 'email', message: 'Email is required.' } };
	}

	if (!EMAIL_PATTERN.test(email.trim())) {
		return { ok: false, error: { field: 'email', message: 'Enter a valid email address.' } };
	}

	if (typeof message !== 'string' || !message.trim()) {
		return { ok: false, error: { field: 'message', message: 'Message is required.' } };
	}

	if (message.trim().length < 10) {
		return {
			ok: false,
			error: { field: 'message', message: 'Message must be at least 10 characters.' }
		};
	}

	if (message.trim().length > 5000) {
		return {
			ok: false,
			error: { field: 'message', message: 'Message must be 5000 characters or fewer.' }
		};
	}

	return {
		ok: true,
		value: {
			name: name.trim(),
			email: email.trim(),
			message: message.trim()
		}
	};
}

function escapeHtml(value: string): string {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&#39;');
}

export async function sendContactEmail(
	payload: ContactPayload,
	options: { apiKey: string; to: string; from: string }
): Promise<void> {
	const subject = `Portfolio contact from ${payload.name}`;
	const text = [
		`Name: ${payload.name}`,
		`Email: ${payload.email}`,
		'',
		payload.message
	].join('\n');

	const html = `
		<p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
		<p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
		<p><strong>Message:</strong></p>
		<p>${escapeHtml(payload.message).replaceAll('\n', '<br />')}</p>
	`.trim();

	const response = await fetch('https://api.resend.com/emails', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${options.apiKey}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			from: options.from,
			to: [options.to],
			reply_to: payload.email,
			subject,
			html,
			text
		})
	});

	if (!response.ok) {
		const body = await response.text().catch(() => '');
		throw new Error(`Email provider error (${response.status}): ${body || response.statusText}`);
	}
}
