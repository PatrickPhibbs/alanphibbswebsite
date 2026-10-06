import Link from 'next/link';
import { Facebook, Linkedin, Phone, Mail } from 'lucide-react';
import PageContainer from '@/components/ui/PageContainer';
import Logo from '@/components/ui/Logo';
import { site } from '@/lib/site';

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

const columnHeading = 'text-[11px] font-bold uppercase tracking-[0.18em] text-accent mb-5';
const linkClass = 'text-white/70 text-[15px] hover:text-white transition-colors';

export default function Footer() {
  return (
    <footer className="bg-night text-white pb-16 md:pb-0">
      <PageContainer className="pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1.3fr_1.3fr] gap-12 lg:gap-10">
          <div>
            <Logo light className="mb-6" />
            <p className="text-white/60 text-[15px] leading-relaxed max-w-sm">
              Based in Kilquade, Co. Wicklow. Residential renovations, restorations and fit-outs
              across Wicklow and Dublin, with over 35 years in the trade.
            </p>
          </div>

          <div>
            <h3 className={columnHeading}>Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={columnHeading}>Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link href="/services" className={linkClass}>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={columnHeading}>Contact</h3>
            <ul className="space-y-3 text-[15px]">
              <li>
                <a href={site.phoneHref} className={`${linkClass} inline-flex items-center gap-2`}>
                  <Phone size={14} aria-hidden className="text-accent" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={site.emailHref} className={`${linkClass} inline-flex items-center gap-2 break-all`}>
                  <Mail size={14} aria-hidden className="text-accent shrink-0" />
                  {site.email}
                </a>
              </li>
              <li className="text-white/50 text-sm pt-2 leading-relaxed">
                {site.area}
                <br />
                {site.hours}
              </li>
            </ul>
          </div>
        </div>
      </PageContainer>

      <div className="border-t border-night-line">
        <PageContainer className="py-5 flex flex-col md:flex-row justify-between items-center text-white/45 text-xs gap-4">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <div className="flex items-center gap-5">
            <a
              href="https://www.facebook.com/profile.php?id=61579554132431"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Facebook size={14} strokeWidth={1.75} />
              <span>Facebook</span>
            </a>
            <a
              href="https://www.linkedin.com/in/alan-patrick-phibbs-05012127a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Linkedin size={14} strokeWidth={1.75} />
              <span>LinkedIn</span>
            </a>
          </div>
        </PageContainer>
      </div>
    </footer>
  );
}
