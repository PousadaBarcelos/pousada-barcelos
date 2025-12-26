import React, { useState } from 'react';
import { ROOMS } from '../constants';
import { Check, CalendarDays, Info, ChevronLeft, ChevronRight, Clock, ShieldCheck, DollarSign } from 'lucide-react';

interface RoomsProps {
  t: any;
}

// Componente para as linhas de preço
const PricingRow: React.FC<{ item: any }> = ({ item }) => (
  <div className="flex justify-between items-baseline border-b border-earth-200 pb-2 text-xs">
    <span className="text-earth-600 uppercase tracking-tighter font-bold text-[10px] pr-2">{item.name}</span>
    <span className="font-bold text-nature-900 text-sm whitespace-nowrap">{item.price}</span>
  </div>
);

// Componente para as linhas de feriado (copiando a formatação do PricingRow)
const HolidayRow: React.FC<{ name: string; date: string }> = ({ name, date }) => (
  <div className="flex justify-between items-baseline border-b border-nature-200 pb-2 text-xs">
    <span className="text-earth-600 uppercase tracking-tighter font-bold text-[10px] pr-2">{name}</span>
    <span className="font-bold text-nature-900 text-sm whitespace-nowrap">{date}</span>
  </div>
);

const Rooms: React.FC<RoomsProps> = ({ t }) => {
  const essencialSuites = ROOMS.filter(r => r.id.startsWith('suite-essencial'));
  const familiaSuite = ROOMS.find(r => r.id === 'suite-familia');
  const [essencialIdx, setEssencialIdx] = useState(0);

  const nextEssencial = () => setEssencialIdx((prev) => (prev + 1) % essencialSuites.length);
  const prevEssencial = () => setEssencialIdx((prev) => (prev - 1 + essencialSuites.length) % essencialSuites.length);
  const currentEssencial = essencialSuites[essencialIdx];

  const handleScrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('pricing-table');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const essencialRates = t.pricingItems.filter((item: any) => 
    item.name.toLowerCase().includes('essencial') || 
    item.name.toLowerCase().includes('essential') || 
    item.name.toLowerCase().includes('esencial')
  );
  
  const familiaRates = t.pricingItems.filter((item: any) => 
    item.name.toLowerCase().includes('família') || 
    item.name.toLowerCase().includes('familia') || 
    item.name.toLowerCase().includes('family')
  );

  return (
    <section id="rooms" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col mb-12">
          <span className="text-nature-800 font-bold tracking-wider uppercase text-sm">{t.tag}</span>
          <h2 className="font-serif text-3xl md:text-5xl text-earth-900 font-bold mt-2 mb-4">{t.title}</h2>
          <p className="text-earth-600 text-lg leading-relaxed max-w-3xl">{t.desc}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          <div className="group flex flex-col h-full bg-earth-50 rounded-3xl overflow-hidden shadow-md border border-earth-100">
            <div className="relative h-[190px] md:h-[350px] lg:h-[200px] overflow-hidden">
              <img 
                key={currentEssencial.imageUrl} 
                src={currentEssencial.imageUrl} 
                alt={t.suiteEssencial.name} 
                className={`w-full h-full object-cover transition-opacity duration-500 ${currentEssencial.imageMirrored ? 'scale-x-[-1]' : ''}`} 
              />
              <button 
                onClick={prevEssencial} 
                className="absolute inset-y-0 left-4 m-auto h-10 w-10 bg-black/20 hover:bg-white text-white hover:text-nature-900 rounded-full flex items-center justify-center transition-all z-20"
                aria-label="Anterior"
              >
                <ChevronLeft />
              </button>
              <button 
                onClick={nextEssencial} 
                className="absolute inset-y-0 right-4 m-auto h-10 w-10 bg-black/20 hover:bg-white text-white hover:text-nature-900 rounded-full flex items-center justify-center transition-all z-20"
                aria-label="Próximo"
              >
                <ChevronRight />
              </button>
              <div className="absolute top-4 left-4 bg-nature-800 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest z-20">
                {t.essencialTag}
              </div>
              <a 
                href="#pricing-table"
                onClick={handleScrollToPricing}
                className="absolute bottom-4 right-4 bg-nature-600/10 hover:bg-nature-700 text-white px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all z-20 flex items-center shadow-lg group/tag hover:scale-105"
              >
                {t.ratesTag}
              </a>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-serif font-bold text-earth-900 mb-2">{t.suiteEssencial.name}</h3>
              <p className="text-earth-600 mb-6 text-sm leading-relaxed">{t.suiteEssencial.desc}</p>
              <div className="grid grid-cols-2 gap-x-2 gap-y-2">
                {t.suiteEssencial.features.map((f: string, i: number) => (
                  <div key={i} className="flex items-center text-sm text-earth-700">
                    <span className="flex items-center">
                      <Check className="h-4 w-4 text-nature-600 mr-2 shrink-0" />
                      <span className="text-[11px] sm:text-sm leading-tight">{f}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {familiaSuite && (
            <div className="group flex flex-col h-full bg-earth-50 rounded-3xl overflow-hidden shadow-md border border-earth-100">
              <div className="relative h-[190px] md:h-[350px] lg:h-[200px] overflow-hidden">
                <img 
                  src={familiaSuite.imageUrl} 
                  alt={t.suiteFamilia.name} 
                  className={`w-full h-full object-cover ${familiaSuite.imageMirrored ? 'scale-x-[-1]' : ''}`} 
                />
                <div className="absolute top-4 left-4 bg-earth-900 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest z-20">
                  {t.familiaTag}
                </div>
                <a 
                  href="#pricing-table"
                  onClick={handleScrollToPricing}
                  className="absolute bottom-4 right-4 bg-nature-600/10 hover:bg-nature-700 text-white px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all z-20 flex items-center shadow-lg group/tag hover:scale-105"
                >
                  {t.ratesTag}
                </a>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold text-earth-900 mb-2">{t.suiteFamilia.name}</h3>
                <p className="text-earth-600 mb-6 text-sm leading-relaxed">{t.suiteFamilia.desc}</p>
                <div className="grid grid-cols-2 gap-x-2 gap-y-2">
                  {t.suiteFamilia.features.map((f: string, i: number) => (
                    <div key={i} className="flex items-center text-sm text-earth-700">
                      <span className="flex items-center">
                        <Check className="h-4 w-4 text-nature-600 mr-2 shrink-0" />
                        <span className="text-[11px] sm:text-sm leading-tight">{f}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div id="pricing-table" className="max-w-6xl mx-auto scroll-mt-24">
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl md:text-4xl text-earth-900 font-bold mb-2">{t.pricingTitle}</h3>
            <div className="inline-block h-1.5 w-16 bg-nature-500 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Diárias Regulares */}
            <div className="bg-earth-50 p-8 rounded-3xl border border-earth-100 shadow-sm flex flex-col h-full">
              <h4 className="font-serif text-xl font-bold mb-6 flex items-center gap-2 text-earth-900 shrink-0">
                <Info className="h-5 w-5 text-nature-600" /> {t.regularRates}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 flex-grow">
                <div className="space-y-4">
                  <h5 className="text-nature-800 font-bold text-[10px] uppercase tracking-widest border-b border-nature-200 pb-1">
                    {t.essencialTag}
                  </h5>
                  <div className="space-y-3">
                    {essencialRates.map((item: any, i: number) => (
                      <PricingRow key={i} item={item} />
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h5 className="text-earth-800 font-bold text-[10px] uppercase tracking-widest border-b border-earth-200 pb-1">
                    {t.familiaTag}
                  </h5>
                  <div className="space-y-3">
                    {familiaRates.map((item: any, i: number) => (
                      <PricingRow key={i} item={item} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-auto bg-earth-200/50 p-5 rounded-xl text-xs space-y-2 border border-earth-300/30">
                <div className="flex items-center gap-2 text-earth-800">
                  <Clock className="h-4 w-4 shrink-0 text-earth-600" />
                  <span>{t.checkinOut}</span>
                </div>
                <div className="flex items-center gap-2 text-earth-800">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-earth-600" />
                  <span>{t.guarantee}</span>
                </div>
              </div>
            </div>

            {/* Feriados Prolongados - Agora com a mesma formatação das Diárias */}
            <div className="bg-nature-50 p-8 rounded-3xl border border-nature-100 shadow-sm flex flex-col h-full">
              <h4 className="font-serif text-xl font-bold mb-6 flex items-center gap-2 text-nature-900 shrink-0">
                <CalendarDays className="h-5 w-5 text-nature-700" /> {t.holidaysTitle}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-8 flex-grow">
                {t.holidayItems && t.holidayItems.map((h: any, i: number) => (
                  <HolidayRow key={i} name={h.name} date={h.date} />
                ))}
              </div>
              <div className="mt-auto bg-nature-800 text-nature-50 p-5 rounded-xl text-xs leading-relaxed border border-nature-900/10">
                <strong className="block mb-1 flex items-center gap-2">
                  <Info className="h-4 w-4" /> {t.important}
                </strong> 
                {t.importantDesc}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;