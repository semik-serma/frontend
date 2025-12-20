"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Page() {
  const choices = ["Rock", "Paper", "Scissors"];

  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  function play(choice) {
    const computer = choices[Math.floor(Math.random() * 3)];
    setPlayerChoice(choice);
    setComputerChoice(computer);

    if (choice === computer) {
      setResult("It's a Draw 😐");
    } else if (
      (choice === "Rock" && computer === "Scissors") ||
      (choice === "Paper" && computer === "Rock") ||
      (choice === "Scissors" && computer === "Paper")
    ) {
      setResult("You Win 🎉");
    } else {
      setResult("You Lose 😢");
    }
  }

  return (
    <div>
        <Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-xl w-96 text-center space-y-6">
        
        <h1 className="text-3xl font-bold">Rock Paper Scissors</h1>

        {/* BUTTONS */}
        <div className="flex justify-center gap-4">
          {choices.map((choice) => (
            <button
              key={choice}
              onClick={() => play(choice)}
              className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded text-lg"
            >
              {choice}
            </button>
          ))}
        </div>

        {/* RESULTS */}
        {playerChoice && (
          <div className="space-y-2 text-lg">
            <p>
              <span className="font-semibold">You:</span> {playerChoice}
            </p>
            <p>
              <span className="font-semibold">Computer:</span> {computerChoice}
            </p>
            <p className="text-2xl font-bold">{result}</p>
          </div>
        )}
      </div>
    </div>
    <Footer/>
    </div>
  );
}
