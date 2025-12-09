import React from 'react';

const highlights = [
  { title: 'Press release', copy: 'Latest announcements and media moments about BlessChain, BBTC, and ecosystem partners.' },
  { title: 'Development updates', copy: 'Engineering sprints, protocol improvements, and validator tooling progress.' },
  { title: 'Product launch announcements', copy: 'New features for builders, families, and validators as they go live.' },
];

const News = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#0E0E12] py-16 sm:py-20"
      style={{
        backgroundImage:
          'linear-gradient(180deg, rgba(8,11,18,0.85), rgba(8,11,18,0.95)), url(/Ss/AI_system.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="mx-auto flex max-w-[1100px] flex-col gap-8 px-6 text-white">
        <div className="space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300/70">News & Updates</p>
          <h3 className="text-[30px] font-semibold leading-tight text-[#f6f0dd] sm:text-[36px]">
            News & Updates
          </h3>
          <p className="text-[15px] leading-relaxed text-[#c9c5b6]">
            What’s shipping across protocol, product, and partnerships.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="h-full rounded-2xl border border-white/8 bg-white/5 p-5 text-left shadow-[0_14px_32px_rgba(0,0,0,0.35)] backdrop-blur-sm"
            >
              <p className="text-lg font-semibold text-[#f6f0dd]">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-[#e7e1d3]">{item.copy}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#c18c35] bg-[#0f1320] px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#f6f0dd] shadow-[0_10px_28px_rgba(0,0,0,0.32)] transition duration-150 hover:border-amber-300 cursor-pointer"
          >
            View All News
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;
