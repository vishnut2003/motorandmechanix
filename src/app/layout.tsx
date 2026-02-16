import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";

import Provider from "@/provider";
import "@/globals.css";

import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://motorandmechanix.com"),
  title: {
    default: "Motor & Mechanix | Best Car Service Center in Noida & Gaur City",
    template: "%s | Motor & Mechanix",
  },
  description: "Expert Multi-Brand Car Care in Gaur City, Noida Extension. Professional car repair, maintenance, battery, and detailing services with state-of-the-art diagnostics.",
  keywords: [
    "Car Repair Noida",
    "Car Service Gaur City",
    "Noida Extension Car Repair",
    "Motor & Mechanix",
    "Car Mechanic Near Me",
    "Multi Brand Car Service",
    "Car Battery Replacement Noida",
    "Car Detailing Gaur City"
  ],
  authors: [{ name: "Motor & Mechanix" }],
  openGraph: {
    title: "Motor & Mechanix | Best Car Service Center in Noida & Gaur City",
    description: "Expert Multi-Brand Car Care in Gaur City, Noida Extension. Professional car repair, maintenance, and diagnostics.",
    url: "https://motorandmechanix.com",
    siteName: "Motor & Mechanix",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/icon-512x512.png",
        width: 512,
        height: 512,
        alt: "Motor & Mechanix Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Motor & Mechanix | Best Car Service Center in Noida & Gaur City",
    description: "Expert Multi-Brand Car Care in Gaur City, Noida Extension.",
    images: ["/icon-512x512.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "Dx7nmwH_LUCVEoTuTIhex49gd_5DbuaQSXjEvZQ50RY",
  }
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "vfpdw0wlyj");
            `,
          }}
        />
        <link rel="stylesheet" href="/fonts/index.css" />
        <link
          rel="preload"
          href="/fonts/TrimPosterTRIAL.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/NeueHaas/NeueHaasDisplayRoman.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/NeueHaas/NeueHaasDisplayBold.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col font-sans overflow-x-hidden">
        <JsonLd />
        <Provider>
          {children}
        </Provider>
        <GoogleAnalytics
          gaId="G-E68LHPVK47"
        />
      </body>
    </html>
  );
}
