import HeroSection from '@/components/home/HeroSection';
import IntroSection from '@/components/home/IntroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import TopModule from '@/components/home/TopModuleSection';
import BlessOrder from '@/components/home/BlessOrder';
import Verview from '@/components/home/Overview';
import BlockchainLayer from '@/components/home/Blockchain-layer';
import Roadmap from '@/components/home/Roadmap';
import Partner from '@/components/home/Partner';
import News from '@/components/home/News';
import JoinNow from '@/components/home/JoinNow';

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
      <Roadmap />
      <Partner />
      <News />
      <JoinNow />
    </div>
  );
}
