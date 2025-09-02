"use client";

import { useEffect } from "react";

const CheckoutPage = () => {
  useEffect(() => {
    // Load Cashfree Drop-in JS
    const script = document.createElement("script");
    script.src = "https://sdk.cashfree.com/js/ui/2.0.0/cashfree.sandbox.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = async () => {
    // You should get these from your backend after creating an order
    const orderToken = "YOUR_ORDER_TOKEN"; // Replace with actual token from backend

    // @ts-expect-error Cashfree SDK is not typed
    if (window.Cashfree) {
      // @ts-expect-error Cashfree SDK is not typed
      window.Cashfree.init({
        mode: "sandbox", // or "production"
        orderToken,
        onSuccess: function () {
          alert("Payment Success!");
        },
        onFailure: function () {
          alert("Payment Failed!");
        },
        onClose: function () {
          alert("Payment Modal Closed");
        }
      });
      // @ts-expect-error Cashfree SDK is not typed
      window.Cashfree.open();
    } else {
      alert("Cashfree SDK not loaded");
    }
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <p className="mb-4">Choose your payment method:</p>
      <div className="space-x-4">
        <button className="bg-black text-white px-6 py-3 rounded-xl">
          UPI
        </button>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
          Credit / Debit Card
        </button>
        <button className="bg-green-600 text-white px-6 py-3 rounded-xl">
          Netbanking
        </button>
      </div>

      <div className="mt-8">
        <button
          onClick={handlePayment}
          className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700"
        >
          Proceed to Pay
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
