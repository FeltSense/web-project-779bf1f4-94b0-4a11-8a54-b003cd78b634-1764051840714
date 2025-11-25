import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-rose-50 overflow-hidden">
      {/* Subtle editorial line decoration - top of page */}
      <div className="fixed top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-800/20 to-transparent z-50" />
      
      {/* Artistic vertical accent line - left side */}
      <div className="hidden lg:block fixed left-12 top-1/4 bottom-1/4 w-px bg-stone-800/10" />
      
      {/* Delicate corner accent - top right */}
      <div className="hidden xl:block fixed top-8 right-8 w-24 h-24 border-t border-r border-stone-800/10" />
      
      <Navigation />
      <Hero />
      
      {/* Editorial section divider with asymmetric design */}
      <div className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-stone-800/20" />
            <div className="w-2 h-2 rotate-45 bg-stone-800/30" />
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-stone-800/20" />
          </div>
        </div>
      </div>
      
      <Services />
      
      {/* Asymmetric breathing space */}
      <div className="h-32 lg:h-48" />
      
      <Testimonials />
      
      {/* Artistic transition element */}
      <div className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-50 via-amber-50/30 to-rose-50" />
        <div className="relative max-w-2xl mx-auto px-4 text-center">
          <div className="inline-block w-16 h-px bg-stone-800/30 mb-4" />
          <p className="font-serif text-stone-600 italic text-sm tracking-wider">
            Curated Excellence
          </p>
          <div className="inline-block w-16 h-px bg-stone-800/30 mt-4" />
        </div>
      </div>
      
      <Pricing />
      
      {/* Generous white space with subtle accent */}
      <div className="relative py-24">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-stone-800/20 rounded-full" />
      </div>
      
      <ContactForm />
      
      {/* Pre-footer decorative element */}
      <div className="relative py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 max-w-xs mx-auto opacity-20">
            <div className="h-px bg-stone-800" />
            <div className="h-px bg-stone-800/50" />
            <div className="h-px bg-stone-800/25" />
          </div>
        </div>
      </div>
      
      <Footer />
      
      {/* Bottom editorial line */}
      <div className="h-px bg-gradient-to-r from-transparent via-stone-800/20 to-transparent" />
    </main>
  )
}