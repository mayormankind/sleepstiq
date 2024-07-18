import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { RiCloseLine, RiMenu2Line } from 'react-icons/ri';

interface pageProps{
    page: string,
}

export default function Header({ page }:pageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navs = [
    {id:0, label:'Home', ref:'/'},
    {id:1, label:'About', ref:'/about'},
    {id:2, label:'Shop', ref:'/shop'},
    {id:3, label:'FAQs', ref:'/faqs'},
  ];

  return (
    <header className='flex w-full py-4 bg-white bg-opacity-10 backdrop-blur fixed left-0 top-0 z-20'>
      <nav className="flex w-full max-w-4xl px-4 lg:px-0 mx-auto items-center">
        <div className="flex flex-1 items-center">
          <Image src='/logoMain.png' alt='SleepStiq logo' width={80} height={80} />
        </div>
        <ul className="hidden md:flex md:flex-row md:gap-8 text-xs items-center justify-evenly bg-transparent text-black">
          {navs.map((nav, id) => (
            <li key={id} className={`${page === nav.label ? 'font-bold border-b-2 border-blueShade' : 'font-normal'} hover:border-b-2 hover:border-blueShade text-lg text-blueShade`}>
              <Link href={nav.ref}>{nav.label}</Link>
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-blueShade hover:text-white focus:ring-white">
            {mobileMenuOpen ? <RiCloseLine className="h-6 w-6" /> : <RiMenu2Line className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white bg-opacity-90 backdrop-blur">
          <ul className="flex flex-col gap-4 text-xs items-center justify-evenly bg-transparent text-black">
            {navs.map((nav, id) => (
              <li key={id} className={`${page === nav.label ? 'font-bold border-b-2 border-blueShade' : 'font-normal'} hover:border-b-2 hover:border-blueShade text-lg text-blueShade`}>
                <Link href={nav.ref}>{nav.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
