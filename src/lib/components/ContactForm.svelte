<script lang="ts">
	import { enhance } from '$app/forms';

	type Field = 'name' | 'email' | 'message' | '';

	let {
		formAction = '/contact?/send'
	}: {
		formAction?: string;
	} = $props();

	let name = $state('');
	let email = $state('');
	let message = $state('');
	let submitting = $state(false);
	let success = $state(false);
	let error = $state('');
	let fieldError = $state<Field>('');

	const inputClass =
		'w-full rounded-lg border border-[#EEEEEE]/10 bg-[#EEEEEE]/5 px-4 py-3 text-[#EEEEEE] placeholder:text-[#EEEEEE]/40 transition-colors focus:border-accent-purple/50 focus:outline-none focus:ring-2 focus:ring-accent-purple/20';
</script>

<form
	method="POST"
	action={formAction}
	use:enhance={() => {
		submitting = true;
		success = false;
		error = '';
		fieldError = '';

		return async ({ result, update }) => {
			if (result.type === 'success' && result.data?.success) {
				success = true;
				name = '';
				email = '';
				message = '';
				submitting = false;
				await update({ reset: false });
				return;
			}

			await update({ reset: false });

			if (result.type === 'failure' && result.data) {
				const data = result.data as {
					error?: string;
					field?: Field;
					values?: { name: string; email: string; message: string };
				};

				error = data.error ?? 'Something went wrong. Please try again.';
				fieldError = data.field ?? '';
				name = data.values?.name ?? name;
				email = data.values?.email ?? email;
				message = data.values?.message ?? message;
			} else {
				error = 'Something went wrong. Please try again.';
			}

			submitting = false;
		};
	}}
	class="space-y-5"
>
	<div>
		<label for="contact-name" class="mb-2 block text-sm font-medium text-[#EEEEEE]/80">Name</label>
		<input
			id="contact-name"
			name="name"
			type="text"
			autocomplete="name"
			required
			maxlength="100"
			bind:value={name}
			class="{inputClass} {fieldError === 'name' ? 'border-red-400/60' : ''}"
			placeholder="Your name"
		/>
	</div>

	<div>
		<label for="contact-email" class="mb-2 block text-sm font-medium text-[#EEEEEE]/80">Email</label>
		<input
			id="contact-email"
			name="email"
			type="email"
			autocomplete="email"
			required
			bind:value={email}
			class="{inputClass} {fieldError === 'email' ? 'border-red-400/60' : ''}"
			placeholder="you@example.com"
		/>
	</div>

	<div>
		<label for="contact-message" class="mb-2 block text-sm font-medium text-[#EEEEEE]/80">Message</label>
		<textarea
			id="contact-message"
			name="message"
			required
			minlength="10"
			maxlength="5000"
			rows="5"
			bind:value={message}
			class="{inputClass} resize-y {fieldError === 'message' ? 'border-red-400/60' : ''}"
			placeholder="Tell me about your project or say hello..."
		></textarea>
	</div>

	{#if error}
		<p class="text-sm text-red-400" role="alert">{error}</p>
	{/if}

	{#if success}
		<p class="text-sm text-emerald-400" role="status">
			Thanks for reaching out!
		</p>
	{/if}

	<button
		type="submit"
		disabled={submitting}
		class="rounded-lg bg-gradient-to-br from-accent-purple to-[#5a3d9e] px-6 py-3 text-sm font-semibold text-[#EEEEEE] shadow-[0_4px_20px_rgba(124,92,191,0.35)] transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
	>
		{submitting ? 'Sending...' : 'Send message'}
	</button>
</form>
