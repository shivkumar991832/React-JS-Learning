import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
 
  return (
    <div>
      <nav>
        {/* its convert into anchor tag at runtime & basic Use*/}
        <NavLink className={(e)=>{return e.isActive? "red": ""}} to="/home"><li>Home</li></NavLink>
        <NavLink className={(e)=>{return e.isActive? "red": ""}} to="/about"><li>About</li></NavLink>
        <NavLink className={(e)=>{return e.isActive? "red": ""}} to="/login"><li>Login</li></NavLink>
      </nav>
    </div>
  )
}

export default Navbar
