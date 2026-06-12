'use client';

import { useState } from 'react';
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
    'w-full px-4 py-3.5 border border-warm-300 focus:outline-none focus:ring-1 focus:ring-charcoal-800 bg-warm-50 text-charcoal-900 text-sm font-light';
  const labelClass =
    'block text-[10px] font-light uppercase tracking-[0.15em] text-stone-400 mb-1.5';

  return (
    <form aria-label="Contact form" onSubmit={handleSubmit} className="space-y-6">
      <div>
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

      <div>
        <label htmlFor="service" className={labelClass}>
          Service required
        </label>
        <select id="service" name="service" required className={inputClass}>
          <option value="">Select a service...</option>
          <option value="renovation">Residential Renovations</option>
          <option value="extension">Extensions & Structural Works</option>
          <option value="restoration">Restoration & Conservation</option>
          <option value="fitout">Kitchen, Bathroom & Interior Fit-Outs</option>
          <option value="commercial">Office & Commercial Fit-Out</option>
          <option value="garden">Garden & External Works</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
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

      <Button type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Send message'}
      </Button>

      {status === 'success' && (
        <p className="text-charcoal-700 font-light text-sm">
          Thank you. Your message has been sent. We will be in touch shortly.
        </p>
      )}
      {status === 'error' && (
        <p className="text-charcoal-800 font-light text-sm">
          Something went wrong. Please try again or call us directly.
        </p>
      )}
    </form>
  );
}
