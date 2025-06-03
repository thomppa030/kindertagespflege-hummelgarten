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
						<img
							src={slice.primary.logo_image.url}
							alt="Hummelgarten Logo"
							class="footer__logo-image"
							width="60"
							height="60"
						/>
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
						<a href="tel:+{slice.primary.phone?.replace(/\D/g, '')}" class="footer__link"
							>📞 {slice.primary.phone}</a
						><br />
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
				{slice.primary.copyright_text ||
					`© ${new Date().getFullYear()} Kindertagespflege Hummelgarten. Mit ❤️ gestaltet.`}
			</p>
		</div>
	</div>
</footer>

<style>
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	.footer {
		background: linear-gradient(135deg, #8cc152 0%, #6fa73d 100%);
		color: white;
		position: relative;
		margin-top: 0;
		padding: 4rem 0 2rem;
		overflow: hidden;
	}

	.footer__decoration {
		display: none;
	}

	.footer__content {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 3rem;
		padding-bottom: 3rem;
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	}

	.footer__section {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.footer__logo {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 1rem;
	}

	.footer__logo-icon {
		font-size: 2.5rem;
		line-height: 1;
		filter: brightness(1.2);
	}

	.footer__logo-image {
		width: 50px;
		height: 50px;
		object-fit: contain;
		filter: brightness(1.1);
	}

	.footer__logo-text {
		font-family: 'CFPetersonPERSONAL', sans-serif;
		font-size: 1.125rem;
		font-weight: 300;
		line-height: 1.3;
		margin: 0;
	}

	.footer__description {
		font-family: 'CFPetersonPERSONAL', sans-serif;
		opacity: 0.9;
		line-height: 1.7;
	}

	.footer__heading {
		font-family: 'CFPetersonPERSONAL', sans-serif;
		font-size: 1.125rem;
		font-weight: 300;
		margin: 0 0 -1rem 0;
		color: black;
		opacity: 0.95;
	}

	.footer__contact p {
		margin: 0 0 1rem 0;
		line-height: 1.6;
	}

	.footer__link {
		color: white;
		text-decoration: none;
		opacity: 0.9;
		transition: all 0.3s ease;
		display: inline-block;
		margin-bottom: 0.5rem;
	}

	.footer__link:hover {
		color: white;
		opacity: 1;
		transform: translateX(2px);
		text-decoration: underline;
	}

	.footer__nav {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.footer__note {
		font-size: 0.875rem;
		opacity: 0.85;
		margin: 0;
	}

	.footer__bottom {
		padding: 1rem 0;
		text-align: center;
	}

	.footer__copyright {
		font-size: 0.875rem;
		opacity: 0.85;
		margin: 0;
	}

	@media (max-width: 768px) {
		.footer__content {
			grid-template-columns: 1fr;
			gap: 2rem;
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
