import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const data = await request.json();
		
		const { name, email, phone, message } = data;
		
		if (!name || !email || !message) {
			return json({ error: 'Bitte füllen Sie alle erforderlichen Felder aus.' }, { status: 400 });
		}
		
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return json({ error: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' }, { status: 400 });
		}
		
		console.log('Contact form submission:', {
			name,
			email,
			phone,
			message,
			timestamp: new Date().toISOString()
		});
		
		return json({ success: true });
	} catch (error) {
		console.error('Contact form error:', error);
		return json({ error: 'Ein Fehler ist aufgetreten.' }, { status: 500 });
	}
};