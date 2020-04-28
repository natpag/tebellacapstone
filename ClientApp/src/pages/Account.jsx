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
    const resp = await axios.get('/api/profile', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    if (resp.status !== 200) {
      setShouldRedirectToLogin(true)
    }
    console.log(resp.data)
    setProfile(resp.data)
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
            <section className="accountSection">some account info</section>
            <section>
              {profile.firstName} {profile.lastName}
            </section>
            <section>{profile.email}</section>
          </section>
        </main>
      </section>
    </section>
  )
}
