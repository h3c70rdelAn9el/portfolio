'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

const ease: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

type PageTransitionProps = {
  children: React.ReactNode;
  /** Animate on dev section / route changes; default is `usePathname()`. */
  transitionKey?: string;
};

/**
 * one `motion` layer; short exit, long enter. Supports client-only `transitionKey` so
 * dev home/about/projects can animate without a Next route remount.
 */
export function PageTransition({ children, transitionKey: transitionKeyProp }: PageTransitionProps) {
  const pathname = usePathname() ?? '/';
  const transitionKey = transitionKeyProp ?? pathname;
  const reduce = useReducedMotion();
  const variants = useMemo(() => {
    if (reduce) {
      return {
        initial: { opacity: 0, y: 0, scale: 1 },
        animate: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.2, ease },
        },
        exit: {
          opacity: 0,
          y: 0,
          scale: 1,
          transition: { duration: 0.08, ease },
        },
      } as const;
    }
    return {
      initial: { opacity: 0, y: 6, scale: 0.985 },
      animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.48, ease },
      },
      exit: {
        opacity: 0,
        y: 0,
        scale: 1,
        transition: { duration: 0.12, ease },
      },
    } as const;
  }, [reduce]);

  return (
    <AnimatePresence
      initial={false}
      mode="wait">
      <motion.div
        key={transitionKey}
        className="relative w-full transform-gpu"
        style={{ transformOrigin: '50% 40%' }}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
