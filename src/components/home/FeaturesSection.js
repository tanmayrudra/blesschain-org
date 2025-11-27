import React from 'react';
import WalletIcon from '../icons/WalletIcon';
import EthCoinIcon from '../icons/EthCoinIcon';
import AppIcon from '../icons/AppIcon';
import RocketIcon from '../icons/RocketIcon';

const FeatureItem = ({ icon, title, description, titleColor }) => (
  <div className="flex items-center space-x-6">
    <div className="flex-shrink-0">
      <div
        className="p-4 rounded-2xl transition-shadow duration-200 ease-in-out"
        style={{
          border: '2px solid transparent',
          backgroundImage:
            'linear-gradient(#F3F4F6, #F3F4F6), linear-gradient(90deg, #E9B646, #0070F3)',
          backgroundOrigin: 'padding-box, border-box',
          backgroundClip: 'padding-box, border-box',
          boxShadow: '0 8px 20px rgba(0,112,243,0.06), 0 6px 12px rgba(233,182,70,0.04)',
        }}
      >
        {icon}
      </div>
    </div>
    <div>
      <h3 className={`text-lg font-bold ${titleColor}`}>{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);


const FeaturesSection = () => {
  const features = [
    {
      icon: <WalletIcon className="w-8 h-8 text-purple-600" />,
      title: 'Pick a wallet',
      description: 'Create accounts & manage assets',
      titleColor: 'text-purple-600',
    },
    {
      icon: <EthCoinIcon className="w-8 h-8 text-blue-600" />,
      title: 'Get ETH',
      description: 'The currency of Ethereum',
      titleColor: 'text-blue-600',
    },
    {
      icon: <AppIcon className="w-8 h-8 text-green-600" />,
      title: 'Try apps',
      description: 'Finance, gaming, social',
      titleColor: 'text-green-600',
    },
    {
      icon: <RocketIcon className="w-8 h-8 text-pink-600" />,
      title: 'Start building',
      description: 'Create your first app',
      titleColor: 'text-pink-600',
    },
  ];

  return (
    <section className="bg-[#0E0E12] py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">How to get started</h2>
            <p className="text-lg text-gray-400">Your journey into the decentralized world begins here.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((feature, index) => (
              <FeatureItem key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

