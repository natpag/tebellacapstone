import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import Logo from '../components/images/logo.png'
import '../custom.scss'
import Axios from 'axios'

export function TeaHistory() {
  const [teaInfo, setTeaInfo] = useState([])

  const populateTeaReview = async () => {
    const resp = await Axios.get('/api/Review', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
    console.log(resp.data)
    setTeaInfo(resp.data)
  }

  const toggleIsFavorite = async review => {
    review.isFavorite = !review.isFavorite
    const resp = await Axios.post('/api/Review/UpdateReview', review, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
    console.log(resp.data)
    populateTeaReview()
  }

  const deleteReview = async review => {
    const resp = await Axios.delete('/api/Review/' + review.id, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
    console.log(resp.data)
    populateTeaReview()
  }

  useEffect(() => {
    populateTeaReview()
  }, [])

  return (
    <section className="body">
      <section className="randomizePage">
        <header className="header">
          <NavBar />
        </header>
        <main>
          <section className="pageTitle">Your Tea Log</section>

          <section className="reviewBody">
            {teaInfo.map(result => {
              return (
                <section className="teaLogSection">
                  <section className="teaReviewBox">
                    <ul className="teaLogList">
                      <li className="favoritedTea">
                        <button
                          className="iconButton"
                          onClick={() => toggleIsFavorite(result)}
                        >
                          {result.isFavorite ? (
                            <i className="fas fa-heart"></i>
                          ) : (
                            <i className="far fa-heart"></i>
                          )}
                        </button>{' '}
                      </li>
                      <li className="nameLabel">{result.teaName}</li>
                      <li>Rating: {result.rating}</li>
                      <li>
                        <button
                          className="iconButton"
                          onClick={() => deleteReview(result)}
                        >
                          <i className="fas fa-times"></i>
                        </button>
                      </li>
                    </ul>
                    <section className="reviewSection">
                      {result.comment}
                    </section>
                  </section>
                </section>
              )
            })}
          </section>
        </main>
      </section>
    </section>
  )
}
