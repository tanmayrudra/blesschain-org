import React from 'react';

const DashboardPage = () => {
  return (
    <main className="min-h-screen bg-[#0E0E12] text-white">
      <div className="container mx-auto px-4 py-16 space-y-6">
        <div>
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <p className="text-gray-300">Welcome to your BlessChain dashboard. Content coming soon.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-[#111525] p-4">
            <h2 className="text-lg font-semibold text-[#f6f0dd]">Overview</h2>
            <p className="text-sm text-gray-300 mt-2">Usage metrics and account status will appear here.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#111525] p-4">
            <h2 className="text-lg font-semibold text-[#f6f0dd]">Recent Activity</h2>
            <p className="text-sm text-gray-300 mt-2">Latest actions and notifications will show here.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;
