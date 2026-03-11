import { Metadata } from "next"
import CustomLayoutForSeoPages from "../custom-layout"
import featuredImage from "../car-repair-in-noida/assets/featured-image.jpg";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Transmission Repair in Noida | Manual & Automatic — Motor Mechanix",
    description: "Gearbox slipping, grinding or stuck in gear? Expert transmission repair in Noida at Motor Mechanix. Manual, auto, CVT & clutch work.",
    alternates: {
        canonical: "/transmission-repair-in-noida",
    },
}

const TransmissionRepairInNoida = () => {
  return (
    <CustomLayoutForSeoPages
        pageContent={{
            featuredImage,
            body: {
                h1: "Transmission Repair in Noida — Gearbox Problems Fixed Properly",
                contents: [
                    {
                        type: "p",
                        content: (<>Gearbox problems have a way of announcing themselves — a grinding sound, a gear that won't engage, a car that shudders when changing speed. These are the kinds of symptoms that make most drivers nervous, because transmission repair in Noida has a reputation for being expensive.
</>),
                    },
                    {
                        type: "p",
                        content: (<>It can be. But not always. A lot of gearbox repair in Noida, caught early, are manageable repairs. A burnt clutch, a failed solenoid, low or dirty transmission fluid — these are fixable without rebuilding the whole box. At <Link href="https://motorandmechanix.com/">Motor Mechanix</Link> , we diagnose first, so you know exactly what you're dealing with before committing to any gearbox repair Noida.</>),
                    },
                    {
                        type: "h2",
                        content: "Symptoms Which Indicate a Transmission Problem",
                    },
                    {
                        type: "ul",
                        content: [
                            (<>Slipping of gears - the car accelerates, but not accelerates well, or loses gears.</>),
                            (<>Problem with entering or changing gears.</>),
                            (<>Trembling or moving with the shift of gears without a lever being used.</>),
                            (<>During gear shifting (manual), there is grinding or awkwardness, or in automatic there is roughness.</>),
                            (<>Delayed response when shifting from Park to Drive or Reverse</>),
                            (<>Transmission warning light on the dashboard</>),
                            (<>Strange whining or humming sound that changes with speed</>),
                            (<>Red or brown fluid leaking under the car — transmission fluid has a distinctive smell</>),
                            (<>Car stuck in one gear, or won't shift past a certain gear</>),
                        ]
                    },
                    {
                        type: "h2",
                        content: "Manual Transmission Work We Do",
                    },
                    {
                        type: "ul",
                        content: [
                            (<>Synchromesh rings — when gears grind going in, this is often the culprit</>),
                            (<>Complete clutch replacement — plate, pressure plate, release bearing, flywheel check</>),
                            (<>Hydraulic clutch system repair — master cylinder, slave cylinder, fluid</>),
                            (<>Clutch cable replacement and adjustment (on older cable-operated systems)</>),
                            (<>Gear linkage repair and adjustment — for vague or imprecise gear selection</>),
                            (<>Gearbox oil change — often neglected, should be done every 60,000–80,000 km</>),
                            (<>Full manual gearbox rebuild where repair isn't sufficient</>),
                        ]
                    },
                    {
                        type: "h2",
                        content: "Automatic and CVT Transmission Work We Do"
                    },
                    {
                        type: "ul",
                        content: [
                            (<>ATF (Automatic Transmission Fluid) flush and replacement — critical for automatic health</>),
                            (<>Solenoid valve diagnosis and replacement — common cause of shift problems</>),
                            (<>Torque converter inspection — for shudder or slip at low speed</>),
                            (<>TCU (Transmission Control Unit) fault code reading and diagnosis</>),
                            (<>CVT belt/chain and pulley condition check</>),
                            (<>Full automatic gearbox rebuild or sourcing of a tested replacement unit</>),
                        ]
                    },
                    {
                        type: "h2",
                        content: "A Note on Automatic Transmission Fluid"
                    },
                    {
                        type: "p",
                        content: (<>ATF is the most commonly neglected fluid in modern cars. Most automatic car owners have never had it changed. The fluid doesn't just lubricate — it also carries hydraulic pressure and cools the transmission. Old, degraded fluid is the single biggest cause of early automatic gearbox failure. We recommend a full ATF flush every 60,000 to 80,000 km. If yours has never been done, that's worth prioritising.</>)
                    },
                ]
            }
        }}
    />
  )
}

export default TransmissionRepairInNoida