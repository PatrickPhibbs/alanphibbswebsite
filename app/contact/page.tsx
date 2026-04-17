import type { Metadata } from 'next';
import Image from 'next/image';
import { Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';
import FaqSection from '@/components/ui/FaqSection';

const faqs = [
  {
    q: 'What are your working hours?',
    a: 'We are available Monday to Friday 8am–6pm and Saturday 9am–1pm. You can also reach us via our contact form at any time.',
  },
  {
    q: 'How do I get in touch?',
    a: 'Fill in our contact form or call us on +353 89 220 4082 and we\'ll arrange a free site visit at a time that suits you.',
  },
  {
    q: 'Do you serve Greystones and Dublin?',
    a: 'Yes, we are based in Greystones, Co. Wicklow, and take on projects across Dublin city, County Dublin, and the wider Wicklow area.',
  },
];

export const metadata: Metadata = {
  title: 'Contact Us | Alan Phibbs Construction',
  description: 'Get in touch with Alan Phibbs Construction for a free consultation and quote on your next building project in Dublin.',
  openGraph: {
    title: 'Contact Us | Alan Phibbs Construction',
    description: 'Get in touch for a free consultation and quote.',
    siteName: 'Alan Phibbs Construction',
  },
};

const contactDetails = [
  { icon: Phone, text: '+353 89 220 4082' },
  { icon: Mail, text: 'alanphibbs@alanphibbs.ie' },
  { icon: Clock, text: 'Mon-Fri: 8am-6pm, Sat: 9am-1pm' },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative h-[38vh] flex items-end mt-20">
        <Image src="/images/projects/07-garden-landscaping/01.jpg" alt="Contact Alan Phibbs Construction" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-10 w-full">
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white">Get In Touch</h1>
          <p className="mt-2 text-white/50 text-xs uppercase tracking-[0.2em]">We&apos;d love to hear about your project</p>
        </div>
      </section>

      {/* Contact content */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Contact form */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-maroon-800 mb-8">Send Us a Message</h2>
            <ContactForm />
          </div>

          {/* Right: Details */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-maroon-800 mb-8">Contact Details</h2>
            <ul className="divide-y divide-cream-300">
              {contactDetails.map((item) => (
                <li key={item.text} className="flex items-center gap-4 py-3">
                  <item.icon size={14} className="text-maroon-800/30 flex-shrink-0" />
                  <span className="text-maroon-800/65 text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} />
    </>
  );
}
