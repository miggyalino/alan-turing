import { useEffect, useLayoutEffect, useRef, useState } from "react"
import gsap from "gsap"
import Hero from "./Hero"
import { ICONS } from "@/constants"
import Image from "next/image"
import Button from "./Button"

const Intro = () => {

  const comp = useRef(null)
  
  useLayoutEffect (() => {
    
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
        })
    }, comp)
    
    return () => ctx.revert()
  }, [])

  return (
    <>
        <div className="relative" ref={comp}>
            <div id="intro-slider" className='flex flex-col h-screen w-full p-10 bg-gray text-text z-30 absolute'>
                <h1 id='title-1' className='bold-88'>Pioneer</h1>
                <h1 id='title-2' className='bold-88'>Theorist</h1>
                <h1 id='title-3' className='bold-88'>Innovator</h1>
            </div>

            <div id='next-slider' className='h-screen w-full flex flex-col gap-20 bg-gray justify-center place-items-center z-30 absolute'>
                <h2 id="name" className="bold-64">An Alan Turing Website</h2>
                <h4 id='made-by' className="bold-40">made by Miggy Alino</h4>

                <div className="flex flex-col items-center">
                    <h2 id="made-with" className="bold-24">Made with</h2>
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
        </div>
    </>
    
    
  )
}

export default Intro