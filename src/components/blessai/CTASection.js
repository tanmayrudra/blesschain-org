import React from 'react';
import Button from '@/components/common/Button';

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
          <Button href="/blessorder">Get Started with BlessOrder</Button>
          <Button href="/blessai" variant="secondary">
            Explore BlessAI System
          </Button>
          <Button href="/validators" variant="ghost">
            Join the BlessChain Ecosystem
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
