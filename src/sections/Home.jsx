import React from 'react'
import { home, editor } from '../assets/images'
import {About} from '../sections'
const Home = () => {
  return (
    <div>
      <div id='home' className='w-full md:mb-72 md:min-h-screen xsm:min-h-fit bg-black max-container flex md:flex-row flex-col '>
      
      <div className='md:w-1/2'>
        <About />
      </div>
      <div className='md:w-1/2 md:z-50 xsm:ml-10 '>
        <img src={home} className='md:w-full sm:w-3/4' alt="" />
      </div>
      <div className='md:absolute md:block  md:left-72  xsm:top-[46rem] md:top-[30rem] xl:whitespace-nowrap mt-10 xsm:hidden'>
          <img src={editor} className='md:w-full xsm:w-[65%] shadow-slate-800 rounded-lg' alt="" />
      </div>

    </div>
    
    </div>
  )
}

export default Home