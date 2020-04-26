import React from 'react'
import NavBar from '../components/NavBar'
import Logo from '../components/images/logo.png'
import '../custom.scss'

export function AddATea() {
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
                        <button>*</button> <label>Tea Name</label>
                      </li>
                      <li>
                        <select>
                          <option value="1">Earl Grey</option>
                        </select>
                      </li>
                    </ul>
                  </section>
                </section>

                <section>
                  <ul>
                    <label>Rating</label>
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
                      <label>Review</label>
                    </li>
                    <li>
                      <textarea />
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
