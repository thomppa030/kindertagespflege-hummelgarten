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
				<img
					src="https://via.placeholder.com/400x400/e8f4f8/5a6c7d?text=Portrait"
					alt="Über mich"
				/>
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
			{/if}
			{#if aboutData.content}
				<div class="content-area">
					<PrismicRichText field={aboutData.content} />
				</div>
			{:else}
				<p class="lead">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae
					vestibulum vestibulum. Cras porttitor metus justo, ut gravida velit lacinia sit amet.
				</p>

				<p>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
					laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
					architecto beatae vitae dicta sunt explicabo.
				</p>

				<h2>Meine Philosophie</h2>
				<p>
					At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
					voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
					cupiditate non provident.
				</p>
			{/if}
		</article>
	</ContentSection>
</div>

<style>
	.about-page {
		background-color: #fafafa;
		min-height: 100vh;
	}

	.circular-image-section {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 4rem 0 2rem;
		background: linear-gradient(to bottom, #f0f7fa 0%, #fafafa 100%);
	}

	.circle-container {
		width: 300px;
		height: 300px;
		border-radius: 50%;
		overflow: hidden;
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
		border: 5px solid white;
		position: relative;
		background-color: white;
	}

	.circle-container img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.about-content {
		max-width: 750px;
		margin: 0 auto;
		padding: 4rem 1rem;
	}

	.about-content :global(h1) {
		font-size: 2.75rem;
		color: #2c3e50;
		margin-bottom: 2rem;
		font-weight: 300;
		text-align: center;
		line-height: 1.2;
	}

	.about-content :global(h2) {
		font-size: 1.75rem;
		color: #34495e;
		margin-top: 3rem;
		margin-bottom: 1.5rem;
		font-weight: 400;
		line-height: 1.3;
	}

	.about-content :global(p) {
		font-size: 1.125rem;
		line-height: 1.8;
		color: #5a6c7d;
		margin-bottom: 1.75rem;
		text-align: justify;
		hyphens: auto;
	}

	.lead :global(p) {
		font-size: 1.25rem;
		line-height: 1.7;
		color: #4a5a6a;
		margin-bottom: 2.5rem;
		text-align: center;
		font-weight: 300;
	}

	.content-area :global(h2:first-child) {
		margin-top: 0;
	}

	@media (max-width: 768px) {
		.circular-image-section {
			padding: 3rem 0 1.5rem;
		}

		.circle-container {
			width: 250px;
			height: 250px;
		}

		.about-content {
			padding: 3rem 1rem;
		}

		.about-content :global(h1) {
			font-size: 2.25rem;
		}

		.about-content :global(h2) {
			font-size: 1.5rem;
			margin-top: 2.5rem;
		}

		.about-content :global(p) {
			font-size: 1.0625rem;
			text-align: left;
		}

		.lead :global(p) {
			font-size: 1.125rem;
			text-align: left;
		}
	}

	@media (max-width: 480px) {
		.circular-image-section {
			padding: 2rem 0 1rem;
		}

		.circle-container {
			width: 200px;
			height: 200px;
			border-width: 3px;
		}

		.about-content :global(h1) {
			font-size: 2rem;
		}

		.about-content :global(h2) {
			font-size: 1.375rem;
		}
	}
</style>
