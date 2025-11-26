import React from 'react';
import MagnifyingGlassIcon from '../icons/MagnifyingGlassIcon';
import ImageIcon from '../icons/ImageIcon';
import TrendingUpIcon from '../icons/TrendingUpIcon';

const FeatureCard = ({ icon, title, description, isTextOnly }) => (
  <div className="bg-white/40 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center h-full flex flex-col justify-center items-center">
    {icon}
    <h3 className={`font-semibold text-gray-800 ${isTextOnly ? 'text-2xl mb-2' : 'text-xl mt-4 mb-2'}`}>{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: <MagnifyingGlassIcon />,
      title: 'Data Analysis',
      description: 'Identify patterns and insights',
    },
    {
      icon: <ImageIcon />,
      title: 'Image Recognition',
      description: 'Detect objects and scenes',
    },
    {
      title: 'Natural Language Processing',
      description: 'Understand and generate text',
      isTextOnly: true,
    },
    {
      icon: <TrendingUpIcon />,
      title: 'Prediction',
      description: 'Forecast future outcomes',
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Aurora background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">AI App Features</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-10 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
