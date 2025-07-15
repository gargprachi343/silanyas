import { Hero } from '../components/Hero';
import { CategoryScroll } from '../components/CategoryScroll';
import ProductGrid from '../components/ProductGrid';
import { products } from '../data/products';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Hero />
       <CategoryScroll />
      <ProductGrid products={products} />
    </main>
  );
}