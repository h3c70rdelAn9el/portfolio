'use client';
import { motion } from 'framer-motion';
import { FONT_DEV } from '../constants';

interface FloatingInputProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  error?: string;
  touched?: boolean;
  onChange: (val: string) => void;
  onBlur: () => void;
}

const ACCENT = '#4f6fff';

export function FloatingInput({
  id, label, type = 'text', value, error, touched, onChange, onBlur,
}: FloatingInputProps) {
  const hasError = touched && error;
  const isFilled = value.length > 0;

  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder=" "
        style={{ fontFamily: FONT_DEV, borderColor: hasError ? '#ff4f4f' : isFilled ? ACCENT : 'rgba(255,255,255,0.12)' }}
        className="peer w-full rounded-xl border bg-white/5 px-4 pt-5 pb-2 text-sm text-white outline-none transition-all duration-200 placeholder-transparent focus:border-[#4f6fff] focus:ring-1 focus:ring-[#4f6fff]"
      />
      <label
        htmlFor={id}
        style={{ fontFamily: FONT_DEV }}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-white/40 transition-all duration-200 pointer-events-none
          peer-focus:top-3 peer-focus:translate-y-0 peer-focus:text-[10px] peer-focus:text-[#4f6fff]
          peer-[&:not(:placeholder-shown)]:top-3 peer-[&:not(:placeholder-shown)]:translate-y-0 peer-[&:not(:placeholder-shown)]:text-[10px] peer-[&:not(:placeholder-shown)]:text-white/50"
      >
        {label}
      </label>
      {hasError && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1 text-[11px] text-[#ff4f4f] pl-1"
          style={{ fontFamily: FONT_DEV }}
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}
