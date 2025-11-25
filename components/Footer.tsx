'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Instagram, Mail, MapPin, Phone, Bell, Star, Sparkles, Heart } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [stylePreference, setStylePreference] = useState('');
  const [horoscope, setHoroscope] = useState('');
  const [showBell, setShowBell] = useState(true);
  const [bellMessage, setBellMessage] = useState('');

  // Instagram feed showcase
  const instagramFeed = [
    { id: 1, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=400&fit=crop', caption: '@amelie.style' },
    { id: 2, image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&h=400&fit=crop', caption: '@chic.paris' },
    { id: 3, image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=400&fit=crop', caption: '@la.mode' },
    { id: 4, image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=400&fit=crop', caption: '@atelier.muse' },
    { id: 5, image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop', caption: '@style.diary' },
    { id: 6, image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&h=400&fit=crop', caption: '@luxe.edit' },
  ];

  const styleHoroscopes = {
    minimalist: "Your celestial style alignment reveals a refined palate for clean lines and timeless silhouettes. This season favors architectural pieces in neutral tones with unexpected textural elements.",
    romantic: "The stars suggest flowing fabrics and delicate details await you. Embrace soft rose tones and vintage-inspired pieces that tell a story of Parisian romance.",
    bold: "Your fashion constellation points to daring choices and statement pieces. This season calls for rich jewel tones and sculptural designs that command attention.",
    classic: "Timeless elegance is written in your style stars. Invest in heritage pieces with impeccable tailoring that transcend fleeting trends.",
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (stylePreference && email) {
      const horoscopeText = styleHoroscopes[stylePreference as keyof typeof styleHoroscopes];
      setHoroscope(horoscopeText);
    }
  };

  const handleBellClick = () => {
    const tips = [
      "Styling Tip: Layer delicate chains at varying lengths for effortless elegance.",
      "Atelier Secret: A silk scarf tied to your handbag adds instant Parisian charm.",
      "Today's Muse: Consider the 60/40 rule - 60% classic, 40% trend for timeless style.",
      "Curator's Choice: Neutral tones with one unexpected color creates editorial impact.",
    ];
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    setBellMessage(randomTip);
    
    setTimeout(() => {
      setBellMessage('');
    }, 5000);
  };

  return (
    <footer className="relative bg-stone-900 text-rose-200 overflow-hidden">
      {/* Decorative top border - delicate line work */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-100 to-transparent"></div>
      
      {/* Floating Style Assistant Bell */}
      {showBell && (
        <div className="fixed bottom-8 right-8 z-50">
          <button
            onClick={handleBellClick}
            className="group relative bg-stone-800 hover:bg-amber-100 p-4 rounded-full shadow-2xl transition-all duration-500 hover:scale-110 hover:rotate-12"
            aria-label="Style Assistant"
          >
            <Bell className="w-6 h-6 text-rose-200 group-hover:text-stone-800 transition-colors" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-100 rounded-full animate-pulse"></span>
          </button>
          
          {bellMessage && (
            <div className="absolute bottom-20 right-0 w-72 bg-stone-800 border border-amber-100 p-4 rounded-lg shadow-2xl animate-fade-in">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-100 flex-shrink-0 mt-1" />
                <p className="text-sm text-rose-200 leading-relaxed">{bellMessage}</p>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content - Asymmetrical Layout */}
        <div className="pt-16 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            
            {/* Left Column - Brand & Newsletter (Spans 5 columns) */}
            <div className="lg:col-span-5 space-y-8">
              {/* Brand */}
              <div>
                <h2 className="text-3xl font-light tracking-wider text-amber-100 mb-4">
                  ATELIER LUXE
                </h2>
                <p className="text-sm leading-relaxed max-w-md font-light">
                  A digital maison where timeless elegance meets contemporary design. 
                  Curating pieces that transcend seasons, each selection tells a story 
                  of Parisian artistry and modern sophistication.
                </p>
              </div>

              {/* Newsletter with Style Horoscope */}
              <div className="bg-stone-800 bg-opacity-50 p-6 rounded-sm border border-stone-700">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-amber-100" />
                  <h3 className="text-lg font-light tracking-wide text-amber-100">
                    Your Style Horoscope
                  </h3>
                </div>
                <p className="text-xs mb-4 leading-relaxed">
                  Discover your seasonal style alignment. Subscribe for personalized 
                  curation and exclusive atelier insights.
                </p>
                
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <div>
                    <label htmlFor="style-preference" className="block text-xs mb-2 text-rose-200">
                      Your Style Essence
                    </label>
                    <select
                      id="style-preference"
                      value={stylePreference}
                      onChange={(e) => setStylePreference(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-600 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-amber-100 transition-colors text-rose-200"
                      required
                    >
                      <option value="">Select your aesthetic...</option>
                      <option value="minimalist">Minimalist</option>
                      <option value="romantic">Romantic</option>
                      <option value="bold">Bold</option>
                      <option value="classic">Classic</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-xs mb-2 text-rose-200">
                      Email Address
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="amelie@example.com"
                        className="flex-1 bg-stone-900 border border-stone-600 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-amber-100 transition-colors text-rose-200 placeholder-stone-500"
                        required
                      />
                      <button
                        type="submit"
                        className="bg-stone-800 hover:bg-amber-100 px-6 py-2.5 rounded-sm transition-all duration-300 text-rose-200 hover:text-stone-800 text-sm font-light tracking-wide"
                      >
                        Reveal
                      </button>
                    </div>
                  </div>
                </form>

                {horoscope && (
                  <div className="mt-4 p-4 bg-stone-900 border border-amber-100 rounded-sm animate-fade-in">
                    <div className="flex items-start gap-3">
                      <Sparkles className="w-4 h-4 text-amber-100 flex-shrink-0 mt-1" />
                      <p className="text-xs leading-relaxed text-rose-200">{horoscope}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Middle Column - Quick Links (Spans 3 columns) */}
            <div className="lg:col-span-3 space-y-8">
              <div>
                <h3 className="text-sm font-light tracking-widest mb-6 text-amber-100">
                  EXPLORE
                </h3>
                <ul className="space-y-3">
                  {['Collections', 'New Arrivals', 'Atelier Stories', 'Style Guide', 'Size Guide', 'Care Instructions'].map((item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase().replace(' ', '-')}`}
                        className="text-sm hover:text-amber-100 transition-colors duration-300 font-light inline-block hover:translate-x-1 transform"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-light tracking-widest mb-6 text-amber-100">
                  ATELIER
                </h3>
                <ul className="space-y-3">
                  {['About Us', 'Our Craft', 'Press', 'Careers', 'Sustainability'].map((item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase().replace(' ', '-')}`}
                        className="text-sm hover:text-amber-100 transition-colors duration-300 font-light inline-block hover:translate-x-1 transform"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Instagram Feed (Spans 4 columns) */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2 mb-6">
                <Instagram className="w-5 h-5 text-amber-100" />
                <h3 className="text-sm font-light tracking-widest text-amber-100">
                  ATELIER DIARY
                </h3>
              </div>
              <p className="text-xs mb-6 leading-relaxed">
                Real style transformations from our community. Follow @atelierluxe for daily inspiration.
              </p>
              
              {/* Instagram Grid */}
              <div className="grid grid-cols-3 gap-2">
                {instagramFeed.map((post) => (
                  <a
                    key={post.id}
                    href="#instagram"
                    className="group relative aspect-square overflow-hidden rounded-sm"
                  >
                    <Image
                      src={post.image}
                      alt={post.caption}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-stone-900 bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                      <Heart className="w-6 h-6 text-amber-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-stone-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-xs text-rose-200">{post.caption}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Proof Counter */}
              <div className="mt-6 flex items-center justify-between text-xs">
                <span className="text-stone-400">12.4K followers</span>
                <span className="text-amber-100">Join our style community →</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider with decorative element */}
        <div className="relative py-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-stone-700"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-stone-900 px-4 text-stone-600">✦</span>
          </div>
        </div>

        {/* Bottom Section - Contact & Legal */}
        <div className="pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-xs font-light tracking-widest text-amber-100 mb-4">
                CONTACT
              </h4>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-100 flex-shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p>24 Rue de la Paix</p>
                  <p>75002 Paris, France</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-100 flex-shrink-0" />
                <a href="tel:+33142608080" className="text-xs hover:text-amber-100 transition-colors">
                  +33 1 42 60 80 80
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-100 flex-shrink-0" />
                <a href="mailto:bonjour@atelierluxe.com" className="text-xs hover:text-amber-100 transition-colors">
                  bonjour@atelierluxe.com
                </a>
              </div>
            </div>

            {/* Client Services */}
            <div className="space-y-3">
              <h4 className="text-xs font-light tracking-widest text-amber-100 mb-4">
                CLIENT SERVICES
              </h4>
              {['Personal Styling', 'Virtual Consultation', 'Alterations', 'Gift Services', 'Returns & Exchange'].map((service) => (
                <a
                  key={service}
                  href={`#${service.toLowerCase().replace(' ', '-')}`}
                  className="block text-xs hover:text-amber-100 transition-colors duration-300"
                >
                  {service}
                </a>
              ))}
            </div>

            {/* Store Hours */}
            <div className="space-y-3">
              <h4 className="text-xs font-light tracking-widest text-amber-100 mb-4">
                ATELIER HOURS
              </h4>
              <div className="text-xs space-y-2">
                <p className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-stone-400">10:00 - 19:00</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-stone-400">11:00 - 20:00</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-stone-400">12:00 - 18:00</span>
                </p>
              </div>
              <p className="text-xs text-amber-100 mt-4">
                Private appointments available
              </p>
            </div>

            {/* Payment & Security */}
            <div className="space-y-4">
              <h4 className="text-xs font-light tracking-widest text-amber-100 mb-4">
                SECURE SHOPPING
              </h4>
              <div className="flex flex-wrap gap-2">
                <div className="bg-stone-800 px-3 py-1.5 rounded-sm text-xs">Visa</div>
                <div className="bg-stone-800 px-3 py-1.5 rounded-sm text-xs">Mastercard</div>
                <div className="bg-stone-800 px-3 py-1.5 rounded-sm text-xs">Amex</div>
                <div className="bg-stone-800 px-3 py-1.5 rounded-sm text-xs">PayPal</div>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed mt-4">
                All transactions secured with 256-bit SSL encryption
              </p>
            </div>
          </div>

          {/* Final Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-stone-800">
            <p className="text-xs text-stone-400">
              © 2024 Atelier Luxe. Handcrafted with precision in Paris.
            </p>
            
            <div className="flex items-center gap-6 text-xs">
              <a href="#privacy" className="hover:text-amber-100 transition-colors">
                Privacy Policy
              </a>
              <span className="text-stone-700">|</span>
              <a href="#terms" className="hover:text-amber-100 transition-colors">
                Terms of Service
              </a>
              <span className="text-stone-700">|</span>
              <a href="#cookies" className="hover:text-amber-100 transition-colors">
                Cookie Settings
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#instagram"
                className="hover:text-amber-100 transition-all duration-300 hover:scale-110 transform"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#pinterest"
                className="hover:text-amber-100 transition-all duration-300 hover:scale-110 transform"
                aria-label="Pinterest"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="#facebook"
                className="hover:text-amber-100 transition-all duration-300 hover:scale-110 transform"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom accent */}
      <div className="h-1 bg-gradient-to-r from-transparent via-amber-100 to-transparent"></div>
    </footer>
  );
};

export default Footer;