'use client';

import React from 'react'
import Image from 'next/image'
import { animate, motion } from 'framer-motion'
import Model from './Model';


type StoryProps = {
  image?: string | null
  header: string
  narrative: string
  reverse?: boolean
  background?: string
  index: number
}



const Story = ({image, header, narrative, reverse, background, index}: StoryProps) => {

  const animateX = reverse ? 1000 : -1000;
  const model = index == 1 ? 1 : 4;

  return (
    <section className={`h-full w-full bg-bg-img-1 pt-20`} >
      <div className={`flexBetween ${reverse && 'flex-row-reverse'} max-container padding-container flex gap-12 max-lg:flex-col h-[768px] max-lg:h-screen`}>
        {/* Left Side */}
        <div className='flexCenter w-1/2'>
          {image ? (
            <motion.div
              initial={{ x: animateX }}
              animate={{ x: 0 }}
              transition={{ type: 'tween', duration: 0.5, delay: 0.2 }}
              className='rounded-full overflow-hidden'
            >
              <Image
                src={image}
                alt='alan turing'
                width={600}
                height={600}
              />
            </motion.div>
          ) : (
            <Model index={index}/>
          )}
        </div>

        {/* Right Side */}
        <div className='w-1/2 min-h-80 gap-60'>
          <h2 className='text-text bold-64'>{header}</h2>
          <div className='py-8 px-2 rounded-3xl'>
            <p className='text-gray regular-20'>{narrative}</p>
          </div>
        </div>

      </div>

     
    </section>
  )
}

export default Story