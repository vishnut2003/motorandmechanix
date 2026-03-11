import { Metadata } from "next";
import CustomLayoutForSeoPages from "../custom-layout";
import featuredImage from "../car-repair-in-noida/assets/featured-image.jpg";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Best Car Mechanic Near Me in Noida | Certified — Motor Mechanix",
    description: "Looking for a trusted car mechanic in Noida? Motor Mechanix has certified, experienced mechanics for all brands. Fair prices, honest diagnosis.",
    alternates: {
        canonical: "/car-mechanic-in-noida",
    }
}

const CarMechanicsInNoida = () => {
    return (
        <CustomLayoutForSeoPages
            pageContent={{
                featuredImage,
                body: {
                    h1: "Car Mechanic in Noida — People Who Actually Know What They're Doing",
                    contents: [
                        {
                            type: "p",
                            content: (<>It is not as easy as it should be to find a good car mechanic near me. You would want an employee who will not only look at your car, but also tell the truth regarding what is wrong with it, and will not bill you with parts that did not have to be changed. That is the benchmark and that is what we attempt to give to our customers on the day to day basis at <Link href="https://motorandmechanix.com/">Motor Mechanix</Link> — trusted as a reliable car mechanic in Noida</>),
                        },
                        {
                            type: "p",
                            content: (<>Our mechanics are also qualified, seasoned and, most importantly, responsible — experienced <Link href="https://motorandmechanix.com/auto-repair-shop-in-noida">auto mechanic Noida</Link>  professionals you can depend on. You schedule your car with a technician who is allocated to the particular car. He or she inspects it, performs the work, and then signs it before he or she leaves. No handing over between shifts.Every job is handled by a certified mechanic Noida customers can trust.</>),
                        },
                        {
                            type: "h2",
                            content: "What Our Mechanics Can Do to You",
                        },
                        {
                            type: "p",
                            content: (<>The short answer: a lot. The following are some of the more frequently presented issues:</>),
                        },
                        {
                            type: "ul",
                            content: [
                                (<>Car is not starting, we diagnose it to be a battery, alternator, starter motor or ignition.</>),
                                (<>Engine warning light- we insert a fault code and read it, and then actually correct what is producing the fault code.</>),
                                (<>Car overheating - might be the radiator, thermostat, water pump, or a coolant passageway that is blocked.</>),
                                (<>Strange sounds, rattles, knocks, squealing, we discover the cause, and not the effect.</>),
                                (<>Inefficient fuel consumption - This may be a problem with an air filter, fuel injector or O2 sensor.</>),
                                (<>AC failed - compressor, refrigerant or electrical.</>),
                                (<>Oil spillages- we trace the origin of the spillage and seal the leak or gasket right.</>),
                                (<>Vibration or drag when accelerating, or roughness—may be a variety of things; we get it right.</>),
                            ],
                        },
                        {
                            type: "h2",
                            content: "Experience and Certifications",
                        },
                        {
                            type: "p",
                            content: (<>Our team has a minimum of more than ten years of practical experience in <Link href="https://motorandmechanix.com/car-repair-in-noida">car repair</Link> . Some of our senior mechanics have also been hired through authorised dealerships - hence they have a manufacturer level training but without dealership waiting times and prices. That is why many customers consider us the best mechanic Noida drivers rely on.</>),
                        },
                        {
                            type: "p",
                            content: (<>We invest in training and modernized diagnostic machines. Over the past decade, there has been a lot of change in the cars including the amount of electronics used, the number of sensors, the number of software and our mechanics have maintained pace with that.</>),
                        },
                        {
                            type: "h2",
                            content: "All Major Car Brands",
                        },
                        {
                            type: "p",
                            content: (<>Maruti Suzuki, Hyundai, Honda, Toyota, Tata, Mahindra, Kia, Volkswagen, Skoda, Renault, Nissan, MG Motor, Jeep, Ford - and most of the rest you will see on the Indian roads. There is no brand that is too complicated or too complicated that is outside our specialty. If it drives, we work on it.</>),
                        },
                        {
                            type: "h2",
                            content: "Times and Place of Workshop",
                        },
                        {
                            type: "ul",
                            content: [
                                (<>Location: Noida, UP — see us on Google Maps via search Motor Mechanix.</>),
                                (<>Open 7 days a week, Monday to Saturday, 9 AM to 7 PM.</>),
                                (<>Assistance in the event of emergency - <Link href="https://motorandmechanix.com/contact-us">call us out of hours and we will endeavour</Link>.</>),
                            ]
                        },
                        {
                            type: "h2",
                            content: "Something Customers are Saying a Lot",
                        },
                        {
                            type: "p",
                            content: (<>The people will always tell you that they had been overcharged elsewhere and that is why they had to come to us. That means something to us. We would sooner lose money at the office than lose the confidence of a customer and frankly speaking, the repeat business that accrues as a result of being straight with people is what has enabled this workshop to continue swelling.</>)
                        }
                    ]
                }
            }}
        />
    )
}

export default CarMechanicsInNoida