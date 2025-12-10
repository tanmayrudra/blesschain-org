import React from 'react';

const WorkflowDiagram = () => {
  return (
    <section className="bg-[#0E0E12] py-14">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 text-white">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300/70">How BlessOrder Works</p>
          <h2 className="text-3xl font-semibold text-[#f6f0dd] sm:text-[34px]">From Order to Delivery — Fully Automated</h2>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111525] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
          <pre className="whitespace-pre-wrap font-mono text-sm text-[#e7e1d3]">
{`Customer Order
     ↓
BlessOrder Reads & Processes
     ↓
AI Syncs Inventory
     ↓
Billing / Invoice Generated
     ↓
Shipping Task Created (via BlessShipping)
     ↓
Updates Dashboard & Analytics`}
          </pre>
          <p className="mt-3 text-sm text-[#c9c5b6]">
            With AI automation, BlessOrder manages the entire lifecycle—from order intake to shipping—without requiring constant manual oversight.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkflowDiagram;
