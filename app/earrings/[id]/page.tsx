// // app/earrings/[id]/page.tsx
// import { notFound } from "next/navigation";
// import Image from "next/image";
// import { earrings } from "@/data/earrings";

// // ✅ Correct typing: params is a Promise
// interface PageProps {
//   params: Promise<{ id: string }>;
// }

// export default async function EarringDetailPage({ params }: PageProps) {
//   const { id } = await params; // ✅ must await because it's a Promise
//   const product = earrings.find((item) => item.id === id);

//   if (!product) {
//     notFound();
//   }

//   return (
//     <div className="max-w-4xl mx-auto py-10 px-4">
//       <div className="flex flex-col md:flex-row gap-8">
//         <div className="flex-shrink-0">
//           <Image
//             src={product.imageUrl}
//             alt={product.name}
//             width={400}
//             height={400}
//             className="rounded-lg object-cover"
//           />
//         </div>
//         <div>
//           <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
//           <div className="text-xl font-semibold text-blue-600 mb-4">
//             ₹{product.price}
//           </div>
//           {product.oldPrice && (
//             <div className="text-gray-500 line-through mb-2">
//               ₹{product.oldPrice}
//             </div>
//           )}
//           <div className="mb-4">
//             <span className="text-yellow-500">
//               {"★".repeat(Math.round(product.rating || 0))}
//             </span>
//             <span className="ml-2 text-gray-700">
//               {product.rating} ({product.reviews} reviews)
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { earrings } from "@/data/earrings";
import { useCart } from "@/context/CartContext";

interface PageProps {
  params: { id: string };
}

export default function EarringDetailPage({ params }: PageProps) {
  const { id } = params;
  const product = earrings.find((item) => item.id === id);
  const { addToCart, addToWishlist } = useCart();

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-shrink-0">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={400}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <div className="text-xl font-semibold text-blue-600 mb-4">
            ₹{product.price}
          </div>
          {product.oldPrice && (
            <div className="text-gray-500 line-through mb-2">
              ₹{product.oldPrice}
            </div>
          )}
          <div className="mb-6">
            <span className="text-yellow-500">
              {"★".repeat(Math.round(product.rating || 0))}
            </span>
            <span className="ml-2 text-gray-700">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          {/* Product Description */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Product Description</h2>
            <p className="text-gray-700">{product.description || "Beautiful handcrafted earrings made with precision and care. Perfect for any occasion."}</p>
          </div>

          {/* Product Features */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Features</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Premium quality materials</li>
              <li>Handcrafted design</li>
              <li>Comfortable fit</li>
              <li>Suitable for daily wear</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() =>
                addToCart({
                  id: product.id,
                  name: product.name,
                  description: "Earring product",
                  price: product.price,
                  imageUrl: product.imageUrl,
                })
              }
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Add to Cart
            </button>
            <button
              onClick={() =>
                addToWishlist({
                  id: product.id,
                  name: product.name,
                  description: "Earring product",
                  price: product.price,
                  imageUrl: product.imageUrl,
                })
              }
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}