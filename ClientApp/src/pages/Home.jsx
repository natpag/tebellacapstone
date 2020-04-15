import React from 'react'
import NavBar from '../components/NavBar'
import Logo from '../components/images/logo.png'
import '../custom.scss'
import { TeaHistory } from './TeaHistory'

export function Home() {
  var url = 'blackEarlGreyLavender.jpg'
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

          <section className="specialTeaRandomizer">
            <button className="specialRandomizer">Special Random Tea</button>
            <section className="selectorLabelSection">
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
                <option value="1">Flavored</option>
                <option value="2">Organic</option>
                <option value="3">Reserved</option>
                <option value="4">Seasonal</option>
                <option value="4">Scented</option>
                <option value="4">Traditional</option>
              </select>

              <select>
                <option value="0"></option>
                <option value="1">Citrusy</option>
                <option value="2">Dessert</option>
                <option value="3">Earthy</option>
                <option value="4">Floral</option>
                <option value="4">Fruity</option>
                <option value="4">Malty</option>
                <option value="4">Minty</option>
                <option value="4">Nutty</option>
                <option value="4">Spicy</option>
                <option value="4">Sweet</option>
              </select>
            </section>
          </section>
          <section className="teaBox">
            <section className="teaHeader">
              <section className="teaFamilyLabel"> {/* TeaFamily */} B</section>
              <section className={'teaFamilyColor'}>
                {/* TeaFamilyColor */}.
              </section>
              <section className="teaNameLabel">
                {/* TeaName */} Earl Grey Lavender
              </section>
            </section>
            <div className="teaImage">
              <div
                className="tea-image"
                style={{
                  backgroundImage: `url(${require('../components/images/' +
                    url)})`,
                }}
              ></div>
              {/* <img
                 className="teaImg"
                src={blackEarlGreyLavender}
                alt="image"
              /> */}
            </div>
          </section>
        </main>
      </section>
    </section>
  )
}
