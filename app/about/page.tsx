"use client"

import React from 'react'
import Slider from 'react-slick';
import Image from 'next/image';
import Header from '@/components/landing/Header'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function About() {
  const images = [
    '/hero.png',
    '/hero2.png',
    '/hero3.png',
]

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false,
};

return (
<div className='w-full h-full min-h-screen'>
    <Header page={'About'}/>
    <div className='w-full h-full relative grid'>
      <Image src={'/hero3.png'} alt='hero background' layout='fill' objectFit='cover' className='w-full h-full absolute top-0 left-0'/>        
        <div className="w-full max-w-5xl mx-auto p-4 lg:p-0">
            <div className="flex w-full h-screen">
                <div className="flex z-10 flex-col gap-6 h-fit text-[#12305B] my-auto items-start text-sm w-full md:w-1/2">
                    <p className="text-sm">We are here to help you</p>
                    <h2 className='font-bold text-2xl md:text-3xl'>Relax & Rest</h2>
                    <span className=''>With the aid of our Melatonin Sleepstiq, we can assure you that you can get quality sleep.</span>
                    <button className='bg-[#FC5959] p-3 w-1/4 font-semibold text-white rounded-md'>Visit shop</button>
                </div>
                <div className="hidden md:flex w-full md:w-1/2"></div>
            </div>            
        </div>
        {/* <Slider {...settings} className="w-full h-full absolute top-0 left-0">
            {images.map((image, index) => (
            <div key={index} className='w-full h-full max-h-screen'>
                <img src={image} alt={`Slide ${index}`} className='w-full h-full object-cover' />
            </div>
            ))}
        </Slider> */}
    </div>
</div>
);
}
