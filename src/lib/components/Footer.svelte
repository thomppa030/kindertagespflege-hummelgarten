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
		<div class="container">
			<div class="footer__top">
				<a href="/" class="footer__brand">
					<img src="/Hummel.svg" alt="" class="footer__logo-image" width="44" height="44" />
					<span class="footer__logo-text">Kindertagespflege<br />Hummelgarten</span>
				</a>

				<nav class="footer__nav">
					<a href="/konzept" class="footer__link">Konzept</a>
					<a href="/ueber-mich" class="footer__link">Über mich</a>
					<a href="/kontakt" class="footer__link">Kontakt</a>
				</nav>
			</div>

			<div class="footer__details">
				<div class="footer__detail">
					<a href="tel:+4933094551540" class="footer__link footer__link--prominent"
						>033094/51540</a
					>
					<a href="mailto:info@hummelgarten.de" class="footer__link footer__link--prominent"
						>info@hummelgarten.de</a
					>
				</div>

				<div class="footer__detail">
					<p class="footer__text">Griebener Chaussee 4, 16775 Löwenberger Land OT Linde</p>
				</div>

				<div class="footer__detail">
					<p class="footer__text">Montag – Freitag · 7:30–16:30 Uhr</p>
				</div>
			</div>

			<div class="footer__bottom">
				<p class="footer__copyright">
					© {new Date().getFullYear()} Kindertagespflege Hummelgarten
				</p>
				<nav class="footer__legal">
					<a href="/impressum" class="footer__link">Impressum</a>
					<a href="/datenschutz" class="footer__link">Datenschutz</a>
				</nav>
			</div>
		</div>
	</footer>
{/if}

<style>
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 var(--space-lg);
	}

	.footer {
		background-color: var(--color-forest);
		color: var(--color-warm-white);
		padding: var(--space-3xl) 0 var(--space-xl);
	}

	.footer__top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: var(--space-lg);
		padding-bottom: var(--space-2xl);
	}

	.footer__brand {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		text-decoration: none;
		color: var(--color-warm-white);
	}

	.footer__brand:hover {
		text-decoration: none;
	}

	.footer__logo-image {
		width: 44px;
		height: 44px;
		object-fit: contain;
	}

	.footer__logo-text {
		font-family: 'CFPetersonPERSONAL', sans-serif;
		font-size: var(--text-lg);
		line-height: 1.25;
		color: var(--color-warm-white);
	}

	.footer__nav {
		display: flex;
		align-items: center;
		gap: var(--space-xl);
	}

	.footer__details {
		display: grid;
		grid-template-columns: 1.3fr 1fr 1fr;
		gap: var(--space-xl);
		padding: var(--space-2xl) 0;
		border-top: 1px solid rgba(254, 253, 251, 0.14);
	}

	.footer__detail {
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
	}

	.footer__link {
		color: var(--color-warm-white);
		text-decoration: none;
		opacity: 0.8;
		font-size: var(--text-sm);
		transition: opacity var(--transition-fast), color var(--transition-fast);
	}

	.footer__link:hover {
		opacity: 1;
		color: var(--color-honey);
		text-decoration: none;
	}

	.footer__link--prominent {
		font-size: var(--text-lg);
		opacity: 1;
	}

	.footer__text {
		font-size: var(--text-sm);
		opacity: 0.7;
		margin: 0;
		line-height: 1.6;
	}

	.footer__bottom {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: var(--space-md);
		padding-top: var(--space-lg);
		border-top: 1px solid rgba(254, 253, 251, 0.14);
	}

	.footer__copyright {
		font-size: var(--text-sm);
		opacity: 0.55;
		margin: 0;
	}

	.footer__legal {
		display: flex;
		gap: var(--space-lg);
	}

	.footer__legal .footer__link {
		font-size: var(--text-sm);
	}

	@media (max-width: 768px) {
		.footer__details {
			grid-template-columns: 1fr;
			gap: var(--space-lg);
		}
	}

	@media (max-width: 560px) {
		.footer__top {
			flex-direction: column;
			align-items: flex-start;
		}

		.footer__nav {
			flex-wrap: wrap;
			gap: var(--space-md);
		}

		.footer__bottom {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>
