import React from 'react';

const features = [
  { title: 'Real-Time Inventory Sync', copy: 'Automatically links product sales, stock levels, and supplier orders.' },
  { title: 'AI Sales Insights', copy: 'Predicts trends, highlights risks, and recommends pricing adjustments.' },
  { title: 'Smart Billing & Invoicing', copy: 'Generates invoices automatically with tax rules and custom templates.' },
  { title: 'Workflow Automation', copy: 'Automates approvals, stock transfers, messages, and reporting.' },
  { title: 'Multi-Store Management', copy: 'Connects all branches into one unified dashboard.' },
  { title: 'Customer & Order Tracking', copy: 'Tracks customer behavior, order history, and communication.' },
];

const FeatureGrid = () => {
  return (
    <section className="bg-[#0B0E19] py-14">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 text-white">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300/70">Key Features</p>
          <h2 className="text-3xl font-semibold text-[#f6f0dd] sm:text-[34px]">AI-Driven Capabilities</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-[#111525] p-4 shadow-[0_14px_32px_rgba(0,0,0,0.35)]">
              <p className="text-lg font-semibold text-[#f6f0dd]">{item.title}</p>
              <p className="mt-2 text-sm text-[#d9d4c6]">{item.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
