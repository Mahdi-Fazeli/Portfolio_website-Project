"use client"
import Image from 'next/image'
import React from 'react'
import profilePic from "../public/mehdi_fazeli.jpg"
import {motion} from "framer-motion"
import Link from 'next/link'
import {BsArrowRight, BsLinkedin, BsGithub} from "react-icons/bs"
import {HiDownload} from "react-icons/hi"
import Typewriter from "typewriter-effect";
import {useSectionInView} from "@/lib/hooks"
import { useActiveSectionContext } from '@/context/active-section-context'
import { useTheme } from '@/context/Theme-Context'

// import Lottie, {LottieRefCurrentProps} from 'lottie-react'
// import RightArrow from "../public/RightArrow.json"
// import { useRef } from 'react'
// import lottie from 'lottie-web';
// import { defineElement } from 'lord-icon-element';




export default function Intro() {
    const {ref} = useSectionInView("Home", 0.5);
    const {setActiveSection, setTimeOfLastClick} = useActiveSectionContext();
    const {theme} = useTheme()

//1


    // const {ref, inView} = useInView({
    //     threshold: 1,
    // });
    // const{ setActiveSection, timeOfLastClick} = useActiveSectionContext();

    // useEffect(() => {
    //     if (inView && Date.now() - timeOfLastClick > 1000) {
    //         setActiveSection("Home")
    //     }
    // }, [inView, setActiveSection, timeOfLastClick])


    // const webAnimations = useRef<LottieRefCurrentProps> (null)
    return (
        <section ref={ref} id="home" className="mb-28 max-w-[58rem] text-center sm:mb-0 scroll-mt-[100rem]">
            {/* Image  */}
            <div className="mt-12 mb-12 flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{opacity:0, scale:0}}
                        animate={{opacity:1, scale:1}}
                        transition={{type:"tween", duration:0.2}}
                    >
                        <Image src={profilePic} alt="mahdi fazeli portrait"
                            width="200" height="200" quality="95" priority={true}
                            className="h-40 w-40 rounded-full object-cover border-[0.15rem]
                            border-white shadow-xl"
                        />
                    </motion.div>
                    <motion.span className="absolute bottom-0 right-0 text-4xl"
                        initial={{opacity:0, scale:0}}
                        animate={{opacity:1, scale:1}}
                        transition={{type:"spring", stiffness:125, delay: 0.1, duration: 0.7}}
                    > 👌
                    </motion.span>
                </div>
            </div>

            {/* short About */}
            <motion.h1 className="mb-12 mt-12 px-4 text-2xl font-medium !leading-[2] sm:text-4xl "
            initial={{opacity:0, y:100}}
            animate={{opacity:1, y:0}}
                // transition={{type:"tween", duration:0.3}}
            >
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .pauseFor(1000)
                            .typeString("Hello")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("my name is mahdi fazeli")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("i'm full stack web developer")
                            .deleteAll()
                            .start();
                    }}
                    options = {{
                        loop: true,
                    }}
                    />
                {/* <span className="font-bold"> Hello, I&apos;m Mahdi Fazeli </span>
                I&apos;m a
                <span className="font-bold"> Full stack web developer </span>
                and
                <span className="font-bold"> Engineer </span>
                with
                <span className="font-bold"> several years of experience </span>
                and i love to help you to 
                <span className="font-bold"> Build your own dream app & website </span> */}
            </motion.h1>

            {/* Buttons */}
            <motion.div className="mb-12 mt-12 md:mx-0 flex flex-col 
            sm:flex-wrap sm:flex-row sm:mx-[5rem] md:flex-nowrap min-[762px]:mx-0 max-[892px]:mx-0 
            text-center items-center justify-center gap-2 px-4 text-lg font-medium"
                initial={{opacity:0, y:100}}
                animate={{opacity:1, y:0}}
                transition={{delay:0.1}}
            >
                <Link href="#contact" className="group w-[12rem] bg-gray-900 text-white px-7 
                py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 
                hover:scale-110 hover:bg-gray-950 active:scale-105 transition">
                    Contact Me <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"
                onClick={() => {
                    setActiveSection("Contact");
                    setTimeOfLastClick(Date.now())
                }}    
                />

                    {/* func MouseOver(event) {
                        <Lottie 
                        onComplete={()=>{
                            webAnimations.current?.play ()
                        }}
                        lottieRef={webAnimations} 
                            animationData={RightArrow}
                            loop={false} 
                            className='w-6 h-6'/>
                    }
                    function MouseOut(event){
                        <Lottie 
                        onComplete={()=>{
                            webAnimations.current?.pause ()
                        }}
                        lottieRef={webAnimations} 
                            animationData={RightArrow}
                            loop={false} 
                            className='w-6 h-6'/>
                    } */}
                    

                        
                    


                    {/* <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"/> */}
                    
                    {/* <lord_icon src="https://cdn.lordicon.com/zmkotitn.json"
                    trigger="hover"
                    colors="primary:#121331"
                    style="width:250px;height:250px"/>  */}
                    {/* <lord-icon trigger="hover" src="/my-icon.json"></lord-icon> */}
                    {/* <Image src={RightArrow} alt="right arrow" className='w:6 h-12 bg-transparent opacity-5 group-hover:translate-x-1 transition'/> */}

                </Link>

                <a className="group h-14 w-52 bg-white px-7 py-3 flex items-center gap-2 rounded-full 
                outline-none focus:scale-110 hover:scale-110 active:scale-105 
                transition cursor-pointer border border-black/10 dark:bg-white/10  dark:text-white/60" href='/CV.pdf' download>
                    Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition"/>
                </a>
                {/* اضافه کردن w-[12rem] و متن تکست */}
                <a className="w-[10rem] justify-center px-7 py-3 bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full
                focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 
                transition cursor-pointer border border-black/10  dark:bg-white/10  dark:text-white/60" href='https://www.linkedin.com/' target='_blank'>
                    <BsLinkedin /> Connect
                </a>
                {/* اضافه کردن w-[12rem] و متن تکست */}
                <a className="w-[10rem] justify-center px-7 py-3 bg-white p-4  text-gray-700 flex items-center gap-2 rounded-full
                focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105
                transition cursor-pointer border border-black/10  dark:bg-white/10 dark:text-white/60" href='https://www.github.com/'target='_blank'>
                    <BsGithub/> Follow
                </a>

            </motion.div>
        </section>
    )
}


