"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

const Page = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    window.open(`https://www.google.com/search?q=${encodeURIComponent(search)}`, "_blank");
    setSearch("");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Welcome to My Page
        </h1>

        {/* Custom SearchBar */}
        <div className="flex justify-center mb-12">
          <form
            onSubmit={handleSearch}
            className="relative w-80 md:w-96 lg:w-[400px]"
          >
            <input
              type="text"
              placeholder="Search Google..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 text-black border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          </form>
        </div>

        {/* Example content */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&q=80"
              width={600}
              height={400}
              alt="Example"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="md:w-1/2 text-gray-700 space-y-4">
            <p>
              Welcome! I am Semik, and I have knowledge in Django, HTML, CSS, Next.js, and JavaScript.
            </p>
            <p>
              My goal is to build interactive, responsive, and engaging websites using modern technologies.
            </p>
            <p>
              This project is built with Next.js, React, and Tailwind CSS to make it fast, responsive, and reliable.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Our Values</h2>
          <p className="text-gray-600">
            Innovation, Creativity, Learning, and Community — building experiences that bring joy and value to everyone.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Page;
