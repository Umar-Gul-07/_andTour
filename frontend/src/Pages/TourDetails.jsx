import React from 'react'
import { Helmet } from 'react-helmet'
import Title from './include/Title'

const TourDetails = () => {
  return (
    <>
    <Helmet><title>Tour Details</title></Helmet>
    <Title />

    <section id="tour_details_main" className="section_padding">
  <div className="container">
    <div className="row">
      <div className="col-lg-8">
        <div className="tour_details_leftside_wrapper">
          <div className="tour_details_heading_wrapper">
            <div className="tour_details_top_heading">
              <h2>Explore the evergreen forest</h2>
              <h5>
                <i className="fas fa-map-marker-alt" /> Amazon evergreen forest,
                Amazon.
              </h5>
            </div>
            <div className="tour_details_top_heading_right">
              <h4>Excellent</h4>
              <h6>4.8/5</h6>
              <p>(1214 reviewes)</p>
            </div>
          </div>
          <div className="tour_details_top_bottom">
            <div className="toru_details_top_bottom_item">
              <div className="tour_details_top_bottom_icon">
                <i className="fas fa-clock" />
              </div>
              <div className="tour_details_top_bottom_text">
                <h5>Duration</h5>
                <p>10 days</p>
              </div>
            </div>
            <div className="toru_details_top_bottom_item">
              <div className="tour_details_top_bottom_icon">
                <i className="fas fa-paw" />
              </div>
              <div className="tour_details_top_bottom_text">
                <h5>Tour type</h5>
                <p>Group tour</p>
              </div>
            </div>
            <div className="toru_details_top_bottom_item">
              <div className="tour_details_top_bottom_icon">
                <i className="fas fa-users" />
              </div>
              <div className="tour_details_top_bottom_text">
                <h5>Group size</h5>
                <p>50 people</p>
              </div>
            </div>
            <div className="toru_details_top_bottom_item">
              <div className="tour_details_top_bottom_icon">
                <i className="fas fa-map-marked" />
              </div>
              <div className="tour_details_top_bottom_text">
                <h5>Location</h5>
                <p>Amazon rain forest</p>
              </div>
            </div>
          </div>
          <div className="tour_details_img_wrapper">
            <div className="slider slider-for slick-initialized slick-slider">
              <div className="slick-list draggable">
                <div
                  className="slick-track"
                  style={{ opacity: 1, width: 5152 }}
                >
                  <div
                    className="slick-slide slick-current slick-active"
                    data-slick-index={0}
                    aria-hidden="false"
                    tabIndex={0}
                    style={{
                      width: 736,
                      position: "relative",
                      left: 0,
                      top: 0,
                      zIndex: 999,
                      opacity: 1
                    }}
                  >
                    <img src="assets/img/tour/big-img.png" alt="img" />
                  </div>
                  <div
                    className="slick-slide"
                    data-slick-index={1}
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{
                      width: 736,
                      position: "relative",
                      left: "-736px",
                      top: 0,
                      zIndex: 998,
                      opacity: 0
                    }}
                  >
                    <img src="assets/img/tour/big-img2.png" alt="img" />
                  </div>
                  <div
                    className="slick-slide"
                    data-slick-index={2}
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{
                      width: 736,
                      position: "relative",
                      left: "-1472px",
                      top: 0,
                      zIndex: 998,
                      opacity: 0
                    }}
                  >
                    <img src="assets/img/tour/big-img3.png" alt="img" />
                  </div>
                  <div
                    className="slick-slide"
                    data-slick-index={3}
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{
                      width: 736,
                      position: "relative",
                      left: "-2208px",
                      top: 0,
                      zIndex: 998,
                      opacity: 0
                    }}
                  >
                    <img src="assets/img/tour/big-img4.png" alt="img" />
                  </div>
                  <div
                    className="slick-slide"
                    data-slick-index={4}
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{
                      width: 736,
                      position: "relative",
                      left: "-2944px",
                      top: 0,
                      zIndex: 998,
                      opacity: 0
                    }}
                  >
                    <img src="assets/img/tour/big-img5.png" alt="img" />
                  </div>
                  <div
                    className="slick-slide"
                    data-slick-index={5}
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{
                      width: 736,
                      position: "relative",
                      left: "-3680px",
                      top: 0,
                      zIndex: 998,
                      opacity: 0
                    }}
                  >
                    <img src="assets/img/tour/big-img6.png" alt="img" />
                  </div>
                  <div
                    className="slick-slide"
                    data-slick-index={6}
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{
                      width: 736,
                      position: "relative",
                      left: "-4416px",
                      top: 0,
                      zIndex: 998,
                      opacity: 0
                    }}
                  >
                    <img src="assets/img/tour/big-img7.png" alt="img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="slider slider-nav slick-initialized slick-slider">
              <button
                className="slick-prev slick-arrow"
                aria-label="Previous"
                type="button"
                style={{ display: "inline-block" }}
              >
                Previous
              </button>
              <div className="slick-list draggable">
                <div
                  className="slick-track"
                  style={{
                    opacity: 1,
                    width: 2812,
                    transform: "translate3d(-740px, 0px, 0px)"
                  }}
                >
                  <div
                    className="slick-slide slick-cloned"
                    data-slick-index={-5}
                    id=""
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{ width: 148 }}
                  >
                    <img src="assets/img/tour/small3-img.png" alt="img" />
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    data-slick-index={-4}
                    id=""
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{ width: 148 }}
                  >
                    <img src="assets/img/tour/small4-img.png" alt="img" />
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    data-slick-index={-3}
                    id=""
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{ width: 148 }}
                  >
                    <img src="assets/img/tour/small5-img.png" alt="img" />
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    data-slick-index={-2}
                    id=""
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{ width: 148 }}
                  >
                    <img src="assets/img/tour/small6-img.png" alt="img" />
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    data-slick-index={-1}
                    id=""
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{ width: 148 }}
                  >
                    <img src="assets/img/tour/small7-img.png" alt="img" />
                  </div>
                  <div
                    className="slick-slide slick-current slick-active"
                    data-slick-index={0}
                    aria-hidden="false"
                    tabIndex={0}
                    style={{ width: 148 }}
                  >
                    <img src="assets/img/tour/small1-img.png" alt="img" />
                  </div>
                  <div
                    className="slick-slide slick-active"
                    data-slick-index={1}
                    aria-hidden="false"
                    tabIndex={0}
                    style={{ width: 148 }}
                  >
                    <img src="assets/img/tour/small2-img.png" alt="img" />
                  </div>
                  <div
                    className="slick-slide slick-active"
                    data-slick-index={2}
                    aria-hidden="false"
                    tabIndex={0}
                    style={{ width: 148 }}
                  >
                    <img src="assets/img/tour/small3-img.png" alt="img" />
                  </div>
                  <div
                    className="slick-slide slick-active"
                    data-slick-index={3}
                    aria-hidden="false"
                    tabIndex={0}
                    style={{ width: 148 }}
                  >
                    <img src="assets/img/tour/small4-img.png" alt="img" />
                  </div>
                  <div
                    className="slick-slide slick-active"
                    data-slick-index={4}
                    aria-hidden="false"
                    tabIndex={0}
                    style={{ width: 148 }}
                  >
                    <img src="assets/img/tour/small5-img.png" alt="img" />
                  </div>
                  <div
                    className="slick-slide"
                    data-slick-index={5}
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{ width: 148 }}
                  >
                    <img src="assets/img/tour/small6-img.png" alt="img" />
                  </div>
                  <div
                    className="slick-slide"
                    data-slick-index={6}
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{ width: 148 }}
                  >
                    <img src="assets/img/tour/small7-img.png" alt="img" />
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    data-slick-index={7}
                    id=""
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{ width: 148 }}
                  >
                    <img src="assets/img/tour/small1-img.png" alt="img" />
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    data-slick-index={8}
                    id=""
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{ width: 148 }}
                  >
                    <img src="assets/img/tour/small2-img.png" alt="img" />
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    data-slick-index={9}
                    id=""
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{ width: 148 }}
                  >
                    <img src="assets/img/tour/small3-img.png" alt="img" />
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    data-slick-index={10}
                    id=""
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{ width: 148 }}
                  >
                    <img src="assets/img/tour/small4-img.png" alt="img" />
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    data-slick-index={11}
                    id=""
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{ width: 148 }}
                  >
                    <img src="assets/img/tour/small5-img.png" alt="img" />
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    data-slick-index={12}
                    id=""
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{ width: 148 }}
                  >
                    <img src="assets/img/tour/small6-img.png" alt="img" />
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    data-slick-index={13}
                    id=""
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{ width: 148 }}
                  >
                    <img src="assets/img/tour/small7-img.png" alt="img" />
                  </div>
                </div>
              </div>
              <button
                className="slick-next slick-arrow"
                aria-label="Next"
                type="button"
                style={{ display: "inline-block" }}
              >
                Next
              </button>
            </div>
          </div>
          <div className="tour_details_boxed">
            <h3 className="heading_theme">Overview</h3>
            <div className="tour_details_boxed_inner">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est.
              </p>
              <p>
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr, sed diam nonumy eirmod.
              </p>
              <ul>
                <li>
                  <i className="fas fa-circle" />
                  Buffet breakfast as per the Itinerary
                </li>
                <li>
                  <i className="fas fa-circle" />
                  Visit eight villages showcasing Polynesian culture
                </li>
                <li>
                  <i className="fas fa-circle" />
                  Complimentary Camel safari, Bonfire, and Cultural Dance at
                  Camp
                </li>
                <li>
                  <i className="fas fa-circle" />
                  All toll tax, parking, fuel, and driver allowances
                </li>
                <li>
                  <i className="fas fa-circle" />
                  Comfortable and hygienic vehicle (SUV/Sedan) for sightseeing
                  on all days as per the itinerary.
                </li>
              </ul>
            </div>
          </div>
          <div className="tour_details_boxed">
            <h3 className="heading_theme">Itinerary</h3>
            <div className="tour_details_boxed_inner">
              <div className="accordion" id="accordionExample">
                <div className="accordion_flex_area">
                  <div className="accordion_left_side">
                    <h5>Day 1</h5>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Stet clita kasd gubergren, no sea takimata sanctus est
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="accordion_itinerary_list">
                          <ul>
                            <li>
                              <i className="fas fa-circle" />
                              There are many variations of passages of Lorem
                              Ipsum available, but the majority have suffered
                              alteration in some form
                            </li>
                            <li>
                              <i className="fas fa-circle" />
                              Contrary to popular belief, Lorem Ipsum is not
                              simply random
                            </li>
                            <li>
                              <i className="fas fa-circle" />
                              Many desktop publishing packages and web page
                              editors now use
                            </li>
                            <li>
                              <i className="fas fa-circle" />
                              Lorem Ipsum is that it has a more-or-less normal
                              distribution of letters, to using 'Content here
                            </li>
                            <li>
                              <i className="fas fa-circle" />
                              The standard chunk of Lorem Ipsum used since the
                              1500s is reproduced below for those interested.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion_flex_area">
                  <div className="accordion_left_side">
                    <h5>Day 2</h5>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Stet clita kasd gubergren, no sea takimata sanctus est
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="accordion_itinerary_list">
                          <ul>
                            <li>
                              <i className="fas fa-circle" />
                              There are many variations of passages of Lorem
                              Ipsum available, but the majority have suffered
                              alteration in some form
                            </li>
                            <li>
                              <i className="fas fa-circle" />
                              Lorem Ipsum is that it has a more-or-less normal
                              distribution of letters, to using 'Content here
                            </li>
                            <li>
                              <i className="fas fa-circle" />
                              The standard chunk of Lorem Ipsum used since the
                              1500s is reproduced below for those interested.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion_flex_area">
                  <div className="accordion_left_side">
                    <h5>Day 3</h5>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Stet clita kasd gubergren, no sea takimata sanctus est
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="accordion_itinerary_list">
                          <ul>
                            <li>
                              <i className="fas fa-circle" />
                              Contrary to popular belief, Lorem Ipsum is not
                              simply random
                            </li>
                            <li>
                              <i className="fas fa-circle" />
                              Many desktop publishing packages and web page
                              editors now use
                            </li>
                            <li>
                              <i className="fas fa-circle" />
                              Lorem Ipsum is that it has a more-or-less normal
                              distribution of letters, to using 'Content here
                            </li>
                            <li>
                              <i className="fas fa-circle" />
                              The standard chunk of Lorem Ipsum used since the
                              1500s is reproduced below for those interested.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion_flex_area">
                  <div className="accordion_left_side">
                    <h5>Day 4</h5>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Stet clita kasd gubergren, no sea takimata sanctus est
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="accordion_itinerary_list">
                          <ul>
                            <li>
                              <i className="fas fa-circle" />
                              There are many variations of passages of Lorem
                              Ipsum available, but the majority have suffered
                              alteration in some form
                            </li>
                            <li>
                              <i className="fas fa-circle" />
                              Contrary to popular belief, Lorem Ipsum is not
                              simply random
                            </li>
                            <li>
                              <i className="fas fa-circle" />
                              Many desktop publishing packages and web page
                              editors now use
                            </li>
                            <li>
                              <i className="fas fa-circle" />
                              The standard chunk of Lorem Ipsum used since the
                              1500s is reproduced below for those interested.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tour_details_boxed">
            <h3 className="heading_theme">Included/Excluded</h3>
            <div className="tour_details_boxed_inner">
              <p>
                Stet clitaStet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod.
              </p>
              <ul>
                <li>
                  <i className="fas fa-circle" />
                  Buffet breakfast as per the Itinerary
                </li>
                <li>
                  <i className="fas fa-circle" />
                  Visit eight villages showcasing Polynesian culture
                </li>
                <li>
                  <i className="fas fa-circle" />
                  Complimentary Camel safari, Bonfire, and Cultural Dance at
                  Camp
                </li>
                <li>
                  <i className="fas fa-circle" />
                  All toll tax, parking, fuel, and driver allowances
                </li>
                <li>
                  <i className="fas fa-circle" />
                  Comfortable and hygienic vehicle (SUV/Sedan) for sightseeing
                  on all days as per the itinerary.
                </li>
              </ul>
            </div>
          </div>
          <div className="tour_details_boxed">
            <h3 className="heading_theme">Tours location</h3>
            <div className="map_area">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.6962663570607!2d89.56355961427838!3d22.813715829827952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff901efac79b59%3A0x5be01a1bc0dc7eba!2sAnd+IT!5e0!3m2!1sen!2sbd!4v1557901943656!5m2!1sen!2sbd" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="tour_details_right_sidebar_wrapper">
          <div className="tour_detail_right_sidebar">
            <div className="tour_details_right_boxed">
              <div className="tour_details_right_box_heading">
                <h3>Standard package</h3>
              </div>
              <div className="valid_date_area">
                <div className="valid_date_area_one">
                  <h5>Valid from</h5>
                  <p>01 Feb 2022</p>
                </div>
                <div className="valid_date_area_one">
                  <h5>Valid till</h5>
                  <p>15 Feb 2022</p>
                </div>
              </div>
              <div className="tour_package_details_bar_list">
                <h5>Package details</h5>
                <ul>
                  <li>
                    <i className="fas fa-circle" />
                    Buffet breakfast as per the Itinerary
                  </li>
                  <li>
                    <i className="fas fa-circle" />
                    Visit eight villages showcasing Polynesian culture
                  </li>
                  <li>
                    <i className="fas fa-circle" />
                    Complimentary Camel safari, Bonfire,
                  </li>
                  <li>
                    <i className="fas fa-circle" />
                    All toll tax, parking, fuel, and driver allowances
                  </li>
                  <li>
                    <i className="fas fa-circle" />
                    Comfortable and hygienic vehicle
                  </li>
                </ul>
              </div>
              <div className="tour_package_details_bar_price">
                <h5>Price</h5>
                <div className="tour_package_bar_price">
                  <h6>
                    <del>$ 35,500</del>
                  </h6>
                  <h3>
                    $ 30,500 <sub>/Per serson</sub>{" "}
                  </h3>
                </div>
              </div>
            </div>
            <div className="tour_select_offer_bar_bottom">
              <button
                className="btn btn_theme btn_md w-100"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                Select offer
              </button>
            </div>
          </div>
          <div className="tour_detail_right_sidebar">
            <div className="tour_details_right_boxed">
              <div className="tour_details_right_box_heading">
                <h3>Deluxe package</h3>
              </div>
              <div className="valid_date_area">
                <div className="valid_date_area_one">
                  <h5>Valid from</h5>
                  <p>01 Feb 2022</p>
                </div>
                <div className="valid_date_area_one">
                  <h5>Valid till</h5>
                  <p>15 Feb 2022</p>
                </div>
              </div>
              <div className="tour_package_details_bar_list">
                <h5>Package details</h5>
                <ul>
                  <li>
                    <i className="fas fa-circle" />
                    Buffet breakfast as per the Itinerary
                  </li>
                  <li>
                    <i className="fas fa-circle" />
                    Visit eight villages showcasing Polynesian culture
                  </li>
                  <li>
                    <i className="fas fa-circle" />
                    Complimentary Camel safari, Bonfire,
                  </li>
                  <li>
                    <i className="fas fa-circle" />
                    All toll tax, parking, fuel, and driver allowances
                  </li>
                  <li>
                    <i className="fas fa-circle" />
                    Comfortable and hygienic vehicle
                  </li>
                </ul>
              </div>
              <div className="tour_package_details_bar_price">
                <h5>Price</h5>
                <div className="tour_package_bar_price">
                  <h6>
                    <del>$ 35,500</del>
                  </h6>
                  <h3>
                    $ 30,500 <sub>/Per serson</sub>{" "}
                  </h3>
                </div>
              </div>
            </div>
            <div className="tour_select_offer_bar_bottom">
              <button
                className="btn btn_theme btn_md w-100"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                Select offer
              </button>
            </div>
          </div>
          <div className="tour_detail_right_sidebar">
            <div className="tour_details_right_boxed">
              <div className="tour_details_right_box_heading">
                <h3>Super deluxe package</h3>
              </div>
              <div className="valid_date_area">
                <div className="valid_date_area_one">
                  <h5>Valid from</h5>
                  <p>01 Feb 2022</p>
                </div>
                <div className="valid_date_area_one">
                  <h5>Valid till</h5>
                  <p>15 Feb 2022</p>
                </div>
              </div>
              <div className="tour_package_details_bar_list">
                <h5>Package details</h5>
                <ul>
                  <li>
                    <i className="fas fa-circle" />
                    Buffet breakfast as per the Itinerary
                  </li>
                  <li>
                    <i className="fas fa-circle" />
                    Visit eight villages showcasing Polynesian culture
                  </li>
                  <li>
                    <i className="fas fa-circle" />
                    Complimentary Camel safari, Bonfire,
                  </li>
                  <li>
                    <i className="fas fa-circle" />
                    All toll tax, parking, fuel, and driver allowances
                  </li>
                  <li>
                    <i className="fas fa-circle" />
                    Comfortable and hygienic vehicle
                  </li>
                </ul>
              </div>
              <div className="tour_package_details_bar_price">
                <h5>Price</h5>
                <div className="tour_package_bar_price">
                  <h6>
                    <del>$ 35,500</del>
                  </h6>
                  <h3>
                    $ 30,500 <sub>/Per serson</sub>{" "}
                  </h3>
                </div>
              </div>
            </div>
            <div className="tour_select_offer_bar_bottom">
              <button
                className="btn btn_theme btn_md w-100"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                Select offer
              </button>
            </div>
          </div>
          <div className="tour_detail_right_sidebar">
            <div className="tour_details_right_boxed">
              <div className="tour_details_right_box_heading">
                <h3>Why choose us</h3>
              </div>
              <div className="tour_package_details_bar_list first_child_padding_none">
                <ul>
                  <li>
                    <i className="fas fa-circle" />
                    Buffet breakfast as per the Itinerary
                  </li>
                  <li>
                    <i className="fas fa-circle" />
                    Visit eight villages showcasing Polynesian culture
                  </li>
                  <li>
                    <i className="fas fa-circle" />
                    Complimentary Camel safari, Bonfire,
                  </li>
                  <li>
                    <i className="fas fa-circle" />
                    All toll tax, parking, fuel, and driver allowances
                  </li>
                  <li>
                    <i className="fas fa-circle" />
                    Comfortable and hygienic vehicle
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-8">
        <div className="write_your_review_wrapper">
          <h3 className="heading_theme">Write your review</h3>
          <div className="write_review_inner_boxed">
            <form action="!#" id="news_comment_form">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-froup">
                    <input
                      type="text"
                      className="form-control bg_input"
                      placeholder="Enter full name"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-froup">
                    <input
                      type="text"
                      className="form-control bg_input"
                      placeholder="Enter email address"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-froup">
                    <textarea
                      rows={6}
                      placeholder="Write your comments"
                      className="form-control bg_input"
                      defaultValue={""}
                    />
                  </div>
                  <div className="comment_form_submit">
                    <button className="btn btn_theme btn_md">
                      Post comment
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <div className="all_review_wrapper">
          <h3 className="heading_theme">All review</h3>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="all_review_box">
          <div className="all_review_date_area">
            <div className="all_review_date">
              <h5>08 Dec, 2021</h5>
            </div>
            <div className="all_review_star">
              <h5>Excellent</h5>
              <div className="review_star_all">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
          <div className="all_review_text">
            <img src="assets/img/review/review1.png" alt="img" />
            <h4>Manresh Chandra</h4>
            <p>
              " Loved the overall tour for all 6 days covering jaipur jodhpur
              and jaisalmer. worth ur money for sure. thanks. Driver was very
              good and polite and safe driving for all 6 days. on time pickup
              and drop overall. Thanks for it. "
            </p>
          </div>
          <div className="all_review_small_img">
            <div className="all_review_small_img_item">
              <img src="assets/img/review/review-small1.png" alt="img" />
            </div>
            <div className="all_review_small_img_item">
              <img src="assets/img/review/review-small2.png" alt="img" />
            </div>
            <div className="all_review_small_img_item">
              <img src="assets/img/review/review-small3.png" alt="img" />
            </div>
            <div className="all_review_small_img_item">
              <img src="assets/img/review/review-small4.png" alt="img" />
            </div>
            <div className="all_review_small_img_item">
              <img src="assets/img/review/review-small5.png" alt="img" />
            </div>
            <div className="all_review_small_img_item">
              <h5>+5</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="all_review_box">
          <div className="all_review_date_area">
            <div className="all_review_date">
              <h5>08 Dec, 2021</h5>
            </div>
            <div className="all_review_star">
              <h5>Excellent</h5>
              <div className="review_star_all">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
          <div className="all_review_text">
            <img src="assets/img/review/review2.png" alt="img" />
            <h4>Michel falak</h4>
            <p>
              " Loved the overall tour for all 6 days covering jaipur jodhpur
              and jaisalmer. worth ur money for sure. thanks. Driver was very
              good and polite and safe driving for all 6 days. on time pickup
              and drop overall. Thanks for it. "
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="all_review_box">
          <div className="all_review_date_area">
            <div className="all_review_date">
              <h5>08 Dec, 2021</h5>
            </div>
            <div className="all_review_star">
              <h5>Excellent</h5>
              <div className="review_star_all">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
          <div className="all_review_text">
            <img src="assets/img/review/review3.png" alt="img" />
            <h4>Chester dals</h4>
            <p>
              " Loved the overall tour for all 6 days covering jaipur jodhpur
              and jaisalmer. worth ur money for sure. thanks. Driver was very
              good and polite and safe driving for all 6 days. on time pickup
              and drop overall. Thanks for it. "
            </p>
          </div>
          <div className="all_review_small_img">
            <div className="all_review_small_img_item">
              <img src="assets/img/review/review-small1.png" alt="img" />
            </div>
            <div className="all_review_small_img_item">
              <img src="assets/img/review/review-small2.png" alt="img" />
            </div>
            <div className="all_review_small_img_item">
              <img src="assets/img/review/review-small5.png" alt="img" />
            </div>
            <div className="all_review_small_img_item">
              <h5>+15</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="all_review_box">
          <div className="all_review_date_area">
            <div className="all_review_date">
              <h5>08 Dec, 2021</h5>
            </div>
            <div className="all_review_star">
              <h5>Excellent</h5>
              <div className="review_star_all">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
          <div className="all_review_text">
            <img src="assets/img/review/review4.png" alt="img" />
            <h4>Casper mike</h4>
            <p>
              " Loved the overall tour for all 6 days covering jaipur jodhpur
              and jaisalmer. worth ur money for sure. thanks. Driver was very
              good and polite and safe driving for all 6 days. on time pickup
              and drop overall. Thanks for it. "
            </p>
          </div>
          <div className="all_review_small_img">
            <div className="all_review_small_img_item">
              <img src="assets/img/review/review-small4.png" alt="img" />
            </div>
            <div className="all_review_small_img_item">
              <img src="assets/img/review/review-small5.png" alt="img" />
            </div>
            <div className="all_review_small_img_item">
              <h5>+19</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="all_review_box">
          <div className="all_review_date_area">
            <div className="all_review_date">
              <h5>08 Dec, 2021</h5>
            </div>
            <div className="all_review_star">
              <h5>Excellent</h5>
              <div className="review_star_all">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
          <div className="all_review_text">
            <img src="assets/img/review/review5.png" alt="img" />
            <h4>Jason bruno</h4>
            <p>
              " Loved the overall tour for all 6 days covering jaipur jodhpur
              and jaisalmer. worth ur money for sure. thanks. Driver was very
              good and polite and safe driving for all 6 days. on time pickup
              and drop overall. Thanks for it. "
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



