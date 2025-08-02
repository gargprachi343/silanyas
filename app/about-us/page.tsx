"use client";
import { TypeAnimation } from 'react-type-animation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-black text-white px-6 py-12">
        <section className="text-center mb-12">
          <TypeAnimation
            sequence={['Explore our story 🌿 Silanyas', 2000, '', 500]}
            wrapper="h2"
            cursor={true}
            repeat={Infinity}
            className="text-3xl md:text-4xl font-bold text-white"
          />
        </section>

        {/* Add your image + text sections here like the screenshot you uploaded */}
        {/* Example: */}
        <section className="max-w-4xl mx-auto grid gap-10 text-center">
          <div>
            <Image
              src="/assets/your-image-1.png"
              alt="Silver through generations"
              width={200}
              height={200}
              className="mx-auto rounded-md"
            />
            <p className="text-lg font-semibold mt-4">Silver through generations</p>
          </div>
          {/* Repeat similar blocks for the rest of your story */}
        </section>
      </main>
      <Footer />
    </>
  );
}
