
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const handleScrollTo = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="beranda" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1602385602836-beb9f3d8099f)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-navy-gradient opacity-90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent border border-accent/30 text-sm font-semibold tracking-wider uppercase mb-6">
            Holding Company Terpercaya
          </span>
          <h1 className="text-white mb-6">
            Membangun Masa Depan<br />Bersama <span className="text-accent">RAGASI GRUP</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light">
            Menaungi berbagai lini bisnis strategis dengan komitmen penuh terhadap kualitas, inovasi, dan pertumbuhan yang berkelanjutan.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => handleScrollTo('#bisnis')}
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-200 text-base px-8 py-6 rounded-none"
            >
              Jelajahi Bisnis Kami
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={() => handleScrollTo('#kontak')}
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary transition-all duration-200 text-base px-8 py-6 rounded-none bg-transparent"
            >
              Hubungi Kami
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
