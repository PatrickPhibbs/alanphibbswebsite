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
      <PageHero
        title="Careers"
        subtitle="Work with us across Dublin and Wicklow"
        image="/images/projects/04-country-house-renovation/18.jpg"
        alt="Site team fitting insulation on a renovation"
      />

      <section>
        <PageContainer className="py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-20">
            <AnimateOnScroll className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeading subtitle="Current openings" className="mb-6">
                Join our team
              </SectionHeading>
              <p className="text-muted text-base md:text-lg leading-relaxed">
                AP General Contractors Ltd has been building across Dublin and Wicklow since 1991. We take
                pride in our work, our team, and the standards we hold ourselves to. If you are a skilled
                tradesperson or site professional looking for steady, quality work, we want to hear from
                you.
              </p>
            </AnimateOnScroll>

            <div>
              <h2 className="sr-only">Open positions</h2>
              <div className="space-y-5">
                {roles.map((role, i) => (
                  <AnimateOnScroll key={role.id} delay={i * 0.06}>
                    <article
                      data-testid="job-role"
                      className="border border-line bg-paper p-6 sm:p-8 transition-colors hover:border-accent"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 mb-5">
                        <div>
                          <h3 className="font-heading text-2xl font-bold text-ink">{role.title}</h3>
                          <div className="flex flex-wrap items-center gap-2 mt-3">
                            <span className="inline-flex items-center gap-1.5 bg-paper-2 border border-line px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted">
                              <Clock size={12} strokeWidth={2} aria-hidden />
                              {role.type}
                            </span>
                            <span className="inline-flex items-center gap-1.5 bg-paper-2 border border-line px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted">
                              <MapPin size={12} strokeWidth={2} aria-hidden />
                              {role.location}
                            </span>
                          </div>
                        </div>
                        <a
                          href={`mailto:alanphibbs@alanphibbs.ie?subject=Application: ${role.title}`}
                          className="group shrink-0 inline-flex items-center justify-center gap-2 bg-accent px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-on-accent hover:bg-accent-strong transition-colors"
                        >
                          Apply now
                          <ArrowRight size={14} aria-hidden className="transition-transform group-hover:translate-x-0.5" />
                        </a>
                      </div>
                      <p className="text-muted text-[15px] md:text-base leading-relaxed mb-5">{role.description}</p>
                      <ul className="grid gap-2.5 sm:grid-cols-2">
                        {role.requirements.map((req) => (
                          <li key={req} className="flex items-start gap-2.5 text-[15px] text-ink-soft">
                            <Check size={16} strokeWidth={2.5} aria-hidden className="mt-0.5 shrink-0 text-accent-strong" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      <section className="bg-night text-white">
        <PageContainer className="py-16 md:py-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
              Don&apos;t see your role?
            </h2>
            <p className="text-white/70 max-w-md text-base md:text-lg">
              Send us your CV and we will keep you in mind for future openings.
            </p>
          </div>
          <Button href="/contact" arrow>
            Get in touch
          </Button>
        </PageContainer>
      </section>
    </>
  );
}
