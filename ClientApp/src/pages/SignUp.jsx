import React from 'react'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'
import '../custom.scss'

export function SignUp() {
  return (
    <section className="body">
      <section className="randomizePage">
        <header className="header">
          <NavBar />
        </header>

        <section className="pageTitle">
          <section>Sign Up</section>
        </section>

        <section className="accountBody">
          <section className="accountSection">
            <section className="inputField">
              <ul>
                <li>First Name</li>
                <li>
                  <input className="nameInput"></input>
                </li>
              </ul>
            </section>
            <section className="inputField">
              <ul>
                <li>Last Name</li>
                <li>
                  <input className="nameInput"></input>
                </li>
              </ul>
            </section>
            <section className="inputField">
              <ul>
                <li>Phone Number</li>
                <li>
                  <input className="nameInput"></input>
                </li>
              </ul>
            </section>
            <section className="inputField">
              <ul>
                <li>Email</li>
                <li>
                  <input className="nameInput"></input>
                </li>
              </ul>
            </section>
            <section className="inputField">
              <ul>
                <li>Password</li>
                <li>
                  <input className="nameInput"></input>
                </li>
              </ul>
            </section>
          </section>
          <button className="saveChanges">
            <Link to="/account">Save Changes</Link>
          </button>
        </section>
      </section>
    </section>
  )
}
