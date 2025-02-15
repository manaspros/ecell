"use client";

import React from "react";
import { useNavigate } from "react-router-dom";
import PlaceholdersAndVanishInput from "../ui/placeholders-and-vanish-input.tsx";

export default function PlaceholdersAndVanishInputDemo() {
  const navigate = useNavigate();
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    navigate("/analysis"); // Redirect to analysis.jsx
  };
  return (
    <div className="w-screen h-screen bg-white flex flex-col justify-center items-center px-4">
      {" "}
      {/* Changed to full viewport */}
      <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl text-black">
        Lets Find Your Comment analysis
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
