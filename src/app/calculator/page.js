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

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-black to-gray-900">

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN */}
      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div
          className="w-full max-w-sm rounded-2xl
                     bg-white/10 backdrop-blur-xl
                     border border-white/20
                     shadow-[0_0_40px_rgba(0,255,255,0.2)]
                     p-6"
        >
          {/* DISPLAY */}
          <input
            value={value}
            readOnly
            placeholder="0"
            className="w-full h-16 mb-6 bg-black/70
                       text-green-400 text-right text-3xl
                       px-4 rounded-xl outline-none"
          />

          {/* BUTTONS */}
          <div className="grid grid-cols-4 gap-3">

            {["7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+"].map((b) => (
              <button
                key={b}
                onClick={() => press(b)}
                className={`
                  h-14 rounded-xl text-lg font-medium
                  transition active:scale-95
                  ${
                    ["/","*","-","+"].includes(b)
                      ? "bg-orange-500 hover:bg-orange-400 text-white"
                      : b === "="
                      ? "bg-emerald-500 hover:bg-emerald-400 text-white"
                      : "bg-gray-700 hover:bg-gray-600 text-white"
                  }
                `}
              >
                {b}
              </button>
            ))}

            {/* CLEAR */}
            <button
              onClick={() => press("C")}
              className="col-span-4 h-14 rounded-xl
                         bg-red-600 hover:bg-red-500
                         text-white text-lg font-medium
                         transition active:scale-95"
            >
              Clear
            </button>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
