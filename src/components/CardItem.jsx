import React from 'react'

function CardItem() {
  return (
    <div className='flex-row w-[332px] h-[232px] relative shadow-xl p-4 bg-white'>
        <div className='flex-col absolute top-1/2 left-1/8 -translate-x-1/8 -translate-y-1/2'>
            <p className='text-sm text-gray-500'>Your Space</p>
            <h3 className='max-w-[90px] wrap-break-word font-bold text-lg py-2 '>Unique Life</h3>
            <p className='text-xs text-gray-400 py-2'>Explore Items</p>
        </div>
        
        <img src="../../public/apples-805124_1280.jpg" alt="" className='w-3/4 h-full object-cover ml-auto'/>
    </div>
  )
}

export default CardItem
