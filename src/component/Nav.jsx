import React from 'react'
import { navlinks } from '../constant'
import {hamburger} from '../assets/icons'
import { logo } from '../assets/images'

const Nav = () => {
  return (
    <header className='padding-x py-8 xsm:flex xsm:flex-row xsm:justify-between w-full'>
        <div className='flex flex-row gap-4'>
        <a href="/" className='cursor-point'><img src={logo} className='w-[50px]' alt="" /></a>
        <p className='text-red-600 font-mono'>Tech Solution</p>
        </div>
        <nav>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden '>
              {navlinks.map((item) =>(
                <li key={item.href}>
                  <a className='font-montserrat leading-normal text-lg text-black hover:text-red-300' href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className='md:hidden xsm:realative md:block text-white cursor-pointer'>
              <img src={hamburger}
              width={25}
              height={25} />
            </div>
        </nav>
    </header>
  )
}

export default Nav