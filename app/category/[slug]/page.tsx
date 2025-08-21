import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params;

  // Normalize slug (make sure it matches category field in products.ts)
  const category = slug.toLowerCase();

  // Find products belonging to this category
  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === category
  );

  return (
    <div className="px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 capitalize">
        {category}
      </h1>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-xl font-medium text-gray-600">
            No products found in "{category}".
          </p>
        </div>
      )}
    </div>
  );
}
