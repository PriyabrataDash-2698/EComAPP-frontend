import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOrderById } from '../../../state/Order/Action';
import { updatePayment } from '../../../state/Payment/Reducer';

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
        dispatch(getOrderById(orderId));
        dispatch(updatePayment(data));
    },[orderId,paymentId])
  return (
    <div className='px-2 lg:px-36'>
        <div className='flex flex-col justify-center items-center'>
              <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                  payment Success !
                  <AlertTitle>Bravo! Order Got Placed</AlertTitle>
              </Alert>
        </div>
    </div>
  )
}

export default PaymentSuccess