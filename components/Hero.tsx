'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const collections = [
  {
    season: 'Printemps',
    year: '2024',
    title: 'Jardin Secret',
    description: 'Where botanical elegance meets Parisian sophistication',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1920&q=80',
    mood: 'Ethereal',
    palette: 'Ivory & Sage'
  },
  {
    season: 'Été',
    year: '2024',
    title: 'Côte d&apos;Azur',
    description: 'Sun-drenched silhouettes for the modern muse',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&q=80',
    mood: 'Luminous',
    palette: 'Azure & Pearl'
  },
  {
    season: 'Automne',
    year: '2024',
    title: 'L&apos;Atelier',
    description: 'Timeless craftsmanship in every stitch',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80',
    mood: 'Refined',
    palette: 'Camel & Noir'
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [curtainOpen, setCurtainOpen] = useState(false);
  const [savedMoods, setSavedMoods] = useState<number[]>([]);

  useEffect(() => {
    // Curtain opening animation on load
    const timer = setTimeout(() => setCurtainOpen(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Auto-rotate collections
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % collections.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const current = collections[currentIndex];

  const toggleSaveMood = (index: number) => {
    setSavedMoods(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-stone-50 via-rose-50 to-amber-50 overflow-hidden">
      {/* Decorative Lines - Atelier Blueprint Style */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent"></div>
      <div className="absolute top-20 left-1/4 bottom-0 w-px bg-gradient-to-b from-stone-200 to-transparent opacity-30"></div>
      <div className="absolute top-40 right-1/3 bottom-0 w-px bg-gradient-to-b from-rose-200 to-transparent opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 lg:pt-40 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: Dynamic Typography & Collection Info */}
          <div className="relative">
            {/* Curtain Effect - Left Panel */}
            <div className={`absolute inset-0 bg-stone-800 transform transition-transform duration-1000 ease-out ${
              curtainOpen ? '-translate-x-full' : 'translate-x-0'
            }`}></div>

            <div className="relative z-10 space-y-8">
              {/* Season Badge */}
              <div className="inline-flex items-center gap-4">
                <div className="w-12 h-px bg-stone-800"></div>
                <span className="font-light text-xs tracking-[0.3em] uppercase text-stone-600">
                  {current.season} {current.year}
                </span>
              </div>

              {/* Main Title - Editorial Typography */}
              <div className="space-y-4">
                <h1 className="font-serif text-6xl lg:text-8xl italic text-stone-800 leading-none">
                  {current.title}
                </h1>
                <div className="flex items-center gap-6">
                  <div className="h-px bg-rose-300 flex-1"></div>
                  <span className="font-light text-xs tracking-widest text-rose-400">
                    {current.mood}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg lg:text-xl text-stone-600 font-light leading-relaxed max-w-md">
                {current.description}
              </p>

              {/* Mood Board Meta */}
              <div className="flex items-center gap-8 pt-4">
                <div className="space-y-1">
                  <span className="block text-xs tracking-widest uppercase text-stone-500">
                    Palette
                  </span>
                  <span className="block text-sm text-stone-800 font-light">
                    {current.palette}
                  </span>
                </div>
                <div className="w-px h-12 bg-stone-300"></div>
                <div className="space-y-1">
                  <span className="block text-xs tracking-widest uppercase text-stone-500">
                    Pieces
                  </span>
                  <span className="block text-sm text-stone-800 font-light">
                    24 Styles
                  </span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-6">
                <button className="group relative px-10 py-4 bg-stone-800 text-stone-50 text-xs tracking-widest uppercase overflow-hidden">
                  <span className="relative z-10 group-hover:text-stone-800 transition-colors duration-300">
                    Explore Collection
                  </span>
                  <div className="absolute inset-0 bg-amber-100 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
                
                <button 
                  onClick={() => toggleSaveMood(currentIndex)}
                  className="group px-8 py-4 border border-stone-800 text-stone-800 text-xs tracking-widest uppercase hover:bg-rose-100 transition-colors duration-300"
                >
                  {savedMoods.includes(currentIndex) ? '✓ Saved' : 'Save Mood'}
                </button>
              </div>

              {/* Collection Dots Navigation */}
              <div className="flex items-center gap-3 pt-8">
                {collections.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`transition-all duration-300 ${
                      index === currentIndex 
                        ? 'w-12 h-0.5 bg-stone-800' 
                        : 'w-6 h-0.5 bg-stone-300 hover:bg-stone-400'
                    }`}
                    aria-label={`View collection ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Rotating Lookbook with Atelier Window Effect */}
          <div className="relative">
            {/* Curtain Effect - Right Panel */}
            <div className={`absolute inset-0 bg-stone-800 transform transition-transform duration-1000 ease-out delay-200 z-20 ${
              curtainOpen ? 'translate-x-full' : 'translate-x-0'
            }`}></div>

            <div className="relative">
              {/* Main Image Container - Editorial Frame */}
              <div className="relative aspect-[3/4] overflow-hidden bg-stone-200">
                {collections.map((collection, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Image
                      src={collection.image}
                      alt={collection.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                    {/* Gradient Overlay - Editorial Touch */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent"></div>
                  </div>
                ))}

                {/* Floating Atelier Bell - Style Assistant */}
                <button className="absolute top-6 right-6 w-12 h-12 bg-amber-100/90 backdrop-blur-sm rounded-full flex items-center justify-center group hover:bg-amber-200 transition-all duration-300 hover:scale-110">
                  <span className="text-xl">🔔</span>
                  <div className="absolute -bottom-16 right-0 bg-stone-800 text-stone-50 text-xs px-3 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Styling Tips
                  </div>
                </button>

                {/* Season Label - Overlaid */}
                <div className="absolute bottom-6 left-6 bg-stone-50/95 backdrop-blur-sm px-6 py-3">
                  <span className="block text-xs tracking-[0.3em] uppercase text-stone-800">
                    {current.season}
                  </span>
                </div>
              </div>

              {/* Decorative Frame Elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 border-l border-t border-stone-400"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-r border-b border-stone-400"></div>

              {/* Fabric Swatch Preview - Parallax Style */}
              <div className="absolute -bottom-8 -left-8 bg-rose-200 p-6 shadow-lg hidden lg:block">
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-stone-100 border border-stone-300"></div>
                    <div className="w-8 h-8 bg-rose-100 border border-stone-300"></div>
                    <div className="w-8 h-8 bg-amber-100 border border-stone-300"></div>
                  </div>
                  <span className="block text-xs tracking-wider text-stone-600">
                    Texture Palette
                  </span>
                </div>
              </div>

              {/* Measurements Label - Atelier Detail */}
              <div className="absolute -top-8 -right-8 bg-stone-800 text-stone-50 px-4 py-2 text-xs tracking-widest hidden lg:block">
                MADE TO MEASURE
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Newsletter & Style Horoscope */}
        <div className="mt-24 lg:mt-32 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-stone-100 via-rose-100 to-amber-50 p-12 lg:p-16 relative overflow-hidden">
            {/* Decorative Corner */}
            <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-stone-300"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-stone-300"></div>

            <div className="relative z-10 text-center space-y-6">
              <div className="inline-block">
                <span className="font-serif text-3xl lg:text-4xl italic text-stone-800">
                  Your Style Horoscope
                </span>
                <div className="h-px bg-rose-300 mt-2"></div>
              </div>
              
              <p className="text-stone-600 font-light max-w-2xl mx-auto">
                Subscribe to receive personalized styling insights based on the season, 
                your preferences, and the stars above Paris.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="px-6 py-4 bg-stone-50 border border-stone-300 text-stone-800 placeholder-stone-400 text-sm tracking-wide focus:outline-none focus:border-stone-800 transition-colors w-full sm:w-80"
                />
                <button className="px-10 py-4 bg-stone-800 text-stone-50 text-xs tracking-widest uppercase hover:bg-stone-700 transition-colors w-full sm:w-auto">
                  Discover
                </button>
              </div>

              <p className="text-xs tracking-wider text-stone-500 pt-2">
                ✨ First subscribers receive an exclusive atelier tour invitation
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Saved Mood Board Counter */}
      {savedMoods.length > 0 && (
        <div className="fixed bottom-8 right-8 bg-stone-800 text-stone-50 px-6 py-3 rounded-full shadow-lg z-40">
          <span className="text-sm tracking-wide">
            {savedMoods.length} Mood{savedMoods.length > 1 ? 's' : ''} Saved
          </span>
        </div>
      )}
    </section>
  );
}
