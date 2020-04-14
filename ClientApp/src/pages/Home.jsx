import React from 'react'
import NavBar from '../components/NavBar'
import Logo from '../components/images/logo.png'
import blackEarlGreyLavender from '../components/images/blackEarlGreyLavender.jpg'
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
                {/* TeaName */} Florida Orange Blossom
              </section>
            </section>
            <section className="teaImage">
              <img
                /* TeaPicture */ className="teaImg"
                src={blackEarlGreyLavender}
                alt="image"
              />
            </section>
          </section>
          <section className="specialTeaRandomizer">
            <button className="specialRandomizer">Special Random Tea</button>
            <section className="selectorSection">
              <section className="selectorLabel">Tea Family</section>
              <section className="selectorLabel">Type</section>
              <section className="selectorLabel">Flavor</section>
            </section>

            <section className="selectorSection">
              <select>
                <option value="0"></option>
                <option value="1">White</option>
                <option value="2">Black</option>
                <option value="3">Green</option>
                <option value="4">Oolong</option>
              </select>

              <select>
                <option value="0"></option>
                <option value="1">White</option>
                <option value="2">Black</option>
                <option value="3">Green</option>
                <option value="4">Oolong</option>
              </select>

              <select>
                <option value="0"></option>
                <option value="1">White</option>
                <option value="2">Black</option>
                <option value="3">Green</option>
                <option value="4">Oolong</option>
              </select>
            </section>
          </section>
        </main>
      </section>
    </section>
  )
}
