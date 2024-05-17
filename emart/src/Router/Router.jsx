import React from 'react'
import Navbar1 from '../Components/Navbar'
import { Outlet } from 'react-router-dom'

const Router = () => {
  return (
    <div>
      <Navbar1/>
      <Outlet/>
    </div>
  )
}

export default Router
