import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import '../App.css'
import Headernav from '../components/Headernav'
import IPhoneHome from '../components/IPhoneHome'
import PrimeDeals from '../components/PrimeDeals'
import NewArrivals from '../components/NewArrivals'
import SmartWatch from '../components/SmartWatch'
import { AuthProvider } from '../context/AuthContext'
import { CartProvider } from '../context/CartContext'
import { ArrowDropUp, ArrowUpward } from '@mui/icons-material'
import CartDisplay from '../components/CartDisplay'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div style={{height:"100vh", overflowX: 'hidden'}}>
      
      <AuthProvider>
        <CartProvider>
        <Header/>
      <Headernav/>
      <Hero/>
      <IPhoneHome/>
      
      <PrimeDeals/>
      {/* <NewArrivals/> */}
      {/* <SmartWatch/> */}
      </CartProvider>
      </AuthProvider>
      
      <Footer/>
    </div>
  )
}

export default Home
