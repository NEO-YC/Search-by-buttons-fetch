import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'



function Header() {






  return (

<nav>
    <header>
      <h1>Project</h1>
      
    <NavLink to="/">Home</NavLink>
    <NavLink to="/Q2">Carusel</NavLink>
    <NavLink to="/Q1">Q1</NavLink>
    <NavLink to="/Q4">Calculator</NavLink>


    </header>
</nav>
  )
}

export default Header