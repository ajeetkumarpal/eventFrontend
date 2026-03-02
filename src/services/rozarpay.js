import axios from "axios";
import backendUrl from "../api";
import { toast } from "react-toastify";

const paymentHandler = async (amountData) => {
  try {
    const response = await axios.post(
      backendUrl + "/payment/payment-order",
      {
        amountData,
      },
      
    );

    console.log("Backend response:", response.data);

    const { orderId, key, amount } = response.data;

    return new Promise((resolve) => {
      const options = {
        key: key,
        amount: amount,
        currency: "INR",
        name: "Event Organization",
        description: "Concert Ticket Payment",
        order_id: orderId,

        handler: async (paymentResponse) => {
          try {
            const verifyData = {
              razorpay_order_id: paymentResponse.razorpay_order_id,
              razorpay_payment_id: paymentResponse.razorpay_payment_id,
              razorpay_signature: paymentResponse.razorpay_signature,
            };

            const verifyRes = await axios.post(
              backendUrl + "/payment/payment-verify",
              verifyData,
            );

            if (verifyRes.data.success) {
              toast.success("Payment successful!");
              console.log("Payment verified successfully");
              resolve({ success: true });
            } else {
              toast.error("Payment verification failed");
              resolve({ success: false });
            }
          } catch (error) {
            console.log("Verification error:", error);
            toast.error("Payment verification failed");
            resolve({ success: false });
          }
        },

        prefill: {
          name: "",
          email: "",
        },

        theme: {
          color: "#7B1FA2",
        },

        modal: {
          ondismiss: () => {
            console.log("Payment modal closed");
            toast.info("Payment cancelled");
            resolve({ success: false });
          },
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    });
  } catch (error) {
    console.log("Error in paymentHandler:", error);
    toast.error("Payment failed");
    return { success: false };
  }
};

export default paymentHandler;
