import React from 'react'
import './css/reset.css'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
         <Route path='/' element={<Shop />} />
         <Route path='/mens' element={<ShopCategory category="men" />} />
          <Route path='/womens' element={<ShopCategory category="women" />} />
          <Route path='/kids' element={<ShopCategory category="kids" />} />
          <Route path='product' element={<Product />}>
            <Route path=':id' element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
      </Routes>
    </div>
  )
}

export default App
