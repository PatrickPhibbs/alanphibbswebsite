import type { Metadata } from 'next';
import Image from 'next/image';
import { services } from '@/lib/services';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import Button from '@/components/ui/Button';
import FaqSection from '@/components/ui/FaqSection';

const faqs = [
  {
    q: 'Do you offer free quotes?',
    a: 'Yes - we offer a free initial consultation and site visit for all projects across Dublin and Greystones. Get in touch to arrange yours.',
  },
  {
    q: 'Why use lime plaster and lime render on older buildings?',
    a: 'Lime-based finishes are essential for Georgian and Victorian buildings because they are breathable and flexible. Unlike modern cement, lime allows moisture to escape through the wall rather than trapping it, which prevents damp, cracking, and long-term structural damage.',
  },
  {
    q: 'Are you fully insured?',
    a: 'Yes. Alan Phibbs Construction carries full public liability and employers\' liability insurance on every project, giving you complete peace of mind.',
  },
  {
    q: 'Do you work across Dublin as well as Greystones?',
    a: 'Yes. We are based in Greystones, Co. Wicklow, and regularly take on projects across Dublin city and county, as well as the wider Wicklow area.',
  },
];

export const metadata: Metadata = {
  title: 'Our Services | Alan Phibbs Construction',
  description: 'Restoration & conservation, kitchen and bathroom fitouts, painting, electrical, groundworks, and office fit-outs across Dublin and Wicklow.',
  openGraph: {
    title: 'Our Services | Alan Phibbs Construction',
    description: 'Restoration & conservation, kitchen and bathroom fitouts, painting, electrical, groundworks, and office fit-outs across Dublin and Wicklow.',
    siteName: 'Alan Phibbs Construction',
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative h-[38vh] flex items-end mt-20">
        <Image src="/images/services/restoration-after.jpg" alt="Alan Phibbs Construction services" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-10 w-full">
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white">Our Services</h1>
          <p className="mt-2 text-white/50 text-xs uppercase tracking-[0.2em]">Quality construction across Wicklow and Dublin</p>
        </div>
      </section>

      {/* Service sections */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-8 space-y-24">
        {services.map((service, i) => {
          const imageLeft = i % 2 === 0;
          const hasBeforeAfter = !!service.beforeImage;

          return (
            <AnimateOnScroll key={service.id} direction={imageLeft ? 'left' : 'right'}>
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-start ${!imageLeft ? 'md:[direction:rtl]' : ''}`}>

                {/* Image panel */}
                <div className={`${!imageLeft ? 'md:[direction:ltr]' : ''}`}>
                  {hasBeforeAfter ? (
                    <div className="flex flex-col gap-2">
                      <div className="grid grid-cols-2 gap-1">
                        <div className="relative aspect-[3/4] overflow-hidden">
                          <Image
                            src={service.beforeImage!}
                            alt={`${service.title} before`}
                            fill
                            sizes="(max-width: 768px) 50vw, 25vw"
                            className="object-cover"
                            loading="lazy"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-3 py-2">
                            <span className="text-white/80 text-[10px] uppercase tracking-[0.2em]">Before</span>
                          </div>
                        </div>
                        <div className="relative aspect-[3/4] overflow-hidden">
                          <Image
                            src={service.image}
                            alt={`${service.title} after`}
                            fill
                            sizes="(max-width: 768px) 50vw, 25vw"
                            className="object-cover"
                            loading="lazy"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-maroon-800/80 px-3 py-2">
                            <span className="text-gold-500 text-[10px] uppercase tracking-[0.2em]">After</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="aspect-[4/3] relative overflow-hidden">
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

                {/* Text content */}
                <div className={`pt-2 ${!imageLeft ? 'md:[direction:ltr]' : ''}`}>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-maroon-800 mb-4 leading-tight">{service.title}</h2>
                  <p className="text-maroon-800/65 leading-relaxed mb-6 text-sm">{service.description}</p>
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-maroon-800/65">
                        <span className="w-px h-4 bg-black mt-1 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href="/contact" className="text-maroon-800 text-xs font-semibold uppercase tracking-[0.15em] hover:text-black transition-colors border-b border-maroon-800/20 hover:border-black pb-px">
                    Get in Touch →
                  </a>
                </div>

              </div>
            </AnimateOnScroll>
          );
        })}
      </div>

      <FaqSection faqs={faqs} />

      {/* CTA section */}
      <section className="bg-maroon-800 py-20 mt-8">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Ready to Start<br />Your Project?
          </h2>
          <p className="text-cream-200/60 mb-8 max-w-sm text-sm">
            Get in touch today for a free consultation and quote.
          </p>
          <div className="flex items-center gap-8 flex-wrap">
            <Button href="/contact" variant="outline">Get in Touch</Button>
            <a href="/projects" className="text-cream-200/60 text-sm uppercase tracking-[0.15em] hover:text-white transition-colors border-b border-cream-200/20 hover:border-white pb-px">
              View Our Projects →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
