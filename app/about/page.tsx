import type { Metadata } from 'next';
import Image from 'next/image';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import SectionHeading from '@/components/ui/SectionHeading';
import FaqSection from '@/components/ui/FaqSection';

const faqs = [
  {
    q: 'How long has Alan Phibbs Construction been in business?',
    a: 'Alan Phibbs Construction was founded in 1998 and has been delivering quality construction across Dublin and Wicklow for over 28 years.',
  },
  {
    q: 'Where are you based?',
    a: 'We are based in Greystones, Co. Wicklow, and work on projects across Dublin city, County Dublin, and the greater Wicklow area.',
  },
  {
    q: 'What types of projects do you take on?',
    a: 'We handle residential new builds, home extensions, full renovations, commercial fit-outs, landscaping, and building restoration projects of all sizes.',
  },
];

export const metadata: Metadata = {
  title: 'About Us | Alan Phibbs Construction',
  description: 'Learn about Alan Phibbs Construction — Dublin builders with over 28 years of experience in residential construction, renovations, and fit-outs.',
  openGraph: {
    title: 'About Us | Alan Phibbs Construction',
    description: 'Dublin builders with over 28 years of experience.',
    siteName: 'Alan Phibbs Construction',
  },
};

const features = [
  { title: '28+ Years Experience', description: 'Delivering quality construction across Dublin since 1998 with hundreds of satisfied clients.' },
  { title: 'Fully Insured', description: 'Comprehensive insurance coverage for every project, giving you complete peace of mind.' },
  { title: 'Client Focused', description: 'Every project is built around the client — open communication and satisfaction from start to finish.' },
  { title: 'Dublin Based', description: 'Proudly serving Dublin and surrounding areas with deep local knowledge and connections.' },
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
          <p className="mt-2 text-white/50 text-xs uppercase tracking-[0.2em]">Building excellence in Dublin since 1998</p>
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
                Founded in 1998 by Alan Phibbs, our company has grown from a small team of dedicated craftsmen into one of Dublin&apos;s most trusted construction firms. With over 28 years of experience, we&apos;ve built a reputation for quality, reliability, and exceptional attention to detail.
              </p>
              <p className="text-maroon-800/65 leading-relaxed text-sm">
                Every project we undertake is guided by our core values: craftsmanship, transparency, and client satisfaction. From <a href="/services" className="text-maroon-800 underline underline-offset-2 hover:text-maroon-600 transition-colors">residential new builds to commercial fit-outs</a>, we bring the same level of dedication and expertise to every job, no matter the scale.
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
