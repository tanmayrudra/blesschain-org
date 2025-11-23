
import React from 'react';
import Image from 'next/image';
import Button from '../../common/Button';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-[80vh] flex items-center bg-[#FEFDFB] text-black">
      <div className="container max-w-[86%] mx-auto px-4 py-16">
        <div className="flex gap-18 items-center">
          <div className='w-1/2'>
            <h3 className="text-lg font-medium text-[#002D72]">AI PLATFORM</h3>
            <h1 className="text-5xl font-bold my-2 text-[#002D72]">Powerful AI <br/> for your business</h1>
            <p className="text-lg text-gray-500 mb-8 max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <Button>
              Get Started
            </Button>
          </div>
          <div className="flex justify-center w-1/2">
            <Image src="/heroMascot.png" alt="AI Platform" width={458} height={564} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

