# 🚀 Motor Mechanix - Performance & SEO Guidelines

> A comprehensive guide for building fast, SEO-friendly, and optimized web applications with Next.js.

---

## Table of Contents

1. [Project Architecture](#1-project-architecture)
2. [Image Optimization](#2-image-optimization)
3. [Component Best Practices](#3-component-best-practices)
4. [Data Fetching](#4-data-fetching)
5. [SEO Optimization](#5-seo-optimization)
6. [CSS & Styling](#6-css--styling)
7. [Font Optimization](#7-font-optimization)
8. [Third-Party Libraries](#8-third-party-libraries)
9. [Caching Strategies](#9-caching-strategies)
10. [Core Web Vitals](#10-core-web-vitals)
11. [Accessibility](#11-accessibility)
12. [Security](#12-security)
13. [Monitoring & Testing](#13-monitoring--testing)

---

## 1. Project Architecture

### Server vs Client Components

Next.js 16 uses **React Server Components (RSC)** by default. Understanding when to use each is critical:

| Server Components (Default) | Client Components (`'use client'`) |
|-----------------------------|-------------------------------------|
| Fetch data directly | Handle user interactions (onClick, onChange) |
| Access backend resources | Use browser APIs (localStorage, window) |
| Keep sensitive logic secure | Manage component state (useState, useReducer) |
| Reduce JavaScript bundle | Use effects (useEffect, useLayoutEffect) |

```tsx
// ✅ Server Component (default) - No directive needed
// app/services/page.tsx
async function ServicesPage() {
  const services = await getServices(); // Direct DB/API call
  return <ServiceList services={services} />;
}

// ✅ Client Component - Only when necessary
// components/BookingButton.tsx
'use client';

import { useState } from 'react';

export function BookingButton() {
  const [isOpen, setIsOpen] = useState(false);
  return <button onClick={() => setIsOpen(true)}>Book Now</button>;
}
```

### 🔴 Common Mistake

```tsx
// ❌ BAD: Adding 'use client' at layout level
// This makes ALL children client components!
'use client';
export default function Layout({ children }) {
  return <div>{children}</div>;
}

// ✅ GOOD: Keep layouts as server components
// Only mark interactive leaf components as client
```

---

## 2. Image Optimization

### Always Use Next.js Image Component

```tsx
import Image from 'next/image';

// ✅ CORRECT: Using Next.js Image
<Image
  src="/hero-banner.jpg"
  alt="Motor Mechanix - Professional Auto Repair"
  width={1200}
  height={600}
  priority // Add for above-the-fold images (LCP)
  placeholder="blur" // Show blur while loading
  blurDataURL="data:image/jpeg;base64,..." // Base64 blur placeholder
/>

// ❌ AVOID: Regular img tag
<img src="/hero-banner.jpg" alt="..." />
```

### Image Optimization Checklist

- [ ] Use `<Image>` component for all images
- [ ] Always provide `width` and `height` (prevents layout shift)
- [ ] Add `priority` to largest above-the-fold image
- [ ] Use `loading="lazy"` for below-fold images (default)
- [ ] Serve images from `/public` or external CDN
- [ ] Use appropriate image format (WebP/AVIF auto-served)

### Responsive Images

```tsx
// Fill container responsively
<div className="relative w-full h-64">
  <Image
    src="/service-image.jpg"
    alt="Brake repair service"
    fill
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    className="object-cover"
  />
</div>
```

### Image Size Guidelines

| Use Case | Max Width | Format |
|----------|-----------|--------|
| Hero/Banner | 1920px | WebP |
| Card/Thumbnail | 400px | WebP |
| Icon/Logo | 200px | SVG preferred |
| Background | 1920px | WebP with quality 75 |

---

## 3. Component Best Practices

### Dynamic Imports for Heavy Components

```tsx
import dynamic from 'next/dynamic';

// ✅ Lazy load heavy components
const MapComponent = dynamic(() => import('@/components/Map'), {
  loading: () => <div className="h-96 bg-gray-200 animate-pulse" />,
  ssr: false, // Disable SSR for browser-only components
});

const HeavyChart = dynamic(() => import('@/components/Chart'), {
  loading: () => <ChartSkeleton />,
});

// Use in component
export default function ContactPage() {
  return (
    <>
      <ContactForm />
      <MapComponent /> {/* Loaded separately */}
    </>
  );
}
```

### Component Splitting Strategy

```
components/
├── ui/                 # Small, reusable UI components
│   ├── Button.tsx
│   ├── Card.tsx
│   └── Input.tsx
├── features/           # Feature-specific components
│   ├── booking/
│   │   ├── BookingForm.tsx    # 'use client'
│   │   └── BookingCard.tsx    # Server component
│   └── services/
│       ├── ServiceList.tsx
│       └── ServiceCard.tsx
└── layouts/            # Layout components (keep as server)
    ├── Header.tsx
    └── Footer.tsx
```

### Avoid Re-renders

```tsx
'use client';

import { memo, useCallback, useMemo } from 'react';

// ✅ Memoize expensive components
const ServiceCard = memo(function ServiceCard({ service }) {
  return <div>{service.name}</div>;
});

// ✅ Memoize callbacks passed to children
function ServiceList({ services }) {
  const handleSelect = useCallback((id: string) => {
    console.log('Selected:', id);
  }, []);

  // ✅ Memoize expensive calculations
  const sortedServices = useMemo(() => {
    return [...services].sort((a, b) => a.price - b.price);
  }, [services]);

  return sortedServices.map((s) => (
    <ServiceCard key={s.id} service={s} onSelect={handleSelect} />
  ));
}
```

---

## 4. Data Fetching

### Server-Side Fetching (Preferred)

```tsx
// app/services/page.tsx
async function ServicesPage() {
  // ✅ Fetch on server - no client-side JavaScript needed
  const services = await fetch('https://api.example.com/services', {
    next: { revalidate: 3600 }, // Revalidate every hour
  }).then(res => res.json());

  return <ServiceList services={services} />;
}
```

### Caching Options

```tsx
// Static data - cache forever (until next build)
fetch(url, { cache: 'force-cache' });

// Revalidate every 60 seconds
fetch(url, { next: { revalidate: 60 } });

// Always fresh - no caching
fetch(url, { cache: 'no-store' });

// Revalidate on-demand with tags
fetch(url, { next: { tags: ['services'] } });
// Then trigger: revalidateTag('services')
```

### Parallel Data Fetching

```tsx
// ✅ GOOD: Parallel fetching
async function Dashboard() {
  const [services, reviews, bookings] = await Promise.all([
    getServices(),
    getReviews(),
    getBookings(),
  ]);

  return (
    <>
      <Services data={services} />
      <Reviews data={reviews} />
      <Bookings data={bookings} />
    </>
  );
}

// ❌ BAD: Sequential fetching (waterfall)
async function Dashboard() {
  const services = await getServices();   // Wait...
  const reviews = await getReviews();     // Then wait...
  const bookings = await getBookings();   // Then wait...
  // Total time = sum of all requests
}
```

### Client-Side Fetching (When Needed)

```tsx
'use client';

import useSWR from 'swr';

// ✅ Use SWR for client-side data that needs real-time updates
function LiveBookings() {
  const { data, error, isLoading } = useSWR('/api/bookings', fetcher, {
    refreshInterval: 30000, // Refresh every 30 seconds
  });

  if (isLoading) return <BookingSkeleton />;
  if (error) return <ErrorMessage />;
  return <BookingList bookings={data} />;
}
```

---

## 5. SEO Optimization

### Page Metadata

```tsx
// app/services/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Auto Repair Services', // Becomes "Auto Repair Services | Motor Mechanix"
  description: 'Professional brake repair, oil changes, and engine diagnostics. Book your appointment today.',
  keywords: ['auto repair', 'brake service', 'oil change', 'mechanic'],
  openGraph: {
    title: 'Auto Repair Services - Motor Mechanix',
    description: 'Professional automotive services',
    images: ['/og-services.jpg'],
  },
};

export default function ServicesPage() {
  return <div>...</div>;
}
```

### Dynamic Metadata

```tsx
// app/services/[slug]/page.tsx
import type { Metadata } from 'next';

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = await getService(params.slug);

  return {
    title: service.name,
    description: service.description,
    openGraph: {
      title: service.name,
      description: service.description,
      images: [service.image],
    },
  };
}
```

### Structured Data (JSON-LD)

```tsx
// Add to page or layout
export default function ServicePage({ service }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'AutoRepair',
      name: 'Motor Mechanix',
    },
    areaServed: 'Local Area',
    priceRange: '$$',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceContent service={service} />
    </>
  );
}
```

### SEO Checklist

- [ ] Every page has unique `title` and `description`
- [ ] Images have descriptive `alt` text
- [ ] URLs are clean and descriptive (`/services/brake-repair`)
- [ ] H1 tag used once per page, H2-H6 in logical order
- [ ] Internal linking between related pages
- [ ] Sitemap.xml generated (already set up)
- [ ] Robots.txt configured (already set up)
- [ ] Canonical URLs set for duplicate content
- [ ] Open Graph tags for social sharing

---

## 6. CSS & Styling

### Tailwind Best Practices

```tsx
// ✅ GOOD: Use Tailwind utilities
<div className="flex items-center gap-4 p-6 rounded-lg bg-white shadow-md">
  <h2 className="text-2xl font-bold text-gray-900">Service Title</h2>
</div>

// ❌ AVOID: Inline styles (not cached)
<div style={{ display: 'flex', alignItems: 'center' }}>
```

### Responsive Design Pattern

```tsx
// Mobile-first responsive design
<div className="
  grid 
  grid-cols-1      // Mobile: 1 column
  sm:grid-cols-2   // Tablet: 2 columns
  lg:grid-cols-3   // Desktop: 3 columns
  xl:grid-cols-4   // Large: 4 columns
  gap-4 
  sm:gap-6 
  lg:gap-8
">
  {services.map(service => <ServiceCard key={service.id} />)}
</div>
```

### CSS Performance Tips

```css
/* ✅ Use content-visibility for long lists */
.service-card {
  content-visibility: auto;
  contain-intrinsic-size: auto 300px;
}

/* ✅ Use will-change sparingly for animations */
.animated-element {
  will-change: transform;
}

/* ✅ Avoid expensive selectors */
/* ❌ BAD */ .container * { }
/* ❌ BAD */ div > div > div > span { }
/* ✅ GOOD */ .service-title { }
```

---

## 7. Font Optimization

### Already Configured (layout.tsx)

```tsx
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap', // Shows fallback font while loading
});
```

### Font Best Practices

- [ ] Use `next/font` for automatic optimization
- [ ] Limit to 2 font families maximum
- [ ] Use `display: 'swap'` to prevent invisible text
- [ ] Only load needed character subsets
- [ ] Preload critical fonts in layout

---

## 8. Third-Party Libraries

### Before Adding Any Library

1. **Check bundle size**: [bundlephobia.com](https://bundlephobia.com)
2. **Check if tree-shakeable**: Can you import only what you need?
3. **Consider alternatives**: Is there a lighter option?

### Bundle Size Guidelines

| Size Impact | Action |
|-------------|--------|
| < 5kb | ✅ Usually fine |
| 5-20kb | ⚠️ Consider lazy loading |
| 20-50kb | ⚠️ Definitely lazy load |
| > 50kb | 🔴 Find alternative or lazy load + code split |

### Lazy Load Heavy Libraries

```tsx
'use client';

import { useEffect, useState } from 'react';

function AnalyticsProvider({ children }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Load analytics after page is interactive
    const timer = setTimeout(() => {
      import('analytics-library').then(({ init }) => {
        init();
        setLoaded(true);
      });
    }, 3000); // Delay 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return children;
}
```

### Recommended Lightweight Alternatives

| Heavy Library | Lighter Alternative |
|--------------|---------------------|
| Moment.js (300kb) | date-fns (tree-shakeable) |
| Lodash (70kb) | lodash-es (import specific) |
| Axios (13kb) | Native fetch API |
| jQuery | Native DOM APIs |

---

## 9. Caching Strategies

### Browser Caching (next.config.ts)

```typescript
// Already configured in next.config.ts
async headers() {
  return [
    {
      source: '/static/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ];
}
```

### ISR (Incremental Static Regeneration)

```tsx
// Page regenerates every hour
export const revalidate = 3600;

// Or on-demand revalidation
import { revalidatePath, revalidateTag } from 'next/cache';

// In API route or server action
revalidatePath('/services');
revalidateTag('services');
```

### Service Worker Caching (PWA)

Already configured via `next-pwa`:
- Static assets: CacheFirst
- API responses: NetworkFirst
- Pages: StaleWhileRevalidate

---

## 10. Core Web Vitals

### Target Metrics

| Metric | Target | What It Measures |
|--------|--------|------------------|
| **LCP** (Largest Contentful Paint) | < 2.5s | Loading performance |
| **FID** (First Input Delay) | < 100ms | Interactivity |
| **CLS** (Cumulative Layout Shift) | < 0.1 | Visual stability |
| **INP** (Interaction to Next Paint) | < 200ms | Responsiveness |
| **TTFB** (Time to First Byte) | < 800ms | Server response |

### How to Improve Each

**LCP (Largest Contentful Paint)**
```tsx
// ✅ Add priority to hero image
<Image src="/hero.jpg" priority alt="..." />

// ✅ Preload critical resources
<link rel="preload" href="/critical.css" as="style" />

// ✅ Use server components for faster initial HTML
```

**CLS (Layout Shift)**
```tsx
// ✅ Always set dimensions on images
<Image width={800} height={400} />

// ✅ Reserve space for dynamic content
<div className="min-h-[200px]">
  <Suspense fallback={<Skeleton />}>
    <DynamicContent />
  </Suspense>
</div>

// ✅ Use CSS aspect-ratio
<div className="aspect-video">
  <Image fill />
</div>
```

**FID/INP (Interactivity)**
```tsx
// ✅ Break up long tasks
// Instead of one massive computation:
const result = heavyComputation(data);

// Use requestIdleCallback or setTimeout:
requestIdleCallback(() => {
  const result = heavyComputation(data);
});

// ✅ Debounce rapid events
import { useDebouncedCallback } from 'use-debounce';

const handleSearch = useDebouncedCallback((value) => {
  search(value);
}, 300);
```

---

## 11. Accessibility

### Essential A11y Practices

```tsx
// ✅ Semantic HTML
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/services">Services</a></li>
  </ul>
</nav>

// ✅ Form labels
<label htmlFor="email">Email Address</label>
<input id="email" type="email" required aria-describedby="email-help" />
<p id="email-help">We'll never share your email.</p>

// ✅ Button accessibility
<button 
  aria-label="Close menu"
  aria-expanded={isOpen}
  onClick={toggleMenu}
>
  <span className="sr-only">Close</span>
  <XIcon aria-hidden="true" />
</button>

// ✅ Image alt text
<Image alt="Mechanic performing brake inspection" /> // Descriptive
<Image alt="" role="presentation" /> // Decorative images
```

### Accessibility Checklist

- [ ] All interactive elements keyboard accessible
- [ ] Focus states visible (`:focus-visible`)
- [ ] Color contrast ratio ≥ 4.5:1
- [ ] Form inputs have labels
- [ ] Images have alt text
- [ ] Skip-to-content link present
- [ ] ARIA labels on icon buttons
- [ ] Respects `prefers-reduced-motion`

---

## 12. Security

### Already Configured Headers

```typescript
// next.config.ts - Security headers
{
  key: 'Strict-Transport-Security',
  value: 'max-age=63072000; includeSubDomains; preload'
},
{
  key: 'X-Frame-Options',
  value: 'SAMEORIGIN'
},
{
  key: 'X-Content-Type-Options',
  value: 'nosniff'
}
```

### Additional Security Tips

```tsx
// ✅ Sanitize user input
import DOMPurify from 'dompurify';
const clean = DOMPurify.sanitize(userInput);

// ✅ Use environment variables for secrets
const apiKey = process.env.API_KEY; // Server only
const publicKey = process.env.NEXT_PUBLIC_KEY; // Client accessible

// ✅ Validate API inputs
import { z } from 'zod';
const BookingSchema = z.object({
  service: z.string().min(1),
  date: z.string().datetime(),
  email: z.string().email(),
});
```

---

## 13. Monitoring & Testing

### Performance Testing Commands

```bash
# Build and analyze bundle
npm run build
# Check "First Load JS" column - each route should be < 100kb

# Start production server for testing
npm run start

# In Chrome DevTools:
# 1. Lighthouse audit (Performance, SEO, Accessibility)
# 2. Network tab → Throttle to "Slow 3G"
# 3. Coverage tab → Find unused JS/CSS
```

### Automated Testing Setup

```bash
# Install testing utilities
npm install -D @playwright/test axe-core

# Run accessibility tests
npx playwright test --project=accessibility
```

### Monitoring Tools

| Tool | Purpose |
|------|---------|
| **Lighthouse CI** | Automated performance audits |
| **Web Vitals** | Real user metrics |
| **Sentry** | Error tracking |
| **Vercel Analytics** | Performance monitoring |

---

## Quick Reference Card

### Before Every PR

- [ ] Run `npm run build` - check bundle sizes
- [ ] Test on mobile (Chrome DevTools → Device mode)
- [ ] Run Lighthouse audit
- [ ] Check for console errors/warnings
- [ ] Verify images use `<Image>` component
- [ ] Ensure new pages have metadata

### Performance Budget

| Asset Type | Max Size |
|------------|----------|
| First Load JS (per route) | 100kb |
| Images | 200kb |
| Total page weight | 500kb |
| LCP | < 2.5s |
| TTI (Time to Interactive) | < 3.5s |

---

*Last updated: January 2026*
*Next.js version: 16.1.2*
