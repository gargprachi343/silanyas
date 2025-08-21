export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

export const categoryProducts: Product[] = [
  // Earrings
  {
    id: 101,
    name: "Classic Silver Studs",
    price: 999,
    image: "/assets/earrings/earring1.png",
    category: "earrings",
  },
  {
    id: 102,
    name: "Dangling Hoops",
    price: 1299,
    image: "/assets/earrings/earring2.png",
    category: "earrings",
  },
  {
    id: 103,
    name: "Crystal Drop Earrings",
    price: 1599,
    image: "/assets/earrings/earring3.png",
    category: "earrings",
  },

  // Pendants
  {
    id: 201,
    name: "Heart Silver Pendant",
    price: 1799,
    image: "/assets/pendants/pendant1.png",
    category: "pendants",
  },
  {
    id: 202,
    name: "Evil Eye Pendant",
    price: 1499,
    image: "/assets/pendants/pendant2.png",
    category: "pendants",
  },
  {
    id: 203,
    name: "Pearl Pendant",
    price: 1999,
    image: "/assets/pendants/pendant3.png",
    category: "pendants",
  },

  // Bracelets
  {
    id: 301,
    name: "Minimal Chain Bracelet",
    price: 1199,
    image: "/assets/bracelets/bracelet1.png",
    category: "bracelets",
  },
  {
    id: 302,
    name: "Charm Bracelet",
    price: 1399,
    image: "/assets/bracelets/bracelet2.png",
    category: "bracelets",
  },
  {
    id: 303,
    name: "Beaded Silver Bracelet",
    price: 1699,
    image: "/assets/bracelets/bracelet3.png",
    category: "bracelets",
  },
];
