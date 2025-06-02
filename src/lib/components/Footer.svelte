<script lang="ts">
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';
	import type { Content } from '@prismicio/client';

	export let footer: Content.FooterDocumentData | undefined;
</script>

{#if footer?.slices}
	<SliceZone slices={footer.slices} {components} />
{:else}
	<!-- Fallback footer if no Prismic data -->
	<footer class="footer">
		<div class="footer__decoration">
			<div class="footer__wave"></div>
		</div>
		<div class="container">
			<div class="footer__content">
				<div class="footer__section">
					<div class="footer__logo">
						<span class="footer__logo-icon">🐝</span>
						<h3 class="footer__logo-text">Kindertagespflege<br />Hummelgarten</h3>
					</div>
					<p class="footer__description">Liebevolle Betreuung für Ihr Kind</p>
				</div>

				<div class="footer__section">
					<h4 class="footer__heading">Kontakt</h4>
					<div class="footer__contact">
						<p>
							<strong>Kindertagespflege Hummelgarten</strong><br />
							Griebener Chaussee 4<br />
							16775 Löwenberger Land OT Linde
						</p>
						<p>
							<a href="tel:+4933094551540" class="footer__link">📞 033094/51540</a><br />
							<a href="mailto:info@hummelgarten.de" class="footer__link">✉️ info@hummelgarten.de</a>
						</p>
					</div>
				</div>

				<div class="footer__section">
					<h4 class="footer__heading">Öffnungszeiten</h4>
					<p>
						<strong>Montag - Freitag</strong><br />
						7:30 - 16:30 Uhr
					</p>
					<p class="footer__note">An Wochenenden und Feiertagen geschlossen</p>
				</div>

				<div class="footer__section">
					<h4 class="footer__heading">Schnellzugriff</h4>
					<nav class="footer__nav">
						<a href="/konzept" class="footer__link">Unser Konzept</a>
						<a href="/tagesablauf" class="footer__link">Tagesablauf</a>
						<a href="/kontakt" class="footer__link">Kontakt & Anmeldung</a>
						<a href="/impressum" class="footer__link">Impressum</a>
						<a href="/datenschutz" class="footer__link">Datenschutz</a>
					</nav>
				</div>
			</div>

			<div class="footer__bottom">
				<p class="footer__copyright">
					© {new Date().getFullYear()} Kindertagespflege Hummelgarten. Mit ❤️ gestaltet.
				</p>
			</div>
		</div>
	</footer>
{/if}

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

	.footer__logo-text {
		font-size: 1.125rem;
		font-weight: 300;
		line-height: 1.3;
		margin: 0;
	}

	.footer__description {
		opacity: 0.9;
		line-height: 1.7;
	}

	.footer__heading {
		font-size: 1.25rem;
		font-weight: 400;
		margin: 0 0 1rem 0;
		color: white;
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
		padding: 2rem 0;
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

