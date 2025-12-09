import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BlessAIHero = () => {
  return (
    <section
      className="relative overflow-hidden bg-[#0B0E19] py-16 sm:py-24"
      style={{
        background:
          'radial-gradient(circle at 20% 20%, rgba(255,191,87,0.12), transparent 35%), radial-gradient(circle at 80% 0%, rgba(92,167,255,0.14), transparent 32%), #0B0E19',
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_40%)] pointer-events-none" />
      <div className="relative mx-auto flex max-w-5xl flex-col gap-10 px-6 text-white lg:flex-row lg:items-center">
        <div className="flex-1 space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300/80">BlessAI System</p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl text-[#f6f0dd]">
            The Intelligent Business Suite
          </h1>
          <p className="text-lg text-[#d9d4c6]">
            BlessAI System unifies sales, operations, shipping, ERP, menu management, and business intelligence into one
            seamless AI-driven platform.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/blessorder"
              className="inline-flex items-center justify-center rounded-full border border-[#c18c35] bg-[#0f1320] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#f6f0dd] shadow-[0_12px_28px_rgba(0,0,0,0.32)] transition duration-150 hover:border-amber-300"
            >
              Explore BlessOrder
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#f6f0dd] transition duration-150 hover:border-amber-300"
            >
              Visit BlessChain.com
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/0 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#f6f0dd] transition duration-150 hover:border-amber-300"
            >
              Request Early Access
            </Link>
          </div>
        </div>
        <div className="relative flex-1 overflow-hidden rounded-3xl border border-white/10 bg-[#0f1320]/80 p-6 shadow-[0_24px_50px_rgba(0,0,0,0.4)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,191,87,0.12),transparent_40%)] pointer-events-none" />
          <div className="relative flex flex-col gap-4">
            <div className="flex items-center gap-2 rounded-full border border-amber-300/30 bg-[#0b0f1a] px-4 py-2 text-sm text-[#f6f0dd] w-fit">
              <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden />
              AI Business Engine
            </div>
            <Image
              src="/aisystem.webp"
              alt="BlessAI Lightbeam"
              width={640}
              height={360}
              className="w-full rounded-2xl border border-white/10 object-cover"
            />
            <div className="grid grid-cols-3 gap-2 text-xs text-[#e7e1d3]">
              {['Order', 'Shipping', 'ERP', 'Menu', 'CRM', 'AI'].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2 py-2">
                  <span className="h-2 w-2 rounded-full bg-amber-300" aria-hidden />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlessAIHero;
