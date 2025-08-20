"use client"
import { useCart } from "@/context/CartContext";
import Image from "next/image";

export default function CartPage() {
    const { cart } = useCart();
    return (
        <main className="max-w-4xl mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
            {cart.length === 0 ? (
                <div className="text-center text-lg">No items in cart.</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {cart.map((item) => (
                        <div key={item.id} className="border rounded-lg p-4 flex gap-4 items-center">
                            <div className="relative w-32 h-32">
                                <Image src={item.imageUrl} alt={item.name} fill className="object-cover rounded" />
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold">{item.name}</h2>
                                <p className="text-gray-600">₹{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </main>
    );
}
