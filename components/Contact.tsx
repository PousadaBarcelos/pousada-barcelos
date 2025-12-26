import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Navigation } from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_NUMBER, WHATSAPP_LINK, EMAIL_ADDRESS } from '../constants';

interface ContactProps {
  t: any;
}

const Contact: React.FC<ContactProps> = ({ t }) => {
  const MAPS_ROUTE_URL = "https://www.google.com/maps/dir/?api=1&destination=Pousada+Barcelos+Sao+Roque+de+Minas";

  return (
    <section id="contact" className="relative py-20 bg-earth-900 text-earth-100 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Cabeçalho Centralizado */}
        <div className="mb-12">
          <h2 className="font-serif text-3xl md:text-5xl text-white font-bold mb-6">{t.title}</h2>
          <p className="text-earth-300 text-lg max-w-2xl mx-auto">{t.subtitle}</p>
        </div>
        
        {/* Grade de Informações de Contato */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16 max-w-4xl mx-auto">
          {/* WhatsApp Interativo */}
          <a 
            href={WHATSAPP_LINK} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-4 group p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all text-left"
          >
            <div className="p-3 bg-nature-600 text-white rounded-xl shadow-lg group-hover:bg-nature-500 transition-colors">
              <MessageCircle className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider">WhatsApp</h4>
              <p className="text-earth-300 group-hover:text-nature-400 transition-colors font-medium">{WHATSAPP_NUMBER}</p>
            </div>
          </a>
          
          {/* Telefone Interativo */}
          <a 
            href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`} 
            className="flex items-center gap-4 group p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all text-left"
          >
            <div className="p-3 bg-nature-600 text-white rounded-xl shadow-lg group-hover:bg-nature-500 transition-colors">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider">{t.infoPhone}</h4>
              <p className="text-earth-300 group-hover:text-nature-400 transition-colors font-medium">{PHONE_NUMBER}</p>
            </div>
          </a>
          
          {/* Email Interativo */}
          <a 
            href={`mailto:${EMAIL_ADDRESS}`} 
            className="flex items-center gap-4 group p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all text-left"
          >
            <div className="p-3 bg-nature-600 text-white rounded-xl shadow-lg group-hover:bg-nature-500 transition-colors">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider">{t.infoEmail}</h4>
              <p className="text-earth-300 group-hover:text-nature-400 transition-colors font-medium">{EMAIL_ADDRESS}</p>
            </div>
          </a>
          
          {/* Localização Interativa */}
          <a 
            href={MAPS_ROUTE_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-4 group p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all text-left"
          >
            <div className="p-3 bg-nature-600 text-white rounded-xl shadow-lg group-hover:bg-nature-500 transition-colors">
              <MapPin className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h4 className="text-white font-bold text-sm uppercase tracking-wider">{t.infoLocation}</h4>
                <Navigation className="h-3 w-3 text-nature-400 animate-pulse" />
              </div>
              <p className="text-earth-300 group-hover:text-nature-400 transition-colors font-medium line-clamp-1">{t.fullAddress}</p>
            </div>
          </a>
        </div>

        {/* Mapa de Localização Centralizado e Largo */}
        <div className="w-full h-[350px] md:h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 relative group mx-auto max-w-4xl">
          <iframe 
            title="Localização Pousada Barcelos"
            src="https://maps.google.com/maps?q=Pousada%20Barcelos%20S%C3%A3o%20Roque%20de%20Minas&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(10%) contrast(1.1) opacity(0.9)' }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="absolute inset-0 bg-nature-900/10 pointer-events-none group-hover:bg-transparent transition-colors duration-500"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;