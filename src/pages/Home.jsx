import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { playClickSound } from "../utils/playClickSound.js";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center px-6 py-16">
      <div className="mx-auto flex w-full max-w-lg flex-col items-center text-center">
        <motion.p
          className="mb-3 font-display text-sm font-medium uppercase tracking-[0.35em] text-white/80"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Dare Mode
        </motion.p>

        <motion.h1
          className="mb-3 font-display text-4xl font-extrabold tracking-tight text-white drop-shadow-sm sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, type: "spring", stiffness: 200, damping: 22 }}
        >
          Truth or Dare
        </motion.h1>

        <motion.p
          className="mb-10 max-w-sm text-base text-white/85 sm:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.28 }}
        >
          One tap. One challenge. Keep it fun and kind.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, type: "spring", stiffness: 260, damping: 20 }}
        >
          <Link to="/dare" className="inline-block">
            <motion.span
              className="relative inline-flex overflow-hidden rounded-2xl bg-white px-10 py-4 font-display text-lg font-bold text-violet-700 shadow-xl ring-2 ring-white/30 dark:bg-violet-500 dark:text-white dark:ring-violet-400/40"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96, y: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              onClick={() => playClickSound()}
            >
              <span className="relative z-10">Choose Dare</span>
              <motion.span
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-fuchsia-400/0 via-white/40 to-fuchsia-400/0 dark:from-violet-300/0 dark:via-white/25 dark:to-violet-300/0"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.55, ease: "easeInOut" }}
              />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
