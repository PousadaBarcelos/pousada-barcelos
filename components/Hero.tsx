import { HERO_BG_IMAGE } from '../constants';

interface HeroProps {
  t: {
    title: string;
    description: string;
    btnRooms: string;
    btnAbout: string;
  };
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_BG_IMAGE})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative z-10 text-center animation-fade-in-up px-4">
        <div className="inline-block">
          <h1 className="text-[3.3rem] md:text-[5rem] leading-none md:leading-tight font-serif font-bold [word-spacing:0.0em]">{t.title}</h1>
          <p className="mt-4 text-lg md:text-xl text-balance">{t.description}</p>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="inline-grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="#rooms" className="btn-primary">
              {t.btnRooms}
            </a>
            <a href="#about" className="btn-secondary">
              {t.btnAbout}
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-down-arrow">
        <a href="#about">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
