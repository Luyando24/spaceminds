"use client";

import { useState } from 'react';
import Button from './Button';
import Image from 'next/image';

export default function SelectedWork() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      client: "Ministry of Health",
      project: "National Health Registry",
      type: "Government",
      impact: "Unified 50M+ patient records securely across 2,000+ facilities.",
      year: "2024",
      image: "https://images.unsplash.com/photo-1516549655169-df83a083fc9b?auto=format&fit=crop&q=80&w=2000" // Medical/Tech abstract
    },
    {
      client: "TechNova Solutions",
      project: "Enterprise Cloud Migration",
      type: "Enterprise",
      impact: "Zero-downtime migration of critical banking infrastructure for 5M users.",
      year: "2024",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" // Tech/Cloud/Data
    },
    {
      client: "UNESCO",
      project: "Global Education Initiative",
      type: "NGO",
      impact: "Connecting 2M+ students in remote regions to digital curricula.",
      year: "2023",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=2000" // Education/Kids/Classroom
    },
    {
      client: "City Transport Authority",
      project: "Urban Mobility System",
      type: "Government",
      impact: "Reducing congestion by 30% through real-time AI traffic management.",
      year: "2024",
      image: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&q=80&w=2000" // City/Traffic/Motion
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <section id="work" className="py-24 md:py-40 bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 tracking-tight">Selected Work</h2>
              <div className="w-32 h-2 bg-[var(--accent)]"></div>
            </div>
            <div className="mt-8 md:mt-0 flex items-center gap-4">
               <div className="flex gap-2">
                  <button 
                    onClick={prevSlide}
                    className="w-12 h-12 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300"
                    aria-label="Previous project"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="w-12 h-12 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300"
                    aria-label="Next project"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
               </div>
               <div className="hidden md:block">
                 <Button variant="outline">View All Case Studies</Button>
               </div>
            </div>
          </div>

          <div className="relative">
            <div 
              key={currentIndex} 
              className="group relative bg-white border border-gray-200 overflow-hidden hover:border-black transition-all duration-500 animate-fade-in-up"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
                 <div className="p-8 md:p-16 flex flex-col justify-between order-2 lg:order-1 h-full">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-sm font-bold text-[var(--accent)] uppercase tracking-wider">{currentProject.type}</span>
                        <span className="text-sm text-gray-400 font-mono">/ {currentProject.year}</span>
                      </div>
                      <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight group-hover:underline decoration-4 underline-offset-8 decoration-[var(--accent)]">
                        {currentProject.project}
                      </h3>
                      <p className="text-xl text-gray-500 mb-8">{currentProject.client}</p>
                    </div>
                    
                    <div>
                      <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed mb-8">
                        {currentProject.impact}
                      </p>
                      <div className="flex items-center gap-2 text-black font-bold group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                        Read Case Study
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                 </div>

                 <div className="relative h-[300px] lg:h-auto order-1 lg:order-2 overflow-hidden bg-gray-100">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <Image 
                      src={currentProject.image} 
                      alt={currentProject.project} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                 </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-2 md:hidden">
               {projects.map((_, idx) => (
                 <button
                   key={idx}
                   onClick={() => setCurrentIndex(idx)}
                   className={`w-3 h-3 rounded-full transition-colors duration-300 ${idx === currentIndex ? 'bg-black' : 'bg-gray-300'}`}
                   aria-label={`Go to slide ${idx + 1}`}
                 />
               ))}
            </div>
          </div>
          
          <div className="mt-8 md:hidden text-center">
             <Button variant="outline">View All Case Studies</Button></div>
      </div>
    </section>
  );
}
