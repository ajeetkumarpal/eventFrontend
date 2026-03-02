import React, { useState } from "react";
import axios from "axios";
import paymentHandler from "../../services/rozarpay";
import { toast } from "react-toastify";
import backendUrl from "../../api";
import { useNavigate } from "react-router-dom";
const BirthdayBooking = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");
  const amountData = selectedPackage.split(" ")[1];
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = {
        name,
        email,
        package: selectedPackage.split(" ")[0],
        amount: amountData,
        eventName: "Birthday Event",
      };

      const response = await axios.post(backendUrl + "/event/birthday", data, {
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-yellow-100 to-pink-100">
      <div className="bg-white shadow-lg rounded-2xl pt-20 pb-5 max-w-3xl w-full px-6">
        <h2 className="text-3xl font-bold text-center text-pink-700 mb-6">
          🎂 Birthday Event Booking
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8 text-center">
          <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg">Kids Special</h3>
            <p className="text-gray-600">₹5,000</p>
            <button
              onClick={() => setSelectedPackage("Kids 5000")}
              className="mt-3 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
            >
              Choose Kids
            </button>
          </div>

          <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg">Family Celebration</h3>
            <p className="text-gray-600">₹10,000</p>
            <button
              onClick={() => setSelectedPackage("family 10000")}
              className="mt-3 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
            >
              Choose Family
            </button>
          </div>

          <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg">Luxury Party</h3>
            <p className="text-gray-600">₹25,000</p>
            <button
              onClick={() => setSelectedPackage("luxury 25000")}
              className="mt-3 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
            >
              Choose Luxury
            </button>
          </div>
        </div>

        <form
          onSubmit={submitHandler}
          id="birthday-payment"
          className="space-y-4 text-gray-600"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-pink-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-pink-500"
          />

          <input
            type="text"
            value={
              selectedPackage
                ? selectedPackage.split(" ")[0]
                : "No package selected"
            }
            readOnly
            className="w-full px-4 text-gray-700 py-2 border rounded-lg bg-gray-100"
          />

          <button
            type="submit"
            className="w-full px-6 py-3 bg-pink-600 text-white rounded-lg shadow hover:bg-pink-700 transition"
          >
            Proceed to Pay{" "}
            {selectedPackage.length !== 0 ? ` →   ₹${amountData}` : ""}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BirthdayBooking;
