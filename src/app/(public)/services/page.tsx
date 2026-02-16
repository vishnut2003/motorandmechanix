import type { Metadata } from 'next';

import LocateUs from "@/components/LocateUs";

import ServiceHero from "./_components/ServiceHero";
import ServiceGrid from "./_components/ServiceGrid";
import WhyChooseUsService from "./_components/WhyChooseUsService";
import RightChoice from './_components/rightChoice';

export const metadata: Metadata = {
  title: 'Our Services | Car Repair, Denting Painting, AC Service',
  description: 'Comprehensive car services including Periodical Service, Denting Painting, AC Repair, Electrical, and Accidental Claims.',
};

export default function ServicesPage() {
  return (
    <>
      <ServiceHero />
      <ServiceGrid />
      <RightChoice />
      <LocateUs />
    </>
  );
}
