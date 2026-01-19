"use client";

import { useState, useEffect } from 'react';
import Button from './Button';

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const words = ["Global Institutions.", "Growing Enterprises.", "Ambitious SMEs.", "Governments.", "NGOs."];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="min-h-screen flex items-center pt-20 md:pt-24 bg-white">
      <div className="container-custom w-full">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-black leading-[0.95] mb-8 animate-fade-in-up text-left">
          <span className="block">Digital Infrastructure for</span>
          <span key={textIndex} className="text-gray-400 animate-fade-in-up block min-w-[300px]">
            {words[textIndex]}
          </span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-600 mb-10 max-w-3xl leading-relaxed animate-fade-in-up delay-100 font-light text-left">
          We partner with governments, enterprises, and SMEs to build secure, scalable, and impact-driven software systems that serve millions.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up delay-200">
          <Button variant="primary" size="large" className="text-lg">
            View Selected Work
          </Button>
          <Button variant="outline" size="large" className="text-lg">
            Partner With Us
          </Button>
        </div>
      </div>
    </section>
  );
}
