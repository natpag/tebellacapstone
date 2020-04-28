import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Logo from '../components/images/logo.png'
import axios from 'axios'
import '../custom.scss'
import { Redirect } from 'react-router'

export function Account() {
  const [profile, setProfile] = useState({})
  const [shouldRedirectToLogin, setShouldRedirectToLogin] = useState(false)

  const loadProfile = async () => {
    try {
      const resp = await axios.get('/api/profile', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      console.log(resp.data)
      setProfile(resp.data)
    } catch {
      setShouldRedirectToLogin(true)
    } finally {
    }
  }

  useEffect(() => {
    loadProfile()
  }, [])

  if (shouldRedirectToLogin) {
    return <Redirect to="/login" />
  }
  return (
    <section className="body">
      <section className="randomizePage">
        <header className="header">
          <NavBar />
        </header>
        <main>
          <section className="pageTitle">{profile.firstName}'s Account</section>

          <section className="accountBody">
            <ul className="accountInfo">
              <li className="accountSection">Name:</li>
              <li>
                {profile.firstName} {profile.lastName}
              </li>
              <li className="accountSection">Email:</li>
              <li>{profile.email}</li>
              <li className="accountSection">Phone:</li>
              <li>{profile.phoneNumber}</li>
            </ul>
          </section>
        </main>
      </section>
    </section>
  )
}
