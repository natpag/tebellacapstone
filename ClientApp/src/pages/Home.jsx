import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import Logo from '../components/images/logo.png'
import '../custom.scss'
import { Link } from 'react-router-dom'
import Axios from 'axios'

export function Home() {
  const [randomTea, setRandomTea] = useState()

  const pullRandomTea = async () => {
    const resp = await Axios.get('/api/Teas/random')
    console.log(resp.data)
    setRandomTea(resp.data)
  }

  const getRandomTeaName = () => {
    if (randomTea) {
      return randomTea.name
    }
  }

  const getRandomTeaDescription = () => {
    if (randomTea) {
      return randomTea.description
    }
  }

  const getRandomTeaImageUrl = () => {
    if (randomTea) {
      var url = randomTea.url
      return url
    } else {
      return ''
    }
  }

  const getRandomTeaFamily = () => {
    if (randomTea) {
      if (randomTea.teaFamily.name == 'Green') {
        return 'G'
      } else if (randomTea.teaFamily.name == 'Black') {
        return 'B'
      } else if (randomTea.teaFamily.name == 'Oolong') {
        return 'O'
      } else if (randomTea.teaFamily.name == 'White') {
        return 'W'
      }
    } else {
      return ''
    }
  }

  const getTeaFamilyColor = () => {
    if (randomTea) {
      if (randomTea.teaFamily.name == 'Green') {
        var bgG = 'green'
        return bgG
      } else if (randomTea.teaFamily.name == 'Black') {
        var bgB = 'black'
        return bgB
      } else if (randomTea.teaFamily.name == 'Oolong') {
        var bgO = 'oolong'
        return bgO
      } else if (randomTea.teaFamily.name == 'White') {
        var bgW = 'white'
        return bgW
      }
    } else {
      return ''
    }
  }

  useEffect(() => {
    pullRandomTea()
  }, [])

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

          <button className="randomizer" onClick={pullRandomTea}>
            Random Tea
          </button>

          <section className="specialTeaRandomizer">
            <button className="specialRandomizer">Special Random Tea</button>
            <section className="selectorLabelSection">
              <section className="selectorLabel">Tea Family</section>
              <section className="selectorLabel">Type</section>
              <section className="selectorLabel">Flavor</section>
            </section>

            <section className="selectorSection">
              <select className="teaFamilySelector">
                <option value="0"></option>
                <option value="1">White</option>
                <option value="2">Black</option>
                <option value="3">Green</option>
                <option value="4">Oolong</option>
              </select>

              <select className="teaFamilyType">
                <option value="0"></option>
                <option value="1">Flavored</option>
                <option value="2">Organic</option>
                <option value="3">Reserved</option>
                <option value="4">Seasonal</option>
                <option value="4">Scented</option>
                <option value="4">Traditional</option>
              </select>

              <select className="teaFamilyFlavor">
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
              <section className="teaFamilyLabel">
                {' '}
                {getRandomTeaFamily()}{' '}
              </section>
              <section
                className={getTeaFamilyColor() + ' teaFamilyColor'}
              ></section>
              <section className="teaNameLabel">{getRandomTeaName()}</section>
            </section>
            <div className="teaImage">
              {randomTea ? (
                <div
                  className="tea-image"
                  style={{
                    backgroundImage: `url(${require('../components/images/' +
                      getRandomTeaImageUrl())})`,
                  }}
                ></div>
              ) : null}
            </div>
          </section>
          <div>
            <section className="description">
              {getRandomTeaDescription()}
            </section>
          </div>
        </main>
      </section>
    </section>
  )
}
