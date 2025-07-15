// app/product/[id]/page.tsx

import { ProductDetail } from '@/components/ProductDetail';
import { products } from '@/data/products';

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return <div className="p-6 text-center text-xl">Product not found</div>;
  }

  return (
    <main className="py-10">
      <ProductDetail product={product} />
    </main>
  );
}
