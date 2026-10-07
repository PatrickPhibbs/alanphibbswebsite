import type { Metadata } from 'next';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { services } from '@/lib/services';
import type { Service } from '@/lib/services';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import Button from '@/components/ui/Button';
import FaqSection from '@/components/ui/FaqSection';
import PageContainer from '@/components/ui/PageContainer';
import PageHero from '@/components/ui/PageHero';

const faqs = [
  {
    q: 'Do you offer free quotes?',
    a: 'Yes, we offer a free initial consultation and site visit for all projects across Dublin and Wicklow. Get in touch to arrange yours.',
  },
  {
    q: 'Why use lime plaster and lime render on older buildings?',
    a: 'Lime-based finishes are essential for Georgian and Victorian buildings because they are breathable and flexible. Unlike modern cement, lime allows moisture to escape through the wall rather than trapping it, which prevents damp, cracking, and long-term structural damage.',
  },
  {
    q: 'Are you fully insured?',
    a: "Yes. AP General Contractors Ltd carries full public liability and employers' liability insurance on every project.",
  },
  {
    q: 'Do you work across Dublin as well as Wicklow?',
    a: 'Yes. We are based in Greystones, Co. Wicklow, and regularly take on projects across Dublin city and county, as well as the wider Wicklow area.',
  },
];

export const metadata: Metadata = {
  title: 'Our Services | AP General Contractors Ltd',
  description:
    'Restoration and conservation, kitchen and bathroom fit-outs, painting, electrical, groundworks, and office fit-outs across Dublin and Wicklow.',
  openGraph: {
    title: 'Our Services | AP General Contractors Ltd',
    description:
      'Restoration and conservation, kitchen and bathroom fit-outs, painting, electrical, groundworks, and office fit-outs across Dublin and Wicklow.',
    siteName: 'AP General Contractors Ltd',
  },
};

type Tone = 'paper' | 'paper-2' | 'night' | 'accent';
type Layout = 'split' | 'pair';

// One entry per service, in order. Mostly paper panels; the night band and a single amber
// block give contrast. Before/after services use the 'pair' layout to break up the split rows.
const plan: { tone: Tone; layout: Layout; imageRight?: boolean }[] = [
  { tone: 'night', layout: 'pair' },
  { tone: 'paper-2', layout: 'split' },
  { tone: 'accent', layout: 'split', imageRight: true },
  { tone: 'paper', layout: 'split' },
  { tone: 'paper-2', layout: 'pair' },
  { tone: 'night', layout: 'split', imageRight: true },
  { tone: 'paper', layout: 'split' },
];

// Ticks on paper use accent-strong for contrast. The amber focus ring disappears on the amber
// block, so its button uses an ink one.
const tones: Record<Tone, { panel: string; body: string; tick: string; button: 'light' | 'dark'; focus: string }> = {
  paper: { panel: 'bg-paper text-ink', body: 'text-ink-soft', tick: 'text-accent-strong', button: 'dark', focus: '' },
  'paper-2': { panel: 'bg-paper-2 text-ink', body: 'text-ink-soft', tick: 'text-accent-strong', button: 'dark', focus: '' },
  night: { panel: 'bg-night text-white', body: 'text-white/80', tick: 'text-accent', button: 'light', focus: '' },
  accent: {
    panel: 'bg-accent text-on-accent',
    body: 'text-on-accent',
    tick: 'text-on-accent',
    button: 'dark',
    focus: 'focus-visible:outline-ink',
  },
};

function Photo({ src, alt, label, sizes }: { src: string; alt: string; label?: string; sizes: string }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-paper-3">
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      {label && (
        <span className="absolute left-4 top-4 md:left-6 md:top-6 bg-night/85 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white">
          {label}
        </span>
      )}
    </div>
  );
}

function Photos({ service, sizes }: { service: Service; sizes: string }) {
  const half = sizes.replace(/\d+vw/g, (v) => `${Math.round(parseInt(v, 10) / 2)}vw`);
  if (service.beforeImage) {
    return (
      <div className="grid h-full grid-cols-2">
        <Photo src={service.beforeImage} alt={`${service.title} before`} label="Before" sizes={half} />
        <Photo src={service.image} alt={`${service.title} after`} label="After" sizes={half} />
      </div>
    );
  }
  if (service.secondImage) {
    return (
      <div className="grid h-full grid-cols-2">
        <Photo src={service.image} alt={service.title} sizes={half} />
        <Photo src={service.secondImage} alt={`${service.title} detail`} sizes={half} />
      </div>
    );
  }
  return <Photo src={service.image} alt={service.title} sizes={sizes} />;
}

