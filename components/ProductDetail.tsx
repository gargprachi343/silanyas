'use client';

import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface ProductDetailProps {
  product: Product;
}

const addToLocalStorage = (key: string, product: Product) => {
  const existing = JSON.parse(localStorage.getItem(key) || '[]');
  const updated = [...existing, product];
  localStorage.setItem(key, JSON.stringify(updated));
};

export const ProductDetail = ({ product }: ProductDetailProps) => (
  <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
    <div className="relative w-full h-[500px]">
      <Image
        src={product.imageUrl}
        alt={product.name}
        fill
        className="object-cover rounded-lg"
      />
    </div>
    <div>
      <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-600 mb-4 text-lg">{product.description}</p>
      <p className="text-3xl font-semibold text-orange-600 mb-6">₹{product.price}</p>

      <div className="flex gap-4">
        <button
          onClick={() => addToLocalStorage('cart', product)}
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
        >
          Add to Cart
        </button>
        <button
          onClick={() => addToLocalStorage('wishlist', product)}
          className="border border-black text-black px-6 py-2 rounded hover:bg-black hover:text-white transition"
        >
          Wishlist
        </button>
      </div>
    </div>
  </div>
);
