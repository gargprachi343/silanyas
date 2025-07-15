'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { Product } from './ProductGrid';

const ProductCard = ({ product }: { product: Product }) => {
  const addToWishlist = () => {
    const existing = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const updated = [...existing, product];
    localStorage.setItem('wishlist', JSON.stringify(updated));
    alert('Added to wishlist!');
  };

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-xl transition relative group bg-white">
      <Link href={`/product/${product.id}`}>
        <div className="relative w-full h-64 overflow-hidden rounded-md">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition duration-300"
          />
        </div>
        <h2 className="text-lg font-semibold mt-3">{product.name}</h2>
        <p className="text-sm text-gray-500">{product.description}</p>
        <p className="text-orange-600 font-bold mt-2">₹{product.price}</p>
      </Link>
      <button onClick={addToWishlist} className="absolute top-3 right-3">
        <Heart className="w-5 h-5 text-gray-500 hover:text-red-500" />
      </button>
    </div>
  );
};

export default ProductCard;
