<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import ImageText from '$lib/components/ImageText.svelte';
	import Card from '$lib/components/Card.svelte';
	import Icon from '$lib/components/Icon.svelte';

	let visible = false;
	let sections = [];

	onMount(() => {
		visible = true;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('visible');
					}
				});
			},
			{
				threshold: 0.01,
				rootMargin: '50px'
			}
		);

		setTimeout(() => {
			sections = document.querySelectorAll('.section');
			sections.forEach((section) => observer.observe(section));
		}, 100);

		return () => {
			sections.forEach((section) => observer.unobserve(section));
		};
	});
</script>

<svelte:head>
	<title>Unser Konzept - Kindertagespflege Hummelgarten</title>
	<meta
		name="description"
		content="Liebevolle Ganztagsbetreuung in familiärer Atmosphäre. Naturverbunden, tiergestützt und ganzheitlich - unser pädagogisches Konzept."
	/>
</svelte:head>

<div class="konzept-page">
	{#if visible}
		<section class="hero" in:fade={{ duration: 600 }}>
			<div class="hero-content">
				<p class="hero-eyebrow">Unser pädagogisches Konzept</p>
				<h1 class="hero-title">Kindertagespflege in familiärer Atmosphäre</h1>
				<p class="hero-subtitle">Liebevolle Ganztagsbetreuung für bis zu 5 Kinder</p>
			</div>
		</section>
	{/if}

	<!-- Home -->
	<section class="section home-section visible">
		<div class="content-wrapper">
			<div class="section-marker"><Icon name="home" /></div>
			<h2 class="section-title">Unser Zuhause wird zu ihrem zweiten Zuhause</h2>
			<p class="lead-text">
				In meiner kleinen, familiären Kindertagespflege betreue ich maximal 5 Kinder in einer
				warmen, häuslichen Atmosphäre. Das Erdgeschoss meines Einfamilienhauses wurde speziell für
				die Bedürfnisse der Kinder eingerichtet.
			</p>

			<div class="features-grid">
				<Card title="40 qm Spielparadies" description="Großes Wohn- und Spielzimmer mit angrenzendem Wintergarten" />
				<Card title="Ruheoase" description="Separates Schlafzimmer für erholsame Ruhepausen" />
				<Card title="Gemeinsam kochen" description="Offene Küche zum gemeinsamen Kochen und Essen" />
				<Card title="Direkter Gartenzugang" description="Nahtloses Innen-Außen-Spiel bei jedem Wetter" />
			</div>
		</div>
	</section>

	<!-- Garden -->
	<section class="section garden-section">
		<div class="content-wrapper">
			<div class="section-marker"><Icon name="leaf" /></div>
			<h2 class="section-title">Naturerlebnis direkt vor der Haustür</h2>

			<ImageText
				imageUrl="/PicturesHome/optimized/20250514_094452.jpg"
				imageAlt="Garten der Kindertagespflege Hummelgarten mit Gemüsebeeten und Spielbereich"
				title="Unser Garten als grünes Klassenzimmer"
			>
				<p>
					Hier erleben die Kinder den kompletten Naturkreislauf mit allen Sinnen – vom Samenkorn
					bis zur selbstgekochten Suppe.
				</p>
				<ul class="nature-list">
					<li>Säen von Gemüse und Blumen</li>
					<li>Beobachten des Wachstums durch die Jahreszeiten</li>
					<li>Pflegen der Beete und Übernehmen von Verantwortung</li>
					<li>Ernten und Verarbeiten des eigenen Gemüses</li>
					<li>Entdecken von Insekten auf der bunten Blumenwiese</li>
				</ul>
			</ImageText>

			<p class="movement-lead">Bewegung und Entwicklung entstehen dabei nebenbei, durch:</p>
			<p class="movement-tags">
				Vielfältige Untergründe · Kirschbaum-Hügel · Schaukel &amp; Sandkasten · Ruhige
				Rückzugsorte
			</p>
		</div>
	</section>

	<!-- Animals -->
	<section class="section animals-section">
		<div class="content-wrapper content-wrapper--narrow">
			<div class="section-marker"><Icon name="paw" /></div>
			<h2 class="section-title">Tierische Begleiterin als Co-Pädagogin</h2>
			<p class="lead-text lead-text--center">
				Meine Katze Kelly (1,5 Jahre, geimpft) lebt mit uns zusammen. Der tägliche, respektvolle
				Umgang mit ihr gehört fest zu unserem Alltag.
			</p>

			<div class="learning-cards">
				<Card title="Respektvolle Tierbegegnungen" />
				<Card title="Empathie und Fürsorglichkeit" />
				<Card title="Verantwortung im Umgang mit Lebewesen" />
			</div>
		</div>
	</section>

	<!-- Forest -->
	<section class="section forest-section">
		<div class="content-wrapper">
			<div class="section-marker"><Icon name="tree" /></div>
			<h2 class="section-title">Abenteuer vor der Haustür</h2>

			<div class="forest-layout">
				<div>
					<h3>Wald und Wiesen als Erfahrungsraum</h3>
					<p class="forest-intro">
						Das Lindsche Luch und der Wald liegen direkt vor unserer Tür. Mit unserem
						Krippenwagen erkunden wir regelmäßig:
					</p>
				</div>
				<ul class="exploration-list">
					<li>Die vier Jahreszeiten im Wald</li>
					<li>Heimische Tiere und Pflanzen</li>
					<li>Naturmaterialien zum Spielen und Basteln</li>
				</ul>
			</div>
		</div>
	</section>

	<!-- Partnership -->
	<section class="section partnership-section">
		<div class="content-wrapper">
			<div class="section-marker"><Icon name="community" /></div>
			<h2 class="section-title">Soziales Lernen durch Kooperation</h2>

			<div class="partnership-layout">
				<div>
					<h3>Partnerschaft mit der Kindertagespflege Lindenblatt</h3>
					<p>Durch regelmäßige gemeinsame Aktivitäten erweitern wir den sozialen Horizont:</p>
				</div>
				<ul class="benefits-list">
					<li>Spielen in größeren Gruppen</li>
					<li>Neue Freundschaften knüpfen</li>
					<li>Gemeinsame Waldausflüge und Unternehmungen</li>
					<li>Mehr Abwechslung im Alltag</li>
				</ul>
			</div>
		</div>
	</section>

	<!-- Education -->
	<section class="section education-section">
		<div class="content-wrapper content-wrapper--narrow">
			<div class="section-marker"><Icon name="book" /></div>
			<h2 class="section-title">Förderung nach dem Bildungsplan des Landes Brandenburg</h2>
			<p class="lead-text lead-text--center">
				Alle Bereiche des aktuellen Bildungsplans fließen spielerisch in unseren Alltag ein. Das
				ausführliche pädagogische Konzept stelle ich Ihnen gerne persönlich vor.
			</p>
		</div>
	</section>

	<!-- Hours -->
	<section class="section hours-section">
		<div class="content-wrapper">
			<div class="section-marker"><Icon name="clock" /></div>
			<h2 class="section-title">Betreuungszeiten</h2>

			<div class="hours-layout">
				<div class="hours-primary">
					<p class="hours-label">Öffnungszeiten</p>
					<p class="hours-time">Montag bis Freitag, 7:00–16:00 Uhr</p>
				</div>
				<p class="hours-note">
					Frühere oder spätere Zeiten sind nach individueller Absprache möglich.
				</p>
			</div>
		</div>
	</section>

	<!-- CTA -->
	<section class="section cta-section">
		<div class="content-wrapper content-wrapper--narrow">
			<div class="cta-content">
				<p class="cta-text">
					Lassen Sie uns gerne bei einem unverbindlichen Kennenlerntermin besprechen, wie Ihr Kind
					bei uns bestmöglich gefördert und betreut werden kann.
				</p>
				<a href="/kontakt" class="button">Kontakt aufnehmen</a>
			</div>
		</div>
	</section>
</div>

<style>
	.konzept-page {
		background-color: var(--color-background);
	}

	/* Hero */
	.hero {
		padding: var(--space-4xl) var(--space-lg) var(--space-3xl);
		text-align: center;
	}

	.hero-content {
		max-width: 700px;
		margin: 0 auto;
	}

	.hero-eyebrow {
		font-size: var(--text-sm);
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--color-terracotta);
		margin-bottom: var(--space-sm);
	}

	.hero-title {
		font-size: var(--text-4xl);
		line-height: 1.2;
		margin-bottom: var(--space-md);
	}

	.hero-subtitle {
		font-size: var(--text-xl);
		color: var(--color-text-secondary);
	}

	/* Content wrapper */
	.content-wrapper {
		max-width: 1100px;
		margin: 0 auto;
		padding: 0 var(--space-lg);
	}

	.content-wrapper--narrow {
		max-width: 750px;
	}

	.section {
		padding: var(--space-3xl) 0;
		opacity: 0;
		transform: translateY(24px);
		transition: opacity 0.6s ease-out, transform 0.6s ease-out;
	}

	.section.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.section:nth-child(odd) {
		background-color: var(--color-surface);
	}

	.section-marker {
		margin-bottom: var(--space-md);
	}

	.section-title {
		font-size: var(--text-2xl);
		margin-bottom: var(--space-xl);
		max-width: 40ch;
	}

	.lead-text {
		font-size: var(--text-lg);
		line-height: 1.8;
		color: var(--color-text-secondary);
		margin-bottom: var(--space-xl);
		max-width: 65ch;
	}

	.lead-text--center {
		text-align: center;
		margin-left: auto;
		margin-right: auto;
	}

	.features-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--space-xl) var(--space-2xl);
	}

	.nature-list {
		list-style: none;
		padding: 0;
		margin: var(--space-lg) 0 0;
	}

	.nature-list li {
		padding: var(--space-xs) 0;
		border-bottom: 1px solid var(--color-sand);
		color: var(--color-text-secondary);
		line-height: 1.6;
	}

	.nature-list li:last-child {
		border-bottom: none;
	}

	.movement-lead {
		margin-top: var(--space-2xl);
		font-weight: 600;
		color: var(--color-text-primary);
		margin-bottom: var(--space-sm);
	}

	.movement-tags {
		color: var(--color-text-secondary);
		line-height: 1.8;
	}

	.learning-cards {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-xl);
		margin-top: var(--space-xl);
	}

	.forest-layout,
	.partnership-layout {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-3xl);
		align-items: start;
	}

	.forest-layout h3,
	.partnership-layout h3 {
		font-size: var(--text-xl);
		margin-bottom: var(--space-md);
	}

	.forest-intro {
		color: var(--color-text-secondary);
		line-height: 1.8;
		margin: 0;
	}

	.exploration-list,
	.benefits-list {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.exploration-list li,
	.benefits-list li {
		padding: var(--space-md) 0;
		border-top: 1px solid var(--color-sand);
		color: var(--color-text-secondary);
	}

	.exploration-list li:last-child,
	.benefits-list li:last-child {
		border-bottom: 1px solid var(--color-sand);
	}

	.partnership-layout > div p {
		color: var(--color-text-secondary);
		line-height: 1.8;
		margin: 0;
	}

	.hours-layout {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		gap: var(--space-xl);
		border-top: 2px solid var(--color-terracotta);
		padding-top: var(--space-lg);
	}

	.hours-primary {
		flex: 1 1 320px;
	}

	.hours-label {
		font-weight: 600;
		color: var(--color-text-primary);
		margin: 0 0 var(--space-xs);
	}

	.hours-time {
		font-size: var(--text-xl);
		color: var(--color-accent);
		margin: 0;
	}

	.hours-note {
		flex: 1 1 320px;
		color: var(--color-text-secondary);
		line-height: 1.6;
		margin: 0;
	}

	/* CTA */
	.cta-content {
		text-align: center;
		padding: var(--space-xl) 0;
	}

	.cta-text {
		font-size: var(--text-xl);
		line-height: 1.8;
		color: var(--color-text-primary);
		margin-bottom: var(--space-xl);
	}

	/* Responsive */
	@media (max-width: 768px) {
		.hero {
			padding: var(--space-3xl) var(--space-md) var(--space-2xl);
		}

		.section {
			padding: var(--space-2xl) 0;
		}

		.features-grid,
		.learning-cards {
			grid-template-columns: 1fr;
		}

		.forest-layout,
		.partnership-layout {
			grid-template-columns: 1fr;
			gap: var(--space-lg);
		}
	}
</style>
