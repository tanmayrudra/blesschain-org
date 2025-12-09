import React from 'react';

const capabilities = [
  { title: 'AI Vision', copy: 'Reads images & menus.' },
  { title: 'AI NLP', copy: 'Processes orders, messages & data.' },
  { title: 'Prediction Engine', copy: 'Forecasts sales & demand.' },
  { title: 'Optimization Engine', copy: 'Improves routes, inventory & timing.' },
  { title: 'Task Automation', copy: 'Reduces manual workloads dramatically.' },
];

const AICapabilities = () => {
  return (
    <section className="bg-[#0B0E19] py-14">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 text-white">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300/70">AI Capabilities</p>
          <h2 className="text-3xl font-semibold text-[#f6f0dd] sm:text-[34px]">Powered by Advanced Artificial Intelligence</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="rounded-2xl border border-white/10 bg-[#111525] p-4 shadow-[0_14px_32px_rgba(0,0,0,0.35)]"
            >
              <p className="text-lg font-semibold text-[#f6f0dd]">{cap.title}</p>
              <p className="mt-2 text-sm text-[#d9d4c6]">{cap.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AICapabilities;
