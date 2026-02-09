import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
const OrderCard = () => {
  return (
    <div className='bg-white text-black'>
        <Grid container spacing={2} sx={{justifyContent:'space-between'}}>
            <Grid item xs={6}>
                <div className='flex cursor-pointer'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://rukminim2.flixcart.com/image/240/240/xif0q/monitor/i/q/k/-original-imahbzhcdvc6gkhu.jpeg?q=60" alt="" />
                    <div className='ml-5 space-y-2'>
                        <p className='mb-2 '>Tv Good Tv</p>
                        <p className='opacity-50 text-xs font-semibold'>Electronics</p>
                        <p className='opacity-50 text-xs font-semibold'>color: Black</p>
                    </div>
                </div>
            </Grid>
        </Grid>
        <Grid item xs={2}>
            <p>Rs.19999</p>
        </Grid>
        <Grid item xs={4}>
            <p>
                <span>Delivered on march 03</span>
                
                <span>Expected delivery On 08 march</span> 
            </p>
        </Grid>
    </div>
  )
}

export default OrderCard