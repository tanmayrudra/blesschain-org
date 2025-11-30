import HeroSection from '@/components/home/HeroSection';
import IntroSection from '@/components/home/IntroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import CTASection from '@/components/home/CTASection';
import TopModule from '@/components/home/TopModuleSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <IntroSection />
      <FeaturesSection />
      <TopModule />
      <CTASection />
    </div>
  );
}