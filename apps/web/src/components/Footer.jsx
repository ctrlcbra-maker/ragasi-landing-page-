
import React from 'react';
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <span className="text-2xl font-bold text-primary" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ragasi Holding
            </span>
            <p className="mt-4 text-secondary-foreground/70 leading-relaxed">
              Perusahaan induk yang solid dan terpercaya, berfokus pada pertumbuhan berkelanjutan melalui berbagai lini bisnis strategis.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <a href="#beranda" className="text-secondary-foreground/70 hover:text-primary transition-colors duration-200">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#tentang" className="text-secondary-foreground/70 hover:text-primary transition-colors duration-200">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#bisnis" className="text-secondary-foreground/70 hover:text-primary transition-colors duration-200">
                  Lini Bisnis
                </a>
              </li>
              <li>
                <a href="#kontak" className="text-secondary-foreground/70 hover:text-primary transition-colors duration-200">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Ikuti Kami</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a
                href="mailto:info@ragasiholding.com"
                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/70 text-sm">
              © {currentYear} Ragasi Holding Company. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
