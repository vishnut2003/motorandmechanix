import WordpressBlogInterface from '@/types/wordpress'
import Image from 'next/image'
import { FormateDateObject } from '@/functions/formatte-date';
import Link from 'next/link';
import { RiCalendarLine, RiClockwiseLine, RiTimeLine } from '@remixicon/react';

const SinglePostGridItem = ({
    post,
}: {
    post: WordpressBlogInterface,
}) => {
    return (
        <div
            className='w-full'
        >
            <div
                className='space-y-3'
            >
                <div
                    className=' aspect-3/2'
                >
                    <Link
                        href={`/blogs/${post.slug}`}
                    >
                        <Image
                            alt={post.title.rendered}
                            src={post.featured_media_src_url}
                            width={1000}
                            height={500}
                            className='w-full h-full object-cover rounded-xl'
                        />
                    </Link>
                </div>

                <div
                    className='text-white space-y-5'
                >
                    <Link
                        href={`/blogs/${post.slug}`}
                        className='block'
                    >
                        <h2
                            className='text-xl font-bold line-clamp-2'
                            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                        ></h2>
                    </Link>

                    <div
                        dangerouslySetInnerHTML={{
                            __html: post.excerpt.rendered,
                        }}
                        className='text-sm line-clamp-1'
                    ></div>

                    <div
                        className='flex items-center gap-5'
                    >
                        {
                            [
                                {
                                    icon: RiCalendarLine,
                                    text: FormateDateObject({
                                        timeStamp: new Date(post.date || "").getTime(),
                                    }),
                                },
                                {
                                    icon: RiTimeLine,
                                    text: "2 mins read",
                                }
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className='flex items-center gap-2'
                                >
                                    <item.icon
                                        size={15}
                                    />
                                    <p
                                        className='text-xs'
                                    >{item.text}</p>
                                </div>
                            ))
                        }
                    </div>

                </div>

            </div>
        </div>
    )
}

export default SinglePostGridItem