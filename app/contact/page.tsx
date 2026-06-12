import type { Metadata } from 'next';
import Image from 'next/image';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';
import FaqSection from '@/components/ui/FaqSection';
import PageContainer from '@/components/ui/PageContainer';

const faqs = [
  {
    q: 'What are your working hours?',
    a: 'We are available Monday to Friday 8am–6pm and Saturday 9am–1pm. You can also reach us via our contact form at any time.',
  },
  {
    q: 'How do I get in touch?',
    a: "Fill in our contact form or call us on +353 89 220 4082 and we'll arrange a site visit at a time that suits you.",
  },
  {
    q: 'Do you serve Greystones and Dublin?',
    a: 'Yes, we are based in Greystones, Co. Wicklow, and take on projects across Dublin city, County Dublin, and the wider Wicklow area.',
  },
];

export const metadata: Metadata = {
  title: 'Contact Us | Alan Phibbs Construction',
  description:
    'Get in touch with Alan Phibbs Construction to discuss your renovation, restoration or fit-out project in Dublin and Wicklow.',
  openGraph: {
    title: 'Contact Us | Alan Phibbs Construction',
    description: 'Get in touch to discuss your project.',
    siteName: 'Alan Phibbs Construction',
  },
};

const contactDetails = [
  { icon: Phone, text: '+353 89 220 4082', href: 'tel:+353892204082' },
  { icon: Mail, text: 'alanphibbs@alanphibbs.ie', href: 'mailto:alanphibbs@alanphibbs.ie' },
  { icon: MapPin, text: 'Dublin & Wicklow' },
  { icon: Clock, text: 'Mon–Fri 8am–6pm · Sat 9am–1pm' },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative h-[38vh] flex items-end mt-20">
        <Image
          src="/images/projects/07-garden-landscaping/01.jpg"
          alt="Contact Alan Phibbs Construction"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <PageContainer className="relative z-10 pb-10 w-full">
          <h1 className="font-heading text-4xl md:text-6xl font-extralight text-white">
            Tell us about your project
          </h1>
          <p className="mt-3 text-white/70 text-[11px] uppercase tracking-[0.2em] font-light">
            We would be glad to hear from you
          </p>
        </PageContainer>
      </section>

      <section>
        <PageContainer className="pt-12 pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-light text-charcoal-900 mb-8">
              Send a message
            </h2>
            <ContactForm />
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-light text-charcoal-900 mb-8">
              Contact details
            </h2>
            <ul className="divide-y divide-warm-300 border border-warm-300/60">
              {contactDetails.map((item) => (
                <li key={item.text} className="flex items-center gap-4 px-5 py-4">
                  <item.icon size={15} strokeWidth={1.5} className="text-stone-400 shrink-0" />
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-charcoal-700 text-sm font-light hover:text-charcoal-900 transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-charcoal-700 text-sm font-light">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        </PageContainer>
      </section>

      <FaqSection faqs={faqs} />
    </>
  );
}
