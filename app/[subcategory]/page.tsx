"use client";

import { collectionproducts } from "@/data/collectionproducts";
import ProductCard from "@/components/ProductCard";

export default function SubCategoryPage({ params }: { params: { subcategory: string } }) {
  const { subcategory } = params;

  // merge all product arrays into one
  const allProducts = Object.values(collectionproducts).flat();

  // filter by category or subcategory (case insensitive)
  const products = allProducts.filter((p: any) => {
    const category = p.category?.toLowerCase() || "";
    const subCat = p.subcategory?.toLowerCase() || "";
    return (
      category === subcategory.toLowerCase() ||
      subCat === subcategory.toLowerCase()
    );
  });

  return (
    <div className="px-6 py-10">
      <h1 className="text-2xl font-bold capitalize mb-6">{subcategory}</h1>

      {products.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product: any) => (
            <ProductCard
              key={product.id}
              product={{ ...product, description: product.description ?? "" }}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No products found in {subcategory}.</p>
      )}
    </div>
  );
}
