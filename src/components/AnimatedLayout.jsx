import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";

/**
 * Page-level enter/exit — AnimatePresence requires a keyed motion child, not <Routes>.
 */
export default function AnimatedLayout() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
        className="min-h-[100dvh]"
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
}
