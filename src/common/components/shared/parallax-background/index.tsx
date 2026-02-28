"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ParallaxBackground() {
    const { scrollY } = useScroll();
    const shouldReduceMotion = useReducedMotion();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Parallax translation values. Negative means moving up against the scroll (slower than normal scroll)
    const y1 = useTransform(scrollY, [0, 5000], [0, -1000]); // Moves up as user scrolls down
    const y2 = useTransform(scrollY, [0, 5000], [0, -600]);
    const y3 = useTransform(scrollY, [0, 5000], [0, -1400]);
    const y4 = useTransform(scrollY, [0, 5000], [0, -800]);

    // Do not render heavy parallax orbs if the user prefers reduced motion (saves massive battery/CPU layout calculations)
    if (!isMounted || shouldReduceMotion) return null;

    return (
        <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden transform-gpu will-change-transform">
            {/* 
              PERFORMANCE OPTIMIZATION (Mobile Lag Fix):
              1. Replaced `blur-[100px]` with `blur-3xl` (smaller radius, vastly cheaper to render).
              2. Added `will-change-transform` to offload to GPU.
              3. Reduced opacity to keep the glow soft despite lower blur.
              4. Hid parallax orbs entirely on very small screens (sm:flex) since they are barely visible behind content. 
            */}

            {/* Orb 1: Cyan/Blue */}
            <motion.div
                className="absolute left-[5%] top-[10%] h-[15rem] w-[15rem] rounded-full bg-cyan-300/10 blur-3xl dark:bg-cyan-500/15 sm:h-[30rem] sm:w-[30rem] will-change-transform"
                style={{ y: y1 }}
            />

            {/* Orb 2: Purple/Fuchsia */}
            <motion.div
                className="absolute right-[5%] top-[30%] h-[20rem] w-[20rem] rounded-full bg-fuchsia-300/10 blur-3xl dark:bg-fuchsia-500/15 sm:h-[35rem] sm:w-[35rem] will-change-transform hidden sm:block"
                style={{ y: y2 }}
            />

            {/* Orb 3: Violet/Indigo */}
            <motion.div
                className="absolute left-[15%] top-[60%] h-[15rem] w-[15rem] rounded-full bg-violet-300/10 blur-3xl dark:bg-violet-500/15 sm:h-[30rem] sm:w-[30rem] will-change-transform hidden sm:block"
                style={{ y: y3 }}
            />

            {/* Orb 4: Rose/Pink */}
            <motion.div
                className="absolute right-[15%] top-[90%] h-[20rem] w-[20rem] rounded-full bg-rose-300/10 blur-3xl dark:bg-rose-500/15 sm:h-[40rem] sm:w-[40rem] will-change-transform"
                style={{ y: y4 }}
            />

            {/* Orb 5: Lower deep scrolling orb */}
            <motion.div
                className="absolute left-[40%] top-[120%] h-[18rem] w-[18rem] rounded-full bg-sky-300/10 blur-3xl dark:bg-sky-500/15 will-change-transform hidden sm:block"
                style={{ y: y1 }}
            />
        </div>
    );
}
