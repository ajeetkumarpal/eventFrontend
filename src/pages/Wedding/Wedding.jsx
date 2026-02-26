import React from "react";
import { useNavigate } from "react-router-dom";

const Wedding = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-linear-to-br from-rose-100 via-pink-100 to-red-100 flex items-center justify-center pt-20">
      <div className="max-w-5xl bg-white rounded-2xl shadow-xl py-5">
        <h1 className="text-4xl font-bold text-center text-rose-600 mb-6">
          💍 Wedding Event Planning
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed text-center mb-8">
          Your wedding is one of the most special days of your life, and we make
          sure it’s unforgettable. From venue selection, décor, catering, and
          entertainment to guest management, we provide end-to-end wedding
          planning services for your dream day.
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-gray-800">
          <div className="bg-rose-50 p-5 rounded-xl shadow">
            <h2 className="font-semibold text-xl text-rose-600 mb-2">
              🏰 Venue & Decor
            </h2>
            <p>
              Elegant venues, floral arrangements, stage décor, and lighting
              setups.
            </p>
          </div>

          <div className="bg-pink-50 p-5 rounded-xl shadow">
            <h2 className="font-semibold text-xl text-pink-600 mb-2">
              🍽️ Catering
            </h2>
            <p>
              Deluxe menus with customized cuisines and world-class dining
              service.
            </p>
          </div>

          <div className="bg-red-50 p-5 rounded-xl shadow">
            <h2 className="font-semibold text-xl text-red-600 mb-2">
              🎶 Entertainment
            </h2>
            <p>
              Live bands, DJs, traditional performances, and celebrity shows.
            </p>
          </div>

          <div className="bg-rose-50 p-5 rounded-xl shadow">
            <h2 className="font-semibold text-xl text-rose-600 mb-2">
              📸 Photography
            </h2>
            <p>
              Professional photo & video coverage, pre-wedding shoots, and
              albums.
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => navigate("/WeddingBooking")}
            className="px-6 py-3 bg-rose-600 text-white font-semibold rounded-xl shadow-lg hover:bg-rose-700 transition"
          >
            Plan Your Wedding
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wedding;
