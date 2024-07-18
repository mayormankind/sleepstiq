import React from 'react'
import { reviews } from '../common/Review';
import CustomerCard from './CustomerCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Services() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      }

  return (
    <div className='flex flex-col items-center mx-auto w-full max-w-4xl py-6 md:py-16 md:flex-row'>
        <div className="flex flex-col gap-4 w-full pr-5 md:p-10 text-sm md:w-1/2">
            <span>Our Amazing Story</span>
            <h2 className='text-xl font-bold'>10K+ Happy Customers</h2>
            <p>There’s no secret sauce, no wizard behind the curtain. What makes Aerolab tick is an interdisciplinary team with a framework that fosters candid collaboration.</p> 
        </div>
        <div className='w-full h-full p-5 shadow-custom md:p-10 md:w-1/2'>
            <Slider {...settings} className='flex gap-4'>
                {reviews.map((review, index) => (
                    <div key={index} className='p-2 h-full'>
                        <CustomerCard review={review.review} author={review.author} img={review.img} role={review.role}/>
                    </div>
                ))}
            </Slider>
        </div>
    </div>
  )
}

// background: #FFD7231A;