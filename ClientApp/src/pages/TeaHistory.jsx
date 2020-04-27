import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import Logo from '../components/images/logo.png'
import '../custom.scss'
import Axios from 'axios'

export function TeaHistory() {
  const [teaInfo, setTeaInfo] = useState({})

  const populateTeaReview = async () => {
    const resp = await Axios.get('/api/Review', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
    console.log(resp.data)
    setTeaInfo(resp.data)
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
          <section className="pageTitle">Tea Log</section>

          <section className="reviewBody">
            <section className="accountSection">
              <section className="teaReviewBox">
                <ul className="teaLogList">
                  <li>*</li>
                  <li>Tea Name</li>
                  <li>Rating</li>
                </ul>
                <section className="reviewSection">Review</section>
              </section>
            </section>
          </section>
        </main>
      </section>
    </section>
  )
}
