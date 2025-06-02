import { createClient } from '$lib/prismicio';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, cookies }) => {
	const client = createClient({ fetch, cookies });
	
	try {
		// @ts-expect-error - About type not yet in Prismic types
		const about = await client.getSingle('about');
		
		return {
			about
		};
	} catch (error) {
		// Return a mock about object if the document doesn't exist yet
		return {
			about: {
				data: {
					title: null,
					lead_text: null,
					content: null,
					profile_image: null,
					meta_title: null,
					meta_description: null
				}
			}
		};
	}
};