import React, {useState} from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import '../App.css'
import Headernav from '../components/Headernav'
import IPhoneHome from '../components/IPhoneHome'
import PrimeDeals from '../components/PrimeDeals'
import NewArrivals from '../components/NewArrivals'
import SmartWatch from '../components/SmartWatch'
import Footer from '../components/Footer'
import { useCart } from '../context/CartContext'

const Home = () => {

  return (
    <div style={{height:"100vh", overflowX: 'hidden'}}>
      
     
        <Header/>
      <Headernav/>
      <Hero/>
      <IPhoneHome/>
      <PrimeDeals/>
      <NewArrivals/>
      <SmartWatch/>
      <Footer/>
    </div>
  )
}

export default Home
