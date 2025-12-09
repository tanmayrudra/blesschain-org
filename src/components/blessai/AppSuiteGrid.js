import React from 'react';
import Link from 'next/link';

const apps = [
  { name: 'BlessOrder', subtitle: 'AI ERP & Sales' },
  { name: 'BlessShipping', subtitle: 'Logistics Intelligence' },
  { name: 'BlessMenu', subtitle: 'Smart Menu & Retail Management' },
  { name: 'BlessERP', subtitle: 'Inventory & Accounting' },
  { name: 'BlessCRM (future)', subtitle: 'Customer Intelligence' },
  { name: 'BlessImage', subtitle: 'Image Hosting & AI Tagging' },
  { name: 'BlessVideo', subtitle: 'Video Hosting' },
  { name: 'BlessAIVideo', subtitle: 'AI Video Generation' },
  { name: 'BlessBooking', subtitle: 'Hotel & Room Operations' },
  { name: 'BlessFreelance', subtitle: 'Work Marketplace' },
  { name: 'BlessLearn', subtitle: 'Online Learning System' },
  { name: 'BlessSearch', subtitle: 'Engine for AI-based web search' },
];

const AppSuiteGrid = () => {
  return (
    <section className="bg-[#0E0E12] py-14">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 text-white">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300/70">Complete Application Suite</p>
          <h2 className="text-3xl font-semibold text-[#f6f0dd] sm:text-[34px]">Every App You Need — Connected by AI</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <div
              key={app.name}
              className="rounded-2xl border border-white/10 bg-[#111525] p-4 shadow-[0_14px_32px_rgba(0,0,0,0.35)]"
            >
              <p className="text-lg font-semibold text-[#f6f0dd]">{app.name}</p>
              <p className="text-sm text-[#d9d4c6]">{app.subtitle}</p>
            </div>
          ))}
        </div>
        <div>
          <Link
            href="/blessai"
            className="inline-flex items-center justify-center rounded-full border border-[#c18c35] bg-[#0f1320] px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-[#f6f0dd] shadow-[0_12px_28px_rgba(0,0,0,0.32)] transition duration-150 hover:border-amber-300"
          >
            Explore All Applications
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AppSuiteGrid;
