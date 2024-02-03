'use client';
import { motion } from 'framer-motion'

type ButtonProps = {
  label: string
  variant: string
}

const Button = ({label, variant} : ButtonProps) => {
  return (
    <motion.div
      whileHover={{scale:1.1}}
      whileTap={{scale:0.95}}
    >
      <button
      type='button'
      className={`${variant} regular-16 rounded-3xl px-9 py-3`}
      >
      {label}
      </button>
    </motion.div>
    
  )
}

export default Button