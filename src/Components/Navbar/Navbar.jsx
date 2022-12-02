import React from 'react'
import {NavLink} from 'react-router-dom'
export default function Navbar(props) {
  return (
    <>

<nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container">
    <NavLink className="navbar-brand" to='/'><h3>noxe</h3></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
   {!props.auth? <>      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    
    <li className="nav-item">
      <NavLink className="nav-link" to='/home'>Home</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to='/movies'>Movies</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to='/tv'>Tv show</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to='/people'>People</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to='/about'>About</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to='/network'>Network</NavLink>
    </li>
   </ul>
          <ul className="navbar-nav mb-2 mb-lg-0">

            <li className="nav-item">
              <NavLink className="nav-link" to='/'>Logout</NavLink>
            </li>

          
          </ul></>: 
          
             <> 
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0"> 
            <li className="nav-item">
              <NavLink className="nav-link" to='/'>Sign in</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to='/'>Sign up</NavLink>
            </li>
          </ul>
            </>}
  
    </div>
  </div>
</nav>


    </>
  )
}
