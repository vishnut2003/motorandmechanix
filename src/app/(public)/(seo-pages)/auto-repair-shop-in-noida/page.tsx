import { Metadata } from "next"
import CustomLayoutForSeoPages from "../custom-layout";
import FeaturedImage from "../car-repair-in-noida/assets/featured-image.jpg";
import Link from "next/link";
export const metadata: Metadata = {
    title: "Top Auto Repair Shop in Noida | All Brands — Motor Mechanix",
    description: "Motor Mechanix is Noida's trusted multi-brand auto repair shop. Engine, body, AC, brakes, tyres & insurance claims — all under one roof.",
    alternates: {
        canonical: "/auto-repair-shop-in-noida",
    }
}

const AutoRepairShopInNoida = () => {
  return (
    <CustomLayoutForSeoPages
        pageContent={{
            featuredImage: FeaturedImage,
            body: {
                h1: "Auto Repair Shop in Noida — Everything Under One Roof",
                contents: [
                    {
                        type: "p",
                        content: (<>There's something to be said for not having to run around to five different places every time something goes wrong with your car. Brakes at one place, AC at another, tyres somewhere else. It's exhausting and expensive when you factor in the time and running around. That’s why having a reliable <Link href="https://motorandmechanix.com/">auto repair shop in Noida</Link>  or even searching for an auto repair shop near me should lead you somewhere that handles it all.</>),
                    },
                    {
                        type: "p",
                        content: (<>Motor Mechanix was built to be genuinely <Link href="https://motorandmechanix.com/services">full-service</Link> — a trusted car workshop Noida drivers rely on. Engine work, bodywork, tyres, alignment, insurance claims — it all happens here, at our workshop in Noida. One conversation, one point of contact, one bill. Complete <Link href="https://motorandmechanix.com/multi-brand">multi brand car repair Noida</Link>  solutions under one roof.</>),
                    },
                    {
                        type: "h2",
                        content: "What's in Our Workshop",
                    },
                    {
                        type: "p",
                        content: (<>We've put proper money into equipment, because good mechanics with bad tools can only go so far.</>),
                    },
                    {
                        type: "ul",
                        content: [
                            (<>4-post vehicle hoists — safe, stable access to the full underside of your car</>),
                            (<>3D computerised wheel alignment machine — not the old manual type</>),
                            (<>Dynamic balancing equipment — eliminates vibration properly</>),
                            (<>Advanced OBD-II scanners compatible with all modern car brands</>),
                            (<>Dedicated paint booth — temperature-controlled for professional finish</>),
                            (<>AC recovery and recharge station — handles both R134a and R1234yf refrigerants</>),
                            (<>Battery load tester and charging station</>),
                            (<>Genuine and OEM-grade parts stocked for common repairs</>),
                        ],
                    },
                    {
                        type: "h2",
                        content: "Full List of Services at Our Repair Shop",
                    },
                    {
                        type: "ul",
                        content: [
                            (<>Engine diagnostics, repair, and rebuilds</>),
                            (<>Gearbox and transmission work — manual and automatic</>),
                            (<>Suspension and steering repair</>),
                            (<>Brake system — pads, discs, calipers, ABS, handbrake</>),
                            (<>Air conditioning — gas charging, compressor, full system repair</>),
                            (<>Auto glass — windscreen chips, cracks, full replacement</>),
                            (<><Link href="https://motorandmechanix.com/body-shop-in-noida">Body repair</Link> — dents, panel replacement, painting</>),
                            (<>Tyre sales and fitting — all major brands stocked</>),
                            (<>Wheel alignment and balancing</>),
                            (<>Cashless insurance claim processing — we handle it end to end</>),
                        ],
                    },
                    {
                        type: "h2",
                        content: "Why Multi-Brand Matters",
                    },
                    {
                        type: "p",
                        content: (<>Most people in Noida own one of twenty or so popular car models. But families often have more than one car — and they're not all the same brand. Our technicians are trained across manufacturers, so you don't need a different specialist for each vehicle in the household. One workshop, all your cars.</>),
                    },
                    {
                        type: "h2",
                        content: "We're Not a Drive-Through Workshop",
                    },
                    {
                        type: "p",
                        content: (<>We take our time to do things properly. Yes, that occasionally means a repair takes a few hours longer than a quick-fix place might promise. But it also means your car actually gets fixed — not patched up until the same problem comes back three weeks later. Our workshop is clean, organised, and run like a professional operation, not a chaotic roadside garage.</>),
                    },
                ]
            }
        }}
    />
  )
}

export default AutoRepairShopInNoida