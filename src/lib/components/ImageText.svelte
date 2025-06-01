<script>
	export let imageUrl = '';
	export let imageAlt = '';
	export let title = '';
	export let reverse = false;
</script>

<div class="image-text" class:image-text--reverse={reverse}>
	{#if imageUrl}
		<div class="image-text__image-wrapper">
			<img src={imageUrl} alt={imageAlt} class="image-text__image" />
			<div class="image-text__decoration"></div>
		</div>
	{/if}
	<div class="image-text__content">
		{#if title}
			<h3 class="image-text__title">{title}</h3>
		{/if}
		<div class="image-text__text">
			<slot />
		</div>
	</div>
</div>

<style>
	.image-text {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-3xl);
		align-items: center;
	}
	
	.image-text--reverse {
		direction: rtl;
	}
	
	.image-text--reverse .image-text__content {
		direction: ltr;
	}
	
	.image-text__image-wrapper {
		position: relative;
	}
	
	.image-text__image {
		width: 100%;
		height: auto;
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-lg);
		position: relative;
		z-index: 2;
	}
	
	.image-text__decoration {
		position: absolute;
		top: var(--space-lg);
		left: var(--space-lg);
		right: calc(-1 * var(--space-lg));
		bottom: calc(-1 * var(--space-lg));
		background-color: var(--color-sand);
		border-radius: var(--radius-lg);
		z-index: 1;
		opacity: 0.3;
	}
	
	.image-text--reverse .image-text__decoration {
		left: calc(-1 * var(--space-lg));
		right: var(--space-lg);
	}
	
	.image-text__content {
		padding: var(--space-lg);
	}
	
	.image-text__title {
		font-family: var(--font-primary);
		font-size: var(--text-2xl);
		font-weight: 600;
		color: var(--color-text-primary);
		margin-bottom: var(--space-lg);
		position: relative;
	}
	
	.image-text__title::after {
		content: '';
		position: absolute;
		bottom: calc(-1 * var(--space-md));
		left: 0;
		width: 40px;
		height: 3px;
		background-color: var(--color-accent);
		border-radius: var(--radius-full);
	}
	
	.image-text__text {
		color: var(--color-text-secondary);
		line-height: 1.8;
	}
	
	.image-text__text :global(p:last-child) {
		margin-bottom: 0;
	}
	
	@media (max-width: 768px) {
		.image-text,
		.image-text--reverse {
			grid-template-columns: 1fr;
			gap: var(--space-2xl);
			direction: ltr;
		}
		
		.image-text__content {
			padding: 0;
		}
		
		.image-text__decoration {
			display: none;
		}
	}
</style>