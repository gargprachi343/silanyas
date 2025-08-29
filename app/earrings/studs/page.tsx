"use client";
import { studs, StudProduct } from '@/data/studdata';
import EarringProductCard from '@/components/EarringProductCard';

export default function StudsEarringsPage() {
    return (
        <div className="max-w-6xl mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold mb-8 text-center">Studs Earrings</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {studs.length > 0 ? (
                    studs.map((product: StudProduct) => (
                        <EarringProductCard
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            imageUrl={product.imageUrl}
                            price={product.price}
                            oldPrice={product.oldPrice}
                            rating={product.rating}
                            reviews={product.reviews}
                        />
                    ))
                ) : (
                    <div className="col-span-full text-center text-gray-500">No studs earrings found.</div>
                )}
            </div>
        </div>
    );
}
