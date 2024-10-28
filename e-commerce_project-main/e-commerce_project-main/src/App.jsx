import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
import Shop from './components/Shop'
import Home from './components/Home'
import Cart from './components/Cart'
import { Route, Routes } from 'react-router-dom'
import Payment from './components/Payment'
import Add from './components/Add'

function App() {
  return(
    <>
  <Navbar />
  <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/register' element={<Register />}></Route>
    <Route path='/shop' element={<Shop />}></Route>
    <Route path='cart' element={<Cart/>}/>
    <Route path='payment' element={<Payment/>}/>
    <Route path='add' element={<Add/>}/>
  </Routes>
  </>
  )
}

export default App
