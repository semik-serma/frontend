"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Page() {
  const [value, setValue] = useState("");

  function press(v) {
    if (v === "C") return setValue("");
    if (v === "=") {
      try {
        return setValue(String(eval(value)));
      } catch {
        return setValue("Error");
      }
    }
    setValue(value + v);
  }

  const btn = "bg-gray-700 hover:bg-gray-600 h-12 rounded text-lg";

  return (
    <div className="min-h-screen flex flex-col">
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="flex-1 flex items-center justify-center bg-gray-900">
        <div className="bg-gray-800 p-4 rounded-xl w-64 shadow-lg">
          <input
            value={value}
            readOnly
            className="w-full h-14 mb-4 bg-black text-green-400 text-right text-2xl px-3 rounded"
          />

          <div className="grid grid-cols-4 gap-2">
            {["7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+"].map((b) => (
              <button
                key={b}
                onClick={() => press(b)}
                className={`${btn} ${
                  ["/","*","-","+"].includes(b)
                    ? "bg-orange-500 hover:bg-orange-400"
                    : ""
                }`}
              >
                {b}
              </button>
            ))}

            <button
              onClick={() => press("C")}
              className="col-span-4 bg-red-600 h-12 rounded text-lg hover:bg-red-500"
            >
              C
            </button>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
