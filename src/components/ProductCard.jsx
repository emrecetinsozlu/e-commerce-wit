import React from 'react'

import {Link} from 'react-router-dom';  


function ProductCard() {

  return (
    
      <div className='flex flex-col w-[348px] h-[589px] justify-center items-center gap-4 text-center p-4'>
        <div className='w-full object-cover'>
            <img src="/image6.jpg" alt="" className='w-full' />
        </div>
        <h5 className='font-bold text-base tracking-[0.1px] leading-[24px]'>Graphic Design</h5>
        <Link>
            <p>Angus Department</p>
        </Link>
        <div className='flex justify-center gap-2'>
            <span className='text-muted-color font-bold'>$16.48</span>
            <span className='font-bold text-green-600'>$4.99</span>
        </div>
        <div className='flex gap-1 justify-center'>
            <div className='bg-primary-color w-4 h-4 rounded-full'></div>
            <div className='bg-secondary-color w-4 h-4 rounded-full'></div>
            <div className='bg-alert-color w-4 h-4 rounded-full'></div>
            <div className='bg-dark-background-color w-4 h-4 rounded-full'></div>
        </div>
      </div>

  )
}

export default ProductCard
