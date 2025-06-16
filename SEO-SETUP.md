# SEO Setup Guide for Kindertagespflege Hummelgarten

## Overview
This document outlines the SEO implementation for your SvelteKit website.

## 1. SEO Component Usage

The SEO component (`src/lib/components/SEO.svelte`) handles all meta tags. Use it in your pages:

```svelte
<script>
  import SEO from '$lib/components/SEO.svelte';
</script>

<SEO 
  title="Your Page Title"
  description="Your page description (150-160 characters)"
  canonical="/your-page-path"
  ogImage="/path-to-image.jpg"
  jsonLd={yourStructuredData}
/>
```

## 2. Sitemap

- **Location**: Automatically generated at `/sitemap.xml`
- **Update domain**: Edit `SITE_URL` in `src/routes/sitemap.xml/+server.ts`
- **Submit to**: Google Search Console after verification

## 3. Google Search Console Setup

### Option 1: HTML File Verification
1. Get verification code from Google Search Console
2. Update `GOOGLE_VERIFICATION_CODE` in `src/routes/google-site-verification.html/+server.ts`

### Option 2: Meta Tag Verification
1. Get verification content from Google Search Console
2. Add to your homepage:
```svelte
<SEO 
  title="..."
  description="..."
  googleVerification="your-verification-code"
/>
```

## 4. Structured Data

Update the following in `src/lib/seo/structuredData.ts`:
- Phone number
- Email address
- Postal code
- GPS coordinates (latitude/longitude)
- Social media profiles (if available)

## 5. Important Updates Needed

### Domain Configuration
Update your domain in these files:
- `src/lib/components/SEO.svelte` (line 14)
- `src/routes/sitemap.xml/+server.ts` (line 4)
- `src/lib/seo/structuredData.ts` (multiple locations)
- `static/robots.txt` (line 4)

### Images
1. Add a default Open Graph image:
   - Create a 1200x630px image
   - Save as `/static/og-default.jpg`
   - This will be used for social media sharing

### Contact Information
Add your actual contact details in `src/lib/seo/structuredData.ts`:
- Phone number
- Email address
- Full address with postal code
- GPS coordinates

## 6. After Deployment

1. **Submit sitemap** to Google Search Console: `https://your-domain.de/sitemap.xml`
2. **Verify ownership** using one of the methods above
3. **Test pages** with:
   - [Google Rich Results Test](https://search.google.com/test/rich-results)
   - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)

## 7. Performance Tips

- Keep meta descriptions between 150-160 characters
- Use unique titles and descriptions for each page
- Update `last_publication_date` in Prismic when content changes
- Monitor Core Web Vitals in Google Search Console

## 8. Local SEO

Since this is a local business:
1. Create a [Google My Business](https://www.google.com/business/) profile
2. Add your business to local directories
3. Ensure NAP (Name, Address, Phone) consistency across all platforms