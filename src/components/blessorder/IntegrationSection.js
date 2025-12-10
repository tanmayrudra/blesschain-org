import React from 'react';

const integrations = [
  'BlessShipping → creates delivery tasks automatically',
  'BlessMenu → syncs menu items & product data',
  'BlessERP → feeds into accounting & inventory modules',
  'BlessCRM → customer behavior & follow-up',
];

const IntegrationSection = () => {
  return (
    <section className="bg-[#0B0E19] py-14">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 text-white">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300/70">Integration</p>
          <h2 className="text-3xl font-semibold text-[#f6f0dd] sm:text-[34px]">Works Seamlessly with the Entire BlessAI Suite</h2>
          <p className="text-[15px] leading-relaxed text-[#c9c5b6]">
            BlessOrder is the heart of BlessAI System. It connects directly with:
          </p>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          {integrations.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#111525] px-4 py-3 text-sm text-[#e7e1d3]"
            >
              <span className="h-2 w-2 rounded-full bg-amber-300" aria-hidden />
              {item}
            </div>
          ))}
        </div>
        <p className="text-sm text-[#c9c5b6]">
          This makes BlessOrder not just an ERP, but a complete end-to-end business engine.
        </p>
      </div>
    </section>
  );
};

export default IntegrationSection;
