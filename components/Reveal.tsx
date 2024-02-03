import React, { useEffect, useRef} from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

type RevealProps = {
    children: React.ReactNode
}

const Reveal = ({children}: RevealProps) => {

  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const mainControls = useAnimation();

  useEffect(() => {
    if(isInView){
        mainControls.start('visible');
    }
  }, [isInView])

  return (
    <div ref={ref} className='relative overflow-hidden'>
        <motion.div
            variants={{
                hidden: {opacity: 0, x: -100},
                visible: {opacity: 1, x: 0}
            }}
            initial='hidden'
            animate={mainControls}
            transition={{duration: 0.8, delay: 0.5}}
        >
            {children}
        </motion.div>
    </div>
  )
}

export default Reveal