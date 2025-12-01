import HeroSection from '@/components/home/HeroSection';
import IntroSection from '@/components/home/IntroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import TopModule from '@/components/home/TopModuleSection';
import BlessOrder from '@/components/home/BlessOrder';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <IntroSection />
      <FeaturesSection />
      <TopModule />
      <BlessOrder />
    </div>
  );
}
