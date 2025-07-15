'use client';

import ProductCard from './ProductCard'; // ✅ Default import
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  onSale?: boolean;
}

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <section className="bg-white py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;

