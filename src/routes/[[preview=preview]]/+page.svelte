<script>
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';
	import Hero from '$lib/components/Hero.svelte';
	import FloatingBanner from '$lib/components/FloatingBanner.svelte';
	import BentoGallery from '$lib/components/BentoGallery.svelte';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	export let data;
	
	$: pageData = data.page.data;
	
	let visible = false;
	let sections = [];
	
	// Gallery images
	const galleryImages = [
		{ src: '/PicturesHome/20250415_100440.jpg', alt: 'Kinder beim Spielen im Garten', caption: 'Gemeinsam im Garten' },
		{ src: '/PicturesHome/20250429_100707.jpg', alt: 'Kreatives Basteln', caption: 'Kreativzeit' },
		{ src: '/PicturesHome/20250430_090229.jpg', alt: 'Naturentdeckungen', caption: 'Naturentdeckungen' },
		{ src: '/PicturesHome/20250430_090247.jpg', alt: 'Spielzeit drinnen', caption: 'Spielzeit' },
		{ src: '/PicturesHome/20250514_094452.jpg', alt: 'Gemeinsames Lernen', caption: 'Lernen mit Freude' },
		{ src: '/PicturesHome/20250514_094537(0).jpg', alt: 'Gartenzeit', caption: 'Unser Garten' },
		{ src: '/PicturesHome/20250514_094803.jpg', alt: 'Draußen aktiv', caption: 'Bewegung im Freien' },
		{ src: '/PicturesHome/IMG-20250429-WA0017.jpg', alt: 'Fröhliche Momente', caption: 'Glückliche Kinder' }
	];
	
	onMount(() => {
		visible = true;
		
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach(entry => {
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
			sections.forEach(section => observer.observe(section));
		}, 100);
		
		return () => {
			sections.forEach(section => observer.unobserve(section));
		};
	});
</script>

<svelte:head>
	<title>Kindertagespflege Hummelgarten - Liebevolle Betreuung in Oranienburg</title>
	<meta name="description" content="Familiäre Kindertagespflege für bis zu 5 Kinder in Oranienburg. Naturverbunden, tiergestützt, mit eigenem Garten und Waldnähe. Betreuung von 7-16 Uhr." />
</svelte:head>

<FloatingBanner />