function FeatureList({ features, tick }: { features: string[]; tick: string }) {
  return (
    <ul className="grid gap-3.5">
      {features.map((feature) => (
        <li key={feature} className="flex items-start gap-3 text-base md:text-[17px] leading-snug">
          <Check size={20} strokeWidth={2.5} aria-hidden className={`mt-px shrink-0 ${tick}`} />
          {feature}
        </li>
      ))}
    </ul>
  );
}

function ServiceTitle({ service }: { service: Service }) {
  return (
    <h2
      id={`${service.slug}-title`}
      className="font-heading text-[2.25rem] md:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.02] tracking-[-0.03em]"
    >
      {service.title}
    </h2>
  );
}

function ServiceBlock({ service, index }: { service: Service; index: number }) {
  const { tone, layout, imageRight } = plan[index % plan.length];
  const t = tones[tone];
  const cta = (
    <Button href="/contact" variant={t.button} className={t.focus} arrow>
      Discuss a project
    </Button>
  );

  if (layout === 'pair') {
    return (
      <>
        <div className="aspect-[3/2] md:aspect-[12/5]">
          <Photos service={service} sizes="100vw" />
        </div>
        <div className={t.panel}>
          <PageContainer className="grid gap-10 py-14 md:py-20 lg:grid-cols-12 lg:gap-16">
            <AnimateOnScroll direction="fade" className="lg:col-span-7">
              <ServiceTitle service={service} />
              <p className={`mt-6 max-w-[65ch] text-base md:text-lg leading-relaxed ${t.body}`}>{service.description}</p>
            </AnimateOnScroll>
            <AnimateOnScroll direction="fade" delay={0.1} className="lg:col-span-5 lg:pt-3">
              <FeatureList features={service.features} tick={t.tick} />
              <div className="mt-10">{cta}</div>
            </AnimateOnScroll>
          </PageContainer>
        </div>
      </>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className={`aspect-[4/3] lg:aspect-auto lg:min-h-[44rem] ${imageRight ? 'lg:order-2' : ''}`}>
        <Photos service={service} sizes="(max-width: 1024px) 100vw, 50vw" />
      </div>
      <div className={`flex items-center px-5 py-14 sm:px-8 md:py-20 lg:px-14 xl:px-20 ${t.panel}`}>
        <AnimateOnScroll direction="fade" className="max-w-[38rem]">
          <ServiceTitle service={service} />
          <p className={`mt-6 text-base md:text-lg leading-relaxed ${t.body}`}>{service.description}</p>
          <div className="mt-9">
            <FeatureList features={service.features} tick={t.tick} />
          </div>
          <div className="mt-10">{cta}</div>
        </AnimateOnScroll>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Our services" subtitle="Residential and commercial work across Wicklow and Dublin" />

      <nav aria-label="Services" className="sticky top-16 md:top-[68px] z-30 border-b border-line bg-paper/95 backdrop-blur-md">
        <div className="mx-auto w-full max-w-[1440px]">
          <ul className="flex gap-2 overflow-x-auto px-5 py-3 sm:px-8 lg:px-12 lg:flex-wrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {services.map((service) => (
              <li key={service.id} className="shrink-0">
                <a
                  href={`#${service.slug}`}
                  className="block whitespace-nowrap border border-line px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-muted transition-colors hover:border-ink hover:text-ink"
                >
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div>
        {services.map((service, i) => (
          <section key={service.id} id={service.slug} className="scroll-mt-12" aria-labelledby={`${service.slug}-title`}>
            <ServiceBlock service={service} index={i} />
          </section>
        ))}
      </div>

      <FaqSection faqs={faqs} />

      <section className="bg-night text-white">
        <PageContainer className="py-24 md:py-32 text-center">
          <h2 className="mx-auto max-w-3xl font-heading text-4xl md:text-6xl font-extrabold leading-[1.02] tracking-[-0.03em]">
            Ready to discuss your project?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg md:text-xl text-white/80">
            Get in touch for a site visit and an honest conversation about what is involved.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/contact" variant="solid" arrow>
              Discuss a Project
            </Button>
            <Button href="/projects" variant="outline-light">
              View Recent Work
            </Button>
          </div>
        </PageContainer>
      </section>
    </>
  );
}
