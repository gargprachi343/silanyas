"use client"

import React, { useState, useEffect } from "react";
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "../../../lib/firebase";

const LoginPage = () => {
    const [phone, setPhone] = useState("");
    const [countryCode, setCountryCode] = useState("+91");
    const [otpRequested, setOtpRequested] = useState(false);
    const [confirmationResult, setConfirmationResult] = useState<import("firebase/auth").ConfirmationResult | null>(null);
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [error, setError] = useState<string | null>(null);
    const [editingPhone] = useState(false);

    useEffect(() => {
        if (!window.recaptchaVerifier && typeof window !== "undefined") {
            window.recaptchaVerifier = new RecaptchaVerifier(
                auth,
                "recaptcha-container",
                { size: "invisible", callback: () => { } }
            );
        }
    }, []);

    const handleRequestOtp = (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        const appVerifier = window.recaptchaVerifier;
        const fullPhone = countryCode + phone;
        signInWithPhoneNumber(auth, fullPhone, appVerifier)
            .then((confirmation: import("firebase/auth").ConfirmationResult) => {
                setConfirmationResult(confirmation);
                setOtpRequested(true);
            })
            .catch((err: Error) => {
                setError(err.message);
            });
    };

    const handleOtpChange = (value: string, idx: number) => {
        if (/^\d?$/.test(value)) {
            const newOtp = [...otp];
            newOtp[idx] = value;
            setOtp(newOtp);
            if (value && idx < 5) {
                const next = document.getElementById(`otp-${idx + 1}`);
                next?.focus();
            }
        }
    };

    const handleVerifyOtp = (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        if (!confirmationResult) {
            setError("No OTP confirmation found.");
            return;
        }
        const code = otp.join("");
        confirmationResult
            .confirm(code)
            .then(() => {
                alert("OTP Verified!");
            })
            .catch(() => {
                setError("Invalid OTP. Please try again.");
            });
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white">
            <div id="recaptcha-container"></div>
            <div className="w-full max-w-md p-8 rounded-lg shadow-md bg-white">
                {!otpRequested || editingPhone ? (
                    <>
                        {error && <div className="text-red-500 text-center mb-2">{error}</div>}
                        <h2 className="text-2xl font-semibold text-center mb-4">Login with Mobile Number</h2>
                        <form onSubmit={handleRequestOtp} className="space-y-4">
                            <div className="flex items-center border rounded overflow-hidden">
                                <select
                                    value={countryCode}
                                    onChange={(e) => setCountryCode(e.target.value)}
                                    className="px-2 py-2 bg-gray-100 border-r outline-none"
                                >
                                    <option value="+91">🇮🇳 +91</option>
                                </select>
                                <input
                                    type="tel"
                                    placeholder="Phone number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="flex-1 px-4 py-2 outline-none"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-pink-400 text-white py-2 rounded font-semibold hover:bg-pink-500 transition"
                            >
                                Request OTP
                            </button>
                        </form>
                    </>
                ) : (
                    <>
                        {error && <div className="text-red-500 text-center mb-2">{error}</div>}
                        <h2 className="text-2xl font-semibold text-center mb-4">Enter OTP</h2>
                        <form onSubmit={handleVerifyOtp} className="flex flex-col items-center">
                            <div className="flex space-x-2 mb-6">
                                {otp.map((digit, idx) => (
                                    <input
                                        key={idx}
                                        id={`otp-${idx}`}
                                        type="text"
                                        inputMode="numeric"
                                        maxLength={1}
                                        value={digit}
                                        onChange={(e) => handleOtpChange(e.target.value, idx)}
                                        className="w-10 h-12 text-center border-b-2 border-gray-300 text-xl focus:border-pink-400 outline-none"
                                    />
                                ))}
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-pink-400 text-white py-2 rounded font-semibold hover:bg-pink-500 transition mb-2"
                            >
                                Verify OTP
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default LoginPage;
