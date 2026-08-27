<script>
	import Icon from './Icon.svelte';

	export let icon = '';
	export let title = '';
	export let description = '';
	export let linkText = '';
	export let linkHref = '';
</script>

<div class="feature-card">
	{#if icon}
		<div class="feature-card__icon"><Icon name={icon} size={30} /></div>
	{/if}
	{#if title}
		<h3 class="feature-card__title">{title}</h3>
	{/if}
	{#if description}
		<p class="feature-card__description">{description}</p>
	{/if}
	{#if linkText && linkHref}
		<a href={linkHref} class="feature-card__link">
			{linkText} →
		</a>
	{/if}
	<slot />
</div>

<style>
	.feature-card {
		height: 100%;
		display: flex;
		flex-direction: column;
		padding-top: var(--space-lg);
		border-top: 2px solid var(--color-terracotta);
	}

	.feature-card__icon {
		margin-bottom: var(--space-md);
	}

	.feature-card__title {
		font-size: var(--text-xl);
		font-weight: 600;
		color: var(--color-text-primary);
		margin-bottom: var(--space-sm);
	}

	.feature-card__description {
		color: var(--color-text-secondary);
		line-height: 1.7;
		flex-grow: 1;
		margin-bottom: var(--space-md);
	}

	.feature-card__link {
		color: var(--color-accent);
		font-weight: 600;
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		gap: var(--space-xs);
		transition: gap var(--transition-fast);
	}

	.feature-card__link:hover {
		gap: var(--space-sm);
		text-decoration: none;
	}
</style>
