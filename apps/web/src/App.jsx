
import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/sonner';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import BusinessLinesSection from './components/BusinessLinesSection.jsx';
import WhyChooseUsSection from './components/WhyChooseUsSection.jsx';
import CtaSection from './components/CtaSection.jsx';
import ContactFooter from './components/ContactFooter.jsx';

function App() {
  return (
    <>
      <Helmet>
        <title>RAGASI GRUP - Holding Company Terpercaya</title>
        <meta
          name="description"
          content="RAGASI GRUP menaungi berbagai lini bisnis strategis dengan komitmen penuh terhadap kualitas, inovasi, dan pertumbuhan yang berkelanjutan."
        />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <BusinessLinesSection />
          <WhyChooseUsSection />
          <CtaSection />
        </main>
        <ContactFooter />
        <Toaster position="bottom-right" />
      </div>
    </>
  );
}

export default App;
