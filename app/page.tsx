import { Hero } from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import { products } from '../data/products';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Hero />
      <ProductGrid products={products} />
    </main>
  );
}
