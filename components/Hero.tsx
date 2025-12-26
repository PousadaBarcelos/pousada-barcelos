import React from 'react';
import { ChevronDown, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { FACEBOOK_LINK, INSTAGRAM_LINK, WHATSAPP_LINK, HERO_BG_IMAGE } from '../constants';

interface HeroProps {
  t: any;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div id="hero" className="relative h-screen w-full overflow-hidden bg-earth-900">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${HERO_BG_IMAGE}")` }}
        role="img"
      />
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <div className="absolute left-6 md:left-8 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col gap-6 z-20">
        <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-all hover:scale-110">
          <Instagram className="h-6 w-6" />
        </a>
        <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-all hover:scale-110">
          <Facebook className="h-6 w-6" />
        </a>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-all hover:scale-110">
          <MessageCircle className="h-6 w-6" />
        </a>
        <div className="w-px h-16 bg-white/30 mx-auto mt-2"></div>
      </div>

      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 max-w-4xl mx-auto">
        <span className="text-nature-100 tracking-[0.2em] uppercase text-sm md:text-base font-semibold mb-4 animate-fade-in-up">
          {t.subtitle}
        </span>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mb-6 drop-shadow-lg">
          {t.title}
        </h1>
        <p className="text-earth-100 text-base lg:text-xl max-w-2xl mb-10 leading-relaxed drop-shadow-md text-balance">
          {t.description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#rooms" 
            onClick={(e) => handleScrollToSection(e, 'rooms')}
            className="btn-primary"
          >
            {t.btnRooms}
          </a>
          <a 
            href="#about" 
            onClick={(e) => handleScrollToSection(e, 'about')}
            className="btn-secondary"
          >
            {t.btnAbout}
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block z-20">
        <a href="#about" onClick={(e) => handleScrollToSection(e, 'about')} className="text-white opacity-70 hover:opacity-100 transition-opacity">
          <ChevronDown className="h-10 w-10" />
        </a>
      </div>
    </div>
  );
};

export default Hero;