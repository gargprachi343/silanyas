// data/earrings.ts

export interface EarringProduct {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    oldPrice?: number;
    rating?: number;
    reviews?: number;
    description: string;
}

export const earrings: EarringProduct[] = [
    {
        id: "earring-1",
        name: "Silver Small Heart Drop Earrings",
        imageUrl: "/assets/earrings1.jpg",
        price: 1299,
        oldPrice: 1799,
        rating: 4.7,
        description: "Elegant heart-shaped drop earrings crafted from pure 925 silver. Perfect for everyday wear with a touch of romance.",
        reviews: 225,
    },
    {
        id: "earring-2",
        name: "Silver Zircon Drizzle Drop Earrings",
        imageUrl: "/assets/earrings2.jpg",
        price: 2099,
        oldPrice: 2799,
        rating: 4.9,
        description: "Stunning zircon-studded drop earrings in pure silver. Sparkles beautifully in light, making them perfect for special occasions.",
        reviews: 444,
    },
    {
        id: "earring-3",
        name: "Anushka Sharma Golden Bloom Earrings",
        imageUrl: "/assets/earrings3.jpg",
        price: 1999,
        oldPrice: 2999,
        rating: 4.8,
        description: "Celebrity collection featuring delicate floral designs in gold-plated silver. Endorsed by Anushka Sharma for its elegant craftsmanship.",
        reviews: 128,
    },
    {
        id: "earring-4",
        name: "Silver Pearl Small Stud Earrings",
        imageUrl: "/assets/earrings4.jpg",
        price: 1299,
        oldPrice: 1799,
        rating: 4.8,
        description: "Classic pearl studs set in pure silver. Timeless design suitable for both casual and formal wear.",
        reviews: 287,
    },
    {
        id: "earring-5",
        name: "Anushka Sharma Golden Bloom Earrings",
        imageUrl: "/assets/earrings3.jpg",
        price: 1999,
        oldPrice: 2999,
        rating: 4.8,
        description: "Celebrity collection featuring delicate floral designs in gold-plated silver. Endorsed by Anushka Sharma for its elegant craftsmanship.",
        reviews: 128,
    },
    {
        id: "earring-6",
        name: "Silver Pearl Small Stud Earrings",
        imageUrl: "/assets/earrings4.jpg",
        price: 1299,
        oldPrice: 1799,
        rating: 4.8,
        description: "Classic pearl studs set in pure silver. Timeless design suitable for both casual and formal wear.",
        reviews: 287,
    },
    {
        id: "earring-7",
        name: "Anushka Sharma Golden Bloom Earrings",
        imageUrl: "/assets/earrings3.jpg",
        price: 1999,
        oldPrice: 2999,
        rating: 4.8,
        description: "Celebrity collection featuring delicate floral designs in gold-plated silver. Endorsed by Anushka Sharma for its elegant craftsmanship.",
        reviews: 128,
    },
    {
        id: "earring-8",
        name: "Silver Pearl Small Stud Earrings",
        imageUrl: "/assets/earrings4.jpg",
        price: 1299,
        oldPrice: 1799,
        rating: 4.8,
        description: "Classic pearl studs set in pure silver. Timeless design suitable for both casual and formal wear.",
        reviews: 287,
    },
];
