"use client"
import React from 'react'
import SectionHeading from './section-heading'
import {useSectionInView} from "@/lib/hooks"
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import MessageStyle1 from './MessageStyle1';
import MessageStyle2 from './MessageStyle2';
import MessageStyle3 from './MessageStyle3';
import MessageStyle4 from './MessageStyle4';


export default function Contact() {
    const {ref} = useSectionInView("Contact", 1);


    return (
        <motion.section 
        ref={ref} 
        id="contact" 
        className='scroll-mt-28 mb-28 sm:mb-40 w-[min(100%,38rem)] text-center'
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration:1}}
        viewport={{once:true}}
        >
            <SectionHeading>
                Contact me
            </SectionHeading>

            <MessageStyle1 />
            {/* <MessageStyle2 /> */}
            {/* <MessageStyle3 /> */}
            {/* <MessageStyle4 /> */}

            {/* <p className="text-gray-500 -mt-7">
                Please contact me directly at{" "}
                <a className="underline" href='mailto:example@gmail.com'>example@gmail.com</a>{" "}
                or through this form.
            </p>
            <form className='mt-10 flex flex-col'>
                <input className='px-4 mb-5 h-14 rounded-lg border border-black/10'type="email" placeholder="Email"/>
                <textarea className="p-4 mb-5 h-52 rounded-lg border border-black/10 resize-none focus:ring-blue-500 focus:border-blue-500" placeholder="Message"/>
                <button className="group flex items-center justify-center gap-2 
                h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full 
                outline-none transition-all hover:bg-gray-950 hover:scale-105 focus:scale-110 active:scale-105" type="submit"
                >Submit <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1'/>{" "}</button>
            </form> */}
        </motion.section>
    )
}
