"use client"
import React, { useRef } from 'react'
import { projectsData } from "@/lib/data"
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'


type ProjectProps = (typeof projectsData)[number];

export default function Project({ title, description, tags, imageUrl }: ProjectProps) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '1.5 1'],
    })

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1])
    
    return (
        <motion.div ref={ref}
        style={{
            scale: scaleProgress,
            offset: opacityProgress,
        }}
        className="group mb-5 sm:mb-8 pr-2 last:mb-0"
        >
            <section
            className=" bg-gray-100 max-w-[42rem] border border-black/5 
            overflow-hidden sm:pr-8 relative sm:h-[20rem] rounded-lg even:pl-2 sm:even:pl-[6rem]
            hover:bg-gray-200 transition sm:group-even:pl-8  dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
            >
                <div className="pt-4 pb-7 px-5 sm:pl-10 sm:group-odd:pr-[1.7rem] sm:pr-2 sm:pt-10 sm:max-w-[50%] 
                flex flex-col h-full sm:group-odd:mr-[16rem] sm:group-even:ml-[16rem]  dark:text-white">
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">{description}</p>
                    <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                        {tags.map((tag, index) => (
                            <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase 
                            tracking-wider text-white rounded-full hover:bg-black/[0.8] hover:scale-105
                            dark:text-white/70" key={index}>{tag}
                            </li>
                        ))}
                    </ul>
                    <Image src={imageUrl} alt={title} quality={90} 
                    className='hidden sm:block absolute top-8 
                    -right-40 w-[26em] rounded-t-lg shadow-2xl
                    transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2
                    group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2
                    group-even:-right-[initial] sm:group-even:-left-40 '
                    />
                </div>
            </section>
        </motion.div>
    )


}