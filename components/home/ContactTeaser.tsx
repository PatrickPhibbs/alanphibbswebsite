'use client';

import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import PageContainer from '@/components/ui/PageContainer';
import { site } from '@/lib/site';

const details = [
  { icon: Phone, label: 'Phone', value: site.phone, href: site.phoneHref },
  { icon: Mail, label: 'Email', value: site.email, href: site.emailHref },
  { icon: MapPin, label: 'Area served', value: site.area },
  { icon: Clock, label: 'Hours', value: site.hours },
];

export default function ContactTeaser() {
  return (
    <section className="bg-paper-2 border-t border-line">
      <PageContainer className="py-20 md:py-28">
        <AnimateOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <SectionHeading subtitle="Get in touch" className="mb-6">
                Tell us about your project.
              </SectionHeading>
              <p className="text-muted text-base md:text-lg leading-relaxed mb-9 max-w-lg">
                Whether you are planning a renovation, extension or fit-out, we are happy to visit,
                discuss the scope and give practical advice before work begins.
              </p>
              <Button href="/contact" arrow>
                Discuss a Project
              </Button>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-line border border-line">
              {details.map((item) => {
                const inner = (
                  <>
                    <span className="flex h-11 w-11 items-center justify-center bg-night text-accent mb-5">
                      <item.icon size={18} strokeWidth={1.75} aria-hidden />
                    </span>
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-subtle mb-1.5">
                      {item.label}
                    </span>
                    <span className="block text-ink font-semibold break-words">{item.value}</span>
                  </>
                );
                return (
                  <li key={item.label} className="bg-paper">
                    {item.href ? (
                      <a href={item.href} className="block h-full p-6 md:p-7 transition-colors hover:bg-paper-3">
                        {inner}
                      </a>
                    ) : (
                      <div className="h-full p-6 md:p-7">{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </AnimateOnScroll>
      </PageContainer>
    </section>
  );
}
