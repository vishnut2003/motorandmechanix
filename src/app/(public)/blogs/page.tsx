import React from 'react';
import type { Metadata } from 'next';
import { getWordpressBlogs } from '@/functions/wordpress/get-blogs';
import SinglePostGridItem from './single-post-grid-item';

export const metadata: Metadata = {
  title: 'Auto Care Blogs & Tips | Motor & Mechanix',
  description: 'Stay updated with the latest car care tips, maintenance guides, and automotive industry news from Motor & Mechanix experts.',
  alternates: {
    canonical: "/blogs",
  }
};

export default async function BlogsPage() {

  const blogs = await getWordpressBlogs({
    page: 1,
  });

  return (
    <div className="min-h-screen bg-[#181818] text-white pt-27 pb-12">
      <div className="container px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center uppercase">Our Blogs</h1>
      </div>

      <div
        className='px-5 md:px-10'
      >
        <div
          className='flex flex-col md:grid grid-cols-3 gap-6'
        >
          {blogs.map((blog, index) => (
            <SinglePostGridItem
              post={blog}
              key={index}
            />
          ))}
        </div>
      </div>

    </div>
  );
}
