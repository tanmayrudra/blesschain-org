import React from 'react';

const ScreenshotSection = () => {
  return (
    <section className="bg-[#0B0E19] py-14">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 text-white">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300/70">Screenshots / Demo</p>
          <h2 className="text-3xl font-semibold text-[#f6f0dd] sm:text-[34px]">See BlessOrder in Action</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {['Dashboard', 'Sales report', 'Inventory interface'].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-[#111525] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
              <p className="text-sm uppercase tracking-[0.2em] text-amber-200/80">{item}</p>
              <div className="mt-3 h-40 rounded-xl border border-dashed border-white/15 bg-white/5" />
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-white/10 bg-[#111525] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
          <p className="text-sm uppercase tracking-[0.2em] text-amber-200/80">Video placeholder (future demo)</p>
          <div className="mt-3 h-48 rounded-xl border border-dashed border-white/15 bg-white/5" />
        </div>
      </div>
    </section>
  );
};

export default ScreenshotSection;
