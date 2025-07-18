'use client';
import ProductCard from './ProductCard';
import { Product } from './ProductGrid';

const products: Product[] = [
  {
    id: '1',
    name: 'Elegant Silver Ring',
    description: '925 sterling silver handcrafted ring.',
    price: 1499,
    imageUrl: '/assets/ring3.jpg',
  },
  {
    id: '2',
    name: 'Silver Necklace',
    description: 'Minimalist necklace in fine silver.',
    price: 2299,
    imageUrl: '/assets/necklace.jpg',
  },
  {
    id: '3',
    name: 'Silver Chinar Earrings',
    description: 'Delicate silver studs with timeless charm.',
    price: 899,
    imageUrl: '/assets/earrings1.jpg',
  },
  {
    id: '4',
    name: 'Silver Cuff Bracelet',
    description: 'Bold and minimal silver bracelet.',
    price: 1799,
    imageUrl: '/assets/kadas.jpg',
  },
  {
    id: '5',
    name: 'Silver Ring',
    description: 'Chic silver ring with modern design.',
    price: 499,
    imageUrl: '/assets/ring4.jpg',
  },
  {
    id: '6',
    name: 'Silver Chinar Earrings',
    description: 'Vintage-style silver Chinar Earrings.',
    price: 1399,
    imageUrl: '/assets/earrings3.jpg',
  },
];

const ProductScrollRow = () => {
  return (
    <section className="py-12 px-4">
  <h2 className="text-4xl font-bold mb-6 text-center">Our Collection</h2>
  <div className="flex gap-6 overflow-x-auto scrollbar-hide flex-nowrap">
    {products.map((product) => (
      <div
        key={product.id}
        className="min-w-[400px] max-w-[400px] flex-shrink-0"
      >
        <ProductCard product={product} />
      </div>
    ))}
  </div>
</section>

  );
};

export default ProductScrollRow;
