import React from 'react'
import type { Metadata } from 'next';

import TyresTop from './_components/tyres-top'
import CareSection from './_components/care-section'
import PremiumServices from './_components/premium-services'
import WhyChooseSection from './_components/why-choose'

export const metadata: Metadata = {
  title: 'Tyre Services & Wheel Alignment in Noida',
  description: 'Professional wheel alignment, balancing, and tyre replacement services using advanced 3D technology. Dealer of major tyre brands.',
  alternates: {
    canonical: "/tyres",
  },
};

const Tyres = () => {
  return (
    <>
    <TyresTop />
    <CareSection />
    <PremiumServices />
    <WhyChooseSection />
    </>
  )
}

export default Tyres