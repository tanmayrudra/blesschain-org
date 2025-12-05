import React from 'react';

const sections = [
  { title: 'BBTC Tokenomics', copy: 'Fixed supply with on-chain utility for fees, staking, and ecosystem rewards.' },
  { title: 'Dynamic Block Production', copy: 'Adaptive throughput to balance performance, finality, and energy efficiency.' },
  { title: 'Sabbath Mode', copy: 'Scheduled slowdowns for upgrades, audits, and community governance windows.' },
  { title: 'Family Nodes', copy: 'Geographically distributed validators to secure consensus and resilience.' },
];

const BlockchainLayer = () => {
  return (
    <section
      className="w-full bg-[#0B0E19] py-14"
      style={{
        background:
          'radial-gradient(ellipse at 60% 10%, rgba(224,181,88,0.06), transparent 45%), radial-gradient(ellipse at 15% 30%, rgba(255,255,255,0.02), transparent 40%), #0B0E19',
      }}
    >
      <div className="mx-auto flex max-w-[85%] flex-col gap-6 px-6 text-white">
        <div className="rounded-2xl border border-amber-300/25 bg-[#0f1320]/80 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.35)] backdrop-blur-md md:p-8">
          <div className="grid gap-8 md:grid-cols-[1.1fr_1fr] md:items-center">
            <div className="space-y-4 text-left">
              <p className="text-sm uppercase tracking-[0.24em] text-amber-300/80">Purpose</p>
              <h3 className="text-[30px] font-semibold leading-tight text-[#f6f0dd] sm:text-[36px]">
                Blockchain Layer: Powered by BlessChain & BBTC
              </h3>
              <p className="text-[15px] leading-relaxed text-[#c9c5b6]">
                解释 BlessAI 运行在 BlessChain 上，同时介绍 BBTC 经济模型。
              </p>
              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:gap-4">
                <button
                  type="button"
                  className="inline-flex w-fit items-center justify-center rounded-[14px] border border-[#c18c35] bg-[#0f1320] px-7 py-3 text-lg font-semibold text-[#f6f0dd] shadow-[0_10px_28px_rgba(0,0,0,0.32)] transition duration-150 hover:border-amber-300 cursor-pointer"
                >
                  Learn About BBTC
                </button>
                <button
                  type="button"
                  className="inline-flex w-fit items-center justify-center rounded-[14px] border border-[#c18c35] bg-[#0f1320] px-7 py-3 text-lg font-semibold text-[#f6f0dd] shadow-[0_10px_28px_rgba(0,0,0,0.32)] transition duration-150 hover:border-amber-300 cursor-pointer"
                >
                  Visit BlessChain.org
                </button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {sections.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[14px] border border-amber-300/25 bg-[#0f1320] p-4 text-left shadow-[0_10px_28px_rgba(0,0,0,0.3)]"
                >
                  <p className="text-[17px] font-semibold text-[#f6f0dd]">{item.title}</p>
                  <p className="mt-2 text-sm text-[#c9c5b6]">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockchainLayer;
