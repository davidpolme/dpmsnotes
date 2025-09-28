"use client";

import { useEffect } from "react";
import { useThemeStore } from "@/store/themeStore";

export default function Theme() {
  const setTheme = useThemeStore((state) => state.setTheme);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setTheme(true);
    } else {
      setTheme(false); // 👈 fuerza a poner "light" si no está dark
    }
  }, [setTheme]);

  return null;
}
