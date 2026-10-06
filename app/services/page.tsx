import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import { services } from '@/lib/services';
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

function Photo({ src, alt, label }: { src: string; alt: string; label?: string }) {
  return (
    <div className="relative h-full min-h-[16rem] overflow-hidden bg-paper-3">
      <Image src={src} alt={alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
      {label && (
        <span className="absolute left-3 top-3 bg-night/85 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
          {label}
        </span>
      )}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our services"
        subtitle="Residential and commercial work across Wicklow and Dublin"
        image="/images/services/restoration-after.jpg"
        alt="Restored Victorian facade"
        imagePosition="object-[center_35%]"
      />

      <nav
        aria-label="Services"
        className="sticky top-16 md:top-[68px] z-30 border-b border-line bg-paper/95 backdrop-blur-md"
      >
        <PageContainer>
          <ul className="flex gap-1 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {services.map((service) => (
              <li key={service.id} className="shrink-0">
                <a
                  href={`#${service.slug}`}
                  className="block whitespace-nowrap border border-transparent px-3 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-muted hover:border-line hover:text-ink transition-colors"
                >
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </PageContainer>
      </nav>

      <PageContainer className="py-16 md:py-24 space-y-20 md:space-y-28">
        {services.map((service, i) => {
          const imageLeft = i % 2 === 0;

          return (
            <section key={service.id} id={service.slug} className="scroll-mt-36" aria-labelledby={`${service.slug}-title`}>
              <AnimateOnScroll>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
                  <div className={`${imageLeft ? '' : 'lg:order-2'} aspect-[4/3] lg:aspect-auto lg:min-h-[30rem]`}>
                    {service.beforeImage ? (
                      <div className="grid h-full grid-cols-2 gap-2">
                        <Photo src={service.beforeImage} alt={`${service.title} before`} label="Before" />
                        <Photo src={service.image} alt={`${service.title} after`} label="After" />
                      </div>
                    ) : (
                      <Photo src={service.image} alt={service.title} />
                    )}
                  </div>

                  <div className="flex flex-col justify-center lg:py-6">
                    <span className="font-heading text-sm font-bold text-accent-strong tabular-nums mb-4">
                      {String(i + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
                    </span>
                    <h2
                      id={`${service.slug}-title`}
                      className="font-heading text-3xl md:text-[2.6rem] font-bold text-ink mb-5 leading-[1.08]"
                    >
                      {service.title}
                    </h2>
                    <p className="text-muted text-base md:text-[17px] leading-relaxed mb-7">{service.description}</p>
                    <ul className="grid gap-3 mb-9">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-[15px] text-ink-soft">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-accent text-on-accent">
                            <Check size={13} strokeWidth={3} aria-hidden />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="group inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink border-b-2 border-accent pb-1 hover:text-accent-strong transition-colors"
                    >
                      Discuss a project
                      <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>
            </section>
          );
        })}
      </PageContainer>

      <FaqSection faqs={faqs} />

      <section className="bg-accent text-on-accent">
        <PageContainer className="py-16 md:py-20 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
              Ready to discuss your project?
            </h2>
            <p className="text-on-accent/80 max-w-md text-base md:text-lg">
              Get in touch for a site visit and an honest conversation about what is involved.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button href="/contact" variant="dark" arrow>
              Discuss a Project
            </Button>
            <Button href="/projects" variant="outline" className="!border-on-accent/40 !text-on-accent hover:!bg-on-accent hover:!text-accent">
              View recent work
            </Button>
          </div>
        </PageContainer>
      </section>
    </>
  );
}
