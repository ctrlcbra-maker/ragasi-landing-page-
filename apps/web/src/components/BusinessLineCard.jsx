
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const BusinessLineCard = ({ icon: Icon, title, category, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-300"></div>
      
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
          <Icon className="w-7 h-7 text-primary" />
        </div>

        <h3 className="text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-sm font-medium text-primary/80 mb-4 tracking-wide uppercase">
          {category}
        </p>

        <p className="text-foreground/70 leading-relaxed mb-6">
          {description}
        </p>

        <div className="mt-auto">
          <div className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all duration-300">
            <span>Pelajari Lebih Lanjut</span>
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BusinessLineCard;
