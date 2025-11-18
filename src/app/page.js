import React from 'react';

const sections = [
  { title: 'Hero Section', id: 'hero' },
  { title: 'Introduction to BlessChain', id: 'intro' },
  { title: 'BlessAI System (Primary Highlight)', id: 'blessai' },
  { title: 'Featured App: BlessOrder', id: 'blessorder' },
  { title: 'Full App Suite Overview (Shipping, Menu, ERP...)', id: 'suite' },
  { title: 'Blockchain Layer (BBTC + Technology)', id: 'blockchain' },
  { title: 'Roadmap (AI + Blockchain)', id: 'roadmap' },
  { title: 'Ecosystem Projects', id: 'ecosystem' },
  { title: 'Partners & Collaborations', id: 'partners' },
  { title: 'News & Updates', id: 'news' },
  { title: 'Global Call-to-Action', id: 'cta' },
];

export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`min-h-[60vh] flex items-center justify-center ${
            index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
          }`}
        >
          <div className="container mx-auto px-4 py-16 text-center">
            <h2 className="text-4xl font-bold mb-4">{section.title}</h2>
            <p className="text-lg text-gray-600">Content for this section will go here.</p>
          </div>
        </section>
      ))}
    </div>
  );
}
