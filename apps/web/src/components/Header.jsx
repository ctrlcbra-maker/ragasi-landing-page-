
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Tentang Kami', href: '#tentang' },
    { label: 'Lini Bisnis', href: '#bisnis' },
    { label: 'Kontak', href: '#kontak' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#beranda" onClick={(e) => handleNavClick(e, '#beranda')} className="flex items-center">
            <span className={`text-2xl font-bold transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-white'}`} style={{ fontFamily: 'Playfair Display, serif' }}>
              RAGASI GRUP
            </span>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`font-medium transition-colors duration-200 ${
                  isScrolled ? 'text-foreground/80 hover:text-accent' : 'text-white/90 hover:text-accent'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button
              onClick={(e) => handleNavClick(e, '#kontak')}
              className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-200 font-semibold"
            >
              Hubungi Kami
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors duration-200 ${isScrolled ? 'text-primary' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-border shadow-lg">
          <nav className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block text-foreground/80 hover:text-accent transition-colors duration-200 font-medium py-2"
              >
                {item.label}
              </a>
            ))}
            <Button
              onClick={(e) => handleNavClick(e, '#kontak')}
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-200 font-semibold"
            >
              Hubungi Kami
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
