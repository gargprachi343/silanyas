"use client";

import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { ring } from "@/data/ring";
import { useCart } from "@/context/CartContext";

const Page = () => {
    const params = useParams();
    const ringItem = ring.find(item => item.id === params.id);

    // Only show 2 images in gallery
    const gallery = ringItem
        ? [ringItem.imageUrl, "/assets/rings/ring2.jpg"]
        : [];
    const [selectedImg, setSelectedImg] = React.useState(gallery[0] || "");
    const { addToCart } = useCart();
    const [showMore, setShowMore] = React.useState(false);

    if (!ringItem) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-xl text-gray-600">Ring not found.</p>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center">
            <div className="w-full max-w-5xl p-8 rounded-lg shadow-md bg-white mt-8 flex flex-col md:flex-row gap-8">
                {/* Gallery */}
                <div className="flex-1 flex flex-col items-center">
                    <div className="w-96 h-96 relative mb-4">
                        <Image src={selectedImg} alt={ringItem.name} fill className="object-cover rounded" priority />
                    </div>
                    <div className="flex gap-2 overflow-x-auto">
                        {gallery.map((img, idx) => (
                            <button key={idx} onClick={() => setSelectedImg(img)} className={`w-20 h-20 relative border ${selectedImg === img ? 'border-yellow-400' : 'border-gray-200'} rounded-md`}>
                                <Image src={img} alt={`Gallery ${idx}`} fill className="object-cover rounded" />
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
                        <span className="text-3xl font-bold">₹{ringItem.price}</span>
                        <span className="text-gray-400 line-through text-lg">₹3599</span>
                    </div>
                    <div className="text-sm text-gray-500 mb-2">MRP incl. of all taxes</div>
                    <h1 className="text-2xl font-semibold mb-2">{ringItem.name}</h1>
                    <div className="mb-2 text-yellow-700 font-medium">Made With Pure 925 Silver</div>
                    {/* Buy/Add Buttons */}
                    <div className="flex gap-4 mb-6">
                        <button className="bg-yellow-400 text-white px-6 py-2 rounded font-semibold hover:bg-yellow-500 transition">Buy Now</button>
                        <button className="bg-yellow-400 text-white px-6 py-2 rounded font-semibold hover:bg-yellow-500 transition" onClick={() => addToCart(ringItem)}>Add To Cart</button>
                    </div>
                    {/* Offers */}

                    {/* Product Description */}
                    <div className="mb-6">
                        <div className="bg-yellow-50 rounded-t-lg p-3 font-bold text-lg">Product Description</div>
                        <div className="bg-yellow-50 rounded-b-lg p-3">
                            <div className="font-semibold mb-1">The Inspiration:</div>
                            <div className="text-gray-700">
                                {showMore
                                    ? "Classic ring crafted from pure 925 silver. Adds a touch of elegance to any look. Durable, stylish, and perfect for gifting!"
                                    : "Classic ring crafted from pure 925 silver. Adds a touch of elegance to any look..."}
                                <button className="text-yellow-600 underline ml-2 text-sm" onClick={() => setShowMore(!showMore)}>{showMore ? "Show Less" : "Show More"}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Page;
