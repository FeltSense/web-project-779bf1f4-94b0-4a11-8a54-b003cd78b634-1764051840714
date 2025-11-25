"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, Heart, User, Scissors, ShoppingBag, Crown, Bell, BookOpen, Ruler, Share2, Download } from 'lucide-react';

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [savedMoodItems, setSavedMoodItems] = useState<string[]>([]);
  const [showStyleAssistant, setShowStyleAssistant] = useState(false);

  const toggleMoodItem = (id: string) => {
    setSavedMoodItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const moodBoardItems = [
    {
      id: 'autumn-elegance',
      title: 'Autumn Elegance',
      category: 'Seasonal Collection',
      size: 'large',
      image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80',
      tip: 'Rich textures and earthy tones define this season\'s narrative',
      icon: Crown
    },
    {
      id: 'accessories',
      title: 'Signature Accessories',
      category: 'Curated Selection',
      size: 'medium',
      image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&q=80',
      tip: 'The finishing touch to every ensemble',
      icon: ShoppingBag
    },
    {
      id: 'bespoke',
      title: 'Bespoke Tailoring',
      category: 'Atelier Service',
      size: 'medium',
      image: 'https://images.unsplash.com/photo-1558769132-cb1aea3c8565?w=600&q=80',
      tip: 'Made to measure perfection in 14 days',
      icon: Scissors
    },
    {
      id: 'designer-spotlight',
      title: 'Designer Spotlight',
      category: 'Featured Collection',
      size: 'tall',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80',
      tip: 'Exclusive pieces from emerging ateliers',
      icon: Sparkles
    },
    {
      id: 'styling-consultation',
      title: 'Personal Styling',
      category: 'Concierge Service',
      size: 'wide',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80',
      tip: 'Your dedicated style curator awaits',
      icon: User
    },
    {
      id: 'lookbook',
      title: 'Spring Lookbook',
      category: 'Editorial',
      size: 'medium',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80',
      tip: 'Ethereal silhouettes for the new season',
      icon: BookOpen
    },
    {
      id: 'shoes',
      title: 'Footwear Atelier',
      category: 'Collection',
      size: 'small',
      image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&q=80',
      tip: 'From runway to sidewalk with grace',
      icon: Crown
    },
    {
      id: 'size-guide',
      title: 'Style Guide',
      category: 'Atelier Resource',
      size: 'small',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&q=80',
      tip: 'Illustrated tutorials for perfect fit',
      icon: Ruler
    }
  ];

  const getSizeClasses = (size: string) => {
    switch(size) {
      case 'large':
        return 'col-span-2 row-span-2';
      case 'tall':
        return 'row-span-2';
      case 'wide':
        return 'col-span-2';
      case 'medium':
        return 'col-span-1 row-span-1';
      case 'small':
        return 'col-span-1 row-span-1';
      default:
        return 'col-span-1 row-span-1';
    }
  };

  return (
    <section id="services" className="relative bg-rose-50 py-24 lg:py-32 overflow-hidden">
      {/* Delicate line work background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-px h-full bg-stone-800"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-stone-800"></div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-stone-800"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-stone-800"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Header */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="flex items-start justify-between">
            <div className="max-w-2xl">
              <p className="text-stone-800 text-sm tracking-[0.3em] uppercase mb-4 font-light">
                Atelier Services
              </p>
              <h2 className="text-5xl lg:text-7xl font-light text-stone-800 mb-6 leading-[0.9]">
                Curated
                <span className="block mt-2 italic font-serif">Collections</span>
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed max-w-xl">
                An intimate exploration of seasonal narratives, artisanal craftsmanship, 
                and timeless elegance. Each piece tells a story.
              </p>
            </div>
            
            {/* Mood Board Actions */}
            <div className="hidden lg:flex flex-col gap-3">
              <button 
                className="group flex items-center gap-2 px-6 py-3 bg-stone-800 text-amber-100 text-sm tracking-wider hover:bg-stone-700 transition-all duration-300"
                onClick={() => alert(`${savedMoodItems.length} items in your mood board!`)}
              >
                <Heart className="w-4 h-4" />
                <span>{savedMoodItems.length}</span>
              </button>
              <button className="flex items-center gap-2 px-6 py-3 border border-stone-800 text-stone-800 text-sm tracking-wider hover:bg-stone-800 hover:text-amber-100 transition-all duration-300">
                <Share2 className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 px-6 py-3 border border-stone-800 text-stone-800 text-sm tracking-wider hover:bg-stone-800 hover:text-amber-100 transition-all duration-300">
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Masonry Mood Board Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[280px]">
            {moodBoardItems.map((item) => {
              const Icon = item.icon;
              const isHovered = hoveredCard === item.id;
              const isSaved = savedMoodItems.includes(item.id);

              return (
                <div
                  key={item.id}
                  className={`group relative overflow-hidden bg-white ${getSizeClasses(item.size)} cursor-pointer`}
                  onMouseEnter={() => setHoveredCard(item.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Image with parallax effect */}
                  <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                  </div>

                  {/* Save to Mood Board Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMoodItem(item.id);
                    }}
                    className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-sm hover:bg-amber-100 transition-all duration-300 group/heart"
                  >
                    <Heart 
                      className={`w-5 h-5 transition-all duration-300 ${
                        isSaved 
                          ? 'fill-stone-800 text-stone-800' 
                          : 'text-stone-800 group-hover/heart:scale-110'
                      }`} 
                    />
                  </button>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-100/95 backdrop-blur-sm">
                      <Icon className="w-3 h-3 text-stone-800" />
                      <span className="text-xs tracking-wider uppercase text-stone-800">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                    <div className={`transform transition-all duration-500 ${
                      isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}>
                      <p className="text-rose-200 text-sm mb-2 italic font-light">
                        {item.tip}
                      </p>
                    </div>
                    
                    <h3 className="text-white text-2xl lg:text-3xl font-light mb-1 transform transition-transform duration-500 group-hover:-translate-y-2">
                      {item.title}
                    </h3>
                    
                    <div className={`w-12 h-px bg-amber-100 mt-2 transform origin-left transition-all duration-500 ${
                      isHovered ? 'scale-x-150' : 'scale-x-100'
                    }`}></div>
                  </div>

                  {/* Hover Overlay with Action */}
                  <div className={`absolute inset-0 flex items-center justify-center z-20 transition-opacity duration-500 ${
                    isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}>
                    <button className="px-8 py-3 bg-white text-stone-800 text-sm tracking-[0.2em] uppercase hover:bg-amber-100 transition-colors duration-300 transform hover:scale-105">
                      Explore
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Featured Services - Editorial Strip */}
        <div className="max-w-7xl mx-auto mt-20 pt-20 border-t border-stone-800/10">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {/* Service 1 */}
            <div className="group">
              <div className="mb-6 relative">
                <div className="w-16 h-16 border border-stone-800 flex items-center justify-center group-hover:bg-stone-800 transition-colors duration-300">
                  <User className="w-8 h-8 text-stone-800 group-hover:text-amber-100 transition-colors duration-300" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-16 h-16 border border-amber-100"></div>
              </div>
              <h3 className="text-2xl font-light text-stone-800 mb-3">Style Profiles</h3>
              <p className="text-stone-600 leading-relaxed mb-4">
                Complete your style DNA assessment to receive personalized recommendations 
                curated by our atelier stylists.
              </p>
              <button className="text-stone-800 text-sm tracking-wider uppercase hover:text-amber-100 hover:bg-stone-800 px-4 py-2 transition-all duration-300 inline-flex items-center gap-2 border border-stone-800">
                Begin Assessment
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </div>

            {/* Service 2 */}
            <div className="group">
              <div className="mb-6 relative">
                <div className="w-16 h-16 border border-stone-800 flex items-center justify-center group-hover:bg-stone-800 transition-colors duration-300">
                  <Ruler className="w-8 h-8 text-stone-800 group-hover:text-amber-100 transition-colors duration-300" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-16 h-16 border border-amber-100"></div>
              </div>
              <h3 className="text-2xl font-light text-stone-800 mb-3">Fit & Styling Guide</h3>
              <p className="text-stone-600 leading-relaxed mb-4">
                Interactive tutorials and size guidance tailored to your silhouette, 
                ensuring every piece fits like it was made for you.
              </p>
              <button className="text-stone-800 text-sm tracking-wider uppercase hover:text-amber-100 hover:bg-stone-800 px-4 py-2 transition-all duration-300 inline-flex items-center gap-2 border border-stone-800">
                View Guide
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </div>

            {/* Service 3 */}
            <div className="group">
              <div className="mb-6 relative">
                <div className="w-16 h-16 border border-stone-800 flex items-center justify-center group-hover:bg-stone-800 transition-colors duration-300">
                  <BookOpen className="w-8 h-8 text-stone-800 group-hover:text-amber-100 transition-colors duration-300" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-16 h-16 border border-amber-100"></div>
              </div>
              <h3 className="text-2xl font-light text-stone-800 mb-3">Lookbook Gallery</h3>
              <p className="text-stone-600 leading-relaxed mb-4">
                Seasonal editorials and styling inspiration from our creative studio, 
                featuring exclusive designer collaborations.
              </p>
              <button className="text-stone-800 text-sm tracking-wider uppercase hover:text-amber-100 hover:bg-stone-800 px-4 py-2 transition-all duration-300 inline-flex items-center gap-2 border border-stone-800">
                Browse Collections
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Newsletter with Style Horoscope */}
        <div className="max-w-4xl mx-auto mt-24 bg-stone-800 p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-200/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center">
            <Sparkles className="w-12 h-12 text-amber-100 mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-light text-white mb-4">
              Your Style Horoscope Awaits
            </h3>
            <p className="text-rose-200 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Subscribe to receive a personalized style forecast each season, 
              curated to your aesthetic preferences and fashion destiny.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-4 bg-white/10 border border-white/20 text-white placeholder-rose-200/60 focus:outline-none focus:border-amber-100 transition-colors duration-300"
              />
              <button className="px-8 py-4 bg-amber-100 text-stone-800 text-sm tracking-[0.2em] uppercase hover:bg-white transition-colors duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
            
            <p className="text-rose-200/60 text-xs mt-4 tracking-wide">
              Unsubscribe anytime. Your information is sacred to us.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Style Assistant Bell */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => setShowStyleAssistant(!showStyleAssistant)}
          className="group relative w-16 h-16 bg-stone-800 text-amber-100 rounded-full shadow-2xl hover:bg-stone-700 transition-all duration-300 flex items-center justify-center hover:scale-110"
        >
          <Bell className={`w-6 h-6 transition-transform duration-300 ${showStyleAssistant ? 'rotate-12' : ''}`} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-100 rounded-full animate-pulse"></span>
        </button>

        {/* Assistant Tooltip */}
        {showStyleAssistant && (
          <div className="absolute bottom-20 right-0 w-64 bg-white shadow-2xl p-6 border border-stone-800/10 animate-in slide-in-from-bottom-4 duration-300">
            <button 
              onClick={() => setShowStyleAssistant(false)}
              className="absolute top-2 right-2 text-stone-400 hover:text-stone-800"
            >
              ✕
            </button>
            <h4 className="text-lg font-light text-stone-800 mb-2">Atelier Concierge</h4>
            <p className="text-stone-600 text-sm mb-4 leading-relaxed">
              How may we assist your style journey today?
            </p>
            <div className="space-y-2">
              <button className="w-full text-left px-4 py-2 text-sm text-stone-700 hover:bg-amber-100/30 transition-colors duration-200">
                Size guidance
              </button>
              <button className="w-full text-left px-4 py-2 text-sm text-stone-700 hover:bg-amber-100/30 transition-colors duration-200">
                Styling tips
              </button>
              <button className="w-full text-left px-4 py-2 text-sm text-stone-700 hover:bg-amber-100/30 transition-colors duration-200">
                Book consultation
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}