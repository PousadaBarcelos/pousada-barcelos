import React, { useState, useEffect } from 'react';
import { MapPin, Sparkles, Coffee } from 'lucide-react';
import { ABOUT_GALLERY } from '../constants';

interface AboutProps {
  t: any;
}

const About: React.FC<AboutProps> = ({ t }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Garante que o carrossel só funcione se houver mais de uma imagem
    if (ABOUT_GALLERY.length > 1) {
      const timer = setInterval(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % ABOUT_GALLERY.length);
      }, 3000); // Altera a imagem a cada 3 segundos

      // Limpa o intervalo quando o componente é desmontado para evitar vazamentos de memória
      return () => clearInterval(timer);
    }
  }, [ABOUT_GALLERY.length]);

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

        {/* Carrossel de Imagens com Fade */}
        <div className="relative h-64 w-full md:w-5/6 md:h-96 lg:w-4/6 lg:h-[500px] mx-auto rounded-2xl shadow-lg overflow-hidden mb-12">
          {ABOUT_GALLERY.map((url, idx) => (
            <img 
              key={idx} 
              src={url} 
              alt={`Imagem Galeria ${idx + 1}`} 
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${currentImageIndex === idx ? 'opacity-100' : 'opacity-0'}`} 
            />
          ))}
        </div>

        {/* Blocos de Texto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            
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
