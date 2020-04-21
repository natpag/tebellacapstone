import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import Logo from '../components/images/logo.png'
import '../custom.scss'
import { Link } from 'react-router-dom'
import Axios from 'axios'

export function Home() {
  const [randomTea, setRandomTea] = useState()
  const [referenceData, setReferenceData] = useState()
  const [selectedTeaFamily, setSelectedTeaFamily] = useState()
  const [selectedTeaType, setSelectedTeaType] = useState()
  const [selectedTeaFlavor, setSelectedTeaFlavor] = useState()
  const [specialRandomTea, setSpecialRandomTea] = useState()

  const pullRandomTea = async () => {
    const resp = await Axios.get('/api/Teas/random')
    console.log(resp.data)
    setRandomTea(resp.data)
  }

  const getSpecialRandomTea = async () => {
    const resp = await Axios.post('api/Teas/randomTeaFilter', {
      TeaFamilyId: parseInt(selectedTeaFamily),
      TeaFlavorId: parseInt(selectedTeaFlavor),
      TeaTypeId: parseInt(selectedTeaType),
    })
    console.log(resp.data)
    setRandomTea(resp.data)
  }

  const getReferenceData = async () => {
    const resp = await Axios.get('/api/Teas/referenceData')
    console.log(resp.data)
    setReferenceData(resp.data)
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

  const getTeaFamilies = () => {
    if (referenceData) {
      return referenceData.teaFamily
    } else {
      return []
    }
  }

  const getTeaTypes = () => {
    if (referenceData) {
      return referenceData.teaType
    } else {
      return []
    }
  }

  const getTeaFlavors = () => {
    if (referenceData) {
      return referenceData.teaFlavor
    } else {
      return []
    }
  }

  useEffect(() => {
    pullRandomTea()
    getReferenceData()
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
            <button className="specialRandomizer" onClick={getSpecialRandomTea}>
              Special Random Tea
            </button>
            <section className="selectorLabelSection">
              <section className="selectorLabel">Tea Family</section>
              <section className="selectorLabel">Type</section>
              <section className="selectorLabel">Flavor</section>
            </section>

            <section className="selectorSection">
              <select
                className="teaFamilySelector"
                onChange={e => setSelectedTeaFamily(e.target.value)}
              >
                <option value=""></option>
                {getTeaFamilies().map(teafamily => {
                  return (
                    <option key={teafamily.id} value={teafamily.id}>
                      {teafamily.name}
                    </option>
                  )
                })}
              </select>

              <select
                className="teaFamilyType"
                onChange={e => setSelectedTeaType(e.target.value)}
              >
                <option value=""></option>
                {getTeaTypes().map(teatype => {
                  return (
                    <option key={teatype.id} value={teatype.id}>
                      {teatype.name}
                    </option>
                  )
                })}
              </select>

              <select
                className="teaFamilyFlavor"
                onChange={e => setSelectedTeaFlavor(e.target.value)}
              >
                <option value=""></option>
                {getTeaFlavors().map(teaflavor => {
                  return (
                    <option key={teaflavor.id} value={teaflavor.id}>
                      {teaflavor.name}
                    </option>
                  )
                })}
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
