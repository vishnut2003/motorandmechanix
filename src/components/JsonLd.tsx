import React from 'react';

const JsonLd = () => {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "Motor & Mechanix",
    "description": "Expert Multi-Brand Car Care in Gaur City, Noida Extension. Professional car repair, maintenance, battery, and detailing services.",
    "image": "/icon-512x512.png",
    "@id": "https://motorandmechanix.co.in",
    "url": "https://motorandmechanix.co.in",
    "telephone": "+918383838300",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No 1 , Khasra 120, Next to Kajaria Tiles Showroom, Near 14th Avenue, Gaur City-2",
      "addressLocality": "Noida",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "201301",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.6225409,
      "longitude": 77.4136264
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    },
    "priceRange": "₹₹",
    "sameAs": [
      "https://www.facebook.com/motorandmechanix",
      "https://www.instagram.com/motorandmechanix"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
    />
  );
};

export default JsonLd;
