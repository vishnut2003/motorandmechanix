import React from 'react'

import type { Metadata } from 'next';

import BrandsBanner from './_components/brand-banner'
import BrandsService from './_components/brands-service'
import ExploreSection from './_components/explore-section';
import LocateUs from '@/components/LocateUs';

export const metadata: Metadata = {
  title: 'Luxury & Multi-Brand Car Service | BMW, Audi, Mercedes',
  description: 'Specialized diagnostic and repair services for luxury brands (BMW, Audi, Mercedes, Jaguar) and mass-market cars in Noida. Certified experts.',
  alternates: {
    canonical: "/multi-brand",
  },
};

export default function MultiBrandPage() {
  return (
    <>
      <BrandsBanner />
      <BrandsService />
      <ExploreSection />
      <LocateUs />
    </>
  );
}