import Link from 'next/link';
import { Facebook, Linkedin } from 'lucide-react';
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

const socials = [
  { href: 'https://www.facebook.com/profile.php?id=61579554132431', label: 'Facebook', icon: Facebook },
  { href: 'https://www.linkedin.com/in/alan-patrick-phibbs-05012127a/', label: 'LinkedIn', icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="pb-20 md:pb-0">
      {/* Contact block: one saturated colour field with the details set large. */}
      <section aria-labelledby="footer-contact" className="bg-paper-3 text-ink">
        <PageContainer className="py-20 md:py-28 text-center">
          <h2 id="footer-contact" className="sr-only">
            Contact
          </h2>
          <ul className="flex items-center justify-center gap-8 mb-10">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-base font-medium hover:opacity-70 transition-opacity"
                >
                  <span className="flex h-8 w-8 items-center justify-center bg-night text-accent">
                    <s.icon size={15} aria-hidden />
                  </span>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="space-y-3 md:space-y-4 font-heading font-extrabold tracking-[-0.03em]">
            <p>
              <a href={site.phoneHref} className="text-4xl sm:text-5xl md:text-6xl hover:opacity-70 transition-opacity tabular-nums">
                {site.phone}
              </a>
            </p>
            <p className="text-2xl sm:text-3xl md:text-[2.6rem] leading-tight">
              Based in Kilquade, Co. Wicklow
              <br />
              {site.area}
            </p>
            <p>
              <a href={site.emailHref} className="text-2xl sm:text-3xl md:text-[2.6rem] break-all hover:opacity-70 transition-opacity">
                {site.email}
              </a>
            </p>
          </div>
          <p className="mt-8 text-base font-medium opacity-75">{site.hours}</p>
        </PageContainer>
      </section>

      <div className="bg-night text-white">
        <PageContainer className="py-12 md:py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.4fr] gap-10">
            <div>
              <Logo light />
              <p className="mt-6 text-white/60 text-[15px] leading-relaxed max-w-sm">
                Based in Kilquade, Co. Wicklow. Residential renovations, restorations and fit-outs
                across Wicklow and Dublin, with over 35 years in the trade.
              </p>
            </div>
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent mb-5">Navigation</h3>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white/80 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent mb-5">Services</h3>
              <ul className="space-y-2.5">
                {services.map((service) => (
                  <li key={service}>
                    <Link href="/services" className="text-white/80 hover:text-white transition-colors">
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </PageContainer>
        <div className="border-t border-night-line">
          <PageContainer className="py-5 text-sm text-white/45">
            © {new Date().getFullYear()} {site.name}
          </PageContainer>
        </div>
      </div>
    </footer>
  );
}
