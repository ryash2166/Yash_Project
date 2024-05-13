import React from 'react'
import Navbar1 from '../Components/Navbar'
import Banner from '../Components/Banner'
import Categories from '../Components/Categories'
import Interior from '../Components/Interior'
import ShippingLable from '../Components/ShippingLable'
import Tools from '../Components/Tools'
import Mail from '../Components/Mail'
import Footer_1 from '../Components/Footer_1'
import Arrival from '../Components/Arrival'
import { Link , NavLink } from 'react-router-dom'


const Main = () => {
  return (
    <div>
      <Navbar1/>
      <Banner/>
      <Categories/>
      <Interior/>
      <ShippingLable/>
      <Tools/>
      <Arrival/>
      <Mail/>
      <Footer_1/>
    </div>
  )
}

export default Main
