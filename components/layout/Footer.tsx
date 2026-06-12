import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Linkedin } from 'lucide-react';
import PageContainer from '@/components/ui/PageContainer';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/jobs', label: 'Jobs' },
  { href: '/contact', label: 'Contact' },
];

const services = [
  'Residential Renovations',
  'Restoration & Conservation',
  'Extensions & Structural Works',
  'Kitchen & Bathroom Fit-Outs',
  'Office & Commercial Fit-Out',
  'Garden & External Works',
];

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-warm-100">
      <PageContainer className="pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 md:gap-10">
          <div>
            <Link href="/" className="mb-6 inline-block">
              <Image
                src="/logo-removebg-preview.png"
                alt="Alan Phibbs Construction"
                height={36}
                width={152}
                className="brightness-0 invert dark:brightness-100 dark:invert-0 opacity-90"
                style={{ objectFit: 'contain' }}
              />
            </Link>
            <p className="text-warm-300/80 text-sm leading-relaxed max-w-xs font-light">
              Based in Kilquade, Co. Wicklow. Residential renovations, restorations and fit-outs
              across Wicklow and Dublin, with over 35 years in the trade.
            </p>
          </div>

          <div>
            <h3 className="text-[10px] font-light uppercase tracking-[0.22em] text-warm-400/60 mb-5">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-warm-200/70 text-sm font-light hover:text-warm-50 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-light uppercase tracking-[0.22em] text-warm-400/60 mb-5">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-warm-200/70 text-sm font-light hover:text-warm-50 transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-light uppercase tracking-[0.22em] text-warm-400/60 mb-5">
              Contact
            </h3>
            <ul className="space-y-2.5 text-warm-200/70 text-sm font-light">
              <li>
                <a href="tel:+353892204082" className="hover:text-warm-50 transition-colors">
                  +353 89 220 4082
                </a>
              </li>
              <li>
                <a
                  href="mailto:alanphibbs@alanphibbs.ie"
                  className="hover:text-warm-50 transition-colors"
                >
                  alanphibbs@alanphibbs.ie
                </a>
              </li>
              <li className="text-warm-400/70 text-xs pt-1">
                Dublin & Wicklow
                <br />
                Mon–Fri 8am–6pm · Sat 9am–1pm
              </li>
            </ul>
          </div>
        </div>
      </PageContainer>

      <div className="border-t border-warm-50/8">
        <PageContainer className="py-4 flex flex-col md:flex-row justify-between items-center text-warm-400/50 text-xs font-light gap-4">
          <span>© {new Date().getFullYear()} Alan Phibbs Construction</span>
          <div className="flex items-center gap-5">
            <a
              href="https://www.facebook.com/profile.php?id=61579554132431"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex items-center gap-1.5 hover:text-warm-200 transition-colors"
            >
              <Facebook size={14} strokeWidth={1.5} />
              <span>Facebook</span>
            </a>
            <a
              href="https://www.linkedin.com/in/alan-patrick-phibbs-05012127a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center gap-1.5 hover:text-warm-200 transition-colors"
            >
              <Linkedin size={14} strokeWidth={1.5} />
              <span>LinkedIn</span>
            </a>
          </div>
        </PageContainer>
      </div>
    </footer>
  );
}
