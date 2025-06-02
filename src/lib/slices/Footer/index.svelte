<script lang="ts">
	import type { Content } from '@prismicio/client';

	export let slice: Content.FooterSlice;
</script>

<footer class="footer">
	<div class="footer__decoration">
		<div class="footer__wave"></div>
	</div>
	<div class="container">
		<div class="footer__content">
			<div class="footer__section">
				<div class="footer__logo">
					{#if slice.primary.logo_image?.url}
						<img src={slice.primary.logo_image.url} alt="Hummelgarten Logo" class="footer__logo-image" width="60" height="60" />
					{:else}
						<span class="footer__logo-icon">🐝</span>
					{/if}
					<h3 class="footer__logo-text">Kindertagespflege<br />Hummelgarten</h3>
				</div>
				<p class="footer__description">
					{slice.primary.tagline || 'Liebevolle Betreuung für Ihr Kind'}
				</p>
			</div>

			<div class="footer__section">
				<h4 class="footer__heading">Kontakt</h4>
				<div class="footer__contact">
					<p>
						<strong>{slice.primary.owner_name}</strong><br />
						{slice.primary.address_street}<br />
						{slice.primary.address_city}
					</p>
					<p>
						<a href="tel:+{slice.primary.phone?.replace(/\D/g, '')}" class="footer__link">📞 {slice.primary.phone}</a><br />
						<a href="mailto:{slice.primary.email}" class="footer__link">✉️ {slice.primary.email}</a>
					</p>
				</div>
			</div>

			<div class="footer__section">
				<h4 class="footer__heading">Öffnungszeiten</h4>
				<p>
					<strong>{slice.primary.opening_days}</strong><br />
					{slice.primary.opening_hours}
				</p>
				<p class="footer__note">{slice.primary.closing_note}</p>
			</div>

			{#if slice.items && slice.items.length > 0}
				<div class="footer__section">
					<h4 class="footer__heading">Schnellzugriff</h4>
					<nav class="footer__nav">
						{#each slice.items as item}
							<a href={item.link_url} class="footer__link">{item.link_label}</a>
						{/each}
					</nav>
				</div>
			{/if}
		</div>

		<div class="footer__bottom">
			<p class="footer__copyright">
				{slice.primary.copyright_text || `© ${new Date().getFullYear()} Kindertagespflege Hummelgarten. Mit ❤️ gestaltet.`}
			</p>
		</div>
	</div>
</footer>

<style>
	.footer {
		background-color: var(--color-forest);
		color: var(--color-warm-white);
		position: relative;
		margin-top: var(--space-4xl);
		padding-top: var(--space-4xl);
		overflow: hidden;
	}

	.footer__decoration {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 80px;
		overflow: hidden;
		transform: translateY(-99%);
	}

	.footer__wave {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 200%;
		height: 100%;
		background-color: var(--color-forest);
		border-radius: 50% 50% 0 0 / 100% 100% 0 0;
		animation: wave 20s linear infinite;
	}

	@keyframes wave {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}

	.footer__content {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: var(--space-3xl);
		padding-bottom: var(--space-3xl);
		border-bottom: 1px solid rgba(250, 247, 242, 0.2);
	}

	.footer__section {
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
	}

	.footer__logo {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		margin-bottom: var(--space-md);
	}

	.footer__logo-icon {
		font-size: 2.5rem;
		line-height: 1;
		filter: brightness(1.2);
	}

	.footer__logo-image {
		width: 60px;
		height: 60px;
		object-fit: contain;
		filter: brightness(1.1);
	}

	.footer__logo-text {
		font-family: var(--font-primary);
		font-size: var(--text-lg);
		font-weight: 400;
		line-height: 1.3;
		margin: 0;
	}

	.footer__description {
		opacity: 0.9;
		line-height: 1.7;
	}

	.footer__heading {
		font-family: var(--font-primary);
		font-size: var(--text-lg);
		font-weight: 600;
		margin: 0 0 var(--space-sm) 0;
		color: var(--color-honey);
	}

	.footer__contact p {
		margin: 0 0 var(--space-md) 0;
		line-height: 1.6;
	}

	.footer__link {
		color: var(--color-warm-white);
		text-decoration: none;
		opacity: 0.9;
		transition: all var(--transition-fast);
		display: inline-block;
		margin-bottom: var(--space-xs);
	}

	.footer__link:hover {
		color: var(--color-honey);
		opacity: 1;
		transform: translateX(2px);
		text-decoration: none;
	}

	.footer__nav {
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
	}

	.footer__note {
		font-size: var(--text-sm);
		opacity: 0.8;
		margin: 0;
	}

	.footer__bottom {
		padding: var(--space-xl) 0;
		text-align: center;
	}

	.footer__copyright {
		font-size: var(--text-sm);
		opacity: 0.8;
		margin: 0;
	}

	@media (max-width: 768px) {
		.footer__content {
			grid-template-columns: 1fr;
			gap: var(--space-2xl);
		}

		.footer__section {
			text-align: center;
		}

		.footer__logo {
			justify-content: center;
		}

		.footer__nav {
			align-items: center;
		}
	}
</style>