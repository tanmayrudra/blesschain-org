import React from 'react';
import ArrowIcon from '../icons/ArrowIcon';
import ExternalLinkIcon from '../icons/ExternalLinkIcon';

const IntroSection = () => {
  const cardData = [
    {
      title: 'Just getting started?',
      description: 'Learn how DOT gives you a voice—and powers everything in the Polkadot ecosystem.',
      icon: <ArrowIcon className="w-6 h-6" />,
      link: '#',
    },
    {
      title: 'Ready to build?',
      description: 'Spin up a custom blockchain in minutes, or build the app of your dreams.',
      icon: <ExternalLinkIcon className="w-6 h-6" />,
      link: '#',
    },
    {
      title: 'Want to connect?',
      description: 'Join the community shaping the next generation of Web3—open, onchain, and unstoppable.',
      icon: <ArrowIcon className="w-6 h-6" />,
      link: '#',
    },
  ];

  return (
    <section className="relative bg-black text-white py-24 sm:py-32 overflow-hidden">
      <div 
        className="absolute top-1/2 left-1/2 w-[80rem] h-[80rem] -translate-x-1/2 -translate-y-1/2"
        style={{ background: 'radial-gradient(circle, rgba(39, 39, 42, 0.7) 0%, rgba(14, 14, 18, 0) 70%)' }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
          Power without permission
        </h2>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-20">
          Every protocol upgrade, treasury decision, and network direction is determined transparently by DOT holders—the largest decentralized collective in Web3.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {cardData.map((card, index) => (
            <a
              key={index}
              href={card.link}
              className="bg-zinc-900/50 p-8 rounded-2xl border border-amber-500/20
                         hover:border-amber-400/60 hover:bg-zinc-900/80
                         hover:shadow-2xl hover:shadow-amber-500/10
                         transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-amber-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-zinc-100">{card.title}</h3>
                  <div className="text-zinc-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all duration-300">
                    {card.icon}
                  </div>
                </div>
                <p className="text-zinc-400">
                  {card.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;

