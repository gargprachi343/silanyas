// data/products.ts

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string; // 👈 important for slug pages
}

export const products: Product[] = [
  // Earrings
  {
    id: "earring-1",
    name: "Elegant Silver Earrings",
    description: "Minimalist silver drop earrings for daily wear.",
    price: 1299,
    imageUrl: "/assets/earrings1.jpg",
    category: "earrings",
  },
  {
    id: "earring-2",
    name: "Stud Silver Earrings",
    description: "Classic silver studs, perfect for any occasion.",
    price: 999,
    imageUrl: "/assets/earrings2.jpg",
    category: "earrings",
  },

  // Pendants
  {
    id: "pendant-1",
    name: "Heart Pendant",
    description: "Sterling silver heart-shaped pendant.",
    price: 1499,
    imageUrl: "/assets/1.png",
    category: "pendants",
  },
  {
    id: "pendant-2",
    name: "Infinity Pendant",
    description: "Silver infinity design pendant with chain.",
    price: 1699,
    imageUrl: "/assets/2.png",
    category: "pendants",
  },

  // Necklaces
  {
    id: "necklace-1",
    name: "Layered Silver Necklace",
    description: "Trendy layered sterling silver necklace.",
    price: 2499,
    imageUrl: "/assets/necklace.jpg",
    category: "necklaces",
  },
  {
    id: "necklace-2",
    name: "Choker Necklace",
    description: "Simple silver choker with minimalist design.",
    price: 1999,
    imageUrl: "/assets/necklace.jpg",
    category: "necklaces",
  },

  // Rings
  {
    id: "ring-1",
    name: "Solitaire Silver Ring",
    description: "Timeless solitaire silver ring.",
    price: 1799,
    imageUrl: "/assets/ring1.jpg",
    category: "rings",
  },
  {
    id: "ring-2",
    name: "Adjustable Band Ring",
    description: "Adjustable silver ring with a sleek design.",
    price: 1399,
    imageUrl: "/assets/ring2.jpg",
    category: "rings",
  },

  // Bracelets
  {
    id: "bracelet-1",
    name: "Charm Bracelet",
    description: "Delicate silver bracelet with tiny charms.",
    price: 1599,
    imageUrl: "/assets/bracelet.jpg",
    category: "bracelets",
  },
  {
    id: "bracelet-2",
    name: "Cuff Bracelet",
    description: "Minimalist open cuff bracelet in silver.",
    price: 1899,
    imageUrl: "/assets/bracelet.jpg",
    category: "bracelets",
  },

  // Rakhi Special
  {
    id: "rakhi-1",
    name: "Silver Rakhi",
    description: "Traditional rakhi crafted in 925 silver.",
    price: 799,
    imageUrl: "/assets/rakhi1.jpg",
    category: "rakhi",
  },
  {
    id: "rakhi-2",
    name: "Personalized Silver Rakhi",
    description: "Engraved rakhi in sterling silver.",
    price: 999,
    imageUrl: "/assets/rakhi2.jpg",
    category: "rakhi",
  },
];
