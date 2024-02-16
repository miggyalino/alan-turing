import { NAV_LINKS } from '@/constants'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <section className='bg-dullWhite'>
      <div className='flexBetween py-4 px-6 flex-wrap gap-2'>
        <div>
          <p className='text-background regular-16'>Copyright &#169; Miggy Alino</p>
        </div>
        <div className='flex gap-6'> 
          {NAV_LINKS.map((link)=> (
            <Link
              href={link.href}
              className='text-gray hover:text-background'
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Footer