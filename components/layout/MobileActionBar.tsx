import Link from 'next/link';
import { site } from '@/lib/site';

export default function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-night-line bg-night md:hidden pb-[env(safe-area-inset-bottom)]">
      <a
        href={site.phoneHref}
        className="flex items-center justify-center gap-2 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-white"
      >
        Call
      </a>
      <Link
        href="/contact"
        className="flex items-center justify-center gap-2 bg-white py-4 text-xs font-semibold uppercase tracking-[0.12em] text-night"
      >
        Discuss a Project
      </Link>
    </div>
  );
}
