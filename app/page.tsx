import { Hero } from '../components/Hero';
import { CategoryScroll } from '../components/CategoryScroll';
import { RakshaBanner } from '../components/RakshaBanner';
import ProductGrid from '../components/ProductGrid';
import ProductScrollRow from '../components/ProductScrollRow';
import Features  from '../components/Features';
import { products } from '../data/products';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Hero />
      <CategoryScroll />
      <RakshaBanner />
      <ProductGrid products={products} />
       <ProductScrollRow />
      <Features />
    </main>
  );
}
