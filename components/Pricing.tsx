"use client";

import Image from "next/image";
import { useState } from "react";

export default function Pricing() {
  const [hoveredExperience, setHoveredExperience] = useState<string | null>(null);
  const [selectedSeason, setSelectedSeason] = useState("printemps");

  const atelierExperiences = [
    {
      title: "La Consultation",
      subtitle: "Essential Styling Session",
      description: "A refined introduction to personal styling",
      features: [
        "60-minute private consultation",
        "Seasonal wardrobe assessment",
        "Curated lookbook (15 pieces)",
        "Style profile documentation",
        "Email follow-up support"
      ],
      illustration: "Sketch of elegant woman with measuring tape",
      mood: "Understated elegance"
    },
    {
      title: "L'Atelier",
      subtitle: "Complete Transformation",
      description: "An immersive journey through your style renaissance",
      features: [
        "Everything in La Consultation",
        "Full closet editorial curation",
        "Personal shopping accompaniment",
        "Seasonal lookbook updates (4x yearly)",
        "24/7 styling concierge access",
        "Exclusive atelier events invitation"
      ],
      illustration: "Parisian atelier interior sketch",
      mood: "Editorial sophistication",
      featured: true
    },
    {
      title: "Le Rendez-vous",
      subtitle: "Quick Style Refresh",
      description: "A moment of inspiration for the modern muse",
      features: [
        "30-minute express consultation",
        "Outfit crisis resolution",
        "Event styling guidance",
        "Quick wardrobe edit",
        "Digital style notes"
      ],
      illustration: "Coffee cup with fashion sketches",
      mood: "Effortless chic"
    }
  ];

  const seasonalMoods = {
    printemps: {
      name: "Printemps",
      colors: ["Soft ivory", "Blush rose", "Sage green"],
      vibe: "Renewal & Romance",
      image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80"
    },
    été: {
      name: "Été",
      colors: ["Linen white", "Terracotta", "Azure blue"],
      vibe: "Lightness & Freedom",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80"
    },
    automne: {
      name: "Automne",
      colors: ["Camel", "Burgundy", "Forest green"],
      vibe: "Richness & Depth",
      image: "https://images.unsplash.com/photo-1509319117535-c4d9d7e4e1c5?w=800&q=80"
    },
    hiver: {
      name: "Hiver",
      colors: ["Charcoal", "Cream", "Deep navy"],
      vibe: "Structure & Warmth",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80"
    }
  };

  return (
    <section id="pricing" className="relative bg-rose-200/30 py-32 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 border border-stone-800/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] border border-stone-800/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Editorial Header */}
        <div className="max-w-3xl mb-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-stone-800"></div>
            <span className="text-xs tracking-[0.3em] text-stone-800 uppercase">Atelier Experiences</span>
          </div>
          <h2 className="text-7xl md:text-8xl font-light text-stone-800 mb-6 leading-[0.9] tracking-tight">
            Your Style
            <span className="italic font-serif block mt-2">Renaissance</span>
          </h2>
          <p className="text-lg text-stone-800/70 leading-relaxed max-w-xl">
            Each consultation is a curated journey through personal transformation, 
            where Parisian elegance meets your unique narrative.
          </p>
        </div>

        {/* Seasonal Mood Board */}
        <div className="mb-32">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-light text-stone-800">Seasonal Inspirations</h3>
            <div className="flex gap-3">
              {Object.entries(seasonalMoods).map(([key, season]) => (
                <button
                  key={key}
                  onClick={() => setSelectedSeason(key)}
                  className={`px-4 py-2 text-xs tracking-wider uppercase transition-all ${
                    selectedSeason === key
                      ? "bg-stone-800 text-rose-200"
                      : "bg-transparent text-stone-800 border border-stone-800/20 hover:border-stone-800"
                  }`}
                >
                  {season.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-12 gap-6 items-center">
            <div className="col-span-7 relative h-[400px] overflow-hidden">
              <Image
                src={seasonalMoods[selectedSeason as keyof typeof seasonalMoods].image}
                alt={seasonalMoods[selectedSeason as keyof typeof seasonalMoods].name}
                fill
                className="object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-rose-200/50 to-transparent"></div>
            </div>
            
            <div className="col-span-5 space-y-6">
              <div>
                <p className="text-xs tracking-[0.3em] text-stone-800/50 uppercase mb-2">Palette</p>
                <div className="flex gap-2 mb-4">
                  {seasonalMoods[selectedSeason as keyof typeof seasonalMoods].colors.map((color, idx) => (
                    <div key={idx} className="w-16 h-16 bg-amber-100 border border-stone-800/10"></div>
                  ))}
                </div>
                {seasonalMoods[selectedSeason as keyof typeof seasonalMoods].colors.map((color, idx) => (
                  <p key={idx} className="text-sm text-stone-800/70">{color}</p>
                ))}
              </div>
              <div>
                <p className="text-xs tracking-[0.3em] text-stone-800/50 uppercase mb-2">Essence</p>
                <p className="text-2xl font-light text-stone-800">
                  {seasonalMoods[selectedSeason as keyof typeof seasonalMoods].vibe}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards - Asymmetrical Editorial Layout */}
        <div className="grid grid-cols-12 gap-8 mb-32">
          {/* Left Column - Two Stacked */}
          <div className="col-span-4 space-y-8">
            {[atelierExperiences[0], atelierExperiences[2]].map((exp, idx) => (
              <div
                key={exp.title}
                className={`bg-white p-8 transition-all duration-500 ${
                  hoveredExperience === exp.title ? "shadow-2xl -translate-y-2" : "shadow-lg"
                }`}
                onMouseEnter={() => setHoveredExperience(exp.title)}
                onMouseLeave={() => setHoveredExperience(null)}
              >
                <div className="mb-6">
                  <p className="text-xs tracking-[0.3em] text-stone-800/50 uppercase mb-2">
                    {exp.mood}
                  </p>
                  <h3 className="text-3xl font-light text-stone-800 mb-1">{exp.title}</h3>
                  <p className="text-sm text-stone-800/60 italic">{exp.subtitle}</p>
                </div>

                <div className="w-full h-32 bg-amber-100/30 mb-6 flex items-center justify-center border border-stone-800/5">
                  <p className="text-xs text-stone-800/40 italic">{exp.illustration}</p>
                </div>

                <p className="text-sm text-stone-800/70 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {exp.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-stone-800/70">
                      <span className="text-amber-100 mt-1">●</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-stone-800/10">
                  <p className="text-xs tracking-[0.3em] text-stone-800/50 uppercase mb-2">Investment</p>
                  <p className="text-4xl font-light text-stone-800">$29</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Featured Experience */}
          <div className="col-span-8">
            <div
              className="bg-stone-800 text-rose-200 p-12 h-full relative overflow-hidden group"
              onMouseEnter={() => setHoveredExperience(atelierExperiences[1].title)}
              onMouseLeave={() => setHoveredExperience(null)}
            >
              {/* Decorative Corner Lines */}
              <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-rose-200/20"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-rose-200/20"></div>
              
              <div className="absolute top-8 right-8 bg-amber-100 text-stone-800 px-4 py-2 text-xs tracking-[0.3em] uppercase">
                Signature
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-8">
                  <p className="text-xs tracking-[0.3em] text-rose-200/50 uppercase mb-3">
                    {atelierExperiences[1].mood}
                  </p>
                  <h3 className="text-6xl font-light text-rose-200 mb-2">
                    {atelierExperiences[1].title}
                  </h3>
                  <p className="text-lg text-rose-200/70 italic">{atelierExperiences[1].subtitle}</p>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-8 flex-grow">
                  <div>
                    <div className="w-full h-48 bg-rose-200/10 mb-6 flex items-center justify-center border border-rose-200/10 group-hover:border-rose-200/30 transition-colors">
                      <p className="text-xs text-rose-200/40 italic text-center px-4">
                        {atelierExperiences[1].illustration}
                      </p>
                    </div>
                    <p className="text-sm text-rose-200/80 leading-relaxed">
                      {atelierExperiences[1].description}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs tracking-[0.3em] text-rose-200/50 uppercase mb-4">
                      Your Journey Includes
                    </p>
                    <ul className="space-y-3">
                      {atelierExperiences[1].features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-rose-200/80">
                          <span className="text-amber-100 mt-1">●</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-end justify-between pt-8 border-t border-rose-200/20">
                  <div>
                    <p className="text-xs tracking-[0.3em] text-rose-200/50 uppercase mb-2">Investment</p>
                    <p className="text-6xl font-light text-rose-200">$29</p>
                    <p className="text-xs text-rose-200/50 mt-2 italic">Complete transformation experience</p>
                  </div>
                  
                  <button
                    onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
                    className="bg-rose-200 text-stone-800 px-12 py-4 text-sm tracking-[0.2em] uppercase hover:bg-amber-100 transition-all duration-300 group-hover:translate-x-2"
                  >
                    Reserve Your Session
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Value Proposition Grid */}
        <div className="grid grid-cols-4 gap-12 mb-32 py-16 border-t border-b border-stone-800/10">
          <div>
            <p className="text-4xl font-light text-stone-800 mb-3">$29</p>
            <p className="text-xs tracking-[0.3em] text-stone-800/50 uppercase mb-2">Accessible Luxury</p>
            <p className="text-sm text-stone-800/70 leading-relaxed">
              Premier styling expertise at a fraction of traditional consultation fees
            </p>
          </div>
          <div>
            <p className="text-4xl font-light text-stone-800 mb-3">100%</p>
            <p className="text-xs tracking-[0.3em] text-stone-800/50 uppercase mb-2">Satisfaction</p>
            <p className="text-sm text-stone-800/70 leading-relaxed">
              Guaranteed transformation or complimentary follow-up session
            </p>
          </div>
          <div>
            <p className="text-4xl font-light text-stone-800 mb-3">48hr</p>
            <p className="text-xs tracking-[0.3em] text-stone-800/50 uppercase mb-2">Fast Booking</p>
            <p className="text-sm text-stone-800/70 leading-relaxed">
              Priority scheduling with our atelier styling team
            </p>
          </div>
          <div>
            <p className="text-4xl font-light text-stone-800 mb-3">∞</p>
            <p className="text-xs tracking-[0.3em] text-stone-800/50 uppercase mb-2">Lasting Impact</p>
            <p className="text-sm text-stone-800/70 leading-relaxed">
              Style foundations that evolve with you through every season
            </p>
          </div>
        </div>

        {/* CTA Section with Editorial Flair */}
        <div className="grid grid-cols-12 gap-12 items-center">
          <div className="col-span-7">
            <div className="relative h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1558769132-cb1aea041c5b?w=800&q=80"
                alt="Atelier styling session"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-800/50 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-xs tracking-[0.3em] uppercase mb-2">Client Testimonial</p>
                <p className="text-xl font-light italic leading-relaxed max-w-md">
                  "This wasn't just styling—it was discovering who I've always been meant to be."
                </p>
                <p className="text-sm mt-3 opacity-70">— Sophie M., Paris</p>
              </div>
            </div>
          </div>

          <div className="col-span-5">
            <h3 className="text-5xl font-light text-stone-800 mb-6 leading-tight">
              Begin Your
              <span className="italic font-serif block mt-1">Transformation</span>
            </h3>
            <p className="text-stone-800/70 mb-8 leading-relaxed">
              Every journey starts with a single step. Every style renaissance begins with 
              one consultation. For just $29, discover the wardrobe that's been waiting for you.
            </p>
            
            <button
              onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
              className="w-full bg-stone-800 text-rose-200 px-8 py-6 text-sm tracking-[0.2em] uppercase hover:bg-stone-700 transition-all duration-300 mb-4 group relative overflow-hidden"
            >
              <span className="relative z-10">Book Your Atelier Experience — $29</span>
              <div className="absolute inset-0 bg-amber-100 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="absolute inset-0 flex items-center justify-center text-stone-800 tracking-[0.2em] uppercase text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                Reserve Now
              </span>
            </button>
            
            <p className="text-xs text-stone-800/50 text-center italic">
              Limited appointments available each month
            </p>
          </div>
        </div>

        {/* Floating Atelier Bell */}
        <div className="fixed bottom-8 right-8 z-50 group">
          <div className="relative">
            <button className="w-16 h-16 bg-stone-800 rounded-full flex items-center justify-center shadow-2xl hover:bg-amber-100 transition-all duration-300 group-hover:scale-110">
              <svg className="w-6 h-6 text-rose-200 group-hover:text-stone-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            
            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-4 w-64 bg-white shadow-2xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none">
              <p className="text-xs tracking-[0.3em] text-stone-800/50 uppercase mb-2">Styling Tip</p>
              <p className="text-sm text-stone-800/70 leading-relaxed mb-3">
                Invest in timeless pieces that transcend trends. True style is eternal.
              </p>
              <p className="text-xs text-stone-800/50 italic">— Your Atelier Team</p>
              <div className="absolute bottom-0 right-8 w-3 h-3 bg-white transform rotate-45 translate-y-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}