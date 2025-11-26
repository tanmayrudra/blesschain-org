"use client";
import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2025-12-31T23:59:59') - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    // Set the initial time left
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
        <div className="bg-[#313063]/20 text-white p-4">
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
      className="relative bg-[#010307] min-h-screen flex flex-col overflow-hidden"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/heroBanner.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      <div className="flex-grow flex items-center justify-end relative z-20">
        <div className="relative z-10 w-1/2 pr-16 text-center mx-auto">
          <h1 className="text-6xl font-bold text-white mb-6 tracking-tight">
            Empowering the Future with <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-600 bg-clip-text text-transparent">Decentralized AI</span>
          </h1>
          <p className="text-xl text-white/80 mb-10">
            Join the new era of innovation where artificial intelligence meets the blockchain to create a more transparent and intelligent world.
          </p>
          <button className="bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-600 text-white font-bold py-4 px-10 rounded-full hover:from-yellow-500 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 cursor-pointer">
            Explore Now
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 w-full z-20">
        <UpgradeBanner />
      </div>
    </section>
  );
};

export default HeroSection;

