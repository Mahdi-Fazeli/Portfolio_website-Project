"use client"
import React from "react";
import SectionHeading from './section-heading'
import {skillsData} from '@/lib/data'
import {mySkillsData} from '@/lib/data'
import {useSectionInView} from "@/lib/hooks"
import { motion } from "framer-motion";
import Image from "next/image";
// import { default as IconBase } from 'react-icon-base'



const fadeInAnimationVariants ={
    initial : {opacity:0, y:100},
    animate : (index: number) => ({
        opacity:1,
        y:0,
        transition:{
            delay: 0.05 * index,
        },
    }),
}

// type ProjectProps = (typeof mySkillsData)[number];
// {tag, icon} : ProjectProps

// type mySkillsData = {
//     tag: string,
//     icon: React.FunctionComponent<IconBase>,
// }

export default function Skills() {
    const {ref} = useSectionInView("Skills", 1);

    return (
        <motion.section ref={ref} id="skills" className="mb-40 max-w-[53rem] 
        scroll-mt-28 text-center sm:mb-40">
            <SectionHeading>
            My Skills
            </SectionHeading>


            <div className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                {mySkillsData.map((item, index) =>(
                    <div className="flex bg-white border border-black/[0.1] 
                    rounded-full px-3 py-1 hover:bg-slate-200 hover:text-black hover:scale-110 dark:bg-white/10 dark:text-white/80"
                    key={index}
                    >
                        {/* <ul>
                            <motion.li
                            variants={fadeInAnimationVariants}
                            initial = "initial"
                            whileInView="animate"
                            viewport={{once: true,}}
                            >
                                <div className="pt-1 pr-2">{item.icon}</div>
                                <div>{item.tag}</div>
                            </motion.li>
                        </ul> */}
                        {/* <Image src={item.icon} alt={item.tag} />
                        <h3>{item.tag}</h3> */}

                        <div className="pt-1 pr-2">{item.icon}</div>
                        <div>{item.tag}</div>
                    </div>
                ))
                }
            </div> 


{/*             
                    // <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                    //     <motion.li className="bg-white border border-black/[0.1] 
                    //     rounded-full px-3 py-1 hover:bg-slate-200 hover:text-black hover:scale-110"
                    //     key={index}
                    //     variants={fadeInAnimationVariants}
                    //     initial = "initial"
                    //     whileInView="animate"
                    //     viewport={{once: true,}}
                    //     >
                    //     {tag}
                    //     </motion.li>
                    // </ul> 
*/}


{/* 
                <Image src={icon} alt={tag} />
                <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                {
                        <motion.li className="bg-white border border-black/[0.1] 
                        rounded-full px-3 py-1 hover:bg-slate-200 hover:text-black hover:scale-110"
                        variants={fadeInAnimationVariants}
                        initial = "initial"
                        whileInView="animate"
                        viewport={{once: true,}}
                        >
                        {tag}
                        </motion.li>
                    
                }
            </ul> 
*/}



{/* 
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                {
                    skillsData.map((skill, index) => (
                        <motion.li className="bg-white border border-black/[0.1] 
                        rounded-full px-3 py-1 hover:bg-slate-200 hover:text-black hover:scale-110"
                        key={index} 
                        variants={fadeInAnimationVariants}
                        initial = "initial"
                        whileInView="animate"
                        viewport={{once: true,}}
                        custom={index}
                        >
                        {skill}
                        </motion.li>
                    ))
                }
            </ul> 
*/}

        </motion.section>
    )
}
