import React, { useState } from 'react'
import axios from 'axios'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'
import '../custom.scss'

export function LoginPage() {
  const [logInEmail, setLogInEmail] = useState('')
  const [logInPassword, setLogInPassword] = useState('')
  const [token, setToken] = useState('')

  const logUserIntoApi = async () => {
    const resp = await axios.post('/auth/login', {
      email: logInEmail,
      password: logInPassword,
    })
    console.log(resp.data)
    setToken(resp.data.token)
  }

  const getSecretInformation = async () => {
    const resp = await axios.get('/api/secret', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
    console.log(resp.data)
  }

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
            <section className="login">
              <section className="inputField">
                <ul>
                  <li>Email</li>
                  <li>
                    <input
                      className="nameInput"
                      type="text"
                      value={logInEmail}
                      onChange={e => setLogInEmail(e.target.value)}
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
                      value={logInPassword}
                      onChange={e => setLogInPassword(e.target.value)}
                    />
                  </li>
                </ul>
              </section>
            </section>
            <button className="saveChanges" onClick={logUserIntoApi}>
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
