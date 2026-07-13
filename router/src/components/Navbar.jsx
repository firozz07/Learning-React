import React from 'react'
import {NavLink} from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <nav>
        <NavLink className={({ isActive }) => isActive ? "active" : ""}  to='/'><li>Home</li></NavLink>
        <NavLink className={({ isActive }) => isActive ? "active" : ""} to='/About'><li>About</li></NavLink>
        <NavLink className={({ isActive }) => isActive ? "active" : ""} to='/Contact'><li>Contact</li></NavLink>
       <NavLink className={({ isActive }) => isActive ? "active" : ""} to='/User' ><li>User</li></NavLink>
       </nav>


    </div>
  )
}

export default Navbar;