<section id="related_tour_packages" className="section_padding_bottom">
  <div className="container">
    {/* Section Heading */}
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="section_heading_center">
          <h2>Related tour packages</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <div className="promotional_tour_slider owl-theme owl-carousel dot_style owl-loaded owl-drag">
          <div className="owl-stage-outer">
            <div
              className="owl-stage"
              style={{
                transform: "translate3d(-1689px, 0px, 0px)",
                transition: "1s",
                width: 3941
              }}
            >
              <div
                className="owl-item cloned"
                style={{ width: "271.5px", marginRight: 10 }}
              >
                <div className="theme_common_box_two img_hover">
                  <div className="theme_two_box_img">
                    <img src="assets/img/tab-img/hotel3.png" alt="img" />
                    <p>
                      <i className="fas fa-map-marker-alt" />
                      Kualalampur
                    </p>
                  </div>
                  <div className="theme_two_box_content">
                    <h4>
                      <a href="#!">Hotel kualalampur</a>
                    </h4>
                    <p>
                      <span className="review_rating">4.8/5 Excellent</span>{" "}
                      <span className="review_count">(1214 reviewes)</span>
                    </p>
                    <h3>
                      $99.00 <span>Price starts from</span>
                    </h3>
                  </div>
                </div>
              </div>
              <div
                className="owl-item cloned"
                style={{ width: "271.5px", marginRight: 10 }}
              >
                <div className="theme_common_box_two img_hover">
                  <div className="theme_two_box_img">
                    <img src="assets/img/tab-img/hotel4.png" alt="img" />
                    <p>
                      <i className="fas fa-map-marker-alt" />
                      Mariana island
                    </p>
                    <div className="discount_tab">
                      <span>50%</span>
                    </div>
                  </div>
                  <div className="theme_two_box_content">
                    <h4>
                      <a href="#!">Hotel deluxe</a>
                    </h4>
                    <p>
                      <span className="review_rating">4.8/5 Excellent</span>{" "}
                      <span className="review_count">(1214 reviewes)</span>
                    </p>
                    <h3>
                      $99.00 <span>Price starts from</span>
                    </h3>
                  </div>
                </div>
              </div>
              <div
                className="owl-item cloned"
                style={{ width: "271.5px", marginRight: 10 }}
              >
                <div className="theme_common_box_two img_hover">
                  <div className="theme_two_box_img">
                    <img src="assets/img/tab-img/hotel6.png" alt="img" />
                    <p>
                      <i className="fas fa-map-marker-alt" />
                      Beach view
                    </p>
                  </div>
                  <div className="theme_two_box_content">
                    <h4>
                      <a href="#!">Thailand grand suit</a>
                    </h4>
                    <p>
                      <span className="review_rating">4.8/5 Excellent</span>{" "}
                      <span className="review_count">(1214 reviewes)</span>
                    </p>
                    <h3>
                      $99.00 <span>Price starts from</span>
                    </h3>
                  </div>
                </div>
              </div>
              <div
                className="owl-item cloned"
                style={{ width: "271.5px", marginRight: 10 }}
              >
                <div className="theme_common_box_two img_hover">
                  <div className="theme_two_box_img">
                    <img src="assets/img/tab-img/hotel7.png" alt="img" />
                    <p>
                      <i className="fas fa-map-marker-alt" />
                      Long island
                    </p>
                  </div>
                  <div className="theme_two_box_content">
                    <h4>
                      <a href="#!">Zefi resort and spa</a>
                    </h4>
                    <p>
                      <span className="review_rating">4.8/5 Excellent</span>{" "}
                      <span className="review_count">(1214 reviewes)</span>
                    </p>
                    <h3>
                      $99.00 <span>Price starts from</span>
                    </h3>
                  </div>
                </div>
              </div>
              <div
                className="owl-item"
                style={{ width: "271.5px", marginRight: 10 }}
              >
                <div className="theme_common_box_two img_hover">
                  <div className="theme_two_box_img">
                    <img src="assets/img/tab-img/hotel1.png" alt="img" />
                    <p>
                      <i className="fas fa-map-marker-alt" />
                      New beach, Thailand
                    </p>
                  </div>
                  <div className="theme_two_box_content">
                    <h4>
                      <a href="#!">Kantua hotel, Thailand</a>
                    </h4>
                    <p>
                      <span className="review_rating">4.8/5 Excellent</span>{" "}
                      <span className="review_count">(1214 reviewes)</span>
                    </p>
                    <h3>
                      $99.00 <span>Price starts from</span>
                    </h3>
                  </div>
                </div>
              </div>
              <div
                className="owl-item"
                style={{ width: "271.5px", marginRight: 10 }}
              >
                <div className="theme_common_box_two img_hover">
                  <div className="theme_two_box_img">
                    <img src="assets/img/tab-img/hotel2.png" alt="img" />
                    <p>
                      <i className="fas fa-map-marker-alt" />
                      Indonesia
                    </p>
                    <div className="discount_tab">
                      <span>50%</span>
                    </div>
                  </div>
                  <div className="theme_two_box_content">
                    <h4>
                      <a href="#!">Hotel paradise international</a>
                    </h4>
                    <p>
                      <span className="review_rating">4.8/5 Excellent</span>{" "}
                      <span className="review_count">(1214 reviewes)</span>
                    </p>
                    <h3>
                      $99.00 <span>Price starts from</span>
                    </h3>
                  </div>
                </div>
              </div>
              <div
                className="owl-item active"
                style={{ width: "271.5px", marginRight: 10 }}
              >
                <div className="theme_common_box_two img_hover">
                  <div className="theme_two_box_img">
                    <img src="assets/img/tab-img/hotel3.png" alt="img" />
                    <p>
                      <i className="fas fa-map-marker-alt" />
                      Kualalampur
                    </p>
                  </div>
                  <div className="theme_two_box_content">
                    <h4>
                      <a href="#!">Hotel kualalampur</a>
                    </h4>
                    <p>
                      <span className="review_rating">4.8/5 Excellent</span>{" "}
                      <span className="review_count">(1214 reviewes)</span>
                    </p>
                    <h3>
                      $99.00 <span>Price starts from</span>
                    </h3>
                  </div>
                </div>
              </div>
              <div
                className="owl-item active"
                style={{ width: "271.5px", marginRight: 10 }}
              >
                <div className="theme_common_box_two img_hover">
                  <div className="theme_two_box_img">
                    <img src="assets/img/tab-img/hotel4.png" alt="img" />
                    <p>
                      <i className="fas fa-map-marker-alt" />
                      Mariana island
                    </p>
                    <div className="discount_tab">
                      <span>50%</span>
                    </div>
                  </div>
                  <div className="theme_two_box_content">
                    <h4>
                      <a href="#!">Hotel deluxe</a>
                    </h4>
                    <p>
                      <span className="review_rating">4.8/5 Excellent</span>{" "}
                      <span className="review_count">(1214 reviewes)</span>
                    </p>
                    <h3>
                      $99.00 <span>Price starts from</span>
                    </h3>
                  </div>
                </div>
              </div>
              <div
                className="owl-item active"
                style={{ width: "271.5px", marginRight: 10 }}
              >
                <div className="theme_common_box_two img_hover">
                  <div className="theme_two_box_img">
                    <img src="assets/img/tab-img/hotel6.png" alt="img" />
                    <p>
                      <i className="fas fa-map-marker-alt" />
                      Beach view
                    </p>
                  </div>
                  <div className="theme_two_box_content">
                    <h4>
                      <a href="#!">Thailand grand suit</a>
                    </h4>
                    <p>
                      <span className="review_rating">4.8/5 Excellent</span>{" "}
                      <span className="review_count">(1214 reviewes)</span>
                    </p>
                    <h3>
                      $99.00 <span>Price starts from</span>
                    </h3>
                  </div>
                </div>
              </div>
              <div
                className="owl-item active"
                style={{ width: "271.5px", marginRight: 10 }}
              >
                <div className="theme_common_box_two img_hover">
                  <div className="theme_two_box_img">
                    <img src="assets/img/tab-img/hotel7.png" alt="img" />
                    <p>
                      <i className="fas fa-map-marker-alt" />
                      Long island
                    </p>
                  </div>
                  <div className="theme_two_box_content">
                    <h4>
                      <a href="#!">Zefi resort and spa</a>
                    </h4>
                    <p>
                      <span className="review_rating">4.8/5 Excellent</span>{" "}
                      <span className="review_count">(1214 reviewes)</span>
                    </p>
                    <h3>
                      $99.00 <span>Price starts from</span>
                    </h3>
                  </div>
                </div>
              </div>
              <div
                className="owl-item cloned"
                style={{ width: "271.5px", marginRight: 10 }}
              >
                <div className="theme_common_box_two img_hover">
                  <div className="theme_two_box_img">
                    <img src="assets/img/tab-img/hotel1.png" alt="img" />
                    <p>
                      <i className="fas fa-map-marker-alt" />
                      New beach, Thailand
                    </p>
                  </div>
                  <div className="theme_two_box_content">
                    <h4>
                      <a href="#!">Kantua hotel, Thailand</a>
                    </h4>
                    <p>
                      <span className="review_rating">4.8/5 Excellent</span>{" "}
                      <span className="review_count">(1214 reviewes)</span>
                    </p>
                    <h3>
                      $99.00 <span>Price starts from</span>
                    </h3>
                  </div>
                </div>
              </div>
              <div
                className="owl-item cloned"
                style={{ width: "271.5px", marginRight: 10 }}
              >
                <div className="theme_common_box_two img_hover">
                  <div className="theme_two_box_img">
                    <img src="assets/img/tab-img/hotel2.png" alt="img" />
                    <p>
                      <i className="fas fa-map-marker-alt" />
                      Indonesia
                    </p>
                    <div className="discount_tab">
                      <span>50%</span>
                    </div>
                  </div>
                  <div className="theme_two_box_content">
                    <h4>
                      <a href="#!">Hotel paradise international</a>
                    </h4>
                    <p>
                      <span className="review_rating">4.8/5 Excellent</span>{" "}
                      <span className="review_count">(1214 reviewes)</span>
                    </p>
                    <h3>
                      $99.00 <span>Price starts from</span>
                    </h3>
                  </div>
                </div>
              </div>
              <div
                className="owl-item cloned"
                style={{ width: "271.5px", marginRight: 10 }}
              >
                <div className="theme_common_box_two img_hover">
                  <div className="theme_two_box_img">
                    <img src="assets/img/tab-img/hotel3.png" alt="img" />
                    <p>
                      <i className="fas fa-map-marker-alt" />
                      Kualalampur
                    </p>
                  </div>
                  <div className="theme_two_box_content">
                    <h4>
                      <a href="#!">Hotel kualalampur</a>
                    </h4>
                    <p>
                      <span className="review_rating">4.8/5 Excellent</span>{" "}
                      <span className="review_count">(1214 reviewes)</span>
                    </p>
                    <h3>
                      $99.00 <span>Price starts from</span>
                    </h3>
                  </div>
                </div>
              </div>
              <div
                className="owl-item cloned"
                style={{ width: "271.5px", marginRight: 10 }}
              >
                <div className="theme_common_box_two img_hover">
                  <div className="theme_two_box_img">
                    <img src="assets/img/tab-img/hotel4.png" alt="img" />
                    <p>
                      <i className="fas fa-map-marker-alt" />
                      Mariana island
                    </p>
                    <div className="discount_tab">
                      <span>50%</span>
                    </div>
                  </div>
                  <div className="theme_two_box_content">
                    <h4>
                      <a href="#!">Hotel deluxe</a>
                    </h4>
                    <p>
                      <span className="review_rating">4.8/5 Excellent</span>{" "}
                      <span className="review_count">(1214 reviewes)</span>
                    </p>
                    <h3>
                      $99.00 <span>Price starts from</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="owl-nav disabled">
            <button type="button" role="presentation" className="owl-prev">
              <span aria-label="Previous">‹</span>
            </button>
            <button type="button" role="presentation" className="owl-next">
              <span aria-label="Next">›</span>
            </button>
          </div>
          <div className="owl-dots">
            <button role="button" className="owl-dot active">
              <span />
            </button>
            <button role="button" className="owl-dot">
              <span />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



<section id="cta_area">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-7">
        <div className="cta_left">
          <div className="cta_icon">
            <img src="assets/img/common/email.png" alt="icon" />
          </div>
          <div className="cta_content">
            <h4>Get the latest news and offers</h4>
            <h2>Subscribe to our newsletter</h2>
          </div>
        </div>
      </div>
      <div className="col-lg-5">
        <div className="cat_form">
          <form id="cta_form_wrappper">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your mail address"
              />
              <button className="btn btn_theme btn_md" type="button">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>


    </>
  )
}

export default TourDetails