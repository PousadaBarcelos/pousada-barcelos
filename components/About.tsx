import React from 'react';
import { MapPin, Sparkles, Coffee } from 'lucide-react';
import { ABOUT_GALLERY } from '../constants';

interface AboutProps {
  t: any;
}

const About: React.FC<AboutProps> = ({ t }) => {
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

        {/* Galeria de Imagens Compacta */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {ABOUT_GALLERY.map((url, idx) => (
              <img 
                key={idx} 
                src={url} 
                alt={`Imagem Galeria ${idx + 1}`} 
                className="rounded-2xl shadow-sm w-full h-40 object-cover hover:scale-[1.02] transition-transform duration-500" 
              />
            ))}
        </div>

        {/* Blocos de Texto - Usando .card-glass */}
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