import React from 'react';
import BlessOrderHero from '@/components/blessorder/BlessOrderHero';
import WhatIsBlessOrder from '@/components/blessorder/WhatIsBlessOrder';
import FeatureGrid from '@/components/blessorder/FeatureGrid';
import WorkflowDiagram from '@/components/blessorder/WorkflowDiagram';
import IntegrationSection from '@/components/blessorder/IntegrationSection';
import BlockchainSection from '@/components/blessorder/BlockchainSection';
import ScreenshotSection from '@/components/blessorder/ScreenshotSection';
import UseCaseSection from '@/components/blessorder/UseCaseSection';
import BlessOrderCTA from '@/components/blessorder/BlessOrderCTA';

const BlessOrderFullPage = () => {
  return (
    <main className="bg-[#0E0E12] text-white">
      <BlessOrderHero />
      <WhatIsBlessOrder />
      <FeatureGrid />
      <WorkflowDiagram />
      <IntegrationSection />
      <BlockchainSection />
      <ScreenshotSection />
      <UseCaseSection />
      <BlessOrderCTA />
    </main>
  );
};

export default BlessOrderFullPage;
