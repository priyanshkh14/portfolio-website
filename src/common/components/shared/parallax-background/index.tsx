"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function ParallaxBackground() {
    const { scrollY } = useScroll();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Parallax translation values. Negative means moving up against the scroll (slower than normal scroll)
    const y1 = useTransform(scrollY, [0, 5000], [0, -1000]); // Moves up as user scrolls down
    const y2 = useTransform(scrollY, [0, 5000], [0, -600]);
    const y3 = useTransform(scrollY, [0, 5000], [0, -1400]);
    const y4 = useTransform(scrollY, [0, 5000], [0, -800]);

    if (!isMounted) return null;

    return (
        <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
            {/* Orb 1: Cyan/Blue */}
            <motion.div
                className="absolute left-[5%] top-[10%] h-[20rem] w-[20rem] rounded-full bg-cyan-300/30 blur-[100px] dark:bg-cyan-500/30 sm:h-[30rem] sm:w-[30rem]"
                style={{ y: y1 }}
            />

            {/* Orb 2: Purple/Fuchsia */}
            <motion.div
                className="absolute right-[5%] top-[30%] h-[25rem] w-[25rem] rounded-full bg-fuchsia-300/30 blur-[120px] dark:bg-fuchsia-500/30 sm:h-[35rem] sm:w-[35rem]"
                style={{ y: y2 }}
            />

            {/* Orb 3: Violet/Indigo */}
            <motion.div
                className="absolute left-[15%] top-[60%] h-[20rem] w-[20rem] rounded-full bg-violet-300/30 blur-[100px] dark:bg-violet-500/30 sm:h-[30rem] sm:w-[30rem]"
                style={{ y: y3 }}
            />

            {/* Orb 4: Rose/Pink */}
            <motion.div
                className="absolute right-[15%] top-[90%] h-[30rem] w-[30rem] rounded-full bg-rose-300/30 blur-[120px] dark:bg-rose-500/30 sm:h-[40rem] sm:w-[40rem]"
                style={{ y: y4 }}
            />

            {/* Orb 5: Lower deep scrolling orb */}
            <motion.div
                className="absolute left-[40%] top-[120%] h-[25rem] w-[25rem] rounded-full bg-sky-300/30 blur-[100px] dark:bg-sky-500/30"
                style={{ y: y1 }}
            />
        </div>
    );
}
