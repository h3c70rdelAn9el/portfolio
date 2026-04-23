'use client';
import { useContactForm } from '../../hooks/useContactForm';
import { FloatingInput } from './FloatingInput';
import { FloatingTextarea } from './FloatingTextarea';
import { SubmitButton } from './SubmitButton';
import { FONT_DEV } from '../constants';

export function ContactForm() {
  const { values, errors, touched, status, handleChange, handleBlur, handleSubmit, setStatus } =
    useContactForm();

  return (
    <div
      className="w-full max-w-xl mx-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-xl shadow-blue-900/20"
      style={{ fontFamily: FONT_DEV }}>
      <div className="flex flex-col gap-4">
        {/* Row: Name + Phone */}
        <div className="flex gap-4">
          <FloatingInput
            id="name"
            label="Name"
            value={values.name}
            error={errors.name}
            touched={touched.name}
            onChange={(v) => handleChange('name', v)}
            onBlur={() => handleBlur('name')}
          />
          <FloatingInput
            id="phone"
            label="Phone (optional)"
            type="tel"
            value={values.phone}
            error={errors.phone}
            touched={touched.phone}
            onChange={(v) => handleChange('phone', v)}
            onBlur={() => handleBlur('phone')}
          />
        </div>

        <FloatingInput
          id="email"
          label="Email"
          type="email"
          value={values.email}
          error={errors.email}
          touched={touched.email}
          onChange={(v) => handleChange('email', v)}
          onBlur={() => handleBlur('email')}
        />

        <FloatingInput
          id="subject"
          label="Subject"
          value={values.subject}
          error={errors.subject}
          touched={touched.subject}
          onChange={(v) => handleChange('subject', v)}
          onBlur={() => handleBlur('subject')}
        />

        <FloatingTextarea
          id="message"
          label="Message"
          value={values.message}
          error={errors.message}
          touched={touched.message}
          onChange={(v) => handleChange('message', v)}
          onBlur={() => handleBlur('message')}
        />

        <SubmitButton
          status={status}
          onClick={handleSubmit}
        />

        {status === 'error' && (
          <p
            className="text-center text-xs text-[#ff4f4f]"
            style={{ fontFamily: FONT_DEV }}>
            Something went wrong.{' '}
            <button
              className="underline"
              onClick={() => setStatus('idle')}>
              Reset
            </button>
          </p>
        )}
      </div>
    </div>
  );
}
