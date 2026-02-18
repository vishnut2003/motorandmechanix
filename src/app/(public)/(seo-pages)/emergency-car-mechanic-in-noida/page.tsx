import { Metadata } from "next"
import CustomLayoutForSeoPages from "../custom-layout"
import featuredImage from "../car-repair-in-noida/assets/featured-image.jpg";

export const metadata: Metadata = {
    title: "Emergency Car Mechanic in Noida | Call Now — Motor Mechanix",
    description: "Car broken down in Noida? Call Motor Mechanix for emergency mechanic assistance. Fast response, roadside help & towing support.",
    alternates: {
        canonical: "/emergency-car-mechanic-in-noida",
    },
}

const EmergencyCarMechanicInNoidaPage = () => {
  return (
    <CustomLayoutForSeoPages
        pageContent={{
            featuredImage,
            body: {
                h1: "Emergency Car Mechanic in Noida — Call Us, We'll Sort It",
                contents: [
                    {
                        type: "p",
                        content: (<>Breaking down is one of those situations where everything is worse than it actually is. You're stuck, usually in a place that is not convenient, other cars are getting around off you, and you're not sure who to call or what to do first. One call and we'll tell you exactly what to do next.</>),
                    },
                    {
                        type: "p",
                        content: (<>Motor Mechanix provides emergency car mechanic assistance in and around Noida. Depending on what's happened and where you are, we'll either get someone to you or guide you through getting the car to us. Either way, we don't leave you to figure it out all by yourself.</>),
                    },
                    {
                        type: "h2",
                        content: "When to Call Us",
                    },
                    {
                        type: "ul",
                        content: [
                            (<>Car won't start — could be battery, alternator, starter motor, or fuel system</>),
                            (<>Engine overheating — don't keep driving; pull over and call us</>),
                            (<>Flat tyre with no spare, or you can't change it safely on the road you're on</>),
                            (<>Car stalled in traffic and won't restart</>),
                            (<>Brake warning light plus loss of braking feel — stop, don't drive it further</>),
                            (<>Electrical failure — car completely dead, nothing responds</>),
                            (<>Smoke from under the bonnet — could be several things, most of them urgent</>),
                            (<>Strange noise that started suddenly and the car feels wrong to drive</>),
                            (<>Fuel system issue — car running very rough or cutting out</>),
                        ]
                    },
                    {
                        type: "h2",
                        content: "What We Do When You Call",
                    },
                    {
                        type: "ul",
                        content: [
                            (<>Pick up and listen to what you're describing — no scripted response, actual troubleshooting</>),
                            (<>Advise you on whether it's safe to move the car or not</>),
                            (<>Dispatch a mechanic to your location if roadside repair is feasible</>),
                            (<>Arrange towing to our Noida workshop if the car can't be fixed where it is</>),
                            (<>Keep you updated throughout — you're not left wondering what's happening</>),
                        ]
                    },
                    {
                        type: "h2",
                        content: "Roadside Help We Can Provide",
                    },
                    {
                        type: "ul",
                        content: [
                            (<>Jump start for a dead battery</>),
                            (<>Emergency tyre change if you have a spare (or temporary fix if not)</>),
                            (<>Fuel delivery if you've run dry — it happens</>),
                            (<>Minor repairs that can be safely done on the roadside</>),
                            (<>Safe towing coordination to our workshop for anything beyond roadside scope</>),
                            (<>Accident scene assistance — documenting damage, insurance guidance on the spot</>),
                        ]
                    },
                    {
                        type: "h2",
                        content: "Areas We Cover",
                    },
                    {
                        type: "p",
                        content: (<>Our primary coverage area is Noida and the surrounding region. This includes Noida Our major area of coverage are Noida and nearby areas. This includes Noida Expressway corridor, Greater Noida, Noida Extension (Gaur City), Sector 18, Sector 62, Sector 63, Sector 137 and the main routes on NH-9 and NH-91. Call us with your location and we will be able to confirm in a minute if we can get to you and how long it will take.</>),
                    },
                    {
                        type: "h2",
                        content: "After the Emergency - What is Next",
                    },
                    {
                        type: "p",
                        content: (<>Once your car is at our workshop, we'll run a proper diagnostic to understand not just what failed, but why. Emergency breakdowns are often preceded by warning signs that weren't caught — a battery that was on the way out, a coolant level that had been quietly dropping. We'll give you the full picture so the same thing doesn't happen again.</>),
                    },
                    {
                        type: "h2",
                        content: "The Most Effective Thing You Can Do Right Now"
                    },
                    {
                        type: "p",
                        content: (<>Save our number. Seriously. It takes five seconds and it means that next time something goes wrong — with your car, or a family member's — you know exactly who to call without having to search for someone you can trust at the worst possible moment.</>),
                    },
                ]
            }
        }}
    />
  )
}

export default EmergencyCarMechanicInNoidaPage