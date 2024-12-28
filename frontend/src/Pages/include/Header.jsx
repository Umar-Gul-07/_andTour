import React from 'react'

function Header() {
  return (
    <>
      <header className="main_header_arae">
        <div className="topbar-area  ">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <ul className="topbar-list">
                  <li>
                    <a href="/">
                      <i className="fab fa-facebook" />
                    </a>
                    <a href="/">
                      <i className="fab fa-twitter-square" />
                    </a>
                    <a href="/">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="/">
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span>+92 3065953957</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span>solotravel@pvtltd.gmail.com</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-6">
                <ul className="topbar-others-options">
                  <li>
                    <a href="/login">Login</a>
                  </li>
                  <li>
                    <a href="/register">Sign up</a>
                  </li>
                  <li>
                    <div className="dropdown language-option">
                      <button
                        className="dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="lang-name">English</span>
                      </button>
                      <div className="dropdown-menu language-dropdown-menu">
                        <a className="dropdown-item" href="/">
                          English
                        </a>
                        <a className="dropdown-item" href="/">
                          Arabic
                        </a>
                        <a className="dropdown-item" href="/">
                          French
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown language-option">
                      <button
                        className="dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="lang-name">USD</span>
                      </button>
                      <div className="dropdown-menu language-dropdown-menu">
                        <a className="dropdown-item" href="/">
                          USD
                        </a>
                        <a className="dropdown-item" href="/">
                          BD
                        </a>
                        <a className="dropdown-item" href="/">
                          URO
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>



        <div className="navbar-area">
          <div className="main-responsive-nav">
            <div className="container">
              <div className="main-responsive-menu">
                <div className="logo">
                  <a href="/">
                    <img src="assets/img/logo.png" alt="logo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="main-navbar">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <a className="navbar-brand" href="/">
                  <img src="assets/img/logo_black.png" alt="logo" />
                </a>
                <div
                  className="collapse navbar-collapse mean-menu"
                  id="navbarSupportedContent"
                  style={{ display: "block" }}
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a href="/" className="nav-link active">
                        Home

                      </a>

                    </li>
                    <li className="nav-item">
                      <a href="/tour" className="nav-link">
                        Tours

                      </a>

                    </li>

                    <li className="nav-item">
                      <a href="/hotel" className="nav-link">
                        Hotels
                        <i className="fas fa-angle-down" />
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a href="/room-details" className="nav-link">
                            Room Details
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="/apartment" className="nav-link">
                            Apartments
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="/bus" className="nav-link">
                            Bus
                          </a>
                        </li>

                      </ul>
                    </li>

                    <li className="nav-item">
                      <a href="/flight" className="nav-link">
                        Flights

                      </a>

                    </li>

                    <li className="nav-item">
                      <a href="/about" className="nav-link active">
                        About Us

                      </a>

                    </li>





                    <li className="nav-item">
                      <a href="/" className="nav-link">
                        News <i className="fas fa-angle-down" />
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a href="news.html" className="nav-link">
                            News
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="news-v2.html" className="nav-link">
                            News v2
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="news-v3.html" className="nav-link">
                            News v3
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="news-v4.html" className="nav-link">
                            News v4
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="news-details.html" className="nav-link">
                            News Details
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="news-details-v2.html" className="nav-link">
                            News Details v2
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a href="/" className="nav-link">
                        Contact <i className="fas fa-angle-down" />
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a href="contact.html" className="nav-link">
                            Contact v1
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="contact-v2.html" className="nav-link">
                            Contact v2
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <div className="others-options d-flex align-items-center">
                    <div className="option-item">
                      <a href="/" className="search-box">
                        <i className="bi bi-search" />
                      </a>
                    </div>
                    <div className="option-item">
                      <a href="become-vendor.html" className="btn  btn_navber">
                        Become a partner
                      </a>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="others-option-for-responsive">
            <div className="container">
              <div className="dot-menu">
                <div className="inner">
                  <div className="circle circle-one" />
                  <div className="circle circle-two" />
                  <div className="circle circle-three" />
                </div>
              </div>
              <div className="container">
                <div className="option-inner">
                  <div className="others-options d-flex align-items-center">
                    <div className="option-item">
                      <a href="/" className="search-box">
                        <i className="fas fa-search" />
                      </a>
                    </div>
                    <div className="option-item">
                      <a href="contact.html" className="btn  btn_navber">
                        Get free quote
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header