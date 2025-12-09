import React from 'react';

const PaymentPage = () => {
  return (
    <main className="min-h-screen bg-[#0E0E12] text-white">
      <div className="container mx-auto px-4 py-16 max-w-2xl space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Payment</h1>
          <p className="text-gray-300">Mock payment screen for BlessChain services.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-[#111525] p-6 space-y-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-300">Name on card</label>
            <input
              type="text"
              className="w-full rounded-lg border border-white/10 bg-[#0b0f1a] px-3 py-3 text-white placeholder:text-gray-500 focus:border-amber-300 focus:outline-none"
              placeholder="Jane Doe"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-300">Card number</label>
            <input
              type="text"
              className="w-full rounded-lg border border-white/10 bg-[#0b0f1a] px-3 py-3 text-white placeholder:text-gray-500 focus:border-amber-300 focus:outline-none"
              placeholder="4242 4242 4242 4242"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-300">Expiry</label>
              <input
                type="text"
                className="w-full rounded-lg border border-white/10 bg-[#0b0f1a] px-3 py-3 text-white placeholder:text-gray-500 focus:border-amber-300 focus:outline-none"
                placeholder="MM/YY"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-300">CVC</label>
              <input
                type="text"
                className="w-full rounded-lg border border-white/10 bg-[#0b0f1a] px-3 py-3 text-white placeholder:text-gray-500 focus:border-amber-300 focus:outline-none"
                placeholder="123"
              />
            </div>
          </div>
          <button
            type="button"
            className="w-full rounded-lg border border-[#c18c35] bg-[#0f1320] px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#f6f0dd] shadow-[0_10px_28px_rgba(0,0,0,0.32)] transition duration-150 hover:border-amber-300 cursor-pointer"
          >
            Pay Now
          </button>
        </div>
      </div>
    </main>
  );
};

export default PaymentPage;
