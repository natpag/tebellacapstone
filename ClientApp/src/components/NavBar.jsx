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
            <i className="fas fa-home"></i>
          </li>
          <li>
            <i className="fas fa-mug-hot"></i>
          </li>
          <li>
            <i className="fas fa-clipboard-list"></i>
          </li>
        </ul>
      </section>

      <section className="rightNav">
        <ul>
          <li>
            <i className="far fa-user-circle"></i>
          </li>
        </ul>
      </section>
    </nav>
  )
}

export default NavBar
