import React from 'react'
import { portofolios } from '../constant'
import PortofolioCard from '../component/PortofolioCard'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Pagination} from 'swiper/modules'

const portofolio = () => {
  return (
    <section id='portofolio' className='my-20 xsm:min-h-fit md:min-h-screen max-container'>
      <div className='md:text-5xl  md:text-red-500   text-center'>
        Portofolio
      </div>
     <Swiper
     spaceBetween={20}
     slidesPerView={2}
     pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper md:my-20 ">
     <div>
        {portofolios.map((item) => (
          <SwiperSlide>
            <PortofolioCard className="" key={item.name} {...item}/>
          </SwiperSlide>
        ))}
      </div>
     </Swiper>
    </section>
  )
}

export default portofolio