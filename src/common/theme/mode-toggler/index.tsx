"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

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
      className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full border border-gray-200 bg-white/80 text-gray-700 shadow-xl backdrop-blur-[0.5rem] transition-all hover:scale-[1.15] active:scale-105 dark:border-gray-800 dark:bg-gray-900/80 dark:text-white"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      )}
    </Button>
  );
}
