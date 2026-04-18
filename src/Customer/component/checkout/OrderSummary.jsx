import React, { useEffect } from 'react'
import Addresscard from '../addresscard/Addresscard'
import CartItem from '../cart/CartItem'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getOrderById } from '../../../state/Order/Action'
import { createPayment } from '../../../state/Payment/Reducer'

const OrderSummary = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const searchparams = new URLSearchParams(location.search);
    const orderId = searchparams.get("order_id");
    const {order} = useSelector(store=>store);

    useEffect(()=>{
        dispatch(getOrderById(orderId))
    },[orderId])
    const handleCheckOut=()=>{
        dispatch(createPayment(orderId))
    }
  return (
    <div>
      <div className='p-5 shadow-lg rounded-s-md border text-black'>
        <Addresscard address={order.order?.shippingAddress}/>
      </div>
      <div className='bg-white text-black'>
          <div className='lg:grid grid-cols-3 relative'>
              <div className='col-span-2'>
                  {order.order?.orderItems.map((item)=><CartItem item={item} />)}
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
                              <span>₹{order.order?.totalPrice}</span>
                          </div>
                      </div>
                      <div className="space-y-3 font-semibold">
                          <div className="flex justify-between pt-3">
                              <span>Discount</span>
                              <span className='text-green-600'>-₹{order.order?.discounte}</span>
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
                              <span className='text-green-600'>₹{order.order?.totalDiscountedPrice}</span>
                          </div>
                      </div>
                      <Button 
                      variant='contained' 
                      className='w-full mt-5' 
                      sx={{ px: '2.5rem', py: '.7rem', bgcolor: '#9155fd' }} 
                      color='secondary'
                      onClick={handleCheckOut}>
                          CheckOut
                      </Button>
                  </div>
              </div>

          </div>

      </div>
    </div>
  )
}

export default OrderSummary