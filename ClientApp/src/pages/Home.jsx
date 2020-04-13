import React from 'react'
import NavBar from '../components/NavBar'
import Logo from '../components/images/logo.png'
import '../custom.scss'

export function Home() {
  return (
    <section className="body">
      <section className="randomizePage">
        <header className="header">
          <NavBar />
        </header>
        <main>
          <section className="hero">
            <img className="logo" src={Logo} alt="Logo" />
          </section>
          <button className="randomizer">Random Tea</button>
          <section className="teaBox">
            <section className="teaHeader">
              <section className="teaFamilyLabel"> {/* TeaFamily */} B</section>
              <section className="teaFamilyColor">
                {/* TeaFamilyColor */}.
              </section>
              <section className="teaNameLabel">
                {/* TeaName */} Earl Grey Lavender
              </section>
            </section>
            <section className="teaImage">{/* TeaPicture */} img</section>
          </section>
        </main>
      </section>
    </section>
  )
}
