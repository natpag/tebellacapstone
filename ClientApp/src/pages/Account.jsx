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
        <main>
          <section className="pageTitle">Account</section>
          <section>User Name</section>
          <section>email</section>

          <section className="accountBody">
            <section className="accountSection">some account info</section>
          </section>
        </main>
      </section>
    </section>
  )
}
