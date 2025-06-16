export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ChildCare",
    name: "Kindertagespflege Hummelgarten",
    alternateName: "Hummelgarten",
    url: "https://kindertagespflege-hummelgarten.de",
    description:
      "Familiäre Kindertagespflege für bis zu 5 Kinder im Löwenberger Land. Naturverbunden, tiergestützt, mit eigenem Garten und Waldnähe.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Löwenberger Land OT Linde",
      addressRegion: "Brandenburg",
      addressCountry: "DE",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "16:00",
    },
    image: "https://kindertagespflege-hummelgarten.de/og-default.jpg",
    telephone: "033094/51540", // Add actual phone number
  };
}

export function getBreadcrumbSchema(
  items: Array<{ name: string; url: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http")
        ? item.url
        : `https://kindertagespflege-hummelgarten.de${item.url}`,
    })),
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://kindertagespflege-hummelgarten.de/#business",
    name: "Kindertagespflege Hummelgarten",
    image: "https://kindertagespflege-hummelgarten.de/og-default.jpg",
    url: "https://kindertagespflege-hummelgarten.de",
    telephone: "033094/51540", // Add actual phone number
    address: {
      "@type": "PostalAddress",
      addressLocality: "Löwenberger Land OT Linde",
      addressRegion: "Brandenburg",
      postalCode: "16775", // Add postal code
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.7537, // Update with actual coordinates
      longitude: 13.2369, // Update with actual coordinates
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "16:00",
    },
    sameAs: [
      // Add social media profiles if available
      // 'https://www.facebook.com/hummelgarten',
      // 'https://www.instagram.com/hummelgarten'
    ],
  };
}

export function getWebPageSchema(page: {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url: page.url.startsWith("http")
      ? page.url
      : `https://kindertagespflege-hummelgarten.de${page.url}`,
    inLanguage: "de-DE",
    isPartOf: {
      "@type": "WebSite",
      name: "Kindertagespflege Hummelgarten",
      url: "https://kindertagespflege-hummelgarten.de",
    },
    ...(page.datePublished && { datePublished: page.datePublished }),
    ...(page.dateModified && { dateModified: page.dateModified }),
  };
}

