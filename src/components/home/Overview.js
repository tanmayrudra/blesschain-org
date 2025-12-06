import React from 'react';

const apps = [
  { name: 'BlessOrder', status: 'Live' },
  { name: 'BlessShipping', status: 'Live' },
  { name: 'BlessMenu', status: 'Live' },
  { name: 'BlessERP', status: 'Live' },
  { name: 'BlessCRM', status: 'Future' },
  { name: 'BlessImage', status: 'Live' },
  { name: 'BlessVideo', status: 'Live' },
  { name: 'BlessAIVideo', status: 'Live' },
  { name: 'BlessBooking', status: 'Live' },
  { name: 'BlessFreelance', status: 'Live' },
];

const statusStyles = {
  Live: { border: 'border-amber-300/40', text: 'text-amber-200' },
  Future: { border: 'border-sky-300/40', text: 'text-sky-200' },
};

const Verview = () => {
  return (
    <section
      className="w-full bg-[#0B0E19] py-14"
      style={{
        background:
          'radial-gradient(ellipse at 70% 10%, rgba(224,181,88,0.06), transparent 42%), radial-gradient(ellipse at 20% 20%, rgba(255,255,255,0.02), transparent 38%), #0B0E19',
      }}
    >
      <div className="mx-auto flex max-w-[85%] flex-col gap-8 px-6 text-white">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.24em] text-amber-300/80">Bless Suite</p>
          <h3 className="mt-2 text-[30px] font-semibold leading-tight text-[#f6f0dd] sm:text-[36px]">
            Product Overview
          </h3>
          <p className="mt-2 text-[15px] leading-relaxed text-[#c9c5b6]">
            Explore the Bless modules powering sales, operations, and AI-driven workflows.
          </p>
        </div>

        <div className="">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {apps.map((app) => (
              <div
                key={app.name}
                className="relative flex h-full w-full items-center gap-3 rounded-[14px] border border-amber-300/25 bg-[#111827]/80 p-4 text-left shadow-[0_10px_28px_rgba(0,0,0,0.3)] transition hover:-translate-y-1 hover:border-amber-300/60 hover:shadow-amber-400/10 cursor-pointer"
              >
                {(() => {
                  const theme = statusStyles[app.status] || statusStyles.Live;
                  const blinkClass = app.status === 'Live' ? 'animate-pulse' : '';
                  return (
                    <div
                      className={`absolute right-3 top-3 inline-flex w-fit items-center rounded-full border px-3 py-1 text-[12px] font-medium ${theme.border} ${theme.text} ${blinkClass}`}
                    >
                      {app.status}
                    </div>
                  );
                })()}
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-amber-300/40 bg-[#0f1320] text-[15px] font-semibold text-amber-200">
                  {app.name.replace('Bless', '').slice(0, 2)}
                </div>
                <div className="space-y-1 text-left">
                  <p className="text-[17px] font-semibold text-[#f6f0dd] leading-tight">{app.name}</p>
                  <p className="text-sm text-[#c9c5b6] leading-snug">
                    {app.status === 'Future' ? 'Coming soon' : 'Available now'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <button
            type="button"
            className="inline-flex w-fit items-center justify-center rounded-[14px] border border-[#c18c35] bg-[#0f1320] px-7 py-3 text-lg font-semibold text-[#f6f0dd] shadow-[0_10px_28px_rgba(0,0,0,0.32)] transition duration-150 hover:border-amber-300 cursor-pointer"
          >
            View All Apps
          </button>
        </div>
      </div>
    </section>
  );
};

export default Verview;
