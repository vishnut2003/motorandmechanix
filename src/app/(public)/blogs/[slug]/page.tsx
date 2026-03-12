import { getOneWordpressBlog } from "@/functions/wordpress/get-one-blog";
import { FormateDateObject } from "@/functions/formatte-date";
import { RiFacebookCircleFill, RiInstagramFill, RiPinterestFill, RiSpotifyFill, RiThreadsLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import VanillaImage from "./assets/venilla-melt.png";
import StrawberryImage from "./assets/strawberry-whipcake.png";
import EspressoImage from "./assets/espresso-mousse.png";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
    params: Promise<{
        slug: string,
    }>
}

export const dynamic = 'force-dynamic';

export async function generateMetadata(
    { params }: Props,
): Promise<Metadata> {
    const slug = (await params).slug
    const blog = await getOneWordpressBlog(slug);

    if (!blog) {
        throw new Error("Blog not found.")
    }

    return {
        title: blog.yoast_head_json.title,
        description: blog.yoast_head_json.description,
    }
}

const SingleBlogsPage = async ({ params }: Props) => {

    const slug = (await params).slug;
    const blog = await getOneWordpressBlog(slug);

    if (!blog) {
        notFound();
    }

    return (
        <div
            className="pt-15 md:pt-25"
        >
            <div
                className="py-10 px-5 space-y-10 text-black max-w-4xl mx-auto"
            >
                <h1
                    className="text-3xl font-glamour"
                >{blog.title.rendered}</h1>

                <div
                    className="flex items-center justify-between"
                >
                    <p>{FormateDateObject({
                        timeStamp: new Date(blog.date || "").getTime(),
                    })}&nbsp; | &nbsp;Sknly.</p>

                    <div
                        className="flex items-center gap-3"
                    >
                        {
                            [
                                {
                                    icon: RiInstagramFill,
                                    href: "#",
                                },
                                {
                                    icon: RiFacebookCircleFill,
                                    href: "#",
                                },
                                {
                                    icon: RiPinterestFill,
                                    href: "#",
                                },
                                {
                                    icon: RiThreadsLine,
                                    href: "#",
                                },
                                {
                                    icon: RiSpotifyFill,
                                    href: "#",
                                },
                            ].map((icon, index) => (
                                <Link
                                    href={icon.href}
                                    key={index}
                                    className="flex items-center"
                                >
                                    <icon.icon
                                        size={20}
                                    />
                                </Link>
                            ))
                        }
                    </div>

                </div>

                <div
                    className="aspect-3/2 w-full"
                >
                    <Image
                        alt={blog.title.rendered}
                        src={blog.featured_media_src_url}
                        width={1000}
                        height={500}
                        className="w-full h-full object-cover rounded-xl"
                    />
                </div>

                <div>
                    <div
                        dangerouslySetInnerHTML={{ __html: blog.content.rendered }}
                        className="space-y-5 blog-content"
                    ></div>
                </div>

            </div>
        </div>
    )
}

export default SingleBlogsPage