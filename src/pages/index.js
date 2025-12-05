import HeroSection from '@/components/home/HeroSection';
import IntroSection from '@/components/home/IntroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import TopModule from '@/components/home/TopModuleSection';
import BlessOrder from '@/components/home/BlessOrder';
import Verview from '@/components/home/Overview';
import BlockchainLayer from '@/components/home/Blockchain-layer';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <IntroSection />
      <FeaturesSection />
      <TopModule />
      <BlessOrder />
      <Verview />
      <BlockchainLayer />
    </div>
  );
}
