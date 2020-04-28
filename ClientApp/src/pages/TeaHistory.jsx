import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import Logo from '../components/images/logo.png'
import '../custom.scss'
import Axios from 'axios'

export function TeaHistory() {
  const [teaInfo, setTeaInfo] = useState([])
  const [isFavorite, setIsFavorite] = useState(false)

  const populateTeaReview = async () => {
    const resp = await Axios.get('/api/Review', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
    console.log(resp.data)
    setTeaInfo(resp.data)
  }
  // const toggleIsFavorite = async () => {
  //   setIsFavorite(!isFavorite)
  //   const resp = await Axios.post(
  //     '/api/Review/FavoriteTea',
  //     {
  //       IsFavorite: isFavorite,
  //       TeaId: parseInt(selectedTea),
  //     },
  //     {
  //       headers: {
  //         Authorization: 'Bearer ' + localStorage.getItem('token'),
  //       },
  //     }
  //   )
  //   console.log(resp.data)
  // }

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
                <section className="accountSection">
                  <section className="teaReviewBox">
                    <ul className="teaLogList">
                      {/* <li className="favoritedTea">
                        <button onClick={toggleIsFavorite}>
                          {isFavorite ? (
                            <i className="fas fa-heart"></i>
                          ) : (
                            <i className="far fa-heart"></i>
                          )}
                        </button> }
                          </li>*/}
                      <li className="nameLabel">{result.teaName}</li>
                      <li>Rating: {result.rating}</li>
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
