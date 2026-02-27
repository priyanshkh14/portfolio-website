"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/common/components/ui";
import { useHasMounted } from "@/common/lib/hooks";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const hasMounted = useHasMounted();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!hasMounted) return null;

  return (
    <Button
      className="flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded-full border border-gray-200 bg-white/80 text-gray-700 shadow-2xl backdrop-blur-[0.5rem] transition-all hover:scale-[1.15] active:scale-105 dark:border-gray-800 dark:bg-gray-900/80 dark:text-white relative overflow-hidden"
      onClick={toggleTheme}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: -30, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 30, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute flex items-center justify-center"
        >
          {theme === "light" ? (
            <Sun className="h-[1.5rem] w-[1.5rem]" />
          ) : (
            <Moon className="h-[1.5rem] w-[1.5rem]" />
          )}
        </motion.div>
      </AnimatePresence>
    </Button>
  );
}
