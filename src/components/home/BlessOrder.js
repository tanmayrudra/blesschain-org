import React, { useState } from 'react';

const BlessOrder = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');

  return (
    <section
      className="relative w-full overflow-hidden bg-[#0B0E19] py-16 sm:py-20"
      style={{
        background:
          'radial-gradient(ellipse at 60% 10%, rgba(224,181,88,0.08), transparent 45%), radial-gradient(ellipse at 20% 30%, rgba(255,255,255,0.03), transparent 40%), #0B0E19',
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-1/2 top-2 h-64 w-px -translate-x-1/2 bg-gradient-to-b from-amber-400/80 via-amber-300/30 to-transparent" />
      </div>

      <div className="mx-auto flex max-w-[83%] flex-col gap-10 px-6 text-white lg:flex-row lg:items-start">
        <div className="relative z-10 flex flex-1 flex-col gap-6">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-amber-300/80">BlessOrder</p>
            <h3 className="mb-3 text-[34px] font-semibold leading-[1.15] text-[#f6f0dd] sm:text-[42px] md:text-[48px]">
              BlessOrder — AI ERP & Sales Management
            </h3>
            <p className="max-w-xl text-lg leading-relaxed text-[#c9c5b6]">
              BlessOrder transforms sales, inventory, billing, and operational workflows with an intelligent AI-powered
              engine.
            </p>
          </div>
          <button
            type="button"
            className="inline-flex w-fit items-center justify-center rounded-full border border-amber-300/70 bg-[#0f1320] px-6 py-3 text-base font-semibold text-[#f6f0dd] shadow-[0_8px_25px_rgba(0,0,0,0.35)] transition duration-200 hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-amber-400/10 cursor-pointer"
          >
            Get Started
          </button>

          <div className="grid gap-4 rounded-2xl border border-amber-300/30 bg-[#0f1320]/60 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.35)] backdrop-blur md:grid-cols-2">
            <div className="space-y-3 border-b border-amber-300/20 pb-4 md:border-b-0 md:border-r md:pb-0 md:pr-6">
              <h4 className="text-xl font-semibold text-[#f6f0dd]">A Smarter Way to Run Your Business</h4>
              <p className="text-sm leading-relaxed text-[#c9c5b6]">
                BlessOrder is a next-generation AI ERP system designed to unify inventory, sales, invoicing, and
                operations with intelligent automation.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <FeatureCard
                title="Real Time Inventory Sync"
                copy="Predictive insights highlight low stock and recommend pricing adjustments."
              />
              <FeatureCard
                title="AI Sales Insights"
                copy="AI surfaces trends and revenue opportunities with proactive recommendations."
              />
            </div>
          </div>
        </div>

        <div className="relative z-10 flex w-full max-w-xl flex-1 justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            <DashboardCard activeTab={activeTab} onTabChange={setActiveTab} />
            <div className="absolute -bottom-16 left-[-14%] hidden w-[118%] max-w-none lg:block">
              <InventoryCard />
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-24 flex justify-center lg:hidden">
        <InventoryCard />
      </div>
    </section>
  );
};

const FeatureCard = ({ title, copy }) => (
  <div className="flex items-start gap-3 rounded-xl border border-amber-300/30 bg-[#111827]/60 p-4 shadow-[0_10px_28px_rgba(0,0,0,0.3)]">
    <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl border border-amber-300/40 bg-[#0f1320] text-amber-200">
      <span className="text-lg">✦</span>
    </div>
    <div>
      <p className="font-semibold text-[#f6f0dd]">{title}</p>
      <p className="text-sm leading-relaxed text-[#c9c5b6]">{copy}</p>
    </div>
  </div>
);

const DashboardCard = ({ activeTab, onTabChange }) => {
  const tabs = ['Dashboard', 'Orders', 'Inventory'];

  const renderContent = () => {
    if (activeTab === 'Orders') {
      return (
        <div className="flex-1">
          <div className="mb-4 flex items-center justify-between text-sm text-[#8f9bad]">
            <span>Orders</span>
            <span className="text-amber-200">Live</span>
          </div>
          <div className="mb-4 grid grid-cols-3 gap-3 text-sm">
            <Stat title="314" label="Open Orders" />
            <Stat title="27" label="Pending Approval" />
            <Stat title="196" label="Shipped" />
          </div>
          <div className="rounded-xl border border-amber-300/15 bg-[#131a2a]">
            <div className="flex items-center justify-between border-b border-amber-300/10 px-3 py-2 text-xs text-[#8f9bad]">
              <span>Order</span>
              <span>Customer</span>
              <span>Status</span>
            </div>
            {[
              { id: 'BL-221', customer: 'Greyline', status: 'Preparing' },
              { id: 'BL-222', customer: 'Office Desk', status: 'Shipped' },
              { id: 'BL-223', customer: 'Jone Aola', status: 'Probing' },
            ].map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b border-amber-300/10 px-3 py-3 text-sm last:border-none"
              >
                <span className="text-[#f6f0dd]">{item.id}</span>
                <span className="text-[#c9c5b6]">{item.customer}</span>
                <span className="text-amber-200">{item.status}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (activeTab === 'Inventory') {
      return (
        <div className="grid flex-1 gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-amber-300/15 bg-[#131a2a] p-4">
            <div className="mb-3 flex items-center justify-between text-xs text-[#8f9bad]">
              <span>Inventory</span>
              <span className="text-amber-200">Live</span>
            </div>
            <div className="space-y-3 text-sm text-[#c9c5b6]">
              {[
                { name: 'Ligation', count: '62 ks' },
                { name: 'Office Desk', count: '10 ks' },
                { name: 'Office Disk', count: '235 ks' },
              ].map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <span>{item.name}</span>
                  <span className="text-amber-200">{item.count}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-amber-300/15 bg-[#131a2a] p-4">
            <div className="mb-3 text-xs text-[#8f9bad]">Workflow Automation</div>
            <div className="space-y-3 text-sm text-[#c9c5b6]">
              {[
                { name: 'Orders', progress: 82 },
                { name: 'Operations', progress: 64 },
                { name: 'Support', progress: 48 },
              ].map((item) => (
                <div key={item.name}>
                  <div className="mb-1 flex items-center justify-between">
                    <span>{item.name}</span>
                    <span className="text-amber-200">{item.progress}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-[#0f1320]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-amber-600 via-amber-400 to-amber-200"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="flex-1">
        <div className="mb-4 flex items-center justify-between text-sm text-[#8f9bad]">
          <span>Overview</span>
          <span className="text-amber-200">Live</span>
        </div>
        <div className="mb-5 rounded-xl border border-amber-300/20 bg-[#131a2a] p-3">
          <svg viewBox="0 0 320 120" className="h-28 w-full">
            <defs>
              <linearGradient id="lineGlow" x1="0" x2="0" y1="0" y2="1">
                <stop stopColor="#f6c452" offset="0%" stopOpacity="0.9" />
                <stop stopColor="#d4953f" offset="100%" stopOpacity="0.65" />
              </linearGradient>
            </defs>
            <path
              d="M10 90 L60 78 L90 92 L130 70 L170 82 L200 68 L240 100 L280 80 L310 60"
              fill="none"
              stroke="url(#lineGlow)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="mb-5 grid grid-cols-3 gap-3 text-sm">
          <Stat title="$25,340" label="Billing Selected" />
          <Stat title="134" label="Orders" />
          <Stat title="99" label="Customers" />
        </div>
        <div>
          <p className="mb-3 text-sm text-[#8f9bad]">Recent Orders</p>
          <div className="overflow-hidden rounded-xl border border-amber-300/15 bg-[#131a2a]">
            <div className="flex items-center justify-between border-b border-amber-300/10 px-3 py-2 text-xs text-[#8f9bad]">
              <span>Order</span>
              <span>Customer</span>
              <span>Status</span>
            </div>
            {[
              { id: 'BL-207', customer: 'Shipyard', status: 'Shipped' },
              { id: 'BL-209', customer: 'Office Desk', status: 'Shipped' },
              { id: 'BL-210', customer: 'Jone Aola', status: 'Probing' },
            ].map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b border-amber-300/10 px-3 py-3 text-sm last:border-none"
              >
                <span className="text-[#f6f0dd]">{item.id}</span>
                <span className="text-[#c9c5b6]">{item.customer}</span>
                <span className="text-amber-200">{item.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative overflow-hidden rounded-[18px] border border-[#c18c35] bg-[#0f1320] p-6 shadow-[0_18px_48px_rgba(0,0,0,0.45)]">
      <div className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-transparent via-amber-400 to-transparent" />
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="text-lg font-semibold text-amber-200">BlessOrder</span>
          <div className="flex items-center gap-5 text-sm text-[#8f9bad]">
            {tabs.map((tab) => {
              const isActive = tab === activeTab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => onTabChange(tab)}
                  className={`pb-1 text-sm transition ${isActive ? 'text-[#f6f0dd]' : 'text-[#9aa7ba]'} cursor-pointer`}
                >
                  <span className="relative">
                    {tab}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-amber-300" aria-hidden="true" />
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-amber-300/50 text-[10px] text-amber-200/70">
          ○
        </span>
      </div>
      <div className="flex gap-6">
        <div className="w-[116px] rounded-[14px] border border-amber-300/15 bg-[#0d1222] p-3 text-sm text-[#9aa7ba] shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
          {tabs.map((tab) => {
            const isActive = tab === activeTab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => onTabChange(tab)}
                className={`relative flex w-full items-center rounded-lg px-2 py-2 text-left transition hover:text-amber-200 cursor-pointer ${
                  isActive ? 'text-amber-200' : 'text-[#9aa7ba]'
                }`}
              >
                {isActive && (
                  <span className="absolute -left-3 h-8 w-[3px] rounded-full bg-amber-300" aria-hidden="true" />
                )}
                {tab}
              </button>
            );
          })}
        </div>
        <div className="flex-1 rounded-[16px] border border-[#1b2233] bg-[#10172a] p-4 shadow-[0_12px_32px_rgba(0,0,0,0.35)]">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

const Stat = ({ title, label }) => (
  <div className="rounded-xl border border-amber-300/20 bg-[#131a2a] px-3 py-4 text-center">
    <p className="text-lg font-semibold text-[#f6f0dd]">{title}</p>
    <p className="text-xs text-[#8f9bad]">{label}</p>
  </div>
);

const InventoryCard = () => (
  <div className="rounded-2xl border border-amber-300/30 bg-[#0f1320] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.45)]">
    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-xl border border-amber-300/20 bg-[#131a2a] p-4">
        <div className="mb-3 flex items-center justify-between text-xs text-[#8f9bad]">
          <span>Inventory</span>
          <span>Live</span>
        </div>
        <div className="space-y-3 text-sm text-[#c9c5b6]">
          {[
            { name: 'Ligation', count: '62 ks' },
            { name: 'Office Desk', count: '10 ks' },
            { name: 'Office Disk', count: '235 ks' },
          ].map((item) => (
            <div key={item.name} className="flex items-center justify-between">
              <span>{item.name}</span>
              <span className="text-amber-200">{item.count}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-amber-300/20 bg-[#131a2a] p-4">
        <div className="mb-3 text-xs text-[#8f9bad]">Workflow Automation</div>
        <div className="space-y-3 text-sm text-[#c9c5b6]">
          {[
            { name: 'Orders', progress: 82 },
            { name: 'Operations', progress: 64 },
            { name: 'Support', progress: 48 },
          ].map((item) => (
            <div key={item.name}>
              <div className="mb-1 flex items-center justify-between">
                <span>{item.name}</span>
                <span className="text-amber-200">{item.progress}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-[#0f1320]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-amber-600 via-amber-400 to-amber-200"
                  style={{ width: `${item.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default BlessOrder;
