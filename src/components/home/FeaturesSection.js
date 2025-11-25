import React from 'react';

const FeatureCard = ({ title, description }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

const FeaturesSection = () => {
  const features = [
    { title: 'Feature One', description: 'Description for feature one.' },
    { title: 'Feature Two', description: 'Description for feature two.' },
    { title: 'Feature Three', description: 'Description for feature three.' },
  ];

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
