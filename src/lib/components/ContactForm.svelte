<script context="module" lang="ts">
	import { fade } from 'svelte/transition';
</script>

<script lang="ts">
	let formData = {
		name: '',
		email: '',
		phone: '',
		message: ''
	};

	let sending = false;
	let success = false;
	let error = '';

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
					phone: formData.phone,
					message: formData.message,
					subject: 'Neue Kontaktanfrage - Kindertagespflege Hummelgarten'
				})
			});

			const result = await response.json();

			if (result.success) {
				success = true;
				formData = { name: '', email: '', phone: '', message: '' };
				setTimeout(() => {
					success = false;
				}, 5000);
			} else {
				error = 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später.';
			}
		} catch (err) {
			error = 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später.';
		} finally {
			sending = false;
		}
	};

	// Form validation
	$: isFormValid =
		formData.name.trim() !== '' &&
		formData.email.trim() !== '' &&
		/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
		formData.message.trim() !== '';
</script>

<div class="zen-contact-container">
	<div class="zen-contact-wrapper">
		<div class="zen-contact-header">
			<h1>Kontakt</h1>
			<p>
				Ich freue mich über eure Nachricht. Nehmt euch einen Moment Zeit, um mich zu kontaktieren.
				Ich antworte euch so bald wie möglich.
			</p>
		</div>
		<form on:submit={handleSubmit} class="zen-contact-form">
			{#if success}
				<div class="zen-success-message" transition:fade>
					<div class="zen-success-icon">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
							<polyline points="22 4 12 14.01 9 11.01"></polyline>
						</svg>
					</div>
					<p>Eure Nachricht wurde erfolgreich gesendet. Ich melde mich bald.</p>
				</div>
			{/if}

			{#if error}
				<div class="zen-error-message" transition:fade>
					<p>{error}</p>
				</div>
			{/if}

			<div class="zen-form-grid">
				<div class="zen-form-group">
					<label for="name">Name</label>
					<input
						type="text"
						id="name"
						bind:value={formData.name}
						required
						placeholder="Wie möchtet ihr genannt werden?"
						disabled={sending}
					/>
				</div>

				<div class="zen-form-group">
					<label for="email">E-Mail</label>
					<input
						type="email"
						id="email"
						bind:value={formData.email}
						required
						placeholder="Eure Kontakt-E-Mail"
						disabled={sending}
					/>
				</div>

				<div class="zen-form-group zen-form-group-full">
					<label for="phone">Telefon <span class="zen-optional">(optional)</span></label>
					<input
						type="tel"
						id="phone"
						bind:value={formData.phone}
						placeholder="Vorwahl und Nummer"
						disabled={sending}
					/>
				</div>

				<div class="zen-form-group zen-form-group-full">
					<label for="message">Ihre Nachricht</label>
					<textarea
						id="message"
						bind:value={formData.message}
						required
						rows="5"
						placeholder="Was möchtet ihr uns mitteilen?"
						disabled={sending}
					></textarea>
				</div>
			</div>

			<div class="zen-submit-container">
				<button type="submit" disabled={sending || !isFormValid} class="zen-submit-button">
					{#if sending}
						<span class="zen-loading-spinner"></span>
						Wird gesendet
					{:else}
						Nachricht senden
					{/if}
				</button>
			</div>
		</form>
	</div>
</div>

<style>
	.zen-contact-container {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100dvh;
		padding: var(--space-2xl) var(--space-md);
		box-sizing: border-box;
		background-color: var(--color-background);
	}

	.zen-contact-wrapper {
		width: 100%;
		max-width: 800px;
		background-color: var(--color-surface);
		border-radius: var(--radius-xl);
		box-shadow: var(--shadow-lg);
		padding: var(--space-4xl);
		transition: box-shadow var(--transition-base);
	}

	.zen-contact-header {
		text-align: center;
		margin-bottom: var(--space-2xl);
	}

	.zen-contact-header h1 {
		font-size: var(--text-4xl);
		color: var(--color-text-primary);
		margin-bottom: var(--space-md);
		font-weight: 400;
	}

	.zen-contact-header p {
		color: var(--color-text-secondary);
		font-size: var(--text-lg);
		max-width: 500px;
		margin: 0 auto;
		line-height: 1.6;
	}

	.zen-form-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
	}

	.zen-form-group {
		display: flex;
		flex-direction: column;
	}

	.zen-form-group-full {
		grid-column: span 2;
	}

	label {
		margin-bottom: var(--space-sm);
		color: var(--color-text-primary);
		font-weight: 600;
		font-size: var(--text-sm);
	}

	.zen-optional {
		color: var(--color-text-secondary);
		font-size: var(--text-xs);
		margin-left: var(--space-xs);
		font-weight: 400;
	}

	input,
	textarea {
		width: 100%;
		padding: var(--space-md);
		border: 1px solid var(--color-sand);
		border-radius: var(--radius-md);
		font-size: var(--text-base);
		background-color: var(--color-cream);
		transition: border-color var(--transition-base), box-shadow var(--transition-base), background-color var(--transition-base);
		font-family: inherit;
		color: var(--color-text-primary);
	}

	input:focus,
	textarea:focus {
		outline: none;
		border-color: var(--color-accent);
		box-shadow: var(--focus-ring);
		background-color: var(--color-warm-white);
	}

	textarea {
		resize: vertical;
		min-height: 150px;
	}

	.zen-submit-container {
		margin-top: 2rem;
		display: flex;
		justify-content: center;
	}

	.zen-submit-button {
		background-color: #3498db;
		color: white;
		border: none;
		padding: 1rem 3rem;
		border-radius: 2rem;
		font-size: 1rem;
		font-weight: 500;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
		transition: all 0.3s ease;
		box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
	}

	.zen-submit-button:hover:not(:disabled) {
		background-color: #2980b9;
		transform: translateY(-2px);
		box-shadow: 0 7px 20px rgba(52, 152, 219, 0.4);
	}

	.zen-submit-button:disabled {
		background-color: #bdc3c7;
		cursor: not-allowed;
		box-shadow: none;
	}

	.zen-loading-spinner {
		width: 1.25rem;
		height: 1.25rem;
		border: 3px solid rgba(255, 255, 255, 0.3);
		border-top-color: white;
		border-radius: 50%;
		animation: spin 0.8s linear infinite;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}

	.zen-success-message {
		background-color: #e8f5e9;
		color: #2e7d32;
		padding: 1.5rem;
		border-radius: 1rem;
		display: flex;
		align-items: center;
		gap: 1.5rem;
		margin-bottom: 2rem;
	}

	.zen-success-icon {
		width: 3rem;
		height: 3rem;
		background-color: #2e7d32;
		color: white;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.zen-success-icon svg {
		width: 1.5rem;
		height: 1.5rem;
		stroke: white;
	}

	.zen-error-message {
		background-color: #ffebee;
		color: #d32f2f;
		padding: 1.5rem;
		border-radius: 1rem;
		margin-bottom: 2rem;
		text-align: center;
	}

	@media (max-width: 768px) {
		.zen-contact-wrapper {
			padding: 2rem;
		}

		.zen-form-grid {
			grid-template-columns: 1fr;
		}

		.zen-form-group-full {
			grid-column: span 1;
		}

		.zen-contact-header h1 {
			font-size: 2rem;
		}
	}

	@media (max-width: 480px) {
		.zen-contact-container {
			padding: 1rem;
		}

		.zen-contact-wrapper {
			padding: 1.5rem;
		}
	}
</style>
