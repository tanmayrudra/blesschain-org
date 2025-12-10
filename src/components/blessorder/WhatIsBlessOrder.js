import React from 'react';

const WhatIsBlessOrder = () => {
  return (
    <section className="bg-[#0E0E12] py-14">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 text-white">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300/70">What Is BlessOrder?</p>
          <h2 className="text-3xl font-semibold text-[#f6f0dd] sm:text-[34px]">A Smarter Way to Run Your Business</h2>
          <p className="text-[15px] leading-relaxed text-[#c9c5b6]">
            BlessOrder is a next-generation AI ERP system designed to unify sales, inventory management, invoicing, and operational tasks into a
            single, intelligent platform. Built for both small and large businesses, it reduces manual work, increases accuracy, and provides real-time insights that help businesses grow faster.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm text-[#e7e1d3]">
          {['Retail', 'Restaurants', 'E-commerce', 'Delivery & logistics', 'Multi-location stores'].map((item) => (
            <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsBlessOrder;
