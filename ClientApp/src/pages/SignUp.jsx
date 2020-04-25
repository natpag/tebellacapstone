import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'
import '../custom.scss'
import Axios from 'axios'

export function SignUp() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const sendNewUserToApi = async () => {
    const resp = await Axios.post('/auth/signup', {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
      password: password,
    })
    console.log(resp.data)
  }

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
                  <input
                    className="nameInput"
                    type="text"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                  />
                </li>
              </ul>
            </section>
            <section className="inputField">
              <ul>
                <li>Last Name</li>
                <li>
                  <input
                    className="nameInput"
                    type="text"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                  />
                </li>
              </ul>
            </section>
            <section className="inputField">
              <ul>
                <li>Phone Number</li>
                <li>
                  <input
                    className="nameInput"
                    type="text"
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                  />
                </li>
              </ul>
            </section>
            <section className="inputField">
              <ul>
                <li>Email</li>
                <li>
                  <input
                    className="nameInput"
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </li>
              </ul>
            </section>
            <section className="inputField">
              <ul>
                <li>Password</li>
                <li>
                  <input
                    className="nameInput"
                    type="password"
                    type="text"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </li>
              </ul>
            </section>
          </section>
          <button className="saveChanges" onClick={sendNewUserToApi}>
            <Link to="/account">Save Changes</Link>
          </button>
        </section>
      </section>
    </section>
  )
}
