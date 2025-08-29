import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

interface EarringProductCardProps {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    oldPrice?: number;
    rating?: number;
    reviews?: number;
    onAddToCart?: () => void;
    onAddToWishlist?: () => void;
}

export default function EarringProductCard({
    id,
    name,
    imageUrl,
    price,
    oldPrice,
    rating = 4.8,
    reviews = 100,
    onAddToCart,
    onAddToWishlist,
}: EarringProductCardProps) {
    return (
        <div className="border rounded-lg p-4 bg-white shadow relative flex flex-col">
            <div className="relative w-full h-64 mb-2">
                <Image src={imageUrl} alt={name} fill className="object-cover rounded-md" />
                <button
                    onClick={onAddToWishlist}
                    className="absolute top-3 right-3 bg-white rounded-full p-1 shadow"
                >
                    <Heart className="w-5 h-5 text-pink-400 hover:text-pink-600" />
                </button>
            </div>
            <div className="flex items-center gap-2 text-xs mb-1">
                <span>{rating} ★</span>
                <span>| {reviews}</span>
            </div>
            <div className="flex items-center gap-2 mb-1">
                <span className="text-lg font-bold">₹{price}</span>
                {oldPrice && (
                    <span className="text-gray-400 line-through text-sm">₹{oldPrice}</span>
                )}
            </div>
            <Link href={`/product/${id}`} className="block font-medium text-gray-900 hover:underline mb-2">
                {name}
            </Link>
            <button
                onClick={onAddToCart}
                className="bg-pink-200 text-pink-900 font-semibold py-2 rounded mt-auto hover:bg-pink-300 transition"
            >
                Add to Cart
            </button>
        </div>
    );
}
