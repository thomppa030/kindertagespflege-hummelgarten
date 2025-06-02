<script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	let visible = false;
	let sections = [];

	onMount(() => {
		visible = true;

		// Intersection observer for fade-in animations
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

		// Small delay to ensure DOM is ready
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
		<!-- Hero Section -->
		<section class="hero" in:fade={{ duration: 800 }}>
			<div class="hero-content">
				<h1 class="hero-title">Kindertagespflege in familiärer Atmosphäre</h1>
				<p class="hero-subtitle">Liebevolle Ganztagsbetreuung für bis zu 5 Kinder</p>
			</div>
			<div class="hero-decoration">
				<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
					<path
						fill="#8CC152"
						fill-opacity="0.1"
						d="M47.5,-65.2C60.2,-56.8,68.1,-41.1,71.3,-24.8C74.5,-8.5,73,8.4,67.3,23.2C61.6,38,51.7,50.7,38.8,59.1C25.9,67.5,10,71.6,-6.9,69.9C-23.8,68.2,-41.7,60.7,-54.6,48.9C-67.5,37.1,-75.4,21,-76.3,4.3C-77.2,-12.4,-71.1,-29.8,-60.4,-43.1C-49.7,-56.4,-34.4,-65.6,-18.5,-68.5C-2.6,-71.4,13.9,-68,26.8,-60.2C39.7,-52.4,48.9,-40.3,47.5,-65.2Z"
						transform="translate(100 100)"
					/>
				</svg>
			</div>
		</section>

		<!-- Main Content -->
		<div class="content-wrapper">
			<!-- Home Section -->
			<section class="section home-section visible">
				<div class="section-content">
					<h2 class="section-title">
						<span class="icon">🏡</span>
						Unser Zuhause wird zu ihrem zweiten Zuhause
					</h2>
					<p class="lead-text">
						In meiner kleinen, familiären Kindertagespflege betreue ich maximal 5 Kinder in einer
						warmen, häuslichen Atmosphäre. Das Erdgeschoss meines Einfamilienhauses wurde speziell
						für die Bedürfnisse der Kinder eingerichtet.
					</p>

					<div class="features-grid">
						<div class="feature-card">
							<h3>40 qm Spielparadies</h3>
							<p>Großes Wohn- und Spielzimmer mit angrenzendem Wintergarten</p>
						</div>
						<div class="feature-card">
							<h3>Ruheoase</h3>
							<p>Separates Schlafzimmer für erholsame Ruhepausen</p>
						</div>
						<div class="feature-card">
							<h3>Gemeinsam kochen</h3>
							<p>Offene Küche zum gemeinsamen Kochen und Essen</p>
						</div>
						<div class="feature-card">
							<h3>Direkter Gartenzugang</h3>
							<p>Nahtloses Innen-Außen-Spiel bei jedem Wetter</p>
						</div>
					</div>
				</div>
			</section>

			<!-- Garden Section -->
			<section class="section garden-section">
				<div class="section-content">
					<h2 class="section-title">
						<span class="icon">🌱</span>
						Naturerlebnis direkt vor der Haustür
					</h2>

					<div class="text-image-block">
						<div class="text-content">
							<h3>Unser Garten als grünes Klassenzimmer</h3>
							<p>
								Hier erleben die Kinder den kompletten Naturkreislauf mit allen Sinnen – vom
								Samenkorn bis zur selbstgekochten Suppe.
							</p>

							<ul class="nature-list">
								<li>Säen wir Gemüse und Blumen</li>
								<li>Beobachten das Wachstum durch die Jahreszeiten</li>
								<li>Pflegen unsere Beete und lernen Verantwortung</li>
								<li>Ernten und verarbeiten unser eigenes Gemüse</li>
								<li>Entdecken Insekten auf der bunten Blumenwiese</li>
								<li>Freuen uns über tägliche Besuche "unseres" Eichhörnchens</li>
							</ul>
						</div>

						<div class="image-placeholder garden-image">
							<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
								<rect width="400" height="300" fill="#E8F5E9" />
								<circle cx="350" cy="50" r="30" fill="#FFD93D" opacity="0.8" />
								<path
									d="M0 200 Q100 150 200 180 T400 200 L400 300 L0 300 Z"
									fill="#8CC152"
									opacity="0.6"
								/>
								<path
									d="M50 250 L50 200 Q50 190 60 190 Q70 190 70 200 L70 250"
									stroke="#6B4423"
									stroke-width="8"
									fill="none"
								/>
								<circle cx="60" cy="180" r="25" fill="#8CC152" />
							</svg>
						</div>
					</div>

					<div class="movement-block">
						<h3>Bewegung und Entwicklung</h3>
						<div class="movement-features">
							<span class="feature-tag">Vielfältige Untergründe</span>
							<span class="feature-tag">Kirschbaum-Hügel</span>
							<span class="feature-tag">Schaukel & Sandkasten</span>
							<span class="feature-tag">Ruhige Rückzugsorte</span>
						</div>
					</div>
				</div>
			</section>

			<!-- Animals Section -->
			<section class="section animals-section">
				<div class="section-content">
					<h2 class="section-title">
						<span class="icon">🐾</span>
						Tierische Begleiter als Co-Pädagogen
					</h2>

					<div class="animals-intro">
						<p>
							Mein Hund Dio (fast 14 Jahre, ausgebildet und geimpft) und Katze Kelly (1,5 Jahre,
							entwurmt und geimpft) leben mit uns zusammen.
						</p>
					</div>

					<div class="learning-cards">
						<div class="learning-card">
							<h4>Respektvolle Tierbegegnungen</h4>
						</div>
						<div class="learning-card">
							<h4>Empathie und Fürsorglichkeit</h4>
						</div>
						<div class="learning-card">
							<h4>Verantwortung im Umgang mit Lebewesen</h4>
						</div>
					</div>
				</div>
			</section>

			<!-- Forest Section -->
			<section class="section forest-section">
				<div class="section-content">
					<h2 class="section-title">
						<span class="icon">🌲</span>
						Abenteuer vor der Haustür
					</h2>

					<div class="forest-content">
						<h3>Wald und Wiesen als Erfahrungsraum</h3>
						<p class="forest-intro">
							Das Lindsche Luch und der Wald liegen direkt vor unserer Tür. Mit unserem Krippenwagen
							erkunden wir regelmäßig:
						</p>

						<div class="exploration-grid">
							<div class="exploration-item">
								<span class="season-icon">🍂</span>
								<p>Die vier Jahreszeiten im Wald</p>
							</div>
							<div class="exploration-item">
								<span class="season-icon">🦌</span>
								<p>Heimische Tiere und Pflanzen</p>
							</div>
							<div class="exploration-item">
								<span class="season-icon">🍃</span>
								<p>Naturmaterialien zum Spielen und Basteln</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- Partnership Section -->
			<section class="section partnership-section">
				<div class="section-content">
					<h2 class="section-title">
						<span class="icon">🤝</span>
						Soziales Lernen durch Kooperation
					</h2>

					<div class="partnership-block">
						<h3>Partnerschaft mit Kindertagespflege Lindeblatt</h3>
						<p>Durch regelmäßige gemeinsame Aktivitäten erweitern wir den sozialen Horizont:</p>

						<div class="benefits-list">
							<div class="benefit">
								<span>Spielen in größeren Gruppen</span>
							</div>
							<div class="benefit">
								<span>Neue Freundschaften knüpfen</span>
							</div>
							<div class="benefit">
								<span>Gemeinsame Waldausflüge und Unternehmungen</span>
							</div>
							<div class="benefit">
								<span>Mehr Abwechslung im Alltag</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- Education Section -->
			<section class="section education-section">
				<div class="section-content">
					<h2 class="section-title">
						<span class="icon">📚</span>
						Ganzheitliche Förderung nach dem Bildungsplan des Landes Brandenburg
					</h2>

					<div class="education-content">
						<p>
							Alle Bereiche des aktuellen Bildungsplans fließen spielerisch in unseren Alltag ein.
							Das ausführliche pädagogische Konzept stelle ich Ihnen gerne persönlich vor.
						</p>
					</div>
				</div>
			</section>

			<!-- Hours Section -->
			<section class="section hours-section">
				<div class="section-content">
					<h2 class="section-title">
						<span class="icon">🕐</span>
						Betreuungszeiten
					</h2>

					<div class="hours-grid">
						<div class="hours-card primary">
							<h3>Öffnungszeiten</h3>
							<p class="hours-time">Montag bis Freitag</p>
							<p class="hours-time">7:00 bis 16:00 Uhr</p>
						</div>
						<div class="hours-card">
							<h3>Flexibilität</h3>
							<p>Frühere oder spätere Zeiten nach individueller Absprache möglich</p>
						</div>
					</div>
				</div>
			</section>

			<!-- CTA Section -->
			<section class="section cta-section">
				<div class="cta-content">
					<p class="cta-text">
						Lassen Sie uns gerne bei einem unverbindlichen Kennenlerntermin besprechen, wie Ihr Kind
						bei uns bestmöglich gefördert und betreut werden kann.
					</p>
					<a href="/kontakt" class="cta-button">Kontakt aufnehmen</a>
				</div>
			</section>
		</div>
	{/if}
</div>

<style>
	.konzept-page {
		min-height: 100vh;
		background: linear-gradient(to bottom, #fafafa, #ffffff);
	}

	/* Hero Section */
	.hero {
		position: relative;
		padding: 8rem 2rem 6rem;
		text-align: center;
		overflow: hidden;
	}

	.hero-content {
		position: relative;
		z-index: 2;
		max-width: 800px;
		margin: 0 auto;
	}

	.hero-title {
		font-size: clamp(2rem, 5vw, 3.5rem);
		font-weight: 300;
		color: #2d3436;
		margin-bottom: 1rem;
		line-height: 1.2;
	}

	.hero-subtitle {
		font-size: clamp(1.2rem, 3vw, 1.5rem);
		color: #636e72;
		font-weight: 300;
	}

	.hero-decoration {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 600px;
		height: 600px;
		z-index: 1;
		opacity: 0.5;
	}

	/* Content Wrapper */
	.content-wrapper {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	/* Section Styles */
	.section {
		margin-bottom: 6rem;
		opacity: 0;
		transform: translateY(30px);
		transition: all 0.8s ease-out;
	}

	.section.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.section-content {
		background: white;
		border-radius: 20px;
		padding: 3rem;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
	}

	.section-title {
		font-size: 2rem;
		font-weight: 300;
		color: #2d3436;
		margin-bottom: 2rem;
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.section-title .icon {
		font-size: 2.5rem;
		filter: grayscale(20%);
	}

	.lead-text {
		font-size: 1.1rem;
		line-height: 1.8;
		color: #636e72;
		margin-bottom: 2rem;
	}

	/* Features Grid */
	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
		margin-top: 2rem;
	}

	.feature-card {
		background: #f8f9fa;
		padding: 2rem;
		border-radius: 15px;
		transition: transform 0.3s ease;
	}

	.feature-card:hover {
		transform: translateY(-5px);
	}

	.feature-card h3 {
		font-size: 1.2rem;
		font-weight: 500;
		color: #2d3436;
		margin-bottom: 0.5rem;
	}

	.feature-card p {
		color: #636e72;
		line-height: 1.6;
	}

	/* Text Image Block */
	.text-image-block {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		align-items: center;
		margin: 2rem 0;
	}

	.text-content h3 {
		font-size: 1.5rem;
		font-weight: 400;
		color: #2d3436;
		margin-bottom: 1rem;
	}

	.nature-list {
		list-style: none;
		padding: 0;
		margin: 1.5rem 0;
	}

	.nature-list li {
		padding: 0.5rem 0;
		padding-left: 2rem;
		position: relative;
		color: #636e72;
		line-height: 1.6;
	}

	.nature-list li::before {
		content: '🌿';
		position: absolute;
		left: 0;
	}

	.image-placeholder {
		border-radius: 15px;
		overflow: hidden;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
	}

	/* Movement Block */
	.movement-block {
		background: #f0f9ff;
		padding: 2rem;
		border-radius: 15px;
		margin-top: 2rem;
	}

	.movement-block h3 {
		font-size: 1.3rem;
		font-weight: 400;
		color: #2d3436;
		margin-bottom: 1.5rem;
	}

	.movement-features {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.feature-tag {
		background: white;
		padding: 0.5rem 1.5rem;
		border-radius: 25px;
		color: #636e72;
		font-size: 0.95rem;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
	}

	/* Animals Section */
	.animals-intro {
		text-align: center;
		font-size: 1.1rem;
		color: #636e72;
		margin-bottom: 2rem;
		line-height: 1.8;
	}

	.learning-cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 2rem;
		margin-top: 2rem;
	}

	.learning-card {
		text-align: center;
		padding: 2rem;
		background: #fff9e6;
		border-radius: 15px;
		transition: transform 0.3s ease;
	}

	.learning-card:hover {
		transform: translateY(-5px);
	}

	.card-icon {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	.learning-card h4 {
		font-weight: 400;
		color: #2d3436;
		font-size: 1.1rem;
	}

	/* Forest Section */
	.forest-content {
		background: #e8f5e9;
		padding: 2.5rem;
		border-radius: 15px;
	}

	.forest-content h3 {
		font-size: 1.5rem;
		font-weight: 400;
		color: #2d3436;
		margin-bottom: 1rem;
	}

	.forest-intro {
		color: #636e72;
		margin-bottom: 2rem;
		line-height: 1.8;
	}

	.exploration-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
	}

	.exploration-item {
		display: flex;
		align-items: center;
		gap: 1rem;
		background: white;
		padding: 1.5rem;
		border-radius: 10px;
	}

	.season-icon {
		font-size: 2rem;
	}

	.exploration-item p {
		margin: 0;
		color: #636e72;
	}

	/* Partnership Section */
	.partnership-block {
		background: #f3e5f5;
		padding: 2.5rem;
		border-radius: 15px;
	}

	.partnership-block h3 {
		font-size: 1.5rem;
		font-weight: 400;
		color: #2d3436;
		margin-bottom: 1rem;
	}

	.partnership-block > p {
		color: #636e72;
		margin-bottom: 2rem;
		line-height: 1.8;
	}

	.benefits-list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1.5rem;
	}

	.benefit {
		display: flex;
		align-items: center;
		gap: 1rem;
		background: white;
		padding: 1.2rem;
		border-radius: 10px;
	}

	.benefit-icon {
		font-size: 1.5rem;
	}

	.benefit span:last-child {
		color: #636e72;
	}

	/* Education Section */
	.education-content {
		background: #e3f2fd;
		padding: 2.5rem;
		border-radius: 15px;
		text-align: center;
	}

	.education-content p {
		font-size: 1.1rem;
		color: #636e72;
		line-height: 1.8;
		max-width: 700px;
		margin: 0 auto;
	}

	/* Hours Section */
	.hours-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.hours-card {
		background: #f8f9fa;
		padding: 2.5rem;
		border-radius: 15px;
		text-align: center;
	}

	.hours-card.primary {
		background: #8cc152;
		color: white;
	}

	.hours-card h3 {
		font-size: 1.5rem;
		font-weight: 400;
		margin-bottom: 1rem;
	}

	.hours-card.primary h3 {
		color: white;
	}

	.hours-time {
		font-size: 1.2rem;
		margin: 0.5rem 0;
	}

	.hours-card.primary .hours-time {
		color: white;
		font-weight: 500;
	}

	.hours-card:not(.primary) p {
		color: #636e72;
		line-height: 1.6;
	}

	/* CTA Section */
	.cta-section {
		margin-top: 4rem;
		margin-bottom: 4rem;
	}

	.cta-content {
		background: linear-gradient(135deg, #8cc152 0%, #6fa73d 100%);
		padding: 4rem 3rem;
		border-radius: 20px;
		text-align: center;
		color: white;
	}

	.cta-text {
		font-size: 1.2rem;
		line-height: 1.8;
		margin-bottom: 2rem;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}

	.cta-button {
		display: inline-block;
		background: white;
		color: #8cc152;
		padding: 1rem 2.5rem;
		border-radius: 50px;
		text-decoration: none;
		font-weight: 500;
		transition: all 0.3s ease;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
	}

	.cta-button:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.hero {
			padding: 5rem 1.5rem 4rem;
		}

		.section-content {
			padding: 2rem 1.5rem;
		}

		.text-image-block {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.image-placeholder {
			order: -1;
			max-width: 100%;
			height: 250px;
		}

		.hours-grid {
			grid-template-columns: 1fr;
		}

		.cta-content {
			padding: 3rem 2rem;
		}
	}
</style>

