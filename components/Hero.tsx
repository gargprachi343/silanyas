'use client';

import { useEffect, useState } from 'react';

const images = [
  '/assets/hero1.png',
  '/assets/hero2.png',
  '/assets/hero3.png',
];

export const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds per slide

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative rounded-2xl overflow-hidden py-40 px-12 flex items-center justify-center text-white text-center"
      style={{
        backgroundImage: `url(${images[current]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.5s ease-in-out',
      }}
    >
    </section>
  );
};



