import React from 'react'

export default function ReviewCard({ review, author }) {
  return (
    <div className='bg-yellowShade rounded-md p-4 w-full max-w-[300px] h-[170px] text-blueShade'>
        <div className='flex flex-col gap-2 h-full justify-between'>
                <p className='italic'>{review}</p>
                <div className='flex flex-col'>
                    <b>{author}</b>
                    <span>* * * * *</span>
                </div>
        </div>
    </div>
  )
}
