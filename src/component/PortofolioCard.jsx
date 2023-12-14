import React from 'react'

const PortofolioCard = ({imgURL, name, url}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full  ' >
        <img src={imgURL} alt={name} className='md:w-full md:h-full ' />
        <h3 className='mt-2 text-center leading-normal font-semibold font-palanguin xsm:text-xs md:text-lg'>{name}</h3>
        <a className='md:text-sm text-center text-blue-500 xsm:text-xs' href={url}>{url}</a>
    </div>
  )
}

export default PortofolioCard