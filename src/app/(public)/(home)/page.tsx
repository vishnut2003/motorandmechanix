import { Suspense } from "react";
import dynamic from "next/dynamic";
// import Image from "next/image";
const Services = dynamic(() => import("./_components/services"));
const BrandServe = dynamic(() => import("./_components/brand-serve"));
const CarServiceHero = dynamic(() => import("./_components/delivering-excellence"));
const Mechanix = dynamic(() => import("./_components/mechanix"));
const Competitors = dynamic(() => import("./_components/competitors"));
const CarPerformance = dynamic(() => import("./_components/car-performance"));
const FeaturedPress = dynamic(() => import("./_components/featured-press"));
const TestimonialsSection = dynamic(() => import("./_components/testimonial"));
const Commitment = dynamic(() => import("./_components/commitment"));
const LocateUsSection = dynamic(() => import("@/components/LocateUs"));

const CustomerTestimonial = dynamic(() => import("./_components/customer-testimonial"));
const Workshop = dynamic(() => import("./_components/our-workshop"));
// import Services from "./_components/services";
import VideoSkeleton from "@/components/ui/video-skeleton";
import HeroSection from "./_components/hero-section";
import Reveal from "@/components/ui/reveal";

/* Removed Custom Image Wrapper */

const MotorMechanix = () => {

  return (
    <>
      <div className="font-sans">


        {/* FLOATING BUTTONS */}
        {/* {showNavButtons && (
        <div className="fixed right-4 top-24 z-40 flex flex-col gap-3">
          <a className="bg-yellow-500 p-3 rounded-full">
            <Phone className="w-6 h-6 text-white" />
          </a>
          <a className="bg-green-500 p-3 rounded-full">
            <MessageCircle className="w-6 h-6 text-white" />
          </a>
        </div>
      )} */}

        {/* HERO */}
        <HeroSection />



        {/* MODAL */}
        {/* {activeModal && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-white p-8 rounded-xl max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between mb-4">
              <h3 className="text-3xl font-bold">{activeModal.title}</h3>
              <button onClick={() => setActiveModal(null)}>
                <X />
              </button>
            </div>
            <ul className="space-y-2">
              {activeModal.items.map((i: string, idx: number) => (
                <li key={idx}>✓ {i}</li>
              ))}
            </ul>
          </div>
        </div>
      )} */}
      </div>
      <Reveal>
        <Services />
      </Reveal>
      <BrandServe />
      <Reveal>
        <Suspense fallback={<VideoSkeleton className="h-96 w-full" />}>
          <CustomerTestimonial />
        </Suspense>
      </Reveal>
      <CarServiceHero />
      <Reveal>
        <Mechanix />
      </Reveal>
      <Reveal>
        <Competitors />
      </Reveal>
      <Reveal>
        <Suspense fallback={<VideoSkeleton className="min-h-[600px] w-full" />}>
          <Workshop />
        </Suspense>
      </Reveal>
      <Reveal>
        <CarPerformance />
      </Reveal>
      <Reveal>
        <FeaturedPress />
      </Reveal>
      <Reveal>
        <TestimonialsSection />
      </Reveal>
      <Reveal>
        <Commitment />
      </Reveal>
      <Reveal>
        <LocateUsSection />
      </Reveal>
    </>
  );
};

export default MotorMechanix;
