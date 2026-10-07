'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '@/components/ui/Logo';
import Button from '@/components/ui/Button';
import ThemeToggle from '@/components/ui/ThemeToggle';
import PageContainer from '@/components/ui/PageContainer';
import { site } from '@/lib/site';

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
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Every page opens on a dark image hero, so the bar starts transparent with light text.
  const solid = scrolled && !isOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,padding] duration-300 ${
        solid ? 'bg-paper/95 backdrop-blur-md shadow-[0_1px_0_var(--line)]' : 'bg-transparent'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-cta focus:px-4 focus:py-2 focus:text-on-cta"
      >
        Skip to content
      </a>
      {!solid && (
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 h-32 bg-gradient-to-b from-black/55 to-transparent" />
      )}
      <PageContainer>
        <nav
          aria-label="Main"
          className={`flex items-center justify-between gap-6 transition-[padding] duration-300 ${solid ? 'py-3' : 'py-4'}`}
        >
          <Logo light={!solid} />

          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-7">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? 'page' : undefined}
                      className={`relative py-2 text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:bg-accent after:transition-all ${
                        active ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                      } ${solid ? 'text-ink' : 'text-white'}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <a
              href={site.phoneHref}
              className={`hidden xl:inline-flex items-center gap-2 text-sm font-semibold tabular-nums transition-colors ${
                solid ? 'text-ink hover:text-accent-strong' : 'text-white hover:text-accent'
              }`}
            >
              <Phone size={15} strokeWidth={2} aria-hidden className="text-accent" />
              {site.phone}
            </a>
            <ThemeToggle className={solid ? '' : '!text-white'} />
            <Button href="/contact" variant={solid ? 'solid' : 'light'} className="!px-5 !py-3 !text-xs">
              Discuss a Project
            </Button>
          </div>

          <div className="flex items-center gap-1 lg:hidden">
            <ThemeToggle className={solid ? '' : '!text-white'} />
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              className={`relative z-50 p-2 -mr-2 ${solid ? 'text-ink' : 'text-white'}`}
            >
              {isOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
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
            className="fixed inset-0 -z-10 flex flex-col bg-night px-5 sm:px-8 pt-28 pb-10 lg:hidden"
          >
            <ul className="flex flex-col border-t border-night-line">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                  className="border-b border-night-line"
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between py-5 font-heading text-3xl font-bold tracking-tight ${
                      pathname === link.href ? 'text-accent' : 'text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="mt-auto flex flex-col gap-3">
              <Button href="/contact" variant="light" onClick={() => setIsOpen(false)} arrow>
                Discuss a Project
              </Button>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 border border-white/25 py-3.5 text-sm font-semibold text-white"
              >
                <Phone size={16} aria-hidden className="text-accent" />
                {site.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
