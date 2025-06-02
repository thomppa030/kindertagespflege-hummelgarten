<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, scale } from 'svelte/transition';

	let isVisible = false;
	let hasBeenClosed = false;

	onMount(() => {
		// Check if banner was already closed in this session
		const bannerClosed = sessionStorage.getItem('openDoorBannerClosed');
		if (!bannerClosed) {
			setTimeout(() => {
				isVisible = true;
			}, 500);
		}
	});

	const closeBanner = () => {
		isVisible = false;
		hasBeenClosed = true;
		sessionStorage.setItem('openDoorBannerClosed', 'true');
	};
</script>

{#if isVisible}
	<div class="banner-overlay" transition:fade={{ duration: 300 }}>
		<div class="blur-background" on:click={closeBanner}></div>

		<div class="banner-container" transition:scale={{ duration: 400, start: 0.9 }}>
			<button class="close-button" on:click={closeBanner} aria-label="Banner schließen">
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
				>
					<line x1="18" y1="6" x2="6" y2="18"></line>
					<line x1="6" y1="6" x2="18" y2="18"></line>
				</svg>
			</button>

			<div class="banner-content">
				<div class="banner-icon"></div>
				<h2>Tag der offenen Tür</h2>
				<div class="event-details">
					<div class="date">
						<svg
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
						>
							<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
							<line x1="16" y1="2" x2="16" y2="6"></line>
							<line x1="8" y1="2" x2="8" y2="6"></line>
							<line x1="3" y1="10" x2="21" y2="10"></line>
						</svg>
						<span>14. Juni 2025</span>
					</div>
					<div class="time">
						<svg
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
						>
							<circle cx="12" cy="12" r="10"></circle>
							<polyline points="12 6 12 12 16 14"></polyline>
						</svg>
						<span>11:00 - 16:00 Uhr</span>
					</div>
				</div>
				<p class="description">
					Lernen Sie unsere Kindertagespflege kennen! Wir freuen uns auf Ihren Besuch und
					beantworten gerne alle Ihre Fragen.
				</p>
				<div class="banner-actions">
					<button class="cta-button" on:click={closeBanner}> Mehr erfahren </button>
					<button class="dismiss-button" on:click={closeBanner}> Vielleicht später </button>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.banner-overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1000;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1rem;
	}

	.blur-background {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.4);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
	}

	.banner-container {
		position: relative;
		background: white;
		border-radius: 1.5rem;
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
		max-width: 500px;
		width: 100%;
		overflow: hidden;
	}

	.close-button {
		position: absolute;
		top: 1rem;
		right: 1rem;
		background: rgba(0, 0, 0, 0.05);
		border: none;
		border-radius: 50%;
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all 0.2s ease;
		color: #5a6c7d;
	}

	.close-button:hover {
		background: rgba(0, 0, 0, 0.1);
		transform: scale(1.1);
	}

	.banner-content {
		padding: 3rem 2rem 2rem;
		text-align: center;
	}

	.banner-icon {
		font-size: 4rem;
		margin-bottom: 1rem;
		animation: float 3s ease-in-out infinite;
	}

	@keyframes float {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
	}

	h2 {
		font-size: 2rem;
		color: #2c3e50;
		margin-bottom: 1.5rem;
		font-weight: 300;
	}

	.event-details {
		display: flex;
		justify-content: center;
		gap: 2rem;
		margin-bottom: 1.5rem;
	}

	.date,
	.time {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 1.125rem;
		color: #3498db;
		font-weight: 500;
	}

	.date svg,
	.time svg {
		color: #3498db;
	}

	.description {
		font-size: 1rem;
		color: #5a6c7d;
		line-height: 1.6;
		margin-bottom: 2rem;
		max-width: 400px;
		margin-left: auto;
		margin-right: auto;
	}

	.banner-actions {
		display: flex;
		gap: 1rem;
		justify-content: center;
	}

	.cta-button {
		background: #27ae60;
		color: white;
		border: none;
		padding: 0.875rem 2rem;
		border-radius: 0.5rem;
		font-size: 1rem;
		font-weight: 500;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.cta-button:hover {
		background: #219a52;
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(39, 174, 96, 0.3);
	}

	.dismiss-button {
		background: transparent;
		color: #5a6c7d;
		border: 1px solid #e1e8ed;
		padding: 0.875rem 1.5rem;
		border-radius: 0.5rem;
		font-size: 1rem;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.dismiss-button:hover {
		background: #f8f9fa;
		border-color: #cbd5e0;
	}

	@media (max-width: 540px) {
		.banner-container {
			margin: 1rem;
		}

		.banner-content {
			padding: 2.5rem 1.5rem 1.5rem;
		}

		h2 {
			font-size: 1.75rem;
		}

		.event-details {
			flex-direction: column;
			gap: 1rem;
		}

		.banner-actions {
			flex-direction: column;
			width: 100%;
		}

		.cta-button,
		.dismiss-button {
			width: 100%;
		}
	}
</style>

