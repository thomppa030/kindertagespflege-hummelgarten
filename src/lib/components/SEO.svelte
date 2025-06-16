<script lang="ts">
	export let title: string;
	export let description: string;
	export let canonical: string | undefined = undefined;
	export let ogImage: string | undefined = undefined;
	export let ogType: string = 'website';
	export let noindex: boolean = false;
	export let nofollow: boolean = false;
	export let jsonLd: any[] | Record<string, any> | undefined = undefined;
	export let googleVerification: string | undefined = undefined;

	// Site defaults
	const siteName = 'Kindertagespflege Hummelgarten';
	const siteUrl = 'https://kindertagespflege-hummelgarten.de';
	const defaultOgImage = '/og-default.jpg';

	// Construct full title
	const fullTitle = title ? `${title} | ${siteName}` : siteName;

	// Construct canonical URL
	const canonicalUrl = canonical ? new URL(canonical, siteUrl).href : undefined;

	// Construct OG image URL
	const ogImageUrl = ogImage
		? new URL(ogImage, siteUrl).href
		: new URL(defaultOgImage, siteUrl).href;

	// Robots meta content
	const robotsContent = [noindex ? 'noindex' : 'index', nofollow ? 'nofollow' : 'follow'].join(
		', '
	);
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{fullTitle}</title>
	<meta name="title" content={fullTitle} />
	<meta name="description" content={description} />
	<meta name="robots" content={robotsContent} />

	{#if googleVerification}
		<meta name="google-site-verification" content={googleVerification} />
	{/if}

	{#if canonicalUrl}
		<link rel="canonical" href={canonicalUrl} />
	{/if}

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={ogType} />
	<meta property="og:url" content={canonicalUrl || siteUrl} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={ogImageUrl} />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:locale" content="de_DE" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={canonicalUrl || siteUrl} />
	<meta property="twitter:title" content={fullTitle} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={ogImageUrl} />

	<!-- Structured Data -->
	{#if jsonLd}
		{#if Array.isArray(jsonLd)}
			{#each jsonLd as data}
				{@html `<script type="application/ld+json">${JSON.stringify(data)}</script>`}
			{/each}
		{:else}
			{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
		{/if}
	{/if}
</svelte:head>

