"use client";

import { useState } from 'react';
import Button from './Button';
import Image from 'next/image';

export default function SelectedWork() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      client: "Muchi",
      project: "School Management System",
      type: "EdTech",
      impact: "A comprehensive school management system designed for Zambia's educational institutions, featuring fast student enrollment with NRC, instant ID cards, and seamless multi-school access.",
      year: "2024",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=2000",
      url: "https://www.muchiapp.com/"
    },
    {
      client: "Soccer Circular",
      project: "Football Club Management System",
      type: "SportsTech",
      impact: "A professional football academy management system enabling streamlined player registration, training schedules, performance tracking, and FIFA compliance management.",
      year: "2024",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=2000",
      url: "https://www.soccercircular.com/"
    },
    {
      client: "ZGF",
      project: "NGO Website & Knowledge Hub",
      type: "NGO / Civil Society",
      impact: "A national digital platform supporting civic engagement, community philanthropy, and local community-led development initiatives across 10 provinces of Zambia.",
      year: "2024",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=2000",
      url: "https://zgf.org.zm/"
    },
    {
      client: "Zamora",
      project: "Hotel Management System",
      type: "Hospitality / SaaS",
      impact: "An all-in-one cloud-native property management and smart POS ecosystem built for speed and growth, serving hotels, lodges, and restaurants across Zambia.",
      year: "2024",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2000",
      url: "https://get.zamoraapp.com/"
    },
    {
      client: "HMS Demo",
      project: "Hospital Management System",
      type: "HealthTech / SaaS",
      impact: "A next-generation healthcare management platform designed to optimize clinical workflows, medical records management, and administrative operations for clinics and hospitals.",
      year: "2024",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000",
      url: "https://hms-demo-rosy.vercel.app/"
    },
    {
      client: "Spur Wellness",
      project: "E-commerce Website",
      type: "E-commerce / Fitness",
      impact: "A modern, premium e-commerce platform for high-performance fitness equipment and artificial gym turf, designed with minimalistic aesthetics and smooth buying flows.",
      year: "2024",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=2000",
      url: "https://spur-wellness.vercel.app/"
    },
    {
      client: "Government of Zambia",
      project: "Zamportal",
      type: "GovTech / Public Service",
      impact: "A secure digital gateway to public services in Zambia, enabling citizens to access government services, apply for official documents, and pay fees online 24/7.",
      year: "2024",
      image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&q=80&w=2000",
      url: "https://zamportal.vercel.app/"
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
                        <a href={currentProject.url} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">
                          {currentProject.project}
                        </a>
                      </h3>
                      <p className="text-xl text-gray-500 mb-8">{currentProject.client}</p>
                    </div>
                    
                    <div>
                      <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed mb-8">
                        {currentProject.impact}
                      </p>
                      <a 
                        href={currentProject.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 text-black font-bold group-hover:translate-x-2 transition-transform duration-300 cursor-pointer hover:text-[var(--accent)]"
                      >
                        Visit Website
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
                 </div>

                 <a 
                   href={currentProject.url} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="relative h-[300px] lg:h-auto order-1 lg:order-2 overflow-hidden bg-gray-100 block"
                 >
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <Image 
                      src={currentProject.image} 
                      alt={currentProject.project} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                 </a>
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
