"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebaseClient";
import { useRouter } from "next/navigation";

// Firebase is initialized in firebaseClient.ts and auth is imported from there.

export default function SignupPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        try {
            if (isLogin) {
                await signInWithEmailAndPassword(auth, email, password);
                setSuccess("Logged in successfully!");
                router.push("/"); // Redirect to landing page
            } else {
                await createUserWithEmailAndPassword(auth, email, password);
                setSuccess("Account created successfully!");
                router.push("/"); // Redirect to landing page
            }
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("An unexpected error occurred.");
            }
        }
    };

    const handleGoogleLogin = async () => {
        setError("");
        setSuccess("");
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
            setSuccess("Logged in with Google!");
            router.push("/"); // Redirect to landing page
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("An unexpected error occurred.");
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">{isLogin ? "Sign In" : "Sign Up"}</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full mb-4 px-4 py-2 border rounded focus:outline-none"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="w-full mb-4 px-4 py-2 border rounded focus:outline-none"
                    required
                />
                {error && <div className="text-red-500 mb-2 text-center">{error}</div>}
                {success && <div className="text-green-500 mb-2 text-center">{success}</div>}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition mb-4"
                >
                    {isLogin ? "Sign In" : "Sign Up"}
                </button>
                <button
                    type="button"
                    onClick={handleGoogleLogin}
                    className="w-full bg-white text-gray-800 border border-gray-300 py-2 rounded font-semibold hover:bg-gray-100 transition mb-4 flex items-center justify-center gap-2"
                >
                    <span className="inline-block w-5 h-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M24 9.5c3.54 0 6.72 1.22 9.22 3.22l6.9-6.9C36.44 2.34 30.6 0 24 0 14.64 0 6.4 5.48 2.44 13.44l8.06 6.27C12.98 13.1 17.08 9.5 24 9.5z" /><path fill="#34A853" d="M46.1 24.5c0-1.54-.14-3.02-.4-4.45H24v8.43h12.5c-.54 2.74-2.16 5.06-4.6 6.62l7.18 5.59C43.6 36.14 46.1 30.8 46.1 24.5z" /><path fill="#FBBC05" d="M10.5 28.71c-1.02-2.98-1.02-6.23 0-9.21l-8.06-6.27C.86 16.6 0 20.2 0 24c0 3.8.86 7.4 2.44 10.77l8.06-6.27z" /><path fill="#EA4335" d="M24 48c6.6 0 12.14-2.18 16.18-5.95l-7.18-5.59c-2.01 1.35-4.6 2.15-7.5 2.15-6.92 0-11.02-3.6-13.5-7.17l-8.06 6.27C6.4 42.52 14.64 48 24 48z" /><path fill="none" d="M0 0h48v48H0z" /></g></svg>
                    </span>
                    Continue with Google
                </button>
                <div className="text-center">
                    <button
                        type="button"
                        className="text-blue-600 underline"
                        onClick={() => setIsLogin(!isLogin)}
                    >
                        {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
                    </button>
                </div>
            </form>
        </div>
    );
}
