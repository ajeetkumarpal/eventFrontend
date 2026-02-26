import { Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Birthday from "./pages/Birthday/Birthday";
import BirthdayBooking from "./pages/Birthday/BirthdayBooking";
import Wedding from "./pages/Wedding/Wedding";
import Concert from "./pages/Concert/Concert";
import CulturalFestival from "./pages/Cultural/CulturalFestival";
import CulturalBooking from "./pages/Cultural/CulturalBooking";
import SportsEvents from "./pages/Sports/SportEvents";
import SportsBooking from "./pages/Sports/SportsBooking";
import WeddingBooking from "./pages/Wedding/WeddingBooking";
import ConcertBooking from "./pages/Concert/ConcertBooking";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Booking from "./components/Booking";

function App() {
  const location=useLocation();
  
  return (
    <>
    <ToastContainer autoClose={2000} closeOnClick={true} pauseOnHover/>
      <Navbar title="Indian Events" />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Birthday" element={<Birthday />} />
        <Route path="/BirthdayBooking" element={<BirthdayBooking />} />
        <Route path="/Wedding" element={<Wedding />} />
        <Route path="/WeddingBooking" element={<WeddingBooking />} />
        <Route path="/Concert" element={<Concert />} />
        <Route path="/ConcertBooking" element={<ConcertBooking />} />
        <Route path="/CulturalFestival" element={<CulturalFestival />} />
        <Route path="/CulturalBooking" element={<CulturalBooking />} />
        <Route path="/SportEvents" element={<SportsEvents />} />
        <Route path="/SportsBooking" element={<SportsBooking />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
     

      <Footer />
    </>
  );
}

export default App;

