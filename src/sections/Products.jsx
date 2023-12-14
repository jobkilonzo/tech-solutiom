import React from 'react'
import { products } from '../constant'
import ProductsCard from '../component/ProductsCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import {Pagination} from 'swiper/modules'
const Products = () => {
  return (
    <section id='products' className='my-20 max-container xsm:min-h-fit md:min-h-screen'>
      <div className='md:text-5xl md:text-red-500 my-5 font-mono text-center'>
        Products & Services
      </div>
        <Swiper
        
                spaceBetween={60}
                slidesPerView={3}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper md:my-20">
        <div className='sm:relative  sm:flex sm:flex-row sm:justify-between jusitfy-center font-mono xsm:flex-col xsm:items-center xsm:my-5'>
            {products.map((product)=> (
                
                  <SwiperSlide>
                  <ProductsCard key={product.name} {...product}/>
                  </SwiperSlide>
                
                
            ))}
        </div>
        </Swiper>
    </section>
  )
}

export default Products