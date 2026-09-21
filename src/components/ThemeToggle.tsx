"use client";

import { Sun, Moon } from "lucide-react";
import { useThemeStore } from "@/store/useThemeStore";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useThemeStore();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className={`relative flex items-center justify-center w-9 h-9 rounded-lg border transition-all duration-300 cursor-pointer ${
        isDark
          ? "bg-slate-800 border-slate-700 text-amber-400 hover:bg-slate-700 hover:border-slate-600"
          : "bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200 hover:border-slate-300"
      } ${className}`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span
        className={`absolute transition-all duration-300 ${
          isDark ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
        }`}
      >
        <Sun className="w-4 h-4" />
      </span>
      <span
        className={`absolute transition-all duration-300 ${
          isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
        }`}
      >
        <Moon className="w-4 h-4" />
      </span>
    </button>
  );
}
