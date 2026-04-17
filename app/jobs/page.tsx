import type { Metadata } from 'next';
import Image from 'next/image';
import { MapPin, Clock, ChevronRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

export const metadata: Metadata = {
  title: 'Careers | Alan Phibbs Construction',
  description: 'Join the Alan Phibbs Construction team. We are hiring experienced tradespeople and site staff across Dublin.',
  openGraph: {
    title: 'Careers | Alan Phibbs Construction',
    description: 'Join our team, hiring experienced tradespeople across Dublin.',
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
      {/* Hero banner */}
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
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-10 w-full">
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white">Careers</h1>
          <p className="mt-2 text-white/50 text-xs uppercase tracking-[0.2em]">Work with us. We&apos;re hiring across Dublin</p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-4">
        <AnimateOnScroll>
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-maroon-800 mb-4">Join Our Team</h2>
            <p className="text-maroon-800/65 text-sm leading-relaxed">
              Alan Phibbs Construction has been building Dublin since 1998. We take pride in our work, our team, and the standards we hold ourselves to. If you&apos;re a skilled tradesperson or site professional looking for steady, quality work with a company that values its people, we want to hear from you.
            </p>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Roles */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-16">
        <SectionHeading subtitle="Current openings">Open Positions</SectionHeading>
        <div className="space-y-px bg-cream-300">
          {roles.map((role, i) => (
            <AnimateOnScroll key={role.id} delay={i * 0.08}>
              <div data-testid="job-role" className="bg-white p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-maroon-800">{role.title}</h3>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="flex items-center gap-1.5 text-xs text-maroon-800/45 uppercase tracking-wider">
                        <Clock size={11} />
                        {role.type}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-maroon-800/45 uppercase tracking-wider">
                        <MapPin size={11} />
                        {role.location}
                      </span>
                    </div>
                  </div>
                  <a
                    href={`mailto:alanphibbs@alanphibbs.ie?subject=Application: ${role.title}`}
                    className="shrink-0 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-maroon-800 border-b border-maroon-800/20 hover:border-maroon-800 pb-px transition-colors"
                  >
                    Apply Now <ChevronRight size={12} />
                  </a>
                </div>
                <p className="text-maroon-800/60 text-sm leading-relaxed mb-4">{role.description}</p>
                <ul className="space-y-1.5">
                  {role.requirements.map((req) => (
                    <li key={req} className="flex items-start gap-3 text-sm text-maroon-800/55">
                      <span className="w-px h-4 bg-gold-500 mt-1 flex-shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-maroon-800 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Don&apos;t See Your Role?
          </h2>
          <p className="text-cream-200/60 mb-8 max-w-sm text-sm">
            Send us your CV and we&apos;ll keep you in mind for future openings. Get in touch to apply or find out more about working with us.
          </p>
          <Button href="/contact" variant="outline">Get In Touch</Button>
        </div>
      </section>
    </>
  );
}
