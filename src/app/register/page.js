"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Register clicked (connect backend later)");
  };

  return (
    <div className="relative min-h-screen flex flex-col text-white overflow-hidden">

      {/* ===== BACKGROUND IMAGE ===== */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 -z-10"
        style={{ backgroundImage: "url('/login-bg.png')" }}
      />
      <div className="absolute inset-0 bg-black/50 -z-10" />

      {/* ===== NAVBAR ===== */}
      <Navbar />

      {/* ===== MAIN CONTENT ===== */}
      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div
          className="w-full max-w-xl rounded-2xl
                     bg-white/10 backdrop-blur-xl
                     border border-white/20
                     shadow-[0_0_60px_rgba(0,255,255,0.2)]
                     p-10"
        >
          {/* TOP TEXT */}
          <p className="text-sm text-center text-gray-300 mb-2">
            Have an account?{" "}
            <Link href="/login" className="underline">
              Login
            </Link>
          </p>

          <h1 className="text-3xl font-semibold text-center mb-8">
            Sign Up
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* FIRST + LAST NAME */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                <input
                  type="text"
                  placeholder="Firstname"
                  required
                  className="w-full rounded-full bg-white/20 py-3 pl-12 pr-4
                             focus:outline-none focus:ring-2 focus:ring-white/40"
                />
              </div>

              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                <input
                  type="text"
                  placeholder="Lastname"
                  required
                  className="w-full rounded-full bg-white/20 py-3 pl-12 pr-4
                             focus:outline-none focus:ring-2 focus:ring-white/40"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full rounded-full bg-white/20 py-3 pl-12 pr-4
                           focus:outline-none focus:ring-2 focus:ring-white/40"
              />
            </div>

            {/* PASSWORD */}
            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                className="w-full rounded-full bg-white/20 py-3 pl-12 pr-12
                           focus:outline-none focus:ring-2 focus:ring-white/40"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* OPTIONS */}
            <div className="flex justify-between text-sm text-gray-300 px-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-white" />
                Remember Me
              </label>
              <Link href="#" className="underline">
                Terms & conditions
              </Link>
            </div>

            {/* REGISTER BUTTON */}
            <button
              type="submit"
              className="w-full py-3 rounded-full
                         bg-white text-black font-medium
                         hover:bg-gray-200 transition"
            >
              Register
            </button>
          </form>
        </div>
      </main>

      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
}
