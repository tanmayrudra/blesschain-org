import React from 'react';
import Button from '@/components/common/Button';

const points = [
  'Immutable sales logs',
  'Timestamped invoice hashes',
  'Optional BBTC micro-fees for batch tasks',
  'Supply-chain transparency',
];

const BlockchainSection = () => {
  return (
    <section className="bg-[#0E0E12] py-14">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 text-white">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300/70">Optional Blockchain Layer</p>
          <h2 className="text-3xl font-semibold text-[#f6f0dd] sm:text-[34px]">Enhanced Transparency with BlessChain</h2>
          <p className="text-[15px] leading-relaxed text-[#c9c5b6]">
            BlessOrder can anchor invoices, sales transactions, or logs onto BlessChain for verification. Advanced users may also use BBTC for AI-processing credits or future decentralized workloads.
          </p>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          {points.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#111525] px-4 py-3 text-sm text-[#e7e1d3]"
            >
              <span className="h-2 w-2 rounded-full bg-amber-300" aria-hidden />
              {item}
            </div>
          ))}
        </div>
        <div>
          <Button href="/">Learn About BlessChain</Button>
        </div>
      </div>
    </section>
  );
};

export default BlockchainSection;
