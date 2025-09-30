import { create } from "zustand";

type ThemeState = {
  darkMode: boolean;
  toggleTheme: () => void;
  setTheme: (dark: boolean) => void;
};

export const useThemeStore = create<ThemeState>((set) => ({
  darkMode: false,

  toggleTheme: () =>
    set((state) => {
      const newTheme = !state.darkMode;

      if (newTheme) {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }

      return { darkMode: newTheme };
    }),

  setTheme: (dark) =>
    set(() => {
      if (dark) {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return { darkMode: dark };
    }),
}));
