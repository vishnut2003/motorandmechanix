import { Metadata } from "next"
import CustomLayoutForSeoPages from "../custom-layout"
import featuredImage from "../tyre-shop-in-noida/assets/featured-image.jpg";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Wheel Alignment & Balancing in Noida | Motor Mechanix",
    description: "Car pulling to one side? Steering vibrating? Get computerised wheel alignment & balancing in Noida at Motor Mechanix. Fixed fast.",
    alternates: {
        canonical: "/wheel-alignment-balancing-in-noida",
    },
}

const WheelAlignmentBalancingInNoida = () => {
    return (
        <CustomLayoutForSeoPages
            pageContent={{
                featuredImage,
                body: {
                    h1: "Wheel Alignment & Balancing in Noida — Small Fix, Big Difference",
                    contents: [
                        {
                            type: "p",
                            content: (<>The roads in Noida are improving, however, the holes and speed bumps continue to have their way. A single bump is sufficient to cause the wheels to be knocked off course, and most individuals are unaware that it has taken place until they have already bitten through half of their tyres in an uneven manner.  When discovered at an early stage, wheel alignment in Noida and wheel balancing in Noida are inexpensive to repair. Not so much when they have been neglected for months.</>),
                        },
                        {
                            type: "h2",
                            content: "Alignment and Balancing What Is It That is Different?",
                        },
                        {
                            type: "h3",
                            content: "Wheel Alignment",
                        },
                        {
                            type: "p",
                            content: (<>Alignment refers to how your wheels are oriented both with regard to each other and to the ground. When they lose these angles a result of potholes, curbs, simple wear and tear, your car will start steering to one side, your steering wheel will be bent when you are travelling in a straight line, and your tyres will be worn unevenly along a single side. Our computerised wheel alignment Noida machine is a high-tech 3D system capable of measuring your four wheels and then repositioning them to the desired specifications, as indicated by your car manufacturer, making it the right choice if you are searching for car alignment near me or accurate <Link href="https://motorandmechanix.com/tyre-shop-in-noida">tyre alignment Noida</Link> .</>),
                        },
                        {
                            type: "h3",
                            content: "Wheel Balancing",
                        },
                        {
                            type: "p",
                            content: (<>Balancing is concerned with the weight distribution in every single wheel and the tyre assembly. Even a few grams of imbalance with a spinning at 80 km/h produces a perceivable vibration. It will most likely be in the steering wheel, the floor or the seat. We check the position of the weight that is not in place and place small precision weights to reposition it by using a dynamic balancing machine.</>),
                        },
                        {
                            type: "p",
                            content: (<>These two are different jobs though they are usually performed jointly and particularly when the new tyres are being fitted.</>),
                        },
                        {
                            type: "h2",
                            content: "Signs Your Alignment Is Off",
                        },
                        {
                            type: "ul",
                            content: [
                                (<>Car is always swaying to the left or right in a straight and flat road.</>),
                                (<>When you are traveling straight, the steering wheel is clearly left off-centre.</>),
                                (<>Tyre is inner or outer worn more than the rest.</>),
                                (<>It is like the steering is heavier or less responsive.</>),
                                (<>Consumption of fuel has been sneaked without a clear explanation.</>),
                            ]
                        },
                        {
                            type: "h2",
                            content: "Indications Your Wheels are Out of Balance"
                        },
                        {
                            type: "ul",
                            content: [
                                (<>Vibrate on the steering wheel, especially between 60 and 90km/h.</>),
                                (<>Shakings that are felt via the floor or seat at highway pace.</>),
                                (<>Tyres that have a scalloped or cupped wear pattern.</>),
                                (<>Ride is coarse as it is on a good road.</>),
                            ]
                        },
                        {
                            type: "h2",
                            content: "Our Process",
                        },
                        {
                            type: "ul",
                            content: [
                                (<>The car is placed on the alignment rack; at this stage, the four wheels are measured simultaneously.</>),
                                (<>The 3D sensors provide precise information of toe, camber, and caster per wheel.</>),
                                (<>Technician sets the angles to the factory specification of your car.</>),
                                (<>You receive a printout of the pre and post reading- you can know precisely what has changed.</>),
                                (<>Dynamic balancing is then done on each wheel, - weights added where necessary.</>),
                                (<>Minimal test drive to ensure that everything follows straight and there is no vibration.</>),
                            ]
                        },
                        {
                            type: "h2",
                            content: "How Often Should You Do This?",
                        },
                        {
                            type: "p",
                            content: (<>After every 10,000-15,000km in regular maintenance. But also: the next time there has been a major pothole strike, when changing tyres, when carrying out any suspension job and the accident. You must not wait until the next scheduled period in case you observe any of the above signs.</>)
                        }
                    ]
                }
            }}
        />
    )
}

export default WheelAlignmentBalancingInNoida