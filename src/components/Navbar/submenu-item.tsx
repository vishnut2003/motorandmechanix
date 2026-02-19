'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { Dispatch, Fragment, SetStateAction, useEffect, useRef, useState } from 'react';

const HeaderSubmenuItemsForDesktop = ({
    href,
    name,
    subPages,
}: {
    name: string,
    href: string,
    subPages: {
        label: string,
        href: string,
    }[]
}) => {

    const router = useRouter();

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const subMenuWrapper = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                subMenuWrapper.current &&
                !subMenuWrapper.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
                console.log("Effect")
            }
        }

        window.addEventListener("click", handleClickOutside);

        return () => {
            window.removeEventListener("click", handleClickOutside);
        }

    }, [isOpen])

    return (
        <div
            className='relative'
            ref={subMenuWrapper}
        >
            <button
                className="relative pb-1
                    after:absolute after:left-0 after:bottom-0
                    after:h-[1px] after:w-full after:bg-[#FFCE32]
                    after:scale-x-0 after:origin-left
                    after:transition-transform after:duration-300 after:ease-out
                    hover:after:scale-x-100 cursor-pointer"
                onClick={() => {
                    if (!isOpen) {
                        setIsOpen(true);
                    } else {
                        setIsOpen(false);
                        router.push(href);
                    }
                }}

            >
                {name}
            </button>

            <AnimatePresence
                key={name}
            >
                {isOpen && (
                    <motion.div
                        className='absolute top-10 left-0 bg-white text-black min-w-60 max-h-100 overflow-auto rounded-lg'
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                    >
                        <div
                            className='min-w-50'
                        >
                            {subPages.map((subPage, index) => (
                                <Fragment
                                    key={index}
                                >
                                    {index !== 0 && (
                                        <hr
                                            className='border-gray-200'
                                        />
                                    )}
                                    <Link
                                        href={subPage.href}
                                        className='py-2 px-4 text-left block text-base hover:bg-gray-100 capitalize font-semibold'
                                    >{subPage.label}</Link>
                                </Fragment>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    )
}

export const HeaderSubmenuItemsForMobile = ({
    href,
    name,
    subPages,
    setSidebarOpen,
}: {
    name: string,
    href: string,
    subPages: {
        label: string,
        href: string,
    }[],
    setSidebarOpen: Dispatch<SetStateAction<boolean>>,
}) => {

    const router = useRouter();

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const subMenuWrapper = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                subMenuWrapper.current &&
                !subMenuWrapper.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
                console.log("Effect")
            }
        }

        window.addEventListener("click", handleClickOutside);

        return () => {
            window.removeEventListener("click", handleClickOutside);
        }

    }, [isOpen])

    return (
        <div
            className='relative w-full'
            ref={subMenuWrapper}
        >
            <button
                className="text-3xl font-bold text-black uppercase hover:text-white transition-colors block text-center w-full"
                onClick={() => {
                    if (!isOpen) {
                        setIsOpen(true);
                    } else {
                        setIsOpen(false);
                        router.push(href);
                        setSidebarOpen(false);
                    }
                }}

            >
                {name}
            </button>

            <AnimatePresence
                key={name}
            >
                {isOpen && (
                    <motion.div
                        className='text-black overflow-auto rounded-lg my-3'
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                    >
                        <div
                            className='min-w-50 border-t border-b border-white/60'
                        >
                            {subPages.map((subPage, index) => (
                                <Fragment
                                    key={index}
                                >
                                    {index !== 0 && (
                                        <hr
                                            className='border-white/60'
                                        />
                                    )}
                                    <Link
                                        href={subPage.href}
                                        className='py-2 px-4 text-center block text-base hover:bg-gray-100 capitalize font-semibold'
                                        onClick={() => {
                                            setSidebarOpen(prev => !prev)
                                        }}
                                    >{subPage.label}</Link>
                                </Fragment>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    )
}

export default HeaderSubmenuItemsForDesktop