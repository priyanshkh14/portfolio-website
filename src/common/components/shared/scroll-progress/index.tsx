"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 z-[9999] origin-left bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 dark:from-teal-300 dark:via-blue-400 dark:to-purple-500"
            style={{ scaleX }}
        />
    );
}
