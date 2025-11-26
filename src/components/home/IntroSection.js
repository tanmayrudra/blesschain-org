import React from 'react';
import ArrowIcon from '../icons/ArrowIcon';
import ExternalLinkIcon from '../icons/ExternalLinkIcon';

const IntroSection = () => {
  const cardData = [
    {
      title: 'Just getting started?',
      description: 'Learn how DOT gives you a voice—and powers everything in the Polkadot ecosystem.',
      icon: <ArrowIcon />,
      link: '#',
    },
    {
      title: 'Ready to build?',
      description: 'Spin up a custom blockchain in minutes, or build the app of your dreams.',
      icon: <ExternalLinkIcon />,
      link: '#',
    },
    {
      title: 'Want to connect?',
      description: 'Join the community shaping the next generation of Web3—open, onchain, and unstoppable.',
      icon: <ArrowIcon />,
      link: '#',
    },
  ];

  return (
    <section className="bg-black text-white py-24 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">Power without permission</h2>
        <p className="text-lg text-zinc-400 max-w-3xl mx-auto mb-20">
          Every protocol upgrade, treasury decision, and network direction is determined transparently by DOT holders—the largest decentralized collective in Web3.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {cardData.map((card, index) => (
            <a
              key={index}
              href={card.link}
              className="bg-zinc-900 p-8 rounded-xl border border-amber-600 hover:border-amber-400 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300 group"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <div className="text-zinc-500 group-hover:text-white transition-colors duration-300">
                  {card.icon}
                </div>
              </div>
              <p className="text-zinc-400">
                {card.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;

