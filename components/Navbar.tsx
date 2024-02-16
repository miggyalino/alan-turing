'use client';

import { NAV_LINKS } from '@/constants'
import Link from 'next/link'
import React from 'react'
import Button from './Button'
import Image from 'next/image'
import { motion } from 'framer-motion'


const Navbar = () => {
  return (
    <nav className='flexCenter gap-80 padding-container relative z-30 py-3 bg-background'>

      <motion.div whileHover={{y:-5, end:0}} className="flex items-center gap-14">
        <Link href='/'>
          <p className='text-dulLWhite bold-20'>TURING</p>
        </Link>
      </motion.div>

      <ul className='flex gap-14 ml-16 max-md:hidden items-center'>
          {NAV_LINKS.map((link)=> (
            <li>
              <motion.div whileHover={{scale:1.1}}>
                <Link 
                  href={link.href}
                  key={link.key}
                  className='text-gray bold-16 hover:drop-shadow-xl hover:text-dullWhite'
                >
                  {link.label}
                </Link>
              </motion.div>
            </li>
          ))}
        </ul>

      <div className='flex gap-8 max-xl:hidden'>
        <Button 
          href='#services'
          label='Get Started'
          variant='bg-darkGray text-black'
        />
      </div>

      <div className='md:hidden xs:block'>
        <Link href='/'>
            <Image
              src='/hamburger.svg'
              alt='hamburger'
              className=''
              height={36}
              width={36}
            />
        </Link>
      </div>
      
      
      
      
    </nav>
  )
}

export default Navbar