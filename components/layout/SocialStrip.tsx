'use client';

import { Facebook, Linkedin } from 'lucide-react';

const socials = [
  { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61579554132431', label: 'Facebook' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/alan-patrick-phibbs-05012127a/', label: 'LinkedIn' },
];

export default function SocialStrip() {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="w-9 h-9 rounded-full bg-warm-50/90 shadow-sm border border-warm-300/60 flex items-center justify-center text-charcoal-700 hover:bg-charcoal-800 hover:text-warm-50 transition-colors duration-300 cursor-pointer"
        >
          <social.icon size={16} />
        </a>
      ))}
    </div>
  );
}
