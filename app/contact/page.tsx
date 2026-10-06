import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
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
  title: 'Contact Us | AP General Contractors Ltd',
  description:
    'Get in touch with AP General Contractors Ltd to discuss your renovation, restoration or fit-out project in Dublin and Wicklow.',
  openGraph: {
    title: 'Contact Us | AP General Contractors Ltd',
    description: 'Get in touch to discuss your project.',
    siteName: 'AP General Contractors Ltd',
  },
};

const contactDetails = [
  { icon: Phone, label: 'Phone', text: '+353 89 220 4082', href: 'tel:+353892204082' },
  { icon: Mail, label: 'Email', text: 'alanphibbs@alanphibbs.ie', href: 'mailto:alanphibbs@alanphibbs.ie' },
  { icon: MapPin, label: 'Area served', text: 'Dublin & Wicklow' },
  { icon: Clock, label: 'Hours', text: 'Mon–Fri 8am–6pm · Sat 9am–1pm' },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Tell us about your project"
        subtitle="We would be glad to hear from you"
        image="/images/projects/07-garden-landscaping/05.jpg"
        alt="Finished garden terrace"
      />

      <section className="bg-paper-2">
        <PageContainer className="py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-6 lg:gap-8 items-start">
            <div className="bg-paper border border-line p-6 sm:p-8 md:p-10">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-ink mb-8">Send a message</h2>
              <ContactForm />
            </div>

            <div className="bg-night text-white p-6 sm:p-8 md:p-10 lg:sticky lg:top-28">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8">Contact details</h2>
              <ul className="divide-y divide-night-line border-y border-night-line">
                {contactDetails.map((item) => (
                  <li key={item.text}>
                    {item.href ? (
                      <a href={item.href} className="group flex items-center gap-4 py-5">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-accent text-on-accent">
                          <item.icon size={18} strokeWidth={1.75} aria-hidden />
                        </span>
                        <span>
                          <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50 mb-1">
                            {item.label}
                          </span>
                          <span className="block font-semibold break-all group-hover:text-accent transition-colors">
                            {item.text}
                          </span>
                        </span>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 py-5">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-night-line text-accent">
                          <item.icon size={18} strokeWidth={1.75} aria-hidden />
                        </span>
                        <span>
                          <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50 mb-1">
                            {item.label}
                          </span>
                          <span className="block font-semibold">{item.text}</span>
                        </span>
                      </div>
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
