import React from 'react'
import './navbar.css'
import logo from "../assets/images/Logo-fotor-bg-remover-2023051319917.png"


export default function NavBar() {
  return (
    <div className='div-header'>
        <header className='header'>
        <img src={logo} alt="logo" height="150"  width="180"/>
      <nav>
        <ul>
            <li><a href="#">About Me</a></li>
            <li><a href="#">My Works</a></li>
            <li><a href="#">Contact Me</a></li>
        </ul>
      </nav>
      </header>
    
    </div>
  )
}
