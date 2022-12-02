import React from 'react'
import Home from './Components/Home/Home'
import Movies from './Components/Movies/Movies'
import Navbar from './Components/Navbar/Navbar'
import People from './Components/People/People'
import Tv from './Components/Tv/Tv'

import RootLayout from './Layouts/RootLayout'
import AuthLayout from './Layouts/AuthLayout'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import NotFound from './Components/NotFound/NotFound'
import ItemDetails from './Components/ItemDetails/ItemDetails'
import Signup from './Components/Signup/Signup'
import Signin from './Components/Signin/Signin'

export default function App() {

  let routes = createBrowserRouter([
    {
  path:'/', element: <RootLayout />, children:[
      {index:true, element: <Home />},
      {path:'home', element: <Home />},
      {path:'tv', element: <Tv />},
      {path:'movies', element: <Movies />},
      {path:'people', element: <People />},
      {path:'details/:id/:media', element: <ItemDetails />},
      {path:'*', element: <NotFound />},
    ]},

    {
      path:'/', element: <AuthLayout />, children:[
          {index:true, element: <Signin/>},
          {path:'signin', element: <Signin />},
          {path:'signup', element: <Signup />},
        ]}
  ])
  return (
    <>
    <RouterProvider router={routes}/>
    </>
  )
}
