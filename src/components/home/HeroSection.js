"use client";
import React, { useState, useEffect } from 'react';
import ArrowIcon from '../icons/ArrowIcon';

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
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex space-x-2 sm:space-x-4">
      <div>
        <span className="font-bold text-2xl sm:text-3xl">{String(timeLeft.days).padStart(2, '0')}</span>
        <span className="block text-[10px] sm:text-xs opacity-70">DAYS</span>
      </div>
      <div>
        <span className="font-bold text-2xl sm:text-3xl">{String(timeLeft.hours).padStart(2, '0')}</span>
        <span className="block text-[10px] sm:text-xs opacity-70">HOURS</span>
      </div>
      <div>
        <span className="font-bold text-2xl sm:text-3xl">{String(timeLeft.minutes).padStart(2, '0')}</span>
        <span className="block text-[10px] sm:text-xs opacity-70">MINUTES</span>
      </div>
    </div>
  );
};

const UpgradeBanner = () => {
  return (
    <div className="max-w-5xl mx-auto bg-black/30 backdrop-blur-md text-white p-4 rounded-2xl border border-white/10 shadow-lg">
      <div className="container mx-auto flex items-center justify-between gap-4 sm:gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-bold text-base sm:text-lg">FUSAKA</h3>
          <p className="text-[10px] sm:text-xs tracking-widest opacity-80">NETWORK UPGRADE</p>
        </div>
        <p className="hidden md:block text-xs sm:text-sm opacity-90">
          For a faster, safer, and more user-friendly Ethereum network. <a href="#" className="underline hover:text-amber-400">Read more.</a>
        </p>
        <div className="text-right">
          <p className="text-[10px] sm:text-xs mb-1 opacity-80">GOING LIVE IN</p>
          <Countdown />
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden text-center text-white">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/heroBanner.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>
      
      <div className="relative z-20 flex flex-col items-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
          Empowering the Future with <br /> <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">Decentralized AI</span>
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mb-10">
          Join the new era of innovation where artificial intelligence meets the blockchain to create a more transparent and intelligent world.
        </p>
        <button className="flex items-center space-x-3 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 text-white font-bold py-4 px-8 rounded-full hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 transform hover:scale-105 cursor-pointer">
          <span>Explore Now</span>
          <ArrowIcon className="w-5 h-5" />
        </button>
      </div>

      <div className="absolute bottom-8 w-full z-20 px-4">
        <UpgradeBanner />
      </div>
    </section>
  );
};

export default HeroSection;

