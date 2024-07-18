import Image from 'next/image'
import React from 'react'

export default function Mission() {
  return (
    <div className='flex flex-col items-center w-full max-w-5xl py-6 md:py-12 md:flex-row'>
      <div className="flex flex-col my-auto gap-4 pr-12 w-full text-sm md:w-1/2">
        <h2 className='text-xl font-bold'>OUR MISSION</h2>
        <p>We started Sleepstiq with 1 simple goal: to be your best friend at bedtime. We, just like you, deal with stress, unease, and trouble sleeping from a number of silly things like school, work, screens, numbers, and people. That's why we created products that aim to -</p> 
        <ul>
          <li>✔ Promote Calm</li>
          <li>✔ Support Sleep</li>
          <li>✔ Reduce Stress</li>
          <li>✔ Aid Relaxation</li>
        </ul>
      </div>
      <div className="flex w-full md:w-1/2">
        <img alt='relaxed woman in a comfy bed' src='/mission.png' className='w-full h-full'/>
      </div>
    </div>
  )
}
