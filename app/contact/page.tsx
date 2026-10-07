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
      <PageHero title="Tell us about your project" subtitle="We would be glad to hear from you" />

      <section className="bg-paper">
        <PageContainer className="py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,7fr)_minmax(0,4fr)] gap-14 lg:gap-24 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-[-0.025em] text-ink mb-8 md:mb-10">Send a message</h2>
              <ContactForm />
            </div>

            <div className="lg:sticky lg:top-28 lg:border-l lg:border-line lg:pl-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-[-0.025em] text-ink mb-6">Contact details</h2>
              <ul className="space-y-1">
                {contactDetails.map((item) => {
                  const body = (
                    <>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-night text-white">
                        <item.icon size={18} strokeWidth={1.75} aria-hidden />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-muted mb-1">{item.label}</span>
                        <span className="block font-semibold text-ink break-words transition-colors group-hover:text-accent-strong">{item.text}</span>
                      </span>
                    </>
                  );
                  return (
                    <li key={item.text}>
                      {item.href ? (
                        <a href={item.href} className="group flex items-center gap-4 py-3">
                          {body}
                        </a>
                      ) : (
                        <div className="flex items-center gap-4 py-3">{body}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </PageContainer>
      </section>

      <FaqSection faqs={faqs} />
    </>
  );
}
