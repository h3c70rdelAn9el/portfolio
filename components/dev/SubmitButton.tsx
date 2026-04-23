'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { FONT_DEV } from '../constants';

interface SubmitButtonProps {
  status: 'idle' | 'loading' | 'success' | 'error';
  onClick: () => void;
}

const labels = {
  idle: 'Send Message',
  loading: 'Sending...',
  success: 'Message Sent ✓',
  error: 'Failed — Try Again',
};

const colors = {
  idle: '#4f6fff',
  loading: '#4f6fff',
  success: '#22c55e',
  error: '#ff4f4f',
};

export function SubmitButton({ status, onClick }: SubmitButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      disabled={status === 'loading'}
      whileHover={status !== 'loading' ? { scale: 1.02 } : {}}
      whileTap={status !== 'loading' ? { scale: 0.97 } : {}}
      animate={{ backgroundColor: colors[status] }}
      transition={{ duration: 0.3 }}
      style={{ fontFamily: FONT_DEV }}
      className="relative w-full py-3 rounded-xl text-sm font-semibold text-white tracking-wider overflow-hidden disabled:cursor-not-allowed"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={status}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.15 }}
          className="block"
        >
          {labels[status]}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
