import React from 'react';

const ArchitectureDiagram = () => {
  return (
    <section className="bg-[#0E0E12] py-14">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 text-white">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300/70">System Architecture Diagram</p>
          <h2 className="text-3xl font-semibold text-[#f6f0dd] sm:text-[34px]">How BlessAI Connects to BlessChain</h2>
          <p className="text-[15px] leading-relaxed text-[#c9c5b6]">
            Visual overview of the full stack from user interface through AI engines and BlessChain anchoring.
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111525] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
          <pre className="whitespace-pre-wrap text-sm text-[#e7e1d3] font-mono">
{`[User Interface]
      ↓
[BlessAI System Layer]
 ├── Order
 ├── Shipping
 ├── Menu
 ├── ERP
 └── CRM
      ↓
[AI Engine]
 ├── NLP
 ├── Vision
 ├── Prediction
 └── Automation
      ↓
[BlessChain Blockchain]
 ├── BBTC Token
 ├── Node Network
 └── Data Anchoring`}
          </pre>
          <p className="mt-3 text-xs text-[#c9c5b6]">
            Placeholder diagram. Can be replaced with a designed illustration later.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureDiagram;
