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

      <div className="mx-auto flex max-w-[83%] gap-5 px-6 text-white lg:flex-row lg:items-start">
        <div className="relative z-10 w-1/2 flex flex-1 flex-col gap-6">
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
            className="inline-flex w-fit items-center justify-center rounded-[14px] border border-[#c18c35] bg-[#0f1320] px-7 py-3 text-lg font-semibold text-[#f6f0dd] shadow-[0_10px_28px_rgba(0,0,0,0.32)] transition duration-150 hover:border-amber-300 cursor-pointer"
          >
            Get Started
          </button>

          <div className="grid rounded-[18px] max-w-[95%] border border-[#1f2536] bg-[#0f1320] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.35)] md:grid-cols-2 md:divide-x md:divide-[#1f2536]">
            <FeatureCard
              icon={<InventoryIcon />}
              title="Real Time Inventory sync"
              copy="Predicts menu highlights + cuts, and recommends pricing adjustments."
            />
            <FeatureCard
              icon={<SalesIcon />}
              title="AI Sales insights"
              copy="Predicts trends, highlights drivers, and recommends pricing adjustments."
            />
          </div>
        </div>

        <div className="relative z-10 flex w-1/2 max-w-2xl justify-center lg:justify-end">
          <div className="relative w-full max-w-full">
            <DashboardCard activeTab={activeTab} onTabChange={setActiveTab} />
            <div className="absolute top-[100%] left-[-14%] hidden w-[118%] max-w-none lg:block">
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

const FeatureCard = ({ title, copy, icon }) => (
  <div className="flex flex-col items-center gap-4 px-4 py-2 text-center text-[#c9c5b6]">
    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-300/70 bg-[#0f1320] text-amber-200 shadow-[0_8px_20px_rgba(0,0,0,0.3)]">
      {icon}
    </div>
    <div>
      <p className="mb-2 text-[19px] font-semibold leading-tight text-[#f6f0dd]">{title}</p>
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
      <div className="flex-1 text-[#f6f0dd]">
        <div className="mb-3 text-[18px] font-semibold text-[#f4f0e2]">Overview</div>

        <div className="mb-4 rounded-xl border border-[#1f2736] bg-[#131c2b] px-4 py-3 shadow-[0_8px_20px_rgba(0,0,0,0.25)]">
          <div className="mb-3 text-[12px] font-medium text-[#8f9bad]">Seelog Bovarantaje</div>
          <div className="h-28 rounded-lg bg-[#101827]/60 px-2 py-2">
            <svg viewBox="0 0 320 120" className="h-full w-full">
              <defs>
                <linearGradient id="lineGlow" x1="0" x2="0" y1="0" y2="1">
                  <stop stopColor="#f6c452" offset="0%" stopOpacity="0.9" />
                  <stop stopColor="#d4953f" offset="100%" stopOpacity="0.7" />
                </linearGradient>
              </defs>
              <path
                d="M10 88 L60 78 L90 90 L130 70 L170 82 L200 68 L240 100 L280 82 L310 62"
                fill="none"
                stroke="url(#lineGlow)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="mb-4 grid grid-cols-3 gap-3 text-sm">
          <Stat title="$25,340" label="Bulde Staclexi" />
          <Stat title="134" label="Ordary" />
          <Stat title="99" label="Cuatomers" />
        </div>

        <div className="rounded-xl border border-[#1f2736] bg-[#131c2b] px-3 py-3 shadow-[0_8px_20px_rgba(0,0,0,0.25)]">
          <div className="mb-2 flex items-center justify-between text-[13px] font-medium text-[#f4f0e2]">
            <span>Recent Orders</span>
            <span className="text-[#8f9bad]">Statics</span>
          </div>
          <div className="overflow-hidden rounded-lg border border-[#1f2736] bg-[#101827]">
            <div className="flex items-center justify-between border-b border-[#1f2736] px-3 py-2 text-[11px] uppercase tracking-[0.04em] text-[#8f9bad]">
              <span>Order numbers</span>
              <span>Customer</span>
              <span>Status</span>
            </div>
            {[
              { id: 'BL-207', customer: 'Shipyard', status: 'Shipped' },
              { id: 'BL-209', customer: 'Office Desk', status: 'Shipped' },
              { id: 'BL-210', customer: 'Jone Aola', status: 'Probling' },
            ].map((item, idx) => (
              <div
                key={item.id}
                className={`flex items-center justify-between px-3 py-3 text-[13px] ${idx < 2 ? 'border-b border-[#1f2736]' : ''}`}
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
  <div className="rounded-lg border border-[#1f2736] bg-[#131c2b] px-3 py-4 text-center shadow-[0_6px_16px_rgba(0,0,0,0.25)]">
    <p className="text-[18px] font-semibold text-[#f6f0dd]">{title}</p>
    <p className="text-[12px] text-[#8f9bad]">{label}</p>
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

const InventoryIcon = () => (
  <svg viewBox="0 0 40 40" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2.4">
    <rect x="6" y="8" width="12" height="10" rx="2" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="22" y="14" width="12" height="10" rx="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 24v4a2 2 0 0 0 2 2h7" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="26" cy="9" r="2" fill="currentColor" stroke="none" />
  </svg>
);

const SalesIcon = () => (
  <svg viewBox="0 0 40 40" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2.4">
    <path d="M8 28V12" strokeLinecap="round" />
    <path d="M16 28V18" strokeLinecap="round" />
    <path d="M24 28V15" strokeLinecap="round" />
    <path d="M32 28V10" strokeLinecap="round" />
    <path d="M8 24l8-6 8 3 8-9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default BlessOrder;
