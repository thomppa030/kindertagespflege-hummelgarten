<script>
	import ContentSection from '$lib/components/ContentSection.svelte';
</script>

<svelte:head>
	<title>Impressum - Kindertagespflege Hummelgarten</title>
	<meta name="description" content="Impressum der Kindertagespflege Hummelgarten." />
	<meta name="robots" content="noindex, follow" />
</svelte:head>

<ContentSection>
	<article class="legal-content">
		<h1>Impressum</h1>

		<!-- Angaben gemäß § 5 TMG -->
		<h2>Angaben gemäß § 5 TMG</h2>
		<p>
			Liane Priesnitz<br />
			Kindertagespflege Hummelgarten<br />
			Griebener Chaussee 4<br />
			16775 Löwenberger Land OT Linde
		</p>

		<h2>Kontakt</h2>
		<p>
			Telefon: 033094/51540<br />
			E-Mail: l.priesnitz@gmx.de
		</p>

		<h2>Aufsichtsbehörde</h2>
		<p>Jugendamt Oberhavel</p>

		<h2>Redaktionell verantwortlich</h2>
		<p>Liane Priesnitz, Anschrift wie oben</p>

		<h2>EU-Streitschlichtung</h2>
		<p>
			Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
			<a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer"
				>https://ec.europa.eu/consumers/odr/</a
			>. Unsere E-Mail-Adresse finden Sie oben im Impressum.
		</p>

		<h2>Verbraucherstreitbeilegung</h2>
		<p>
			Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
			Verbraucherschlichtungsstelle teilzunehmen.
		</p>

		<h2>Haftung für Inhalte</h2>
		<p>
			Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach
			den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
			jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen
			oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
		</p>

		<h2>Haftung für Links</h2>
		<p>
			Unser Angebot enthält gegebenenfalls Links zu externen Websites Dritter, auf deren Inhalte
			wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
			übernehmen.
		</p>

		<h2>Urheberrecht</h2>
		<p>
			Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf diesen Seiten unterliegen
			dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet.
		</p>
	</article>
</ContentSection>

<style>
	.legal-content {
		max-width: 750px;
		margin: 0 auto;
	}

	.legal-content h1 {
		font-size: var(--text-4xl);
		margin-bottom: var(--space-xl);
	}

	.legal-content h2 {
		font-size: var(--text-xl);
		margin-top: var(--space-2xl);
		margin-bottom: var(--space-md);
	}

	.legal-content p {
		color: var(--color-text-secondary);
		line-height: 1.8;
		margin-bottom: var(--space-lg);
	}

	.legal-content a {
		word-break: break-word;
	}
</style>
