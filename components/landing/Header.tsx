import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

interface pageProps{
    page: string,
}

export default function Header({ page }:pageProps) {

    const navs = [
        {id:0, label:'Home', ref:'/'},
        {id:1, label:'About', ref:'/about'},
        {id:2, label:'Shop', ref:'/shop'},
        {id:3, label:'FAQs', ref:'/faqs'},
    ];

  return (
    <header className='flex w-full py-4 bg-white bg-opacity-10 backdrop-blur fixed left-0 top-0 z-20'>
        <nav className="flex w-full max-w-4xl px-4 lg:p-0 mx-auto flex-auto md:space-x-20 items-center sticky top-0">
            <Image src='/logoMain.png' alt='SleepStiq logo' width={80} height={80}/>
            <ul className="hidden flex-col text-xs gap-8 items-center justify-evenly bg-transparent text-black md:flex md:flex-row">
                {navs.map((nav,id)=>(
                    <li key={id} className={`${page===nav.label ? 'font-bold border-b-2 border-[#12305B]' : 'font-normal'} hover:border-b-2 hover:border-[#12305B] text-lg text-[#12305B]`}><Link href={nav.ref}>{nav.label}</Link></li>
                ))}
            </ul>
            <div className="flex-[2]"></div>
        </nav>
    </header>
  )
}
