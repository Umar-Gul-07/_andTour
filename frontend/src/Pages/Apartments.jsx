import React from 'react'
import { Helmet } from 'react-helmet'
import Title from './include/Title'

const Apartments = () => {
    return (
        <>
            <Helmet><title>Apartments</title></Helmet>
            <Title />

            <section id="theme_search_form_tour">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="theme_search_form_area">
                                <div className="theme_search_form_tabbtn">
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link active"
                                                id="flights-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#flights"
                                                type="button"
                                                role="tab"
                                                aria-controls="flights"
                                                aria-selected="true"
                                            >
                                                <i className="fas fa-plane-departure" />
                                                Flights
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="tours-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#tours"
                                                type="button"
                                                role="tab"
                                                aria-controls="tours"
                                                aria-selected="false"
                                            >
                                                <i className="fas fa-globe" />
                                                Tours
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="hotels-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#hotels"
                                                type="button"
                                                role="tab"
                                                aria-controls="hotels"
                                                aria-selected="false"
                                            >
                                                <i className="fas fa-hotel" />
                                                Hotels
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="visa-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#visa-application"
                                                type="button"
                                                role="tab"
                                                aria-controls="visa"
                                                aria-selected="false"
                                            >
                                                <i className="fas fa-passport" /> Visa
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="apartments-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#apartments"
                                                type="button"
                                                role="tab"
                                                aria-controls="apartments"
                                                aria-selected="false"
                                            >
                                                <i className="fas fa-building" /> Apartments
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="bus-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#bus"
                                                type="button"
                                                role="tab"
                                                aria-controls="bus"
                                                aria-selected="false"
                                            >
                                                <i className="fas fa-bus" /> Bus
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="cruise-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#cruise"
                                                type="button"
                                                role="tab"
                                                aria-controls="cruise"
                                                aria-selected="false"
                                            >
                                                <i className="fas fa-ship" /> Cruise
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-content" id="myTabContent">
                                    <div
                                        className="tab-pane fade show active"
                                        id="flights"
                                        role="tabpanel"
                                        aria-labelledby="flights-tab"
                                    >
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="flight_categories_search">
                                                    <ul className="nav nav-tabs" role="tablist">
                                                        <li className="nav-item" role="presentation">
                                                            <button
                                                                className="nav-link active"
                                                                id="oneway-tab"
                                                                data-bs-toggle="tab"
                                                                data-bs-target="#oneway_flight"
                                                                type="button"
                                                                role="tab"
                                                                aria-controls="oneway_flight"
                                                                aria-selected="true"
                                                            >
                                                                One Way
                                                            </button>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <button
                                                                className="nav-link"
                                                                id="roundtrip-tab"
                                                                data-bs-toggle="tab"
                                                                data-bs-target="#roundtrip"
                                                                type="button"
                                                                role="tab"
                                                                aria-controls="roundtrip"
                                                                aria-selected="false"
                                                            >
                                                                Roundtrip
                                                            </button>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <button
                                                                className="nav-link"
                                                                id="multi_city-tab"
                                                                data-bs-toggle="tab"
                                                                data-bs-target="#multi_city"
                                                                type="button"
                                                                role="tab"
                                                                aria-controls="multi_city"
                                                                aria-selected="false"
                                                            >
                                                                Multi city
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-content" id="myTabContent1">
                                            <div
                                                className="tab-pane fade show active"
                                                id="oneway_flight"
                                                role="tabpanel"
                                                aria-labelledby="oneway-tab"
                                            >
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="oneway_search_form">
                                                            <form action="#!">
                                                                <div className="row">
                                                                    <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                                                        <div className="flight_Search_boxed">
                                                                            <p>From</p>
                                                                            <input type="text" defaultValue="New York" />
                                                                            <span>
                                                                                JFK - John F. Kennedy International...
                                                                            </span>
                                                                            <div className="plan_icon_posation">
                                                                                <i className="fas fa-plane-departure" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                                                        <div className="flight_Search_boxed">
                                                                            <p>To</p>
                                                                            <input type="text" defaultValue="London " />
                                                                            <span>LCY, London city airport </span>
                                                                            <div className="plan_icon_posation">
                                                                                <i className="fas fa-plane-arrival" />
                                                                            </div>
                                                                            <div className="range_plan">
                                                                                <i className="fas fa-exchange-alt" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4  col-md-6 col-sm-12 col-12">
                                                                        <div className="form_search_date">
                                                                            <div className="flight_Search_boxed date_flex_area">
                                                                                <div className="Journey_date">
                                                                                    <p>Journey date</p>
                                                                                    <input
                                                                                        type="date"
                                                                                        defaultValue="2022-05-05"
                                                                                    />
                                                                                    <span>Thursday</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-2  col-md-6 col-sm-12 col-12">
                                                                        <div className="flight_Search_boxed dropdown_passenger_area">
                                                                            <p>Passenger, Class </p>
                                                                            <div className="dropdown">
                                                                                <button
                                                                                    className="dropdown-toggle final-count"
                                                                                    data-toggle="dropdown"
                                                                                    type="button"
                                                                                    id="dropdownMenuButton1"
                                                                                    data-bs-toggle="dropdown"
                                                                                    aria-expanded="false"
                                                                                >
                                                                                    0 Passenger
                                                                                </button>
                                                                                <div
                                                                                    className="dropdown-menu dropdown_passenger_info"
                                                                                    aria-labelledby="dropdownMenuButton1"
                                                                                >
                                                                                    <div className="traveller-calulate-persons">
                                                                                        <div className="passengers">
                                                                                            <h6>Passengers</h6>
                                                                                            <div className="passengers-types">
                                                                                                <div className="passengers-type">
                                                                                                    <div className="text">
                                                                                                        <span className="count pcount">
                                                                                                            2
                                                                                                        </span>
                                                                                                        <div className="type-label">
                                                                                                            <p>Adult</p>
                                                                                                            <span>12+ yrs</span>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className="button-set">
                                                                                                        <button
                                                                                                            type="button"
                                                                                                            className="btn-add"
                                                                                                        >
                                                                                                            <i className="fas fa-plus" />
                                                                                                        </button>
                                                                                                        <button
                                                                                                            type="button"
                                                                                                            className="btn-subtract"
                                                                                                        >
                                                                                                            <i className="fas fa-minus" />
                                                                                                        </button>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="passengers-type">
                                                                                                    <div className="text">
                                                                                                        <span className="count ccount">
                                                                                                            0
                                                                                                        </span>
                                                                                                        <div className="type-label">
                                                                                                            <p className="fz14 mb-xs-0">
                                                                                                                Children
                                                                                                            </p>
                                                                                                            <span>
                                                                                                                2 - Less than 12 yrs
                                                                                                            </span>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className="button-set">
                                                                                                        <button
                                                                                                            type="button"
                                                                                                            className="btn-add-c"
                                                                                                        >
                                                                                                            <i className="fas fa-plus" />
                                                                                                        </button>
                                                                                                        <button
                                                                                                            type="button"
                                                                                                            className="btn-subtract-c"
                                                                                                        >
                                                                                                            <i className="fas fa-minus" />
                                                                                                        </button>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="passengers-type">
                                                                                                    <div className="text">
                                                                                                        <span className="count incount">
                                                                                                            0
                                                                                                        </span>
                                                                                                        <div className="type-label">
                                                                                                            <p className="fz14 mb-xs-0">
                                                                                                                Infant
                                                                                                            </p>
                                                                                                            <span>Less than 2 yrs</span>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className="button-set">
                                                                                                        <button
                                                                                                            type="button"
                                                                                                            className="btn-add-in"
                                                                                                        >
                                                                                                            <i className="fas fa-plus" />
                                                                                                        </button>
                                                                                                        <button
                                                                                                            type="button"
                                                                                                            className="btn-subtract-in"
                                                                                                        >
                                                                                                            <i className="fas fa-minus" />
                                                                                                        </button>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="cabin-selection">
                                                                                            <h6>Cabin Class</h6>
                                                                                            <div className="cabin-list">
                                                                                                <button
                                                                                                    type="button"
                                                                                                    className="label-select-btn"
                                                                                                >
                                                                                                    <span className="muiButton-label">
                                                                                                        Economy
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    type="button"
                                                                                                    className="label-select-btn active"
                                                                                                >
                                                                                                    <span className="muiButton-label">
                                                                                                        Business
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    type="button"
                                                                                                    className="label-select-btn"
                                                                                                >
                                                                                                    <span className="MuiButton-label">
                                                                                                        First Class{" "}
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <span>Business</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="top_form_search_button">
                                                                        <button className="btn btn_theme btn_md">
                                                                            Search
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="tab-pane fade"
                                                id="roundtrip"
                                                role="tabpanel"
                                                aria-labelledby="roundtrip-tab"
                                            >
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="oneway_search_form">
                                                            <form action="#!">
                                                                <div className="row">
                                                                    <div className="col-lg-3  col-md-6 col-sm-12 col-12">
                                                                        <div className="flight_Search_boxed">
                                                                            <p>From</p>
                                                                            <input type="text" defaultValue="New York" />
                                                                            <span>
                                                                                JFK - John F. Kennedy International...
                                                                            </span>
                                                                            <div className="plan_icon_posation">
                                                                                <i className="fas fa-plane-departure" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-3  col-md-6 col-sm-12 col-12">
                                                                        <div className="flight_Search_boxed">
                                                                            <p>To</p>
                                                                            <input type="text" defaultValue="London " />
                                                                            <span>LCY, London city airport </span>
                                                                            <div className="plan_icon_posation">
                                                                                <i className="fas fa-plane-arrival" />
                                                                            </div>
                                                                            <div className="range_plan">
                                                                                <i className="fas fa-exchange-alt" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4  col-md-6 col-sm-12 col-12">
                                                                        <div className="form_search_date">
                                                                            <div className="flight_Search_boxed date_flex_area">
                                                                                <div className="Journey_date">
                                                                                    <p>Journey date</p>
                                                                                    <input
                                                                                        type="date"
                                                                                        defaultValue="2022-05-05"
                                                                                    />
                                                                                    <span>Thursday</span>
                                                                                </div>
                                                                                <div className="Journey_date">
                                                                                    <p>Return date</p>
                                                                                    <input
                                                                                        type="date"
                                                                                        defaultValue="2022-05-08"
                                                                                    />
                                                                                    <span>Saturday</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-2  col-md-6 col-sm-12 col-12">
                                                                        <div className="flight_Search_boxed dropdown_passenger_area">
                                                                            <p>Passenger, Class </p>
                                                                            <div className="dropdown">
                                                                                <button
                                                                                    className="dropdown-toggle final-count"
                                                                                    data-toggle="dropdown"
                                                                                    type="button"
                                                                                    id="dropdownMenuButton1"
                                                                                    data-bs-toggle="dropdown"
                                                                                    aria-expanded="false"
                                                                                >
                                                                                    0 Passenger
                                                                                </button>
                                                                                <div
                                                                                    className="dropdown-menu dropdown_passenger_info"
                                                                                    aria-labelledby="dropdownMenuButton1"
                                                                                >
                                                                                    <div className="traveller-calulate-persons">
                                                                                        <div className="passengers">
                                                                                            <h6>Passengers</h6>
                                                                                            <div className="passengers-types">
                                                                                                <div className="passengers-type">
                                                                                                    <div className="text">
                                                                                                        <span className="count pcount">
                                                                                                            2
                                                                                                        </span>
                                                                                                        <div className="type-label">
                                                                                                            <p>Adult</p>
                                                                                                            <span>12+ yrs</span>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className="button-set">
                                                                                                        <button
                                                                                                            type="button"
                                                                                                            className="btn-add"
                                                                                                        >
                                                                                                            <i className="fas fa-plus" />
                                                                                                        </button>
                                                                                                        <button
                                                                                                            type="button"
                                                                                                            className="btn-subtract"
                                                                                                        >
                                                                                                            <i className="fas fa-minus" />
                                                                                                        </button>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="passengers-type">
                                                                                                    <div className="text">
                                                                                                        <span className="count ccount">
                                                                                                            0
                                                                                                        </span>
                                                                                                        <div className="type-label">
                                                                                                            <p className="fz14 mb-xs-0">
                                                                                                                Children
                                                                                                            </p>
                                                                                                            <span>
                                                                                                                2 - Less than 12 yrs
                                                                                                            </span>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className="button-set">
                                                                                                        <button
                                                                                                            type="button"
                                                                                                            className="btn-add-c"
                                                                                                        >
                                                                                                            <i className="fas fa-plus" />
                                                                                                        </button>
                                                                                                        <button
                                                                                                            type="button"
                                                                                                            className="btn-subtract-c"
                                                                                                        >
                                                                                                            <i className="fas fa-minus" />
                                                                                                        </button>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="passengers-type">
                                                                                                    <div className="text">
                                                                                                        <span className="count incount">
                                                                                                            0
                                                                                                        </span>
                                                                                                        <div className="type-label">
                                                                                                            <p className="fz14 mb-xs-0">
                                                                                                                Infant
                                                                                                            </p>
                                                                                                            <span>Less than 2 yrs</span>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className="button-set">
                                                                                                        <button
                                                                                                            type="button"
                                                                                                            className="btn-add-in"
                                                                                                        >
                                                                                                            <i className="fas fa-plus" />
                                                                                                        </button>
                                                                                                        <button
                                                                                                            type="button"
                                                                                                            className="btn-subtract-in"
                                                                                                        >
                                                                                                            <i className="fas fa-minus" />
                                                                                                        </button>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="cabin-selection">
                                                                                            <h6>Cabin Class</h6>
                                                                                            <div className="cabin-list">
                                                                                                <button
                                                                                                    type="button"
                                                                                                    className="label-select-btn"
                                                                                                >
                                                                                                    <span className="muiButton-label">
                                                                                                        Economy
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    type="button"
                                                                                                    className="label-select-btn active"
                                                                                                >
                                                                                                    <span className="muiButton-label">
                                                                                                        Business
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    type="button"
                                                                                                    className="label-select-btn"
                                                                                                >
                                                                                                    <span className="MuiButton-label">
                                                                                                        First Class{" "}
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <span>Business</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="top_form_search_button">
                                                                    <button className="btn btn_theme btn_md">
                                                                        Search
                                                                    </button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="tab-pane fade"
                                                id="multi_city"
                                                role="tabpanel"
                                                aria-labelledby="multi_city-tab"
                                            >
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="oneway_search_form">
                                                            <form action="#!">
                                                                <div className="multi_city_form_wrapper">
                                                                    <div className="multi_city_form">
                                                                        <div className="row">
                                                                            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                                                                <div className="flight_Search_boxed">
                                                                                    <p>From</p>
                                                                                    <input
                                                                                        type="text"
                                                                                        defaultValue="New York"
                                                                                    />
                                                                                    <span>
                                                                                        DAC, Hazrat Shahajalal International...
                                                                                    </span>
                                                                                    <div className="plan_icon_posation">
                                                                                        <i className="fas fa-plane-departure" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                                                                <div className="flight_Search_boxed">
                                                                                    <p>To</p>
                                                                                    <input type="text" defaultValue="London " />
                                                                                    <span>LCY, London city airport </span>
                                                                                    <div className="plan_icon_posation">
                                                                                        <i className="fas fa-plane-arrival" />
                                                                                    </div>
                                                                                    <div className="range_plan">
                                                                                        <i className="fas fa-exchange-alt" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                                                                <div className="form_search_date">
                                                                                    <div className="flight_Search_boxed date_flex_area">
                                                                                        <div className="Journey_date">
                                                                                            <p>Journey date</p>
                                                                                            <input
                                                                                                type="date"
                                                                                                defaultValue="2022-05-05"
                                                                                            />
                                                                                            <span>Thursday</span>
                                                                                        </div>
                                                                                        <div className="Journey_date">
                                                                                            <p>Return date</p>
                                                                                            <input
                                                                                                type="date"
                                                                                                defaultValue="2022-05-10"
                                                                                            />
                                                                                            <span>Saturday</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-2  col-md-6 col-sm-12 col-12">
                                                                                <div className="flight_Search_boxed dropdown_passenger_area">
                                                                                    <p>Passenger, Class </p>
                                                                                    <div className="dropdown">
                                                                                        <button
                                                                                            className="dropdown-toggle final-count"
                                                                                            data-toggle="dropdown"
                                                                                            type="button"
                                                                                            id="dropdownMenuButton1"
                                                                                            data-bs-toggle="dropdown"
                                                                                            aria-expanded="false"
                                                                                        >
                                                                                            0 Passenger
                                                                                        </button>
                                                                                        <div
                                                                                            className="dropdown-menu dropdown_passenger_info"
                                                                                            aria-labelledby="dropdownMenuButton1"
                                                                                        >
                                                                                            <div className="traveller-calulate-persons">
                                                                                                <div className="passengers">
                                                                                                    <h6>Passengers</h6>
                                                                                                    <div className="passengers-types">
                                                                                                        <div className="passengers-type">
                                                                                                            <div className="text">
                                                                                                                <span className="count pcount">
                                                                                                                    2
                                                                                                                </span>
                                                                                                                <div className="type-label">
                                                                                                                    <p>Adult</p>
                                                                                                                    <span>12+ yrs</span>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div className="button-set">
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    className="btn-add"
                                                                                                                >
                                                                                                                    <i className="fas fa-plus" />
                                                                                                                </button>
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    className="btn-subtract"
                                                                                                                >
                                                                                                                    <i className="fas fa-minus" />
                                                                                                                </button>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className="passengers-type">
                                                                                                            <div className="text">
                                                                                                                <span className="count ccount">
                                                                                                                    0
                                                                                                                </span>
                                                                                                                <div className="type-label">
                                                                                                                    <p className="fz14 mb-xs-0">
                                                                                                                        Children
                                                                                                                    </p>
                                                                                                                    <span>
                                                                                                                        2 - Less than 12 yrs
                                                                                                                    </span>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div className="button-set">
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    className="btn-add-c"
                                                                                                                >
                                                                                                                    <i className="fas fa-plus" />
                                                                                                                </button>
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    className="btn-subtract-c"
                                                                                                                >
                                                                                                                    <i className="fas fa-minus" />
                                                                                                                </button>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className="passengers-type">
                                                                                                            <div className="text">
                                                                                                                <span className="count incount">
                                                                                                                    0
                                                                                                                </span>
                                                                                                                <div className="type-label">
                                                                                                                    <p className="fz14 mb-xs-0">
                                                                                                                        Infant
                                                                                                                    </p>
                                                                                                                    <span>Less than 2 yrs</span>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div className="button-set">
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    className="btn-add-in"
                                                                                                                >
                                                                                                                    <i className="fas fa-plus" />
                                                                                                                </button>
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    className="btn-subtract-in"
                                                                                                                >
                                                                                                                    <i className="fas fa-minus" />
                                                                                                                </button>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="cabin-selection">
                                                                                                    <h6>Cabin Class</h6>
                                                                                                    <div className="cabin-list">
                                                                                                        <button
                                                                                                            type="button"
                                                                                                            className="label-select-btn"
                                                                                                        >
                                                                                                            <span className="muiButton-label">
                                                                                                                Economy
                                                                                                            </span>
                                                                                                        </button>
                                                                                                        <button
                                                                                                            type="button"
                                                                                                            className="label-select-btn active"
                                                                                                        >
                                                                                                            <span className="muiButton-label">
                                                                                                                Business
                                                                                                            </span>
                                                                                                        </button>
                                                                                                        <button
                                                                                                            type="button"
                                                                                                            className="label-select-btn"
                                                                                                        >
                                                                                                            <span className="MuiButton-label">
                                                                                                                First Class{" "}
                                                                                                            </span>
                                                                                                        </button>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <span>Business</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="multi_city_form">
                                                                        <div className="row">
                                                                            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                                                                <div className="flight_Search_boxed">
                                                                                    <p>From</p>
                                                                                    <input
                                                                                        type="text"
                                                                                        defaultValue="New York"
                                                                                    />
                                                                                    <span>
                                                                                        DAC, Hazrat Shahajalal International...
                                                                                    </span>
                                                                                    <div className="plan_icon_posation">
                                                                                        <i className="fas fa-plane-departure" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                                                                <div className="flight_Search_boxed">
                                                                                    <p>To</p>
                                                                                    <input type="text" defaultValue="London " />
                                                                                    <span>LCY, London city airport </span>
                                                                                    <div className="plan_icon_posation">
                                                                                        <i className="fas fa-plane-arrival" />
                                                                                    </div>
                                                                                    <div className="range_plan">
                                                                                        <i className="fas fa-exchange-alt" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                                                                <div className="form_search_date">
                                                                                    <div className="flight_Search_boxed date_flex_area">
                                                                                        <div className="Journey_date">
                                                                                            <p>Journey date</p>
                                                                                            <input
                                                                                                type="date"
                                                                                                defaultValue="2022-05-05"
                                                                                            />
                                                                                            <span>Thursday</span>
                                                                                        </div>
                                                                                        <div className="Journey_date">
                                                                                            <p>Return date</p>
                                                                                            <input
                                                                                                type="date"
                                                                                                defaultValue="2022-05-12"
                                                                                            />
                                                                                            <span>Saturday</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-2  col-md-6 col-sm-12 col-12">
                                                                                <div className="flight_Search_boxed dropdown_passenger_area">
                                                                                    <p>Passenger, Class </p>
                                                                                    <div className="dropdown">
                                                                                        <button
                                                                                            className="dropdown-toggle final-count"
                                                                                            data-toggle="dropdown"
                                                                                            type="button"
                                                                                            id="dropdownMenuButton1"
                                                                                            data-bs-toggle="dropdown"
                                                                                            aria-expanded="false"
                                                                                        >
                                                                                            0 Passenger
                                                                                        </button>
                                                                                        <div
                                                                                            className="dropdown-menu dropdown_passenger_info"
                                                                                            aria-labelledby="dropdownMenuButton1"
                                                                                        >
                                                                                            <div className="traveller-calulate-persons">
                                                                                                <div className="passengers">
                                                                                                    <h6>Passengers</h6>
                                                                                                    <div className="passengers-types">
                                                                                                        <div className="passengers-type">
                                                                                                            <div className="text">
                                                                                                                <span className="count pcount">
                                                                                                                    2
                                                                                                                </span>
                                                                                                                <div className="type-label">
                                                                                                                    <p>Adult</p>
                                                                                                                    <span>12+ yrs</span>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div className="button-set">
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    className="btn-add"
                                                                                                                >
                                                                                                                    <i className="fas fa-plus" />
                                                                                                                </button>
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    className="btn-subtract"
                                                                                                                >
                                                                                                                    <i className="fas fa-minus" />
                                                                                                                </button>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className="passengers-type">
                                                                                                            <div className="text">
                                                                                                                <span className="count ccount">
                                                                                                                    0
                                                                                                                </span>
                                                                                                                <div className="type-label">
                                                                                                                    <p className="fz14 mb-xs-0">
                                                                                                                        Children
                                                                                                                    </p>
                                                                                                                    <span>
                                                                                                                        2 - Less than 12 yrs
                                                                                                                    </span>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div className="button-set">
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    className="btn-add-c"
                                                                                                                >
                                                                                                                    <i className="fas fa-plus" />
                                                                                                                </button>
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    className="btn-subtract-c"
                                                                                                                >
                                                                                                                    <i className="fas fa-minus" />
                                                                                                                </button>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className="passengers-type">
                                                                                                            <div className="text">
                                                                                                                <span className="count incount">
                                                                                                                    0
                                                                                                                </span>
                                                                                                                <div className="type-label">
                                                                                                                    <p className="fz14 mb-xs-0">
                                                                                                                        Infant
                                                                                                                    </p>
                                                                                                                    <span>Less than 2 yrs</span>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div className="button-set">
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    className="btn-add-in"
                                                                                                                >
                                                                                                                    <i className="fas fa-plus" />
                                                                                                                </button>
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    className="btn-subtract-in"
                                                                                                                >
                                                                                                                    <i className="fas fa-minus" />
                                                                                                                </button>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="cabin-selection">
                                                                                                    <h6>Cabin Class</h6>
                                                                                                    <div className="cabin-list">
                                                                                                        <button
                                                                                                            type="button"
                                                                                                            className="label-select-btn"
                                                                                                        >
                                                                                                            <span className="muiButton-label">
                                                                                                                Economy
                                                                                                            </span>
                                                                                                        </button>
                                                                                                        <button
                                                                                                            type="button"
                                                                                                            className="label-select-btn active"
                                                                                                        >
                                                                                                            <span className="muiButton-label">
                                                                                                                Business
                                                                                                            </span>
                                                                                                        </button>
                                                                                                        <button
                                                                                                            type="button"
                                                                                                            className="label-select-btn"
                                                                                                        >
                                                                                                            <span className="MuiButton-label">
                                                                                                                First Class{" "}
                                                                                                            </span>
                                                                                                        </button>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <span>Business</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-lg-12">
                                                                        <div className="add_multy_form">
                                                                            <button type="button" id="addMulticityRow">
                                                                                + Add another flight
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="top_form_search_button">
                                                                    <button className="btn btn_theme btn_md">
                                                                        Search
                                                                    </button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="tours"
                                        role="tabpanel"
                                        aria-labelledby="tours-tab"
                                    >
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="tour_search_form">
                                                    <form action="#!">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                                                <div className="flight_Search_boxed">
                                                                    <p>Destination</p>
                                                                    <input
                                                                        type="text"
                                                                        placeholder="Where are you going?"
                                                                    />
                                                                    <span>Where are you going?</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                                                <div className="form_search_date">
                                                                    <div className="flight_Search_boxed date_flex_area">
                                                                        <div className="Journey_date">
                                                                            <p>Journey date</p>
                                                                            <input type="date" defaultValue="2022-05-03" />
                                                                            <span>Thursday</span>
                                                                        </div>
                                                                        <div className="Journey_date">
                                                                            <p>Return date</p>
                                                                            <input type="date" defaultValue="2022-05-05" />
                                                                            <span>Thursday</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-2  col-md-6 col-sm-12 col-12">
                                                                <div className="flight_Search_boxed dropdown_passenger_area">
                                                                    <p>Passenger, Class </p>
                                                                    <div className="dropdown">
                                                                        <button
                                                                            className="dropdown-toggle final-count"
                                                                            data-toggle="dropdown"
                                                                            type="button"
                                                                            id="dropdownMenuButton1"
                                                                            data-bs-toggle="dropdown"
                                                                            aria-expanded="false"
                                                                        >
                                                                            0 Passenger
                                                                        </button>
                                                                        <div
                                                                            className="dropdown-menu dropdown_passenger_info"
                                                                            aria-labelledby="dropdownMenuButton1"
                                                                        >
                                                                            <div className="traveller-calulate-persons">
                                                                                <div className="passengers">
                                                                                    <h6>Passengers</h6>
                                                                                    <div className="passengers-types">
                                                                                        <div className="passengers-type">
                                                                                            <div className="text">
                                                                                                <span className="count pcount">
                                                                                                    2
                                                                                                </span>
                                                                                                <div className="type-label">
                                                                                                    <p>Adult</p>
                                                                                                    <span>12+ yrs</span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="button-set">
                                                                                                <button
                                                                                                    type="button"
                                                                                                    className="btn-add"
                                                                                                >
                                                                                                    <i className="fas fa-plus" />
                                                                                                </button>
                                                                                                <button
                                                                                                    type="button"
                                                                                                    className="btn-subtract"
                                                                                                >
                                                                                                    <i className="fas fa-minus" />
                                                                                                </button>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="passengers-type">
                                                                                            <div className="text">
                                                                                                <span className="count ccount">
                                                                                                    0
                                                                                                </span>
                                                                                                <div className="type-label">
                                                                                                    <p className="fz14 mb-xs-0">
                                                                                                        Children
                                                                                                    </p>
                                                                                                    <span>2 - Less than 12 yrs</span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="button-set">
                                                                                                <button
                                                                                                    type="button"
                                                                                                    className="btn-add-c"
                                                                                                >
                                                                                                    <i className="fas fa-plus" />
                                                                                                </button>
                                                                                                <button
                                                                                                    type="button"
                                                                                                    className="btn-subtract-c"
                                                                                                >
                                                                                                    <i className="fas fa-minus" />
                                                                                                </button>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="passengers-type">
                                                                                            <div className="text">
                                                                                                <span className="count incount">
                                                                                                    0
                                                                                                </span>
                                                                                                <div className="type-label">
                                                                                                    <p className="fz14 mb-xs-0">
                                                                                                        Infant
                                                                                                    </p>
                                                                                                    <span>Less than 2 yrs</span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="button-set">
                                                                                                <button
                                                                                                    type="button"
                                                                                                    className="btn-add-in"
                                                                                                >
                                                                                                    <i className="fas fa-plus" />
                                                                                                </button>
                                                                                                <button
                                                                                                    type="button"
                                                                                                    className="btn-subtract-in"
                                                                                                >
                                                                                                    <i className="fas fa-minus" />
                                                                                                </button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="cabin-selection">
                                                                                    <h6>Cabin Class</h6>
                                                                                    <div className="cabin-list">
                                                                                        <button
                                                                                            type="button"
                                                                                            className="label-select-btn"
                                                                                        >
                                                                                            <span className="muiButton-label">
                                                                                                Economy
                                                                                            </span>
                                                                                        </button>
                                                                                        <button
                                                                                            type="button"
                                                                                            className="label-select-btn active"
                                                                                        >
                                                                                            <span className="muiButton-label">
                                                                                                Business
                                                                                            </span>
                                                                                        </button>
                                                                                        <button
                                                                                            type="button"
                                                                                            className="label-select-btn"
                                                                                        >
                                                                                            <span className="MuiButton-label">
                                                                                                First Class{" "}
                                                                                            </span>
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <span>Business</span>
                                                                </div>
                                                            </div>
                                                            <div className="top_form_search_button">
                                                                <button className="btn btn_theme btn_md">
                                                                    Search
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="hotels"
                                        role="tabpanel"
                                        aria-labelledby="hotels-tab"
                                    >
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="tour_search_form">
                                                    <form action="#!">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                                                <div className="flight_Search_boxed">
                                                                    <p>Destination</p>
                                                                    <input
                                                                        type="text"
                                                                        placeholder="Where are you going?"
                                                                    />
                                                                    <span>Where are you going?</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                                                <div className="form_search_date">
                                                                    <div className="flight_Search_boxed date_flex_area">
                                                                        <div className="Journey_date">
                                                                            <p>Journey date</p>
                                                                            <input type="date" defaultValue="2022-05-03" />
                                                                            <span>Thursday</span>
                                                                        </div>
                                                                        <div className="Journey_date">
                                                                            <p>Return date</p>
                                                                            <input type="date" defaultValue="2022-05-05" />
                                                                            <span>Thursday</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-2  col-md-6 col-sm-12 col-12">
                                                                <div className="flight_Search_boxed dropdown_passenger_area">
                                                                    <p>Passenger, Class </p>
                                                                    <div className="dropdown">
                                                                        <button
                                                                            className="dropdown-toggle final-count"
                                                                            data-toggle="dropdown"
                                                                            type="button"
                                                                            id="dropdownMenuButton1"
                                                                            data-bs-toggle="dropdown"
                                                                            aria-expanded="false"
                                                                        >
                                                                            0 Passenger
                                                                        </button>
                                                                        <div
                                                                            className="dropdown-menu dropdown_passenger_info"
                                                                            aria-labelledby="dropdownMenuButton1"
                                                                        >
                                                                            <div className="traveller-calulate-persons">
                                                                                <div className="passengers">
                                                                                    <h6>Passengers</h6>
                                                                                    <div className="passengers-types">
                                                                                        <div className="passengers-type">
                                                                                            <div className="text">
                                                                                                <span className="count pcount">
                                                                                                    2
                                                                                                </span>
                                                                                                <div className="type-label">
                                                                                                    <p>Adult</p>
                                                                                                    <span>12+ yrs</span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="button-set">
                                                                                                <button
                                                                                                    type="button"
                                                                                                    className="btn-add"
                                                                                                >
                                                                                                    <i className="fas fa-plus" />
                                                                                                </button>
                                                                                                <button
                                                                                                    type="button"
                                                                                                    className="btn-subtract"
                                                                                                >
                                                                                                    <i className="fas fa-minus" />
                                                                                                </button>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="passengers-type">
                                                                                            <div className="text">
                                                                                                <span className="count ccount">
                                                                                                    0
                                                                                                </span>
                                                                                                <div className="type-label">
                                                                                                    <p className="fz14 mb-xs-0">
                                                                                                        Children
                                                                                                    </p>
                                                                                                    <span>2 - Less than 12 yrs</span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="button-set">
                                                                                                <button
                                                                                                    type="button"
                                                                                                    className="btn-add-c"
                                                                                                >
                                                                                                    <i className="fas fa-plus" />
                                                                                                </button>
                                                                                                <button
                                                                                                    type="button"
                                                                                                    className="btn-subtract-c"
                                                                                                >
                                                                                                    <i className="fas fa-minus" />
                                                                                                </button>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="passengers-type">
                                                                                            <div className="text">
                                                                                                <span className="count incount">
                                                                                                    0
                                                                                                </span>
                                                                                                <div className="type-label">
                                                                                                    <p className="fz14 mb-xs-0">
                                                                                                        Infant
                                                                                                    </p>
                                                                                                    <span>Less than 2 yrs</span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="button-set">
                                                                                                <button
                                                                                                    type="button"
                                                                                                    className="btn-add-in"
                                                                                                >
                                                                                                    <i className="fas fa-plus" />
                                                                                                </button>
                                                                                                <button
                                                                                                    type="button"
                                                                                                    className="btn-subtract-in"
                                                                                                >
                                                                                                    <i className="fas fa-minus" />
                                                                                                </button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="cabin-selection">
                                                                                    <h6>Cabin Class</h6>
                                                                                    <div className="cabin-list">
                                                                                        <button
                                                                                            type="button"
                                                                                            className="label-select-btn"
                                                                                        >
                                                                                            <span className="muiButton-label">
                                                                                                Economy
                                                                                            </span>
                                                                                        </button>
                                                                                        <button
                                                                                            type="button"
                                                                                            className="label-select-btn active"
                                                                                        >
                                                                                            <span className="muiButton-label">
                                                                                                Business
                                                                                            </span>
                                                                                        </button>
                                                                                        <button
                                                                                            type="button"
                                                                                            className="label-select-btn"
                                                                                        >
                                                                                            <span className="MuiButton-label">
                                                                                                First Class{" "}
                                                                                            </span>
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <span>Business</span>
                                                                </div>
                                                            </div>
                                                            <div className="top_form_search_button">
                                                                <button className="btn btn_theme btn_md">
                                                                    Search
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="visa-application"
                                        role="tabpanel"
                                        aria-labelledby="visa-tab"
                                    >
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="tour_search_form">
                                                    <form action="#!">
                                                        <div className="row">
                                                            <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                                                                <div className="flight_Search_boxed">
                                                                    <p>Select country</p>
                                                                    <input type="text" defaultValue="United states" />
                                                                    <span>Where are you going?</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                                                                <div className="flight_Search_boxed">
                                                                    <p>Your nationality</p>
                                                                    <input type="text" defaultValue="Bangladesh" />
                                                                    <span>Where are you going?</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                                                <div className="form_search_date">
                                                                    <div className="flight_Search_boxed date_flex_area">
                                                                        <div className="Journey_date">
                                                                            <p>Entry date</p>
                                                                            <input type="date" defaultValue="2022-05-03" />
                                                                            <span>Thursday</span>
                                                                        </div>
                                                                        <div className="Journey_date">
                                                                            <p>Exit date</p>
                                                                            <input type="date" defaultValue="2022-05-05" />
                                                                            <span>Thursday</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-2  col-md-6 col-sm-12 col-12">
                                                                <div className="flight_Search_boxed dropdown_passenger_area">
                                                                    <p>Traveller, Class </p>
                                                                    <div className="dropdown">
                                                                        <button
                                                                            className="dropdown-toggle final-count"
                                                                            data-toggle="dropdown"
                                                                            type="button"
                                                                            id="dropdownMenuButton1"
                                                                            data-bs-toggle="dropdown"
                                                                            aria-expanded="false"
                                                                        >
                                                                            0 Traveller
                                                                        </button>
                                                                        <div
                                                                            className="dropdown-menu dropdown_passenger_info"
                                                                            aria-labelledby="dropdownMenuButton1"
                                                                        >
                                                                            <div className="traveller-calulate-persons">
                                                                                <div className="passengers">
                                                                                    <h6>Traveller</h6>
                                                                                    <div className="passengers-types">
                                                                                        <div className="passengers-type">
                                                                                            <div className="text">
                                                                                                <span className="count pcount">
                                                                                                    2
                                                                                                </span>
                                                                                                <div className="type-label">
                                                                                                    <p>Adult</p>
                                                                                                    <span>12+ yrs</span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="button-set">
                                                                                                <button
                                                                                                    type="button"
                                                                                                    className="btn-add"
                                                                                                >
                                                                                                    <i className="fas fa-plus" />
                                                                                                </button>
                                                                                                <button
                                                                                                    type="button"
                                                                                                    className="btn-subtract"
                                                                                                >
                                                                                                    <i className="fas fa-minus" />
                                                                                                </button>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="passengers-type">
                                                                                            <div className="text">
                                                                                                <span className="count ccount">
                                                                                                    0
                                                                                                </span>
                                                                                                <div className="type-label">
                                                                                                    <p className="fz14 mb-xs-0">
                                                                                                        Children
                                                                                                    </p>
                                                                                                    <span>2 - Less than 12 yrs</span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="button-set">
                                                                                                <button
                                                                                                    type="button"
                                                                                                    className="btn-add-c"
                                                                                                >
                                                                                                    <i className="fas fa-plus" />
                                                                                                </button>
                                                                                                <button
                                                                                                    type="button"
                                                                                                    className="btn-subtract-c"
                                                                                                >
                                                                                                    <i className="fas fa-minus" />
                                                                                                </button>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="passengers-type">
                                                                                            <div className="text">
                                                                                                <span className="count incount">
                                                                                                    0
                                                                                                </span>
                                                                                                <div className="type-label">
                                                                                                    <p className="fz14 mb-xs-0">
                                                                                                        Infant
                                                                                                    </p>
                                                                                                    <span>Less than 2 yrs</span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="button-set">
                                                                                                <button
                                                                                                    type="button"
                                                                                                    className="btn-add-in"
                                                                                                >
                                                                                                    <i className="fas fa-plus" />
                                                                                                </button>
                                                                                                <button
                                                                                                    type="button"
                                                                                                    className="btn-subtract-in"
                                                                                                >
                                                                                                    <i className="fas fa-minus" />
                                                                                                </button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <span>Business</span>
                                                                </div>
                                                            </div>
                                                            <div className="top_form_search_button">
                                                                <button className="btn btn_theme btn_md">
                                                                    Search
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="apartments"
                                        role="tabpanel"
                                        aria-labelledby="apartments-tab"
                                    >
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="tour_search_form">
                                                    <form action="#!">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                                                <div className="flight_Search_boxed">
                                                                    <p>Destination</p>
                                                                    <input
                                                                        type="text"
                                                                        placeholder="Where are you going?"
                                                                    />
                                                                    <span>Where are you going?</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                                                <div className="form_search_date">
                                                                    <div className="flight_Search_boxed date_flex_area">
                                                                        <div className="Journey_date">
                                                                            <p>Journey date</p>
                                                                            <input type="date" defaultValue="2022-05-03" />
                                                                            <span>Thursday</span>
                                                                        </div>
                                                                        <div className="Journey_date">
                                                                            <p>Return date</p>
                                                                            <input type="date" defaultValue="2022-05-05" />
                                                                            <span>Thursday</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-2  col-md-6 col-sm-12 col-12">
                                                                <div className="flight_Search_boxed dropdown_passenger_area">
                                                                    <p>Passenger, Class </p>
                                                                    <div className="dropdown">
                                                                        <button
                                                                            className="dropdown-toggle final-count"
                                                                            data-toggle="dropdown"
                                                                            type="button"
                                                                            id="dropdownMenuButton1"
                                                                            data-bs-toggle="dropdown"
                                                                            aria-expanded="false"
                                                                        >
                                                                            0 Traveler
                                                                        </button>
                                                                        <div
                                                                            className="dropdown-menu dropdown_passenger_info"
                                                                            aria-labelledby="dropdownMenuButton1"
                                                                        >
                                                                            <div className="traveller-calulate-persons">
                                                                                <div className="passengers">
                                                                                    <h6>Passengers</h6>
                                                                                    <div className="passengers-types">
                                                                                        <div className="passengers-type">
                                                                                            <div className="text">
                                                                                                <span className="count pcount">
                                                                                                    2
                                                                                                </span>
                                                                                                <div className="type-label">
                                                                                                    <p>Adult</p>
                                                                                                    <span>12+ yrs</span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="button-set">
                                                                                                <button
                                                                                                    type="button"
                                                                                                    className="btn-add"
                                                                                                >
                                                                                                    <i className="fas fa-plus" />
                                                                                                </button>
                                                                                                <button
                                                                                                    type="button"
                                                                                                    className="btn-subtract"
                                                                                                >
                                                                                                    <i className="fas fa-minus" />
                                                                                                </button>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="passengers-type">
                                                                                            <div className="text">
                                                                                                <span className="count ccount">
                                                                                                    0
                                                                                                </span>
                                                                                                <div className="type-label">
                                                                                                    <p className="fz14 mb-xs-0">
                                                                                                        Children
                                                                                                    </p>
                                                                                                    <span>2 - Less than 12 yrs</span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="button-set">
                                                                                                <button
                                                                                                    type="button"
                                                                                                    className="btn-add-c"
                                                                                                >
                                                                                                    <i className="fas fa-plus" />
                                                                                                </button>
                                                                                                <button
                                                                                                    type="button"
                                                                                                    className="btn-subtract-c"
                                                                                                >
                                                                                                    <i className="fas fa-minus" />
                                                                                                </button>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="passengers-type">
                                                                                            <div className="text">
                                                                                                <span className="count incount">
                                                                                                    0
                                                                                                </span>
                                                                                                <div className="type-label">
                                                                                                    <p className="fz14 mb-xs-0">
                                                                                                        Infant
                                                                                                    </p>
                                                                                                    <span>Less than 2 yrs</span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="button-set">
                                                                                                <button
                                                                                                    type="button"
                                                                                                    className="btn-add-in"
                                                                                                >
                                                                                                    <i className="fas fa-plus" />
                                                                                                </button>
                                                                                                <button
                                                                                                    type="button"
                                                                                                    className="btn-subtract-in"
                                                                                                >
                                                                                                    <i className="fas fa-minus" />
                                                                                                </button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="cabin-selection">
                                                                                    <h6>Cabin Class</h6>
                                                                                    <div className="cabin-list">
                                                                                        <button
                                                                                            type="button"
                                                                                            className="label-select-btn"
                                                                                        >
                                                                                            <span className="muiButton-label">
                                                                                                Economy
                                                                                            </span>
                                                                                        </button>
                                                                                        <button
                                                                                            type="button"
                                                                                            className="label-select-btn active"
                                                                                        >
                                                                                            <span className="muiButton-label">
                                                                                                Business
                                                                                            </span>
                                                                                        </button>
                                                                                        <button
                                                                                            type="button"
                                                                                            className="label-select-btn"
                                                                                        >
                                                                                            <span className="MuiButton-label">
                                                                                                First Class{" "}
                                                                                            </span>
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <span>Business</span>
                                                                </div>
                                                            </div>
                                                            <div className="top_form_search_button">
                                                                <button className="btn btn_theme btn_md">
                                                                    Search
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="bus"
                                        role="tabpanel"
                                        aria-labelledby="bus-tab"
                                    >
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="tour_search_form">
                                                    <form action="#!">
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="oneway_search_form">
                                                                    <div className="row">
                                                                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                                                            <div className="flight_Search_boxed">
                                                                                <p>From</p>
                                                                                <input type="text" defaultValue="Dhaka" />
                                                                                <span>Bus Trtminal</span>
                                                                                <div className="plan_icon_posation">
                                                                                    <i className="fas fa-plane-departure" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                                                            <div className="flight_Search_boxed">
                                                                                <p>To</p>
                                                                                <input
                                                                                    type="text"
                                                                                    defaultValue="Cox’s Bazar "
                                                                                />
                                                                                <span>Bus Trtminal</span>
                                                                                <div className="plan_icon_posation">
                                                                                    <i className="fas fa-plane-arrival" />
                                                                                </div>
                                                                                <div className="range_plan">
                                                                                    <i className="fas fa-exchange-alt" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-4  col-md-6 col-sm-12 col-12">
                                                                            <div className="form_search_date">
                                                                                <div className="flight_Search_boxed date_flex_area">
                                                                                    <div className="Journey_date">
                                                                                        <p>Journey date</p>
                                                                                        <input
                                                                                            type="date"
                                                                                            defaultValue="2022-05-05"
                                                                                        />
                                                                                        <span>Thursday</span>
                                                                                    </div>
                                                                                    <div className="Journey_date">
                                                                                        <p>Return date</p>
                                                                                        <input
                                                                                            type="date"
                                                                                            defaultValue="2022-05-08"
                                                                                        />
                                                                                        <span>Saturday</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-2  col-md-6 col-sm-12 col-12">
                                                                            <div className="flight_Search_boxed dropdown_passenger_area">
                                                                                <p>Passenger, Class </p>
                                                                                <div className="dropdown">
                                                                                    <button
                                                                                        className="dropdown-toggle final-count"
                                                                                        data-toggle="dropdown"
                                                                                        type="button"
                                                                                        id="dropdownMenuButton1"
                                                                                        data-bs-toggle="dropdown"
                                                                                        aria-expanded="false"
                                                                                    >
                                                                                        0 Passenger
                                                                                    </button>
                                                                                    <div
                                                                                        className="dropdown-menu dropdown_passenger_info"
                                                                                        aria-labelledby="dropdownMenuButton1"
                                                                                    >
                                                                                        <div className="traveller-calulate-persons">
                                                                                            <div className="passengers">
                                                                                                <h6>Passengers</h6>
                                                                                                <div className="passengers-types">
                                                                                                    <div className="passengers-type">
                                                                                                        <div className="text">
                                                                                                            <span className="count pcount">
                                                                                                                2
                                                                                                            </span>
                                                                                                            <div className="type-label">
                                                                                                                <p>Adult</p>
                                                                                                                <span>12+ yrs</span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className="button-set">
                                                                                                            <button
                                                                                                                type="button"
                                                                                                                className="btn-add"
                                                                                                            >
                                                                                                                <i className="fas fa-plus" />
                                                                                                            </button>
                                                                                                            <button
                                                                                                                type="button"
                                                                                                                className="btn-subtract"
                                                                                                            >
                                                                                                                <i className="fas fa-minus" />
                                                                                                            </button>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className="passengers-type">
                                                                                                        <div className="text">
                                                                                                            <span className="count ccount">
                                                                                                                0
                                                                                                            </span>
                                                                                                            <div className="type-label">
                                                                                                                <p className="fz14 mb-xs-0">
                                                                                                                    Children
                                                                                                                </p>
                                                                                                                <span>
                                                                                                                    2 - Less than 12 yrs
                                                                                                                </span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className="button-set">
                                                                                                            <button
                                                                                                                type="button"
                                                                                                                className="btn-add-c"
                                                                                                            >
                                                                                                                <i className="fas fa-plus" />
                                                                                                            </button>
                                                                                                            <button
                                                                                                                type="button"
                                                                                                                className="btn-subtract-c"
                                                                                                            >
                                                                                                                <i className="fas fa-minus" />
                                                                                                            </button>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className="passengers-type">
                                                                                                        <div className="text">
                                                                                                            <span className="count incount">
                                                                                                                0
                                                                                                            </span>
                                                                                                            <div className="type-label">
                                                                                                                <p className="fz14 mb-xs-0">
                                                                                                                    Infant
                                                                                                                </p>
                                                                                                                <span>Less than 2 yrs</span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className="button-set">
                                                                                                            <button
                                                                                                                type="button"
                                                                                                                className="btn-add-in"
                                                                                                            >
                                                                                                                <i className="fas fa-plus" />
                                                                                                            </button>
                                                                                                            <button
                                                                                                                type="button"
                                                                                                                className="btn-subtract-in"
                                                                                                            >
                                                                                                                <i className="fas fa-minus" />
                                                                                                            </button>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="cabin-selection">
                                                                                                <h6>Cabin Class</h6>
                                                                                                <div className="cabin-list">
                                                                                                    <button
                                                                                                        type="button"
                                                                                                        className="label-select-btn"
                                                                                                    >
                                                                                                        <span className="muiButton-label">
                                                                                                            Economy
                                                                                                        </span>
                                                                                                    </button>
                                                                                                    <button
                                                                                                        type="button"
                                                                                                        className="label-select-btn active"
                                                                                                    >
                                                                                                        <span className="muiButton-label">
                                                                                                            Business
                                                                                                        </span>
                                                                                                    </button>
                                                                                                    <button
                                                                                                        type="button"
                                                                                                        className="label-select-btn"
                                                                                                    >
                                                                                                        <span className="MuiButton-label">
                                                                                                            First Class{" "}
                                                                                                        </span>
                                                                                                    </button>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <span>Business</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="top_form_search_button">
                                                                            <button className="btn btn_theme btn_md">
                                                                                Search
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="cruise"
                                        role="tabpanel"
                                        aria-labelledby="cruise-tab"
                                    >
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="tour_search_form">
                                                    <form action="#!">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                                                <div className="flight_Search_boxed">
                                                                    <p>Destination</p>
                                                                    <input
                                                                        type="text"
                                                                        placeholder="Where are you going?"
                                                                    />
                                                                    <span>Where are you going?</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                                                <div className="flight_Search_boxed">
                                                                    <p>Cruise line</p>
                                                                    <input type="text" placeholder="American line" />
                                                                    <span>Choose your cruise</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-2  col-md-6 col-sm-12 col-12">
                                                                <div className="form_search_date">
                                                                    <div className="flight_Search_boxed date_flex_area">
                                                                        <div className="Journey_date">
                                                                            <p>Journey date</p>
                                                                            <input type="date" defaultValue="2022-05-03" />
                                                                            <span>Thursday</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="top_form_search_button">
                                                                <button className="btn btn_theme btn_md">
                                                                    Search
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section id="explore_area" className="section_padding">
                <div className="container">
                    {/* Section Heading */}
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="section_heading_center">
                                <h2>89 tours found</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="left_side_search_area">
                                <div className="left_side_search_boxed">
                                    <div className="item_searc_map_area">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.6962663570607!2d89.56355961427838!3d22.813715829827952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff901efac79b59%3A0x5be01a1bc0dc7eba!2sAnd+IT!5e0!3m2!1sen!2sbd!4v1557901943656!5m2!1sen!2sbd" />
                                    </div>
                                </div>
                                <div className="left_side_search_boxed">
                                    <div className="left_side_search_heading">
                                        <h5>Search by name</h5>
                                    </div>
                                    <div className="name_search_form">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="e.g Deluxe bus"
                                        />
                                        <i className="fas fa-search" />
                                    </div>
                                </div>
                                <div className="left_side_search_boxed">
                                    <div className="left_side_search_heading">
                                        <h5>Filter by price</h5>
                                    </div>
                                    <div className="filter-price">
                                        <div
                                            id="price-slider"
                                            className="noUi-target noUi-ltr noUi-horizontal"
                                        >
                                            <div className="noUi-base">
                                                <div className="noUi-connects">
                                                    <div
                                                        className="noUi-connect"
                                                        style={{ transform: "translate(0%, 0px) scale(0.75, 1)" }}
                                                    />
                                                </div>
                                                <div
                                                    className="noUi-origin"
                                                    style={{ transform: "translate(-100%, 0px)", zIndex: 5 }}
                                                >
                                                    <div
                                                        className="noUi-handle noUi-handle-lower"
                                                        data-handle={0}
                                                        tabIndex={0}
                                                        role="slider"
                                                        aria-orientation="horizontal"
                                                        aria-valuemin={0.0}
                                                        aria-valuemax={550.0}
                                                        aria-valuenow={0.0}
                                                        aria-valuetext="$0"
                                                    >
                                                        <div className="noUi-touch-area" />
                                                        <div className="noUi-tooltip">$0</div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="noUi-origin"
                                                    style={{ transform: "translate(-25%, 0px)", zIndex: 4 }}
                                                >
                                                    <div
                                                        className="noUi-handle noUi-handle-upper"
                                                        data-handle={1}
                                                        tabIndex={0}
                                                        role="slider"
                                                        aria-orientation="horizontal"
                                                        aria-valuemin={200.0}
                                                        aria-valuemax={1000.0}
                                                        aria-valuenow={750.0}
                                                        aria-valuetext="$750"
                                                    >
                                                        <div className="noUi-touch-area" />
                                                        <div className="noUi-tooltip">$750</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="apply" type="button">
                                        Apply
                                    </button>
                                </div>
                                <div className="left_side_search_boxed">
                                    <div className="left_side_search_heading">
                                        <h5>Filter by Review</h5>
                                    </div>
                                    <div className="filter_review">
                                        <form className="review_star">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    id="flexCheckDefault"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckDefault"
                                                >
                                                    <i className="fas fa-star color_theme" />
                                                    <i className="fas fa-star color_theme" />
                                                    <i className="fas fa-star color_theme" />
                                                    <i className="fas fa-star color_theme" />
                                                    <i className="fas fa-star color_theme" />
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    id="flexCheckDefault1"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckDefault1"
                                                >
                                                    <i className="fas fa-star color_theme" />
                                                    <i className="fas fa-star color_theme" />
                                                    <i className="fas fa-star color_theme" />
                                                    <i className="fas fa-star color_theme" />
                                                    <i className="fas fa-star color_asse" />
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    id="flexCheckDefault2"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckDefault2"
                                                >
                                                    <i className="fas fa-star color_theme" />
                                                    <i className="fas fa-star color_theme" />
                                                    <i className="fas fa-star color_theme" />
                                                    <i className="fas fa-star color_asse" />
                                                    <i className="fas fa-star color_asse" />
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    id="flexCheckDefault3"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckDefault3"
                                                >
                                                    <i className="fas fa-star color_theme" />
                                                    <i className="fas fa-star color_theme" />
                                                    <i className="fas fa-star color_asse" />
                                                    <i className="fas fa-star color_asse" />
                                                    <i className="fas fa-star color_asse" />
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    id="flexCheckDefault5"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckDefault5"
                                                >
                                                    <i className="fas fa-star color_theme" />
                                                    <i className="fas fa-star color_asse" />
                                                    <i className="fas fa-star color_asse" />
                                                    <i className="fas fa-star color_asse" />
                                                    <i className="fas fa-star color_asse" />
                                                </label>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="left_side_search_boxed">
                                    <div className="left_side_search_heading">
                                        <h5>Filter by hotel star</h5>
                                    </div>
                                    <div className="filter_review">
                                        <form className="review_star">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    id="flexCheckDefaulta"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckDefaulta"
                                                >
                                                    <i className="fas fa-star color_theme" />
                                                    <i className="fas fa-star color_theme" />
                                                    <i className="fas fa-star color_theme" />
                                                    <i className="fas fa-star color_theme" />
                                                    <i className="fas fa-star color_theme" />
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    id="flexCheckDefaulf21"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckDefaulf21"
                                                >
                                                    <i className="fas fa-star color_theme" />
                                                    <i className="fas fa-star color_theme" />
                                                    <i className="fas fa-star color_theme" />
                                                    <i className="fas fa-star color_theme" />
                                                    <i className="fas fa-star color_asse" />
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    id="flexCheckDefaultf3"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckDefaultf3"
                                                >
                                                    <i className="fas fa-star color_theme" />
                                                    <i className="fas fa-star color_theme" />
                                                    <i className="fas fa-star color_theme" />
                                                    <i className="fas fa-star color_asse" />
                                                    <i className="fas fa-star color_asse" />
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    id="flexCheckDefaultf4"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckDefaultf4"
                                                >
                                                    <i className="fas fa-star color_theme" />
                                                    <i className="fas fa-star color_theme" />
                                                    <i className="fas fa-star color_asse" />
                                                    <i className="fas fa-star color_asse" />
                                                    <i className="fas fa-star color_asse" />
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    id="flexCheckDefaultf5"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckDefaultf5"
                                                >
                                                    <i className="fas fa-star color_theme" />
                                                    <i className="fas fa-star color_asse" />
                                                    <i className="fas fa-star color_asse" />
                                                    <i className="fas fa-star color_asse" />
                                                    <i className="fas fa-star color_asse" />
                                                </label>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="left_side_search_boxed">
                                    <div className="left_side_search_heading">
                                        <h5>Facilities</h5>
                                    </div>
                                    <div className="tour_search_type">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="flexCheckDefaultf1"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexCheckDefaultf1"
                                            >
                                                <span className="area_flex_one">
                                                    <span>Wake-up call</span>
                                                    <span>20</span>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="flexCheckDefaultf2"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexCheckDefaultf2"
                                            >
                                                <span className="area_flex_one">
                                                    <span>Flat TV</span>
                                                    <span>14</span>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="flexCheckDefaultaf3"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexCheckDefaultaf3"
                                            >
                                                <span className="area_flex_one">
                                                    <span>Vehicle service</span>
                                                    <span>30</span>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="flexCheckDefaultaf4"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexCheckDefaultaf4"
                                            >
                                                <span className="area_flex_one">
                                                    <span>Guide service</span>
                                                    <span>22</span>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="flexCheckDefaultaf5"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexCheckDefaultaf5"
                                            >
                                                <span className="area_flex_one">
                                                    <span>Internet, Wi-fi</span>
                                                    <span>41</span>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="left_side_search_boxed">
                                    <div className="left_side_search_heading">
                                        <h5>Hotel service</h5>
                                    </div>
                                    <div className="tour_search_type">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="flexCheckDefaultt1"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexCheckDefaultt1"
                                            >
                                                <span className="area_flex_one">
                                                    <span>Gymnasium</span>
                                                    <span>20</span>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="flexCheckDefaultt2"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexCheckDefaultt2"
                                            >
                                                <span className="area_flex_one">
                                                    <span>Mountain Bike</span>
                                                    <span>14</span>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="flexCheckDefaultt3"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexCheckDefaultt3"
                                            >
                                                <span className="area_flex_one">
                                                    <span>Wifi</span>
                                                    <span>62</span>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="flexCheckDefaultt4"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexCheckDefaultt4"
                                            >
                                                <span className="area_flex_one">
                                                    <span>Aerobics Room</span>
                                                    <span>08</span>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="flexCheckDefaultt5"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexCheckDefaultt5"
                                            >
                                                <span className="area_flex_one">
                                                    <span>Golf Cages</span>
                                                    <span>12</span>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="theme_common_box_two img_hover">
                                        <div className="theme_two_box_img">
                                            <a href="apartment-details">
                                                <img src="assets/img/apartment/apartment-1.png" alt="img" />
                                            </a>
                                            <p>
                                                <i className="fas fa-map-marker-alt" />
                                                New beach, Thailand
                                            </p>
                                        </div>
                                        <div className="theme_two_box_content">
                                            <h4>
                                                <a href="apartment-details">Kantua hotel, Thailand</a>
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
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="theme_common_box_two img_hover">
                                        <div className="theme_two_box_img">
                                            <a href="apartment-details">
                                                <img src="assets/img/apartment/apartment-2.png" alt="img" />
                                            </a>
                                            <p>
                                                <i className="fas fa-map-marker-alt" />
                                                New beach, Thailand
                                            </p>
                                        </div>
                                        <div className="theme_two_box_content">
                                            <h4>
                                                <a href="apartment-details">
                                                    Premium one bedroom delux apartment
                                                </a>
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
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="theme_common_box_two img_hover">
                                        <div className="theme_two_box_img">
                                            <a href="apartment-details">
                                                <img src="assets/img/apartment/apartment-3.png" alt="img" />
                                            </a>
                                            <p>
                                                <i className="fas fa-map-marker-alt" />
                                                New beach, Thailand
                                            </p>
                                        </div>
                                        <div className="theme_two_box_content">
                                            <h4>
                                                <a href="apartment-details">
                                                    Stylish couple apartment for honeymoon
                                                </a>
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
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="theme_common_box_two img_hover">
                                        <div className="theme_two_box_img">
                                            <a href="apartment-details">
                                                <img src="assets/img/apartment/apartment-4.png" alt="img" />
                                            </a>
                                            <p>
                                                <i className="fas fa-map-marker-alt" />
                                                New beach, Thailand
                                            </p>
                                        </div>
                                        <div className="theme_two_box_content">
                                            <h4>
                                                <a href="apartment-details">
                                                    Luxury poolside super quality apartment
                                                </a>
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
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="theme_common_box_two img_hover">
                                        <div className="theme_two_box_img">
                                            <a href="apartment-details">
                                                <img src="assets/img/apartment/apartment-5.png" alt="img" />
                                            </a>
                                            <p>
                                                <i className="fas fa-map-marker-alt" />
                                                New beach, Thailand
                                            </p>
                                        </div>
                                        <div className="theme_two_box_content">
                                            <h4>
                                                <a href="apartment-details">
                                                    Single apartment with lawn and swimming pool
                                                </a>
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
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="theme_common_box_two img_hover">
                                        <div className="theme_two_box_img">
                                            <a href="apartment-details">
                                                <img src="assets/img/apartment/apartment-6.png" alt="img" />
                                            </a>
                                            <p>
                                                <i className="fas fa-map-marker-alt" />
                                                New beach, Thailand
                                            </p>
                                        </div>
                                        <div className="theme_two_box_content">
                                            <h4>
                                                <a href="apartment-details">
                                                    Duplex new double bed apartment with gym
                                                </a>
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
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="theme_common_box_two img_hover">
                                        <div className="theme_two_box_img">
                                            <a href="apartment-details">
                                                <img src="assets/img/apartment/apartment-1.png" alt="img" />
                                            </a>
                                            <p>
                                                <i className="fas fa-map-marker-alt" />
                                                New beach, Thailand
                                            </p>
                                        </div>
                                        <div className="theme_two_box_content">
                                            <h4>
                                                <a href="apartment-details">Kantua hotel, Thailand</a>
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
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="theme_common_box_two img_hover">
                                        <div className="theme_two_box_img">
                                            <a href="apartment-details">
                                                <img src="assets/img/apartment/apartment-2.png" alt="img" />
                                            </a>
                                            <p>
                                                <i className="fas fa-map-marker-alt" />
                                                New beach, Thailand
                                            </p>
                                        </div>
                                        <div className="theme_two_box_content">
                                            <h4>
                                                <a href="apartment-details">
                                                    Premium one bedroom delux apartment
                                                </a>
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
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="theme_common_box_two img_hover">
                                        <div className="theme_two_box_img">
                                            <a href="apartment-details">
                                                <img src="assets/img/apartment/apartment-3.png" alt="img" />
                                            </a>
                                            <p>
                                                <i className="fas fa-map-marker-alt" />
                                                New beach, Thailand
                                            </p>
                                        </div>
                                        <div className="theme_two_box_content">
                                            <h4>
                                                <a href="apartment-details">
                                                    Stylish couple apartment for honeymoon
                                                </a>
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
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="theme_common_box_two img_hover">
                                        <div className="theme_two_box_img">
                                            <a href="apartment-details">
                                                <img src="assets/img/apartment/apartment-4.png" alt="img" />
                                            </a>
                                            <p>
                                                <i className="fas fa-map-marker-alt" />
                                                New beach, Thailand
                                            </p>
                                        </div>
                                        <div className="theme_two_box_content">
                                            <h4>
                                                <a href="apartment-details">
                                                    Luxury poolside super quality apartment
                                                </a>
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
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="theme_common_box_two img_hover">
                                        <div className="theme_two_box_img">
                                            <a href="apartment-details">
                                                <img src="assets/img/apartment/apartment-5.png" alt="img" />
                                            </a>
                                            <p>
                                                <i className="fas fa-map-marker-alt" />
                                                New beach, Thailand
                                            </p>
                                        </div>
                                        <div className="theme_two_box_content">
                                            <h4>
                                                <a href="apartment-details">
                                                    Single apartment with lawn and swimming pool
                                                </a>
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
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="theme_common_box_two img_hover">
                                        <div className="theme_two_box_img">
                                            <a href="apartment-details">
                                                <img src="assets/img/apartment/apartment-6.png" alt="img" />
                                            </a>
                                            <p>
                                                <i className="fas fa-map-marker-alt" />
                                                New beach, Thailand
                                            </p>
                                        </div>
                                        <div className="theme_two_box_content">
                                            <h4>
                                                <a href="apartment-details">
                                                    Duplex new double bed apartment with gym
                                                </a>
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
                                <div className="col-lg-12">
                                    <div className="pagination_area">
                                        <ul className="pagination">
                                            <li className="page-item">
                                                <a className="page-link" href="#" aria-label="Previous">
                                                    <span aria-hidden="true">«</span>
                                                    <span className="sr-only">Previous</span>
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    1
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    2
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    3
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#" aria-label="Next">
                                                    <span aria-hidden="true">»</span>
                                                    <span className="sr-only">Next</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
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

export default Apartments