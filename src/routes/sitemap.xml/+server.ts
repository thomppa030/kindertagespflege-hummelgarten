import type { RequestHandler } from './$types';
import { createClient } from '$lib/prismicio';

const SITE_URL = 'https://kindertagespflege-hummelgarten.de'; // Update with your actual domain

export const GET: RequestHandler = async ({ fetch, cookies }) => {
	const client = createClient({ fetch, cookies });

	// Static pages
	const staticPages = [
		{ path: '/', priority: '1.0', changefreq: 'weekly' },
		{ path: '/konzept', priority: '0.8', changefreq: 'monthly' },
		{ path: '/ueber-mich', priority: '0.8', changefreq: 'monthly' },
		{ path: '/kontakt', priority: '0.9', changefreq: 'monthly' }
	];

	// Fetch dynamic pages from Prismic
	const pages = await client.getAllByType('page');
	
	// Filter out pages that might be handled by static routes
	const dynamicPages = pages
		.filter(page => page.uid && !['home', 'konzept', 'ueber-mich', 'kontakt'].includes(page.uid))
		.map(page => ({
			path: `/${page.uid}`,
			priority: '0.7',
			changefreq: 'monthly',
			lastmod: page.last_publication_date
		}));

	// Combine all pages
	const allPages = [...staticPages, ...dynamicPages];

	// Generate sitemap XML
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
	.map(
		page => `  <url>
    <loc>${SITE_URL}${page.path}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>${
		page.lastmod ? `\n    <lastmod>${new Date(page.lastmod).toISOString().split('T')[0]}</lastmod>` : ''
	}
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600' // Cache for 1 hour
		}
	});
};