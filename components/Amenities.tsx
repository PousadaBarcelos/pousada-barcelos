import React, { useState } from 'react';
import { AMENITIES } from '../constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Amenity } from '../types';

interface AmenityCardProps {
  amenity: Amenity;
  tItem: any;
  tDetails: string;
}

const AmenityCard: React.FC<AmenityCardProps> = ({ amenity, tItem, tDetails }) => {
  const gallery = amenity.imageUrls || (amenity.imageUrl ? [amenity.imageUrl] : []);
  const [currentIdx, setCurrentIdx] = useState(0);

  // Fallback para evitar erro de runtime caso a tradução falhe
  if (!tItem) {
    return null;
  }

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev + 1) % gallery.length);
  };

  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const isLongTitle = tItem.title.length > 20;
  
  // Verifica se a imagem atual deve ser espelhada (pelo flag geral ou índice específico)
  const shouldMirror = amenity.imageMirrored || (amenity.mirroredIndices && amenity.mirroredIndices.includes(currentIdx));

  return (
    <div className="relative group bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-earth-200 flex flex-col items-center text-center overflow-hidden h-[360px]">
      <div className="flex flex-col items-center justify-center h-full transition-all duration-500 group-hover:opacity-0 group-hover:scale-90">
        <div className="w-20 h-20 bg-nature-50 rounded-2xl flex items-center justify-center mb-6">
          <amenity.icon className="h-10 w-10 text-nature-800" />
        </div>
        <h3 className={`font-bold text-earth-900 mb-3 font-serif transition-all ${isLongTitle ? 'text-xl tracking-tighter' : 'text-2xl tracking-tight'}`}>
          {tItem.title}
        </h3>
        <p className="text-earth-600 leading-relaxed px-4">{tItem.desc}</p>
        <div className="mt-6 inline-flex items-center text-xs font-bold text-nature-700 uppercase tracking-widest">{tDetails}</div>
      </div>

      <div className="absolute inset-0 z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 flex flex-col transform translate-y-4 group-hover:translate-y-0">
        {gallery.length > 0 && (
          <div className="relative h-2/3 w-full overflow-hidden bg-earth-200">
            <img 
              src={gallery[currentIdx]} 
              alt={tItem.title} 
              className={`w-full h-full object-cover ${shouldMirror ? 'scale-x-[-1]' : ''}`} 
            />
            
            {/* Tag específica da imagem (ex: Casca d'Anta) */}
            {amenity.imageLabels && amenity.imageLabels[currentIdx] && (
              <div className="absolute top-3 right-3 bg-nature-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-[9px] font-bold uppercase tracking-widest z-30 shadow-lg border border-white/20">
                {amenity.imageLabels[currentIdx]}
              </div>
            )}

            {gallery.length > 1 && (
              <>
                <button onClick={prevImg} className="absolute inset-y-0 left-2 m-auto h-8 w-8 bg-black/20 hover:bg-white text-white hover:text-nature-900 rounded-full flex items-center justify-center z-30"><ChevronLeft className="h-4 w-4" /></button>
                <button onClick={nextImg} className="absolute inset-y-0 right-2 m-auto h-8 w-8 bg-black/20 hover:bg-white text-white hover:text-nature-900 rounded-full flex items-center justify-center z-30"><ChevronRight className="h-4 w-4" /></button>
              </>
            )}
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-nature-100 via-nature-100/70 to-transparent"></div>
            <div className="absolute bottom-1 left-6 right-6 flex items-center justify-between">
              <span className={`text-nature-900 font-serif font-bold ${isLongTitle ? 'text-lg tracking-tighter' : 'text-xl'}`}>{tItem.title}</span>
              <amenity.icon className="h-6 w-6 text-nature-800" />
            </div>
          </div>
        )}
        <div className="flex-1 p-4 bg-nature-100 flex flex-col justify-center border-t border-nature-200">
          <p className="text-xs md:text-sm text-nature-900 leading-relaxed text-left overflow-y-auto no-scrollbar">{tItem.long}</p>
        </div>
      </div>
    </div>
  );
};

interface AmenitiesProps {
  t: any;
}

const Amenities: React.FC<AmenitiesProps> = ({ t }) => {
  return (
    <section id="attractions" className="py-20 bg-earth-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-earth-900 font-bold mb-4">{t.title}</h2>
          <p className="text-earth-600 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AMENITIES.map((amenity) => (
            <AmenityCard 
              key={amenity.id} 
              amenity={amenity} 
              tItem={t.items ? t.items[amenity.id as keyof typeof t.items] : undefined} 
              tDetails={t.details}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;