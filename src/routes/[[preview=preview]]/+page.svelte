<script>
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';
	import BentoGallery from '$lib/components/BentoGallery.svelte';
	import Card from '$lib/components/Card.svelte';
	import FloatingContact from '$lib/components/FloatingContact.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import ImageText from '$lib/components/ImageText.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { getOrganizationSchema, getLocalBusinessSchema } from '$lib/seo/structuredData';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	export let data;

	$: pageData = data.page.data;

	let visible = false;
	let sections = [];

	// Structured data for homepage
	const structuredData = [getOrganizationSchema(), getLocalBusinessSchema()];

	// Gallery images. Two source photos (cart, forest path) are near-duplicate
	// burst shots — both are used since only 8 real photos exist in total and
	// the hero already claims the one photo that shows the Tagesmutter herself.
	const galleryImages = [
		{
			src: '/PicturesHome/optimized/20250429_100707.jpg',
			alt: 'Kind mit roter Mütze läuft über eine moosbewachsene Waldlichtung',
			caption: 'Entdeckungstour'
		},
		{
			src: '/PicturesHome/optimized/20250430_090229.jpg',
			alt: 'Kinder sitzen im Bollerwagen und blicken einen Waldweg entlang',
			caption: 'Ausflug in den Wald'
		},
		{
			src: '/PicturesHome/optimized/20250430_090247.jpg',
			alt: 'Kinder sitzen im Bollerwagen auf einer Waldlichtung',
			caption: 'Unterwegs im Wald'
		},
		{
			src: '/PicturesHome/optimized/20250514_094452.jpg',
			alt: 'Kind mit roter Mütze hält einen Stock und erkundet den Waldboden',
			caption: 'Naturerlebnis'
		},
		{
			src: '/PicturesHome/optimized/20250514_094537(0).jpg',
			alt: 'Kind streckt einen langen Stock in die Höhe zwischen Kiefernstämmen',
			caption: 'Waldabenteuer'
		},
		{
			src: '/PicturesHome/optimized/20250514_094803.jpg',
			alt: 'Drei Kinder sitzen nebeneinander auf einem Baumstamm im Wald',
			caption: 'Rast auf dem Baumstamm'
		}
	];

	const rhythmItems = [
		{ time: '7:00', activity: 'Ankommen & erstes Frühstück' },
		{ time: '8:00', activity: 'Wald oder Wiese, Kreativzeit, pädagogische Angebote' },
		{ time: '9:00', activity: 'Zweites Frühstück' },
		{ time: '11:00', activity: 'Mittagessen' },
		{ time: '12:00', activity: 'Ruhezeit' },
		{ time: '14:30', activity: 'Vesper' },
		{ time: '', activity: 'Freispiel im Garten bis zur Abholzeit' }
	];

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
			sections = document.querySelectorAll('.home-section');
			sections.forEach((section) => observer.observe(section));
		}, 100);

		return () => {
			sections.forEach((section) => observer.unobserve(section));
		};
	});
</script>

<SEO
	title="Liebevolle Kindertagespflege im Löwenberger Land"
	description="Familiäre Kindertagespflege für bis zu 5 Kinder im Löwenberger Land. Naturverbunden, tiergestützt, mit eigenem Garten und Waldnähe. Betreuung von 7-16 Uhr."
	canonical="/"
	jsonLd={structuredData}
	googleVerification="2QRx2JuSv_dv-r-S2BhlwbTk9zhbeXOW3V4Ewkl2jY0"
/>

