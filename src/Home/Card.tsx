"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        className=""
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "An investment in knowledge pays the best interest, for it unlocks the doors to a future filled with endless possibilities.",
    name: "Benjamin Franklin",
    title: "Founding Father of the United States and Renowned Economist",
  },
  {
    quote:
      "The true measure of success is not in the wealth you accumulate, but in the lasting impact your financial knowledge creates for generations to come.",
    name: "Warren Buffett",
    title: "Chairman and CEO of Berkshire Hathaway, Legendary Investor",
  },
  {
    quote:
      "Financial freedom isn't just a dream; it's a reality for those who take the time to learn, understand, and apply the principles of smart investing.",
    name: "Robert Kiyosaki",
    title: "Entrepreneur and Author of Rich Dad Poor Dad, Financial Educator",
  },
  {
    quote:
      "It's not the size of your paycheck that determines your wealth, but rather your ability to manage, invest, and grow your resources wisely.",
    name: "Charles A. Jaffe",
    title: "Renowned Financial Journalist and Author",
  },
  {
    quote:
      "The rich understand the true value of time and invest in it relentlessly, while others focus only on accumulating money, missing the bigger picture.",
    name: "Warren Buffett",
    title:
      "Chairman and CEO of Berkshire Hathaway, One of the World’s Most Successful Investors",
  },
];
