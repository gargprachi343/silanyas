"use client";

import Link from "next/link";
import Image from "next/image";

const categories = [
  { name: "Earrings", slug: "earrings", imageUrl: "/assets/earrings-1.png" },
  { name: "Pendants", slug: "pendants", imageUrl: "/assets/pendant-1.png" },
  { name: "Necklaces", slug: "necklaces", imageUrl: "/assets/necklace-1.png" },
  { name: "Rings", slug: "rings", imageUrl: "/assets/ring-1.png" },
  { name: "Bracelets", slug: "bracelets", imageUrl: "/assets/bracelet-1.png" },
  { name: "Rakhi", slug: "rakhi", imageUrl: "/assets/rakhi-1.png" },
];

export default function CategoryScroll() {
  return (
    <div className="py-12 px-4 text-center">
      <h2 className="text-3xl font-semibold mb-10">Shop by Category</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/category/${category.slug}`}
            className="flex flex-col items-center group"
          >
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-md border border-gray-200">
              <Image
                src={category.imageUrl}
                alt={category.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <p className="mt-3 text-lg font-medium">{category.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

