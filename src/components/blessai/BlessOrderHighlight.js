import React from 'react';
import Button from '@/components/common/Button';

const features = [
  'Real-time inventory sync',
  'AI-driven sales insights',
  'Smart billing & invoicing',
  'Workflow automation',
  'Multi-store POS integration',
  'Predictive demand analysis',
];

const BlessOrderHighlight = () => {
  return (
    <section className="bg-[#0B0E19] py-14">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 text-white lg:flex-row lg:items-start">
        <div className="flex-1 space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300/70">Core Application</p>
          <h2 className="text-3xl font-semibold text-[#f6f0dd] sm:text-[34px]">BlessOrder — AI ERP & Sales Management</h2>
          <p className="text-[15px] leading-relaxed text-[#c9c5b6]">
            BlessOrder is the flagship application inside BlessAI System. It automates sales workflows, synchronizes inventory, generates smart invoices, and provides AI-powered business insights.
          </p>
          <Button href="/blessorder" className="w-fit">
            Learn More About BlessOrder
          </Button>
        </div>
        <div className="flex-1 space-y-3 rounded-2xl border border-white/10 bg-[#111525] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {features.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-[#e7e1d3]"
              >
                <span className="h-2 w-2 rounded-full bg-amber-300" aria-hidden />
                {item}
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-amber-300/25 bg-[#0f1320]/80 p-4 text-sm text-[#d9d4c6]">
            Visual Suggestion: BlessOrder interface mockup + AI beam glow.
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlessOrderHighlight;
