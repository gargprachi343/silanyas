"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
// import { useRouter } from "next/navigation";

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

const CartPage = () => {
  // const router = useRouter();
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const storedCart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);

    const totalAmount = storedCart.reduce(
      (acc: number, item: Product) => acc + item.price,
      0
    );
    setTotal(totalAmount);
  }, []);

  const   handleCheckout = async () => {
    try {
      setIsProcessing(true);
      
      // Call backend to initiate payment
      const res = await fetch("/api/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: total,
          productInfo: `Order for ${cartItems.length} items`,
          customerName: "Test Customer", // You should get this from user profile
          customerEmail: "test@example.com", // You should get this from user profile
          customerPhone: "9999999999" // You should get this from user profile
        }),
      });

      const data = await res.json();

      if (!data.success || !data.paymentUrl) {
        throw new Error(data.error || "Failed to initiate payment");
      }

      // Redirect to PayU payment page
      window.location.href = data.paymentUrl;
      
    } catch (error) {
      console.error(error);
      alert("Checkout failed. Please try again.");
    } finally {
      setIsProcessing(false);
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
            <Image
              src={item.imageUrl}
              alt={item.name}
              width={80}
              height={80}
              className="w-20 h-20 object-cover rounded"
            />
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
          disabled={isProcessing}
          className={`${
            isProcessing ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          } text-white px-6 py-3 rounded-xl flex items-center gap-2`}
        >
          {isProcessing ? 'Processing...' : 'Checkout'}
        </button>
      </div>
    </div>
  );
};

export default CartPage;
