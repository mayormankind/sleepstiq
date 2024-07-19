import Image from 'next/image';
import React from 'react';

export default function Mission() {
  return (
    <div className='flex flex-col items-center w-full max-w-5xl py-16 gap-8 px-4 md:px-0 md:flex-row'>
      <div className="flex flex-col my-auto px-4 gap-4 md:px-0 md:pr-12 w-full text-sm md:w-1/2">
        <h2 className='text-xl font-bold'>OUR MISSION</h2>
        <p>We started Sleepstiq with 1 simple goal: to be your best friend at bedtime. We, just like you, deal with stress, unease, and trouble sleeping from a number of silly things like school, work, screens, numbers, and people. That is why we created products that aim to -</p>
        <ul>
          <li>✔ Promote Calm</li>
          <li>✔ Support Sleep</li>
          <li>✔ Reduce Stress</li>
          <li>✔ Aid Relaxation</li>
        </ul>
      </div>
      <div className="flex w-full md:w-1/2 h-96 md:h-auto">
        <Image src='/mission.png' alt='relaxed woman in a comfy bed' layout='fill' width={500} height={500} className='w-full h-full'/>
      </div>
    </div>
  );
}
