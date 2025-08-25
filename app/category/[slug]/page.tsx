"use client";

import { useParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function CategoryPage() {
  // ✅ Tell TS that slug is a string
  const { slug } = useParams<{ slug: string }>();

  // In some setups slug can be temporarily undefined; normalize to ""
  const normalized = (slug ?? "").toLowerCase();

  const filteredProducts = products.filter(
    (p) => p.category.toLowerCase() === normalized
  );

  return (
    <div className="px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 capitalize">{normalized || "Category"}</h1>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No products found in this category.</p>
      )}
    </div>
  );
}
