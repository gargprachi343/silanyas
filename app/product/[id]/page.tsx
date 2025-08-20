"use client";
import { useParams } from "next/navigation";
import { ProductDetail } from "@/components/ProductDetail";
import { products } from "@/data/products";

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => String(p.id) === id);

  if (!product) {
    return <div className="p-6 text-center text-xl">Product not found</div>;
  }

  return (
    <main className="py-10">
      <ProductDetail product={product} />
    </main>
  );
}
