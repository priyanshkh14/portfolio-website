"use client";

import dynamic from "next/dynamic";
import Hero from "@/common/components/sections/hero";

// Lazy-load all sections below the fold to reduce initial JavaScript bundle size
// SEO is preserved as Next.js can still SSR dynamic imports by default
const About = dynamic(() => import("@/common/components/sections/about"));
const Experience = dynamic(() => import("@/common/components/sections/experience"));
const Projects = dynamic(() => import("@/common/components/sections/projects"));
const Academics = dynamic(() => import("@/common/components/sections/academics"));
const Skills = dynamic(() => import("@/common/components/sections/skills"));
const Contact = dynamic(() => import("@/common/components/sections/contact"));

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center p-0">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Academics />
      <Skills />
      <Contact />
    </main>
  );
}
