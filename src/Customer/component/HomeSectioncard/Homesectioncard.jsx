import React from 'react'

const Homesectioncard = () => {
  return (
    <div className='cursor-pointer flex flex-col bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border border-black'>
        <div className='h-[13rem] w-[13rem]'>
            <img 
            className='object-cover object-top w-full h-full'
            src="https://www.damensch.com/_next/image?url=https%3A%2F%2Fimg.damensch.com%2Fproducts%2Fjohnny_polo_wisdom_wine_(5).jpg%3Ffm%3Dwebp%26h%3D1275%26w%3D500&w=1080&q=75" 
            alt="" />
        </div>
        <div className='p-4'>
          <h3 className='text-lg font-medium text-gray-600'>t-shirt</h3>
          <p className='text-sm mt-2  text-gray-600'>Statement Textured Polo T-Shirt Wisdom Wine</p>
        </div>
    </div>
  )
}

export default Homesectioncard