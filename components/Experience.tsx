"use client"
import React from 'react'
import SectionHeading from './section-heading'
import {experiencesData} from '@/lib/data'
import {useSectionInView} from "@/lib/hooks"
import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTheme } from '@/context/Theme-Context'

export default function Experience() {
    const {ref} = useSectionInView("Experience");
    const {theme} = useTheme()
    return (
        <section ref={ref} id="experience" className='scroll-mt-28 mb-40'>
            <SectionHeading>
            My Experience
            </SectionHeading>
            <VerticalTimeline lineColor=''>
                {experiencesData.map((item, index) =>(
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            contentStyle={{
                                background: theme === 'light' ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                                boxShadow: "none",
                                border: "1px solid rgba(0, 0, 0, 0.05)",
                                textAlign: "left",
                                padding: "1.3rem 2rem",
                            }}
                            contentArrowStyle={{
                                borderRight: theme === "light" ? "0.4rem solid #9ca3af" : "0.4rem solid rgba(255, 255, 255, 0.5)"
                            }}
                            // date={item.date}
                            icon={item.icon}
                            iconStyle={{
                                background: theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                                fontSize: "1.5rem",
                            }}
                            className='hover:scale-105'
                        >

                            <h3 className='font-semibold capitalize '>{item.title}</h3>
                            <p className="!font-normal !mt-0" >{item.location}</p>
                            <p className="!font-normal !mt-1 text-gray-700 dark:text-white/60" >{item.description}</p>
                            <p className='!font-normal !mt-3 text-gray-700 dark:text-white/60'>{item.date}</p>

                        </VerticalTimelineElement>
                    </React.Fragment>
                ))

                }
            </VerticalTimeline>
        </section>
    )
}


