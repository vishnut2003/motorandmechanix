import React from 'react';
import type { Metadata } from 'next';

import WhyBanner from './_components/why-banner'
import OurPromise from './_components/our-promise'
import FasterHassle from './_components/Faster-hassle'
import HighlySkilled from './_components/highly-skilled'
import LatestMachines from './_components/latest-machines'
import ExperienceRemember from './_components/experience-remember';
import WhyCompetitors from './_components/why-competitors';
import Ensuring from './_components/ensuring';
import ExploreSection from '../multi-brand/_components/explore-section';
import Bespoke from './_components/bespoke';

export const metadata: Metadata = {
  title: 'Why Choose Motor & Mechanix | Trusted Car Workshop',
  description: 'Discover why we are Noida\'s most trusted car workshop. Genuine spares, transparency, skilled mechanics, and customer-first approach.',
};

const WhyUs = () => {
  return (
    <>
      <WhyBanner />
      <OurPromise />
      <FasterHassle />
      <HighlySkilled />
      <LatestMachines />
      <ExperienceRemember />
      <WhyCompetitors />
      <Ensuring />
      <ExploreSection />
      <Bespoke />
    </>
  )
}

export default WhyUs