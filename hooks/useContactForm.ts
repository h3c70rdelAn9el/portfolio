import { useState } from 'react';

export interface FormValues {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const empty: FormValues = { name: '', email: '', phone: '', subject: '', message: '' };

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = 'Name is required';
  if (!values.email.trim()) errors.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Invalid email address';
  if (values.phone && !/^\+?[\d\s\-()]{7,15}$/.test(values.phone))
    errors.phone = 'Invalid phone number';
  if (!values.subject.trim()) errors.subject = 'Subject is required';
  if (!values.message.trim()) errors.message = 'Message is required';
  else if (values.message.trim().length < 10)
    errors.message = 'Message must be at least 10 characters';
  return errors;
}

export function useContactForm() {
  const [values, setValues] = useState<FormValues>(empty);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormValues, boolean>>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  function handleChange(field: keyof FormValues, value: string) {
    setValues((v) => ({ ...v, [field]: value }));
    if (touched[field]) {
      setErrors((e) => ({ ...e, [field]: validate({ ...values, [field]: value })[field] }));
    }
  }

  function handleBlur(field: keyof FormValues) {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors((e) => ({ ...e, [field]: validate(values)[field] }));
  }

  async function handleSubmit() {
    const allTouched = Object.fromEntries(
      (Object.keys(empty) as (keyof FormValues)[]).map((k) => [k, true]),
    );
    setTouched(allTouched);
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus('loading');
    try {
      const emailjs = await import('@emailjs/browser');
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: values.name,
          from_email: values.email,
          phone: values.phone,
          subject: values.subject,
          message: values.message,
          to_email: 'hectordelangel@gmail.com',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );
      setStatus('success');
      setValues(empty);
      setTouched({});
    } catch {
      setStatus('error');
    }
  }

  return { values, errors, touched, status, handleChange, handleBlur, handleSubmit, setStatus };
}
