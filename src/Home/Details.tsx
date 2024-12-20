import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export default function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover rounded-xl"
            />
          }
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: null, 
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    image: "/Gallery/15.JPG", 
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: null,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    image: "/Gallery/16.JPG",
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: null,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    image: "/Gallery/17.JPG",
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: null,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    image: "/Gallery/18.JPG",
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: null,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    image: "/Gallery/19.JPG",
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: null,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    image: "/Gallery/18.JPG",
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: null,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    image: "/Gallery/19.JPG",
  }
];
