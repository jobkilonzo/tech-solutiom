import React from 'react'
import { clients } from '../constant'

const Home = () => {
  return (
    <section  className='max-container'>
      <div  className='w-full flex md:flex-row flex-col '>
      <div className='relative  xsm:mx-1 xsm:text-sm  justify-center items-center m-8'>
        
        <h1 className='md:font-bold px-6 text-white font-mono md:text-5xl mt-6 xsm:text-lg md:font-italic '>
          Tech Solution
        </h1>
        <p className='md:text-xl p-6 md:font-montserrat text-white'>Tech Solution is made of group of tech experts with experience in different fields.
        We offer solutions tailored to your business/personal needs. Tech Solution was established in 2016
        by small group of students whose aim was to offer both consultant and hands-on solutions to follow students and community at large.
        Over the years Tech Solutions has grown to extent of offering its services to upcoming and established companies.</p>
      </div>

      
    </div>
    </section>
  )
}

export default Home