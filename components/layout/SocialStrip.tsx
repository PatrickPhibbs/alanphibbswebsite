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
          className="w-9 h-9 rounded-full bg-white/80 shadow-md flex items-center justify-center text-maroon-800 hover:bg-maroon-800 hover:text-white hover:scale-110 transition-all duration-300"
        >
          <social.icon size={16} />
        </a>
      ))}
    </div>
  );
}