<!-- Custom Hero Section -->
<section class="custom-hero">
	{#if visible}
		<div class="hero-content" in:fade={{ duration: 800 }}>
			<div class="hero-text">
				<h1 class="hero-title">
					Willkommen im 
					<span class="highlight">Hummelgarten</span>
				</h1>
				<p class="hero-subtitle">
					Wo kleine Entdecker in familiärer Atmosphäre<br />
					wachsen, spielen und die Natur erleben
				</p>
				<div class="hero-features">
					<span class="feature-badge">
						<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
							<polyline points="22 4 12 14.01 9 11.01"/>
						</svg>
						Bis zu 5 Kinder
					</span>
					<span class="feature-badge">
						<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
							<polyline points="22 4 12 14.01 9 11.01"/>
						</svg>
						Eigener Garten
					</span>
					<span class="feature-badge">
						<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
							<polyline points="22 4 12 14.01 9 11.01"/>
						</svg>
						Waldnähe
					</span>
				</div>
				<div class="hero-actions">
					<a href="/konzept" class="btn-primary">Unser Konzept entdecken</a>
					<a href="/kontakt" class="btn-secondary">Kennenlernen vereinbaren</a>
				</div>
			</div>
			<div class="hero-image">
				<div class="image-decoration">
					<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
						<path fill="#8CC152" fill-opacity="0.15" d="M47.5,-65.2C60.2,-56.8,68.1,-41.1,71.3,-24.8C74.5,-8.5,73,8.4,67.3,23.2C61.6,38,51.7,50.7,38.8,59.1C25.9,67.5,10,71.6,-6.9,69.9C-23.8,68.2,-41.7,60.7,-54.6,48.9C-67.5,37.1,-75.4,21,-76.3,4.3C-77.2,-12.4,-71.1,-29.8,-60.4,-43.1C-49.7,-56.4,-34.4,-65.6,-18.5,-68.5C-2.6,-71.4,13.9,-68,26.8,-60.2C39.7,-52.4,48.9,-40.3,47.5,-65.2Z" transform="translate(100 100)" />
					</svg>
				</div>
				<!-- Placeholder for image -->
				<div class="hero-image-container">
					<img 
						src="/PicturesHome/20250514_094452.jpg" 
						alt="Kinder spielen im Hummelgarten"
						class="hero-main-image"
					/>
				</div>
			</div>
		</div>
	{/if}
</section>

<!-- Gallery Section -->
<section class="home-section gallery-section visible">
	<div class="container">
		<h2 class="section-title">Eindrücke aus unserem Alltag</h2>
		<p class="section-subtitle">Entdecken Sie die vielfältigen Momente in unserem Hummelgarten</p>
		<BentoGallery images={galleryImages.slice(0, 6)} />
	</div>
</section>

<!-- Key Features Section -->
<section class="home-section features-section visible">
	<div class="container">
		<h2 class="section-title">Was macht uns besonders?</h2>
		<div class="features-grid">
			<div class="feature-card">
				<div class="feature-icon">🏡</div>
				<h3>Familiäre Atmosphäre</h3>
				<p>In unserem liebevoll eingerichteten Erdgeschoss fühlen sich Kinder wie zu Hause. Mit eigenem Spielzimmer, Ruheraum und direktem Gartenzugang.</p>
			</div>
			<div class="feature-card">
				<div class="feature-icon">🌱</div>
				<h3>Naturverbunden</h3>
				<p>Unser großer Garten lädt zum Entdecken ein. Gemeinsam säen, pflegen und ernten wir - vom Samenkorn bis zur selbstgekochten Suppe.</p>
			</div>
			<div class="feature-card">
				<div class="feature-icon">🐾</div>
				<h3>Tiergestützte Pädagogik</h3>
				<p>Unser Hund Dio und Katze Kelly begleiten den Alltag. Kinder lernen respektvollen Umgang und entwickeln Empathie.</p>
			</div>
			<div class="feature-card">
				<div class="feature-icon">🌲</div>
				<h3>Waldabenteuer</h3>
				<p>Das Lindsche Luch liegt direkt vor der Tür. Mit dem Krippenwagen erkunden wir regelmäßig Wald und Wiesen.</p>
			</div>
		</div>
	</div>
</section>

<!-- Daily Rhythm Preview -->
<section class="home-section rhythm-section">
	<div class="container">
		<div class="rhythm-content">
			<div class="rhythm-text">
				<h2>Ein Tag bei uns</h2>
				<p class="rhythm-intro">
					Strukturierte Abläufe geben Sicherheit, während genug Raum für spontane Entdeckungen bleibt.
				</p>
				<div class="rhythm-highlights">
					<div class="rhythm-item">
						<span class="time">7:00</span>
						<span class="activity">Ankommen & Freispiel</span>
					</div>
					<div class="rhythm-item">
						<span class="time">9:00</span>
						<span class="activity">Gemeinsames Frühstück</span>
					</div>
					<div class="rhythm-item">
						<span class="time">10:00</span>
						<span class="activity">Garten oder Waldzeit</span>
					</div>
					<div class="rhythm-item">
						<span class="time">12:00</span>
						<span class="activity">Mittagessen & Ruhezeit</span>
					</div>
					<div class="rhythm-item">
						<span class="time">14:30</span>
						<span class="activity">Kreatives & Spielen</span>
					</div>
				</div>
				<a href="/konzept" class="link-arrow">
					Mehr über unser Konzept erfahren
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M5 12h14"/>
						<path d="m12 5 7 7-7 7"/>
					</svg>
				</a>
			</div>
			<div class="rhythm-image">
				<div class="image-circle">
					<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
						<!-- Clock circle -->
						<circle cx="150" cy="150" r="140" fill="#F0F9FF" stroke="#8CC152" stroke-width="2"/>
						<!-- Clock hands -->
						<line x1="150" y1="150" x2="150" y2="60" stroke="#2D3436" stroke-width="4" stroke-linecap="round"/>
						<line x1="150" y1="150" x2="200" y2="150" stroke="#636E72" stroke-width="3" stroke-linecap="round"/>
						<!-- Center dot -->
						<circle cx="150" cy="150" r="8" fill="#2D3436"/>
						<!-- Activity icons around the clock -->
						<text x="150" y="40" text-anchor="middle" font-size="24">☀️</text>
						<text x="240" y="160" text-anchor="middle" font-size="24">🌳</text>
						<text x="150" y="270" text-anchor="middle" font-size="24">🍽️</text>
						<text x="60" y="160" text-anchor="middle" font-size="24">🎨</text>
					</svg>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Trust Section -->
<section class="home-section trust-section">
	<div class="container">
		<h2 class="section-title">Vertrauen durch Qualität</h2>
		<div class="trust-grid">
			<div class="trust-card">
				<div class="trust-icon">👩‍🏫</div>
				<h3>Qualifizierte Betreuung</h3>
				<p>Zertifizierte Tagesmutter mit langjähriger Erfahrung und regelmäßigen Fortbildungen</p>
			</div>
			<div class="trust-card">
				<div class="trust-icon">🏅</div>
				<h3>Kleine Gruppe</h3>
				<p>Maximal 5 Kinder ermöglichen individuelle Förderung und enge Bindungen</p>
			</div>
			<div class="trust-card">
				<div class="trust-icon">🤝</div>
				<h3>Partnerschaft</h3>
				<p>Enge Zusammenarbeit mit Eltern und Kooperation mit Kindertagespflege Lindeblatt</p>
			</div>
			<div class="trust-card">
				<div class="trust-icon">📚</div>
				<h3>Bildungsplan</h3>
				<p>Ganzheitliche Förderung nach aktuellem Bildungsplan - spielerisch im Alltag integriert</p>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="home-section cta-section">
	<div class="container">
		<div class="cta-content">
			<h2>Bereit für einen Besuch im Hummelgarten?</h2>
			<p>Lernen Sie uns bei einem unverbindlichen Kennenlerntermin kennen.<br />Wir freuen uns auf Sie und Ihr Kind!</p>
			<div class="cta-actions">
				<a href="/kontakt" class="btn-primary large">Termin vereinbaren</a>
				<a href="/ueber-mich" class="btn-text">
					Mehr über mich erfahren
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M5 12h14"/>
						<path d="m12 5 7 7-7 7"/>
					</svg>
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Optional: Prismic Slices if content exists -->
{#if data.page.data.slices && data.page.data.slices.length > 0}
	<SliceZone slices={data.page.data.slices} {components} />
{/if}

<style>
	/* Container */
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	/* Custom Hero */
	.custom-hero {
		min-height: 90vh;
		display: flex;
		align-items: center;
		background: linear-gradient(135deg, #FAFAFA 0%, #F0F9FF 100%);
		padding: 2rem 0;
		overflow: hidden;
		position: relative;
	}

	.hero-content {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
	}

	.hero-title {
		font-size: clamp(2.5rem, 5vw, 4rem);
		font-weight: 300;
		color: #2D3436;
		line-height: 1.2;
		margin-bottom: 1.5rem;
	}

	.hero-title .highlight {
		color: #8CC152;
		font-weight: 400;
		position: relative;
	}

	.hero-subtitle {
		font-size: clamp(1.1rem, 2vw, 1.4rem);
		color: #636E72;
		line-height: 1.6;
		margin-bottom: 2rem;
	}

	.hero-features {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		margin-bottom: 2.5rem;
	}

	.feature-badge {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 1rem;
		background: white;
		border-radius: 20px;
		font-size: 0.9rem;
		color: #636E72;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
	}

	.feature-badge svg {
		color: #8CC152;
	}

	.hero-actions {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.btn-primary, .btn-secondary {
		padding: 1rem 2rem;
		border-radius: 50px;
		text-decoration: none;
		font-weight: 500;
		transition: all 0.3s ease;
		display: inline-block;
	}

	.btn-primary {
		background: #8CC152;
		color: white;
		box-shadow: 0 4px 15px rgba(140, 193, 82, 0.3);
	}

	.btn-primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(140, 193, 82, 0.4);
	}

	.btn-secondary {
		background: white;
		color: #8CC152;
		border: 2px solid #8CC152;
	}

	.btn-secondary:hover {
		background: #8CC152;
		color: white;
	}

	.btn-primary.large {
		padding: 1.2rem 2.5rem;
		font-size: 1.1rem;
	}

	.hero-image {
		position: relative;
	}

	.image-decoration {
		position: absolute;
		top: -50px;
		right: -50px;
		width: 300px;
		height: 300px;
		z-index: 0;
	}

	.hero-image-container {
		position: relative;
		z-index: 1;
		background: white;
		border-radius: 20px;
		overflow: hidden;
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
		width: 100%;
		height: 400px;
	}

	.hero-main-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	/* Sections */
	.home-section {
		padding: 5rem 0;
		opacity: 0;
		transform: translateY(30px);
		transition: all 0.8s ease-out;
	}

	.home-section.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.section-title {
		font-size: clamp(2rem, 4vw, 3rem);
		font-weight: 300;
		color: #2D3436;
		text-align: center;
		margin-bottom: 3rem;
	}

	/* Gallery Section */
	.gallery-section {
		background: white;
		padding: 4rem 0;
	}

	.section-subtitle {
		text-align: center;
		font-size: 1.2rem;
		color: #636E72;
		margin-top: -1.5rem;
		margin-bottom: 3rem;
		font-weight: 300;
	}

	/* Features Section */
	.features-section {
		background: #FAFAFA;
	}

	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 2rem;
	}

	.feature-card {
		background: white;
		padding: 2.5rem;
		border-radius: 20px;
		text-align: center;
		transition: all 0.3s ease;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
	}

	.feature-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
	}

	.feature-icon {
		font-size: 3rem;
		margin-bottom: 1rem;
		filter: grayscale(20%);
	}

	.feature-card h3 {
		font-size: 1.4rem;
		font-weight: 400;
		color: #2D3436;
		margin-bottom: 1rem;
	}

	.feature-card p {
		color: #636E72;
		line-height: 1.6;
	}

	/* Rhythm Section */
	.rhythm-section {
		background: white;
	}

	.rhythm-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
	}

	.rhythm-text h2 {
		font-size: clamp(2rem, 4vw, 2.5rem);
		font-weight: 300;
		color: #2D3436;
		margin-bottom: 1rem;
	}

	.rhythm-intro {
		font-size: 1.2rem;
		color: #636E72;
		margin-bottom: 2rem;
		line-height: 1.6;
	}

	.rhythm-highlights {
		background: #F8F9FA;
		padding: 2rem;
		border-radius: 20px;
		margin-bottom: 2rem;
	}

	.rhythm-item {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		padding: 1rem 0;
		border-bottom: 1px solid #E9ECEF;
	}

	.rhythm-item:last-child {
		border-bottom: none;
	}

	.time {
		font-weight: 500;
		color: #8CC152;
		font-size: 1.1rem;
		min-width: 60px;
	}

	.activity {
		color: #636E72;
		font-size: 1.1rem;
	}

	.link-arrow {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: #8CC152;
		text-decoration: none;
		font-weight: 500;
		transition: gap 0.3s ease;
	}

	.link-arrow:hover {
		gap: 1rem;
	}

	.image-circle {
		background: white;
		border-radius: 50%;
		padding: 2rem;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
	}

	/* Trust Section */
	.trust-section {
		background: #F0F9FF;
	}

	.trust-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
	}

	.trust-card {
		text-align: center;
		padding: 2rem;
	}

	.trust-icon {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	.trust-card h3 {
		font-size: 1.3rem;
		font-weight: 400;
		color: #2D3436;
		margin-bottom: 0.5rem;
	}

	.trust-card p {
		color: #636E72;
		line-height: 1.6;
	}

	/* CTA Section */
	.cta-section {
		background: linear-gradient(135deg, #8CC152 0%, #6FA73D 100%);
		color: white;
		text-align: center;
	}

	.cta-content h2 {
		font-size: clamp(2rem, 4vw, 2.5rem);
		font-weight: 300;
		margin-bottom: 1rem;
	}

	.cta-content p {
		font-size: 1.2rem;
		line-height: 1.6;
		margin-bottom: 2.5rem;
		opacity: 0.95;
	}

	.cta-actions {
		display: flex;
		gap: 2rem;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}

	.cta-section .btn-primary {
		background: white;
		color: #8CC152;
	}

	.cta-section .btn-primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
	}

	.btn-text {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: white;
		text-decoration: none;
		font-weight: 500;
		transition: gap 0.3s ease;
	}

	.btn-text:hover {
		gap: 1rem;
	}

	/* Responsive */
	@media (max-width: 768px) {
		.hero-content,
		.rhythm-content {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.hero-image {
			order: -1;
			max-width: 400px;
			margin: 0 auto;
		}

		.image-decoration {
			display: none;
		}

		.hero-features {
			justify-content: center;
		}

		.hero-actions {
			justify-content: center;
		}

		.rhythm-image {
			max-width: 300px;
			margin: 0 auto;
		}

		.home-section {
			padding: 3rem 0;
		}

		.cta-actions {
			flex-direction: column;
		}
	}
</style>