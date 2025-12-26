"use client";

import Navbar from "@/components/Navbar";
import Newbutton from "@/components/ReadMoreButton";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import toast from "react-hot-toast";
import { useEffect } from "react";



export default function Page() {
  useEffect(()=>{
    const notify = () => {
  toast.success("Welcome for visiting my website!", {
    position: "bottom-right", // <-- here is the key
    autoClose: 3000,          // milliseconds
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
  },[])
  


  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/mybackground.jpg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* OVERLAY */}
      <div className="fixed inset-0 bg-black/70 -z-10" />

      {/* CONTENT */}
      <div className="flex flex-col min-h-screen">
        <Navbar />

        {/* HERO */}
        <section className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            
            {/* TEXT */}
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
                Hi, I am a web developer
              </h1>
              <p className="text-base sm:text-lg md:text-2xl text-gray-200">
                My name is Semik and I am a developer
              </p>
              <div className="flex justify-center md:justify-start">
                <Newbutton />
              </div>
            </div>

            {/* IMAGE */}
            <div className="flex justify-center">
              <Image
                src="/new3..png"
                alt="My photo"
                width={180}
                height={180}
                className="rounded-full"
              />
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="py-16 px-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-center mb-12">
            My Skills
          </h1>

          <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "HTML",
                img: "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg",
                desc: "Markup language for web structure",
                color: "bg-blue-600",
                link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
              },
              {
                name: "JavaScript",
                img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
                desc: "Logic and interactivity for the web",
                color: "bg-yellow-600",
                link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
              },
              {
                name: "CSS",
                img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
                desc: "Styling and responsive layouts",
                color: "bg-blue-500",
                link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
              },
              {
                name: "Django",
                img: "https://th.bing.com/th/id/OIP.3ua5BGFwm_fiQDbrYtc3BAHaE1",
                desc: "Secure backend web framework",
                color: "bg-green-700",
                link: "https://www.djangoproject.com/",
              },
              {
                name: "Next.js",
                img: "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3220588/nextjs-icon-md.png",
                desc: "React framework for production apps",
                color: "bg-gray-700",
                link: "https://nextjs.org/docs",
              },
            ].map((skill) => (
              <div
                key={skill.name}
                className="w-44 h-60 sm:w-52 sm:h-64 flex flex-col items-center justify-between p-4 rounded-2xl bg-gray-900/80 backdrop-blur shadow-xl"
              >
                <Link href={skill.link} target="_blank">
                  <Image src={skill.img} alt={skill.name} width={80} height={80} />
                </Link>

                <p className="text-xs sm:text-sm text-center text-gray-300">
                  {skill.desc}
                </p>

                <Link
                  href='/about'
                  target="_blank"
                  className={`text-xs sm:text-sm px-3 py-1 rounded ${skill.color}`}
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
