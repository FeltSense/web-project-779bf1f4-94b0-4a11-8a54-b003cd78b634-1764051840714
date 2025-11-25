'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-stone-50/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between py-6">
          {/* Logo - Editorial Style with French Accent */}
          <div className="relative group">
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-px bg-stone-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Link href="/" className="block">
              <div className="flex flex-col">
                <span className="font-serif text-2xl lg:text-3xl tracking-wider text-stone-800 italic">
                  Atelier
                </span>
                <span className="font-light text-xs tracking-[0.3em] text-stone-600 -mt-1">
                  LUXE PARIS
                </span>
              </div>
            </Link>
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-px bg-stone-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Desktop Navigation - Refined Typography */}
          <div className="hidden md:flex items-center gap-12">
            <Link 
              href="#services" 
              className="group relative font-light tracking-widest text-xs uppercase text-stone-800 transition-colors hover:text-rose-400"
            >
              Collections
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-stone-800 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="#pricing" 
              className="group relative font-light tracking-widest text-xs uppercase text-stone-800 transition-colors hover:text-rose-400"
            >
              Atelier
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-stone-800 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="#contact" 
              className="group relative font-light tracking-widest text-xs uppercase text-stone-800 transition-colors hover:text-rose-400"
            >
              Rendez-vous
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-stone-800 group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            {/* CTA Button - Elegant */}
            <button className="relative px-8 py-3 border border-stone-800 bg-stone-800 text-stone-50 text-xs tracking-widest uppercase overflow-hidden group">
              <span className="relative z-10 group-hover:text-stone-800 transition-colors duration-300">
                Book Styling
              </span>
              <div className="absolute inset-0 bg-amber-100 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </button>
          </div>

          {/* Mobile Menu Button - Artistic */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-px bg-stone-800 transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}></span>
            <span className={`w-6 h-px bg-stone-800 transition-all duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`w-6 h-px bg-stone-800 transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full Screen Editorial */}
      <div className={`md:hidden fixed inset-0 bg-rose-50 transition-all duration-500 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
          <div className="w-24 h-px bg-stone-300 mb-4"></div>
          
          <Link 
            href="#services" 
            onClick={() => setIsOpen(false)}
            className="font-serif text-4xl text-stone-800 italic hover:text-rose-400 transition-colors"
          >
            Collections
          </Link>
          <Link 
            href="#pricing" 
            onClick={() => setIsOpen(false)}
            className="font-serif text-4xl text-stone-800 italic hover:text-rose-400 transition-colors"
          >
            Atelier
          </Link>
          <Link 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="font-serif text-4xl text-stone-800 italic hover:text-rose-400 transition-colors"
          >
            Rendez-vous
          </Link>
          
          <div className="w-24 h-px bg-stone-300 mt-4"></div>
          
          <button className="px-12 py-4 border border-stone-800 bg-stone-800 text-stone-50 text-xs tracking-widest uppercase mt-8">
            Book Styling
          </button>
        </div>
      </div>
    </nav>
  );
}