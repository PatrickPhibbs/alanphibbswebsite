import type { Metadata } from 'next';
import Image from 'next/image';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import SectionHeading from '@/components/ui/SectionHeading';
import FaqSection from '@/components/ui/FaqSection';

const faqs = [
  {
    q: 'How long has Alan Phibbs been in the trade?',
    a: 'Alan has been working in construction since 1987, starting out as a carpenter in London before setting up his own firms in Dublin and London. He has over 35 years of hands-on experience across residential, commercial, and restoration work.',
  },
  {
    q: 'Where are you based?',
    a: 'We are based in Kilquade, Co. Wicklow, and take on projects across Wicklow, Dublin city, and County Dublin.',
  },
  {
    q: 'What types of projects do you take on?',
    a: 'We handle home extensions, full renovations, residential new builds, commercial fit-outs, building restoration, and landscaping. Alan has worked on everything from listed buildings to Georgian restorations to large-scale residential developments.',
  },
];

export const metadata: Metadata = {
  title: 'About Us | Alan Phibbs Construction',
  description: 'Learn about Alan Phibbs Construction, based in Co. Wicklow, with over 35 years of experience in residential construction, renovations, and fit-outs across Wicklow and Dublin.',
  openGraph: {
    title: 'About Us | Alan Phibbs Construction',
    description: 'Co. Wicklow builders with over 35 years of experience.',
    siteName: 'Alan Phibbs Construction',
  },
};

const features = [
  { title: '35+ Years in the Trade', description: 'Alan has been building since 1987, working across Dublin, London, and Wicklow on residential, commercial, and restoration projects.' },
  { title: 'Fully Insured', description: 'Comprehensive insurance coverage for every project, giving you complete peace of mind.' },
  { title: 'Hands-On Approach', description: 'Alan manages every project personally from start to finish. You always know who you are dealing with.' },
  { title: 'Wicklow and Dublin', description: 'Based in Kilquade, Co. Wicklow, serving clients across Wicklow, Dublin city, and County Dublin.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative h-[38vh] flex items-end mt-20">
        <Image src="/images/projects/10-victorian-building-restoration/02.jpg" alt="About Alan Phibbs Construction" fill priority className="object-cover object-top" sizes="100vw" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-10 w-full">
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white">About Us</h1>
          <p className="mt-2 text-white/50 text-xs uppercase tracking-[0.2em]">Over 35 years in the trade across Wicklow and Dublin</p>
        </div>
      </section>

      {/* Story section */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="aspect-[4/3] relative overflow-hidden">
              <Image
                src="/images/projects/07-garden-landscaping/01.jpg"
                alt="Alan Phibbs Construction completed project"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="pt-2">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-maroon-800 mb-6">Our Story</h2>
              <p className="text-maroon-800/65 leading-relaxed mb-4 text-sm">
                Alan Phibbs has been in construction since 1987, starting out as a carpenter in London before setting up his own firms on both sides of the Irish Sea. He ran Clean Cut Carpentry in Dublin through the early nineties, then co-founded Phibbs Carpentry Contractors, which handled large-scale residential work for developers including Durkans New Homes and Botes Construction. He spent several years in London taking on listed building restorations and commercial fit-outs before returning home to Ireland.
              </p>
              <p className="text-maroon-800/65 leading-relaxed text-sm">
                Today, based in Kilquade, Co. Wicklow, Alan works on <a href="/services" className="text-maroon-800 underline underline-offset-2 hover:text-maroon-600 transition-colors">extensions, full renovations, and commercial fit-outs</a> across Wicklow and Dublin. He manages every job personally, so the standard stays consistent and clients always know who they are talking to.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Why Choose Us */}
      <section className="bg-cream-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="What sets us apart">Why Choose Us</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            {features.map((feature, i) => (
              <AnimateOnScroll key={feature.title} delay={i * 0.08}>
                <div className="border-l-2 border-black pl-6 py-1">
                  <h3 className="font-heading text-xl font-bold text-maroon-800 mb-2">{feature.title}</h3>
                  <p className="text-maroon-800/55 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} />
    </>
  );
}
