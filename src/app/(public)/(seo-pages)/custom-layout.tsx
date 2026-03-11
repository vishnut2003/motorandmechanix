import FaqsItemsElement from '@/components/faqs-items'
import { StaticImageData } from 'next/image'
import { PropsWithChildren, ReactNode } from 'react'

export interface CustomLayoutForSeoPagesDataInterface {
    featuredImage: StaticImageData,
    body: {
        h1: string,
        contents: {
            type: "h2" | "h3" | "h4" | "p" | "ol" | "ul",
            content: ReactNode | string | ReactNode[],
        }[],
        faqs?: {
            heading: string,
            contents: {
                question: string,
                answer: ReactNode | string,
            }[],
        },
    },
}

const CustomLayoutForSeoPages = ({
    pageContent,
    children,
}: PropsWithChildren<{
    pageContent: CustomLayoutForSeoPagesDataInterface,
}>) => {
    return (
        <div>
            <div
                className='w-full h-70 relative bg-cover bg-center bg-no-repeat flex items-end py-5 px-10'
                style={{
                    backgroundImage: `url(${pageContent.featuredImage.src})`
                }}
            >
                <h1
                    className='text-3xl font-semibold z-10 relative text-primary'
                >{pageContent.body.h1}</h1>

                <div
                    className='absolute top-0 left-0 w-full h-full bg-black/50'
                />
            </div>
            <div
                className='py-10 px-5 seo-page-content'
            >
                <div
                    className='max-w-6xl mx-auto space-y-3'
                >
                    {pageContent.body.contents.map((content, index) => {

                        if (content.type === "h2") {
                            return (
                                <h2
                                    key={index}
                                    className='text-xl font-semibold'
                                >{content.content}</h2>
                            )
                        }

                        if (content.type === "h3") {
                            return (
                                <h3
                                    key={index}
                                    className='text-xl font-semibold'
                                >{content.content}</h3>
                            )
                        }

                        if (content.type === "h4") {
                            return (
                                <h4
                                    key={index}
                                    className='text-xl font-semibold'
                                >{content.content}</h4>
                            )
                        }

                        if (content.type === "p") {
                            return (
                                <p
                                    key={index}
                                >{content.content}</p>
                            )
                        }

                        if ((content.type === "ol" || content.type === "ul") && Array.isArray(content.content)) {
                            return (
                                <ol
                                    key={index}
                                >
                                    {content.content.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className={
                                                'ml-5'
                                                + ` ${content.type === "ol" ? "list-decimal" : "list-disc"}`
                                            }
                                        >{item}</li>
                                    ))}
                                </ol>
                            )
                        }

                    })}

                    {/* FAQs section */}
                    {
                        pageContent.body.faqs && (
                            <div
                                className='space-y-3'
                            >
                                <h2
                                    className='text-xl font-semibold'
                                >{pageContent.body.faqs.heading}</h2>
                                <div
                                    className='space-y-2'
                                >
                                    {pageContent.body.faqs.contents.map((faqItem, index) => (
                                        <FaqsItemsElement
                                            question={faqItem.question}
                                            answer={faqItem.answer}
                                            defaultOpen={index === 0}
                                            key={index}
                                        />
                                    ))}
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default CustomLayoutForSeoPages