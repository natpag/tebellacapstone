import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Logo from './images/tebellaLogoPic.jpg'
import '../custom.scss'

const NavBar = () => {
  return (
    <nav className="navBar">
      <ul>
        <li>Home</li>
        <li>Account</li>
        <li>Tea History</li>
        <li>Tea Log</li>
      </ul>
    </nav>
  )
}

export default NavBar
