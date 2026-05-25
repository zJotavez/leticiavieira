import { motion } from 'motion/react';
import { useState } from 'react';

const techCards = [
  { 
    title: "Odontologia de Excelência", 
    desc: "Graduada pela Faculdade Paulo Picanço, com sólida bagagem teórica e prática.",
    video: "/assets/video-1.mp4"
  },
  { 
    title: "Estética Avançada", 
    desc: "Formação complementar voltada para estética odontológica através do curso Croma.",
    video: "/assets/video-5.mp4"
  },
  { 
    title: "Atendimento Humanizado", 
    desc: "Abordagem focada em conexão próxima, gerando segurança para adultos e crianças.",
    video: "/assets/video-2.mp4"
  },
  { 
    title: "Experiência Clínica", 
    desc: "Atuação na Odonto Center Oficial e prática em cirurgias orais menores (liga infantil).",
    video: "/assets/video-6.mp4"
  },
];

const marqueeItems = [
  "ESTÉTICA ODONTOLÓGICA",
  "ATENDIMENTO HUMANIZADO",
  "LENTES DE RESINA",
  "CLAREAMENTO PREMIUM",
  "ODONTOPEDIATRIA",
  "CIRURGIA INTEGRADA",
  "TECNOLOGIA AVANÇADA",
  "CUIDADO EXCLUSIVO",
];

export function About() {
  // 3D Portrait Rotation state
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    setRotate({
      x: (yc - y) / 15,
      y: (x - xc) / 15
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <section className="py-24 relative z-10 overflow-hidden bg-white/20">
      
      {/* 4. Infinite Lateral Loop Marquee (Faixa Lateral) - Soft Clean Gradient */}
      <div className="w-full overflow-hidden py-5 bg-gradient-to-r from-rose-50 via-rose-100/30 to-rose-50 text-rose-700 select-none whitespace-nowrap flex border-y border-rose-200/40 shadow-sm mb-24">
        <div className="flex gap-20 animate-marquee-left shrink-0 font-medium tracking-[0.2em] text-sm uppercase">
          {marqueeItems.concat(marqueeItems).map((item, idx) => (
            <span key={idx} className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-rose-450" />
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Image & 3D Parallax hover effects */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              style={{
                transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                transition: 'transform 0.1s ease-out'
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] ring-1 ring-rose-100/50 shadow-2xl shadow-rose-900/5 group cursor-pointer bg-stone-950"
            >
              <img 
                loading="lazy"
                src="/assets/leticia-2.jpg" 
                alt="Dra. Letícia Barbosa Vieira" 
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent pointer-events-none" />
              
              {/* Floating luxury glass badge */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-8 left-8 right-8 glass-panel p-6 rounded-2xl border border-rose-100/40 shadow-xl"
              >
                <p className="font-serif italic text-lg text-stone-800 leading-snug">
                  "Cada sorriso possui uma história única. Minha missão é unir tecnologia e sensibilidade para cuidar de pessoas."
                </p>
              </motion.div>
            </motion.div>

            {/* Glowing Tech Lines */}
            <div className="absolute -inset-4 border border-rose-200/20 rounded-[3rem] pointer-events-none -z-10 animate-pulse" />
          </div>

          {/* Right Column: Bio & Clinical Video Background Cards */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-stone-900 mb-6 leading-tight">
                Unindo sensibilidade, <span className="text-gradient">técnica e acolhimento.</span>
              </h2>
              <p className="text-stone-600 text-lg font-light leading-relaxed mb-12">
                Com uma visão contemporânea e focada em odontologia de alta performance, a Dra. Letícia Barbosa Vieira une rigor científico, sensibilidade artística e inovação para desenhar sorrisos saudáveis e harmônicos. Atuando na renomada Odonto Center Oficial em Fortaleza, ela desenvolve tratamentos personalizados com tecnologia de ponta, proporcionando uma experiência leve, segura e acolhedora que redefine o cuidado bucal.
              </p>
            </motion.div>

            {/* Tech Cards Grid with Video Backgrounds - DESKTOP (Optimized Preload) */}
            <div className="hidden md:grid grid-cols-2 gap-6 mb-6">
              {techCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6 }}
                  className="relative h-64 rounded-2xl overflow-hidden bg-stone-950 group flex flex-col justify-end p-6 border border-stone-800/40 shadow-lg cursor-pointer"
                >
                  {/* Silent loop preview video inside the card background - Preload None */}
                  <video 
                    preload="none"
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 pointer-events-none"
                  >
                    <source src={card.video} type="video/mp4" />
                  </video>
                  
                  {/* High contrast neutral vignette overlay for absolute legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent pointer-events-none" />

                  {/* Tech Floating Content */}
                  <div className="relative z-10 text-white">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-rose-100 transition-colors">{card.title}</h3>
                    <p className="text-xs text-stone-200/90 font-light leading-relaxed group-hover:text-white transition-colors">{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tech Cards Marquee loop with Video Backgrounds - MOBILE (Optimized Preload) */}
            <div className="w-full overflow-hidden py-4 flex md:hidden relative select-none">
              <div className="flex gap-4 animate-marquee-left shrink-0">
                {techCards.concat(techCards).map((card, idx) => (
                  <div
                    key={`marquee-${idx}`}
                    className="w-[280px] h-64 shrink-0 relative rounded-2xl overflow-hidden group flex flex-col justify-end p-6 border border-stone-800/40 shadow-lg cursor-pointer bg-stone-950"
                  >
                    <video 
                      preload="none"
                      autoPlay 
                      muted 
                      loop 
                      playsInline 
                      className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none"
                    >
                      <source src={card.video} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent pointer-events-none" />
                    <div className="relative z-10 text-white whitespace-normal">
                      <h3 className="text-lg font-semibold mb-2 text-rose-100">{card.title}</h3>
                      <p className="text-xs text-stone-200 font-light leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
