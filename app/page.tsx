import Hero from '@/components/home/Hero';
import ServiceCards from '@/components/home/ServiceCards';
import RecentWork from '@/components/home/RecentWork';
import AwardBanner from '@/components/home/AwardBanner';

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceCards />
      <RecentWork />
      <AwardBanner />
    </>
  );
}
