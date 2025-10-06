"use client";
import { Theme } from "@/interfaces";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {

  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (
      localStorage.theme === Theme.DARK ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add(Theme.DARK);
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove(Theme.DARK);
      setDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove(Theme.DARK);
      localStorage.theme = Theme.LIGHT;
      setDarkMode(false);
    } else {
      document.documentElement.classList.add(Theme.DARK);
      localStorage.theme = Theme.DARK;
      setDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex text-xl transition-transform duration-300 ease-in-out hover:rotate-12 cursor-pointer"
    >
      { 
        darkMode 
        ? <FaMoon size={18} className="text-[var(--color-accent-dark)]" />
        : <FaSun size={18} className="text-[var(--color-accent-light)]" />
      }
    </button>
  );
}
