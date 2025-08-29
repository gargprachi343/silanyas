import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

interface EarringProductCardProps {
    id: string;
    name?: string;
    imageUrl?: string;
    price?: number;
    oldPrice?: number;
    rating?: number;
    reviews?: number;
    onAddToCart?: () => void;
    onAddToWishlist?: () => void;
}

const EarringProductCard: React.FC<EarringProductCardProps> = ({
    id,
    name,
    imageUrl,
    price,
    oldPrice,
    rating,
    reviews,
    onAddToCart,
    onAddToWishlist,
}): React.ReactElement => {
    return (
        <div className="border rounded-lg p-4 bg-white shadow relative flex flex-col">
            <div className="relative w-full h-64 mb-2">
                <Link href={`/earrings/${id}`} className="block w-full h-full">
                    <Image
                        src={imageUrl || "/assets/earrings1.jpg"}
                        alt={name || "Earring"}
                        fill
                        className="object-cover rounded-md"
                    />
                </Link>
                <button
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation();
                        if (onAddToWishlist) {
                            onAddToWishlist();
                        }
                    }}
                    className="absolute top-3 right-3 bg-white rounded-full p-1 shadow"
                >
                    <Heart className="w-5 h-5 text-pink-400 hover:text-pink-600" />
                </button>
            </div>
            <div className="flex items-center gap-2 text-xs mb-1">
                <span>{rating ? rating : "4.8"} ★</span>
                <span>| {reviews ? reviews : "100"}</span>
            </div>
            <Link href={`/earrings/${id}`} className="block font-medium text-gray-900 hover:underline mb-2">
                {name || "Earring"}
            </Link>
            <div className="flex items-center gap-2 mb-1">
                <span className="text-lg font-bold">₹{price ? price : "--"}</span>
                {oldPrice && (
                    <span className="text-gray-400 line-through text-sm">₹{oldPrice}</span>
                )}
            </div>
            <button
                type="button"
                onClick={onAddToCart}
                className="bg-pink-200 text-pink-900 font-semibold py-2 rounded mt-auto hover:bg-pink-300 transition"
            >
                Add to Cart
            </button>
        </div>
    );
};

export default EarringProductCard;
