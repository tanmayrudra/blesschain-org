import React from 'react';
import Image from 'next/image';
import Button from '@/components/common/Button';

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-[#0E0E12] text-white">
      <div className="container mx-auto px-4 py-16 space-y-10">
        <header className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-300/70">About Us</p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-[#f6f0dd]">
              AI & Blockchain for Real-World Business
            </h1>
            <p className="text-gray-300">
              BlessChain unifies AI intelligence with blockchain transparency to power everyday business operations.
            </p>
          </div>
          <div className="relative h-64 overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f1a] shadow-[0_24px_50px_rgba(0,0,0,0.4)]">
            <Image
              src="/aisystem.webp"
              alt="BlessAI System"
              fill
              className="object-cover opacity-90"
              sizes="(min-width: 1024px) 500px, 100vw"
            />
          </div>
        </header>

        <section className="space-y-12">
          <div className="rounded-2xl border border-amber-300/25 bg-[#111525] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.35)] space-y-4 relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,191,87,0.08),transparent_35%)]" />
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-300/40 bg-[#0b0f1a] text-lg font-semibold text-amber-200">
                01
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-amber-200/80">Mission</p>
                <h2 className="text-2xl font-semibold text-[#f6f0dd]">Our Mission</h2>
              </div>
            </div>
            <p className="text-gray-300">
              BlessChain’s mission is simple: To build a sustainable, intelligent, and transparent digital infrastructure
              for real-world business operations. We believe the future of business will be shaped by two forces:
              Artificial Intelligence and Blockchain Transparency. BlessChain brings these two technologies together into
              one unified ecosystem.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl border border-amber-300/25 bg-[#111525] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.35)] space-y-4">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,191,87,0.08),transparent_35%)]" />
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-300/40 bg-[#0b0f1a] text-lg font-semibold text-amber-200">
                  02
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-amber-200/80">Overview</p>
                  <h2 className="text-2xl font-semibold text-[#f6f0dd]">What is BlessChain?</h2>
                </div>
              </div>
              <p className="text-gray-300">
                BlessChain is a next-generation blockchain designed for energy efficiency, home-friendly validator nodes,
                sustainable dynamic block production, and real-world AI application support. It provides the underlying
                foundation for the BlessAI System, a complete suite of AI-powered business applications. BlessChain is
                built around real utility — logistics, ERP, automation, and business operations — not speculation.
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {['Energy efficiency', 'Home-friendly validator nodes', 'Sustainable dynamic block production', 'Real-world AI application support'].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-[#e7e1d3]"
                  >
                    <span className="h-2 w-2 rounded-full bg-amber-300" aria-hidden />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-amber-300/25 bg-[#111525] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.35)] space-y-4">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(92,167,255,0.08),transparent_35%)]" />
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-300/40 bg-[#0b0f1a] text-lg font-semibold text-amber-200">
                  03
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-amber-200/80">Application Layer</p>
                  <h2 className="text-2xl font-semibold text-[#f6f0dd]">What is BlessAI System?</h2>
                </div>
              </div>
              <p className="text-gray-300">
                BlessAI System is the application layer built on top of BlessChain. It integrates AI into everyday
                business operations, offering an all-in-one intelligent suite:
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {[
                  'BlessOrder — AI ERP & Sales',
                  'BlessShipping — Logistics Automation',
                  'BlessMenu — Smart Menu & Retail AI',
                  'BlessERP — Inventory & Accounting',
                  'BlessCRM — AI Customer Intelligence',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-[#e7e1d3]"
                  >
                    <span className="h-2 w-2 rounded-full bg-amber-300" aria-hidden />
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-gray-300">
                Together, these apps form a connected ecosystem that automates workflows, enhances decision-making, and
                anchors business-critical data on BlessChain when needed.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-amber-300/25 bg-[#111525] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.35)] space-y-5">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_0%,rgba(92,167,255,0.08),transparent_32%)]" />
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-300/40 bg-[#0b0f1a] text-lg font-semibold text-amber-200">
                04
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-amber-200/80">Philosophy</p>
                <h2 className="text-2xl font-semibold text-[#f6f0dd]">The Philosophy Behind BlessChain</h2>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-2">
                <h3 className="text-lg font-semibold text-[#f6f0dd]">1) Energy Conscious Design</h3>
                <p className="text-gray-300">BlessChain introduces an innovative concept:</p>
                <div className="space-y-1 text-gray-300">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="h-2 w-2 rounded-full bg-amber-300" aria-hidden />
                    Dynamic Block Production
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="h-2 w-2 rounded-full bg-amber-300" aria-hidden />
                    Sabbath Mode (a weekly 24-hour block-pause window for sustainability)
                  </div>
                </div>
                <p className="text-gray-300 text-sm">
                  This makes BlessChain one of the most energy-aware blockchains in the industry.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-2">
                <h3 className="text-lg font-semibold text-[#f6f0dd]">2) Built for Real Business, Not Fantasy</h3>
                <p className="text-gray-300">
                  BlessChain’s core principle: “Technology should solve real problems.” Every part of the ecosystem is
                  tied to real-world use cases:
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                  {['Goods delivery', 'Sales automation', 'Menu systems', 'ERP', 'Accounting', 'Online services'].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-amber-300" aria-hidden />
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-gray-300 text-sm">
                  This creates long-term stability and real demand for BBTC (Bless Bitcoin).
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-2">
                <h3 className="text-lg font-semibold text-[#f6f0dd]">3) Human-Friendly Infrastructure</h3>
                <p className="text-gray-300">BlessChain validators are designed to be:</p>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                  {['Home-friendly', 'Low-power', 'Easy to set up', 'Able to reuse heat (hotel + agricultural use cases)'].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-amber-300" aria-hidden />
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-gray-300 text-sm">
                  This opens blockchain participation to more people and organizations.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl border border-amber-300/25 bg-[#111525] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.35)] space-y-3">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,191,87,0.08),transparent_35%)]" />
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-300/40 bg-[#0b0f1a] text-lg font-semibold text-amber-200">
                  05
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-amber-200/80">Token</p>
                  <h2 className="text-2xl font-semibold text-[#f6f0dd]">BBTC — The Heart of the Ecosystem</h2>
                </div>
              </div>
              <p className="text-gray-300">
                Bless Bitcoin (BBTC) is the native asset of the BlessChain network. BBTC is designed to:
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {[
                  'Power transactions',
                  'Anchor business data',
                  'Reward validators',
                  'Support AI-processing tasks in future phases',
                  'Enable cross-ecosystem utilities',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-[#e7e1d3]"
                  >
                    <span className="h-2 w-2 rounded-full bg-amber-300" aria-hidden />
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-gray-300">
                BBTC supply design aligns with classic Bitcoin principles but is optimized for sustained growth of the
                business ecosystem.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-amber-300/25 bg-[#111525] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.35)] space-y-3">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(92,167,255,0.08),transparent_35%)]" />
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-300/40 bg-[#0b0f1a] text-lg font-semibold text-amber-200">
                  06
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-amber-200/80">Growth</p>
                  <h2 className="text-2xl font-semibold text-[#f6f0dd]">Ecosystem Vision</h2>
                </div>
              </div>
              <p className="text-gray-300">
                BlessChain will expand across multiple industry sectors, strengthening the overall network:
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                {[
                  'Hospitality',
                  'Logistics',
                  'Retail',
                  'Food & Beverage',
                  'AI Services',
                  'E-commerce',
                  'Cloud hosting',
                  'Data center heat-reuse initiatives',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                    <span className="h-2 w-2 rounded-full bg-amber-300" aria-hidden />
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-gray-300">
                Each new Bless project — BlessHosting, BlessBooking, BlessVoice, BlessAIVideo, etc. — strengthens the
                overall network.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-amber-300/25 bg-[#111525] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.35)] space-y-3">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,191,87,0.08),transparent_35%)]" />
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-300/40 bg-[#0b0f1a] text-lg font-semibold text-amber-200">
                07
              </div>
              <h2 className="text-2xl font-semibold text-[#f6f0dd]">Why BlessChain?</h2>
            </div>
            <p className="text-gray-300">
              Because it combines the best of two worlds: AI → Intelligence, automation, business value. Blockchain →
              Transparency, decentralization, trust. BlessChain is the convergence point. Where AI workflows meet secure
              blockchain infrastructure. Where business efficiency meets ethical transparency. Where technology supports
              real human needs and real business challenges.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-amber-300/25 bg-[#111525] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.35)] space-y-3">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(92,167,255,0.08),transparent_35%)]" />
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-300/40 bg-[#0b0f1a] text-lg font-semibold text-amber-200">
                08
              </div>
              <h2 className="text-2xl font-semibold text-[#f6f0dd]">Our Commitment</h2>
            </div>
            <p className="text-gray-300">We commit to:</p>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                'Long-term innovation',
                'Responsible technology',
                'Sustainable infrastructure',
                'Global community involvement',
                'Transparent governance',
                'Real-world adoption beyond speculation',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-[#e7e1d3]"
                >
                  <span className="h-2 w-2 rounded-full bg-amber-300" aria-hidden />
                  {item}
                </div>
              ))}
            </div>
            <p className="text-gray-300">
              BlessChain is not a trend — it is a foundation for the future.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-amber-300/25 bg-[#111525] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.35)] space-y-4">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,191,87,0.08),transparent_35%)]" />
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-300/40 bg-[#0b0f1a] text-lg font-semibold text-amber-200">
                09
              </div>
              <h2 className="text-2xl font-semibold text-[#f6f0dd]">Join Us</h2>
            </div>
            <p className="text-gray-300">
              Whether you're a business owner, developer, validator, or partner—You are welcome to become part of the
              BlessChain ecosystem.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/blessai">Explore BlessAI System</Button>
              <Button href="/bbtc" variant="secondary">
                Learn About BBTC
              </Button>
              <Button href="/validators" variant="ghost">
                Join as a Validator
              </Button>
              <Button href="/contact" variant="secondary">
                Contact Partnerships
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
