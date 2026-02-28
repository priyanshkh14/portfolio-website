"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  children: string;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  // Split text into words, then words into characters to stagger them
  const words = children.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -90,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.h2
      className="mt-6 mb-12 flex flex-wrap justify-center overflow-hidden text-center text-4xl font-semibold uppercase transform-gpu"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {words.map((word, index) => (
        <span key={index} className="mr-3 flex">
          {word.split("").map((char, charIndex) => (
            <motion.span key={charIndex} variants={child} className="transform-gpu will-change-transform">
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h2>
  );
}
