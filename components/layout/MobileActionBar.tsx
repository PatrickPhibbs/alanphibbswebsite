import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';
import { site } from '@/lib/site';

export default function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-night-line bg-night md:hidden pb-[env(safe-area-inset-bottom)]">
      <a
        href={site.phoneHref}
        className="flex items-center justify-center gap-2 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-white"
      >
        <Phone size={16} aria-hidden className="text-accent" />
        Call
      </a>
      <Link
        href="/contact"
        className="flex items-center justify-center gap-2 bg-accent py-4 text-xs font-semibold uppercase tracking-[0.12em] text-on-accent"
      >
        Discuss a Project
        <ArrowRight size={15} aria-hidden />
      </Link>
    </div>
  );
}
