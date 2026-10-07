import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/ui/PageHero';
import Button from '@/components/ui/Button';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import SectionHeading from '@/components/ui/SectionHeading';
import FaqSection from '@/components/ui/FaqSection';
import PageContainer from '@/components/ui/PageContainer';

const faqs = [
  {
    q: 'How long has Alan Phibbs been in the trade?',
    a: 'Alan has been working in construction since 1987, starting out as a carpenter in London before setting up his own firms in Dublin and London. He has over 35 years of hands-on experience across residential, commercial, and restoration work.',
  },
  {
    q: 'Where are you based?',
    a: 'We are based in Kilquade, Co. Wicklow, near Greystones, and take on projects across Wicklow, Dublin city, and County Dublin.',
  },
  {
    q: 'What types of projects do you take on?',
    a: 'We handle home extensions, full renovations, residential new builds, commercial fit-outs, building restoration, and landscaping. Alan has worked on everything from listed buildings to Georgian restorations to large-scale residential developments.',
  },
];

export const metadata: Metadata = {
  title: 'About Us | AP General Contractors Ltd',
  description:
    'Learn about AP General Contractors Ltd, based in Co. Wicklow, with over 35 years of experience in residential construction, renovations, and fit-outs across Wicklow and Dublin.',
  openGraph: {
    title: 'About Us | AP General Contractors Ltd',
    description: 'Co. Wicklow builders with over 35 years of experience.',
    siteName: 'AP General Contractors Ltd',
  },
};

const features = [
  {
    title: '35+ years in the trade',
    description:
      'Alan has been building since 1987, working across Dublin, London, and Wicklow on residential, commercial, and restoration projects.',
  },
  {
    title: 'Fully insured',
    description: "Full public liability and employers' liability insurance on every project.",
  },
  {
    title: 'Hands-on approach',
    description:
      'Alan manages every project personally from start to finish. You always know who you are dealing with.',
  },
  {
    title: 'Wicklow and Dublin',
    description:
      'Based in Kilquade, Co. Wicklow, serving clients across Wicklow, Dublin city, and County Dublin.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About us"
        subtitle="Over 35 years in the trade across Wicklow and Dublin"
        image="/images/projects/10-victorian-building-restoration/02.jpg"
        alt="Restored Victorian facade"
        imagePosition="object-[center_30%]"
      />

      <section>
        <PageContainer className="py-20 md:py-28">
          <AnimateOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative aspect-[4/3] overflow-hidden bg-paper-3">
                <Image
                  src="/images/projects/03-new-build-extension/07.jpg"
                  alt="Timber frame structure on site"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div>
                <SectionHeading className="mb-6">
                  Our story
                </SectionHeading>
                <p className="text-muted text-base md:text-lg leading-relaxed mb-5">
                  Alan Phibbs has been in construction since 1987, starting out as a carpenter in London
                  before setting up his own firms on both sides of the Irish Sea. He ran Clean Cut
                  Carpentry in Dublin through the early nineties, then co-founded Phibbs Carpentry
                  Contractors, which handled large-scale residential work for developers including
                  Durkans New Homes and Botes Construction. He spent several years in London taking on
                  listed building restorations and commercial fit-outs before returning home to Ireland.
                </p>
                <p className="text-muted text-base md:text-lg leading-relaxed">
                  Today, based in Kilquade, Co. Wicklow, Alan works on{' '}
                  <a
                    href="/services"
                    className="text-ink font-semibold underline decoration-accent decoration-2 underline-offset-4 hover:text-accent-strong transition-colors"
                  >
                    extensions, full renovations, and commercial fit-outs
                  </a>{' '}
                  across Wicklow and Dublin. He manages every job personally, so the standard stays
                  consistent and clients always know who they are talking to.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </PageContainer>
      </section>

      <section className="bg-night text-white">
        <PageContainer className="py-20 md:py-28">
          <SectionHeading light subtitle="What sets us apart">
            Why choose us
          </SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-night-line border border-night-line">
            {features.map((feature, i) => (
              <AnimateOnScroll key={feature.title} delay={i * 0.06} className="bg-night">
                <div className="h-full p-7 md:p-8">
                  <span aria-hidden className="block h-1 w-10 bg-accent mb-8" />
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/65 text-[15px] leading-relaxed">{feature.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </PageContainer>
      </section>

      <FaqSection faqs={faqs} />

      <section className="border-t border-line">
        <PageContainer className="py-14 md:py-16 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <p className="text-muted text-lg max-w-xl">
            Every project starts with a practical visit and an honest conversation about what is involved.
          </p>
          <Button href="/projects" variant="outline" arrow>
            View Recent Work
          </Button>
        </PageContainer>
      </section>
    </>
  );
}
