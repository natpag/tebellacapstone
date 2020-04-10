import React from 'react'
import NavBar from '../components/NavBar'
import '../custom.scss'

export function Home() {
  return (
    <body>
      <section className="randomizePage">
        <header className="header">
          <NavBar />
        </header>
      </section>
    </body>
  )
}
