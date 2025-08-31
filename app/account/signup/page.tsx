"use client"
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from"../../../lib/firebase";

const SignupPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setSuccess("Signup successful! You can now log in.");
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message || "Signup failed.");
            } else {
                setError("Signup failed.");
            }
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white">
            <div className="w-full max-w-md p-8 rounded-lg shadow-md bg-white">
                <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
                {error && <div className="text-red-500 text-center mb-2">{error}</div>}
                {success && <div className="text-green-500 text-center mb-2">{success}</div>}
                <form onSubmit={handleSignup} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border rounded outline-none"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded outline-none"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-pink-400 text-white py-2 rounded font-semibold hover:bg-pink-500 transition"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignupPage;
