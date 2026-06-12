import type { Metadata } from 'next';
import Image from 'next/image';
import { services } from '@/lib/services';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import Button from '@/components/ui/Button';
import FaqSection from '@/components/ui/FaqSection';
import PageContainer from '@/components/ui/PageContainer';

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
    a: "Yes. Alan Phibbs Construction carries full public liability and employers' liability insurance on every project.",
  },
  {
    q: 'Do you work across Dublin as well as Wicklow?',
    a: 'Yes. We are based in Greystones, Co. Wicklow, and regularly take on projects across Dublin city and county, as well as the wider Wicklow area.',
  },
];

export const metadata: Metadata = {
  title: 'Our Services | Alan Phibbs Construction',
  description:
    'Restoration and conservation, kitchen and bathroom fit-outs, painting, electrical, groundworks, and office fit-outs across Dublin and Wicklow.',
  openGraph: {
    title: 'Our Services | Alan Phibbs Construction',
    description:
      'Restoration and conservation, kitchen and bathroom fit-outs, painting, electrical, groundworks, and office fit-outs across Dublin and Wicklow.',
    siteName: 'Alan Phibbs Construction',
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative h-[38vh] flex items-end mt-20">
        <Image
          src="/images/services/restoration-after.jpg"
          alt="Alan Phibbs Construction services"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <PageContainer className="relative z-10 pb-10 w-full">
          <h1 className="font-heading text-4xl md:text-6xl font-extralight text-white">Our services</h1>
          <p className="mt-3 text-white/70 text-[11px] uppercase tracking-[0.2em] font-light">
            Residential and commercial work across Wicklow and Dublin
          </p>
        </PageContainer>
      </section>

      <PageContainer className="pt-14 pb-6 space-y-16">
        {services.map((service, i) => {
          const imageLeft = i % 2 === 0;
          const hasBeforeAfter = !!service.beforeImage;

          return (
            <AnimateOnScroll key={service.id} direction={imageLeft ? 'left' : 'right'}>
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-start ${!imageLeft ? 'md:[direction:rtl]' : ''}`}
              >
                <div className={`${!imageLeft ? 'md:[direction:ltr]' : ''}`}>
                  {hasBeforeAfter ? (
                    <div className="grid grid-cols-2 gap-2">
                      <div className="relative aspect-[3/4] overflow-hidden bg-warm-200">
                        <Image
                          src={service.beforeImage!}
                          alt={`${service.title} before`}
                          fill
                          sizes="(max-width: 768px) 50vw, 25vw"
                          className="object-cover"
                          loading="lazy"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/70 px-3 py-2">
                          <span className="text-white/80 text-[10px] uppercase tracking-[0.2em] font-light">
                            Before
                          </span>
                        </div>
                      </div>
                      <div className="relative aspect-[3/4] overflow-hidden bg-warm-200">
                        <Image
                          src={service.image}
                          alt={`${service.title} after`}
                          fill
                          sizes="(max-width: 768px) 50vw, 25vw"
                          className="object-cover"
                          loading="lazy"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/70 px-3 py-2">
                          <span className="text-white/80 text-[10px] uppercase tracking-[0.2em] font-light">
                            After
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="aspect-[4/3] relative overflow-hidden bg-warm-200">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>

                <div className={`pt-2 ${!imageLeft ? 'md:[direction:ltr]' : ''}`}>
                  <h2 className="font-heading text-3xl md:text-4xl font-light text-charcoal-900 mb-4 leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-charcoal-600 leading-relaxed mb-6 text-sm font-light">
                    {service.description}
                  </p>
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-charcoal-600 font-light"
                      >
                        <span className="w-px h-4 bg-charcoal-800/30 mt-1 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className="text-charcoal-800 text-[11px] font-light uppercase tracking-[0.15em] hover:text-charcoal-600 transition-colors border-b border-charcoal-800/20 hover:border-charcoal-800 pb-px"
                  >
                    Discuss a project →
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          );
        })}
      </PageContainer>

      <FaqSection faqs={faqs} />

      <section className="bg-charcoal-900 py-20 mt-8">
        <PageContainer>
          <h2 className="font-heading text-3xl md:text-4xl font-light text-warm-50 mb-4 leading-tight">
            Ready to discuss your project?
          </h2>
          <p className="text-warm-200/70 mb-8 max-w-sm text-sm font-light">
            Get in touch for a site visit and an honest conversation about what is involved.
          </p>
          <div className="flex items-center gap-8 flex-wrap">
            <Button href="/contact" variant="outline-light">
              Discuss a Project
            </Button>
            <a
              href="/projects"
              className="text-warm-200/60 text-[11px] uppercase tracking-[0.15em] font-light hover:text-warm-50 transition-colors border-b border-warm-200/20 hover:border-warm-50 pb-px"
            >
              View recent work →
            </a>
          </div>
        </PageContainer>
      </section>
    </>
  );
}
