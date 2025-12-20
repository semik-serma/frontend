"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    // Read visits from browser storage
    const storedVisits = localStorage.getItem("visits");

    if (storedVisits) {
      const newCount = Number(storedVisits) + 1;
      localStorage.setItem("visits", newCount);
      setVisits(newCount);
    } else {
      localStorage.setItem("visits", 1);
      setVisits(1);
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg text-center space-y-4">
        <h1 className="text-3xl font-bold">Welcome 👋</h1>

        <p className="text-lg">
          You have visited this page
        </p>

        <p className="text-5xl font-bold text-green-400">
          {visits}
        </p>

        <p className="text-lg">
          times
        </p>
      </div>
    </div>
  );
}
