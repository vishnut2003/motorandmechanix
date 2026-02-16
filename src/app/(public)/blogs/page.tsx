import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Auto Care Blogs & Tips | Motor & Mechanix',
  description: 'Stay updated with the latest car care tips, maintenance guides, and automotive industry news from Motor & Mechanix experts.',
};

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-[#181818] text-white pt-24 pb-12">
      <div className="container px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center uppercase">Our Blogs</h1>
        <p className="text-center text-gray-400 max-w-2xl mx-auto">
          Latest updates coming soon...
        </p>
      </div>
    </div>
  );
}
