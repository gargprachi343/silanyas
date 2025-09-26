"use client";

import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { earrings } from "@/data/earrings";
import { useCart } from "@/context/CartContext";

import { EarringProduct } from "@/data/earrings";

const Page = () => {
  const params = useParams();
  const pendantItem = earrings.find((item: EarringProduct) => item.id === params.id);

  const gallery = pendantItem
    ? [
        pendantItem.imageUrl,
        "/assets/pendants/pendant2.jpg",
        "/assets/pendants/pendant3.jpg",
        "/assets/pendants/pendant4.jpg",
      ]
    : [];
  const [selectedImg, setSelectedImg] = React.useState(gallery[0] || "");
  const { addToCart } = useCart();
  const [pincode, setPincode] = React.useState("");
  const [showMore, setShowMore] = React.useState(false);

  if (!pendantItem) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Pendant not found.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center">
      <div className="w-full max-w-5xl p-8 rounded-lg shadow-md bg-white mt-8 flex flex-col md:flex-row gap-8">
        {/* Gallery */}
        <div className="flex-1 flex flex-col items-center">
          <div className="w-96 h-96 relative mb-4">
            <Image
              src={selectedImg}
              alt={pendantItem.name}
              fill
              className="object-cover rounded"
              priority
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {gallery.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImg(img)}
                className={`w-20 h-20 relative border ${
                  selectedImg === img ? "border-pink-400" : "border-gray-200"
                } rounded-md`}
              >
                <Image
                  src={img}
                  alt={`Gallery ${idx}`}
                  fill
                  className="object-cover rounded"
                />
              </button>
            ))}
          </div>
          {/* Ratings */}
          <div className="mt-2 text-sm flex items-center gap-2">
            <span>⭐ 5.0 | 3</span>
          </div>
        </div>
        {/* Product Info */}
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-2">
            <span className="text-3xl font-bold">₹{pendantItem.price}</span>
            <span className="text-gray-400 line-through text-lg">₹3599</span>
          </div>
          <div className="text-sm text-gray-500 mb-2">
            MRP incl. of all taxes
          </div>
          <h1 className="text-2xl font-semibold mb-2">{pendantItem.name}</h1>
          <div className="mb-2 text-pink-700 font-medium">
            Made With Pure 925 Silver
          </div>
          {/* Delivery Time */}
          <div className="mb-4">
            <div className="font-semibold text-lg mb-1">
              Estimated Delivery Time
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                placeholder="Enter 6 digit pincode"
                className="border rounded px-4 py-2 w-64"
                maxLength={6}
              />
              <button className="bg-pink-200 text-pink-900 px-4 py-2 rounded font-semibold">
                Check
              </button>
            </div>
          </div>
          {/* Features */}
          <div className="flex flex-wrap gap-6 mb-4">
            <div className="flex flex-col items-center text-xs">
              <span>🔄</span>Easy 30 Day Return
            </div>
            <div className="flex flex-col items-center text-xs">
              <span>💍</span>Lifetime Plating
            </div>
            <div className="flex flex-col items-center text-xs">
              <span>🛡️</span>6-Month Warranty
            </div>
            <div className="flex flex-col items-center text-xs">
              <span>🥈</span>Fine 925 Silver
            </div>
          </div>
          {/* Gift Option */}
          <div className="mb-4 flex items-center gap-2">
            <input type="checkbox" id="gift" className="accent-pink-400" />
            <label htmlFor="gift" className="text-sm">
              Is this a Gift?{" "}
              <span role="img" aria-label="gift">
                🎁
              </span>{" "}
              Wrap it for just (₹50)
            </label>
          </div>
          {/* Buy/Add Buttons */}
          <div className="flex gap-4 mb-6">
            <button className="bg-pink-400 text-white px-6 py-2 rounded font-semibold hover:bg-pink-500 transition">
              Buy Now
            </button>
            <button
              className="bg-pink-400 text-white px-6 py-2 rounded font-semibold hover:bg-pink-500 transition"
              onClick={() => addToCart(pendantItem)}
            >
              Add To Cart
            </button>
          </div>
          {/* Offers */}
          <div className="bg-pink-50 rounded-lg p-4 mb-6">
            <div className="font-bold mb-2">
              Offers For You{" "}
              <span className="text-xs text-gray-500">
                (Can be applied at checkout)
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-white rounded p-2 flex justify-between items-center">
                FLAT 10% Off on Silver Jewellery above ₹2499 <span>🔖</span>
              </div>
              <div className="bg-white rounded p-2 flex justify-between items-center">
                FLAT 15% Off on Silver Jewellery above ₹3499 <span>🔖</span>
              </div>
              <button className="text-pink-600 underline text-sm">
                +3 more offers
              </button>
            </div>
          </div>
          {/* Product Description */}
          <div className="mb-6">
            <div className="bg-pink-50 rounded-t-lg p-3 font-bold text-lg">
              Product Description
            </div>
            <div className="bg-pink-50 rounded-b-lg p-3">
              <div className="font-semibold mb-1">The Inspiration:</div>
              <div className="text-gray-700">
                {showMore
                  ? "Elegant pendant crafted from pure 925 silver. Adds a touch of sophistication to any look. Durable, stylish, and perfect for gifting!"
                  : "Elegant pendant crafted from pure 925 silver. Adds a touch of sophistication to any look..."}
                <button
                  className="text-pink-600 underline ml-2 text-sm"
                  onClick={() => setShowMore(!showMore)}
                >
                  {showMore ? "Show Less" : "Show More"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Recently Viewed */}
      <div className="w-full max-w-5xl mt-8">
        <div className="font-bold text-xl mb-4">Recently Viewed</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Mock recently viewed */}
          {earrings.slice(0, 4).map((item: EarringProduct) => (
            <div
              key={item.id}
              className="border rounded-lg p-4 bg-white shadow flex flex-col items-center"
            >
              <div className="w-32 h-32 relative mb-2">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div className="text-lg font-bold">₹{item.price}</div>
              <div className="font-medium text-gray-900 mb-2 text-center">
                {item.name}
              </div>
              <button className="bg-pink-200 text-pink-900 font-semibold py-2 rounded w-full hover:bg-pink-300 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;
