'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Isabelle Chen',
    location: 'New York',
    role: 'Creative Director',
    avatar: 'https://i.pravatar.cc/150?img=47',
    beforeImage: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
    quote: 'I used to hide behind oversized silhouettes, afraid to embrace structure. The atelier didn\'t just dress me—they revealed a confidence I didn\'t know existed.',
    styleEvolution: 'From Safe Minimalist to Bold Architectural',
    transformationNote: 'Discovered power in tailoring & asymmetry',
    season: 'Spring 2024',
    favoritepiece: 'Sculptural Linen Blazer'
  },
  {
    id: 2,
    name: 'Margaux Dubois',
    location: 'Paris',
    role: 'Art Curator',
    avatar: 'https://i.pravatar.cc/150?img=32',
    beforeImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80',
    quote: 'Every piece tells a story. The atelier understood that my wardrobe isn\'t just clothing—it\'s a curated narrative of who I\'m becoming.',
    styleEvolution: 'From Classic Elegance to Artistic Expression',
    transformationNote: 'Embraced color, texture & unexpected pairings',
    season: 'Autumn 2023',
    favoritepiece: 'Hand-Dyed Silk Trench'
  },
  {
    id: 3,
    name: 'Sofia Ramirez',
    location: 'Barcelona',
    role: 'Brand Strategist',
    avatar: 'https://i.pravatar.cc/150?img=24',
    beforeImage: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80',
    quote: 'The transformation wasn\'t about following trends—it was about finding pieces that made me feel like the protagonist of my own story.',
    styleEvolution: 'From Corporate Uniform to Effortless Sophistication',
    transformationNote: 'Learned the art of elevated ease & intentional styling',
    season: 'Winter 2024',
    favoritepiece: 'Cashmere Wrap Coat'
  }
];

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [showBefore, setShowBefore] = useState(false);

  return (
    <section id="testimonials" className="relative bg-gradient-to-b from-white via-rose-50/30 to-white py-32 overflow-hidden">
      {/* Decorative Elements - French Atelier Lines */}
      <div className="absolute top-20 left-0 w-px h-64 bg-gradient-to-b from-transparent via-stone-300 to-transparent opacity-40"></div>
      <div className="absolute bottom-20 right-0 w-px h-64 bg-gradient-to-b from-transparent via-stone-300 to-transparent opacity-40"></div>
      
      {/* Floating Typography */}
      <div className="absolute top-10 right-10 text-[120px] font-serif text-rose-200/20 leading-none select-none pointer-events-none">
        "
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Editorial Header */}
        <div className="mb-20 max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-stone-800"></div>
            <span className="text-xs tracking-[0.3em] text-stone-600 uppercase">Style Chronicles</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-light text-stone-800 mb-4 leading-tight">
            Confidence
            <span className="italic font-serif block text-rose-900/70">Transformations</span>
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed">
            Intimate portraits of style evolution—where each client's journey becomes an editorial story of self-discovery and sartorial awakening.
          </p>
        </div>

        {/* Main Editorial Grid */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          {/* Left: Image Comparison */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative aspect-[4/5] bg-stone-100 overflow-hidden group">
              {/* Before/After Images with Fabric Layer Effect */}
              <div className="relative w-full h-full">
                <Image
                  src={showBefore ? testimonials[activeTestimonial].beforeImage : testimonials[activeTestimonial].afterImage}
                  alt={`${testimonials[activeTestimonial].name} style transformation`}
                  fill
                  className="object-cover transition-all duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
                
                {/* Overlay Texture */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Toggle Button - Styled as Fabric Swatch Tag */}
              <button
                onClick={() => setShowBefore(!showBefore)}
                className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm px-6 py-3 text-xs tracking-widest uppercase text-stone-800 hover:bg-amber-100 transition-all duration-300 shadow-lg border border-stone-200"
              >
                {showBefore ? 'After' : 'Before'}
              </button>

              {/* Style Label - Top Corner */}
              <div className="absolute top-6 left-6 bg-stone-800/90 backdrop-blur-sm px-4 py-2 text-xs text-amber-100 tracking-wider">
                {testimonials[activeTestimonial].season}
              </div>
            </div>

            {/* Style Evolution Details */}
            <div className="bg-rose-200/20 border border-rose-200/40 p-6 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs tracking-widest text-stone-600 uppercase mb-1">Style Evolution</p>
                  <p className="text-sm text-stone-800 font-light">{testimonials[activeTestimonial].styleEvolution}</p>
                </div>
              </div>
              <div className="h-px bg-rose-300/50"></div>
              <div>
                <p className="text-xs tracking-widest text-stone-600 uppercase mb-1">Transformation Note</p>
                <p className="text-sm text-stone-800 italic">{testimonials[activeTestimonial].transformationNote}</p>
              </div>
              <div>
                <p className="text-xs tracking-widest text-stone-600 uppercase mb-1">Signature Piece</p>
                <p className="text-sm text-stone-800 font-medium">{testimonials[activeTestimonial].favoritepiece}</p>
              </div>
            </div>
          </div>

          {/* Right: Testimonial Content */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
            {/* Quote Mark */}
            <div className="text-7xl font-serif text-rose-200 leading-none">"</div>

            {/* Quote */}
            <blockquote className="text-2xl lg:text-3xl font-light text-stone-800 leading-relaxed -mt-4">
              {testimonials[activeTestimonial].quote}
            </blockquote>

            {/* Client Profile */}
            <div className="flex items-center gap-4 pt-6 border-t border-stone-300">
              <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-amber-100 ring-offset-4">
                <Image
                  src={testimonials[activeTestimonial].avatar}
                  alt={testimonials[activeTestimonial].name}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div>
                <p className="text-lg font-medium text-stone-800">{testimonials[activeTestimonial].name}</p>
                <p className="text-sm text-stone-600">{testimonials[activeTestimonial].role}</p>
                <p className="text-xs text-stone-500 tracking-wider">{testimonials[activeTestimonial].location}</p>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex gap-3 pt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`transition-all duration-300 ${
                    activeTestimonial === index
                      ? 'w-12 h-1 bg-stone-800'
                      : 'w-8 h-1 bg-stone-300 hover:bg-stone-400'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom: Mini Editorial Cards - Other Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 pt-16 border-t border-stone-200">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setActiveTestimonial(index)}
              className={`text-left group transition-all duration-500 ${
                activeTestimonial === index ? 'opacity-40 pointer-events-none' : 'opacity-100 hover:opacity-90'
              }`}
            >
              <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-stone-100">
                <Image
                  src={testimonial.afterImage}
                  alt={`${testimonial.name} style`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-amber-100/0 group-hover:bg-amber-100/20 transition-colors duration-500"></div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="32px"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-stone-800">{testimonial.name}</p>
                  </div>
                </div>
                <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="text-xs text-stone-500 tracking-wider pt-2">
                  {testimonial.season}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Call to Action - Editorial Style */}
        <div className="mt-24 text-center max-w-xl mx-auto">
          <div className="mb-6">
            <div className="w-12 h-px bg-stone-400 mx-auto mb-6"></div>
            <p className="text-sm tracking-[0.2em] text-stone-600 uppercase mb-4">Begin Your Journey</p>
            <h3 className="text-3xl font-light text-stone-800 mb-4">
              Your Style Evolution
              <span className="block italic font-serif text-rose-900/70">Awaits</span>
            </h3>
          </div>
          <button className="group relative px-10 py-4 bg-stone-800 text-amber-100 text-sm tracking-widest uppercase overflow-hidden hover:bg-stone-900 transition-colors duration-300">
            <span className="relative z-10">Book a Consultation</span>
            <div className="absolute inset-0 bg-amber-100 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            <span className="absolute inset-0 flex items-center justify-center text-stone-800 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 tracking-widest text-sm">
              Book a Consultation
            </span>
          </button>
          <p className="text-xs text-stone-500 mt-4 tracking-wide">Complimentary styling session included</p>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent"></div>
    </section>
  </button>);
}
