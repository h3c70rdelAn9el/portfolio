'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const fade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence
      mode="wait"
      initial={false}>
      <motion.div
        key={pathname}
        className="w-full"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={fade}
        transition={{ duration: 0.22, ease: [0.22, 0.61, 0.36, 1] }}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
