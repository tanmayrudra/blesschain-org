import React from 'react';

const plans = [
  {
    name: 'Bless Order',
    subtitle: 'Order management suite',
    cadence: '/mo',
    features: ['1 Project', '100MB Storage', 'Email Support'],
  },
  {
    name: 'Bless Shipping',
    subtitle: 'Shipping and delivery automation',
    cadence: '/mo',
    features: ['10 Projects', '10GB Storage', 'Priority Support'],
  },
  {
    name: 'Bless Menu',
    subtitle: 'Menus and POS for restaurants',
    cadence: '/mo',
    features: ['Unlimited Projects', '100GB Storage', '24/7 Support'],
  },
  {
    name: 'Bless ERP',
    subtitle: 'Operations and inventory control',
    cadence: '/mo',
    features: ['Unlimited Projects', '100GB Storage', '24/7 Support'],
  },
];

const CheckIcon = () => (
  <svg
    aria-hidden="true"
    className="h-5 w-5 flex-shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="12" fill="#2EB872" />
    <path
      d="M8 12.5l2.2 2.2L16.5 8.5"
      stroke="#0D0F1A"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TopModule = () => {
  return (
    <section
      className="w-full"
      style={{
        background:
          'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.02), transparent 35%), radial-gradient(circle at 70% 80%, rgba(255,255,255,0.02), transparent 30%), #0B0E19',
      }}
    >
      <div className="mx-auto flex max-w-[83%] flex-col items-center px-4 py-12 sm:py-16 md:py-20">
        <div className="mb-10 text-center text-white">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">BlessAI System — The Intelligent Business Suite</h2>
          <p className="mt-3 text-lg text-white/70">Purpose-built products to cover your core operations.</p>
        </div>
        <div className="grid w-full max-w-[83%] grid-cols-1 gap-6 md:grid-cols-4 md:gap-7">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#1C2332] bg-gradient-to-b from-[#111828] to-[#0E1323] px-8 py-8 shadow-[0_12px_35px_rgba(0,0,0,0.35)]"
            >
              <div className="text-center text-white">
                <h3 className="mb-6 text-[21px] font-semibold tracking-tight">
                  {plan.name}
                </h3>
                <p className="mb-6 text-[15px] font-medium text-white/70">{plan.subtitle}</p>
              </div>

              <ul className="mb-8 space-y-4 text-[17px] font-medium text-white/90">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <button
                  type="button"
                  className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 px-5 py-3 text-[16px] font-semibold text-white shadow-lg shadow-amber-500/15 transition-all duration-200 hover:scale-[1.02]"
                >
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopModule;
