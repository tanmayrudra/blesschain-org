import React from 'react';
import Link from 'next/link';

const CTASection = () => {
  return (
    <section
      className="relative overflow-hidden bg-[#0E0E12] py-16"
      style={{
        background:
          'radial-gradient(circle at 50% 0%, rgba(255,191,87,0.12), rgba(11,14,25,0.95) 45%), radial-gradient(circle at 15% 20%, rgba(92,167,255,0.1), transparent 35%)',
      }}
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-6 text-center text-white">
        <p className="text-xs uppercase tracking-[0.3em] text-amber-300/80">Global Call-to-Action</p>
        <h2 className="text-3xl font-semibold text-[#f6f0dd] sm:text-[34px]">
          Supercharge Your Business with AI + Blockchain
        </h2>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
          <Link
            href="/blessorder"
            className="inline-flex items-center justify-center rounded-full border border-[#c18c35] bg-[#0f1320] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#f6f0dd] shadow-[0_12px_28px_rgba(0,0,0,0.32)] transition duration-150 hover:border-amber-300"
          >
            Get Started with BlessOrder
          </Link>
          <Link
            href="/blessai"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#f6f0dd] transition duration-150 hover:border-amber-300"
          >
            Explore BlessAI System
          </Link>
          <Link
            href="/validators"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/0 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#f6f0dd] transition duration-150 hover:border-amber-300"
          >
            Join the BlessChain Ecosystem
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
