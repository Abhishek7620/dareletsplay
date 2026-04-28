import { Navigate, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedLayout from "./components/AnimatedLayout.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";
import Dare from "./pages/Dare.jsx";
import Home from "./pages/Home.jsx";

export default function App() {
  return (
    <div className="relative min-h-[100dvh] overflow-x-hidden">
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-br from-violet-600 via-fuchsia-500 to-amber-400 dark:from-slate-950 dark:via-violet-950 dark:to-indigo-950"
        aria-hidden
      />
      <motion.div
        className="pointer-events-none fixed -right-32 -top-32 h-96 w-96 rounded-full bg-white/20 blur-3xl dark:bg-violet-500/20"
        aria-hidden
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.65, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none fixed -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-fuchsia-400/25 blur-3xl dark:bg-indigo-600/25"
        aria-hidden
        animate={{ scale: [1, 1.06, 1], opacity: [0.4, 0.55, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <ThemeToggle />

      <Routes>
        <Route element={<AnimatedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dare" element={<Dare />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </div>
  );
}
