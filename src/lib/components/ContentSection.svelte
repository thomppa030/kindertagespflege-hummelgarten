<script>
	export let title = '';
	export let backgroundColor = 'cream';
	export let layout = 'default'; // 'default', 'cards', 'alternating'
	export let centerTitle = false;
</script>

<section class="content-section content-section--{backgroundColor}">
	<div class="container">
		{#if title}
			<h2 class="content-section__title" class:text-center={centerTitle}>{title}</h2>
		{/if}
		<div class="content-section__content content-section__content--{layout}">
			<slot />
		</div>
	</div>
</section>

<style>
	.content-section {
		padding: var(--space-4xl) 0;
		position: relative;
		overflow: hidden;
	}
	
	.content-section--cream {
		background-color: var(--color-cream);
	}
	
	.content-section--white {
		background-color: var(--color-warm-white);
	}
	
	.content-section--sand {
		background-color: var(--color-sand);
	}
	
	.content-section__title {
		margin-bottom: var(--space-3xl);
		position: relative;
		padding-bottom: var(--space-lg);
	}
	
	.content-section__title::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 60px;
		height: 3px;
		background-color: var(--color-accent);
		border-radius: var(--radius-full);
	}
	
	.text-center.content-section__title::after {
		left: 50%;
	}
	
	.content-section__title:not(.text-center)::after {
		left: 0;
		transform: none;
	}
	
	.content-section__content {
		display: grid;
		gap: var(--space-2xl);
	}
	
	.content-section__content--default {
		grid-template-columns: 1fr;
	}
	
	.content-section__content--cards {
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	}
	
	.content-section__content--alternating {
		grid-template-columns: 1fr;
		gap: var(--space-4xl);
	}
	
	@media (max-width: 768px) {
		.content-section {
			padding: var(--space-3xl) 0;
		}
		
		.content-section__content--cards {
			grid-template-columns: 1fr;
		}
	}
</style>