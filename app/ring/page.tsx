"use client";

import Image from "next/image";
import Link from "next/link";
import EarringProductCard from "@/components/EarringProductCard";
import { ring } from "../../data/ring";
import { useCart } from "@/context/CartContext";

export default function ringPage() {
    const { addToCart, addToWishlist } = useCart();

    return (
        <main className="min-h-screen bg-white text-gray-900">
            {/* Navigation Link to rings */}
            <nav className="w-full bg-white border-b px-4 py-2 flex justify-center">
                <Link href="/ring" className="text-blue-600 font-semibold hover:underline text-lg">
                    rings
                </Link>
            </nav>
            {/* Banner */}
            <div className="w-full h-64 relative mb-8">
                <Image
                    src="/assets/banner/ear.png" // Replace with rings banner if available
                    alt="rings Banner"
                    fill
                    className="object-cover object-top"
                    priority
                />
                <div className="absolute inset-0 bg-blue-200 bg-opacity-60 flex flex-col justify-center items-center">


                </div>
            </div>

            {/* Our Collection Section */}
            <section className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Our Collection</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {ring.map((toeRing: {
                        id: string;
                        name: string;
                        description: string;
                        price: number;
                        imageUrl: string;
                        category: string;
                    }) => (
                        <EarringProductCard
                            key={toeRing.id}
                            {...toeRing}
                            slugPrefix="ring"
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
