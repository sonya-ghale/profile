import { defineEnvVars } from '@sveltejs/kit/env';
import type { StandardSchemaV1 } from '@standard-schema/spec';

const optionalString = (): StandardSchemaV1<string | undefined, string | undefined> => ({
	'~standard': {
		version: 1,
		vendor: 'dev-profile',
		validate(value) {
			if (value === undefined || value === '') {
				return { value: undefined };
			}

			if (typeof value !== 'string') {
				return { issues: [{ message: 'Must be a string' }] };
			}

			return { value };
		}
	}
});

export const variables = defineEnvVars({
	GITHUB_TOKEN: {
		description: 'Optional GitHub personal access token for higher API rate limits',
		schema: optionalString()
	},
	RESEND_API_KEY: {
		description: 'Resend API key for contact form emails',
		schema: optionalString()
	},
	CONTACT_TO_EMAIL: {
		description: 'Inbox that receives contact form submissions',
		schema: optionalString()
	},
	CONTACT_FROM_EMAIL: {
		description: 'Sender shown on contact emails, e.g. Portfolio <hello@yourdomain.com>',
		schema: optionalString()
	}
});
