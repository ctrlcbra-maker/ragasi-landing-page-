
import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Award, Lightbulb, HeartHandshake as Handshake, Building2, TrendingUp, Users, Target } from 'lucide-react';

const AnimatedCounter = ({ end, suffix, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="font-variant-numeric: tabular-nums">
      {count}{suffix}
    </span>
  );
};

const AboutSection = () => {
  const values = [
    { icon: Shield, title: 'Integritas', desc: 'Menjunjung tinggi kejujuran dan transparansi dalam setiap operasional bisnis.' },
    { icon: Award, title: 'Profesionalisme', desc: 'Memberikan standar layanan tertinggi dengan tim ahli di bidangnya.' },
    { icon: Lightbulb, title: 'Inovasi', desc: 'Terus beradaptasi dan menciptakan solusi baru untuk tantangan masa depan.' },
    { icon: Handshake, title: 'Kepercayaan', desc: 'Membangun kemitraan jangka panjang yang saling menguntungkan.' }
  ];

  const stats = [
    { icon: Building2, value: 4, suffix: '', label: 'Lini Bisnis' },
    { icon: TrendingUp, value: 15, suffix: '+', label: 'Tahun Pengalaman' },
    { icon: Users, value: 500, suffix: '+', label: 'Klien Puas' },
    { icon: Target, value: 100, suffix: '%', label: 'Komitmen Kami' }
  ];

  return (
    <section id="tentang" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary mb-6">Tentang RAGASI CORPORATION GRUP</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Sebagai perusahaan induk yang solid, RAGASI CORPORATION GRUP berfokus pada pertumbuhan berkelanjutan melalui diversifikasi portofolio bisnis yang strategis. Kami hadir untuk memberikan nilai tambah bagi masyarakat dan pemangku kepentingan.
            </p>
            <p className="text-lg text-muted-foreground">
              Dengan pengalaman bertahun-tahun, kami terus memperkuat fondasi di berbagai sektor industri, memastikan setiap lini bisnis beroperasi dengan standar keunggulan yang sama.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((val, idx) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-secondary/50 p-6 rounded-xl border border-border/50 hover:border-accent/50 transition-colors"
              >
                <val.icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">{val.title}</h3>
                <p className="text-sm text-muted-foreground">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-primary rounded-2xl p-12 text-primary-foreground relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <stat.icon className="w-8 h-8 text-accent mx-auto mb-4 opacity-80" />
                <div className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-primary-foreground/80 font-medium text-sm uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
