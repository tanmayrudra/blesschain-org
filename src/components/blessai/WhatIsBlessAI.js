import React from 'react';

const featureCards = [
  {
    title: 'Unified Operations',
    copy: 'Connects sales, shipping, menu, and ERP in one place.',
  },
  {
    title: 'AI Automation',
    copy: 'Predicts trends, automates workflows, and delivers insights.',
  },
  {
    title: 'Blockchain Transparency',
    copy: 'Optional anchoring to BlessChain for verification and BBTC-based tasks.',
  },
];

const WhatIsBlessAI = () => {
  return (
    <section className="bg-[#0E0E12] py-14">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 text-white">
        <div className="space-y-3 text-left">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300/70">What Is BlessAI System?</p>
          <h2 className="text-3xl font-semibold text-[#f6f0dd] sm:text-[34px]">A Unified AI Platform for Modern Businesses</h2>
          <p className="text-[15px] leading-relaxed text-[#c9c5b6]">
            BlessAI System is an integrated suite of AI-powered business applications. It is designed to replace fragmented tools and create
            a connected operational environment across sales, logistics, inventory, accounting, and decision-making.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-[#e7e1d3]">
            {['Retail', 'Restaurants', 'Delivery services', 'E-commerce', 'SMEs', 'Multi-location businesses'].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {featureCards.map((card) => (
            <div key={card.title} className="rounded-2xl border border-white/10 bg-[#111525] p-4 shadow-[0_14px_32px_rgba(0,0,0,0.35)]">
              <p className="text-lg font-semibold text-[#f6f0dd]">{card.title}</p>
              <p className="mt-2 text-sm text-[#d9d4c6]">{card.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsBlessAI;
