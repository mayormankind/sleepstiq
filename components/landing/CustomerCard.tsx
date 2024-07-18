import React from 'react'

interface cardProps {
  review: string;
  img: string;
  author: string;
  role: string;
}

export default function CustomerCard({ review, img, author, role }:cardProps) {
  return (
    <div className='bg-yellowShade p-6 w-full text-[#4D533C] h-[300px] flex flex-col justify-between'>
        <div className='mb-4'>
            <p className='italic'>{review}</p>
        </div>
        <div className='flex gap-4 items-center'>
            <img src={img} alt='customer' className='w-10 h-10 rounded-full'/>
            <div className='text-sm grid'>
                <span className='font-semibold block'>{author}</span>
                <span>{role}</span>
            </div>
        </div>
    </div>
  )
}
