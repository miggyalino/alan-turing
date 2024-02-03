'use client';
import { motion } from 'framer-motion'
import Link from 'next/link';


type ButtonProps = {
  label: string
  variant: string
  href: string
}

const Button = ({label, variant, href} : ButtonProps) => {
  return (
    <motion.div
      whileHover={{scale:1.03}}
      whileTap={{scale:0.95}}
    >
      <Link
        href={href}
      >
        <button
        type='button'
        className={`${variant} regular-16 rounded-3xl px-6 py-2`}
        >
        <p className='font-bold'>{label}</p>
        </button>
      </Link>
    </motion.div>
    
  )
}

export default Button