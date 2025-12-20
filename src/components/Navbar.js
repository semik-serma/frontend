"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaYoutube, FaLinkedin, FaSearch } from "react-icons/fa";
import Play from "./Play";
import Searchtheinternet from "./Searchtheinternet";
import { useDateTime } from "@/hooks/useDateTime";

const Navbar = () => {
  const { bsDate } = useDateTime();

  const [searchtogoogle, setsearchtogoogle] = useState("");

  const handlechange = (event) => {
    setsearchtogoogle(event.target.value);
  };

  const handlesearch = (event) => {
    event.preventDefault();
    if (!searchtogoogle.trim()) return;

    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(searchtogoogle)}`,
      "_blank"
    );
  };

  return (
    <div className="flex flex-col items-center">
      {/* TOP BAR */}
      <div className="flex justify-between bg-blue-900 w-screen items-center px-70 h-20 sticky top-0 z-50">
        {/* FLAG */}
        <Image
          src="https://flagcdn.com/np.svg"
          width={30}
          height={40}
          alt="Nepal"
        />

        {/* SEARCH BAR */}
        <form onSubmit={handlesearch} className="relative w-64">
          <Searchtheinternet
            value={searchtogoogle}
            onChange={handlechange}
            className="w-full pr-12 pl-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            <FaSearch />
          </button>
        </form>

        {/* SOCIAL ICONS */}
        <div className="flex gap-4">
          <Link href="https://www.facebook.com/" target="_blank">
            <FaFacebook className="text-2xl text-blue-600" />
          </Link>
          <Link
            href="https://www.youtube.com/@digitalmediacenterphidim6022"
            target="_blank"
          >
            <FaYoutube className="text-2xl text-red-500" />
          </Link>
          <Link href="https://www.linkedin.com/feed/" target="_blank">
            <FaLinkedin className="text-2xl text-blue-400" />
          </Link>
        </div>

        {/* DATE */}
        <div className="text-[20px] text-white">{bsDate}</div>

        {/* GAME / PLAY */}
        <Play />
      </div>

      {/* SECOND BAR */}
      <div className="flex justify-between px-70 w-screen items-center bg-slate-100 text-black h-20">
        <Image
          src="https://tse3.mm.bing.net/th/id/OIP.q6hexFxcdJnqy_OJPTRLTgHaHa"
          width={70}
          height={70}
          alt="Tiger gang"
          className="rounded-full"
        />

        <div className="flex gap-6 text-2xl">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <Link href="/login" className="text-2xl">
          Login
        </Link>

        <Link href="/calculator" className="text-2xl">
          Calculator
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
