import React from "react";
import Link from "next/link";
import { FaFacebook, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-16">

        <div className="flex flex-col md:flex-row justify-between gap-16">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            {/* CONTACT + ICONS (FLEX) */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <h2 className="text-2xl font-semibold">
                Contact me on
              </h2>

              <div className="flex gap-5 text-2xl">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-blue-600 hover:scale-110 transition" />
                </a>

                <a href="https://www.youtube.com/@digitalmediacenterphidim6022" target="_blank" rel="noopener noreferrer">
                  <FaYoutube className="text-red-600 hover:scale-110 transition" />
                </a>

                <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-blue-600 hover:scale-110 transition" />
                </a>

                <a href="https://github.com/semik-serma/frontend" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="hover:scale-110 transition" />
                </a>
              </div>
            </div>

            {/* COPYRIGHT */}
            <div className="text-gray-400 text-sm space-y-1">
              <p>© 2025 Semikhang Sherma</p>
              <p>Web Developer</p>
              <p>Portfolio Website</p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="text-gray-400 space-y-2 text-sm">
            <p>
              <span className="text-white font-medium">Name:</span>{" "}
              Semikhang Sherma
            </p>
            <p>
              <span className="text-white font-medium">Role:</span>{" "}
              Full-Stack Developer
            </p>
            <p>
              <span className="text-white font-medium">Tech:</span>{" "}
              HTML, CSS, JS, React, Next.js, Django
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
