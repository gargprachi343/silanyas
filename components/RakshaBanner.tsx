'use client';

import Image from "next/image";

export const RakshaBanner = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#111537] via-[#104087] to-[#2877a8] py-10 px-4 rounded-3xl overflow-hidden mt-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Left Decorative Image */}
        <div className="flex-shrink-0 relative w-[280px] h-[280px] rounded-[50px] overflow-hidden bg-gradient-to-br from-[#def6ff] to-[#c7e8ff] shadow-xl ring-4 ring-[#5187d9]/40">
  <Image
    src="/assets/raksha-left.jpg"
    alt="Raksha Bandhan"
    fill
    className="object-contain scale-105 transition-transform duration-500 hover:scale-110"
  />
  </div>

        {/* Center Offers */}
        <div className="flex flex-col items-center justify-center gap-4 text-center lg:w-1/3">
          <h2 className="text-3xl font-semibold font-serif text-[#ffffff]">Ties of Love</h2>
          <p className="text-[#e3f4ff]">Tying Hearts, Sharing Love.</p>

          <div className="flex gap-4 flex-wrap justify-center">
            {/* Discount Card 1 */}
            <div className="bg-gradient-to-br from-[#41b6e8] via-[#6cc0ec] to-[#9edaff] text-white p-4 px-6 rounded-2xl font-bold text-sm shadow-md relative">
              <span className="block text-lg">Buy 2</span>
              <span className="block text-sm">Get <span className="text-white font-black">10%</span> OFF</span>
              <span className="mt-1 inline-block bg-white text-[#142546] px-2 py-0.5 rounded-full text-xs font-semibold">RAKHI10</span>
            </div>

            {/* Discount Card 2 */}
            <div className="bg-gradient-to-br from-[#2e389e] to-[#5187d9] text-white p-4 px-6 rounded-2xl font-bold text-sm shadow-md relative">
              <span className="block text-lg">Buy 3</span>
              <span className="block text-sm">Get <span className="text-white font-black">20%</span> OFF</span>
              <span className="mt-1 inline-block bg-white text-[#172a52] px-2 py-0.5 rounded-full text-xs font-semibold">RAKHI20</span>
            </div>
          </div>
        </div>

        {/* Right Side Product Types */}
        <div className="grid grid-cols-2 gap-4 lg:w-1/2">
          {[
            { title: " Rakhis", img: "/assets/rakhis1.jpg" },
            { title: "Trending Rakhis", img: "/assets/rakhib3.jpg" },
            { title: "Bracelet Rakhis", img: "/assets/rakhib1.jpg" },
            { title: " Gen-Alpha Rakhis", img: "/assets/rakhi4.jpg" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-2 shadow-sm text-center">
              <div className="rounded-2xl overflow-hidden mb-2">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={300}
                  height={300}
                  className="w-full h-[120px] object-cover"
                />
              </div>
              <h4 className="text-sm font-semibold text-[#1e2a6b]">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
