
import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, HardHat, Truck, Coffee, ArrowRight } from 'lucide-react';

const BusinessLinesSection = () => {
  const businesses = [
    {
      title: 'Apotek Ragasi',
      category: 'Kesehatan & Farmasi',
      icon: HeartPulse,
      desc: 'Menyediakan produk farmasi berkualitas dan layanan kesehatan terpercaya untuk masyarakat luas.'
    },
    {
      title: 'Ragasi Karya',
      category: 'Desain Interior & Sipil',
      icon: HardHat,
      desc: 'Solusi konstruksi dan desain interior profesional yang mengutamakan estetika dan ketahanan.'
    },
    {
      title: 'Kudah Hitam Express',
      category: 'Ekspedisi & Logistik',
      icon: Truck,
      desc: 'Layanan pengiriman barang cepat, aman, dan terpercaya ke seluruh pelosok negeri.'
    },
    {
      title: 'Bariyu Caffe',
      category: 'Food & Beverage',
      icon: Coffee,
      desc: 'Menyajikan pengalaman kuliner premium dengan suasana nyaman dan cita rasa kopi otentik.'
    }
  ];

  return (
    <section id="bisnis" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary mb-4">Lini Bisnis Kami</h2>
          <p className="text-muted-foreground text-lg">
            Portofolio bisnis yang beragam memungkinkan kami untuk memberikan dampak positif di berbagai sektor industri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {businesses.map((biz, idx) => (
            <motion.div
              key={biz.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-card p-8 rounded-2xl border border-border hover:shadow-xl hover:border-accent/50 transition-all duration-300 flex flex-col h-full"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                <biz.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
              </div>
              <p className="text-xs font-bold text-accent uppercase tracking-wider mb-2">{biz.category}</p>
              <h3 className="text-2xl font-semibold text-primary mb-4">{biz.title}</h3>
              <p className="text-muted-foreground mb-8 flex-grow">{biz.desc}</p>
              
              <div className="mt-auto">
                <button className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                  Selengkapnya <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessLinesSection;
