import { Metadata } from "next"
import CustomLayoutForSeoPages from "../custom-layout"
import featuredImage from "../car-repair-in-noida/assets/featured-image.jpg";

export const metadata: Metadata = {
    title: "Car Body Shop in Noida | Dent, Paint & Panel Repair — Motor Mechanix",
    description: "Dent removal, panel replacement & professional car painting in Noida. Accidental & cosmetic repairs. Insurance approved. Motor Mechanix.",
    alternates: {
        canonical: "/body-shop-in-noida",
    },
}

const BodyShopInNoidaPage = () => {
  return (
    <CustomLayoutForSeoPages
        pageContent={{
            featuredImage,
            body: {
                h1: "Car Body Shop in Noida — Dents, Paint, and Panel Work Done Right",
                contents: [
                    {
                        type: "p",
                        content: (<>A dent or scratch on your car is frustrating out of proportion to how serious it actually is. It doesn't affect how the car drives, but it's the first thing you see every time you look at it. Whether it happened in a parking lot or on the expressway, we can fix it — and in most cases, you won't know it was ever there.</>),
                    },
                    {
                        type: "p",
                        content: (<>Motor Mechanix runs a proper body shop in Noida — with a temperature-controlled paint booth, professional panel equipment, and mechanics who take cosmetic repair as seriously as mechanical repair. We handle everything from a door ding to full post-accident restoration.</>)
                    },
                    {
                        type: "h2",
                        content: "Body Shop Services We Offer",
                    },
                    {
                        type: "ul",
                        content: [
                            (<>Dent removal and panel shaping- restoring the original shape of bended metal</>),
                            (<>Paintless Dent Repair (PDR) This is used in small dents where the paint has not been damaged so it does not require repainting</>),
                            (<>Replacement of panels — doors, bonnet, boot lid, front and rear wings</>),
                            (<>Bumper repair and replacement — cracks, breaks, full replacement if beyond repair</>),
                            (<>Scratch removal — polishing minor surface scratches, full repaint for deeper ones</>),
                            (<>Spot painting — colour-matched to your car's exact factory shade</>),
                            (<>Full panel or car respray — when a larger area needs repainting</>),
                            (<>Rust treatment — treating affected metal and applying protective coating</>),
                            (<>Frame and chassis straightening — structural alignment after major impact</>),
                            (<>Alloy wheel scuffs and kerb damage — repair and refinishing</>),
                        ]
                    },
                    {
                        type: "h2",
                        content: "Paintless Dent Repair — Worth Knowing About"
                    },
                    {
                        type: "p",
                        content: (<>PDR is a technique where small dents are massaged back into shape from behind the panel using specialised tools — without any sanding, filler, or painting. It works brilliantly on parking dings, hail damage, and door edge dents where the paint hasn't cracked. It's faster than conventional repair and costs considerably less. The finish is seamless — because you're working with the original metal and paint, not covering it up.</>)
                    },
                    {
                        type: "p",
                        content: (<>Not every dent can be fixed this way. If the paint is broken or the metal has creased too sharply, conventional repair is needed. We'll tell you which applies before we start.</>)
                    },
                    {
                        type: "h2",
                        content: "Our Paint Quality",
                    },
                    {
                        type: "p",
                        content: (<>We use 2K automotive paint — a two-component system that cures chemically for a much harder, more durable finish than single-stage paint. All painting is done in our enclosed booth, which controls temperature, humidity, and dust. This matters enormously for the final result — paint applied in the open air will never match what comes out of a controlled booth.</>),
                    },
                    {
                        type: "p",
                        content: (<>Digitally, colour matching is carried out with the paint code of your car (this is normally located in the door frame of the driver). However, even with the older cars where the colour has become a bit darker we can tweak the formula so that it matches the current car colour and not the original new colour.</>),
                    },
                    {
                        type: "h2",
                        content: "Accidental Body Repair and Insurance",
                    },
                    {
                        type: "p",
                        content: (<>Most accident-related body repairs are claimable under comprehensive insurance. Motor Mechanix is empanelled with major insurers, so we can process your claim cashlessly — meaning the insurer pays us directly and you handle only the deductible or depreciation portion, if any. We handle the insurance coordination, the surveyor visit, and all the documentation.</>)
                    },
                    {
                        type: "h2",
                        content: "What to Expect From the Process"
                    },
                    {
                        type: "ul",
                        content: [
                            (<>Written estimate before any work begins — you approve it</>),
                            (<>Damaged panels removed and repaired or replaced</>),
                            (<>Multiple-stage paint process: primer coat, base colour, clear protective coat</>),
                            (<>Each coat properly cured before the next is applied</>),
                            (<>Final inspection under controlled lighting to check for any variation</>),
                            (<>Car washed and interior cleaned before handover</>),
                        ]
                    },
                ]
            }
        }}
    />
  )
}

export default BodyShopInNoidaPage