import Hero from '@/components/home/Hero';
import RecentWork from '@/components/home/RecentWork';
import ServiceCards from '@/components/home/ServiceCards';
import AwardBanner from '@/components/home/AwardBanner';
import AboutTeaser from '@/components/home/AboutTeaser';
import ContactTeaser from '@/components/home/ContactTeaser';

export default function Home() {
  return (
    <>
      <Hero />
      <RecentWork />
      <ServiceCards />
      <AwardBanner />
      <AboutTeaser />
      <ContactTeaser />
    </>
  );
}
