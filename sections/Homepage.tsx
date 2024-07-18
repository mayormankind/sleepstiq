import Hero from '@/components/landing/Hero'
import Sponsors from '@/components/landing/Sponsors'
import Mission from '@/components/landing/Mission'
import Services from '@/components/landing/Services'
import Visit from '@/components/shop/Visit'
import Review from '@/components/common/Review'
import Image from 'next/image'
import React from 'react'

export default function Homepage() {

    
  return (
    <div className="flex flex-col relative text-blueShade">
        <div>
            <Hero/>
        </div>
        <div className='w-full flex'>
            <Services/>
        </div>
        <div className='w-full flex'>
            <Review/>
        </div>
        <div className='w-full h-full flex justify-end'>
            <Mission/>
        </div>
        <div className='w-full h-full flex'>
            <Visit/>
        </div>
        <hr/>
    </div>
  )
}
