import React from 'react'
import CustomLayoutForSeoPages from '../custom-layout'
import featuredImage from "../car-repair-in-noida/assets/featured-image.jpg";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Car Servicing in Noida | Periodic Maintenance — Motor Mechanix",
    description: "Regular car service in Noida done right. Engine oil, filters, brake check & full inspection. All brands. Motor Mechanix.",
    alternates: {
        canonical: "/car-servicing-in-noida",
    }
}

const CarServicingInNoidaPage = () => {
  return (
    <CustomLayoutForSeoPages
        pageContent={{
            featuredImage: featuredImage,
            body: {
                h1: "Car Servicing in Noida — Keep Your Car Running the Way It Should",
                contents: [
                    {
                        type: "p",
                        content: (<>Skipping services is one of those things that feels fine — until it isn't. The engine starts burning more fuel. A worn belt snaps. A slow oil leak becomes a seized engine. Everything on it we have now seen, and none of that is cheap to repair. Frequent maintenance is not a cash scheme, it is actually the most cost effective method of having a car in the long run.</>),
                    },
                    {
                        type: "p",
                        content: (<>At Motor Mechanix, we offer straightforward car servicing packages for all makes and models in Noida. No unnecessary add-ons pushed on you. No items charged that weren't actually done. Just honest, thorough maintenance with a proper report of everything we checked.</>),
                    },
                    {
                        type: "h2",
                        content: "Basic Service — Good for Every 5,000 to 7,500 km",
                    },
                    {
                        type: "p",
                        content: "It is your bread-and-butter business. Fast, necessary, and that really makes a difference to the way your engine performs.",
                    },
                    {
                        type: "p",
                        content: "Engine oil change - synthetic, semi-synthetic or mineral, depending on your car.",
                    },
                    {
                        type: "ul",
                        content: [
                            (<>Checking and washing of air filters (reaching out in case of necessity)</>),
                            (<>Oil filter replacement</>),
                            (<>Air filter inspection and cleaning (replacement if needed)</>),
                            (<>Check and top-up of tyre pressure.</>),
                            (<>Battery voltage check</>),
                            (<>Visual inspection underneath the car</>),
                        ]
                    },
                    {
                        type: "h2",
                        content: "Standard Service — Recommended Around 10,000–15,000 km",
                    },
                    {
                        type: "p",
                        content: (<>Everything in the basic, plus a deeper look at the systems that keep your car safe day to day.</>),
                    },
                    {
                        type: "ul",
                        content: [
                            (<>Cabin air filter check and replacement</>),
                            (<>Brake fluid level and condition check</>),
                            (<>Coolant level top-up</>),
                            (<>Spark plug inspection</>),
                            (<>Drive belt wear check</>),
                            (<>Multi-point vehicle health check with written report</>),
                        ],
                    },
                    {
                        type: "h2",
                        content: "Comprehensive Service — Annual or Every 20,000+ km",
                    },
                    {
                        type: "p",
                        content: (<>The big one. This is where we go through everything properly — the kind of service that gives you genuine peace of mind.</>),
                    },
                    {
                        type: "ul",
                        content: [
                            (<>Everything in the standard service</>),
                            (<>Spark plug replacement</>),
                            (<>Fuel filter replacement</>),
                            (<>Brake pads and disc thickness measurement</>),
                            (<>Wheel alignment and balancing check</>),
                            (<>AC system performance test</>),
                            (<>Suspension check — bushings, shocks, joints</>),
                            (<>Gearbox and differential fluid levels</>),
                            (<>30-point digital inspection report sent to you after</>),
                        ],
                    },
                    {
                        type: "h2",
                        content: "Which Brands Do We Service?",
                    },
                    {
                        type: "p",
                        content: (<>All of them, essentially. Maruti Suzuki, Hyundai, Honda, Toyota, Tata, Mahindra, Kia, Volkswagen, Skoda, Ford, Renault, Nissan, MG, Jeep, and others. Petrol, diesel, CNG — we handle all fuel types. And if you have a hybrid, give us a call and we'll let you know what we can cover.</>),
                    },
                    {
                        type: "h2",
                        content: (<>Why Bother With Regular Servicing — Honestly?</>),
                    },
                    {
                        type: "p",
                        content: (<>We're not going to give you the corporate-brochure answer here. The real reasons are simple. A properly serviced car uses noticeably less fuel — that alone often covers the cost of the service over a few months of driving. It's also far less likely to break down at 11pm on the expressway. And when you eventually sell it, service history genuinely affects resale value, especially on platforms like Cars24 or OLX.</>),
                    },
                ]
            }
        }}
    />
  )
}

export default CarServicingInNoidaPage