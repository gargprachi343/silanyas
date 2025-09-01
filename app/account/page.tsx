"use client";

import React, { useState } from "react";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  ConfirmationResult,
} from "firebase/auth";
import { auth } from "../../lib/firebase";

declare global {
  interface Window {
    recaptchaVerifier?: RecaptchaVerifier;
  }
}

const AccountLoginPage = () => {
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [otpRequested, setOtpRequested] = useState(false);
  const [confirmationResult, setConfirmationResult] =
    useState<ConfirmationResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [editingPhone, setEditingPhone] = useState(false);

  // ✅ Request OTP
  const handleRequestOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(
          auth, // ✅ first param must be auth
          "recaptcha-container",
          {
            size: "invisible",
            callback: () => {
              console.log("Recaptcha resolved");
            },
          }
        );
      }

      const appVerifier = window.recaptchaVerifier;
      const fullPhone = countryCode + phone;

      const confirmation = await signInWithPhoneNumber(
        auth,
        fullPhone,
        appVerifier
      );

      setConfirmationResult(confirmation);
      setOtpRequested(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "An error occurred while requesting OTP.");
      } else {
        setError("An error occurred while requesting OTP.");
      }
    }
  };

  // ✅ Handle OTP input
  const handleOtpChange = (value: string, idx: number) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[idx] = value;
      setOtp(newOtp);

      // Auto focus next input
      if (value && idx < 5) {
        const next = document.getElementById(`otp-${idx + 1}`);
        next?.focus();
      }
    }
  };

  // ✅ Verify OTP
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!confirmationResult) {
      setError("No OTP confirmation found.");
      return;
    }

    try {
      const code = otp.join("");
      await confirmationResult.confirm(code);
      alert("OTP Verified!");
    } catch {
      setError("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      {/* 🔹 Required for reCAPTCHA */}
      <div id="recaptcha-container"></div>

      <div className="w-full max-w-md p-8 rounded-lg shadow-md bg-white">
        {!otpRequested || editingPhone ? (
          <>
            {error && (
              <div className="text-red-500 text-center mb-2">{error}</div>
            )}
            <h2 className="text-2xl font-semibold text-center mb-4">
              Enter Mobile Number
            </h2>
            <p className="text-center text-gray-600 mb-6">
              We will send you an OTP to verify your number
            </p>

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

            <div className="my-4 flex items-center justify-center">
              <span className="text-gray-500">Or Login Using</span>
            </div>
            <button className="w-full flex items-center justify-center border py-2 rounded hover:bg-gray-50 transition">
              <span className="mr-2">🟢</span> WhatsApp
            </button>

            <div className="mt-6 text-center">
              <a
                href="#"
                className="text-blue-600 underline text-sm"
              >
                Having trouble logging in.
              </a>
            </div>
            <div className="mt-4 text-xs text-gray-400 text-center">
              I accept that I have read &amp; understood{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="underline">
                T&amp;Cs
              </a>
              .
            </div>
          </>
        ) : (
          <>
            {error && (
              <div className="text-red-500 text-center mb-2">{error}</div>
            )}
            <h2 className="text-2xl font-semibold text-center mb-4">
              Enter OTP
            </h2>
            <p className="text-center text-gray-600 mb-2">
              The OTP is sent on Mobile number
            </p>

            <div className="flex items-center justify-center mb-4">
              <span className="font-medium text-lg">
                {countryCode} {phone}
              </span>
              <button
                type="button"
                className="ml-2 text-blue-600 hover:underline text-sm"
                onClick={() => setEditingPhone(true)}
                title="Edit phone number"
              >
                ✎
              </button>
            </div>

            <form
              onSubmit={handleVerifyOtp}
              className="flex flex-col items-center"
            >
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

            <div className="text-center mt-2 text-gray-500 text-sm">
              Didn&apos;t Receive the OTP?
            </div>
            <div className="text-center">
              <button
                type="button"
                className="text-blue-600 underline text-sm"
                onClick={() => setOtp(["", "", "", "", "", ""])}
              >
                Resend OTP
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AccountLoginPage;
