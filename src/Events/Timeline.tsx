import React from "react";

import { Timeline } from "../ui/timeline.tsx";

export default function TimelineDemo() {
  const data = [
    
    {
      title: "September 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          🌟 Unlocking Financial Wisdom! 🌟
At the intersection of finance and technology, we believe that financial literacy is the cornerstone of success. As a tech-driven institution, we aim to combine finance and technology to empower future innovators.

We are thrilled to announce the inauguration of the Finance Club of IIIT Naya Raipur – 'Money Matters'! 🎉


          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          We are honored to be joined by our esteemed guests:
          </p>
            
          <ul className="list-disc pl-4">
            <li>🎤 Sanjay Kathuria, CFA</li>
            <li>🎤 Nishant Kumar</li>
            <li>🎤 Deven u Pandey</li>
          </ul>


          <div className="grid grid-cols-2 gap-4">
            <img
              src="/Gallery/10.jpg"
              alt="hero template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="/Gallery/15.JPG"
              alt="feature template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "August 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          🎉 Launch Announcement: Welcome to the Money Matter Website! 💰
          </p>
          
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-medium mb-8">
We are thrilled to announce the official launch of the Money Matter club website! 🚀 This platform is designed to keep you updated with our latest events, initiatives, and resources aimed at enhancing financial literacy and empowering students to take charge of their financial future.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/Gallery/website.jpg"
              alt="startup template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="/Gallery/website2.png"
              alt="startup template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Objective",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-sm font-normal mb-4">
          💡 Money Matter Club Objective: 
          </p>

          <ul className="list-disc pl-4">
            <li>✅ Promote financial independence among students.</li>
            <li>✅ Provide financial knowledge to help students make informed decisions.</li>
            <li>✅ Equip students with practical skills for managing resources effectively.</li>
            <li>✅ Foster a community where financial literacy is accessible to all.</li>
            <li>✅ Empower students to build a secure and sustainable future.</li>
          </ul>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              src="/Money_Matters.png"
              alt="bento template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
