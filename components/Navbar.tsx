import { Heart, Search, ShoppingCart, User } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50">
      {/* Top banner */}
      <div className="w-full bg-blue-950 p-2 text-white text-center">
  Buy 2 get 10% off – CODE: <span className="font-bold text-blue-200">RAKHI10</span>
</div>
      {/* Main navbar */}
      <nav className="w-full bg-white border-b px-4 py-3 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 w-full">
          <div className="text-3xl font-bold tracking-tight">
            SILANYAS<sup className="text-xl">♦</sup>
          </div>
          <div className="relative w-full max-w-xl mx-auto">
            <input
              type="text"
              placeholder='Search "Bracelets"'
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
            />
            <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-500" />
          </div>
        </div>

        <div className="flex items-center justify-end gap-6 text-xs text-black">

          <div className="flex items-center gap-1 cursor-pointer"><User className="w-5 h-5" /> ACCOUNT</div>
          <div className="flex items-center gap-1 cursor-pointer"><Heart className="w-5 h-5" /> WISHLIST</div>
          <div className="flex items-center gap-1 cursor-pointer"><ShoppingCart className="w-5 h-5" /> CART</div>
        </div>
      </nav>

      {/* Sub-navbar */}
      <div className="hidden lg:flex justify-center gap-8 py-2 text-sm text-gray-800 border-b bg-white">
        <div className="cursor-pointer">Shop by Category ▾</div>
        <div className="cursor-pointer">Gold with Lab Diamonds</div>
        <div className="cursor-pointer text-pink-500 font-medium">Rakhi SALE</div>
        <div className="cursor-pointer">Silanyas Gift Card</div>
        <div className="cursor-pointer">Gift Store ▾</div>
        <div className="cursor-pointer">Mens Jewellery</div>
        <div className="cursor-pointer">Latest Collections ▾</div>
        <div className="cursor-pointer">More at Silanyas ▾</div>
      </div>
    </div>
  );
};

export default Navbar;
