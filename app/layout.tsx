import type { Metadata } from 'next';
import { Archivo, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileActionBar from '@/components/layout/MobileActionBar';
import JsonLd from '@/components/JsonLd';
import ThemeProvider from '@/components/ui/ThemeProvider';
import { THEME_STORAGE_KEY } from '@/lib/theme';
import { site } from '@/lib/site';

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: site.name,
  slogan: site.tagline,
  founder: { '@type': 'Person', name: 'Alan Phibbs' },
  url: 'https://www.alanphibbs.ie',
  telephone: '+353892204082',
  email: 'alanphibbs@alanphibbs.ie',
  foundingDate: '1991',
  logo: `${site.url}${site.logo}`,
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

const archivo = Archivo({
  variable: '--font-archivo',
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} | ${site.tagline}`,
  description:
    'Residential renovations, restorations and fit-outs across Dublin and Wicklow. Careful planning, reliable delivery and a high-quality finish since 1991.',
  openGraph: {
    title: `${site.name} | ${site.tagline}`,
    description:
      'Residential renovations, restorations and fit-outs across Dublin and Wicklow.',
    siteName: site.name,
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
      <body className={`${archivo.variable} ${inter.variable} antialiased`}>
        <ThemeProvider>
          <JsonLd data={businessSchema} />
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <MobileActionBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
