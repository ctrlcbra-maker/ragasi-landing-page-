
import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUsSection = () => {
  const reasons = [
    {
      number: '01',
      title: 'Pengalaman Terbukti',
      desc: 'Rekam jejak yang solid dalam mengelola dan mengembangkan berbagai lini bisnis hingga mencapai profitabilitas optimal.'
    },
    {
      number: '02',
      title: 'Beragam Layanan dalam Satu Grup',
      desc: 'Sinergi antar anak perusahaan menciptakan ekosistem bisnis yang efisien dan saling mendukung.'
    },
    {
      number: '03',
      title: 'Komitmen Kualitas',
      desc: 'Standar operasional yang ketat memastikan setiap produk dan layanan memenuhi ekspektasi tertinggi pelanggan.'
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-primary mb-4">Mengapa Memilih Kami</h2>
          <div className="w-20 h-1 bg-accent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reasons.map((reason, idx) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              <div className="text-6xl font-bold text-secondary mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                {reason.number}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
