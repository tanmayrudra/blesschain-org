import React from 'react';

const JoinNow = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#0E0E12] py-16 sm:py-20"
      style={{
        background:
          'radial-gradient(circle at 50% 10%, rgba(255,205,120,0.15), rgba(10,12,20,0.9) 45%), radial-gradient(circle at 20% 20%, rgba(255,191,87,0.08), transparent 35%), radial-gradient(circle at 80% 20%, rgba(92,167,255,0.08), transparent 35%)',
      }}
    >
      <div className="mx-auto flex max-w-[900px] flex-col items-center gap-6 px-6 text-center text-white">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300/70">Global Call to Action</p>
          <h3 className="text-[32px] font-semibold leading-tight text-[#f6f0dd] sm:text-[38px]">
            Join the BlessChain Ecosystem Today
          </h3>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
          {[
            { label: 'Try BlessOrder', href: '/blessorder' },
            { label: 'Explore BlessAI System', href: '/blessai' },
            { label: 'Run a Validator', href: '/validators' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="inline-flex items-center justify-center rounded-full border border-[#c18c35] bg-[#0f1320] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#f6f0dd] shadow-[0_14px_30px_rgba(0,0,0,0.35)] transition duration-150 hover:border-amber-300 cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinNow;
