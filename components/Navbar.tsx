import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { NAVIGATION_LINKS, APP_NAME, FACEBOOK_LINK, INSTAGRAM_LINK, WHATSAPP_LINK, LOGO_URL } from '../constants.ts';
import { Language } from '../App.tsx';
import { translations } from '../translations.ts';

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const LanguageSwitcher = () => (
    <div className={`flex items-center gap-1 p-1 rounded-xl transition-colors duration-300 ${scrolled || isOpen ? 'bg-earth-200/50' : 'bg-white/10'}`}>
      {(['pt', 'en', 'es'] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`w-9 h-7 flex items-center justify-center text-[10px] font-bold tracking-tighter rounded-lg transition-all duration-300 ${
            lang === l
              ? 'bg-white text-nature-800 shadow-sm'
              : `hover:bg-white/20 ${scrolled || isOpen ? 'text-earth-700' : 'text-white/70 hover:text-white'}`
          }`}
          title={l === 'pt' ? 'Português' : l === 'en' ? 'English' : 'Español'}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );

  return (
    <nav 
      ref={navRef}
      role="navigation"
      aria-label="Navegação Principal"
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-earth-100/95 backdrop-blur-md shadow-md text-earth-900' : 'bg-transparent text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div 
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer" 
            onClick={(e) => handleNavClick(e, '#hero')}
            role="link"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleNavClick(e as any, '#hero')}
          >
            <div 
              className={`h-10 w-8 transition-colors duration-300 ${scrolled || isOpen ? 'bg-nature-800' : 'bg-white'}`}
              style={{
                maskImage: `url("${LOGO_URL}")`,
                WebkitMaskImage: `url("${LOGO_URL}")`,
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskPosition: 'center'
              }}
              aria-hidden="true"
            />
            <span className={`font-serif text-xl font-semibold tracking-wider ${scrolled || isOpen ? 'text-earth-900' : 'text-white'}`}>
              {APP_NAME}
            </span>
          </div>

          <div className="hidden lg:flex flex-1 justify-center max-w-[160px] mx-4">
            <LanguageSwitcher />
          </div>

          <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-xs lg:text-sm font-medium tracking-wide uppercase hover:text-nature-500 transition-colors ${
                  scrolled ? 'text-earth-800' : 'text-earth-50'
                }`}
              >
                {t[link.href.replace('#', '') as keyof typeof t] || link.name}
              </a>
            ))}
          </div>

          <div className="md:hidden flex items-center gap-4">
             <div className="flex lg:hidden scale-90">
               <LanguageSwitcher />
             </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none p-2 rounded-md hover:bg-black/5 transition-colors"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <div 
        id="mobile-menu"
        className={`md:hidden absolute top-20 left-0 w-full bg-earth-100 shadow-lg overflow-y-auto transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[85vh] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col items-center">
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block py-3 text-base font-medium text-earth-800 hover:text-nature-800 text-center w-full"
            >
              {t[link.href.replace('#', '') as keyof typeof t] || link.name}
            </a>
          ))}

          <div className="flex items-center justify-center space-x-8 pt-4 border-t border-earth-200 w-full max-w-xs">
            <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-earth-600 hover:text-nature-800">
              <Instagram className="h-6 w-6" />
            </a>
            <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" className="text-earth-600 hover:text-nature-800">
              <Facebook className="h-6 w-6" />
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-earth-600 hover:text-nature-800">
              <MessageCircle className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;