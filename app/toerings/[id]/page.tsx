"use client";

import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
// Update the import path if the file is actually at a different location, for example:
import { toerings } from "@/data/toerings";
// If the file does not exist, create 'toerings.ts' in 'app/data' or 'src/data' and export the toerings array.

// Define the type for a toe ring item

import { useCart } from "@/context/CartContext";

// Removed unused type 'ToeRing'
// Define the type for a toe ring item

const Page = () => {
    const params = useParams();
    const toeRing = toerings.find(item => item.id === params.id);

    // Only show 2 images in gallery
    const gallery = toeRing
        ? [toeRing.imageUrl, "/assets/toerings/toering2.jpg"]
        : [];
    const [selectedImg, setSelectedImg] = React.useState(gallery[0] || "");
    const { addToCart } = useCart();

    const [showMore, setShowMore] = React.useState(false);

    if (!toeRing) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-xl text-gray-600">Toe ring not found.</p>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center">
            <div className="w-full max-w-5xl p-8 rounded-lg shadow-md bg-white mt-8 flex flex-col md:flex-row gap-8">
                {/* Gallery */}
                <div className="flex-1 flex flex-col items-center">
                    <div className="w-96 h-96 relative mb-4">
                        <Image src={selectedImg} alt={toeRing.name} fill className="object-cover rounded" priority />
                    </div>
                    <div className="flex gap-2 overflow-x-auto">
                        {gallery.map((img, idx) => (
                            <button key={idx} onClick={() => setSelectedImg(img)} className={`w-20 h-20 relative border ${selectedImg === img ? 'border-blue-400' : 'border-gray-200'} rounded-md`}>
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
                        <span className="text-3xl font-bold">₹{toeRing.price}</span>
                        <span className="text-gray-400 line-through text-lg">₹3599</span>
                    </div>
                    <div className="text-sm text-gray-500 mb-2">MRP incl. of all taxes</div>
                    <h1 className="text-2xl font-semibold mb-2">{toeRing.name}</h1>
                    <div className="mb-2 text-blue-700 font-medium">Made With Pure 925 Silver</div>


                    {/* Buy/Add Buttons */}
                    <div className="flex gap-4 mb-6">
                        <button className="bg-blue-400 text-white px-6 py-2 rounded font-semibold hover:bg-blue-500 transition">Buy Now</button>
                        <button className="bg-blue-400 text-white px-6 py-2 rounded font-semibold hover:bg-blue-500 transition" onClick={() => addToCart(toeRing)}>Add To Cart</button>
                    </div>

                    {/* Product Description */}
                    <div className="mb-6">
                        <div className="bg-blue-50 rounded-t-lg p-3 font-bold text-lg">Product Description</div>
                        <div className="bg-blue-50 rounded-b-lg p-3">
                            <div className="font-semibold mb-1">The Inspiration:</div>
                            <div className="text-gray-700">
                                {showMore
                                    ? "Flaunt your feet with these adorable heart-shaped toe rings, crafted from pure 925 silver. These will add a touch of elegance to any look. Durable, stylish, and perfect for gifting!"
                                    : "Flaunt your feet with these adorable heart-shaped toe rings, crafted from pure 925 silver. These wil..."}
                                <button className="text-blue-600 underline ml-2 text-sm" onClick={() => setShowMore(!showMore)}>{showMore ? "Show Less" : "Show More"}</button>
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
                    {toerings.slice(0, 4).map((item) => (
                        <div key={item.id} className="border rounded-lg p-4 bg-white shadow flex flex-col items-center">
                            <div className="w-32 h-32 relative mb-2">
                                <Image src={item.imageUrl} alt={item.name} fill className="object-cover rounded-md" />
                            </div>
                            <div className="text-lg font-bold">₹{item.price}</div>
                            <div className="font-medium text-gray-900 mb-2 text-center">{item.name}</div>
                            <button className="bg-blue-200 text-blue-900 font-semibold py-2 rounded w-full hover:bg-blue-300 transition">Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Page;
