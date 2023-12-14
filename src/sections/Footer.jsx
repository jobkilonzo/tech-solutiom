import React from 'react'

import { footerLinks, socialMedia } from '../constant'
import { copyrightSign } from '../assets/icons'
const Footer = () => {
  return (
    <footer className='max-container '>
        

      <div className='flex justify-between text-white xsm:m-1  max-sm:flex-col max-sm:items-center'>
      <div className='flex items-center gap-3'>
            {socialMedia.map((icon) => (
              <div className='flex justify-center items-center xsm:w-10 xsm:h-10 md:w-12 md:h-12 bg-white rounded-full'>
                <img src={icon.src}
                alt={icon.alt}
                width={24}
                height={24} />
              </div>
            ))}
          </div>
        <div className='flex xsm:my-2 justify-start items-center md:gap-2 md:my-2 font-montserrat cursor-pointer'>
          <img src={copyrightSign} 
          alt="copy right sign"
          width={20}
          height={20}
          className='rounded-full' />
          <p className='xsm:text-sm md:text-xl xsm:w-full'>Copyright. All rights reserved.</p>
        </div>
        
        <div className='flex flex-col'>
        <p className='font-montserrat md:text-xl  cursor-pointer xsm:text-sm'>Terms & Conditions</p>
        <p>Email: jobkilonzo95@gmail.com</p>
        <p>Call: +254 725 993 935</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer