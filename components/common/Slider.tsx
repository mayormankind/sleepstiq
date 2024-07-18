// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
// import Autoplay from 'swiper/modules/autoplay';
// import EffectFade from 'swiper/modules/effect-fade';

// // Install Swiper modules
// Swiper.use([Autoplay, EffectFade]);

// interface BackgroundImageSliderProps {
//   images: string[];
// }

// export default function Slider({ images }:any) {
//   return (
//     <div style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
//       <Swiper
//         modules={[Autoplay]}
//         spaceBetween={0}
//         slidesPerView={1}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         loop={true}
//       >
//         {images.map((image:any, index:number) => (
//           <SwiperSlide key={index}>
//             <div
//               style={{
//                 height: '100vh',
//                 width: '100vw',
//                 backgroundImage: `url(${image})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//               }}
//             ></div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   )
// }
