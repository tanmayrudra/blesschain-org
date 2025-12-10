import React from 'react';

const useCases = [
  { title: 'Retail', bullets: ['AI demand prediction', 'Product & variant sync'] },
  { title: 'Restaurants', bullets: ['Menu → Order → Kitchen → Delivery full automation'] },
  { title: 'Logistics', bullets: ['Auto-create shipping tasks', 'Route optimization'] },
  { title: 'E-Commerce', bullets: ['Multi-channel integration (future)'] },
];

const UseCaseSection = () => {
  return (
    <section className="bg-[#0E0E12] py-14">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 text-white">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300/70">Industry Use Cases</p>
          <h2 className="text-3xl font-semibold text-[#f6f0dd] sm:text-[34px]">Where BlessOrder Delivers</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {useCases.map((item) => (
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
      </div>
    </section>
  );
};

export default UseCaseSection;
