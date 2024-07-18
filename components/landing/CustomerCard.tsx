// import React from 'react'

// export default function CustomerCard({ review, img, author, role}) {
//   return (
//     // <div className='bg-yellowShade shadow-custom p-6 w-full text-[#4D533C] h-[300px]'>
//     //     <div className='h-full justify-between'>
//     //         <div className=''>
//     //             <p className='italic h-full'>{ review }</p>
//     //         </div>
//     //         <div className='flex gap-4 h-fit bg-red-200 w-full'>
//     //             <img src={ img } alt='customer' className='w-10 h-10 rounded-full'/>
//     //             <div className='grid text-sm'>
//     //                 <span className='font-semibold'>{ author }</span>
//     //                 <span>{ role }</span>
//     //             </div>
//     //         </div>
//     //     </div>
//     // </div>
    
//   )
// }


import React from 'react'

export default function CustomerCard({ review, img, author, role }) {
  return (
    <div className='bg-yellowShade shadow-custom p-6 w-full text-[#4D533C] h-[300px] flex flex-col justify-between'>
      <div className='mb-4'>
        <p className='italic'>{review}</p>
      </div>
      <div className='flex gap-4 items-center'>
        <img src={img} alt='customer' className='w-10 h-10 rounded-full'/>
        <div className='text-sm'>
          <span className='font-semibold block'>{author}</span>
          <span>{role}</span>
        </div>
      </div>
    </div>
  )
}
