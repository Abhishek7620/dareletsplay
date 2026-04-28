import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext.jsx";
import { playClickSound } from "../utils/playClickSound.js";

/**
 * Floating theme control — works with Tailwind `dark` class on <html>.
 */
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      type="button"
      onClick={() => {
        playClickSound();
        toggleTheme();
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.92 }}
      className="fixed right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/15 text-lg shadow-lg backdrop-blur-md transition-colors dark:border-white/10 dark:bg-slate-800/60 md:right-6 md:top-6"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      <span className="select-none" aria-hidden>
        {isDark ? "☀️" : "🌙"}
      </span>
    </motion.button>
  );
}
