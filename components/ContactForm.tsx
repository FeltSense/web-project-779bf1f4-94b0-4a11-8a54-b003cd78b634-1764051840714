'use client';

import React, { useState } from 'react';
import Image from 'next/image';

type StylePreference = 'classic' | 'modern' | 'romantic' | 'bold';
type Season = 'spring' | 'summer' | 'autumn' | 'winter';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [showStyleQuiz, setShowStyleQuiz] = useState(true);
  const [selectedStyle, setSelectedStyle] = useState<StylePreference | null>(null);
  const [selectedSeason, setSelectedSeason] = useState<Season | null>(null);
  const [showBell, setShowBell] = useState(true);
  const [bellTip, setBellTip] = useState(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.currentTarget);
    const formObject: any = {};
    formData.forEach((value, key) => { formObject[key] = value; });
    
    // Add style preferences to form data
    if (selectedStyle) formObject.stylePreference = selectedStyle;
    if (selectedSeason) formObject.seasonalMood = selectedSeason;
    
    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form_submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form_data: formObject,
          form_id: 'contact_form',
          project_id: '779bf1f4-94b0-4a11-8a54-b003cd78b634',
          founder_id: '',
          submitted_at: new Date().toISOString()
        })
      });
      if (!response.ok) throw new Error('Failed');
      setStatus('success');
    } catch (error) { 
      setStatus('error'); 
    }
  };

  const styleOptions = [
    { 
      id: 'classic' as StylePreference, 
      label: 'Classique Parisien', 
      description: 'Timeless elegance, neutral palettes, investment pieces',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=300&fit=crop'
    },
    { 
      id: 'modern' as StylePreference, 
      label: 'Moderne Minimal', 
      description: 'Clean lines, architectural silhouettes, monochrome',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=300&fit=crop'
    },
    { 
      id: 'romantic' as StylePreference, 
      label: 'Romantique', 
      description: 'Soft textures, delicate details, feminine draping',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=300&fit=crop'
    },
    { 
      id: 'bold' as StylePreference, 
      label: 'Audacieux', 
      description: 'Statement pieces, bold colors, experimental cuts',
      image: 'https://images.unsplash.com/photo-1558769132-cb1aea8f4b77?w=400&h=300&fit=crop'
    }
  ];

  const seasonalMoods = [
    { id: 'spring' as Season, label: 'Printemps', color: 'bg-rose-200', accent: 'border-rose-400' },
    { id: 'summer' as Season, label: 'Été', color: 'bg-amber-100', accent: 'border-amber-300' },
    { id: 'autumn' as Season, label: 'Automne', color: 'bg-orange-100', accent: 'border-orange-300' },
    { id: 'winter' as Season, label: 'Hiver', color: 'bg-stone-100', accent: 'border-stone-400' }
  ];

  const stylingTips = [
    "Layer textures for depth and sophistication",
    "Invest in quality basics that transcend trends",
    "Accessorize with intention, not excess",
    "Balance proportions for a harmonious silhouette",
    "Let one statement piece be the star",
    "Quality over quantity, always"
  ];

  const generateStyleHoroscope = () => {
    if (!selectedStyle || !selectedSeason) return null;
    
    const horoscopes: Record<string, string> = {
      'classic-spring': 'Your refined taste calls for soft cashmere in blush tones. This season, embrace timeless trench coats and delicate pearl accessories.',
      'classic-summer': 'Crisp linen and maritime stripes define your summer wardrobe. Think Riviera elegance with structured silhouettes.',
      'classic-autumn': 'Rich burgundy and camel tones await. Invest in a heritage wool coat and leather accessories that age beautifully.',
      'classic-winter': 'Monochrome sophistication is your forte. Layer luxe knits with tailored outerwear in charcoal and ivory.',
      'modern-spring': 'Clean lines meet soft pastels. Architectural blazers and minimalist jewelry create your perfect capsule.',
      'modern-summer': 'Breathable fabrics in stark white and black. Geometric shapes and contemporary cuts define your aesthetic.',
      'modern-autumn': 'Earthy minimalism takes center stage. Think structured silhouettes in caramel, olive, and stone.',
      'modern-winter': 'Monolithic elegance prevails. Oversized coats, sleek boots, and metallic accents complete your look.',
      'romantic-spring': 'Soft florals and flowing fabrics call to you. Embrace ruffles, lace details, and garden-inspired hues.',
      'romantic-summer': 'Ethereal whites and sunset pinks. Delicate embroidery and feminine draping create dreamy ensembles.',
      'romantic-autumn': 'Warm rose tones and velvet textures. Victorian-inspired details meet modern romance.',
      'romantic-winter': 'Luxurious in dusty mauve and soft grey. Faux fur, satin, and pearl embellishments add magic.',
      'bold-spring': 'Vibrant colors demand attention. Mix patterns fearlessly with statement accessories.',
      'bold-summer': 'Electric brights and experimental cuts. Push boundaries with unexpected color combinations.',
      'bold-autumn': 'Rich jewel tones and dramatic silhouettes. Emerald, sapphire, and ruby dominate your palette.',
      'bold-winter': 'Avant-garde meets opulence. Metallic finishes, bold prints, and architectural shapes reign.'
    };

    return horoscopes[`${selectedStyle}-${selectedSeason}`];
  };

  return (
    <section id="contact" className="relative min-h-screen bg-gradient-to-b from-white via-rose-50 to-amber-50 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 border border-stone-200 rounded-full opacity-20 transform -translate-x-1/2"></div>
      <div className="absolute bottom-40 right-20 w-96 h-96 border border-amber-200 rounded-full opacity-20"></div>
      
      {/* Floating Atelier Bell */}
      {showBell && (
        <div className="fixed bottom-8 right-8 z-50">
          <div className="relative group">
            <button
              onClick={() => {
                setBellTip((prev) => (prev + 1) % stylingTips.length);
              }}
              className="bg-stone-800 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:bg-stone-700 transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Styling tips"
            >
              <svg className="w-8 h-8 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            
            {/* Tip Bubble */}
            <div className="absolute bottom-20 right-0 w-72 bg-white p-4 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-stone-200">
              <p className="text-sm text-stone-700 italic font-light leading-relaxed">
                "{stylingTips[bellTip]}"
              </p>
              <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-stone-200 transform rotate-45"></div>
            </div>
          </div>
          
          <button
            onClick={() => setShowBell(false)}
            className="absolute -top-2 -right-2 bg-stone-800 text-white w-6 h-6 rounded-full text-xs hover:bg-stone-700 transition-colors"
            aria-label="Close styling assistant"
          >
            ×
          </button>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="w-24 h-px bg-stone-800 mx-auto mb-4"></div>
            <p className="text-sm tracking-[0.3em] text-stone-600 uppercase font-light">Rendez-vous</p>
          </div>
          <h2 className="text-6xl md:text-7xl font-light text-stone-800 mb-6 tracking-tight">
            Book Your<br />
            <span className="italic">Private Consultation</span>
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Begin your bespoke journey with a personalized style consultation. 
            Our ateliers await to craft your perfect ensemble.
          </p>
        </div>

        {/* Style Quiz Section */}
        {showStyleQuiz && (
          <div className="mb-20 animate-fade-in">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-light text-stone-800 mb-3">Discover Your Style Essence</h3>
              <p className="text-stone-600 font-light">Select your aesthetic preference to personalize your consultation</p>
            </div>

            {/* Style Options Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {styleOptions.map((option, index) => (
                <button
                  key={option.id}
                  onClick={() => setSelectedStyle(option.id)}
                  className={`group relative overflow-hidden bg-white rounded-sm transition-all duration-500 transform hover:scale-105 ${
                    selectedStyle === option.id ? 'ring-2 ring-stone-800 shadow-2xl' : 'shadow-lg hover:shadow-xl'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={option.image}
                      alt={option.label}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${
                      selectedStyle === option.id ? 'from-stone-900 via-stone-800/50' : 'from-stone-900/80 via-stone-800/30'
                    } to-transparent transition-all duration-500`}></div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <h4 className="text-xl font-light mb-2 tracking-wide">{option.label}</h4>
                    <p className="text-xs text-rose-200 font-light leading-relaxed">{option.description}</p>
                  </div>
                  
                  {selectedStyle === option.id && (
                    <div className="absolute top-4 right-4 bg-amber-100 text-stone-800 w-8 h-8 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Seasonal Mood Board */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-light text-stone-800 mb-3">Choose Your Seasonal Mood</h3>
              <p className="text-stone-600 font-light text-sm">Select the season that resonates with your current style inspiration</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {seasonalMoods.map((season) => (
                <button
                  key={season.id}
                  onClick={() => setSelectedSeason(season.id)}
                  className={`px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 ${
                    selectedSeason === season.id
                      ? `${season.color} border-2 ${season.accent} shadow-lg scale-105`
                      : `bg-white border border-stone-200 hover:${season.color}`
                  }`}
                >
                  <span className="text-stone-800 font-light tracking-wide">{season.label}</span>
                </button>
              ))}
            </div>

            {/* Style Horoscope */}
            {selectedStyle && selectedSeason && (
              <div className="max-w-3xl mx-auto bg-gradient-to-br from-amber-50 to-rose-50 p-8 rounded-sm border border-amber-200 mb-12 animate-fade-in">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">✨</div>
                  <div>
                    <h4 className="text-xl font-light text-stone-800 mb-3">Your Personal Style Forecast</h4>
                    <p className="text-stone-700 font-light leading-relaxed italic">
                      {generateStyleHoroscope()}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="text-center">
              <button
                onClick={() => setShowStyleQuiz(false)}
                disabled={!selectedStyle || !selectedSeason}
                className={`px-12 py-4 rounded-full transition-all duration-300 transform hover:scale-105 ${
                  selectedStyle && selectedSeason
                    ? 'bg-stone-800 text-white hover:bg-stone-700 shadow-lg'
                    : 'bg-stone-200 text-stone-400 cursor-not-allowed'
                }`}
              >
                Continue to Consultation Booking →
              </button>
            </div>
          </div>
        )}

        {/* Contact Form Section */}
        {!showStyleQuiz && (
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Form */}
            <div className="order-2 lg:order-1">
              <div className="bg-white p-10 rounded-sm shadow-xl border border-stone-100">
                {status === 'success' ? (
                  <div className="text-center py-12 animate-fade-in">
                    <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-stone-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-light text-stone-800 mb-4">Merci!</h3>
                    <p className="text-stone-600 font-light mb-6 leading-relaxed">
                      Your consultation request has been received. Our atelier will contact you within 24 hours to schedule your private appointment.
                    </p>
                    <button
                      onClick={() => {
                        setStatus('idle');
                        setShowStyleQuiz(true);
                        setSelectedStyle(null);
                        setSelectedSeason(null);
                      }}
                      className="text-stone-800 underline hover:text-stone-600 transition-colors font-light"
                    >
                      Book another consultation
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm tracking-wider uppercase text-stone-700 mb-2 font-light">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border-b-2 border-stone-200 focus:border-stone-800 outline-none transition-colors bg-transparent font-light"
                        placeholder="Claire Dubois"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm tracking-wider uppercase text-stone-700 mb-2 font-light">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border-b-2 border-stone-200 focus:border-stone-800 outline-none transition-colors bg-transparent font-light"
                        placeholder="claire@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm tracking-wider uppercase text-stone-700 mb-2 font-light">
                        Phone Number <span className="text-stone-400 normal-case">(Optional)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border-b-2 border-stone-200 focus:border-stone-800 outline-none transition-colors bg-transparent font-light"
                        placeholder="+33 1 23 45 67 89"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm tracking-wider uppercase text-stone-700 mb-2 font-light">
                        Consultation Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full px-4 py-3 border-b-2 border-stone-200 focus:border-stone-800 outline-none transition-colors bg-transparent font-light resize-none"
                        placeholder="Tell us about your style aspirations, upcoming events, or specific pieces you're seeking..."
                      ></textarea>
                    </div>

                    {/* Style Preferences Summary */}
                    {selectedStyle && selectedSeason && (
                      <div className="bg-rose-50 p-4 rounded-sm border border-rose-200">
                        <p className="text-xs tracking-wider uppercase text-stone-700 mb-2 font-light">Your Style Profile</p>
                        <div className="flex gap-3 text-sm text-stone-600">
                          <span className="bg-white px-3 py-1 rounded-full font-light">
                            {styleOptions.find(s => s.id === selectedStyle)?.label}
                          </span>
                          <span className="bg-white px-3 py-1 rounded-full font-light">
                            {seasonalMoods.find(s => s.id === selectedSeason)?.label}
                          </span>
                        </div>
                      </div>
                    )}

                    {status === 'error' && (
                      <div className="bg-red-50 border border-red-200 p-4 rounded-sm">
                        <p className="text-red-800 text-sm font-light">
                          Unable to submit. Please try again or contact us directly.
                        </p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full bg-stone-800 text-white py-4 rounded-full hover:bg-stone-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg font-light tracking-wide"
                    >
                      {status === 'loading' ? 'Submitting...' : 'Request Consultation'}
                    </button>

                    <button
                      type="button"
                      onClick={() => setShowStyleQuiz(true)}
                      className="w-full text-stone-600 py-2 hover:text-stone-800 transition-colors font-light text-sm"
                    >
                      ← Modify style preferences
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right Side - Information & Imagery */}
            <div className="order-1 lg:order-2 space-y-8">
              <div className="relative">
                <div className="absolute -top-8 -left-8 w-full h-full border border-amber-200 rounded-sm"></div>
                <div className="relative h-96 rounded-sm overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop"
                    alt="Atelier interior"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-br from-stone-800 to-stone-700 text-white p-8 rounded-sm">
                <h3 className="text-2xl font-light mb-6 tracking-wide">Atelier Information</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="text-amber-100 mt-1">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-light text-rose-200 text-sm mb-1">Location</p>
                      <p className="font-light">24 Rue de la Paix, 75002 Paris</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="text-amber-100 mt-1">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-light text-rose-200 text-sm mb-1">Hours</p>
                      <p className="font-light">Tuesday - Saturday: 10:00 - 19:00</p>
                      <p className="font-light text-sm text-rose-200">By appointment only</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="text-amber-100 mt-1">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-light text-rose-200 text-sm mb-1">Email</p>
                      <p className="font-light">rendez-vous@atelierluxe.fr</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-sm border border-amber-200">
                <h4 className="text-lg font-light text-stone-800 mb-3">What to Expect</h4>
                <ul className="space-y-2 text-sm text-stone-700 font-light">
                  <li className="flex gap-2">
                    <span className="text-amber-300">•</span>
                    <span>60-minute private consultation</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-300">•</span>
                    <span>Personalized style assessment</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-300">•</span>
                    <span>Curated collection viewing</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-300">•</span>
                    <span>Bespoke alterations available</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-300">•</span>
                    <span>Complimentary champagne service</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent"></div>
    </section>
  );
}