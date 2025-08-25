"use client";

const CheckoutPage = () => {
  const handlePayment = () => {
    alert("Redirecting to Payment Gateway...");
    // 🔗 Here you’ll integrate Razorpay / Stripe
    // Example for Razorpay:
    // const options = { ... };
    // const rzp = new window.Razorpay(options);
    // rzp.open();
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
          className="bg-pink-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-pink-700"
        >
          Proceed to Pay
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
