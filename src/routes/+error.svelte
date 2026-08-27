<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Seite nicht gefunden - Kindertagespflege Hummelgarten</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<div class="error-page">
	<div class="error-content">
		<img src="/Hummel.svg" alt="" class="error-icon" width="72" height="72" />
		<h1>
			{#if $page.status === 404}
				Diese Seite gibt es hier nicht
			{:else}
				Etwas ist schiefgelaufen
			{/if}
		</h1>
		<p>
			{#if $page.status === 404}
				Der Hummelgarten ist an dieser Adresse leider nicht zu finden. Vielleicht hilft einer der
				folgenden Wege weiter.
			{:else}
				Bitte versuchen Sie es später erneut oder kehren Sie zur Startseite zurück.
			{/if}
		</p>
		<div class="error-actions">
			<a href="/" class="button">Zur Startseite</a>
			<a href="/kontakt" class="button button--secondary">Kontakt aufnehmen</a>
		</div>
	</div>
</div>

<style>
	.error-page {
		min-height: 60dvh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: var(--space-4xl) var(--space-lg);
		background-color: var(--color-background);
	}

	.error-content {
		max-width: 480px;
		text-align: center;
	}

	.error-icon {
		display: inline-block;
		width: 72px;
		height: 72px;
		margin-bottom: var(--space-lg);
	}

	.error-content h1 {
		font-size: var(--text-3xl);
		margin-bottom: var(--space-md);
	}

	.error-content p {
		color: var(--color-text-secondary);
		font-size: var(--text-lg);
		line-height: 1.7;
		margin-bottom: var(--space-2xl);
	}

	.error-actions {
		display: flex;
		gap: var(--space-md);
		justify-content: center;
		flex-wrap: wrap;
	}
</style>
