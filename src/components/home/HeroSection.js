"use client";
import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2025-12-31T23:59:59') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex space-x-4">
      <div>
        <span className="font-bold text-3xl">{String(timeLeft.days).padStart(2, '0')}</span>
        <span className="block text-xs">DAYS</span>
      </div>
      <div>
        <span className="font-bold text-3xl">{String(timeLeft.hours).padStart(2, '0')}</span>
        <span className="block text-xs">HOURS</span>
      </div>
      <div>
        <span className="font-bold text-3xl">{String(timeLeft.minutes).padStart(2, '0')}</span>
        <span className="block text-xs">MINUTES</span>
      </div>
    </div>
  );
};

const UpgradeBanner = () => {
    return (
        <div className="bg-[#313063]/30 text-white p-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="text-center">
                    <h3 className="font-bold text-xl">FUSAKA</h3>
                    <p className="text-sm tracking-widest">NETWORK UPGRADE</p>
                </div>
                <p className="text-sm">
                    For a faster, safer, and more user-friendly Ethereum network | <a href="#" className="underline">Read more.</a>
                </p>
                <div className="text-right">
                    <p className="text-sm mb-1">GOING LIVE IN</p>
                    <Countdown />
                </div>
            </div>
        </div>
    );
};

const HeroSection = () => {
  return (
    <section 
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex flex-col"
      style={{ backgroundImage: 'url(/hero_banner.png)' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> 

      <div className="flex-grow flex items-center justify-end">
        <div className="relative z-10 w-1/2 pr-16 text-left">
          <h1 className="text-6xl font-bold text-white mb-6 tracking-tight">
            Empowering the Future with <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Decentralized AI</span>
          </h1>
          <p className="text-xl text-white/80 mb-10">
            Join the new era of innovation where artificial intelligence meets the blockchain to create a more transparent and intelligent world.
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white font-bold py-4 px-10 rounded-full hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
            Explore Now
          </button>
        </div>
      </div>





      
      <div className="relative z-10">
        <UpgradeBanner />
      </div>
    </section>
  );
};

export default HeroSection;

