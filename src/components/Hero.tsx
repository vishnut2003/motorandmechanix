"use client";

import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden mt-[52px]">
      {/* Desktop Banner */}
      <div 
        className={cn(
          "hidden md:block w-full bg-cover bg-center bg-no-repeat relative",
          "h-[92vh] min-h-[600px] 2xl:max-h-[900px]"
        )}
        style={{
          backgroundImage: "url('/wp-content/uploads/2026/01/sp.jpg')",
        }}
      >
         {/* Overlay if needed provided by CSS ::before, but original CSS comment suggests it might be removed or minimal */}
         <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/0 pointer-events-none" />
      </div>

      {/* Mobile Banner */}
      <div 
        className={cn(
          "block md:hidden w-full bg-cover bg-center bg-no-repeat",
          "h-[500px]"
        )}
        style={{
          backgroundImage: "url('/wp-content/uploads/2026/01/mp5.jpg')",
        }}
      />
    </section>
  );
}
