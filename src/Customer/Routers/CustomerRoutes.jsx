import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import Cart from '../component/cart/Cart'
import Navigation from '../component/Navigation/Navigation'
import Footer from '../component/Footer/Footer'
import Product from '../../Product/Product'

const CustomerRoutes = () => {
  return (
    <div>
      <div>
        <Navigation />
      
        <Routes>
            <Route path='' element={<HomePage/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product/> }></Route>

          {/* */}
          {/* <ProductDetails/> */}
          {/* <Cart/> */}
          {/* <Checkout/> */}
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