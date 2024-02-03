'use client';

import React, { useEffect, useState } from 'react'
import Button from './Button'
import { motion } from 'framer-motion'
import Intro from './Intro';

const Hero = () => {

  const [showHero, setShowHero] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHero(true)
    }, 9000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section>
      <Intro />
      {showHero && (
        <div className='flex items-center padding-container lg:py-20 h-xl relative'>
        <div className='flex justify-center overflow flex-col gap-6 px-16 z-20 w-1/2 max-sm:px-6 max-xl:w-full min-h-[768px] max-h-[screen]'>
          <motion.div
            initial = {{ x:-1000 }}
            transition = {{ type: 'tween', duration: 0.5}}
            animate={{ x: 0 }}
            exit={{ x: -1000 }}
          >
            <h2 className='bold-88 max-2xl:bold-72 max-md:bold-64'>Cracking the code of possibilities</h2>
          </motion.div>

          <div>
            <p className='regular-16 text-gray'>I am Alan Turing, the mathematical maestro who reshaped 
            the future of <br/> computing and embraced the limitless potential 
            of the digital world.</p>
          </div>
          

          <div className='flex gap-8'>
            <Button 
              label='More'
              variant='btn-more'
            />
            <Button 
              label='Get Started'
              variant='btn-more'
            />
          </div>
          
        </div>

        <div className='z-10 absolute right-0 top-0 bottom-0 w-3/4 transform translate-x-1/3 max-xl:hidden'>
          <video src='turing-video.mp4' className='h-full w-full object-cover ' autoPlay loop muted />
          <div className='absolute top-0 left-0 w-full h-full bg-black opacity-80 '></div>
        </div>
      </div>
      )}
      
    </section>
    
  )
}

export default Hero