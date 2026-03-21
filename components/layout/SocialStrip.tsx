'use client';

import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const socials = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function SocialStrip() {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          aria-label={social.label}
          className="w-9 h-9 rounded-full bg-white/80 shadow-md flex items-center justify-center text-maroon-800 hover:bg-maroon-800 hover:text-white hover:scale-110 transition-all duration-300"
        >
          <social.icon size={16} />
        </a>
      ))}
    </div>
  );
}
