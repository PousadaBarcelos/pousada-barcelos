import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LegalModals from './components/LegalModals';
import { translations } from './translations';
import { CRITICAL_ASSETS } from './constants';

export type Language = 'pt' | 'en' | 'es';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('pt');
  const t = translations[lang];

  const [legalModal, setLegalModal] = useState<{
    isOpen: boolean;
    type: 'terms' | 'privacy' | 'cancellation' | null;
  }>({
    isOpen: false,
    type: null
  });

  useEffect(() => {
    // Preload critical images to avoid layout shift
    CRITICAL_ASSETS.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, []);

  const openLegalModal = (type: 'terms' | 'privacy' | 'cancellation') => {
    setLegalModal({ isOpen: true, type });
    document.body.style.overflow = 'hidden';
  };

  const closeLegalModal = () => {
    setLegalModal({ isOpen: false, type: null });
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen flex flex-col bg-earth-50 text-earth-900 font-sans antialiased">
      <Navbar lang={lang} setLang={setLang} />
      <main className="flex-grow">
        <Hero t={t.hero} />
        <About t={t.about} />
        <Amenities t={t.amenities} />
        <Rooms t={t.rooms} />
        <Contact t={t.contact} />
      </main>
      <Footer t={t.footer} onOpenLegal={openLegalModal} />
      
      <LegalModals 
        isOpen={legalModal.isOpen} 
        onClose={closeLegalModal} 
        type={legalModal.type} 
        t={t.legal}
      />
    </div>
  );
};

export default App;
