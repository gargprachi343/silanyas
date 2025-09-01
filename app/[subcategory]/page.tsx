"use client";

import { collectionproducts } from "@/data/collectionproducts";
import ProductCard from "@/components/ProductCard";

export default function SubCategoryPage({ params }: { params: { subcategory: string } }) {
  const { subcategory } = params;

  const allProducts = Object.values(collectionproducts)
    .flat()
    .map((product: any) => ({
      ...product,
      description: product.description ?? "",
      price: product.price ?? 0,
      imageUrl: product.imageUrl ?? "",
    }));

  type Product = {
    id: string;
    name?: string;
    description?: string;
    category?: string;
    subcategory?: string;
    [key: string]: any;
  };
  const products = allProducts.filter((p: Product) => {
    const category = p.category?.toLowerCase() || "";
    const subCat = p.subcategory?.toLowerCase() || "";
    return (
      category === subcategory.toLowerCase() ||
      subCat === subcategory.toLowerCase()
    );
  });

  return (
    <div className="px-6 py-10">
      {products.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={{ ...product, description: product.description ?? "", price: product.price ?? 0, imageUrl: product.imageUrl ?? "" }}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No products found in {subcategory}.</p>
      )}
    </div>
  );
}
