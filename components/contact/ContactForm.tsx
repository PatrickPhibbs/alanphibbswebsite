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

  return (
    <form aria-label="Contact form" onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-[10px] font-semibold uppercase tracking-[0.15em] text-maroon-800/45 mb-1.5">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 border border-cream-300 focus:outline-none focus:ring-1 focus:ring-maroon-800 bg-white text-maroon-800 text-sm"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-[10px] font-semibold uppercase tracking-[0.15em] text-maroon-800/45 mb-1.5">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 border border-cream-300 focus:outline-none focus:ring-1 focus:ring-maroon-800 bg-white text-maroon-800 text-sm"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-[10px] font-semibold uppercase tracking-[0.15em] text-maroon-800/45 mb-1.5">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-3 border border-cream-300 focus:outline-none focus:ring-1 focus:ring-maroon-800 bg-white text-maroon-800 text-sm"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-[10px] font-semibold uppercase tracking-[0.15em] text-maroon-800/45 mb-1.5">Service Required</label>
        <select
          id="service"
          name="service"
          required
          className="w-full px-4 py-3 border border-cream-300 focus:outline-none focus:ring-1 focus:ring-maroon-800 bg-white text-maroon-800 text-sm"
        >
          <option value="">Select a service...</option>
          <option value="restoration">Restoration & Conservation</option>
          <option value="garden">Garden Projects</option>
          <option value="office-fitout">Office Fit Out & Refurbishments</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-[10px] font-semibold uppercase tracking-[0.15em] text-maroon-800/45 mb-1.5">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 border border-cream-300 focus:outline-none focus:ring-1 focus:ring-maroon-800 bg-white text-maroon-800 text-sm resize-none"
        />
      </div>

      <Button type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </Button>

      {status === 'success' && (
        <p className="text-green-600 font-semibold">Thank you! Your message has been sent successfully.</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 font-semibold">Something went wrong. Please try again or call us directly.</p>
      )}
    </form>
  );
}
