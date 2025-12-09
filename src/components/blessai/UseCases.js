import React from 'react';
import Link from 'next/link';

const cases = [
  { title: 'Retail', bullets: ['End-to-end shop management', 'AI pricing & forecasting'] },
  { title: 'Restaurants', bullets: ['Menu AI', 'Multi-branch automation'] },
  { title: 'Delivery & Logistics', bullets: ['Route optimization', 'Driver assignment'] },
  { title: 'Warehouses', bullets: ['Stock tracking', 'Order batching'] },
  { title: 'Hotels', bullets: ['Booking → ordering → shipping integration'] },
];

const UseCases = () => {
  return (
    <section className="bg-[#0B0E19] py-14">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 text-white">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300/70">Industry Use Cases</p>
          <h2 className="text-3xl font-semibold text-[#f6f0dd] sm:text-[34px]">Where BlessAI System Delivers</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-[#111525] p-4 shadow-[0_14px_32px_rgba(0,0,0,0.35)] space-y-2">
              <p className="text-lg font-semibold text-[#f6f0dd]">{item.title}</p>
              <ul className="space-y-1 text-sm text-[#d9d4c6]">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" aria-hidden />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div>
          <Link
            href="/use"
            className="inline-flex items-center justify-center rounded-full border border-[#c18c35] bg-[#0f1320] px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-[#f6f0dd] shadow-[0_12px_28px_rgba(0,0,0,0.32)] transition duration-150 hover:border-amber-300"
          >
            Explore Use Cases
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
