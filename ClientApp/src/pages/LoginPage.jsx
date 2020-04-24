import React from 'react'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'
import '../custom.scss'

export function LoginPage() {
  return (
    <section className="body">
      <section className="randomizePage">
        <header className="header">
          <NavBar />
        </header>
        <main>
          <section className="pageTitle">
            <section>Login</section>
          </section>

          <section className="accountBody">
            <section className="accountSection">
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
              <Link to="/account">Login</Link>
            </button>
            <section className="signupLink">
              Don't have an account? Sign Up
              <Link to="/signup"> Here!</Link>
            </section>
          </section>
        </main>
      </section>
    </section>
  )
}
