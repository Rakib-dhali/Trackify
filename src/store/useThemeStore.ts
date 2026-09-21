"use client";

import { create } from "zustand";

type Theme = "light" | "dark";

interface ThemeStore {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

function applyTheme(theme: Theme) {
  if (typeof document !== "undefined") {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }
}

function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "light";
  try {
    const stored = localStorage.getItem("trackify-theme");
    if (stored === "dark" || stored === "light") return stored;
  } catch {
    // localStorage not available
  }
  return "light";
}

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: getStoredTheme(),

  toggleTheme: () =>
    set((state) => {
      const next: Theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("trackify-theme", next);
      applyTheme(next);
      return { theme: next };
    }),

  setTheme: (theme: Theme) => {
    localStorage.setItem("trackify-theme", theme);
    applyTheme(theme);
    set({ theme });
  },
}));
