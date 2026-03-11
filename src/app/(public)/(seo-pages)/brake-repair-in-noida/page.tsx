import { Metadata } from "next"
import CustomLayoutForSeoPages from "../custom-layout"
import featuredImage from "../car-repair-in-noida/assets/featured-image.jpg";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Brake Repair in Noida | All Cars — Motor Mechanix",
    description: "Squealing brakes, soft pedal or ABS light on? Expert brake repair in Noida at Motor Mechanix. Pads, discs, fluid & more.",
    alternates: {
        canonical: "/brake-repair-in-noida"
    },
}

const BrakeRepairInNoidaPage = () => {
  return (
    <CustomLayoutForSeoPages
        pageContent={{
            featuredImage,
            body: {
                h1: "Brake Repair in Noida — Don't Ignore What Your Car Is Telling You",
                contents: [
                    {
                        type: "p",
                        content: (<>Brakes are one of those things people keep meaning to get checked 'soon.' Then soon turns into three months, and that faint squeal turns into a grinding sound you can't ignore at the lights. We see this pattern a lot with car brakes Noida drivers bring in. The earlier you come in for brake repair in Noida, the less it costs.</>)
                    },
                    {
                        type: "p",
                        content: (<><Link href="https://motorandmechanix.com/">Motor Mechanix</Link> handles brake repairs for all car makes and models in Noida. Whether it’s simple brake pad replacement Noida drivers need or a full system overhaul, our technicians will look at it properly and tell you exactly what needs doing — and what doesn't. If you are searching for reliable brake service near me, this is how it should be handled.</>)
                    },
                    {
                        type: "h2",
                        content: "Warning Signs That Something's Wrong With Your Brakes",
                    },
                    {
                        type: "ul",
                        content: [
                            (<>Squealing or squeaking when you press the brake — the most common early sign of worn pads</>),
                            (<>Metal-on-metal noise grinding metal pads disappeared, now you are destroying discs.</>),
                            (<>Brake pedal feels soft, spongy, or goes further than normal before engaging</>),
                            (<>Car pulls noticeably to the left or right when braking</>),
                            (<>Car pulls noticeably to the left or right when braking</>),
                            (<>Vibration or pulsing felt through the pedal when you brake</>),
                            (<>Brake warning light on the dashboard that hasn't gone away</>),
                            (<>Burning smell, especially after driving in traffic or down a long slope</>),
                            (<>Car taking longer to stop — something the driver knows intuitively, even if it's gradual</>),
                        ]
                    },
                    {
                        type: "h2",
                        content: "Brake Services We Carry Out",
                    },
                    {
                        type: "ul",
                        content: [
                            (<>Brake pad replacement — front, rear, or all four</>),
                            (<>Brake disc and rotor measurement, resurfacing where possible, replacement when necessary</>),
                            (<>Brake drum inspection and replacement (for rear drum setups)</>),
                            (<>Brake caliper inspection — for seizing, leaking, or uneven application</>),
                            (<>Brake fluid condition test and full system flush</>),
                            (<>ABS system diagnostics — sensor faults, hydraulic unit issues</>),
                            (<>Handbrake and parking brake cable adjustment or replacement</>),
                            (<>Brake line inspection for rust or leaks</>),
                        ]
                    },
                    {
                        type: "h2",
                        content: "Disc Brakes vs Drum Brakes"
                    },
                    {
                        type: "p",
                        content: (<>Disc brakes are on the front of virtually every modern car, and most now have discs at the rear as well. Some older and smaller cars still use drum brakes at the rear — they work differently but are just as important. Our mechanics are trained on both systems across all brands. We'll tell you clearly what type your car has and what exactly needs attention.</>),
                    },
                    {
                        type: "h2",
                        content: "Brake Fluid — More Important Than Most People Think",
                    },
                    {
                        type: "p",
                        content: (<>Brake fluid can be hygroscopic, it absorbs air moisture as time progresses. Damp fluid, which is old, has a significantly lower boiling point and may result in brake fade when used heavily (such as a long descent). The majority of the manufacturers suggest changing the brake fluid after every two years with or without regard to the mileage.</>),
                    },
                    {
                        type: "h2",
                        content: "How We Handle Brake Repairs",
                    },
                    {
                        type: "ul",
                        content: [
                            (<>Visual inspection of all four brake corners before we touch anything</>),
                            (<>Measure pad thickness — below 3mm and we recommend replacement; below 2mm it's urgent</>),
                            (<>Check disc thickness and surface condition — score marks, warping, rust pitting</>),
                            (<>Test brake fluid boiling point with a calibrated tester</>),
                            (<>ABS scan if the warning light is on</>),
                            (<>Carry out approved repair with your sign-off on the quote</>),
                            (<>Test drive after to verify braking is even, firm, and straight</>),
                        ]
                    },
                ]
            }
        }}
    />
  )
}

export default BrakeRepairInNoidaPage