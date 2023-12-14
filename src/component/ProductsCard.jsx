import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const ProductsCard = ({imgURL, name}) => {
  return (
    
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
        <img src={imgURL} alt={name} className='md:w-[350px] rounded-3xl md:h-[280px] xsm:w-[100px] xsm:h-[100px]' />
        <h3 className='mt-2 text-center  leading-normal font-semibold font-palanguin xsm:text-xs'>{name}</h3>

    </div>
   
  )
}

export default ProductsCard