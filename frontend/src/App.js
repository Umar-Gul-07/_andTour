import ToastContainers from "./Utils/ToastContainer";
import PageNotFound404 from "./Errors/PageNotFound404";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./Pages/Base";
import Home from "./Pages/Home";
import Tour from "./Pages/Tour";
import TourDetails from "./Pages/TourDetails";
import TourBooking from "./Pages/TourBooking";
import Flights from "./Pages/Flights";
import Hotels from "./Pages/Hotels";
import HotelBooking from "./Pages/HotelDetails";
import Apartments from "./Pages/Apartments";
import ApartmentDetails from "./Pages/ApartmentDetails";
import Bus from "./Pages/Bus";
import BusDetails from "./Pages/BusDetails";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import ForgetPassword from "./Pages/ForgetPassword";
import VerifyOTP from "./Pages/VerifyOTP";
import VerifyPassword from "./Pages/VerifyPassword";
import TopDestinations from "./Pages/TopDestinations";


function App() {
  return (
    <>
      <BrowserRouter>

        {/* ToastContainer */}
        <ToastContainers />

        {/* Routes */}
        <Routes>

          {/* Web Routes */}
          <Route path='/' element={<Base><Home/></Base>} />
          <Route path='/tour' element={<Base><Tour/></Base>} />
          <Route path='/tour-detail' element={<Base><TourDetails/></Base>} />
          <Route path='/tour-booking' element={<Base><TourBooking/></Base>} />
          <Route path='/top-destination' element={<Base><TopDestinations/></Base>} />
          <Route path='/flight' element={<Base>< Flights/></Base>} />
          <Route path='/flight-booking' element={<Base><TourBooking/></Base>} />
          <Route path='/hotel' element={<Base><Hotels/></Base>} />
          <Route path='/hotel-details' element={<Base><HotelBooking/></Base>} />
          <Route path='/room-details' element={<Base><TourBooking/></Base>} />
          <Route path='/room-booking' element={<Base><TourBooking/></Base>} />
          <Route path='/apartment' element={<Base><Apartments/></Base>} />
          <Route path='/apartment-details' element={<Base><ApartmentDetails/></Base>} />
          <Route path='/bus' element={<Base><Bus/></Base>} />
          <Route path='/bus-details' element={<Base><BusDetails/></Base>} />
          <Route path='/about' element={<Base><About/></Base>} />
          <Route path='/login' element={<Base><Login/></Base>} />
          <Route path='/register' element={<Base><Registration/></Base>} />
          <Route path='/forget-password' element={<Base><ForgetPassword/></Base>} />
          <Route path='/verifyOTP' element={<Base><VerifyOTP/></Base>} />
          <Route path='/verifyPassword' element={<Base><VerifyPassword/></Base>} />







          <Route path='*' element={<PageNotFound404 />} />

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
