import React, { useState } from "react";
import { toast } from "react-toastify";
import backendUrl from "../../api";
import axios from "axios";
import paymentHandler from "../../services/rozarpay";
import { useNavigate } from "react-router-dom";

const CulturalBooking = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [packageValue, setPackageValue] = useState("");
  const packageName = packageValue.split(" ")[0];
  const packagePrice = packageValue.split(" ")[1];
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const data = {
        name,
        email,
        packageName: packageName,
        packagePrice: packagePrice,
        eventName: "Cultural Event",
      };
      console.log("data", data);
      const response = await axios.post(backendUrl + "/event/cultural", data, {
        withCredentials: true,
      });

      console.log(response);
      const result = await paymentHandler(packagePrice);
      console.log("result", result);
      if (result.success) {
        navigate("/booking");
      }
    } catch (error) {
      console.log("Booking payment error:", error);
      toast.error("Failed to create booking payment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-purple-200 to-pink-200 pt-16">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl w-full py-4">
        <h2 className="text-3xl font-bold text-center text-pink-700 mb-6">
          🎭 Cultural Festival Booking
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8 text-center">
          <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg">Basic</h3>
            <p className="text-gray-600">₹100</p>
            <button
              onClick={() => setPackageValue("Basic 100")}
              className="mt-3 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
            >
              Choose Basic
            </button>
          </div>

          <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg">Standard</h3>
            <p className="text-gray-600">₹250</p>
            <button
              onClick={() => setPackageValue("Standard 250")}
              className="mt-3 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
            >
              Choose Standard
            </button>
          </div>

          <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg">VIP</h3>
            <p className="text-gray-600">₹500</p>
            <button
              onClick={() => setPackageValue("VIP 500")}
              className="mt-3 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
            >
              Choose VIP
            </button>
          </div>
        </div>

        <form
          id="cultural-payment"
          onSubmit={submitHandler}
          className="space-y-4 text-gray-400"
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
            value={packageValue ? packageValue : "No package selected"}
            readOnly
            className="w-full px-4 py-2 border rounded-lg bg-gray-100"
          />

          <button
            type="submit"
            className="w-full px-6 py-3 bg-pink-600 text-white rounded-lg shadow hover:bg-pink-700 transition"
          >
            {packageName.length === 0
              ? "Proceed to Pay"
              : `Pay ₹${packagePrice}`}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CulturalBooking;
