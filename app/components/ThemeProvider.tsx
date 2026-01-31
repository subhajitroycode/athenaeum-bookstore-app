"use client";

import { useEffect } from "react";
import { useThemeStore } from "../store/theme-store";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme, mounted, setMounted, setTheme } = useThemeStore();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme-storage");
    if (!savedTheme) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      setTheme(systemTheme);
    }
    setMounted(true);
  }, [setMounted, setTheme]);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme, mounted]);

  if (!mounted) {
    return <>{children}</>;
  }

  return <>{children}</>;
};

export default ThemeProvider;
