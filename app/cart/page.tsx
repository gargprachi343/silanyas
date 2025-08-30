"use client";

import { useState, useEffect } from "react";
import { load } from "@cashfreepayments/cashfree-js";

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [cashfree, setCashfree] = useState<any>(null);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);

    const totalAmount = storedCart.reduce(
      (acc: number, item: Product) => acc + item.price,
      0
    );
    setTotal(totalAmount);

    // Load Cashfree SDK
    load({ mode: "sandbox" }).then((cf) => setCashfree(cf));
  }, []);

  const handleCheckout = async () => {
    try {
      // Call backend to create order
      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: total }),
      });

      const data = await res.json();

      if (!data.orderToken) {
        alert("Error creating order");
        return;
      }

      // Open Cashfree Checkout
      cashfree.checkout({
        paymentSessionId: data.orderToken,
        redirectTarget: "_self", // stays on same page
      });
    } catch (error) {
      console.error(error);
      alert("Checkout failed");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border p-4 rounded-xl shadow"
          >
            <img src={item.imageUrl} alt={item.name} className="w-20 h-20" />
            <div>
              <h2 className="font-semibold">{item.name}</h2>
              <p>₹{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Total Section */}
      <div className="mt-8 p-4 border-t flex justify-between items-center">
        <h2 className="text-xl font-bold">Total: ₹{total}</h2>
        <button
          onClick={handleCheckout}
          className="bg-pink-600 text-white px-6 py-3 rounded-xl hover:bg-pink-700"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
