"use client";

import React from "react";
import { skillsData } from "@/common/lib/data";
import { useSectionInView } from "@/common/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/common/components/shared/section-heading";
import SectionDivider from "@/common/components/shared/section-divider";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="flex w-full flex-col items-center justify-center py-24 text-center dark:bg-darkBg dark:text-white"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="my-10 flex max-w-[53rem] flex-wrap items-center justify-center gap-2 px-4 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="borderBlack flex items-center justify-center rounded-xl bg-gray-300 px-5 py-3 dark:bg-white/10 dark:text-white/80 cursor-pointer transition-shadow hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <Image
              src={skill[1]}
              alt={skill[0]}
              width={24}
              height={24}
              className="mr-2 inline h-6 w-6"
            />
            {skill[0]}
          </motion.li>
        ))}
      </ul>
      <div className="flex w-full justify-center dark:bg-darkBg">
        <SectionDivider />
      </div>
    </section>
  );
}
