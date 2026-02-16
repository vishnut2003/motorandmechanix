import { ArrowUpRight } from 'lucide-react'
import React from 'react'

const Bespoke = () => {
  return (
    <section className='py-10 md:px-20 px-5 bg-[#fece12]'>
<div className='md:flex items-center justify-between'>
    <h4 className='text-[24px] md:text-[31px] max-w-3xl md:text-start text-center mb-8 md:mb-0 font-medium md:leading-8.5 leading-7'>
       <span className='font-semibold'>Explore From Bespoke</span>  Car Services As One of the Best Car Garage In Noida Extension.
    </h4>
     <div className="flex justify-center">
     <a
                href="https://motorandmechanix.co.in/services/"
                className="group btn yellow w-fit !flex items-center gap-6 !mt-0
                             border border-transparent
                             transition-all duration-300
                             hover:!bg-black hover:!border-[#1A49BA]"
          >
            <span className="transition-colors duration-300 group-hover:!text-[#1A49BA]">
              All Services
            </span>

            <ArrowUpRight
              strokeWidth={1.5}
              className="w-5 h-5 flex-shrink-0
                               transition-all duration-300
                               group-hover:!text-[#1A49BA]
                               group-hover:-translate-y-3
                               group-hover:opacity-0"
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Bespoke