'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '@/components/ui/Logo';
import Button from '@/components/ui/Button';
import ThemeToggle from '@/components/ui/ThemeToggle';
import PageContainer from '@/components/ui/PageContainer';

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
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm ${
        scrolled
          ? 'bg-warm-50/95 dark:bg-charcoal-950/95 border-b border-warm-300/60 dark:border-charcoal-700/50'
          : 'bg-warm-50/90 dark:bg-charcoal-950/90'
      }`}
    >
      <PageContainer>
        <nav className="py-3 md:py-3.5 flex items-center justify-between">
          <Logo />

        <div className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-heading text-[13px] font-light tracking-[0.1em] transition-colors ${
                pathname === link.href
                  ? 'text-charcoal-900 dark:text-warm-50'
                  : 'text-charcoal-600 dark:text-warm-300 hover:text-charcoal-900 dark:hover:text-warm-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
          <Button href="/contact" className="ml-2 !px-4 !py-2 !text-[11px]">
            Discuss a Project
          </Button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="text-charcoal-800 dark:text-warm-200 p-1.5 -mr-2"
          >
            {isOpen ? <X size={19} strokeWidth={1.5} /> : <Menu size={19} strokeWidth={1.5} />}
          </button>
        </div>
        </nav>
      </PageContainer>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-0 bg-warm-50 dark:bg-charcoal-950 z-40 md:hidden pt-20 px-6"
          >
            <div className="flex flex-col gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-heading text-xl font-light tracking-[0.06em] ${
                    pathname === link.href
                      ? 'text-charcoal-900 dark:text-warm-50'
                      : 'text-charcoal-600 dark:text-warm-300'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button href="/contact" onClick={() => setIsOpen(false)}>
                Discuss a Project
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
