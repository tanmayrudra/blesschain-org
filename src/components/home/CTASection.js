import React from 'react';

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready to get started?</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Join us today and be a part of the future.</p>
        <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300">
          Sign Up Now
        </button>
      </div>
    </section>
  );
};

export default CTASection;
