'use client';

import { usePathname } from 'next/navigation';

/**
 * Enter-only crossfade. Framer + AnimatePresence was letting the *incoming* page paint
 * at full opacity for a frame before the motion `initial` applied — About text would
 * flash, vanish, then fade in. CSS keyframes with fill-mode `both` hold opacity 0
 * before the first paint.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? '/';

  return (
    <div
      key={pathname}
      className="page-transition-surface">
      {children}
    </div>
  );
}
