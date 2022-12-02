import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
export default function AuthLayout() {
  return (
    <>
    <Navbar auth={true} />
    <div className="my-5 w-75 m-auto">
      <Outlet/>
    </div>
    </>
  )
}
