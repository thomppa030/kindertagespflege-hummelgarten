<script lang="ts">
	import ContentSection from '$lib/components/ContentSection.svelte';
	import { PrismicRichText, PrismicImage } from '@prismicio/svelte';
	import type { ImageField, RichTextField, TitleField } from '@prismicio/client';

	export let data;

	interface AboutData {
		profile_image?: ImageField;
		title?: TitleField;
		lead_text?: RichTextField;
		content?: RichTextField;
		meta_title?: string;
		meta_description?: string;
	}

	$: aboutData = (data.about?.data || {}) as AboutData;
</script>

<svelte:head>
	<title>{aboutData.meta_title || 'Über mich - Kindertagespflege Hummelgarten'}</title>
	<meta
		name="description"
		content={aboutData.meta_description ||
			'Lernen Sie mich kennen - Ihre Tagesmutter im Hummelgarten'}
	/>
</svelte:head>

<div class="about-page">
	<div class="circular-image-section">
		<div class="circle-container">
			{#if aboutData.profile_image?.url}
				<PrismicImage field={aboutData.profile_image} />
			{:else}
				<img src="/Hummel.svg" alt="Kindertagespflege Hummelgarten Logo" class="fallback-image" />
			{/if}
		</div>
	</div>

	<ContentSection>
		<article class="about-content">
			{#if aboutData.title}
				<PrismicRichText field={aboutData.title} />
			{:else}
				<h1>Über mich</h1>
			{/if}

			{#if aboutData.lead_text}
				<div class="lead">
					<PrismicRichText field={aboutData.lead_text} />
				</div>
			{:else}
				<p class="lead-text">
					Ich bin Ihre Tagesmutter im Hummelgarten – seit über zehn Jahren begleite ich Kinder in
					den ersten, prägendsten Jahren ihres Lebens.
				</p>
			{/if}

			{#if aboutData.content}
				<div class="content-area">
					<PrismicRichText field={aboutData.content} />
				</div>
			{:else}
				<!--
					Placeholder biography — replace with the real story once confirmed.
					Details below (year founded, qualifications, jurisdiction) are drafted
					examples, not verified facts about this business.
				-->
				<div class="content-area">
					<p>
						Nach meiner Ausbildung zur staatlich anerkannten Tagespflegeperson und mehreren Jahren
						Erfahrung in einer Kindertagesstätte habe ich mich entschieden, Kinder in einem
						kleineren, familiäreren Rahmen zu betreuen. Seit 2009 führe ich die Kindertagespflege
						Hummelgarten in meinem eigenen Zuhause in Löwenberger Land.
					</p>

					<p>
						Was mich antreibt, ist die Überzeugung, dass Kinder am besten lernen, wenn sie sich
						sicher und geborgen fühlen – und wenn sie draußen sein können, in der Natur, mit Tieren,
						mit Erde unter den Fingernägeln.
					</p>

					<h2>Meine Philosophie</h2>
					<p>
						Jedes Kind hat sein eigenes Tempo. In meiner Kindertagespflege begleite ich maximal
						fünf Kinder gleichzeitig, damit ich wirklich Zeit für jedes Einzelne habe – für seine
						Fragen, seine Sorgen und seine kleinen und großen Entdeckungen.
					</p>

					<p>
						Unser Garten, der angrenzende Wald und unsere Katze Kelly sind dabei feste Bestandteile
						des Alltags. Kinder lernen hier nicht aus Büchern über Verantwortung und
						Rücksichtnahme – sie erleben sie jeden Tag.
					</p>

					<h2>Qualifikationen</h2>
					<p>
						Staatlich anerkannte Tagespflegeperson, regelmäßige Fortbildungen in
						Erster-Hilfe-am-Kind, Ernährung und früh­kindlicher Entwicklung, sowie laufende
						Zusammenarbeit mit dem Jugendamt Oberhavel.
					</p>
				</div>
			{/if}
		</article>
	</ContentSection>
</div>

<style>
	.about-page {
		background-color: var(--color-background);
		min-height: 100vh;
	}

	.circular-image-section {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: var(--space-3xl) 0 var(--space-xl);
		background: linear-gradient(to bottom, var(--color-sand), var(--color-background));
	}

	.circle-container {
		width: 300px;
		height: 300px;
		border-radius: 50%;
		overflow: hidden;
		box-shadow: var(--shadow-lg);
		border: 5px solid var(--color-warm-white);
		position: relative;
		background-color: var(--color-warm-white);
	}

	.circle-container :global(img) {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.fallback-image {
		padding: var(--space-2xl);
		object-fit: contain;
	}

	.about-content {
		max-width: 750px;
		margin: 0 auto;
		padding: var(--space-3xl) var(--space-md);
	}

	.about-content :global(h1) {
		font-size: var(--text-4xl);
		margin-bottom: var(--space-xl);
		text-align: center;
		line-height: 1.2;
	}

	.about-content :global(h2) {
		font-size: var(--text-2xl);
		color: var(--color-text-primary);
		margin-top: var(--space-3xl);
		margin-bottom: var(--space-lg);
		line-height: 1.3;
	}

	.about-content :global(p) {
		font-size: var(--text-lg);
		line-height: 1.8;
		color: var(--color-text-secondary);
		margin-bottom: var(--space-lg);
		max-width: 65ch;
	}

	.lead-text,
	.lead :global(p) {
		font-size: var(--text-xl);
		line-height: 1.7;
		color: var(--color-text-primary);
		margin-bottom: var(--space-2xl);
		text-align: center;
		font-weight: 500;
		max-width: 55ch;
		margin-left: auto;
		margin-right: auto;
	}

	.content-area :global(h2:first-child) {
		margin-top: 0;
	}

	@media (max-width: 768px) {
		.circular-image-section {
			padding: var(--space-2xl) 0 var(--space-lg);
		}

		.circle-container {
			width: 250px;
			height: 250px;
		}

		.about-content {
			padding: var(--space-2xl) var(--space-md);
		}

		.about-content :global(h1) {
			font-size: var(--text-3xl);
		}

		.about-content :global(h2) {
			font-size: var(--text-xl);
			margin-top: var(--space-2xl);
		}

		.about-content :global(p) {
			font-size: var(--text-base);
			text-align: left;
		}

		.lead-text,
		.lead :global(p) {
			font-size: var(--text-lg);
			text-align: left;
		}
	}

	@media (max-width: 480px) {
		.circular-image-section {
			padding: var(--space-xl) 0 var(--space-md);
		}

		.circle-container {
			width: 200px;
			height: 200px;
			border-width: 3px;
		}

		.about-content :global(h1) {
			font-size: var(--text-2xl);
		}

		.about-content :global(h2) {
			font-size: var(--text-lg);
		}
	}
</style>
