import React from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'terms' | 'privacy' | 'cancellation' | null;
  t: any;
}

const LegalModals: React.FC<LegalModalProps> = ({ isOpen, onClose, type, t }) => {
  if (!isOpen || !type || !t) return null;

  const activeContent = t[type];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-earth-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      {/* Modal Card */}
      <div className="relative bg-white w-full max-w-2xl max-h-[80vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col transform transition-all animate-fade-in-up">
        <div className="flex items-center justify-between p-6 border-b border-earth-100 bg-earth-50">
          <h3 className="font-serif text-xl md:text-2xl font-bold text-earth-900">
            {activeContent.title}
          </h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-earth-200 rounded-full transition-colors text-earth-600"
            aria-label="Fechar"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 md:p-8 text-earth-700 leading-relaxed text-sm md:text-base">
          {activeContent.intro && (
            <p className="mb-6 italic text-earth-500">{activeContent.intro}</p>
          )}
          
          <div className="space-y-6">
            {activeContent.sections.map((section: any, idx: number) => (
              <section key={idx}>
                <h4 className={`font-bold mb-2 ${section.alert ? 'text-nature-800 underline' : 'text-earth-900'}`}>
                  {section.h}
                </h4>
                <p className={section.alert ? 'font-semibold text-nature-900' : ''}>
                  {section.p}
                </p>
                {section.list && (
                  <ul className="list-disc ml-5 mt-2 space-y-1">
                    {section.list.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
        
        <div className="p-4 border-t border-earth-100 bg-earth-50 text-center">
          <button 
            onClick={onClose}
            className="px-8 py-2 bg-earth-900 text-white rounded-full font-bold hover:bg-earth-800 transition-colors"
          >
            {t.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModals;