"use client"

import React from 'react'
import Slider from 'react-slick';
import Image from 'next/image';
import Header from '@/components/landing/Header'
import Link from 'next/link';
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
      <Image src={'/product1.png'} alt='hero background' objectFit='cover' className='w-full h-full absolute top-0 left-0'/>        
        <div className="w-full max-w-4xl mx-auto p-4 lg:p-0">
            <div className="flex w-full h-screen">
                <div className="flex z-10 flex-col gap-6 h-fit text-[#12305B] my-auto items-start text-sm w-full md:w-1/2">
                    <p className="text-sm">We are here to help you</p>
                    <h2 className='font-bold text-2xl md:text-3xl'>Our Product</h2>
                    <span className=''>With the aid of our Melatonin Sleepstiq, we can assure you that you can get quality sleep.</span>
                    <button className='bg-[#FC5959] p-3 w-2/4 lg:w-1/4 font-semibold text-white rounded-md'>
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
    </div>
    <div className='w-full h-full flex py-16 px-4 md:px-0 text-blueShade'>
      <div className='w-full h-full flex flex-col gap-4 max-w-4xl mx-auto'>
      <div>
        <h2 className='text-lg font-semibold'>About SleepStiq</h2>
       <p>At SleepStiq, we believe in the power of restful sleep. Our mission is to provide you with the tools you need to achieve the best sleep possible, because we know that a good nights sleep is the foundation for a productive and healthy life. Our flagship product, the SleepStiq Personal Diffuser, is an innovative solution designed to promote calm, support sleep, reduce stress, and aid relaxation.</p>
      </div>
      <div>
        <h2 className='text-lg font-semibold'>The Science Behind SleepStiq</h2>
       <p>Our diffuser contains a blend of natural ingredients including melatonin, lavender, and chamomile. Melatonin is a hormone that your body naturally produces to regulate sleep-wake cycles. Lavender and chamomile are well-known for their calming and soothing properties. Together, these ingredients create a powerful formula to help you unwind and prepare for a restful nights sleep.</p>
      </div> 
      <div>
        <h2 className='text-lg font-semibold'>How It Works</h2>
       <p>Using the SleepStiq diffuser is simple and effective. Inhaling on the diffuser turns the inside liquids into a light mist that you breathe in. This method allows for a near-instant effect, helping you to experience the soothing aromatherapeutic benefits immediately. Inhalation of melatonin through our diffuser allows for rapid absorption, supporting your bodys natural sleep cycle more effectively than traditional oral supplements.</p>
      </div>
      <div>
        <h2 className='text-lg font-semibold'>Why Choose SleepStiq?</h2>
        <ul className='flex gap-2 flex-col'>
          <li>- Promotes Calm: Our blend of lavender and chamomile works to calm your mind and body, easing you into a state of relaxation.</li>
          <li>- Supports Sleep: Melatonin supports your bodys natural sleep-wake cycle, helping you to fall asleep faster and stay asleep longer.</li>
          <li>- Reduces Stress: The soothing effects of our ingredients help to reduce stress and anxiety, making it easier for you to unwind at the end of the day.</li>
          <li>- Aids Relaxation: Perfect for bedtime, our diffuser helps to create a serene environment that is conducive to restful sleep.</li>
        </ul>
      </div>
      <div>
        <h2 className='text-lg font-semibold'>100% Drug-Free and Natural</h2>
       <p>SleepStiq is committed to providing a safe and natural solution for better sleep. Our products are drug-free, plant-based, and tested by third-party labs to ensure the highest quality and safety standards.</p>
      </div>
      <div>
        <h2 className='text-lg font-semibold'>Join the Sleep Revolution</h2>
       <p>We invite you to join the SleepStiq family and experience the benefits of better sleep. Our product is designed to be your bedtime best friend, helping you to achieve the restful sleep you deserve. Whether you are dealing with stress from work, school, or everyday life, SleepStiq is here to help you relax and recharge. Discover the difference that SleepStiq can make in your life. Because at SleepStiq, we believe that everyone deserves a good nights sleep.</p>
      </div>
      </div>
    </div>
</div>
);
}
