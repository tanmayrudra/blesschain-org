import React from 'react';
import Button from '@/components/common/Button';

const timeline = [
  {
    year: '2024',
    items: ['BlessChain MVP', 'BlessChain Testnet'],
  },
  {
    year: '2025',
    items: ['BlessOrder Launch', 'BlessAI System Beta', 'Ecosystem Expansion'],
  },
  {
    year: '2026',
    items: ['BlessChain Mainnet', 'Validator Program', 'BlessAI Full Suite Release'],
  },
  {
    year: '2027',
    items: ['Global Node Network', 'AI-Blockchain Automation', 'Enterprise Integrations'],
  },
];

const Roadmap = () => {
  return (
    <section className="relative w-full bg-[#07090f] py-16 sm:py-24" id="roadmap">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 20% 20%, rgba(255,191,87,0.08), transparent 32%), radial-gradient(circle at 80% 10%, rgba(92,167,255,0.08), transparent 28%)',
        }}
      />
      <div className="relative mx-auto flex max-w-[1100px] flex-col gap-10 px-6 text-white">
        <div className="space-y-4 text-left">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300/70">Roadmap</p>
          <h3 className="text-[30px] font-semibold leading-tight text-[#f6f0dd] sm:text-[36px]">
            Roadmap — Combined View (AI + Blockchain)
          </h3>
          <p className="max-w-3xl text-[15px] leading-relaxed text-[#c9c5b6]">
            Timeline example that lines up BlessAI releases with BlessChain milestones for a single view of what ships
            and when.
          </p>
        </div>

        <div className="relative space-y-8 rounded-3xl border border-white/5 bg-[#0b0f1a]/60 p-6 shadow-[0_24px_50px_rgba(0,0,0,0.4)] backdrop-blur-md">
          <div className="absolute left-7 top-10 bottom-10 w-[2px] bg-gradient-to-b from-amber-300/70 via-amber-300/15 to-transparent" />
          {timeline.map((phase) => (
            <div key={phase.year} className="relative">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-300/20 bg-[#0b0f1a] text-lg font-semibold text-amber-200">
                  {phase.year}
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-[#f6f0dd]">
                  AI + Blockchain
                </div>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {phase.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/5 bg-[#0d111b]/90 px-4 py-3 text-sm font-semibold text-[#e7e1d3] shadow-[0_10px_28px_rgba(0,0,0,0.28)]"
                  >
                    <span className="h-2 w-2 rounded-full bg-amber-300" aria-hidden />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button href="/roadmap">See Full Roadmap</Button>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
