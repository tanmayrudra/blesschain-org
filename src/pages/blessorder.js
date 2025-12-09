import React from 'react';

const BlessOrderPage = () => {
  return (
    <main className="min-h-screen bg-[#0E0E12] text-white">
      <div className="container mx-auto px-4 py-16 space-y-6">
        <div>
          <h1 className="text-4xl font-bold">BlessOrder</h1>
          <p className="text-gray-300 mt-2">
            Placeholder page for BlessOrder details. Full content coming soon.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-[#111525] p-4">
            <h2 className="text-lg font-semibold text-[#f6f0dd]">Overview</h2>
            <p className="text-sm text-gray-300 mt-2">
              BlessOrder is the flagship AI ERP & sales management tool in the BlessAI System.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#111525] p-4">
            <h2 className="text-lg font-semibold text-[#f6f0dd]">Coming Soon</h2>
            <p className="text-sm text-gray-300 mt-2">
              Feature details, screenshots, and demos will be added here.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlessOrderPage;
