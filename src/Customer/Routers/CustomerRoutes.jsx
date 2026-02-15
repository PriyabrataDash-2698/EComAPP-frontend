import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import Cart from '../component/cart/Cart'
import Navigation from '../component/Navigation/Navigation'
import Footer from '../component/Footer/Footer'
import Product from '../../Product/Product'
import ProductDetails from '../../productDetails/ProductDetails'
import Checkout from '../component/checkout/Checkout'
import Order from '../component/order/Order'
import OrderDetail from '../component/order/OrderDetail'

const CustomerRoutes = () => {
  return (
    <div className='flex-1 w-full max-w-[1450px] overflow-x-hidden'>
      <div>
        <Navigation />
      
        <Routes>
            <Route path='' element={<HomePage/>}></Route>
            <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product/> }></Route>
            <Route path='/product/:productId' element={<ProductDetails/> }></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path='/account/order' element={<Order/>}></Route>
            <Route path='/account/order/:orderId' element={<OrderDetail/>}></Route>

          {/* <Order/> */}
          {/* <OrderDetail/>   */}
        </Routes>
        </div>
        <div>
          <Footer/>
        </div>
    </div>
  )
}

export default CustomerRoutes