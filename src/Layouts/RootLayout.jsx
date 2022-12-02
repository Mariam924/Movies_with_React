import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Home from '../Components/Home/Home'
import {Outlet} from 'react-router-dom'
export default function RootLayout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}
