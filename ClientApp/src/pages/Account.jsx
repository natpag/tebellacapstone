import React from 'react'
import NavBar from '../components/NavBar'
import Logo from '../components/images/logo.png'
import '../custom.scss'

export function Account() {
  return (
    <section className="body">
      <section className="randomizePage">
        <header className="header">
          <NavBar />
        </header>

        <section className="pageTitle">
          <section>Account</section>
        </section>
        <section className="accountBody">
          <section className="nameSection">
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
          </section>
          <section className="accountSection">
            <section className="inputField">
              <ul>
                <li>Phone Number</li>
                <li>
                  <input className="longInput"></input>
                </li>
              </ul>
            </section>
            <section className="inputField">
              <ul>
                <li>Email</li>
                <li>
                  <input className="longInput"></input>
                </li>
              </ul>
            </section>
            <section className="inputField">
              <ul>
                <li>Password</li>
                <li>
                  <input className="longInput"></input>
                </li>
              </ul>
            </section>
          </section>
          <button className="saveChanges">Save Changes</button>
        </section>
      </section>
    </section>
  )
}
