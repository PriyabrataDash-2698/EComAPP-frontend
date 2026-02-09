import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './Customer/component/Navigation/Navigation'
import HomePage from './Customer/pages/HomePage/HomePage'
import Product from './Product/Product'
import Footer from './Customer/component/Footer/Footer'
import ProductDetails from './productDetails/ProductDetails'
import Cart from './Customer/component/cart/Cart'
import Checkout from './Customer/component/checkout/Checkout'
import Order from './Customer/component/order/Order'

function App() {

  return (
    <>
      <div className="min-h-screen w-screen">
        <Navigation />
        <div>
          {/* <HomePage/> */}
          {/* <Product/> */}
          {/* <ProductDetails/> */}
          {/* <Cart/> */}
          {/* <Checkout/> */}
          <Order/>
        </div>
        <div>
            <Footer/>
        </div>
      </div>

    </>
  )
}

export default App
