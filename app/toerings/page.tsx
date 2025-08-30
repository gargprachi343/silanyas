"use client";

import Image from "next/image";
import EarringProductCard from "@/components/EarringProductCard";
import { toerings } from "@/data/toerings";
import { useCart } from "@/context/CartContext";

export default function ToeRingsPage() {
    const { addToCart, addToWishlist } = useCart();

    return (
        <main className="min-h-screen bg-white text-gray-900">
            {/* Banner */}
            <div className="w-full h-64 relative mb-8">
                <Image
                    src="/assets/banner/ear.png" // Replace with toe rings banner if available
                    alt="Toe Rings Banner"
                    fill
                    className="object-cover object-top"
                    priority
                />
                <div className="absolute inset-0 bg-pink-200 bg-opacity-60 flex flex-col justify-center items-center">
                    <h1 className="text-5xl font-bold text-pink-900 mb-2">TOE RINGS</h1>
                    <p className="text-xl text-pink-800">Adorn your toes with elegance</p>
                </div>
            </div>

            {/* Our Collection Section */}
            <section className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Our Collection</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {toerings.map((toeRing) => (
                        <EarringProductCard
                            key={toeRing.id}
                            {...toeRing}
                            slugPrefix="toerings"
                            onAddToCart={() =>
                                addToCart({
                                    id: toeRing.id,
                                    name: toeRing.name,
                                    description: toeRing.description,
                                    price: toeRing.price,
                                    imageUrl: toeRing.imageUrl,
                                })
                            }
                            onAddToWishlist={() =>
                                addToWishlist({
                                    id: toeRing.id,
                                    name: toeRing.name,
                                    description: toeRing.description,
                                    price: toeRing.price,
                                    imageUrl: toeRing.imageUrl,
                                })
                            }
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}
