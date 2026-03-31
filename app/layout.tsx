import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/JsonLd';

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: 'Alan Phibbs Construction',
  url: 'https://www.alanphibbs.ie',
  telephone: '+353892204082',
  email: 'alanphibbs@alanphibbs.ie',
  foundingDate: '1998',
  logo: 'https://www.alanphibbs.ie/logo-removebg-preview.png',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Greystones',
    addressRegion: 'County Wicklow',
    addressCountry: 'IE',
  },
  areaServed: [
    { '@type': 'City', name: 'Dublin' },
    { '@type': 'City', name: 'Greystones' },
    { '@type': 'AdministrativeArea', name: 'County Wicklow' },
    { '@type': 'AdministrativeArea', name: 'County Dublin' },
  ],
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '13:00' },
  ],
  sameAs: [],
};

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: "Alan Phibbs General Contractor",
  description: 'Quality construction, renovation & fit-out services across Dublin. Residential new builds, extensions, and refurbishments since 1998.',
  openGraph: {
    title: "Alan Phibbs Construction General Contractor",
    description: 'Quality construction, renovation & fit-out services across Dublin.',
    siteName: 'Alan Phibbs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <JsonLd data={businessSchema} />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
