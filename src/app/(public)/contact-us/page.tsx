import React from 'react';
import LocateUs from '@/components/LocateUs';
import type { Metadata } from 'next';
import LocateUsSection from '../(home)/_components/locate-us';
import LocateContact from './_components/locate-contact';
import SeamlessVehicle from './_components/seamless-vehicle';
import Bespoke from '../why-us/_components/bespoke';
import MapSection from './_components/map-section';
import QuestionSection from './_components/questions';

export const metadata: Metadata = {
  title: 'Contact Us | Motor & Mechanix',
  description: 'Get in touch with Motor & Mechanix regarding car service, repair inquiries, or to book an appointment. Located in Noida.',
  openGraph: {
    title: 'Contact Motor & Mechanix - Expert Car Care',
    description: 'Visit our premium workshop in Noida or call us for top-notch car repair services.',
  },
};

export default function ContactUsPage() {
  return (
    <div className="min-h-screen md:pt-22 pt-14">
      <LocateContact />
      {/* <LocateUsSection /> */}
       <QuestionSection />
      <SeamlessVehicle />
     
      <Bespoke />
      <MapSection />
    </div>
  );
}
