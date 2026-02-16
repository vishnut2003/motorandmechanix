"use client";

import { cn } from "@/lib/utils";

export default function ServiceHero() {
  return (
    <section 
      className={cn(
        "relative w-full bg-cover bg-no-repeat bg-center md:px-20 px-5",
        "flex items-center min-h-screen"
      )}
      style={{
        backgroundImage: "url('/wp-content/uploads/2023/09/hp-banner-1.webp')",
        
      }}
    >
      
      <div className="relative z-10 py-16 text-white">
        <div className="md:space-y-12 space-y-8">
          <h1 className="text-5xl md:text-[120px] font-semibold uppercase tracking-tighter relative z-20 font-display leading-[0.8] whitespace-nowrap">
  <span
    className="text-transparent inline-block"
    style={{ WebkitTextStroke: "2px white" }}
  >
    OUR&nbsp;
  </span>
  <span className="text-white inline-block">SERVICES</span>
</h1>

          <p className="text-md md:text-lg leading-6 md:leading-7 md:max-w-6xl mr-auto text-white">
            Looking for a reliable car repair service in Noida? At Motor &amp; Mechanix, we specialize in expert Maruti car service and Hyundai car service, ensuring top-quality maintenance, diagnostics, and repairs. Our skilled technicians use advanced tools to keep your car in peak condition. Whether it&apos;s routine servicing or major repairs, we deliver trusted solutions for all car brands. Drive with confidence—book your service today for a smooth and hassle-free experience!
          </p>
        </div>
      </div>
    </section>
  );
}
