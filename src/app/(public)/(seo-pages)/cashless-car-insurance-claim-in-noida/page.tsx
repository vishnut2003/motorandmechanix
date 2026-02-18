import { Metadata } from "next"
import CustomLayoutForSeoPages from "../custom-layout"
import featuredImage from "./assets/featured-image.jpg";

export const metadata: Metadata = {
    title: "Cashless Car Insurance Claim in Noida | Motor Mechanix",
    description: "Get your accidental car repaired in Noida without paying upfront. Motor Mechanix handles your cashless insurance claim end to end.",
    alternates: {
        canonical: "/cashless-car-insurance-claim-in-noida",
    },
}

const CashlessCarInsuranceLoanInNoida = () => {
  return (
    <CustomLayoutForSeoPages
        pageContent={{
            featuredImage,
            body: {
                h1: "Cashless Car Insurance Claims in Noida — We Handle It, You Relax",
                contents: [
                    {
                        type: "p",
                        content: (<>Getting into an accident is already stressful enough. Then come the calls, the photos, the forms, the surveyor visits, the waiting — and at the end of it all, you still need your car repaired properly. It shouldn't have to be that complicated.</>),
                    },
                    {
                        type: "p",
                        content: (<>Motor Mechanix is empanelled with most major insurance companies in India. That means when your car comes to us after an accident, we coordinate directly with your insurer — the claim, the surveyor visit, the repair approval, the billing — all of it. You pay only your policy's applicable deductible or depreciation (if any). Not the full repair bill.</>),
                    },
                    {
                        type: "h2",
                        content: "What 'Empanelled Garage' Actually Means for You",
                    },
                    {
                        type: "p",
                        content: (<>An empanelled or 'cashless' garage is one that's been approved by an insurance company to carry out repairs and bill them directly. You don't pay for the repair, wait for reimbursement, and deal with paperwork on your own. The garage handles it with the insurer. That's us.</>),
                    },
                    {
                        type: "p",
                        content: (<>If you take your car to a non-empanelled workshop, you pay the full bill yourself and then claim reimbursement — which takes weeks and often gets disputed. Save yourself the trouble.</>)
                    },
                    {
                        type: "h2",
                        content: "Insurance Companies We're Registered With",
                    },
                    {
                        type: "ul",
                        content: [
                            (<>ICICI Lombard General Insurance</>),
                            (<>Bajaj Allianz General Insurance</>),
                            (<>HDFC ERGO General Insurance</>),
                            (<>New India Assurance</>),
                            (<>National Insurance Company</>),
                            (<>United India Insurance</>),
                            (<>SBI General Insurance</>),
                            (<>Reliance General Insurance</>),
                            (<>Tata AIG General Insurance</>),
                            (<>Oriental Insurance Company</>),
                        ]
                    },
                    {
                        type: "p",
                        content: (<>Note: Empanelment status can change. Please call us to confirm cashless coverage for your specific policy before bringing the car in.</>),
                    },
                    {
                        type: "h2",
                        content: "How the Claim Process Works — Step by Step",
                    },
                    {
                        type: "ul",
                        content: [
                            (<>Step 1 — Call us as soon as the accident happens. Don't move the car unnecessarily</>),
                            (<>Step 2 — We guide you through what photos and documents you need right away</>),
                            (<>Step 3 — Car comes to Motor Mechanix (or we assist with towing if needed)</>),
                            (<>Step 4 — We assess the damage, document everything, and file the claim with your insurer</>),
                            (<>Step 5 — Insurance surveyor visits our workshop for their own assessment</>),
                            (<>Step 6 — Once repair is approved, we get to work — using genuine or OEM-quality parts</>),
                            (<>Step 7 — Insurer pays us directly for covered repairs</>),
                            (<>Step 8 — You pay only the deductible or any depreciation amount your policy specifies</>),
                            (<>Step 9 — Car is ready — cleaned, checked, and handed back to you</>),
                        ]
                    },
                    {
                        type: "h2",
                        content: "Documents You'll Need to Keep Handy",
                    },
                    {
                        type: "ul",
                        content: [
                            (<>Your car insurance policy document (soft copy on your phone is fine)</>),
                            (<>Car Registration Certificate (RC)</>),
                            (<>Driving licence of whoever was driving</>),
                            (<>FIR copy — required if there's third-party damage, injury, or the car was stolen</>),
                            (<>Claim intimation number — we help you get this from your insurer if you haven't already</>),
                        ]
                    },
                    {
                        type: "h2",
                        content: "What We Repair Under Insurance Claims",
                    },
                    {
                        type: "ul",
                        content: [
                            (<>Body panel damage — doors, bonnet, boot, wings, bumpers</>),
                            (<>Dent removal and reshaping — panels that can be saved, not just replaced</>),
                            (<>Accident paint — colour-matched, professional finish</>),
                            (<>Structural and frame damage — chassis alignment after major impact</>),
                            (<>Windscreen and auto glass — cracks, chips, full replacement</>),
                            (<>Airbag replacement and control module reset</>),
                            (<>Mechanical damage — engine, suspension, gearbox affected in the accident</>),
                        ]
                    },
                    {
                        type: "h2",
                        content: "Zero Depreciation Cover — Do You Have It?",
                    },
                    {
                        type: "p",
                        content: (<>If you have a zero-dep add-on on your policy, you won't pay depreciation on replaced parts — which can save you a significant amount, especially on newer or more expensive cars. Not sure if your policy includes it? Share your policy document with us when you call and we'll check for you.</>)
                    },
                    {
                        type: "h2",
                        content: "What If My Insurer Isn't on Your Empanelled List?",
                    },
                    {
                        type: "p",
                        content: (<>We can still repair your car. The process would be reimbursement-based instead of cashless — you'd pay us, then claim back from your insurer. We'll give you a detailed, accurate bill with all the documentation your insurer will need for a smooth reimbursement. And we'll help you understand what to submit.</>)
                    },
                ]
            }
        }}
    />
  )
}

export default CashlessCarInsuranceLoanInNoida