"use client";

import { Heart, Search, ShoppingCart, User as UserIcon, ChevronDown } from "lucide-react";
import Link from "next/link";

import AccountDropdown from "./AccountDropdown";
import { onAuthStateChanged } from "firebase/auth";
import type { User as FirebaseUser } from "firebase/auth";
import { auth } from "../firebaseClient";
import { useCart } from "@/context/CartContext";
import { useState, useEffect } from "react";

const Navbar = () => {
  const { cart, wishlist } = useCart();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);

  const menuItems = {
    "New Arrivals": ["Earrings", "Pendants", "Rings"],
    // "Best Sellers": ["Top Earrings", "Top Rings"],
    "Earrings": ["Studs", "Hoops", "Jhumkas", "Danglers"],
    "Necklaces & Pendants": [],
    "Rings": [],
    // "Bracelets & Bangles": ["Silver", "Charm Bracelets", "Cuffs"],
    "Toe Rings": ["Plain"],
    "Gifting": ["Rakhi", "Festive Specials", "Gift Cards"],
  };

  const [user, setUser] = useState<FirebaseUser | null>(null);
  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className="sticky top-0 z-50">
        {/* Top banner */}
        <div className="w-full bg-blue-950 p-2 text-white text-center">
          Buy 2 get 10% off – CODE:{" "}
          <span className="font-bold text-blue-200">NEW10</span>
        </div>

        {/* Main navbar */}
        <nav className="w-full bg-white border-b px-4 py-3 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 w-full">
            {/* Logo on the left */}
            <Link href="/" className="font-bold text-2xl lg:text-3xl text-blue-900">
              Silanyas
            </Link>
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
            {user ? (
              <AccountDropdown user={{
                ...user,
                displayName: user.displayName ?? undefined,
                email: user.email ?? undefined
              }} />
            ) : (
              <Link href="/signup" className="flex items-center gap-1 cursor-pointer">
                <UserIcon className="w-5 h-5" /> ACCOUNT
              </Link>
            )}

            <Link href="/wishlist" className="flex items-center gap-1 cursor-pointer">
              <Heart className="w-5 h-5" /> WISHLIST
              {wishlist.length > 0 && (
                <span className="ml-1 bg-blue-500 text-white rounded-full px-2 text-xs font-bold">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <Link href="/cart" className="flex items-center gap-1 cursor-pointer">
              <ShoppingCart className="w-5 h-5" /> CART
              {cart.length > 0 && (
                <span className="ml-1 bg-orange-500 text-white rounded-full px-2 text-xs font-bold">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>
        </nav>

        {/* Sub-navbar with dropdowns */}
        <div className="hidden lg:flex justify-center gap-8 py-2 text-sm text-gray-800 border-b bg-white relative">
          {Object.keys(menuItems).map((category) => {
            const isOpen = openMenu === category;

            return (
              <div
                key={category}
                className="relative group"
                onMouseEnter={() => {
                  if (closeTimeout) clearTimeout(closeTimeout);
                  setOpenMenu(category);
                }}
              >
                {/* Category Link */}
                <Link
                  href={`/${category === "Toe Rings" ? "toerings" : category === "Pendants" ? "pendant" : category === "Necklaces & Pendants" ? "pendant" : category === "ring" ? "rings" : category === "Rings" ? "ring" : category.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setOpenMenu(isOpen ? null : category)}
                  className={`cursor-pointer flex items-center gap-1 px-2 py-1 rounded transition-colors duration-200
                  ${isOpen ? "text-blue-600 font-semibold bg-blue-50" : "hover:text-blue-500"}`}
                >
                  {category} <ChevronDown className="w-3 h-3" />
                </Link>

                {/* Dropdown */}
                {isOpen && (
                  <div
                    className="absolute left-0 mt-2 bg-white border shadow-lg rounded-md p-2 w-48 z-50"
                    onMouseLeave={() => {
                      const timeout = setTimeout(() => setOpenMenu(null), 120);
                      setCloseTimeout(timeout);
                    }}
                    onMouseEnter={() => {
                      if (closeTimeout) clearTimeout(closeTimeout);
                    }}
                  >
                    {menuItems[category as keyof typeof menuItems].map((item) => {
                      let link;
                      if (category === "Earrings" && item.toLowerCase() === "studs") {
                        link = "/earrings/studs";
                      } else if (item.toLowerCase() === "earrings") {
                        link = "/earrings";
                      } else if (category === "Toe Rings") {
                        link = "/toerings";
                      } else if (category === "Pendants") {
                        link = "/pendant";
                      } else {
                        link = `/${item.toLowerCase().replace(/\s+/g, "-")}`;
                      }
                      return (
                        <Link
                          key={item}
                          href={link}
                          className="block px-3 py-1 text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded transition-colors duration-200"
                        >
                          {item}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
