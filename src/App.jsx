import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './Customer/component/Navigation/Navigation'
import HomePage from './Customer/pages/HomePage/HomePage'

function App() {

  return (
    <>
      <div className="min-h-screen w-screen bg-gray-200">
        <Navigation />
        <div>
          <HomePage/>
        </div>
      </div>

    </>
  )
}

export default App
