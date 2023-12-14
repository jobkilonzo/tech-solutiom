import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='relative justify-center text-center md:min-h-screen xsm:min-h-fit m-2 items-center'>
        <div>
          <div className='text-orange-500 md:font-extrabold md:my-6 xsm:my-3 xsm:text-2xl md:text-3xl font-mono underline'>
            Contact Tech Solutions
          </div>
        <div>
         <div className='md:my-20'>
          <div className=''>
            <input type="text" placeholder='Enter your email' 
            className='p-2 border md:w-1/2 xsm:w-full border-orange-200 focus:outline-orange-400 rounded-full input ' />
        </div>
        <div>
            <input type="text" placeholder='Enter your subject' className='p-2 md:w-1/2 xsm:w-full border border-orange-200 focus:outline-orange-400 rounded-full input my-2'/>
        </div>
        <div>
            <textarea placeholder='Enter your message' rows={5} className='p-2 my-2 md:w-1/2 xsm:w-full border border-orange-200 focus:outline-orange-400 rounded-lg'/>
        </div>
        <input type="button" value={"Send"} className='bg-orange-400 md:w-[100px] xsm:w-full py-4 text-white px-6 m-2 border rounded-lg cursor-pointer hover:outline-orange-800 hover:bg-orange-500'/>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Contact