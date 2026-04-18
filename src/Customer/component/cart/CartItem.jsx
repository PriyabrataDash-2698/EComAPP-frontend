import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material'
import { Button, IconButton } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCartItem, updateItemToCart } from '../../../state/Cart/Action'

const CartItem = ({item,discounte}) => {
    const dispatch = useDispatch();
    const handleUpdatecartItem=(num)=>{
        const data = {data:{quantity:item.quantity+num},cartItemId:item?.id}
        dispatch(updateItemToCart(data)) 
    }
    const removeCartItemData=()=>{
        dispatch(removeCartItem(item.id))
    }
  return (
    
    
      <div className='p-5 rounded-md shadow-lg border bg-white text-black'>
          <div className='flex items-center'>
              <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                  <img
                      className='w-full h-full object-cover object-top'
                      src={item.product.imageUrl} alt="" />
              </div>
              <div className='ml-5 space-y-1'>
                  <p className='font-semibold'>{item.product.title}</p>
                  <p className='opacity-70'>size: {item.size},{item.product.color}</p>
                  <p className='opacity-70 mt-2'>Seller: Louis Vutton</p>
                  <div className='flex space-x-5 items-center text-lg lg:text-xl text-gray-900 pt-6'>
                      <p className='font-semibold'>
                          ₹{item.discountedPrice}
                      </p>
                      <p className='line-through opacity-50 '>
                          ₹{item.price}
                      </p>
                      <p className='text-green-600 font-semibold'>{Math.floor((discounte/item.price)*100)} % off</p>
                  </div>
                  
                 
              </div>
          </div>
          <div className='lg:flex items-center lg:space-x-10 pt-4'>
                        <div className='flex items-center space-x-2'>
                            <IconButton onClick={()=>handleUpdatecartItem(-1)} disabled={item.quantity<=1}>
                                <RemoveCircleOutline/>
                            </IconButton>
                            <span className='py-1 px-7 border rounded-sm'>{item.quantity}</span>
                                 <IconButton sx={{color:'blue'}} onClick={()=>handleUpdatecartItem(1)}>
                                <AddCircleOutline/>
                            </IconButton>
                            
                        </div>
                         <div>
                    <Button onClick={removeCartItemData} sx={{color:'red'}}>remove</Button>
                  </div>
                  </div>
      </div>
  )
}

export default CartItem