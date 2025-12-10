import React from 'react';
import Button from '@/components/common/Button';

const BlessOrderCTA = () => {
  return (
    <section
      className="relative overflow-hidden bg-[#0B0E19] py-16"
      style={{
        background:
          'radial-gradient(circle at 50% 0%, rgba(255,191,87,0.12), rgba(11,14,25,0.95) 45%), radial-gradient(circle at 20% 20%, rgba(92,167,255,0.08), transparent 35%)',
      }}
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-6 text-center text-white">
        <p className="text-xs uppercase tracking-[0.3em] text-amber-300/80">Global CTA</p>
        <h2 className="text-3xl font-semibold text-[#f6f0dd] sm:text-[34px]">Start Using BlessOrder Today</h2>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
          <Button href="/blessorder">Get Started</Button>
          <Button href="/blessai" variant="secondary">
            Explore BlessAI System
          </Button>
          <Button href="/" variant="ghost">
            Join BlessChain Ecosystem
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlessOrderCTA;
