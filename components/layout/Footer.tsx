import Link from 'next/link';
import Image from 'next/image';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/jobs', label: 'Jobs' },
  { href: '/contact', label: 'Contact' },
];

const services = [
  'Restoration & Conservation',
  'Garden Projects',
  'Office Fit Out & Refurbishments',
];

export default function Footer() {
  return (
    <footer className="bg-maroon-800 text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="mb-6 inline-block">
              <Image src="/logo-removebg-preview.png" alt="Alan Phibbs Construction" height={40} width={168} style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
            </Link>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs">
              Dublin&apos;s premier construction company specialising in residential new builds,
              renovations, and fit-outs since 1998.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-5">Navigation</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/55 text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-5">Services</h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-white/55 text-sm hover:text-white transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-5">Contact</h3>
            <ul className="space-y-2.5 text-white/55 text-sm">
              <li>
                <a href="tel:+353892204082" className="hover:text-white transition-colors">+353 89 220 4082</a>
              </li>
              <li>alanphibbs@alanphibbs.ie</li>
              <li className="text-white/30 text-xs">Mon–Fri 8am–6pm · Sat 9am–1pm</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-white/25 text-xs gap-2">
          <span>© {new Date().getFullYear()} Alan Phibbs Construction</span>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white/60 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
