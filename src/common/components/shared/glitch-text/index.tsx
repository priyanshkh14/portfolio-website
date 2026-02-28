"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type GlitchTextProps = {
    text: string;
    className?: string;
};

export default function GlitchText({ text, className = "" }: GlitchTextProps) {
    const [isGlitching, setIsGlitching] = useState(false);

    useEffect(() => {
        // Randomly trigger the glitch effect
        const glitchInterval = setInterval(() => {
            if (Math.random() > 0.5) {
                setIsGlitching(true);
                setTimeout(() => setIsGlitching(false), 200 + Math.random() * 300); // Glitch for 200-500ms
            }
        }, 3000); // Try every 3 seconds

        return () => clearInterval(glitchInterval);
    }, []);

    return (
        <div className={`relative inline-block ${className}`}>
            <motion.span
                className="relative z-10 block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {text}
            </motion.span>

            {/* Cyan Glitch layer */}
            {isGlitching && (
                <motion.span
                    className="absolute left-[-2px] top-0 z-0 block text-cyan-400 opacity-70 mix-blend-screen"
                    animate={{
                        x: [0, -4, 2, -2, 0],
                        y: [0, 2, -1, 1, 0],
                    }}
                    transition={{ duration: 0.2, repeat: Infinity, repeatType: "mirror" }}
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)" }}
                >
                    {text}
                </motion.span>
            )}

            {/* Magenta Glitch layer */}
            {isGlitching && (
                <motion.span
                    className="absolute left-[2px] top-0 z-0 block text-fuchsia-500 opacity-70 mix-blend-screen"
                    animate={{
                        x: [0, 3, -1, 4, 0],
                        y: [0, -2, 1, -1, 0],
                    }}
                    transition={{ duration: 0.15, repeat: Infinity, repeatType: "mirror" }}
                    style={{ clipPath: "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)" }}
                >
                    {text}
                </motion.span>
            )}
        </div>
    );
}
