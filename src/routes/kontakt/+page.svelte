<script lang="ts">
	import ContactForm from '$lib/components/ContactForm.svelte';
	import ContentSection from '$lib/components/ContentSection.svelte';
</script>

<svelte:head>
	<title>Kontakt - Kindertagespflege Hummelgarten</title>
	<meta
		name="description"
		content="Nehmen Sie Kontakt mit uns auf. Wir freuen uns auf Ihre Nachricht."
	/>
</svelte:head>

<div class="contact-page">
	<ContentSection>
		<ContactForm />
	</ContentSection>
</div>

<style>
	.contact-page {
		min-height: calc(100vh - 200px);
		padding: 4rem 0;
		background-color: #fafafa;
	}

	.contact-header {
		text-align: center;
		margin-bottom: 3rem;
	}

	h1 {
		font-size: 2.5rem;
		color: #2c3e50;
		margin-bottom: 1rem;
		font-weight: 300;
	}

	.intro-text {
		font-size: 1.1rem;
		color: #5a6c7d;
		line-height: 1.6;
		max-width: 600px;
		margin: 0 auto;
	}
</style>

