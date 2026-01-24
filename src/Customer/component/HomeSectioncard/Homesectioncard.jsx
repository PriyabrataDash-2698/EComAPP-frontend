import React from 'react'

const Homesectioncard = ({product}) => {
  return (
    <div className='cursor-pointer flex flex-col bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border border-black'>
        <div className='h-[13rem] w-[13rem]'>
            <img 
            className='object-cover object-top w-full h-full'
            src={product.imageUrl||product.image} 
            alt="" />
        </div>
        <div className='p-4'>
          <h3 className='text-lg font-medium text-gray-600'>{product.title}</h3>
          <p className='text-sm mt-2  text-gray-600'>{product.brand}</p>
        </div>
    </div>
  )
}

export default Homesectioncard