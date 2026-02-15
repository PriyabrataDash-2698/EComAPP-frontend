import { Label } from '@mui/icons-material'
import { Grid } from '@mui/material'
import React from 'react'
import OrderCard from './OrderCard'

const orderStatus=[
    {label:"On The Way",value:"On_The_Way"},
    {label:"Delivered",value:"delivered"},
    {label:"Cancelled",value:"cancelled"},
    {label:"Return",value:"returned"},
]
const Order = () => {
  return (
    <div className='text-black px-5 lg:px-20 bg-white'>
        <Grid container spacing={2}>
            <Grid item xs={2.5}>
                <div className='h-auto shadow-lg bg-white p-5 sticky top-5'>
                    <h6 className='font-bold text-lg '>Filter</h6>
                    <div className='space-y-4 mt-10'>
                        <h6 className='font-semibold'>ORDER STATUS</h6>
                        {orderStatus.map((option)=>
                        <div className='flex items-center'>
                            <input defaultValue={option.value} type="checkbox" name="" id="" 
                            className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500' />
                            <label className='ml-3 text-sm text-gray-600' htmlFor={option.value}>
                                {option.label}
                            </label>
                        </div>)}
                        
                    </div>
                </div>
            </Grid>
            <Grid item xs={9}>
                  <div className='space-y-5 w-[1100px]'>
                      {[1, 1, 1, 1].map((item) => (
                          <OrderCard />
                      ))}
                  </div>
            </Grid>
        </Grid>
        
    </div>
  )
}

export default Order