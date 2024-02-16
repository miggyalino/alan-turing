'use client';

import { useEffect, useLayoutEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ICONS } from "@/constants"
import Image from "next/image"
import Button from "./Button"
import { motion } from 'framer-motion'
import { Separator } from "./ui/separator";
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import Navbar from "./Navbar";

const Intro = () => {

  const [typeEffect] = useTypewriter({
    words: ['Cracking the code of possibilities'],
    typeSpeed:25
    })
  const comp = useRef(null)
  
  useEffect (() => {
    
    let ctx = gsap.context(() => {
        const t1 = gsap.timeline()
        t1.from('#intro-slider', {
            xPercent: '-100',
            duration: 1.3,
            delay: 0,
        }).from(['#title-1', '#title-2', '#title-3'], {
            opacity: 0,
            y: '+=30',
            stagger: 0.5
        }).to(['#title-1', '#title-2', '#title-3'], {
            opacity: 0,
            y: '-=30',
            delay:0.3,
            stagger: 0.5   
        }).to('#intro-slider', {
            xPercent: '-100',
            duration: 1.3,
        }).from(['#name', '#made-by', '#made-with'], {
            opacity: 0,
            y: '+=30',
            duration: 0.5 
        }).from('#next-slider', {
            opacity: 0,
            y: '+=30',
            duration: 0.5 
        }).from(['#HTML','#CSS','#TAILWIND','#TYPESCRIPT','#REACT','#NEXT','#FRAMER','#GSAP','#THREE'], {
            opacity: 0,
            y: '-=30',
            stagger: 0.5
        }).to(['#HTML','#CSS','#TAILWIND','#TYPESCRIPT','#REACT','#NEXT','#FRAMER','#GSAP','#THREE'], {
            opacity: 0,
        }).to(['#name', '#made-by', '#made-with'], {
            opacity: 0,
            y: '-=30',
            delay:0.3,
        }).to('#next-slider', {
            xPercent: '-100',
            duration: 1.3,
            delay: 0.5
        }).from('#hero-slider', {
            opacity: 0,
            y: '+=30',
            duration: 0.5 
        }).from(['#left-hero','#right-hero'], {
            opacity: 0,
            y: '+=30',
            stagger: 0.5
        })
    }, comp)
    
    return () => ctx.revert()
  }, [])

  return (
    <>
        <div className="relative" ref={comp}>
            <div id="intro-slider" className='flex flex-col h-screen w-full p-10 bg-blue text-text z-30 absolute'>
                <h1 id='title-1' className='bold-88'>Pioneer</h1>
                <h1 id='title-2' className='bold-88'>Theorist</h1>
                <h1 id='title-3' className='bold-88'>Innovator</h1>
            </div>

            <div id='next-slider' className='h-screen w-full flex flex-col gap-20 bg-blue justify-center place-items-center z-30 absolute'>
                <div className="flex flex-col justify-center items-center gap-4">
                    <h2 id="name" className="bold-88">Alan Turing Portfolio</h2>
                    <h4 id='made-by' className="bold-32">by Miggy Alino</h4>
                </div>
            
                <div className="flex flex-col items-center">
                    <h2 id="made-with" className="bold-20">Made with</h2>
                    <div id='tech-stack' className='flexCenter gap-4'>
                        {ICONS.map((icon, name, index) => (
                            <Image 
                            id={icon.name}
                            src={icon.icon}
                            alt={icon.name}
                            width={100}
                            height={100}
                            />
                        ))}
                    </div>
                </div>  
            </div>
              
            <div id='hero-slide' className='bg-bg-img-2 flex items-center padding-container lg:py-20 h-xl relative'>
                <div id="left-hero" className='flex justify-center overflow flex-col gap-6 px-16 z-20 w-1/2 max-sm:px-6 max-xl:w-full min-h-[768px] max-h-[screen]'>
                    <motion.div
                    initial = {{ x:-1000 }}
                    transition = {{ type: 'tween', duration: 0.5}}
                    animate={{ x: 0 }}
                    exit={{ x: -1000 }}
                    >
                    <h2 className='bold-88 max-2xl:bold-72 max-md:bold-64'>{typeEffect}<Cursor /></h2>
                    </motion.div>

                    <div>
                    <p className='regular-16 text-gray'>I am Alan Turing, the mathematical maestro who reshaped 
                    the future of <br/> computing and embraced the limitless potential 
                    of the digital world.</p>
                    </div>
                    

                    <div className='flex gap-8'>
                    <Button 
                        href="#story"
                        label='More'
                        variant='bg-darkGray'
                    />
                    <Button
                        href="#services" 
                        label='Get Started'
                        variant='bg-darkGray'
                    />
                    </div>
                    
                </div>

                <div id="right-hero" className='z-10 absolute right-0 top-0 bottom-0 w-3/5 transform translate-x-1/3 max-xl:hidden'>
                    <video src='turing-video.mp4' className='h-full w-full object-cover ' autoPlay loop muted />
                    <div className='absolute top-0 left-0 w-full h-full bg-black opacity-80 '></div>
                </div>
            </div>
            <Separator />
        </div>
    </>
    
    
  )
}

export default Intro