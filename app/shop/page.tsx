"use client"

import React from 'react'
import Slider from 'react-slick';
import Header from '@/components/landing/Header'
import Product from '@/components/shop/Product'
import Review from '@/components/common/Review'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

export default function Shop() {
  const images = [
    '/shopHero.png',
    '/hero.png',
    '/hero2.png',
    '/hero3.png',
  ]


  // const settings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     autoplaySpeed: 3000,
  //     fade: true,
  //     arrows: false,
  // };

  return(
  <div className='w-full h-full min-h-screen overflow-hidden'>
    <Header page={'Shop'}/>
    <div className='w-full h-full relative grid'>
      <Image src={'/shopHero.png'} alt='hero background' layout='fill' objectFit='cover' className='w-full h-full absolute top-0 left-0'/>       
      <div className="w-full max-w-4xl mx-auto p-4 lg:p-0">
        <div className="flex w-full min-h-[600px]">
          <div className="flex z-10 flex-col gap-6 h-fit text-[#12305B] my-auto items-start text-sm w-full md:w-1/2">
            <p className="text-sm">We are here to help you</p>
            <h2 className='font-bold text-2xl md:text-4xl'>Relax & Rest</h2>
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
    <hr className='w-full'/>
    <div className='flex w-full h-full'>
      <Product/>
    </div>
    <div className='w-full'>
      <Review/>
    </div>
    {/* <div className='w-full h-full flex relative shadow-custom justify-end py-6 px-4 md:px-0 md:py-12'>
      <div className='w-full h-full max-w-5xl'>
        <Slider {...settings} className='flex gap-4'>
          {reviews.map((review, index) => (
            <div key={index} className='p-2 h-full'>
              <ReviewCard review={review.review} author={review.author} />
            </div>
          ))}
        </Slider>
      </div>
    </div> */}
  </div>

  )
}
