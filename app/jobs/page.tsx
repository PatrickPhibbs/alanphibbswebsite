import type { Metadata } from 'next';
import Image from 'next/image';
import { MapPin, Clock, ChevronRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

export const metadata: Metadata = {
  title: 'Careers | Alan Phibbs Construction',
  description:
    'Join the Alan Phibbs Construction team. We are hiring experienced tradespeople and site staff across Dublin and Wicklow.',
  openGraph: {
    title: 'Careers | Alan Phibbs Construction',
    description: 'Join our team. We are hiring experienced tradespeople across Dublin and Wicklow.',
    siteName: 'Alan Phibbs Construction',
  },
};

const roles = [
  {
    id: 'carpenter',
    title: 'Carpenter / Joiner',
    type: 'Full-time',
    location: 'Dublin',
    description:
      'We are looking for an experienced carpenter to join our site teams on residential and commercial projects across Dublin. You will be responsible for first and second fix carpentry, bespoke joinery, and finishing work to a high standard.',
    requirements: [
      'Trade qualification (City & Guilds, Fetac Level 6, or equivalent)',
      'Minimum 3 years post-apprenticeship experience',
      'Safe Pass & Manual Handling certificates',
      'Own tools and transport preferred',
    ],
  },
  {
    id: 'general-operative',
    title: 'General Operative',
    type: 'Full-time',
    location: 'Dublin',
    description:
      'We have ongoing positions for reliable general operatives to support our site teams. Duties include general labouring, assisting tradespeople, keeping sites clean and safe, and material handling.',
    requirements: [
      'Safe Pass certificate (or willingness to obtain)',
      'Manual Handling certificate',
      'Reliable, punctual, and a strong work ethic',
      'Previous construction site experience an advantage',
    ],
  },
  {
    id: 'site-manager',
    title: 'Site Manager',
    type: 'Full-time',
    location: 'Dublin',
    description:
      'We are looking for an experienced site manager to oversee multiple live projects. You will coordinate subcontractors, manage programmes and budgets, liaise with clients, and ensure all work meets our quality and safety standards.',
    requirements: [
      'Minimum 5 years site management experience',
      'Experience managing residential and commercial projects',
      'Strong understanding of Irish building regulations',
      'Excellent communication and leadership skills',
      'Safe Pass & manual handling, PSCS card an advantage',
    ],
  },
];

export default function JobsPage() {
  return (
    <>
      <section className="relative h-[38vh] flex items-end mt-20">
        <Image
          src="/images/projects/03-new-build-extension/01.jpg"
          alt="Work with Alan Phibbs Construction"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-10 pb-10 w-full">
          <h1 className="font-heading text-4xl md:text-6xl font-extralight text-white">Careers</h1>
          <p className="mt-3 text-white/70 text-[11px] uppercase tracking-[0.2em] font-light">
            Work with us across Dublin and Wicklow
          </p>
        </div>
      </section>

      <section className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-10 pt-16 pb-4">
        <AnimateOnScroll>
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl md:text-4xl font-light text-charcoal-900 mb-4">
              Join our team
            </h2>
            <p className="text-charcoal-600 text-sm leading-relaxed font-light">
              Alan Phibbs Construction has been building across Dublin and Wicklow since 1991. We take
              pride in our work, our team, and the standards we hold ourselves to. If you are a skilled
              tradesperson or site professional looking for steady, quality work, we want to hear from
              you.
            </p>
          </div>
        </AnimateOnScroll>
      </section>

      <section className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-10 pt-12 pb-16">
        <SectionHeading subtitle="Current openings">Open positions</SectionHeading>
        <div className="space-y-4">
          {roles.map((role, i) => (
            <AnimateOnScroll key={role.id} delay={i * 0.08}>
              <div
                data-testid="job-role"
                className="bg-warm-50 border border-warm-300/60 p-8"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-heading text-xl font-light text-charcoal-900">{role.title}</h3>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="flex items-center gap-1.5 text-xs text-stone-400 uppercase tracking-wider font-light">
                        <Clock size={11} strokeWidth={1.5} />
                        {role.type}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-stone-400 uppercase tracking-wider font-light">
                        <MapPin size={11} strokeWidth={1.5} />
                        {role.location}
                      </span>
                    </div>
                  </div>
                  <a
                    href={`mailto:alanphibbs@alanphibbs.ie?subject=Application: ${role.title}`}
                    className="shrink-0 inline-flex items-center gap-2 text-[11px] font-light uppercase tracking-[0.15em] text-charcoal-800 border-b border-charcoal-800/20 hover:border-charcoal-800 pb-px transition-colors"
                  >
                    Apply now <ChevronRight size={12} strokeWidth={1.5} />
                  </a>
                </div>
                <p className="text-charcoal-600 text-sm leading-relaxed mb-4 font-light">
                  {role.description}
                </p>
                <ul className="space-y-1.5">
                  {role.requirements.map((req) => (
                    <li
                      key={req}
                      className="flex items-start gap-3 text-sm text-charcoal-600 font-light"
                    >
                      <span className="w-px h-4 bg-bronze-500/60 mt-1 shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      <section className="bg-charcoal-900 py-20">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-10">
          <h2 className="font-heading text-3xl md:text-4xl font-light text-warm-50 mb-4 leading-tight">
            Don&apos;t see your role?
          </h2>
          <p className="text-warm-200/70 mb-8 max-w-sm text-sm font-light">
            Send us your CV and we will keep you in mind for future openings.
          </p>
          <Button href="/contact" variant="outline-light">
            Get in touch
          </Button>
        </div>
      </section>
    </>
  );
}
