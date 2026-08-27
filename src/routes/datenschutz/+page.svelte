<script>
	import ContentSection from '$lib/components/ContentSection.svelte';
</script>

<svelte:head>
	<title>Datenschutz - Kindertagespflege Hummelgarten</title>
	<meta name="description" content="Datenschutzerklärung der Kindertagespflege Hummelgarten." />
	<meta name="robots" content="noindex, follow" />
</svelte:head>

<ContentSection>
	<article class="legal-content">
		<h1>Datenschutzerklärung</h1>

		<!--
			This is a generic DSGVO/GDPR-style outline reflecting what the site
			actually does today (Web3Forms contact form, Google Search Console
			verification only — no analytics, no cookies, no tracking scripts).
			Still worth a lawyer's or e-recht24-style review before relying on it,
			and revisit section 3/5 if Web3Forms or analytics tooling changes.
		-->
		<h2>1. Verantwortliche Stelle</h2>
		<p>
			Liane Priesnitz<br />
			Kindertagespflege Hummelgarten<br />
			Griebener Chaussee 4<br />
			16775 Löwenberger Land OT Linde<br />
			E-Mail: l.priesnitz@gmx.de
		</p>

		<h2>2. Erhebung und Speicherung personenbezogener Daten</h2>
		<p>
			Beim Besuch dieser Website werden durch den Hosting-Anbieter automatisch Informationen
			allgemeiner Natur erfasst (Server-Logfiles), die Ihr Browser an uns übermittelt. Diese
			Informationen lassen keine Rückschlüsse auf Ihre Person zu.
		</p>

		<h2>3. Kontaktformular</h2>
		<p>
			Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
			Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
			Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Die technische Übermittlung
			erfolgt über den Dienst Web3Forms (Web3Forms Inc.), der die Formulardaten per E-Mail an uns
			weiterleitet, ohne sie dauerhaft zu speichern. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
			(vorvertragliche Anfrage) bzw. lit. f DSGVO (berechtigtes Interesse an einer Kontaktmöglichkeit).
			<!-- TODO: falls verfügbar, Link zur Datenschutzerklärung von Web3Forms ergänzen und prüfen,
			     ob ein Auftragsverarbeitungsvertrag (AVV) mit Web3Forms erforderlich/vorhanden ist. -->
		</p>

		<h2>4. Ihre Rechte</h2>
		<p>
			Sie haben jederzeit das Recht auf Auskunft über Ihre gespeicherten personenbezogenen Daten,
			deren Herkunft und Empfänger sowie den Zweck der Datenverarbeitung sowie ein Recht auf
			Berichtigung, Sperrung oder Löschung dieser Daten.
		</p>

		<h2>5. Cookies und Analyse-Tools</h2>
		<p>
			Diese Website setzt keine Cookies und keine Analyse- oder Tracking-Dienste ein. Lediglich zur
			Bestätigung der Inhaberschaft gegenüber der Google Search Console wird ein Verifizierungs-Tag
			(Meta-Tag) eingebunden; dieser überträgt keine personenbezogenen Daten und setzt keine Cookies.
		</p>

		<h2>6. SSL-Verschlüsselung</h2>
		<p>
			Diese Seite nutzt aus Gründen der Sicherheit eine SSL-Verschlüsselung. Eine verschlüsselte
			Verbindung erkennen Sie an der Adresszeile des Browsers, wenn diese von „http://“ auf
			„https://“ wechselt.
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
</style>
