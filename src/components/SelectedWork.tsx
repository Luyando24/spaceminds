"use client";

import Button from './Button';
import Image from 'next/image';
import { projects } from '@/data/projects';

export default function SelectedWork() {
  const featuredProjects = projects.slice(0, 2);

  return (
    <section id="work" className="py-24 md:py-40 bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 tracking-tight">Portfolio</h2>
            <div className="w-32 h-2 bg-[var(--accent)]"></div>
          </div>
          <div className="mt-8 md:mt-0">
            <Button variant="outline" href="/work">View All Case Studies</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {featuredProjects.map((project, index) => (
            <div 
              key={index} 
              className="group flex flex-col bg-white border border-gray-200 overflow-hidden hover:border-black transition-all duration-500"
            >
              {/* Image Link */}
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative aspect-[16/10] overflow-hidden bg-gray-100 block"
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <Image 
                  src={project.image} 
                  alt={project.project} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </a>

              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider">
                      {project.type}
                    </span>
                    <span className="text-xs text-gray-400 font-mono">
                      / {project.year}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-black mb-2 group-hover:underline decoration-2 underline-offset-4 decoration-[var(--accent)]">
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      {project.project}
                    </a>
                  </h3>
                  <p className="text-sm text-gray-400 mb-6 font-mono">
                    Client: {project.client}
                  </p>
                  <p className="text-gray-600 leading-relaxed font-light mb-8">
                    {project.impact}
                  </p>
                </div>

                <div>
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 text-black font-bold group-hover:translate-x-2 transition-transform duration-300 hover:text-[var(--accent)]"
                  >
                    Visit Website
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
