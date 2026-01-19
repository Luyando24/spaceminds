"use client";

import Link from 'next/link';
import Button from './Button';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="container-custom h-20 md:h-24 flex items-center justify-between relative">
        <Link href="/" className="text-3xl md:text-4xl font-black tracking-tighter text-black uppercase relative z-10">
          SpaceMinds
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link href="#services" className="text-sm font-medium text-gray-600 hover:text-black hover:underline hover:decoration-[var(--accent)] hover:decoration-2 hover:underline-offset-4 transition-all">
            Services
          </Link>
          <Link href="#work" className="text-sm font-medium text-gray-600 hover:text-black hover:underline hover:decoration-[var(--accent)] hover:decoration-2 hover:underline-offset-4 transition-all">
            Selected Work
          </Link>
          <Link href="#about" className="text-sm font-medium text-gray-600 hover:text-black hover:underline hover:decoration-[var(--accent)] hover:decoration-2 hover:underline-offset-4 transition-all">
            About
          </Link>
          <Link href="#contact" className="text-sm font-medium text-gray-600 hover:text-black hover:underline hover:decoration-[var(--accent)] hover:decoration-2 hover:underline-offset-4 transition-all">
            Contact
          </Link>
        </nav>

        <div className="hidden md:block relative z-10">
          <Button variant="primary" size="default">
            Start a Project
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden relative z-50 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-full h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
          </div>
        </button>

        {/* Mobile Navigation Overlay */}
        <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 md:hidden flex flex-col items-center justify-center gap-8 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <Link 
            href="#services" 
            className="text-2xl font-bold text-black"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link 
            href="#work" 
            className="text-2xl font-bold text-black"
            onClick={() => setIsMenuOpen(false)}
          >
            Selected Work
          </Link>
          <Link 
            href="#about" 
            className="text-2xl font-bold text-black"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            href="#contact" 
            className="text-2xl font-bold text-black"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="mt-8">
            <Button variant="primary" size="default">
              Start a Project
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
