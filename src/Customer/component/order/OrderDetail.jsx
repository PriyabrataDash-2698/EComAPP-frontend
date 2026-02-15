import React from 'react'
import Addresscard from '../addresscard/Addresscard'
import Ordertracker from './Ordertracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';
const OrderDetail = () => {
  return (
    <div className='px-5 lg:px-20 bg-white text-black'>
        <div>
            <h6 className='font-semibold text-xl py-10'>Delivery Address</h6>
            <Addresscard/>
        </div>
        <div className='py-20'>
        <Ordertracker activeStep={3}/>
        </div>
        <Grid className="space-x-5" >
            {[1,1,1,1,1].map((item)=>(
                <Grid item container className="shadow-xl rounded-md p-5 border mb-2" 
            sx={{alignItems:'center',justifyContent:'space-between'}}>
                <Grid item xs={6}>
                    <div className='flex items-center space-x-4'>
                        <img 
                        className='w-[5rem] h-[5rem] object-cover object-top'
                        src="https://media.istockphoto.com/id/1221134337/photo/front-views-black-trousers.jpg?s=612x612&w=0&k=20&c=XSEtHBJpWPQTo5FQgVTGrLBRiOJ7FuYIcUlKZzifGG8=" alt="" />
                        <div className='space-y-2 ml-5'>
                            <p className='font-semibold'>Men Slim Mid Rise Black jeans</p>
                            <p className='space-x-5 opacity-50 text-xs font-semibold '><span>color: piink</span> <span> Size: M</span></p>

                            <p>Seller: Lineria</p>
                            <p>1099</p>
                        </div>
                    </div>
                </Grid>
                <Grid item>
                    <Box sx={{color:deepPurple[500]}}>
                        <StarBorderIcon sx={{fontSize:'2rem'}} className='px-2'/>
                        <span>Rate and Review Product</span>
                    </Box>
                </Grid>
            </Grid>
            ))}
            
        </Grid>
    </div>
  )
}

export default OrderDetail