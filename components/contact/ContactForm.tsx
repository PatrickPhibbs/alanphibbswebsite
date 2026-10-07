'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Request failed');

      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full border border-line bg-paper-2 px-4 py-3.5 text-ink text-base placeholder:text-subtle transition-colors hover:border-ink/40 focus:outline-none focus:border-accent focus:bg-paper focus:ring-2 focus:ring-accent/40';
  const labelClass = 'block text-[11px] font-semibold uppercase tracking-[0.14em] text-muted mb-2';

  return (
    <form aria-label="Contact form" onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-7">
      <div className="sm:col-span-2">
        <label htmlFor="name" className={labelClass}>
          Name
        </label>
        <input type="text" id="name" name="name" required className={inputClass} />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input type="email" id="email" name="email" required className={inputClass} />
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone
        </label>
        <input type="tel" id="phone" name="phone" className={inputClass} />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="service" className={labelClass}>
          Service required
        </label>
        <div className="relative">
          <select id="service" name="service" required className={`${inputClass} appearance-none pr-11`}>
            <option value="">Select a service...</option>
            <option value="renovation">Residential Renovations</option>
            <option value="extension">Extensions & Structural Works</option>
            <option value="restoration">Restoration & Conservation</option>
            <option value="fitout">Kitchen, Bathroom & Interior Fit-Outs</option>
            <option value="commercial">Office & Commercial Fit-Out</option>
            <option value="garden">Garden & External Works</option>
            <option value="other">Other</option>
          </select>
          <ChevronDown
            size={18}
            aria-hidden
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted"
          />
        </div>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="sm:col-span-2">
        <Button type="submit" variant="solid" disabled={status === 'sending'} className="w-full sm:w-auto">
          {status === 'sending' ? 'Sending...' : 'Send message'}
        </Button>
      </div>

      {status === 'success' && (
        <p role="status" className="sm:col-span-2 border-l-4 border-accent bg-paper-2 px-4 py-3 text-ink text-sm">
          Thank you. Your message has been sent. We will be in touch shortly.
        </p>
      )}
      {status === 'error' && (
        <p role="alert" className="sm:col-span-2 border-l-4 border-red-600 bg-paper-2 px-4 py-3 text-ink text-sm">
          Something went wrong. Please try again or call us directly.
        </p>
      )}
    </form>
  );
}
