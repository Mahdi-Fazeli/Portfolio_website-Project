"use client"
import React from 'react'
import SectionHeading from "./section-heading"
import { motion } from "framer-motion"
import {useSectionInView} from "@/lib/hooks"

export default function About() {
    const {ref} = useSectionInView("About", 0.75);
//0.9


    // const {ref, inView} = useInView({
    //     threshold: 1,
    // });
    // const{ setActiveSection, timeOfLastClick} = useActiveSectionContext();

    // useEffect(() => {
    //     if (inView && Date.now() - timeOfLastClick > 1000) {
    //         setActiveSection("About")
    //     }
    // }, [inView, setActiveSection, timeOfLastClick])

    return (
        <motion.section ref={ref} className="mb-40 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >

            <SectionHeading>
                About me
            </SectionHeading>

            <p className="mb-3">
                After graduating with a degree in{" "}
                <span className="font-medium"><span className="underline">Mechanical Engineering</span></span>, I decided to pursue my
                passion for programming. I enrolled in a coding bootcamp and learned{" "}
                <span className="font-medium"><span className="underline">full-stack web development</span></span>.{" "}
                <span className="italic">My favorite part of programming</span> is the
                problem-solving aspect. I love the
                feeling of finally figuring out a solution to a problem. My core stack
                is{" "}
                <span className="font-medium">
                    <span className="underline">React, Next.js, Node.js, and MongoDB</span>
                </span>
                . I am also familiar with TypeScript and Prisma. I am always looking to
                learn new technologies. I am currently looking for a{" "}
                <span className="font-medium">full-time position</span> as a software
                developer.
            </p>

            <p>
                <span className="italic">When I&apos;m not coding</span>, I enjoy playing
                video games, watching movies and reading books. I also enjoy{" "}
                <span className="font-medium">learning new things</span>. I am currently
                learning about{" "}
                <span className="font-medium">history and philosophy</span>. I&apos;m also
                learning how to play the guitar.
            </p>
        </motion.section>
    )
}
