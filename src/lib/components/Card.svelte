<script>
	export let icon = '';
	export let title = '';
	export let description = '';
	export let linkText = '';
	export let linkHref = '';
</script>

<div class="feature-card">
	{#if icon}
		<div class="feature-card__icon">{icon}</div>
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
		background-color: var(--color-surface);
		border-radius: var(--radius-lg);
		padding: var(--space-2xl);
		box-shadow: var(--shadow-md);
		transition: all var(--transition-base);
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	
	.feature-card:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-lg);
	}
	
	.feature-card__icon {
		font-size: 3rem;
		margin-bottom: var(--space-lg);
		line-height: 1;
	}
	
	.feature-card__title {
		font-family: var(--font-primary);
		font-size: var(--text-xl);
		font-weight: 600;
		color: var(--color-text-primary);
		margin-bottom: var(--space-md);
	}
	
	.feature-card__description {
		color: var(--color-text-secondary);
		line-height: 1.7;
		flex-grow: 1;
		margin-bottom: var(--space-lg);
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