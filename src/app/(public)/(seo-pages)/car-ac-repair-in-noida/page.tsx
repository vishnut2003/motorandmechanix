import { Metadata } from "next"
import CustomLayoutForSeoPages from "../custom-layout";
import featuredImage from "../car-repair-in-noida/assets/featured-image.jpg";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Car AC Repair in Noida | Fast Fix — Motor Mechanix",
    description: "Car AC not cooling in Noida? Motor Mechanix fixes AC gas, compressor, cooling & electrical faults for all brands. Same-day service available.",
    alternates: {
        canonical: "/car-ac-repair-in-noida",
    },
}

const CarAcRepairInNoidaPage = () => {
    return (
        <CustomLayoutForSeoPages
            pageContent={{
                featuredImage,
                body: {
                    h1: "Car AC Repair in Noida — Don't Drive Through Summer in a Hot Car",
                    contents: [
                        {
                            type: "p",
                            content: (<>If you've ever sat in Noida traffic in May with a broken AC, you know exactly why this matters. A working air conditioner isn't a luxury in this climate — it's something you genuinely need. And yet a lot of people put off car AC repair in Noida because they're worried about what it'll cost.</>),
                        },
                        {
                            type: "p",
                            content: (<>Most car AC problems aren't as complicated or expensive as people fear. At <Link href="https://motorandmechanix.com/">Motor Mechanix</Link> , we diagnose car air conditioning repair Noida issues properly before recommending anything. Sometimes it's just AC gas charging Noida. Sometimes it's a dirty cabin filter nobody's changed in three years. Occasionally it's an AC compressor repair Noida case — but we'll tell you exactly what's wrong before you agree to any work.</>)
                        },
                        {
                            type: "h2",
                            content: "What People Come to Us With Most Often",
                        },
                        {
                            type: "ul",
                            content: [
                                (<>AC running but not cooling — just blowing air at ambient temperature</>),
                                (<>AC cools for a while then stops, then starts again — intermittent compressor clutch issue</>),
                                (<>Musty or mouldy smell from the vents — bacteria in the evaporator, very common</>),
                                (<>Burning smell — usually an electrical fault or overloaded component</>),
                                (<>Rattling from the AC — compressor bearing or a loose part</>),
                                (<>Hissing sound — refrigerant leak somewhere in the system</>),
                                (<>Water dripping inside the car — blocked drain pipe, easy fix</>),
                                (<>Engine overheats when AC is on — typically a condenser or cooling fan issue</>),
                                (<>Frost forming on the AC pipes — usually an expansion valve problem</>),
                            ],
                        },
                        {
                            type: "h2",
                            content: "AC Services We Provide",
                        },
                        {
                            type: "ul",
                            content: [
                                (<>AC gas top-up and full recharge — R134a and newer R1234yf systems</>),
                                (<>Leak detection with electronic and UV dye methods</>),
                                (<>AC compressor inspection, repair, and replacement</>),
                                (<>Condenser cleaning, repair, and replacement</>),
                                (<>Evaporator cleaning — removes bacteria causing bad smells</>),
                                (<>Cabin air filter replacement — often forgotten, makes a real difference</>),
                                (<>Expansion valve diagnosis and replacement</>),
                                (<>Blower motor and resistor repair</>),
                                (<>Electrical and wiring diagnosis in the AC circuit</>),
                                (<>AC duct cleaning and disinfection — internal sanitisation</>),
                            ]
                        },
                        {
                            type: "h2",
                            content: "About AC Gas Recharging"
                        },
                        {
                            type: "p",
                            content: (<>We use a fully automated recovery, vacuum, and recharge machine — not a manual filling kit. The machine first evacuates the old refrigerant safely, then tests the system for leaks under vacuum, then charges it to the exact gram specification for your car. This is important because overcharging is nearly as incorrect as undercharging and it is something that you can not properly perform with a simple can and hose.</>)
                        },
                        {
                            type: "p",
                            content: (<>It is approximately 90 minutes to 2 hours, and you should have a tangible colder AC since.</>)
                        },
                        {
                            type: "h2",
                            content: "Why Does AC Gas Run Out?",
                        },
                        {
                            type: "p",
                            content: (<>Refrigerant doesn't get used up like fuel — it circulates in a closed system. If it's low, it's leaking somewhere. Some seepage through rubber seals is normal over 3–4 years. A significant drop in a short time means there's a proper leak that needs to be found and fixed, not just topped up and ignored.</>)
                        }
                    ]
                },
            }}
        />
    )
}

export default CarAcRepairInNoidaPage