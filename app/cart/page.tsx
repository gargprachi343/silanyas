"use client";

import { useState, useEffect } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);

    const totalAmount = storedCart.reduce(
      (acc: number, item: Product) => acc + item.price,
      0
    );
    setTotal(totalAmount);
  }, []);

  const handleCheckout = () => {
    // Redirect to payment page
    window.location.href = "/checkout";
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
