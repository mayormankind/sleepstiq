import React from 'react';
import Slider from 'react-slick';
import Header from './Header';
import Image from 'next/image'
import Link from 'next/link'
import Sponsors from './Sponsors';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function Hero(){
    
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
        <Header page={'Home'}/>
        <div className='w-full h-full relative grid'>
            <Image src={'/hero.png'} alt='hero background' layout='fill' objectFit='cover' className='w-full h-full absolute top-0 left-0'/>
            {/* <img src="/hero.png" alt="" className='w-full h-full absolute top-0 left-0 object-cover'/>             */}
            <div className="w-full max-w-4xl mx-auto p-4 lg:p-0">
                <div className="flex w-full h-screen">
                    <div className="flex z-10 flex-col gap-6 h-fit text-[#12305B] my-auto items-start text-sm w-full md:w-1/2">
                        <p className="text-sm">We are here to help you</p>
                        <h2 className='font-bold text-2xl md:text-3xl'>Relax & Rest</h2>
                        <span className=''>With the aid of our Melatonin Sleepstiq, we can assure you that you can get quality sleep.</span>
                        <button className='bg-pinkShade p-3 w-2/4 lg:w-1/4 font-semibold text-white rounded-md'>
                               <Link href='/shop'>Visit shop</Link>
                        </button>
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
            <Sponsors/>
        </div>
    </div>
  );
};
