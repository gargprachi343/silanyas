import { Hero } from "../components/Hero";
import CategoryScroll from "../components/CategoryScroll";
import { RakshaBanner } from "../components/RakshaBanner";
import ProductGrid from "../components/ProductGrid";
import ProductScrollRow from "../components/ProductScrollRow";
import Features from "../components/Features";
import { collectionproducts } from "../data/collectionproducts";

export default function Home() {
  // Add a fallback to avoid errors if collectionproducts is undefined/null
  const safeCollectionProducts = collectionproducts ?? {};

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Hero />
      <CategoryScroll />
      <RakshaBanner />

      {/* Loop through featured categories */}
      {Object.entries(safeCollectionProducts).map(([category, products]) => (
        <section key={category} className="px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold capitalize">{category}</h2>
            <a
              href={`/category/${category}`}
              className="text-blue-600 hover:underline"
            >
              View All →
            </a>
          </div>

          {/* show featured items for each category */}
          <ProductGrid
            products={products.map((product: any) => ({
              ...product,
              description: product.description ?? "",
            }))}
          />
        </section>
      ))}

      <ProductScrollRow />
      <Features />
    </main>
  );
}

