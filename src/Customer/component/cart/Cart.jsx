import React from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const navigate = useNavigate();
    const handleCheckout = ()=>{
        navigate(`/checkout?step=${2}`)
    }
  return (
      <div className='bg-white text-black'>
          <div className='lg:grid grid-cols-3 lg:px-16 relative'>
              <div className='col-span-2'>
                  {[1,1,1,1].map(()=><CartItem />)}
              </div>
              <div className='sticky top-0 px-5 h-[100vh] mt-5 lg:mt-0'>
                  <div className='border'>
                      <p className="uppercase font-bold opacity-60 pb-4">
                          Price details
                      </p>

                      <hr />

                      <div className="space-y-3 font-semibold">
                          <div className="flex justify-between pt-3 text-black">
                              <span>Price</span>
                              <span>₹4697</span>
                          </div>
                      </div>
                      <div className="space-y-3 font-semibold">
                          <div className="flex justify-between pt-3">
                              <span>Discount</span>
                              <span className='text-green-600'>-₹349</span>
                          </div>
                      </div>
                      <div className="space-y-3 font-semibold">
                          <div className="flex justify-between pt-3">
                              <span>Delivery Charges</span>
                              <span className='text-green-600'>FREE</span>
                          </div>
                      </div>
                      <div className="space-y-3 font-semibold mb-5">
                          <div className="flex justify-between pt-3  font-bold">
                              <span>Total Amount</span>
                              <span className='text-green-600'>₹1278</span>
                          </div>
                      </div>
                      <Button onClick={handleCheckout} variant='contained' className='w-full mt-5' sx={{ px: '2.5rem', py: '.7rem', bgcolor: '#9155fd' }} color='secondary'>
                          CheckOut
                      </Button>
                  </div>
              </div>

          </div>

      </div>
  )
}

export default Cart