import React, { useState, useEffect } from 'react';
import WalletIcon from '../icons/WalletIcon';
import EthCoinIcon from '../icons/EthCoinIcon';
import AppIcon from '../icons/AppIcon';
import RocketIcon from '../icons/RocketIcon';
import ArrowIcon from '../icons/ArrowIcon';

const FeatureItem = ({ icon, title, description }) => {
  const colors = ['text-blue-500', 'text-red-500', 'text-yellow-500', 'text-green-500'];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1500); // Change color every 1.5 seconds

    return () => clearInterval(interval);
  }, []);

  const animatedIcon = React.cloneElement(icon, {
    className: `${icon.props.className || ''} ${colors[currentColorIndex]} transition-colors duration-700 ease-in-out transform group-hover:scale-110`,
  });

  return (
    <div className="flex items-center space-x-6 group">
      <div
        className="p-4 rounded-2xl transition-shadow duration-200 ease-in-out"
        style={{
          border: '2px solid transparent',
          backgroundImage:
            'linear-gradient(#1f2937, #1f2937), linear-gradient(90deg, #E9B646, #0070F3)',
          backgroundOrigin: 'padding-box, border-box',
          backgroundClip: 'padding-box, border-box',
          boxShadow: '0 8px 20px rgba(0,112,243,0.1), 0 6px 12px rgba(233,182,70,0.08)',
        }}
      >
        {animatedIcon}
      </div>
      <div>
        <h3 className="text-base font-bold text-[#BFBFBF]">{title}</h3>
      </div>
      <div>
        
      </div>
    </div>
  );
};


const FeaturesSection = () => {
  const features = [
    {
      icon: <WalletIcon className="w-8 h-8" />,
      title: 'Dynamic Block Production',
      description: 'Create accounts & manage assets',
    },
    {
      icon: <EthCoinIcon className="w-8 h-8" />,
      title: 'Sabbath Mode',
      description: 'The currency of Ethereum',
    },
    {
      icon: <AppIcon className="w-8 h-8" />,
      title: 'Home Validator Nodes',
      description: 'Finance, gaming, social',
    },
    {
      icon: <RocketIcon className="w-8 h-8" />,
      title: 'Real-World Utility',
      description: 'Create your first app',
    },
  ];

  return (
    <section className="bg-[#0E0E12] py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-full mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">What is BlessChain?</h2>
            <p className="text-lg text-gray-400">BlessChain is a sustainable blockchain infrastructure designed for real-world utility, home-friendly validator nodes, and AI-accelerated applications. It supports dynamic block production, Sabbath mode for energy efficiency, and integrates seamlessly with the BlessAI System.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((feature, index) => (
              <FeatureItem key={index} {...feature} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="mt-6 inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 text-white font-bold py-4 px-8 rounded-full hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 transform hover:scale-105 cursor-pointer">
              <span>Explore Technology</span>
              <ArrowIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
