import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../custom.scss'

const NavBar = () => {
  return (
    <nav className="navBar">
      <section>
        <ul>
          <li>
            <Link to="/" className="homeLink">
              <i className="fas fa-home"></i>
            </Link>
          </li>
          <li>
            <Link to="/teahistory" className="teahistory">
              <i className="fas fa-clipboard-list"></i>
            </Link>
          </li>
          <li>
            <Link to="/addtea" className="tealog">
              <i className="fas fa-mug-hot"></i>
            </Link>
          </li>
        </ul>
      </section>

      <section className="rightNav">
        <ul>
          <li>
            <Link to="/login" className="accountLink">
              <i className="far fa-user-circle"></i>
            </Link>
          </li>
        </ul>
      </section>
    </nav>
  )
}

export default NavBar
