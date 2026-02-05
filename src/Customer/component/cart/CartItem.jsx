import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material'
import { Button, IconButton } from '@mui/material'
import React from 'react'

const CartItem = () => {
  return (
      <div className='p-5 rounded-md shadow-lg border bg-white text-black'>
          <div className='flex items-center'>
              <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                  <img
                      className='w-full h-full object-cover object-top'
                      src="https://rukminim2.flixcart.com/image/612/612/xif0q/trouser/t/e/m/28-kttmenspant16-kotty-original-imahd938gjfrr8qy.jpeg?q=70" alt="" />
              </div>
              <div className='ml-5 space-y-1'>
                  <p className='font-semibold'>Mens Jeans</p>
                  <p className='opacity-70'>size: L,white</p>
                  <p className='opacity-70 mt-2'>Seller: Louis Vutton</p>
                  <div className='flex space-x-5 items-center text-lg lg:text-xl text-gray-900 pt-6'>
                      <p className='font-semibold'>
                          ₹199
                      </p>
                      <p className='line-through opacity-50 '>
                          211
                      </p>
                      <p className='text-green-600 font-semibold'>5 % off</p>
                  </div>
                  
                 
              </div>
          </div>
          <div className='lg:flex items-center lg:space-x-10 pt-4'>
                        <div className='flex items-center space-x-2'>
                            <IconButton>
                                <RemoveCircleOutline/>
                            </IconButton>
                            <span className='py-1 px-7 border rounded-sm'>4</span>
                                 <IconButton sx={{color:'blue'}}>
                                <AddCircleOutline/>
                            </IconButton>
                            
                        </div>
                         <div>
                    <Button sx={{color:'red'}}>remove</Button>
                  </div>
                  </div>
      </div>
  )
}

export default CartItem