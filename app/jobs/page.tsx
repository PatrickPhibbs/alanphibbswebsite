import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import { MapPin, Clock, ArrowRight, Check } from 'lucide-react';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import PageContainer from '@/components/ui/PageContainer';

export const metadata: Metadata = {
  title: 'Careers | AP General Contractors Ltd',
  description:
    'Join the AP General Contractors Ltd team. We are hiring experienced tradespeople and site staff across Dublin and Wicklow.',
  openGraph: {
    title: 'Careers | AP General Contractors Ltd',
    description: 'Join our team. We are hiring experienced tradespeople across Dublin and Wicklow.',
    siteName: 'AP General Contractors Ltd',
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
      <PageHero title="Careers" subtitle="Work with us across Dublin and Wicklow" />

      <section className="bg-paper">
        <PageContainer className="py-16 md:py-24">
          <AnimateOnScroll className="mb-14 md:mb-20 grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
            <SectionHeading subtitle="Current openings" className="">
              Join our team
            </SectionHeading>
            <p className="text-muted text-lg md:text-xl leading-relaxed max-w-[60ch] lg:pt-9">
              AP General Contractors Ltd has been building across Dublin and Wicklow since 1991. We take
              pride in our work, our team, and the standards we hold ourselves to. If you are a skilled
              tradesperson or site professional looking for steady, quality work, we want to hear from
              you.
            </p>
          </AnimateOnScroll>

          <h2 className="sr-only">Open positions</h2>
          <div className="grid gap-px border-y border-line bg-line">
            {roles.map((role, i) => (
              <AnimateOnScroll key={role.id} delay={i * 0.06}>
                <article
                  data-testid="job-role"
                  className="bg-paper-2 px-5 py-10 sm:px-10 md:py-14 lg:px-14 grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20"
                >
                  <div className="flex flex-col items-start gap-6">
                    <div>
                      <h3 className="font-heading text-3xl md:text-4xl font-bold tracking-[-0.025em] text-ink">{role.title}</h3>
                      <p className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-[15px] text-muted">
                        <span className="inline-flex items-center gap-1.5">
                          <Clock size={15} strokeWidth={2} aria-hidden />
                          {role.type}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin size={15} strokeWidth={2} aria-hidden />
                          {role.location}
                        </span>
                      </p>
                    </div>
                    <a
                      href={`mailto:alanphibbs@alanphibbs.ie?subject=Application: ${role.title}`}
                      className="group inline-flex items-center justify-center gap-2.5 bg-cta px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-on-cta transition-colors hover:bg-cta-hover active:translate-y-px"
                    >
                      Apply now
                      <ArrowRight size={16} strokeWidth={2} aria-hidden className="transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </div>
                  <div>
                    <p className="text-muted text-base md:text-lg leading-relaxed mb-7">{role.description}</p>
                    <ul className="grid gap-3 sm:grid-cols-2 sm:gap-x-8">
                      {role.requirements.map((req) => (
                        <li key={req} className="flex items-start gap-3 text-[15px] text-ink-soft">
                          <Check size={16} strokeWidth={2.5} aria-hidden className="mt-1 shrink-0 text-accent-strong" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </PageContainer>
      </section>

      <section className="bg-night text-white">
        <PageContainer className="py-20 md:py-28 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="font-heading text-4xl md:text-6xl font-extrabold tracking-[-0.03em] mb-5 leading-[1.02]">
              Don&apos;t see your role?
            </h2>
            <p className="max-w-md text-lg md:text-xl text-white/70">
              Send us your CV and we will keep you in mind for future openings.
            </p>
          </div>
          <Button href="/contact" variant="light" arrow className="self-start md:self-auto">
            Get in touch
          </Button>
        </PageContainer>
      </section>
    </>
  );
}
