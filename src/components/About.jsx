import React from "react";
import about from "../assets/About.jpg"
export default function About() {
  return (
    <section id="about" className="pt-30 pb-6  ">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center overflow-hidden">
        <img src={about} alt="About us" className="rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"/>
        <div>
          <h2 className="text-4xl font-bold mb-6 text-white hover:tracking-[4px]">About Us</h2>
          <p className="text-whitegray-600 mb-4">
            At Indian Events, we are passionate about turning ideas into unforgettable experiences. 
            With years of expertise, our team ensures flawless execution from concept to completion.
          </p>
          <p className="text-whitegray-600">
            Whether it's a corporate gathering, a wedding, or a grand festival, 
            we tailor every detail to exceed expectations.
          </p>
        </div>
      </div>
    </section>
  )
}
