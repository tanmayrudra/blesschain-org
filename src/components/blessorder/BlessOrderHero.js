import React from 'react';
import Button from '@/components/common/Button';

const BlessOrderHero = () => {
  return (
    <section
      className="relative overflow-hidden bg-[#0B0E19] py-16 sm:py-24"
      style={{
        background:
          'radial-gradient(circle at 20% 20%, rgba(255,191,87,0.12), transparent 36%), radial-gradient(circle at 80% 0%, rgba(92,167,255,0.12), transparent 34%), #0B0E19',
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_40%)] pointer-events-none" />
      <div className="relative mx-auto flex max-w-5xl flex-col gap-8 px-6 text-white lg:flex-row lg:items-center">
        <div className="flex-1 space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300/80">BlessOrder — AI ERP & Sales</p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl text-[#f6f0dd]">
            BlessOrder — AI ERP & Sales Management System
          </h1>
          <p className="text-lg text-[#d9d4c6]">
            BlessOrder transforms sales, inventory, billing, and operational workflows with an intelligent AI-powered
            engine.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="/blessorder">Try BlessOrder</Button>
            <Button href="/blessai" variant="secondary">
              Explore BlessAI System
            </Button>
            <Button variant="ghost">Request Demo (future)</Button>
          </div>
        </div>
        <div className="relative flex-1 rounded-3xl border border-white/10 bg-[#0f1320]/80 p-6 shadow-[0_24px_50px_rgba(0,0,0,0.4)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,191,87,0.12),transparent_40%)] pointer-events-none" />
          <div className="relative space-y-4">
            <div className="rounded-2xl border border-white/10 bg-[#111525] p-4 text-sm text-[#e7e1d3]">
              Visual: BlessOrder card UI mockup with AI beam glow (placeholder)
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs text-[#e7e1d3]">
              {['Orders', 'Inventory', 'Billing', 'Shipping', 'AI', 'Reports'].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2 py-2"
                >
                  <span className="h-2 w-2 rounded-full bg-amber-300" aria-hidden />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlessOrderHero;
