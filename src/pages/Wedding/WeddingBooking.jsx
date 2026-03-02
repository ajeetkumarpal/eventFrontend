import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import backendUrl from "../../api";
import paymentHandler from "../../services/rozarpay";

const WeddingBooking = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(20);
  const amount = guests * 1000;
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { date, time, guests, amount, eventName: "Wedding Event" };

      const response = await axios.post(backendUrl + "/event/wedding", data, {
        // withCredentials: true,
      });
      console.log(response);
      const result = await paymentHandler(amount);
      console.log("result", result);
      if (result.success) {
        navigate("/booking");
      }
    } catch (error) {
      console.log("Booking error:", error);
      toast.error("Failed to create booking");
    }
  };

  return (
    <div className="min-h-screen  bg-linear-to-br from-pink-100 via-red-100  to-rose-200 flex items-center pt-14 justify-center ">
      <div className="max-w-3xl bg-white rounded-2xl shadow-xl py-8 px-4">
        <h1 className="text-3xl font-bold text-center text-rose-600 mb-6">
          📝 Book Your Wedding Event
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6 text-gray-400 ">
          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              Select Date:
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border rounded-xl p-3 "
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              Select Time:
            </label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full border rounded-xl p-3"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              Number of Guests:
            </label>
            <input
              type="number"
              min="20"
              max="1000"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              placeholder="Enter number of guests"
              className="w-full border rounded-xl p-3"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-rose-600 text-white font-semibold rounded-xl hover:bg-rose-700 transition"
          >
            Proceed to Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default WeddingBooking;
