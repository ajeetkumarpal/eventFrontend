import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import backendUrl from "../../api";
import paymentHandler from "../../services/rozarpay";

const SportsBooking = () => {
  const navigate = useNavigate();

  const [sportData, setSportData] = useState({
    name: "",
    email: "",
    phone: "",
    teamName: "",
    package: "silver-3000",
    eventName: "sport",
  });

  const handleChange = (e) =>
    setSportData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const amountData = sportData.package.split("-")[1];
    try {
      const data = {
        name: sportData.name,
        email: sportData.email,
        phone: sportData.phone,
        teamName: sportData.teamName,
        package: sportData.package.split("-")[0],
        amount: amountData,
        eventName: "Sport Event",
      };

      const response = await axios.post(backendUrl + "/event/sport", data, {
        // withCredentials: true,
      });
      console.log(response);
      const result = await paymentHandler(amountData);
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
    <div className="min-h-screen flex items-center justify-center ">
      <div className="p-6 max-w-md mx-auto shadow rounded bg-white">
        <h2 className="text-xl font-bold mb-4">Sports Event Booking</h2>
        <form onSubmit={handleSubmit} className="space-y-3 text-gray-400">
          <input
            name="name"
            value={sportData.name}
            onChange={handleChange}
            placeholder="Name"
            className="border p-2 w-full"
            required
          />
          <input
            name="email"
            value={sportData.email}
            onChange={handleChange}
            placeholder="Email"
            className="border p-2 w-full"
            required
          />
          <input
            name="phone"
            value={sportData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="border p-2 w-full"
            required
          />
          <input
            name="teamName"
            value={sportData.teamName}
            onChange={handleChange}
            placeholder="Team Name"
            className="border p-2 w-full"
            required
          />

          <select
            name="package"
            value={sportData.package}
            onChange={handleChange}
            className="border p-2 w-full"
          >
            <option value="gold-5000">Gold - ₹5000</option>
            <option value="silver-3000">Silver - ₹3000</option>
            <option value="bronze-1500">Bronze - ₹1500</option>
          </select>

          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Pay & Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default SportsBooking;
