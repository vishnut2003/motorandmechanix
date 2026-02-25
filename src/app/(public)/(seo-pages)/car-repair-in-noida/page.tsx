import { Metadata } from "next";
import CustomLayoutForSeoPages from "../custom-layout"
import FeaturedImage from "./assets/featured-image.jpg";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Car Repair Services in Noida | Motor Mechanix",
    description: "Need honest car repair in Noida? Motor Mechanix fixes engines, suspension, electricals & accident damage. All brands. Walk in or call us.",
    alternates: {
        canonical: "/car-repair-in-noida",
    },
}

const CarRepairInNoida = async () => {
    return (
        <CustomLayoutForSeoPages
            pageContent={{
                featuredImage: FeaturedImage,
                body: {
                    h1: "Car Repair Services in Noida — Honest Work, No Runaround",
                    contents: [
                        {
                            type: "p",
                            content: (
                                <>
                                    Most car owners looking for car repair in Noida or <Link href="https://motorandmechanix.com/">car repair shops near me in Noida</Link> have at least one bad workshop story. You go in for a minor issue, come out with a big bill — and the problem's still there three weeks later. We've heard it plenty of times. It's actually one of the main reasons Motor Mechanix was set up the way it was.
                                </>
                            ),
                        },
                        {
                            type: "p",
                            content: (
                                <>
                                    We're a multi-brand car repair workshop offering reliable <Link href="https://motorandmechanix.com/services">car repair service near me</Link>  and <Link href="https://motorandmechanix.com/auto-repair-shop-in-noida">auto car repair</Link>  near me, and we do things a bit differently. Before any work starts, we tell you exactly what's wrong and what it'll cost. You decide. No pressure, no inflated estimates, no mystery charges at the end — just honest service when you're searching for the best car repair near me or trusted car repair places near me.
                                </>
                            ),
                        },
                        {
                            type: "h2",
                            content: "What Kind of Repairs Do We Handle?",
                        },
                        {
                            type: "p",
                            content: (
                                <>
                                    Pretty much everything. Our mechanics deal with engine problems, suspension issues, electrical faults, accidental damage — the full range. A few things we work on regularly:
                                </>
                            ),
                        },
                        {
                            type: "ul",
                            content: [
                                (<>Engine diagnosis and repair — knocking sounds, misfires, warning lights, oil leaks</>),
                                (<>Suspension and steering — worn shocks, ball joints, tie rods, pulling to one side</>),
                                (<>Electrical faults — dead battery, alternator issues, sensor failures, wiring problems</>),
                                (<>Accidental repair — panel work, frame straightening, mechanical damage post-crash</>),
                                (<>Brake system — pads, discs, calipers, ABS, brake fluid flush</>),
                                (<>Cooling system — radiator, thermostat, water pump, coolant leaks</>),
                                (<>Exhaust system — catalytic converter, silencer, pipe repair</>),
                                (<>Battery replacement — including AGM and EFB batteries for start-stop systems</>),
                            ],
                        },
                        {
                            type: "h2",
                            content: "We Work on All Car Brands",
                        },
                        {
                            type: "p",
                            content: (
                                <>
                                    Maruti, Hyundai, Honda, Tata, Toyota, Kia, Mahindra, Volkswagen, Skoda, Renault, Nissan, MG, Jeep — if it's on Indian roads, chances are we've worked on it. You don't need to go to a dealership for quality repairs, and frankly, you often don't need to pay dealership prices either.
                                </>
                            ),
                        },
                        {
                            type: "h2",
                            content: "How It Actually Works When You Bring Your Car In",
                        },
                        {
                            type: "ul",
                            content: [
                                (<>Drop your car off at our Noida workshop — or call us, we'll guide you from there</>),
                                (<>We run a proper multi-point check plus computerised diagnostics if needed</>),
                                (<>We call you with a clear breakdown of what we found and what it'll cost to fix</>),
                                (<>You say yes — work begins. You say no to something — we don't do it</>),
                                (<>We test the car thoroughly before handing it back. No 'come back if there's still a problem'</>),
                            ],
                        },
                    ],
                    faqs: {
                        heading: "A Few Things Customers Often Ask Us",
                        contents: [
                            {
                                question: "Do you use genuine parts?",
                                answer: "Yes — genuine OEM parts wherever possible, and OEM-equivalent quality where not. We'll tell you which is which.",
                            },
                            {
                                question: "How long does repair usually take?",
                                answer: "Depends on the job. Most standard repairs are done the same day or within 24 hours. Major engine or accident work takes longer — we'll give you a realistic timeline upfront.",
                            },
                            {
                                question: "Do you provide any guarantee on repairs?",
                                answer: "Yes. Our repair work comes with a service warranty. If something we fixed isn't right, bring it back.",
                            },
                        ]
                    }
                },
            }}
        />
    )
}

export default CarRepairInNoida