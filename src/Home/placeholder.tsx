"use client";

import React from "react";
import { useNavigate } from "react-router-dom";
import PlaceholdersAndVanishInput from "../ui/placeholders-and-vanish-input";
import { FlipWords } from "../ui/flip-words";

export default function PlaceholdersAndVanishInputDemo() {
  const navigate = useNavigate();
  const placeholders = [
    "Paste your YouTube video URL",
    "Enter video link to analyze",
    "Let's analyze your content",
    "Share your YouTube URL",
    "Ready to understand your audience?",
  ];

  const words = ["smarter", "faster", "deeper", "better"];

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const onSubmit = (e, inputValue) => {
    e.preventDefault();
    if (inputValue) {
      navigate(`/analysis?url=${encodeURIComponent(inputValue)}`);
    }
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col justify-center items-center px-4">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-semibold text-gray-800 flex flex-wrap justify-center items-center gap-2">
          Let's analyze <FlipWords words={words} />
        </h1>
        <p className="text-gray-500 mt-4 text-lg">
          Understand your YouTube comments with AI-powered sentiment analysis
        </p>
      </div>
      <div className="w-full max-w-xl">
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
}
