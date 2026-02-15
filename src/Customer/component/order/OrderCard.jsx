import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';
const OrderCard = () => {
  const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className="bg-white p-4 shadow-lg rounded-md mb-4 hover:shadow-2xl">
      <Grid container alignItems="center" sx={{ justifyContent: 'space-between' }}>

        <Grid item xs={6}>
          <div className="flex items-center gap-4">
            <img
              src="https://rukminim2.flixcart.com/image/240/240/xif0q/monitor/i/q/k/-original-imahbzhcdvc6gkhu.jpeg?q=60"
              alt=""
              className="w-20 h-20 object-cover"
            />
            <div>
              <p className="font-medium text-base">Tv Good Tv</p>
              <p className="text-sm text-gray-500">Electronics</p>
              <p className="text-sm text-gray-500">Color: Black</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p className="font-semibold text-base">₹19,999</p>
        </Grid>

        <Grid item xs={4}>
          <div>
            <p className="font-medium text-green-600">
              Expected Delivery On Mar 03
            </p>
            <p className="text-sm text-gray-500">
              Your item has been delivered
            </p>
          </div>
        </Grid>

      </Grid>
    </div>
  )
}

export default OrderCard