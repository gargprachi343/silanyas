export interface StudProduct {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    oldPrice?: number;
    rating?: number;
    reviews?: number;
}

export const studs: StudProduct[] = [
    {
        id: "stud-1",
        name: "Classic Silver Studs",
        imageUrl: "/assets/earrings1.jpg",
        price: 999,
        oldPrice: 1299,
        rating: 4.6,
        reviews: 120,
    },
    {
        id: "stud-2",
        name: "Golden Floral Studs",
        imageUrl: "/assets/earrings2.jpg",
        price: 1199,
        oldPrice: 1499,
        rating: 4.8,
        reviews: 98,
    },
    {
        id: "stud-3",
        name: "Diamond Sparkle Studs",
        imageUrl: "/assets/earrings3.jpg",
        price: 1599,
        oldPrice: 1999,
        rating: 4.9,
        reviews: 210,
    },
]
