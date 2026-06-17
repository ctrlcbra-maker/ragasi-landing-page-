
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const CtaSection = () => {
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
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, hsl(var(--accent)) 0%, transparent 50%)' }}></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white mb-6">Siap Membangun Kemitraan yang Sukses?</h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Mari diskusikan bagaimana RAGASI CORPORATION GRUP dapat menjadi mitra strategis untuk pertumbuhan bisnis Anda di masa depan.
          </p>
          <Button
            onClick={() => handleScrollTo('#kontak')}
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-10 py-6 rounded-none font-semibold"
          >
            Mulai Percakapan
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
