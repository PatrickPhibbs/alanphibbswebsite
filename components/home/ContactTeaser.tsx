'use client';

import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

const details = [
  { icon: Phone, label: 'Phone', value: '+353 89 220 4082', href: 'tel:+353892204082' },
  { icon: Mail, label: 'Email', value: 'alanphibbs@alanphibbs.ie', href: 'mailto:alanphibbs@alanphibbs.ie' },
  { icon: MapPin, label: 'Area served', value: 'Dublin & Wicklow' },
  { icon: Clock, label: 'Hours', value: 'Mon–Fri 8am–6pm · Sat 9am–1pm' },
];

export default function ContactTeaser() {
  return (
    <section className="border-t border-warm-300/60 bg-warm-100">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-10 py-14 md:py-16">
        <AnimateOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <SectionHeading subtitle="Get in touch">Tell us about your project.</SectionHeading>
              <p className="text-charcoal-600 font-light leading-relaxed -mt-4 mb-8 max-w-md">
                Whether you are planning a renovation, extension or fit-out, we are happy to visit,
                discuss the scope and give practical advice before work begins.
              </p>
              <Button href="/contact">Discuss a Project</Button>
            </div>

            <ul className="divide-y divide-warm-300 border border-warm-300/60 bg-warm-50">
              {details.map((item) => (
                <li key={item.label} className="flex items-start gap-4 px-6 py-5">
                  <item.icon size={16} strokeWidth={1.5} className="text-stone-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-stone-400 font-light block mb-1">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-charcoal-800 font-light hover:text-charcoal-600 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-charcoal-800 font-light">{item.value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
