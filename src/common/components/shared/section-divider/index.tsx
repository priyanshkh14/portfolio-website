"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      className="my-10 hidden items-center justify-center md:flex"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.svg
        width="30"
        height="100"
        viewBox="0 0 30 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M15 0 C 15 33, 25 33, 15 50 C 5 66, 15 66, 15 100"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          className="text-gray-300 dark:text-gray-500"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.circle
          cx="15"
          cy="50"
          r="5"
          fill="currentColor"
          className="text-gray-400 dark:text-white"
          animate={{
            y: [-30, 30, -30],
            scale: [1, 1.2, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.svg>
    </motion.div>
  );
}
