"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HtmlUpdatePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="flex-1 bg-gray-100 text-black px-6 md:px-16 py-12">
        <article className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-6">
          
          {/* TITLE */}
          <h1 className="text-4xl font-bold text-gray-900">
            HTML: Latest Updates & Overview
          </h1>

          {/* META INFO */}
          <div className="text-sm text-gray-500">
            <span>Updated on: </span>
            <span className="font-medium">2025</span>
          </div>

          {/* INTRO */}
          <p className="text-lg leading-relaxed">
            HTML (HyperText Markup Language) is the backbone of the web. 
            It is used to structure content on websites and works together 
            with CSS and JavaScript to create modern web applications.
          </p>

          {/* SECTION 1 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-800">
              What is HTML?
            </h2>
            <p>
              HTML is a standard markup language used to define the structure
              of web pages. It uses elements like headings, paragraphs, images,
              links, forms, and tables to describe content.
            </p>
          </section>

          {/* SECTION 2 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-800">
              Why HTML is Important
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Defines the structure of web pages</li>
              <li>Works with CSS for styling</li>
              <li>Works with JavaScript for interactivity</li>
              <li>SEO-friendly and accessible</li>
            </ul>
          </section>

          {/* SECTION 3 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-800">
              Latest HTML Trends
            </h2>
            <p>
              Modern HTML focuses on semantic elements like 
              <code className="bg-gray-200 px-1 rounded mx-1">&lt;header&gt;</code>,
              <code className="bg-gray-200 px-1 rounded mx-1">&lt;section&gt;</code>,
              and
              <code className="bg-gray-200 px-1 rounded mx-1">&lt;footer&gt;</code>
              to improve accessibility and SEO.
            </p>
          </section>

          {/* CONCLUSION */}
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-800">
              Conclusion
            </h2>
            <p>
              HTML is still evolving and remains essential for every web
              developer. Understanding HTML deeply helps you build better,
              faster, and more accessible websites.
            </p>
          </section>

        </article>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
