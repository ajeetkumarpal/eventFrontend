import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import backendUrl from "../../api";
import paymentHandler from "../../services/rozarpay";
import { toast } from "react-toastify";

const ConcertBooking = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [concertValue, setConcertValue] = useState({
    name: "",
    email: "",
    noOfTicket: 1,
  });
  let amount = concertValue.noOfTicket * 500;

  const changeHandler = (e) =>
    setConcertValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = {
        name: concertValue.name,
        email: concertValue.email,
        noOfTicket: concertValue.noOfTicket,
        amount: amount,
        eventName: "Concert Event",
      };

      const response = await axios.post(backendUrl + "/event/concert", data, {
        withCredentials: true,
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="min-h-screen bg-gray-900 flex items-center justify-center px-4 text-gray-400"
    >
      <div className=" max-w-lg mx-auto bg-white rounded-2xl shadow-md  p-8 ">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">
          Book Concert Tickets
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={changeHandler}
            value={concertValue.name}
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={changeHandler}
            value={concertValue.email}
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="number"
            name="noOfTicket"
            onChange={changeHandler}
            value={concertValue.noOfTicket}
            placeholder="Number of Tickets"
            min="1"
            className="w-full px-4 py-2 border rounded-lg"
          />

          <button
            disabled={loading}
            className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50"
          >
            {loading
              ? "Processing..."
              : `Pay ₹${concertValue.noOfTicket * 500}`}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ConcertBooking;
