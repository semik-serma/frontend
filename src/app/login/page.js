"use client";

import { useState } from "react";
import Link from "next/link";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login clicked (connect backend later)");
  };

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden text-white">

      {/* ===== BACKGROUND IMAGE ===== */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 -z-10"
        style={{
          backgroundImage: "url('/login-bg.png')",
        }}
      />
      <div className="absolute inset-0 bg-black/60 -z-10" />

      {/* ===== NAVBAR ===== */}
      <Navbar />

      {/* ===== MAIN CONTENT ===== */}
      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div
          className="w-[90%] max-w-md rounded-2xl
                     bg-white/10 backdrop-blur-xl
                     border border-white/20
                     shadow-[0_0_60px_rgba(0,255,255,0.2)]
                     p-8"
        >
          {/* TITLE */}
          <h1 className="text-3xl font-semibold text-center mb-8">
            Login
          </h1>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* EMAIL */}
            <div className="relative">
              <FaEnvelope className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300" />
              <input
                type="email"
                required
                placeholder="Email"
                className="w-full bg-transparent border-b border-white/40
                           py-3 pr-12 pl-2
                           focus:outline-none focus:border-cyan-400
                           placeholder-gray-300"
              />
            </div>

            {/* PASSWORD */}
            <div className="relative">
              <FaLock className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300" />
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="Password"
                className="w-full bg-transparent border-b border-white/40
                           py-3 pr-12 pl-2
                           focus:outline-none focus:border-cyan-400
                           placeholder-gray-300"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-10 top-1/2 -translate-y-1/2 text-gray-300"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* OPTIONS */}
            <div className="flex justify-between items-center text-sm text-gray-300">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-cyan-400" />
                Remember me
              </label>
              <Link href="#" className="hover:underline">
                Forgot Password?
              </Link>
            </div>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="w-full py-3 rounded-full
                         bg-white text-black font-medium
                         hover:bg-cyan-400 transition"
            >
              Login
            </button>
          </form>

          {/* REGISTER */}
          <p className="text-center text-sm text-gray-300 mt-6">
            Don’t have an account?{" "}
            <Link href="/register" className="text-white hover:underline">
              Register
            </Link>
          </p>
        </div>
      </main>

      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
}
