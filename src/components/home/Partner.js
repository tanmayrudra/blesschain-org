import React from 'react';

const partners = [
  { name: 'Layer Labs', tag: 'Infrastructure' },
  { name: 'Civic Guild', tag: 'Community' },
  { name: 'Northwind Capital', tag: 'Funding' },
  { name: 'Helio Data', tag: 'AI' },
  { name: 'Atlas Nodes', tag: 'Validators' },
  { name: 'Orbit UX', tag: 'Product' },
];

const Partner = () => {
  return (
    <section className="w-full bg-[#0E0E12] py-16 sm:py-20">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-10 px-6 text-white">
        <div className="space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300/70">Partners</p>
          <h3 className="text-[30px] font-semibold leading-tight text-[#f6f0dd] sm:text-[36px]">
            Building together with trusted allies
          </h3>
          <p className="text-[15px] leading-relaxed text-[#c9c5b6]">
            Teams across infrastructure, AI, finance, and community are collaborating on the BlessChain vision.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-between rounded-2xl border border-white/5 bg-[#0b0f1a]/80 px-5 py-4 shadow-[0_12px_30px_rgba(0,0,0,0.35)]"
            >
              <div>
                <p className="text-lg font-semibold text-[#f6f0dd]">{partner.name}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-amber-200/80">{partner.tag}</p>
              </div>
              <span className="h-2 w-2 rounded-full bg-amber-300" aria-hidden />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partner;
