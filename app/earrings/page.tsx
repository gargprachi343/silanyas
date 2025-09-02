"use client";

import Image from "next/image";
import EarringProductCard from "@/components/EarringProductCard";
import { earrings } from "@/data/earrings";
import { useCart } from "@/context/CartContext";

export default function EarringsPage() {
    const { addToCart, addToWishlist } = useCart();

    return (
        <main className="min-h-screen bg-white text-gray-900">
            {/* Banner */}
            <div className="w-full h-64 relative mb-8">
                <Image
                    src="/assets/banner/ear.png"
                    alt="Earrings Banner"
                    fill
                    className="object-cover object-top"
                    priority
                />
                <div className="absolute inset-0 bg-blue-200 bg-opacity-60 flex flex-col justify-center items-center">
                    <h1 className="text-5xl font-bold text-blue-900 mb-2">EARRINGS</h1>
                    <p className="text-xl text-blue-800">Let your ears do the talking</p>
                </div>
            </div>

            {/* Our Collection Section */}
            <section className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Our Collection</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {earrings.map((earring) => (
                        <EarringProductCard
                            key={earring.id}
                            {...earring}
                            onAddToCart={() =>
                                addToCart({
                                    id: earring.id,
                                    name: earring.name,
                                    description: "Earring product",
                                    price: earring.price,
                                    imageUrl: earring.imageUrl,
                                })
                            }
                            onAddToWishlist={() =>
                                addToWishlist({
                                    id: earring.id,
                                    name: earring.name,
                                    description: "Earring product",
                                    price: earring.price,
                                    imageUrl: earring.imageUrl,
                                })
                            }
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}
