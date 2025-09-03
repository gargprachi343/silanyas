"use client";

import Image from "next/image";

import EarringProductCard from "@/components/EarringProductCard";
import { pendant } from "@/data/pendant";
import { useCart } from "@/context/CartContext";

export default function PendantPage() {
    const { addToCart, addToWishlist } = useCart();

    return (
        <main className="min-h-screen bg-white text-gray-900">
            {/* Navigation Link to Pendants */}
            <nav className="w-full bg-white border-b px-4 py-2 flex justify-center">
               
            </nav>
            {/* Banner */}
            <div className="w-full" style={{ height: "556px", position: "relative", marginBottom: "2rem" }}>
                <Image
                    src="/assets/pendant1.jpeg" // Replace with pendant banner if available
                    alt="Pendants Banner"
                    fill
                    className="object-cover object-top"
                    priority
                />
                <div className="absolute inset-0 bg-pink-200 bg-opacity-60 flex flex-col justify-center items-center">
                </div>
            </div>

            {/* Our Collection Section */}
            <section className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Our Collection</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {pendant.map((item: {
                        id: string;
                        name: string;
                        description: string;
                        price: number;
                        imageUrl: string;
                        category: string;
                    }) => (
                        <EarringProductCard
                            key={item.id}
                            {...item}
                            slugPrefix="pendant"
                            onAddToCart={() =>
                                addToCart({
                                    id: item.id,
                                    name: item.name,
                                    description: item.description,
                                    price: item.price,
                                    imageUrl: item.imageUrl,
                                })
                            }
                            onAddToWishlist={() =>
                                addToWishlist({
                                    id: item.id,
                                    name: item.name,
                                    description: item.description,
                                    price: item.price,
                                    imageUrl: item.imageUrl,
                                })
                            }
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}
