'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '@/components/ui/Logo';
import Button from '@/components/ui/Button';

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/jobs', label: 'Jobs' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm border-b border-maroon-800/10' : 'bg-white/97'}`}>
      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-6 py-3.5 md:py-5 flex items-center justify-between">
        <Logo />

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold uppercase tracking-wider transition-colors hover:text-black ${
                pathname === link.href ? 'text-black underline underline-offset-4' : 'text-maroon-800'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button href="/contact" className="ml-4">
            GET IN TOUCH
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-maroon-800 p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 top-0 bg-white z-40 md:hidden pt-20 px-6"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-semibold uppercase tracking-wider ${
                    pathname === link.href ? 'text-black underline underline-offset-4' : 'text-maroon-800'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button href="/contact" onClick={() => setIsOpen(false)}>
                GET IN TOUCH
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
