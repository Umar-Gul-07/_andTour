import React from 'react'
import { Helmet } from 'react-helmet'

const Title = () => {
  return (
    <>
    <Helmet><title>title</title></Helmet>

    <section id="common_banner">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="common_bannner_text">
          <h2>Tour search result</h2>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <span>
                <i className="fas fa-circle" />
              </span>{" "}
              Tours
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

    
    </>
  )
}

export default Title