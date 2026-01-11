import React, { useState, useEffect, useCallback } from 'react';
import { MapPin, Sparkles, Coffee } from 'lucide-react';
import { ABOUT_GALLERY } from '../constants';

interface AboutProps {
  t: any;
}

const About: React.FC<AboutProps> = ({ t }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
    setIsCarouselPaused(true); // Pausa o carrossel na interação do usuário
  };

  const startCarousel = useCallback(() => {
    if (ABOUT_GALLERY.length > 1 && !isCarouselPaused) {
      const timer = setInterval(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % ABOUT_GALLERY.length);
      }, 3000);

      return () => clearInterval(timer);
    }
  }, [isCarouselPaused]);

  useEffect(() => {
    startCarousel();
  }, [startCarousel]);

  return (
    <section id="about" className="py-20 bg-earth-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
            <div className="tag-label mb-4">
              {t.tag}
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-earth-900 font-bold tracking-tight">
              {t.title}
            </h2>
        </div>

        {/* Galeria de Imagens com Miniaturas */}
        <div className="w-full md:w-5/6 lg:w-4/6 mx-auto">
          {/* Imagem Principal com Fade */}
          <div className="relative h-64 md:h-96 lg:h-[500px] w-full rounded-2xl shadow-lg overflow-hidden mb-4">
            {ABOUT_GALLERY.map((url, idx) => (
              <img 
                key={idx} 
                src={url} 
                alt={`Imagem Galeria ${idx + 1}`} 
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${currentImageIndex === idx ? 'opacity-100' : 'opacity-0'}`} 
              />
            ))}
          </div>

          {/* Miniaturas Clicáveis */}
          <div className="flex justify-center space-x-2 p-2">
            {ABOUT_GALLERY.map((url, idx) => (
              <button 
                key={`thumb-${idx}`} 
                onClick={() => handleThumbnailClick(idx)}
                className={`w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-nature-300 ${currentImageIndex === idx ? 'ring-4 ring-nature-500 shadow-md' : 'ring-2 ring-transparent'}`}>
                <img 
                  src={url} 
                  alt={`Miniatura ${idx + 1}`} 
                  className="w-full h-full object-cover" 
                />
              </button>
            ))}
          </div>
        </div>

        {/* Blocos de Texto (abaixo da galeria) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-12">
            <div className="card-glass p-6 flex flex-col">
                <div className="w-10 h-10 bg-nature-100 text-nature-800 rounded-xl flex items-center justify-center mb-4">
                    <MapPin className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-nature-900 mb-2 tracking-tight">
                    {t.locationTitle}
                </h3>
                <p className="text-earth-700 leading-snug text-[13px] md:text-sm tracking-tight">
                    {t.locationDesc}
                </p>
            </div>

            <div className="card-glass p-6">
                <div className="w-10 h-10 bg-nature-100 text-nature-800 rounded-xl flex items-center justify-center mb-4">
                    <Coffee className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-nature-900 mb-2 tracking-tight">{t.breakfastTitle}</h3>
                <p className="text-earth-700 leading-snug text-[13px] md:text-sm tracking-tight">
                    {t.breakfastDesc}
                </p>
            </div>

            <div className="card-glass p-6">
                <div className="w-10 h-10 bg-nature-100 text-nature-800 rounded-xl flex items-center justify-center mb-4">
                    <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-nature-900 mb-2 tracking-tight">{t.tranquilityTitle}</h3>
                <p className="text-earth-700 leading-snug text-[13px] md:text-sm tracking-tight">
                    {t.tranquilityDesc}
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
