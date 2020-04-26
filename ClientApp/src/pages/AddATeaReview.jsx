import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import Logo from '../components/images/logo.png'
import '../custom.scss'
import { Link } from 'react-router-dom'
import Axios from 'axios'

export function AddATeaReview() {
  const [allTeas, setAllTeas] = useState()
  const [review, setReview] = useState({})

  const getAllTeas = async () => {
    const resp = await Axios.get('/api/Teas')
    console.log(resp.data)
    setAllTeas(resp.data)
  }

  const getDropTeas = () => {
    if (allTeas) {
      return allTeas
    } else {
      return []
    }
  }

  useEffect(() => {
    getAllTeas()
  }, [])

  return (
    <section className="body">
      <section className="randomizePage">
        <header className="header">
          <NavBar />
        </header>
        <main>
          <section className="pageTitle">LOG A TEA</section>

          <section className="accountBody">
            <section className="accountSection">
              <section className="inputField">
                <section>
                  <section>
                    <ul>
                      <li>
                        <button>*</button> <label htmlFor="">Tea Name</label>
                      </li>
                      <li>
                        <section>
                          <select
                            className="teaNameSelector"
                            onChange={e => e.target.value}
                          >
                            <option value=""></option>
                            {getDropTeas().map(teaName => {
                              return (
                                <option key={teaName.id} value={teaName.id}>
                                  {teaName.name}
                                </option>
                              )
                            })}
                          </select>
                        </section>
                      </li>
                    </ul>
                  </section>
                </section>

                <section>
                  <ul>
                    <label htmlFor="">Rating</label>
                    <li>
                      <select>
                        <option value="1">1</option>
                      </select>
                      /5
                    </li>
                  </ul>
                </section>

                <section>
                  <ul>
                    <li>
                      <label htmlFor="">Review</label>
                    </li>
                    <li>
                      <textarea />
                    </li>
                    <li>
                      <button>Save Review</button>
                    </li>
                  </ul>
                </section>
              </section>
            </section>
          </section>
        </main>
      </section>
    </section>
  )
}
