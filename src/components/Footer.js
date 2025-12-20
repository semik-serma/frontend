import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white px-10 py-12">
      
      <div className="flex flex-col md:flex-row justify-between gap-10 px-70">

        {/* Left Section */}
        <div>
        <div className='flex'>
          <div>
          <h1 className="text-3xl font-semibold mb-4">Contact me on</h1>
</div>
          <div className="flex gap-6 text-3xl mb-6">
            <Link href="https://www.facebook.com/" target="_blank">
              <FaFacebook className="text-blue-600 hover:scale-110 transition" />
            </Link>

            <Link href="https://www.youtube.com/@digitalmediacenterphidim6022" target="_blank">
              <FaYoutube className="text-red-500 hover:scale-110 transition" />
            </Link>

            <Link href="https://www.linkedin.com/feed/" target="_blank">
              <FaLinkedin className="text-blue-400 hover:scale-110 transition" />
            </Link>
          </div>

          
        </div>
        <div className="text-gray-400 space-y-1">
            <p>© 2025 Semikhang Sherma</p>
            <p>Web Developer</p>
            <p>Portfolio Website</p>
          </div>
          </div>

        {/* Right Section */}
        <div className="text-gray-400 space-y-2">
          <p><span className="text-white font-medium">Name:</span> Semikhang Sherma</p>
          <p><span className="text-white font-medium">Role:</span> Full-Stack Developer</p>
          <p><span className="text-white font-medium">Tech:</span> HTML, CSS, JS, React, Next.js, Django</p>
        </div>

      </div>

    </footer>
  )
}

export default Footer
