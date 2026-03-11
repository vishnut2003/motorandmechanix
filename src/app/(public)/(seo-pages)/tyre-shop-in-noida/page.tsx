import { Metadata } from "next"
import CustomLayoutForSeoPages from "../custom-layout"
import featuredImage from "./assets/featured-image.jpg";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Best Tyre Shop in Noida | Branded Tyres — Motor Mechanix",
    description: "Buy genuine branded tyres in Noida at Motor Mechanix. MRF, Bridgestone, Apollo & more. Expert fitting & balancing included.",
    alternates: {
        canonical: "/tyre-shop-in-noida",
    }
}

const TyreShopInNoida = () => {
  return (
    <CustomLayoutForSeoPages
        pageContent={{
            featuredImage,
            body: {
                h1: "Tyre Shop in Noida — Branded Tyres, Expert Fitting, No Nonsense",
                contents: [
                    {
                        type: "p",
                        content: (<>Purchasing tyres may turn out to be a really stressful experience when you have no idea what you are looking at. The variety is rife, prices fluctuate widely and some of them will gladly sell you a product which may not even be suited to your car or the conditions in which you drive it. That’s why if you are searching for a tyre shop in Noida or even the best tyre shop near me, it should be simple and transparent. We try to make it exactly that.</>),
                    },
                    {
                        type: "p",
                        content: (<>At <Link href="https://motorandmechanix.com/">Motor Mechanix</Link> , we stock a good range of genuine branded car tyres in Noida across different price points. If you’re looking to buy tyres Noida, what suits how you drive, and what the price difference between options actually buys you. Then we fit and balance them properly, in the workshop, not on the footpath.</>),
                    },
                    {
                        type: "h2",
                        content: "Brands We Have in Stock",
                    },
                    {
                        type: "ul",
                        content: [
                            (<>MRF– India's most widely used brand, solid across the board</>),
                            (<>Apollo – good range from budget to performance, made in India</>),
                            (<>Bridgestone – Japanese quality, excellent wet grip and longevity</>),
                            (<>CEAT – reliable everyday tyres, well-priced</>),
                            (<>Michelin – premium European rubber, particularly good on highways</>),
                            (<>JK Tyre – Indian-made with a strong track record</>),
                            (<>Pirelli – if you have a performance or luxury car and want the best grip</>),
                            (<>Yokohama – Japanese engineering, great all-weather performance</>),
                        ]
                    },
                    {
                        type: "p",
                        content: (<>Not able to find your size or want a brand that is not mentioned? It is normally available in less than 24 hours.<Link href="https://motorandmechanix.com/contact-us">Just call ahead</Link> .</>),
                    },
                    {
                        type: "h2",
                        content: "Tyre Sizes We Carry",
                    },
                    {
                        type: "p",
                        content: (<>We have sizes of the most popular Indian cars 155/65 R13, 165/65 R14, 175/65 R14, 185/65 R15, 195/65 R15, 205/55 R16, 215/60 R17 and others. You know, in case you are not so sure of what size car tyre you have, bring it in with you, or have a look on the sidewall of the tyre you already have in place, and you will see it is something like 185/65 R15.</>),
                    },
                    {
                        type: "h2",
                        content: (<>What We Do When You Come In for Tyres</>),
                    },
                    {
                        type: "ul",
                        content: [
                            (<>Examine your present tyres and be honest with you about whether they require replacement or not.</>),
                            (<>Get the right car and budget size and type recommended.</>),
                            (<>Fit and torque the tyres correctly — no rush jobs</>),
                            (<>Balance each wheel dynamically — reduces vibration and improves tyre life significantly</>),
                            (<>Inflate to the correct pressure for your car (not just whatever's convenient)</>),
                            (<>Dispose of old tyres responsibly</>),
                        ]
                    },
                    {
                        type: "h2",
                        content: "When Should You Actually Replace Your Tyres?",
                    },
                    {
                        type: "p",
                        content: (<>People often wait too long. The legal minimum tread depth in India is 1.6mm, but practically speaking, below 2–3mm your braking distance in the wet increases significantly. Beyond tread, watch out for:</>),
                    },
                    {
                        type: "ul",
                        content: [
                            (<>Cracks or cuts on the sidewall — these can't be repaired, replace the tyre</>),
                            (<>Bulges on the sidewall — dangerous, the tyre could blow out with no warning</>),
                            (<>Vibration or pulling to one side that wasn't there before</>),
                            (<>Tyres more than 5–6 years old, even if they look fine on the outside</>),
                        ],
                    },
                    {
                        type: "h2",
                        content: "Is Nitrogen Worth It?",
                    },
                    {
                        type: "p",
                        content: (<>Nitrogen filling also keeps the tyre pressure more stable than normal air particularly in temperature variations in Noida. It's not magic, but it's a small upgrade that makes sense for people who don't check tyre pressure often. We offer it — worth asking about when you're here.</>),
                    },
                ],
            }
        }}
    />
  )
}

export default TyreShopInNoida