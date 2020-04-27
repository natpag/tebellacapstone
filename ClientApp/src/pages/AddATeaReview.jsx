import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import Logo from '../components/images/logo.png'
import '../custom.scss'
import { Link } from 'react-router-dom'
import Axios from 'axios'

export function AddATeaReview() {
  const [allTeas, setAllTeas] = useState()
  const [comment, setComment] = useState({})
  const [rating, setRating] = useState()
  const [selectedTea, setSelectedTea] = useState()

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

  const updateComment = e => {
    const key = e.target.name
    const value = e.target.value
    setComment(prevComment => {
      prevComment[key] = value
      return prevComment
    })
    console.log(comment)
  }

  const addReviewToApi = async () => {
    const resp = await Axios.post(
      '/api/Review',
      {
        TeaId: parseInt(selectedTea),
        Rating: parseInt(rating),
        Comment: comment['reviewBox'],
      },
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      }
    )
    if (resp.status === 201) {
      //do something
    } else {
      //do something else
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
                            onChange={e => setSelectedTea(e.target.value)}
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
                      <select onChange={e => setRating(e.target.value)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
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
                      <textarea
                        type="text"
                        rows="5"
                        cols="30"
                        name="reviewBox"
                        className="reviewBox"
                        onChange={updateComment}
                      />
                    </li>
                    <li>
                      <button onClick={addReviewToApi}>Save Review</button>
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