<div class="page-wrapper">
	<!-- Hero -->
	<section class="custom-hero">
		{#if visible}
			<div class="container hero-content" in:fade={{ duration: 600 }}>
				<div class="hero-text">
					<p class="hero-eyebrow">Kindertagespflege im Löwenberger Land</p>
					<h1 class="hero-title">
						Willkommen im<br />
						<span class="highlight">Hummelgarten</span>
					</h1>
					<p class="hero-subtitle">
						Wo kleine Entdecker in familiärer Atmosphäre wachsen, spielen und die Natur mit allen
						Sinnen erleben.
					</p>
					<p class="hero-features">Bis zu 5 Kinder · Eigener Garten · Waldnähe</p>
					<div class="hero-actions">
						<a href="/konzept" class="button">Unser Konzept entdecken</a>
						<a href="/kontakt" class="button button--secondary">Kennenlernen vereinbaren</a>
					</div>
				</div>
				<div class="hero-image">
					<img
						src="/PicturesHome/optimized/IMG-20250429-WA0017.jpg"
						alt="Tagesmutter sitzt mit drei Kindern auf einem Baumstamm im Wald und zeigt in die Baumkronen"
						class="hero-main-image"
						loading="eager"
						fetchpriority="high"
					/>
					<img
						src="/PicturesHome/optimized/20250415_100440.jpg"
						alt="Kind pflanzt einen Setzling mit den Händen in unser Gartenbeet"
						class="hero-accent-image"
						loading="eager"
					/>
				</div>
			</div>
		{/if}
	</section>

	<!-- Gallery -->
	<section class="home-section gallery-section visible">
		<div class="container">
			<h2 class="section-title">Eindrücke aus unserem Alltag</h2>
			<p class="section-subtitle">Entdecken Sie die vielfältigen Momente im Hummelgarten</p>
		</div>
		<BentoGallery images={galleryImages.slice(0, 6)} />
	</section>

	<!-- Key Features -->
	<section class="home-section features-section visible">
		<div class="container features-layout">
			<div class="features-heading">
				<p class="section-eyebrow">Warum Hummelgarten</p>
				<h2 class="section-title text-left">Was uns besonders macht</h2>
				<p class="features-intro">
					Vier Dinge, die den Alltag bei uns prägen – vom ersten Frühstück bis zur Abholzeit.
				</p>
			</div>
			<div class="features-grid">
				<Card
					icon="home"
					title="Familiäre Atmosphäre"
					description="Im liebevoll eingerichteten Erdgeschoss fühlen sich Kinder wie zu Hause – mit eigenem Spielzimmer, Ruheraum und direktem Gartenzugang."
				/>
				<Card
					icon="leaf"
					title="Naturverbunden"
					description="Unser großer Garten lädt zum Entdecken ein. Gemeinsam säen, pflegen und ernten wir – vom Samenkorn bis zur selbstgekochten Suppe."
				/>
				<Card
					icon="paw"
					title="Tiergestützte Pädagogik"
					description="Katze Kelly begleitet den Alltag. Kinder lernen respektvollen Umgang und entwickeln Empathie."
				/>
				<Card
					icon="tree"
					title="Waldabenteuer"
					description="Das Lindsche Luch liegt direkt vor der Tür. Mit dem Krippenwagen erkunden wir regelmäßig Wald und Wiesen."
				/>
			</div>
		</div>
	</section>

	<!-- Daily Rhythm -->
	<section class="home-section rhythm-section">
		<div class="container">
			<ImageText
				imageUrl="/PicturesHome/optimized/20250429_100707.jpg"
				imageAlt="Kind läuft mit einem Stock durch den lichten Wald"
				reverse={true}
			>
				<h2 class="rhythm-title">Ein Tag bei uns</h2>
				<p class="rhythm-intro">
					Strukturierte Abläufe geben Sicherheit, während genug Raum für spontane Entdeckungen
					bleibt.
				</p>
				<dl class="rhythm-list">
					{#each rhythmItems as item}
						<div class="rhythm-item">
							{#if item.time}
								<dt class="rhythm-time">{item.time}</dt>
							{:else}
								<dt class="rhythm-time rhythm-time--muted">danach</dt>
							{/if}
							<dd class="rhythm-activity">{item.activity}</dd>
						</div>
					{/each}
				</dl>
				<a href="/konzept" class="link-arrow">Mehr über unser Konzept erfahren →</a>
			</ImageText>
		</div>
	</section>

	<!-- Trust -->
	<section class="home-section trust-section">
		<div class="container trust-layout">
			<h2 class="section-title text-left trust-heading">Vertrauen durch Qualität</h2>
			<ol class="trust-list">
				<li class="trust-item">
					<span class="trust-index"><Icon name="book" size={28} /></span>
					<div>
						<h3>Qualifizierte Betreuung</h3>
						<p>Zertifizierte Tagesmutter mit langjähriger Erfahrung und regelmäßigen Fortbildungen.</p>
					</div>
				</li>
				<li class="trust-item">
					<span class="trust-index"><Icon name="heart" size={28} /></span>
					<div>
						<h3>Kleine Gruppe</h3>
						<p>Maximal 5 Kinder ermöglichen individuelle Förderung und enge Bindungen.</p>
					</div>
				</li>
				<li class="trust-item">
					<span class="trust-index"><Icon name="community" size={28} /></span>
					<div>
						<h3>Partnerschaft</h3>
						<p>
							Enge Zusammenarbeit mit Eltern und Kooperation mit der Kindertagespflege Lindenblatt.
						</p>
					</div>
				</li>
				<li class="trust-item">
					<span class="trust-index"><Icon name="seed" size={28} /></span>
					<div>
						<h3>Bildungsplan</h3>
						<p>
							Ganzheitliche Förderung nach dem aktuellen Bildungsplan des Landes Brandenburg –
							spielerisch im Alltag integriert.
						</p>
					</div>
				</li>
			</ol>
		</div>
	</section>

	<!-- CTA -->
	<section class="home-section cta-section">
		<div class="container">
			<div class="cta-content">
				<h2>Bereit für einen Besuch im Hummelgarten?</h2>
				<p>
					Lernen Sie uns bei einem unverbindlichen Kennenlerntermin kennen. Ich freue mich auf Sie
					und Ihr Kind!
				</p>
				<div class="cta-actions">
					<a href="/kontakt" class="button">Termin vereinbaren</a>
					<a href="/ueber-mich" class="cta-link">Mehr über mich erfahren →</a>
				</div>
			</div>
		</div>
	</section>

	<!-- Optional: Prismic Slices if content exists -->
	{#if data.page.data.slices && data.page.data.slices.length > 0}
		<SliceZone slices={data.page.data.slices} {components} />
	{/if}
</div>

<FloatingContact />

<style>
	.page-wrapper {
		background-color: var(--color-background);
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 var(--space-lg);
	}

	/* Hero */
	.custom-hero {
		padding: var(--space-3xl) 0 var(--space-4xl);
	}

	.hero-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-3xl);
		align-items: center;
	}

	.hero-text {
		max-width: 480px;
	}

	.hero-eyebrow {
		font-family: var(--font-secondary);
		font-size: var(--text-sm);
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--color-terracotta);
		margin-bottom: var(--space-sm);
	}

	.hero-title {
		font-size: var(--text-4xl);
		font-weight: 400;
		color: var(--color-text-primary);
		line-height: 1.15;
		margin-bottom: var(--space-lg);
	}

	.hero-title .highlight {
		font-family: 'CFPetersonPERSONAL', sans-serif;
		color: var(--color-accent);
		font-weight: 400;
	}

	.hero-subtitle {
		font-size: var(--text-lg);
		color: var(--color-text-secondary);
		line-height: 1.6;
		margin-bottom: var(--space-xl);
		max-width: 42ch;
	}

	.hero-features {
		font-size: var(--text-sm);
		font-weight: 600;
		letter-spacing: 0.03em;
		color: var(--color-forest);
		margin-bottom: var(--space-2xl);
	}

	.hero-actions {
		display: flex;
		gap: var(--space-md);
		flex-wrap: wrap;
	}

	.hero-image {
		position: relative;
		aspect-ratio: 6 / 5;
		margin-top: var(--space-2xl);
	}

	.hero-main-image {
		position: relative;
		z-index: 1;
		width: 100%;
		height: 100%;
		object-fit: cover;
		/* Source photo is a tall portrait shot; the wide 6:5 hero box only
		   crops vertically. Anchor to the top so the Tagesmutter's raised
		   hand and the canopy stay in frame instead of being cut. */
		object-position: 50% 0%;
		border-radius: var(--radius-xl);
		box-shadow: var(--shadow-xl);
	}

	.hero-accent-image {
		position: absolute;
		z-index: 2;
		/* Top-left, not bottom-left: the main photo's bottom edge is where the
		   Tagesmutter and all three children sit, so anchoring here instead
		   overlaps only canopy/sky and keeps everyone in the main shot visible. */
		top: calc(-1 * var(--space-xl));
		left: calc(-1 * var(--space-xl));
		width: 42%;
		aspect-ratio: 4 / 3;
		object-fit: cover;
		border-radius: var(--radius-lg);
		border: 6px solid var(--color-background);
		box-shadow: var(--shadow-lg);
	}

	/* Sections */
	.home-section {
		padding: var(--space-4xl) 0;
		opacity: 0;
		transform: translateY(24px);
		transition: opacity 0.6s ease-out, transform 0.6s ease-out;
	}

	.home-section.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.section-title {
		font-size: var(--text-3xl);
		text-align: center;
		margin-bottom: var(--space-xl);
	}

	.section-title.text-left {
		text-align: left;
		margin-bottom: var(--space-md);
	}

	.section-eyebrow {
		font-size: var(--text-sm);
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--color-terracotta);
		margin-bottom: var(--space-sm);
	}

	/* Gallery */
	.gallery-section {
		background: var(--color-surface);
	}

	.section-subtitle {
		text-align: center;
		font-size: var(--text-lg);
		color: var(--color-text-secondary);
		margin-top: calc(-1 * var(--space-md));
		margin-bottom: var(--space-2xl);
	}

	/* Features */
	.features-section {
		background: var(--color-background);
	}

	.features-layout {
		display: grid;
		grid-template-columns: 0.8fr 1.2fr;
		gap: var(--space-3xl);
		align-items: start;
	}

	.features-heading {
		position: sticky;
		top: calc(var(--space-4xl) + var(--space-lg));
	}

	.features-intro {
		color: var(--color-text-secondary);
		line-height: 1.7;
		max-width: 32ch;
	}

	.features-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--space-xl) var(--space-2xl);
	}

	/* Rhythm */
	.rhythm-section {
		background: var(--color-surface);
	}

	.rhythm-title {
		font-size: var(--text-2xl);
	}

	.rhythm-intro {
		font-size: var(--text-lg);
		color: var(--color-text-secondary);
		margin-bottom: var(--space-xl);
	}

	.rhythm-list {
		margin: 0 0 var(--space-xl);
		display: flex;
		flex-direction: column;
	}

	.rhythm-item {
		display: grid;
		grid-template-columns: 5rem 1fr;
		gap: var(--space-lg);
		padding: var(--space-sm) 0;
		border-bottom: 1px solid var(--color-sand);
	}

	.rhythm-item:last-child {
		border-bottom: none;
	}

	.rhythm-time {
		font-weight: 600;
		color: var(--color-accent);
		margin: 0;
	}

	.rhythm-time--muted {
		font-weight: 400;
		font-style: italic;
		color: var(--color-text-secondary);
	}

	.rhythm-activity {
		margin: 0;
		color: var(--color-text-secondary);
	}

	.link-arrow {
		font-weight: 600;
		color: var(--color-accent);
	}

	/* Trust */
	.trust-section {
		background: var(--color-sand);
	}

	.trust-layout {
		display: grid;
		grid-template-columns: 0.7fr 1.3fr;
		gap: var(--space-3xl);
		align-items: start;
	}

	.trust-heading {
		position: sticky;
		top: calc(var(--space-4xl) + var(--space-lg));
	}

	.trust-list {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.trust-item {
		display: grid;
		grid-template-columns: 3.5rem 1fr;
		gap: var(--space-lg);
		padding: var(--space-lg) 0;
		border-bottom: 1px solid rgba(62, 62, 60, 0.12);
	}

	.trust-item:first-child {
		padding-top: 0;
	}

	.trust-item:last-child {
		border-bottom: none;
		padding-bottom: 0;
	}

	.trust-index {
		font-family: var(--font-primary);
		font-size: var(--text-2xl);
		color: var(--color-terracotta);
		line-height: 1;
	}

	.trust-item h3 {
		font-size: var(--text-xl);
		margin-bottom: var(--space-sm);
	}

	.trust-item p {
		color: var(--color-text-secondary);
		line-height: 1.7;
		margin: 0;
	}

	/* CTA */
	.cta-section {
		background: var(--color-forest);
	}

	.cta-content {
		text-align: center;
		max-width: 700px;
		margin: 0 auto;
	}

	.cta-content h2 {
		color: var(--color-warm-white);
		font-size: var(--text-3xl);
		margin-bottom: var(--space-md);
	}

	.cta-content p {
		color: var(--color-sand);
		font-size: var(--text-lg);
		line-height: 1.6;
		margin-bottom: var(--space-2xl);
	}

	.cta-actions {
		display: flex;
		gap: var(--space-xl);
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}

	.cta-section .button {
		background-color: var(--color-honey);
		color: var(--color-charcoal);
	}

	.cta-section .button:hover {
		background-color: var(--color-warm-white);
	}

	.cta-link {
		color: var(--color-warm-white);
		font-weight: 600;
		text-decoration: underline;
	}

	/* Responsive */
	@media (max-width: 968px) {
		.hero-content {
			grid-template-columns: 1fr;
			gap: var(--space-2xl);
		}

		.hero-text {
			max-width: none;
		}

		.hero-image {
			order: -1;
			aspect-ratio: 4 / 3;
			margin-bottom: var(--space-xl);
		}
	}

	@media (max-width: 968px) {
		.features-layout,
		.trust-layout {
			grid-template-columns: 1fr;
			gap: var(--space-xl);
		}

		.features-heading,
		.trust-heading {
			position: static;
		}

		.features-grid {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 768px) {
		.hero-features,
		.hero-actions {
			justify-content: center;
		}

		.hero-text {
			text-align: center;
		}

		.hero-subtitle {
			margin-left: auto;
			margin-right: auto;
		}

		.home-section {
			padding: var(--space-3xl) 0;
		}

		.cta-actions {
			flex-direction: column;
		}

		.section-title.text-left {
			text-align: center;
		}

		.section-eyebrow {
			text-align: center;
		}

		.features-intro {
			max-width: none;
			text-align: center;
			margin-left: auto;
			margin-right: auto;
		}

		.trust-item {
			grid-template-columns: 1fr;
			text-align: center;
		}

		.trust-index {
			margin: 0 auto;
		}
	}
</style>
