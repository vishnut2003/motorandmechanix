import { Metadata } from "next"
import CustomLayoutForSeoPages from "../custom-layout"
import featuredImage from "../car-repair-in-noida/assets/featured-image.jpg";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Auto Glass Repair & Windscreen Replacement in Noida — Motor Mechanix",
    description: "Cracked windscreen or broken car glass in Noida? Motor Mechanix offers chip repair, full replacement & insurance claims. All brands.",
    alternates: {
        canonical: "/auto-glass-repair-in-noida",
    }
}

const AutoGlassRepairInNoida = () => {
  return (
    <CustomLayoutForSeoPages
        pageContent={{
            featuredImage,
            body: {
                h1: "Auto Glass Repair in Noida — Cracks That Look Small Can Become Problems Fast",
                contents: [
                    {
                        type: "p",
                        content: (<>A stone chip or small crack in your windscreen is easy to ignore. It's not affecting visibility much, it's not going to fall out. So you leave it. Then a summer afternoon in Noida heat, or one sharp pothole, and that 5cm crack becomes 40cm and runs straight into your line of sight. Now it’s a windscreen replacement Noida, not a chip repair.</>),
                    },
                    {
                        type: "p",
                        content: (<>Motor Mechanix handles the full range of <Link href="https://motorandmechanix.com/">auto glass repair in Noida</Link>  — small chip repairs, windscreen crack repair Noida, full windscreen replacement, and door and rear glass replacement. If you're searching for car glass repair near me, We work with all car brands and can process most repairs as a cashless insurance claim.</>),
                    },
                    {
                        type: "h2",
                        content: "What We Can Fix (and What We Can't)",
                    },
                    {
                        type: "p",
                        content: (<b>Chip and Crack Repair — When This Is Possible</b>)
                    },
                    {
                        type: "ul",
                        content: [
                            (<>Chip smaller than a 10-rupee coin — we inject resin, cure it, polish it out</>),
                            (<>Crack under about 10–12 cm in length</>),
                            (<>Damage that's not in the driver's direct sightline</>),
                            (<>Crack that hasn't spread to the edge of the glass yet</>),
                        ]
                    },
                    {
                        type: "p",
                        content: (<>Resin repair takes around 30–45 minutes, costs a fraction of replacement, and in most cases is barely visible after. Do it early and you save the windscreen.</>)
                    },
                    {
                        type: "p",
                        content: (<b>When the Windscreen Needs to Be Replaced</b>),
                    },
                    {
                        type: "ul",
                        content: [
                            (<>Cracks longer than 12–15 cm, or that have spread to the edges</>),
                            (<>Multiple chips or a pattern of cracks across the screen</>),
                            (<>Damage directly in front of the driver that obstructs vision</>),
                            (<>Internal delamination — fogging or moisture between the glass layers</>),
                            (<>Severe impact damage that has compromised the structure of the screen</>),
                        ]
                    },
                    {
                        type: "h2",
                        content: "Full Glass Replacement — What the Process Looks Like",
                    },
                    {
                        type: "ul",
                        content: [
                            (<>Old glass is carefully removed without damaging the frame or paint</>),
                            (<>Frame is cleaned and prepped — old adhesive fully removed</>),
                            (<>New OEM or OEM-quality windscreen fitted with manufacturer-approved urethane adhesive</>),
                            (<>Setting time observed — typically 1 to 3 hours depending on adhesive type</>),
                            (<>Water test done before handover to check the seal</>),
                            (<>ADAS camera or rain sensor recalibrated if your car has one mounted on the screen</>),
                        ]
                    },
                    {
                        type: "h2",
                        content: "ADAS Calibration — Important for Modern Cars",
                    },
                    {
                        type: "p",
                        content: (<>Many cars produced in the last 5–7 years have cameras mounted on the inside of the windscreen for lane assist, automatic emergency braking, or adaptive cruise control. When you replace the windscreen, these cameras shift position — even by a few millimetres — and need recalibration to work correctly. Skipping this can mean ADAS features work incorrectly or not at all. We carry out static calibration for the most common systems.</>)
                    },
                    {
                        type: "h2",
                        content: "Insurance Claims for Glass Damage"
                    },
                    {
                        type: "p",
                        content: (<>Windscreen damage is often covered under comprehensive insurance policies with zero or minimal excess, depending on your insurer and plan. Motor Mechanix can process this as a cashless claim with most major insurers — meaning the glass gets replaced at little or no cost to you. Worth checking your policy before deciding to pay out of pocket.</>)
                    },
                    {
                        type: "h2",
                        content: "Other Glass We Replace"
                    },
                    {
                        type: "ul",
                        content: [
                            (<>Front and rear door glass — shattered, jammed, or broken by accident</>),
                            (<>Quarter glass and vent windows</>),
                            (<>Rear windscreen — including heated element models</>),
                            (<>Sunroof glass — cracks, chips, or shattered panels</>),
                        ]
                    },
                ]
            }
        }}
    />
  )
}

export default AutoGlassRepairInNoida