<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import Icon from './Icon.svelte';

	let open = false;
	let formData = { name: '', email: '', message: '' };
	let sending = false;
	let success = false;
	let error = '';

	const toggle = () => {
		open = !open;
		if (open) {
			success = false;
			error = '';
		}
	};

	const close = () => {
		open = false;
	};

	const handleKeydown = (event: KeyboardEvent) => {
		if (event.key === 'Escape' && open) close();
	};

	const handleSubmit = async (e: Event) => {
		e.preventDefault();
		sending = true;
		error = '';

		try {
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: JSON.stringify({
					access_key: '5db7104f-f776-48ef-9b9e-49e0dc278ffb', // TODO: Replace with your Web3Forms access key
					name: formData.name,
					email: formData.email,
					message: formData.message,
					subject: 'Neue Kontaktanfrage - Kindertagespflege Hummelgarten (Kurzformular)'
				})
			});

			const result = await response.json();

			if (result.success) {
				success = true;
				formData = { name: '', email: '', message: '' };
			} else {
				error = 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später.';
			}
		} catch {
			error = 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später.';
		} finally {
			sending = false;
		}
	};

	$: isFormValid =
		formData.name.trim() !== '' &&
		/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
		formData.message.trim() !== '';
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="floating-contact">
	{#if open}
		<div class="floating-contact__panel" transition:fly={{ y: 16, duration: 220 }}>
			<button class="floating-contact__close" on:click={close} aria-label="Schließen">
				<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<line x1="18" y1="6" x2="6" y2="18" />
					<line x1="6" y1="6" x2="18" y2="18" />
				</svg>
			</button>

			{#if success}
				<div class="floating-contact__success" transition:fade>
					<p>Ihre Nachricht wurde gesendet. Ich melde mich bald bei Ihnen.</p>
				</div>
			{:else}
				<h3 class="floating-contact__title">Kurz nachfragen</h3>
				<p class="floating-contact__subtitle">
					Eine schnelle Frage? Schreiben Sie mir direkt hier.
				</p>

				<form on:submit={handleSubmit} class="floating-contact__form">
					{#if error}
						<p class="floating-contact__error" transition:fade>{error}</p>
					{/if}

					<input
						type="text"
						bind:value={formData.name}
						placeholder="Ihr Name"
						required
						disabled={sending}
					/>
					<input
						type="email"
						bind:value={formData.email}
						placeholder="Ihre E-Mail"
						required
						disabled={sending}
					/>
					<textarea
						bind:value={formData.message}
						placeholder="Ihre Nachricht"
						rows="3"
						required
						disabled={sending}
					></textarea>

					<button type="submit" class="button" disabled={sending || !isFormValid}>
						{sending ? 'Wird gesendet …' : 'Senden'}
					</button>
				</form>

				<a href="/kontakt" class="floating-contact__link">Zum vollständigen Kontaktformular →</a>
			{/if}
		</div>
	{/if}

	<button
		class="floating-contact__trigger"
		class:is-open={open}
		on:click={toggle}
		aria-expanded={open}
		aria-label={open ? 'Kontaktformular schließen' : 'Kontakt aufnehmen'}
	>
		{#if open}
			<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<line x1="18" y1="6" x2="6" y2="18" />
				<line x1="6" y1="6" x2="18" y2="18" />
			</svg>
		{:else}
			<Icon name="mail" size={26} />
		{/if}
	</button>
</div>

<style>
	.floating-contact {
		position: fixed;
		right: var(--space-xl);
		bottom: var(--space-xl);
		z-index: 200;
	}

	.floating-contact__trigger {
		width: 64px;
		height: 64px;
		border-radius: 50%;
		background-color: var(--color-terracotta);
		color: var(--color-warm-white);
		border: none;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		box-shadow: var(--shadow-xl);
		transition: transform var(--transition-base), background-color var(--transition-base);
	}

	.floating-contact__trigger :global(.icon) {
		color: var(--color-warm-white);
	}

	.floating-contact__trigger:hover {
		transform: scale(1.06);
		background-color: var(--color-accent);
	}

	.floating-contact__trigger:active {
		transform: scale(0.96);
	}

	.floating-contact__trigger.is-open {
		background-color: var(--color-charcoal);
	}

	.floating-contact__panel {
		position: absolute;
		bottom: calc(64px + var(--space-md));
		right: 0;
		width: min(340px, calc(100vw - 2 * var(--space-xl)));
		background-color: var(--color-surface);
		border-radius: var(--radius-xl);
		box-shadow: var(--shadow-xl);
		padding: var(--space-xl);
	}

	.floating-contact__close {
		position: absolute;
		top: var(--space-md);
		right: var(--space-md);
		background: none;
		border: none;
		color: var(--color-text-secondary);
		cursor: pointer;
		padding: var(--space-xs);
		line-height: 1;
	}

	.floating-contact__title {
		font-size: var(--text-xl);
		margin-bottom: var(--space-xs);
		padding-right: var(--space-xl);
	}

	.floating-contact__subtitle {
		color: var(--color-text-secondary);
		font-size: var(--text-sm);
		margin-bottom: var(--space-lg);
	}

	.floating-contact__form {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
	}

	.floating-contact__form input,
	.floating-contact__form textarea {
		width: 100%;
		padding: var(--space-sm) var(--space-md);
		border: 1px solid var(--color-sand);
		border-radius: var(--radius-md);
		font-size: var(--text-sm);
		background-color: var(--color-cream);
		font-family: inherit;
		color: var(--color-text-primary);
		transition: border-color var(--transition-base), box-shadow var(--transition-base);
	}

	.floating-contact__form input:focus,
	.floating-contact__form textarea:focus {
		outline: none;
		border-color: var(--color-accent);
		box-shadow: var(--focus-ring);
		background-color: var(--color-warm-white);
	}

	.floating-contact__form textarea {
		resize: vertical;
		min-height: 4.5rem;
	}

	.floating-contact__form .button {
		margin-top: var(--space-xs);
		text-align: center;
		border: none;
		cursor: pointer;
	}

	.floating-contact__form .button:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	.floating-contact__link {
		display: block;
		text-align: center;
		font-size: var(--text-sm);
		margin-top: var(--space-lg);
		color: var(--color-text-secondary);
	}

	.floating-contact__error {
		font-size: var(--text-sm);
		color: var(--color-terracotta);
		margin: 0;
	}

	.floating-contact__success p {
		font-size: var(--text-base);
		color: var(--color-text-primary);
		line-height: 1.6;
		margin: var(--space-sm) 0 0;
		padding-right: var(--space-xl);
	}

	@media (max-width: 640px) {
		.floating-contact {
			right: var(--space-md);
			bottom: var(--space-md);
		}

		.floating-contact__trigger {
			width: 56px;
			height: 56px;
		}

		.floating-contact__panel {
			bottom: calc(56px + var(--space-md));
		}
	}
</style>
