"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface CartContextType {
  cart: Product[];
  wishlist: Product[];
  addToCart: (product: Product) => void;
  addToWishlist: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  removeFromWishlist: (productId: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);

  // Load cart and wishlist from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedCart) setCart(JSON.parse(storedCart));
    if (storedWishlist) setWishlist(JSON.parse(storedWishlist));
  }, []);

  // Save cart and wishlist to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Add to Cart
  const addToCart = (product: Product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        alert("Product already in cart!");
        return prev;
      }
      alert("Added to cart!");
      return [...prev, product];
    });
  };

  // Add to Wishlist
  const addToWishlist = (product: Product) => {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        alert("Product already in wishlist!");
        return prev;
      }
      alert("Added to wishlist!");
      return [...prev, product];
    });
  };

  // Remove from Cart
  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  // Remove from Wishlist
  const removeFromWishlist = (productId: string) => {
    setWishlist((prev) => prev.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        addToWishlist,
        removeFromCart,
        removeFromWishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
