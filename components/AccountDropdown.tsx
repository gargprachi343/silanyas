"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { getAuth, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

type User = {
    displayName?: string | null | undefined;
    email?: string | null | undefined;
};

export default function AccountDropdown({ user }: { user: User }) {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const handleLogout = async () => {
        await signOut(getAuth());
        router.push("/signup");
    };

    useEffect(() => {
        const close = () => setOpen(false);
        if (open) {
            window.addEventListener("click", close);
            return () => window.removeEventListener("click", close);
        }
    }, [open]);

    return (
        <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <button className="flex items-center gap-1 cursor-pointer">
                <span className="font-semibold">{user.displayName || user.email}</span>
            </button>
            {open && (
                <div className="absolute right-0 mt-2 w-80 bg-white border shadow-lg rounded-md p-4 z-50">
                    <div className="font-bold text-lg mb-2">{user.displayName || "Account"}</div>
                    <div className="mb-2 text-gray-700 bg-gray-100 rounded px-2 py-1 inline-block">{user.email}</div>
                    <div className="flex flex-col gap-2 mt-4">
                        <Link href="/account/personal-info" className="flex items-center gap-2 hover:bg-gray-100 px-3 py-2 rounded">
                            <span>👤</span> Personal Information
                        </Link>
                        <Link href="/account/orders" className="flex items-center gap-2 hover:bg-gray-100 px-3 py-2 rounded">
                            <span>🛒</span> My Orders
                        </Link>
                        <Link href="/account/addresses" className="flex items-center gap-2 hover:bg-gray-100 px-3 py-2 rounded">
                            <span>📍</span> My Addresses
                        </Link>
                        <Link href="/account/wishlist" className="flex items-center gap-2 hover:bg-gray-100 px-3 py-2 rounded">
                            <span>❤️</span> My Wishlist
                        </Link>
                        <button onClick={handleLogout} className="flex items-center gap-2 hover:bg-gray-100 px-3 py-2 rounded text-left">
                            <span>🚪</span> Log Out
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
