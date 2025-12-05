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

const Verview = () => {
  return (
    <section
      className="w-full bg-[#0B0E19] py-14"
      style={{
        background:
          'radial-gradient(ellipse at 70% 10%, rgba(224,181,88,0.06), transparent 42%), radial-gradient(ellipse at 20% 20%, rgba(255,255,255,0.02), transparent 38%), #0B0E19',
      }}
    >
      <div className="mx-auto flex max-w-[85%] flex-col gap-6 px-6 text-white">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-amber-300/80">Bless Suite</p>
          <h3 className="mt-2 text-[30px] font-semibold leading-tight text-[#f6f0dd] sm:text-[36px]">
            Product Overview
          </h3>
          <p className="mt-2 text-[15px] leading-relaxed text-[#c9c5b6]">
            Explore the Bless modules powering sales, operations, and AI-driven workflows.
          </p>
        </div>

        <div className="grid gap-4 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {apps.map((app) => (
            <div
              key={app.name}
              className="flex h-full flex-col w-full justify-between rounded-[14px] border border-amber-300/25 bg-[#0f1320] p-4 shadow-[0_10px_28px_rgba(0,0,0,0.3)] transition hover:border-amber-300/50"
            >
              <div>
                <p className="text-[17px] font-semibold text-[#f6f0dd]">{app.name}</p>
                <p className="mt-2 text-sm text-[#c9c5b6]">
                  {app.status === 'Future' ? 'Coming soon' : 'Available now'}
                </p>
              </div>
              <div className="mt-4 inline-flex w-fit items-center rounded-full border border-amber-300/40 px-3 py-1 text-[12px] font-medium text-amber-200">
                {app.status}
              </div>
            </div>
          ))}
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
