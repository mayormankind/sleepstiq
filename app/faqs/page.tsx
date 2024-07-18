"use client"

import Header from '@/components/landing/Header'
import FAQ from '@/components/faqs/FaqComponent'
import React from 'react'

export default function Faqs() {
  return (
    <div className='w-full flex bg-yellowShade'>
      <Header page={'FAQs'}/>
      <div className="w-full flex flex-col h-full pt-20">
        <div className="flex w-full max-w-4xl mx-auto min-h-[600px] px-4 lg:p-0">
          <div className="flex flex-col gap-6 h-fit text-[#12305B] my-auto items-start text-sm w-full max-w-2xl">
            <p className="text-sm">We are here to help you</p>
            <h2 className='font-bold text-2xl md:text-3xl'>How can we assist?</h2>
            <input type="text" placeholder='Search FAQs here' autoFocus className='w-full bg-white rounded-xl h-12 p-4'/>
          </div>
        </div>            
        <div className='w-full flex justify-center bg-white text-[#12305B]'>
          <FAQ/>
        </div>
      </div>
    </div>
  )
}

