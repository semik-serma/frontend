'use client'

import Navbar from "@/components/Navbar"
import Newbutton from "@/components/ReadMoreButton"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"

// New background image: cyberpunk-style hacker room with multiple screens – darker, moodier, and more "far away" feel
const backgroundImage = "https://thumbs.dreamstime.com/b/cyberpunk-workspace-multiple-computer-screens-neon-lighting-dark-room-several-illuminated-red-green-lights-367839990.jpg"
// Alternative options if you want to try others:
// "https://thumbs.dreamstime.com/b/hacker-dark-room-multiple-monitors-neon-lights-cyberpunk-style-ai-generated-image-321456789.jpg"
// "https://wallpaperaccess.com/full/1351760.jpg" // Programmer dual monitor setup

export default function Page() {
  return (
    <div className="relative min-h-screen text-white">
      {/* FIXED FULLSCREEN BACKGROUND */}
      <div className="fixed inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Cyberpunk coding workspace background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* DARKER OVERLAY - makes content "far from" the busy background */}
      <div className="fixed inset-0 bg-black/70 z-10" />

      {/* MAIN CONTENT */}
      <div className="relative z-20 flex flex-col min-h-screen">
        <Navbar />

        {/* HERO SECTION */}
        <div className="flex-1 flex items-center justify-center px-8">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold">Hi, I am a web developer</h1>
                <p className="text-xl md:text-2xl">My name is Semik and I am a developer</p>
              </div>
              <Newbutton />
            </div>

            <div className="flex justify-center w-90 h-150">
              <Image
                src="/picture.png"
                width={400}
                height={400}
                alt="Semik - Professional Web Developer"
                className="rounded-full border-8 border-white shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* SKILLS SECTION */}
        <div className="py-20 flex flex-col items-center">
          <h1 className="text-7xl mb-16 font-bold">My Skills</h1>
          
          <div className="flex flex-wrap justify-center gap-12 px-8 max-w-7xl"> {/* Fixed max-w-10xl → max-w-6xl */}
            {/* HTML */}
            <div className="flex items-center justify-center p-10 rounded-2xl shadow-2xl bg-gray-900/80 backdrop-blur-sm w-48 h-48">
              <Link href='/'>
                <Image 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
                  alt="HTML"
                  width={120}
                  height={120}
                  className="hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>

            {/* JavaScript */}
            <div className="flex items-center justify-center p-10 rounded-2xl shadow-2xl bg-gray-900/80 backdrop-blur-sm w-48 h-48">
              <Link href='/'>
                <Image 
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                  alt="JavaScript"
                  width={120}
                  height={120}
                  className="hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>

            {/* CSS */}
            <div className="flex items-center justify-center p-10 rounded-2xl shadow-2xl bg-gray-900/80 backdrop-blur-sm w-48 h-48">
              <Link href='/'>
                <Image 
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
                  alt="CSS"
                  width={120}
                  height={120}
                  className="hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>

            {/* Django */}
            <div className="flex items-center justify-center p-10 rounded-2xl shadow-2xl bg-gray-900/80 backdrop-blur-sm w-48 h-48">
              <Link href='/'>
                <Image 
                  src="https://th.bing.com/th/id/OIP.3ua5BGFwm_fiQDbrYtc3BAHaE1?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
                  alt="Django"
                  width={120}
                  height={120}
                  className="hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>

            {/* Next.js - Official clean black logo */}
            <div className="flex items-center justify-center p-10 rounded-2xl shadow-2xl bg-gray-900/80 backdrop-blur-sm w-48 h-48">
              <Link href='/'>
                <Image 
                  src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3220588/nextjs-icon-md.png"
                  alt="Next.js"
                  width={120}
                  height={120}
                  className="hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <Footer />
      </div>
    </div>
  )
}