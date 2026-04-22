'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

const easeOut: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

/**
 * Fades the *page* column only. Avoid `mode="sync"` here: overlapping full-width
 * opacity layers blend with `SiteAtmosphere` underneath and the whole photo/orbs
 * read like they are fading in and out.
 */
function buildVariants(reduce: boolean) {
  return {
    initial: {
      opacity: 0,
      transition: { duration: reduce ? 0.1 : 0.22, ease: easeOut },
    },
    animate: {
      opacity: 1,
      transition: { duration: reduce ? 0.18 : 0.32, ease: easeOut },
    },
    exit: {
      opacity: 0,
      transition: { duration: reduce ? 0.08 : 0.1, ease: easeOut },
    },
  } as const;
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const variants = useMemo(() => buildVariants(Boolean(reduce)), [reduce]);

  return (
    <AnimatePresence
      initial={false}
      mode="wait">
      <motion.div
        key={pathname}
        className="relative z-0 w-full isolate"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        style={{ backfaceVisibility: 'hidden' }}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
