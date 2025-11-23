
import React from 'react';
import HeroSection from '@/components/pages/index/HeroSection';
import IntroSection from '@/components/pages/index/IntroSection';
import BlessAISection from '@/components/pages/index/BlessAISection';
import BlessOrderSection from '@/components/pages/index/BlessOrderSection';
import SuiteSection from '@/components/pages/index/SuiteSection';
import BlockchainSection from '@/components/pages/index/BlockchainSection';
import RoadmapSection from '@/components/pages/index/RoadmapSection';
import EcosystemSection from '@/components/pages/index/EcosystemSection';
import PartnersSection from '@/components/pages/index/PartnersSection';
import NewsSection from '@/components/pages/index/NewsSection';
import CTASection from '@/components/pages/index/CTASection';

const IndexPage = () => {
  return (
    <div className="bg-white text-gray-800">
      <HeroSection />
      <IntroSection />
      <BlessAISection />
      <BlessOrderSection />
      <SuiteSection />
      <BlockchainSection />
      <RoadmapSection />
      <EcosystemSection />
      <PartnersSection />
      <NewsSection />
      <CTASection />
    </div>
  );
};

export default IndexPage;
