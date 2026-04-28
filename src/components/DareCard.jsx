import { motion } from "framer-motion";

/**
 * Displays a single dare with entrance animation.
 * Parent should set `key` when the dare changes so AnimatePresence runs enter/exit.
 */
export default function DareCard({ text }) {
  return (
    <motion.article
      role="status"
      aria-live="polite"
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 380,
        damping: 28,
        mass: 0.8,
      }}
      className="relative w-full max-w-xl rounded-2xl border border-white/40 bg-white/90 p-8 shadow-card backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/85 dark:shadow-card-dark sm:p-10 md:p-12"
    >
      <p className="mb-2 font-display text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
        Your dare
      </p>
      <p className="font-display text-2xl font-semibold leading-snug text-slate-900 dark:text-slate-50 sm:text-3xl md:text-[1.65rem] md:leading-relaxed lg:text-4xl">
        {text}
      </p>
    </motion.article>
  );
}
