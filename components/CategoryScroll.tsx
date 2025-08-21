'use client';

import Image from "next/image";
import { useRef } from "react";
import Link from "next/link"; // 👈 import Link for navigation
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  {
    name: "Rakhi Special",
    image: "/assets/rakhi-special.png",
    slug: "rakhi-special",
    offer: "Buy 3\nGet 20% OFF",
    code: "RAKHI20",
  },
  {
    name: "Pendants",
    image: "/assets/4.png",
    slug: "pendants",
  },
  {
    name: "Silver Rakhi",
    image: "/assets/2.png",
    slug: "silver-rakhi",
  },
  {
    name: "Silver Necklace",
    image: "/assets/6.png",
    slug: "silver-necklace",
  },
  {
    name: "Earrings",
    image: "/assets/1.png",
    slug: "earrings",
  },
  {
    name: "Rings",
    image: "/assets/3.png",
    slug: "rings",
  },
  {
    name: "Bracelets",
    image: "/assets/5.png",
    slug: "bracelets",
  },
];

export const CategoryScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative bg-white py-6">
      {/* Left Scroll Button */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Scrollable Categories */}
      <div className="overflow-x-auto no-scrollbar px-4 sm:px-8 md:px-12">
        <div
          ref={scrollRef}
          className="flex w-max mx-auto gap-x-10 scroll-smooth"
        >
          {categories.map((cat, idx) => (
            <Link 
              href={`/category/${cat.slug}`} // 👈 dynamic category link
              key={idx}
              className="flex flex-col items-center w-24 flex-shrink-0 text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="relative w-28 h-28 rounded-xl overflow-hidden bg-[#120e47] flex items-center justify-center shadow-md">
                {cat.offer ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold text-xs text-center px-2">
                    {cat.offer.split("\n").map((line, i) => (
                      <span key={i}>{line}</span>
                    ))}
                    <span className="mt-1 bg-blue-200 text-black px-2 py-0.5 rounded text-[10px]">
                      {cat.code}
                    </span>
                  </div>
                ) : (
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-contain"
                  />
                )}
              </div>
              <span className="mt-2 text-sm font-medium">{cat.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Right Scroll Button */}
      <button
        onClick={() => scroll('right')}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};
