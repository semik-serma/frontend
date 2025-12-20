"use client";

import Navbar from "@/components/Navbar";
import Newbutton from "@/components/ReadMoreButton";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import toast from "react-hot-toast";

export default function Page() {
  toast.success("Welcome for visiting")
  return (
    <div className="relative min-h-screen text-white">
      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/mybackground.jpg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* OVERLAY */}
      <div className="fixed inset-0 bg-black/70 z-10" />

      {/* CONTENT */}
      <div className="relative z-20 flex flex-col min-h-screen">
        <Navbar />

        {/* HERO */}
        <div className="flex-1 flex items-center justify-center px-8">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold">
                Hi, I am a web developer
              </h1>
              <p className="text-xl md:text-2xl">
                My name is Semik and I am a developer
              </p>
              <Newbutton />
            </div>

            <div className="flex justify-center m-10">
              <Image
                src="/new3..png"
                alt="My photo"
                width={200}
                height={200}
                className="mt-20 rounded-full"
              />
            </div>
          </div>
        </div>

        {/* SKILLS */}
        <div className="py-20 flex flex-col items-center">
          <h1 className="text-7xl mb-16 font-bold">My Skills</h1>

          <div className="flex flex-wrap justify-center gap-12 px-8 max-w-10xl">

            {/* HTML */}
            <div className="flex flex-col items-center justify-between p-6 rounded-2xl shadow-2xl bg-gray-900/80 backdrop-blur-sm w-52 h-64">
              <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg" alt="HTML" width={90} height={90} />
              </Link>
              <p className="text-sm text-gray-300 text-center">
                Markup language for web structure
              </p>
              <Link
                href="/htmlarticlepage"
                target="_blank"
                className="mt-2 text-sm bg-blue-600 px-4 py-1 rounded hover:bg-blue-500"
              >
                Read More
              </Link>
            </div>

            {/* JavaScript */}
            <div className="flex flex-col items-center justify-between p-6 rounded-2xl shadow-2xl bg-gray-900/80 backdrop-blur-sm w-52 h-64">
              <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript" width={90} height={90} />
              </Link>
              <p className="text-sm text-gray-300 text-center">
                Logic and interactivity for the web
              </p>
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                className="mt-2 text-sm bg-yellow-600 px-4 py-1 rounded hover:bg-yellow-500"
              >
                Read More
              </Link>
            </div>

            {/* CSS */}
            <div className="flex flex-col items-center justify-between p-6 rounded-2xl shadow-2xl bg-gray-900/80 backdrop-blur-sm w-52 h-64">
              <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS" width={90} height={90} />
              </Link>
              <p className="text-sm text-gray-300 text-center">
                Styling and responsive layouts
              </p>
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                target="_blank"
                className="mt-2 text-sm bg-blue-500 px-4 py-1 rounded hover:bg-blue-400"
              >
                Read More
              </Link>
            </div>

            {/* Django */}
            <div className="flex flex-col items-center justify-between p-6 rounded-2xl shadow-2xl bg-gray-900/80 backdrop-blur-sm w-52 h-64">
              <Link href="https://www.djangoproject.com/" target="_blank">
                <Image src="https://th.bing.com/th/id/OIP.3ua5BGFwm_fiQDbrYtc3BAHaE1" alt="Django" width={90} height={90} />
              </Link>
              <p className="text-sm text-gray-300 text-center">
                Secure backend web framework
              </p>
              <Link
                href="https://www.djangoproject.com/"
                target="_blank"
                className="mt-2 text-sm bg-green-700 px-4 py-1 rounded hover:bg-green-600"
              >
                Read More
              </Link>
            </div>

            {/* Next.js */}
            <div className="flex flex-col items-center justify-between p-6 rounded-2xl shadow-2xl bg-gray-900/80 backdrop-blur-sm w-52 h-64">
              <Link href="https://nextjs.org/docs" target="_blank">
                <Image src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3220588/nextjs-icon-md.png" alt="Next.js" width={90} height={90} />
              </Link>
              <p className="text-sm text-gray-300 text-center">
                React framework for production apps
              </p>
              <Link
                href="https://nextjs.org/docs"
                target="_blank"
                className="mt-2 text-sm bg-gray-700 px-4 py-1 rounded hover:bg-gray-600"
              >
                Read More
              </Link>
            </div>

          </div>
        </div>

        {/* FOOTER */}
        <Footer />
      </div>
    </div>
  );
}
