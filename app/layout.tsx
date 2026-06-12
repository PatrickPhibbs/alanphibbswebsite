import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/JsonLd';
import ThemeProvider from '@/components/ui/ThemeProvider';
import { THEME_STORAGE_KEY } from '@/lib/theme';

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: 'Alan Phibbs Construction',
  url: 'https://www.alanphibbs.ie',
  telephone: '+353892204082',
  email: 'alanphibbs@alanphibbs.ie',
  foundingDate: '1991',
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

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
  weight: ['200', '300', '400'],
});

export const metadata: Metadata = {
  title: 'Alan Phibbs General Contractor',
  description:
    'Residential renovations, restorations and fit-outs across Dublin and Wicklow. Careful planning, reliable delivery and a high-quality finish since 1991.',
  openGraph: {
    title: 'Alan Phibbs Construction | General Contractor',
    description:
      'Residential renovations, restorations and fit-outs across Dublin and Wicklow.',
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
  const themeScript = `(function(){try{var s=localStorage.getItem("${THEME_STORAGE_KEY}");var t=s==="light"||s==="dark"?s:(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");if(t==="dark")document.documentElement.classList.add("dark");}catch(e){}})();`;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${raleway.variable} antialiased`}>
        <ThemeProvider>
          <JsonLd data={businessSchema} />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
