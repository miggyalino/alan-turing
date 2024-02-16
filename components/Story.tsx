'use client';

import Image from 'next/image'
import Model from './Model';
import Reveal from './Reveal';
import {Cursor} from 'react-simple-typewriter'
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';



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

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [typeEffect, setTypeEffect] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (inView && charIndex < narrative.length) {
      const timer = setTimeout(() => {
        setTypeEffect((prevTypeEffect) => prevTypeEffect + narrative[charIndex]);
        setCharIndex((prevCharIndex) => prevCharIndex + 1);
      }, 25); 
      return () => clearTimeout(timer);
    }
  }, [inView, charIndex, narrative]);


  return (
    <>
    <section ref={ref} id='story' className={`h-full w-full bg-bg-img-1 pt-[20vh] pb-[10vh]`} >
      <Reveal>
      <div className={`flexBetween ${reverse && 'flex-row-reverse'} max-container padding-container flex gap-12 max-lg:flex-col h-full`}>
        {/* Left Side */}
        
        <div className='flexCenter w-1/2'>
          {image ? (
            <div
              className='rounded-full overflow-hidden'
            >
              <Image
                src={image}
                alt='alan turing'
                width={600}
                height={600}
              />
            </div>
          ) : (
            <Model index={index}/>
          )}
        </div>
        

        {/* Right Side */}
        <div className='w-1/2 max-md:w-3/4 min-h-80 gap-60'>
          <h2 className='text-text bold-64 max-lg:bold-32'>{header}</h2>
          <div className='py-8 px-2 rounded-3xl'>
            <p className='text-gray regular-20 max-lg:regular-16'>{typeEffect}<Cursor /></p>
          </div>
        </div>

      </div>
      </Reveal>      
     
    </section>
    </>
    
  )
}

export default Story