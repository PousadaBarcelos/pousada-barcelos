import React from 'react';
import { APP_NAME } from '../constants';

interface FooterProps {
  t: any;
  onOpenLegal: (type: 'terms' | 'privacy' | 'cancellation') => void;
}

const Footer: React.FC<FooterProps> = ({ t, onOpenLegal }) => {
  return (
    <footer className="bg-earth-950 text-earth-400 py-10 border-t border-earth-800" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <span className="font-serif text-xl font-bold text-earth-200">{APP_NAME}</span>
          <p className="text-xs mt-1 text-earth-500">© {new Date().getFullYear()} Pousada Barcelos - São Roque de Minas - MG</p>
          <p className="text-[10px] mt-1 opacity-50 uppercase tracking-tighter">{t.developed}</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs md:text-sm">
          <button onClick={() => onOpenLegal('terms')} className="hover:text-nature-400">{t.terms}</button>
          <button onClick={() => onOpenLegal('privacy')} className="hover:text-nature-400">{t.privacy}</button>
          <button onClick={() => onOpenLegal('cancellation')} className="hover:text-nature-400 font-semibold text-earth-300">{t.cancellation}</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
