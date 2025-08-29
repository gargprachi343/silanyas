import { notFound } from 'next/navigation';
import Image from 'next/image';
import { earrings } from '@/data/earrings';

interface Props {
    params: { id: string };
}

const earringsList = earrings;

export default function EarringDetailPage({ params }: Props) {
    const product = earringsList.find((item) => item.id === params.id);

    if (!product) {
        return notFound();
    }

    return (
        <div className="max-w-4xl mx-auto py-10 px-4">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                    <Image
                        src={product.imageUrl}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="rounded-lg object-cover"
                    />
                </div>
                <div>
                    <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                    <div className="text-xl font-semibold text-pink-600 mb-4">₹{product.price}</div>
                    {product.oldPrice && (
                        <div className="text-gray-500 line-through mb-2">₹{product.oldPrice}</div>
                    )}
                    <div className="mb-4">
                        <span className="text-yellow-500">{'★'.repeat(Math.round(product.rating || 0))}</span>
                        <span className="ml-2 text-gray-700">
                            {product.rating} ({product.reviews} reviews)
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
