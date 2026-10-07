import Hero from '@/components/home/Hero';
import SectorTiles from '@/components/home/SectorTiles';
import RecentWork from '@/components/home/RecentWork';
import ServiceCards from '@/components/home/ServiceCards';
import AwardBanner from '@/components/home/AwardBanner';
import AboutTeaser from '@/components/home/AboutTeaser';

export default function Home() {
  return (
    <>
      <Hero />
      <SectorTiles />
      <RecentWork />
      <ServiceCards />
      <AwardBanner />
      <AboutTeaser />
    </>
  );
}
