"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          About Me
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&q=80"
              width={600}
              height={400}
              alt="About Image"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="md:w-1/2 text-gray-700 space-y-4">
            <p>
              Hi! My name is <span className="font-semibold">Semik</span>. I love building websites and learning new technologies every day.
            </p>

            <p>
              I have knowledge in{" "}
              <span className="font-semibold">
                Django, HTML, CSS, JavaScript, and Next.js
              </span>. I enjoy creating clean, responsive, and functional web apps.
            </p>

            <p>
              I am always learning and improving my skills so I can build even
              better projects in the future. This website is one of the steps in
              my coding journey.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">My Values</h2>
          <p className="text-gray-600">
            Learning, Creativity, Hard Work, and Consistency — I believe in
            building cool projects and improving every day.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
