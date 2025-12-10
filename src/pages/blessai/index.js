import React from 'react';
import BlessAIHero from '@/components/blessai/BlessAIHero';
import WhatIsBlessAI from '@/components/blessai/WhatIsBlessAI';
import BlessOrderHighlight from '@/components/blessai/BlessOrderHighlight';
import AppSuiteGrid from '@/components/blessai/AppSuiteGrid';
import AICapabilities from '@/components/blessai/AICapabilities';
import ArchitectureDiagram from '@/components/blessai/ArchitectureDiagram';
import UseCases from '@/components/blessai/UseCases';
import CTASection from '@/components/blessai/CTASection';
import Button from '@/components/common/Button';

const BlessAIPage = () => {
  return (
    <main className="bg-[#0E0E12] text-white">
      <BlessAIHero />
      <WhatIsBlessAI />
      <BlessOrderHighlight />
      <AppSuiteGrid />
      <AICapabilities />

      <section className="bg-[#0B0E19] py-14">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 text-white">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-300/70">How It Connects</p>
            <h2 className="text-3xl font-semibold text-[#f6f0dd] sm:text-[34px]">AI Runs the Business. BlessChain Secures the Data.</h2>
            <p className="text-[15px] leading-relaxed text-[#c9c5b6]">
              BlessAI System integrates seamlessly with BlessChain. Blockchain ensures transparency, security, and optional BBTC-powered AI tasks.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              'Business data can be hashed to BlessChain',
              'BBTC can be used for AI service credits',
              'Node rewards will support future AI workloads',
              'Sustainable blockchain with Sabbath Mode',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#111525] px-4 py-3 text-sm text-[#e7e1d3]"
              >
                <span className="h-2 w-2 rounded-full bg-amber-300" aria-hidden />
                {item}
              </div>
            ))}
          </div>
          <div>
            <Button href="/">Learn About BlessChain</Button>
          </div>
        </div>
      </section>

      <ArchitectureDiagram />

      <section className="bg-[#0E0E12] py-14">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 text-white">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-300/70">Screenshots / Demo</p>
            <h2 className="text-3xl font-semibold text-[#f6f0dd] sm:text-[34px]">See BlessAI System in Action</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {['BlessOrder UI', 'BlessShipping UI', 'AI Recommendation screen'].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-[#111525] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
                <p className="text-sm uppercase tracking-[0.2em] text-amber-200/80">{item}</p>
                <div className="mt-3 h-40 rounded-xl border border-dashed border-white/15 bg-white/5" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <UseCases />
      <CTASection />
    </main>
  );
};

export default BlessAIPage;
