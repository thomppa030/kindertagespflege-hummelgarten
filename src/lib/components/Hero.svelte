<script>
	export let title = 'Willkommen im Hummelgarten';
	export let subtitle = 'Ein liebevoller Ort, an dem Ihr Kind wachsen und entdecken kann';
	export let buttonText = 'Mehr erfahren';
	export let buttonLink = '#about';
	export let imageUrl = '';
	export let imageAlt = 'Kindertagespflege Hummelgarten';
</script>

<section class="hero">
	<div class="hero__background"></div>
	<div class="container">
		<div class="hero__content">
			<div class="hero__text">
				<h1 class="hero__title">{title}</h1>
				<p class="hero__subtitle">{subtitle}</p>
				<a href={buttonLink} class="button hero__button">{buttonText}</a>
			</div>
			{#if imageUrl}
				<div class="hero__image-wrapper">
					<img src={imageUrl} alt={imageAlt} class="hero__image" />
				</div>
			{/if}
		</div>
		<div class="hero__decoration">
			<img src="/favicon.svg" alt="Hummelgarten Logo" class="hero__bee" />
		</div>
	</div>
</section>

<style>
	.hero {
		position: relative;
		min-height: 600px;
		display: flex;
		align-items: center;
		overflow: hidden;
		background-color: var(--color-cream);
	}

	.hero__background {
		position: absolute;
		top: -50%;
		right: -20%;
		width: 800px;
		height: 800px;
		background: radial-gradient(circle, var(--color-sand) 0%, transparent 70%);
		opacity: 0.4;
		pointer-events: none;
	}

	.hero__content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-4xl);
		align-items: center;
		padding: var(--space-3xl) 0;
		position: relative;
		z-index: 1;
	}

	.hero__text {
		max-width: 600px;
	}

	.hero__title {
		font-size: var(--text-4xl);
		font-weight: 400;
		color: var(--color-text-primary);
		margin-bottom: var(--space-xl);
		line-height: 1.2;
	}

	.hero__subtitle {
		font-size: var(--text-xl);
		color: var(--color-text-secondary);
		margin-bottom: var(--space-2xl);
		line-height: 1.6;
	}

	.hero__button {
		font-size: var(--text-lg);
		padding: var(--space-md) var(--space-2xl);
	}

	.hero__image-wrapper {
		position: relative;
		border-radius: var(--radius-xl);
		overflow: hidden;
		box-shadow: var(--shadow-xl);
		transform: rotate(2deg);
		transition: transform var(--transition-slow);
	}

	.hero__image-wrapper:hover {
		transform: rotate(0deg) scale(1.02);
	}

	.hero__image {
		width: 100%;
		height: auto;
		display: block;
	}

	.hero__decoration {
		position: absolute;
		bottom: var(--space-2xl);
		left: 50%;
		transform: translateX(-50%);
		animation: float 4s ease-in-out infinite;
	}

	.hero__bee {
		font-size: 2.5rem;
		filter: drop-shadow(var(--shadow-md));
	}

	@keyframes float {
		0%,
		100% {
			transform: translateX(-50%) translateY(0);
		}
		50% {
			transform: translateX(-50%) translateY(-10px);
		}
	}

	@media (max-width: 968px) {
		.hero__content {
			grid-template-columns: 1fr;
			gap: var(--space-3xl);
			text-align: center;
		}

		.hero__text {
			max-width: 100%;
		}

		.hero__image-wrapper {
			max-width: 500px;
			margin: 0 auto;
			transform: none;
		}

		.hero__image-wrapper:hover {
			transform: scale(1.02);
		}

		.hero__background {
			top: -30%;
			right: -50%;
		}
	}

	@media (max-width: 640px) {
		.hero {
			min-height: 500px;
		}

		.hero__title {
			font-size: var(--text-3xl);
		}

		.hero__subtitle {
			font-size: var(--text-lg);
		}

		.hero__button {
			font-size: var(--text-base);
		}
	}
</style>
