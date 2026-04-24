'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { FONT_DEV } from '../constants';

const DEFAULT_ACCENT = '#4f6fff';

interface SubmitButtonProps {
  status: 'idle' | 'loading' | 'success' | 'error';
  onClick: () => void;
  accent?: string;
}

const labels = {
  idle: 'Send Message',
  loading: 'Sending...',
  success: 'Message Sent ✓',
  error: 'Failed — Try Again',
};

function accentIsLight(hex: string): boolean {
  const raw = hex.replace('#', '');
  if (raw.length !== 6 && raw.length !== 3) return false;
  const full =
    raw.length === 3
      ? raw
          .split('')
          .map((c) => c + c)
          .join('')
      : raw;
  const n = parseInt(full, 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.72;
}

export function SubmitButton({ status, onClick, accent = DEFAULT_ACCENT }: SubmitButtonProps) {
  const colors = {
    idle: accent,
    loading: accent,
    success: '#22c55e',
    error: '#ff4f4f',
  };

  const labelColor =
    status === 'success' || status === 'error'
      ? '#ffffff'
      : accentIsLight(accent)
        ? 'rgba(26, 18, 8, 0.92)'
        : '#ffffff';

  return (
    <motion.button
      onClick={onClick}
      disabled={status === 'loading'}
      whileHover={status !== 'loading' ? { scale: 1.02 } : {}}
      whileTap={status !== 'loading' ? { scale: 0.97 } : {}}
      animate={{ backgroundColor: colors[status] }}
      transition={{ duration: 0.3 }}
      style={{ fontFamily: FONT_DEV, color: labelColor }}
      className="relative w-full py-3 rounded-xl text-sm font-semibold tracking-wider overflow-hidden disabled:cursor-not-allowed">
      <AnimatePresence mode="wait">
        <motion.span
          key={status}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.15 }}
          className="block">
          {labels[status]}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
