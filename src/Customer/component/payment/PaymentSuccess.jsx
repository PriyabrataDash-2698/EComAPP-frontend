import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOrderById } from '../../../state/Order/Action';
import { updatePayment } from '../../../state/Payment/Reducer';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { AlertTitle, Grid } from '@mui/material';
import Ordertracker from '../order/Ordertracker';

const PaymentSuccess = () => {
    const [paymentId,setPaymentId]=useState();
    const [referenceId,setReferenceId]=useState();
    const [paymentStatus,setPaymentStatus]=useState();
    const {orderId} = useParams();
    const dispatch = useDispatch();
    useEffect(()=>{
        const urlParams = new URLSearchParams(window.location.search);
        setPaymentId(urlParams.get("razorpay_payment_link_id"));
        setPaymentStatus(urlParams.get("razorpay_payment_link_status"));
    },[]);

    useEffect(()=>{
        const data={orderId,paymentId}
        dispatch(getOrderById(orderId));
        dispatch(updatePayment(data));
    },[orderId,paymentId])
  return (
    <div className='px-2 lg:px-36 bg-amber-50 text-black'>
        <div className='flex flex-col justify-center items-center'>
              <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                  payment Success !
                  <AlertTitle>Bravo! Order Got Placed</AlertTitle>
                  
              </Alert>
              <Ordertracker activeStep={1}/>

              <Grid container className="space-y-5 py-5 pt-20">
                {[1,2,3].map((item)=>
                 <Grid
                      container
                      item
                      className="shadow-xl rounded-md p-5"
                      sx={{ alignItems: "center", justifyContent: "space-between" }}>
                      <Grid item xs={6}>
                          <div className="flex items-center">
                              <img
                                  className="w-[5rem] h-[5rem] object-cover object-top"
                                  src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/x/f/6/xxl-new-white-nofilter-original-imaghzggudfezpr8.jpeg?q=70"
                                  alt=""/>

                              <div className='ml-5 space-y-2'>
                                  <p>item.product.title</p>
                                  <div className='opacity-50 text-xs font-semibold space-x-5'>
                                    <span>Color: item.color</span>
                                    <span>Size: item.size</span>
                                    </div>
                                    <p>Seller: item.product.brand</p>
                                    <p></p>
                              </div>
                          </div>
                      </Grid>
                  </Grid>
            )
                 
                }
              </Grid>
        </div>
    </div>
  )
}

export default PaymentSuccess