import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex bg-slate-950 p-10 px-0 text-2xl justify-around text-white text-2xl">
      
      <div>
        <div className="flex gap-20 text-3xl items-center">
          <h1 className="font-semibold">Contact us on</h1>

          <div className="flex gap-5">
            <Link href="https://www.facebook.com/">
              <FaFacebook className="text-blue-600" />
            </Link>

            <Link href="https://www.youtube.com/@digitalmediacenterphidim6022">
              <FaYoutube className="text-red-500" />
            </Link>

            <Link href="https://www.linkedin.com/feed/">
              <FaLinkedin className="text-blue-400" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col mt-4 text-2xl text-gray-300">
          <div>Year: 2025</div>
          <div>About: Portfolio</div>
          <div>Developer: Semikhang</div>
        </div>
      </div>

      <div className="flex flex-col text-2xl text-gray-300">
        <div>Father: Dhanraj Sherma</div>
        <div>Mother: Eljeena Lawti</div>
        <div>Brother: Tangsang Sherma</div>
        <div>@Dev: Semik Serma</div>
      </div>

    </footer>
  )
}

export default Footer
