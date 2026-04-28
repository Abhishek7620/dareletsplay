import { useCallback, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import DareCard from "../components/DareCard.jsx";
import daresData from "../data/dares.json";
import { playClickSound } from "../utils/playClickSound.js";

/**
 * Picks a random index in [0, length), never equal to `lastIndex` when length > 1.
 * Uses Math.random() per requirements.
 */
function pickRandomIndex(length, lastIndex) {
  if (length <= 0) return -1;
  if (length === 1) return 0;
  let idx;
  do {
    idx = Math.floor(Math.random() * length);
  } while (idx === lastIndex);
  return idx;
}

export default function Dare() {
  const dares = useMemo(() => daresData, []);

  const [dareIndex, setDareIndex] = useState(() =>
    pickRandomIndex(dares.length, null)
  );

  const currentText =
    dareIndex >= 0 && dareIndex < dares.length
      ? dares[dareIndex]
      : "No dares available.";

  const nextDare = useCallback(() => {
    playClickSound();
    setDareIndex((prev) => pickRandomIndex(dares.length, prev));
  }, [dares.length]);

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center px-4 py-20 sm:px-6">
      <div className="flex w-full max-w-xl flex-col items-stretch gap-8">
        <header className="text-center">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-violet-200/90 dark:text-violet-300/80">
            Truth or Dare
          </p>
          <h1 className="mt-1 font-display text-2xl font-bold text-white sm:text-3xl">
            Your challenge
          </h1>
        </header>

        <div className="flex justify-center">
          <AnimatePresence mode="wait">
            <DareCard key={dareIndex} text={currentText} />
          </AnimatePresence>
        </div>

        <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:justify-center">
          <motion.button
            type="button"
            onClick={nextDare}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            className="rounded-xl bg-white px-6 py-3.5 font-display text-base font-bold text-violet-700 shadow-lg ring-2 ring-white/40 transition-colors hover:bg-violet-50 dark:bg-violet-500 dark:text-white dark:ring-violet-400/50 dark:hover:bg-violet-400"
          >
            Next Dare
          </motion.button>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.96 }}>
            <Link
              to="/"
              onClick={() => playClickSound()}
              className="flex w-full items-center justify-center rounded-xl border-2 border-white/35 bg-white/10 px-6 py-3.5 font-display text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20 dark:border-white/20 dark:hover:bg-white/10 sm:w-auto"
            >
              Reset
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
