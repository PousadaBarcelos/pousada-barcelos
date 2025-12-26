import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Rooms from './components/Rooms.tsx';
import Amenities from './components/Amenities.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import LegalModals from './components/LegalModals.tsx';
import { translations } from './translations.ts';
import { CRITICAL_ASSETS } from './constants.ts';

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
    // Pré-carregamento de imagens críticas para evitar "pulo" de layout
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
    <div className="min-h-screen flex flex-col font-sans selection:bg-nature-200 selection:text-nature-900">
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