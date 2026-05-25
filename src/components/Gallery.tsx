import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, X, Sparkles } from 'lucide-react';

const galleryItems = [
  // Videos (Reels)
  {
    id: "vid-3",
    type: "video",
    category: "reels",
    url: "/assets/video-3.mp4",
    title: "Experiência Premium",
    desc: "Um passeio rápido pelo nosso espaço planejado nos mínimos detalhes para o seu relaxamento e conforto."
  },
  {
    id: "vid-2",
    type: "video",
    category: "reels",
    url: "/assets/video-2.mp4",
    title: "Bastidores & Tecnologia",
    desc: "Nossos equipamentos em ação garantindo precisão milimétrica em tratamentos estéticos."
  },
  {
    id: "vid-4",
    type: "video",
    category: "reels",
    url: "/assets/video-4.mp4",
    title: "Leveza nos Procedimentos",
    desc: "Demonstração prática de um atendimento acolhedor focado em biossegurança e conforto do paciente."
  },
  {
    id: "vid-1",
    type: "video",
    category: "reels",
    url: "/assets/video-1.mp4",
    title: "Odontologia Avançada",
    desc: "Momentos de planejamento digital e foco no desenvolvimento de sorrisos únicos e funcionais."
  },
  {
    id: "vid-5",
    type: "video",
    category: "reels",
    url: "/assets/video-5.mp4",
    title: "Estética em Foco",
    desc: "Cuidado e carinho meticuloso na finalização de restaurações e procedimentos clareadores."
  },
  {
    id: "vid-6",
    type: "video",
    category: "reels",
    url: "/assets/video-6.mp4",
    title: "Biossegurança Integrada",
    desc: "Acompanhe os cuidados rigorosos e a precisão clínica nos procedimentos cirúrgicos de menor porte."
  },
  {
    id: "vid-7",
    type: "video",
    category: "reels",
    url: "/assets/video-7.mp4",
    title: "Transformação do Sorriso",
    desc: "Acompanhe de perto a precisão e a suavidade em cada etapa de nossas restaurações estéticas de alta performance."
  },
  // Photos - Leticia
  {
    id: "let-main",
    type: "image",
    category: "leticia",
    url: "/assets/leticia-main.jpg",
    title: "Dra. Letícia Barbosa",
    desc: "Liderando com precisão técnica e um olhar voltado para o bem-estar e a sensibilidade humana."
  },
  {
    id: "let-1",
    type: "image",
    category: "leticia",
    url: "/assets/leticia-1.jpg",
    title: "Selo de Excelência",
    desc: "Dra. Letícia em ambiente clínico focado em alta tecnologia e segurança biológica."
  },
  {
    id: "let-2",
    type: "image",
    category: "leticia",
    url: "/assets/leticia-2.jpg",
    title: "Dedicação & Sensibilidade",
    desc: "Focada no bem-estar integral e no atendimento personalizado para cada história de vida."
  },
  {
    id: "let-3",
    type: "image",
    category: "leticia",
    url: "/assets/leticia-3.jpg",
    title: "Odontologia com Propósito",
    desc: "Construindo sorrisos e transformando vidas através de um olhar empático, atencioso e acolhedor."
  },
  {
    id: "let-4",
    type: "image",
    category: "leticia",
    url: "/assets/leticia-4.jpg",
    title: "Espaço Integrado",
    desc: "Pronto para receber você com toda a infraestrutura moderna e o carinho que seu sorriso merece."
  },
  // Photos - Procedures
  {
    id: "proc-1",
    type: "image",
    category: "procedures",
    url: "/assets/proc-1.jpg",
    title: "Planejamento e Precisão",
    desc: "Equipamentos modernos e técnicas avançadas para procedimentos seguros, confortáveis e precisos."
  },
  {
    id: "proc-2",
    type: "image",
    category: "procedures",
    url: "/assets/proc-2.jpg",
    title: "Cuidado Humanizado",
    desc: "Uma abordagem leve e empática que desmistifica o tratamento odontológico, trazendo paz e sorrisos."
  },
  {
    id: "proc-3",
    type: "image",
    category: "procedures",
    url: "/assets/proc-3.jpg",
    title: "Estética & Clareamento",
    desc: "Resultados com brilho e naturalidade, realçando a beleza única de cada sorriso através de clareamentos seguros."
  },
  {
    id: "proc-4",
    type: "image",
    category: "procedures",
    url: "/assets/proc-4.jpg",
    title: "Restaurações Estéticas",
    desc: "Foco total nos detalhes para alcançar a perfeição anatômica e cor natural nos procedimentos de resinas."
  },
  {
    id: "proc-5",
    type: "image",
    category: "procedures",
    url: "/assets/proc-5.jpg",
    title: "Tecnologia Clínica",
    desc: "Materiais restauradores de alta tecnologia e biossegurança rigorosa em cada etapa clínica."
  },
  {
    id: "proc-6",
    type: "image",
    category: "procedures",
    url: "/assets/proc-6.jpg",
    title: "Biossegurança de Alta Classe",
    desc: "Protocolos rígidos de esterilização e conforto extremo para cirurgias e atendimentos clínicos."
  },
  {
    id: "proc-7",
    type: "image",
    category: "procedures",
    url: "/assets/proc-7.jpg",
    title: "Acabamento Meticuloso",
    desc: "Etapa essencial de acabamento e polimento estético para garantir textura natural e brilho duradouro."
  },
  {
    id: "proc-8",
    type: "image",
    category: "procedures",
    url: "/assets/proc-8.jpg",
    title: "Análise Facial Integrada",
    desc: "Planejamento personalizado do sorriso alinhado aos contornos faciais do paciente."
  },
  {
    id: "proc-9",
    type: "image",
    category: "procedures",
    url: "/assets/proc-9.jpg",
    title: "Odontologia Preventiva",
    desc: "Checkup preventivo completo garantindo longevidade, saúde e sorrisos leves para toda a vida."
  }
];

// Divide items systematically to maintain rich visual variety across two rows
const row1Items = galleryItems.filter((_, idx) => idx % 2 === 0);
const row2Items = galleryItems.filter((_, idx) => idx % 2 !== 0);

export function Gallery() {
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  const toggleModalPlay = () => {
    if (modalVideoRef.current) {
      if (videoPlaying) {
        modalVideoRef.current.pause();
      } else {
        modalVideoRef.current.play();
      }
      setVideoPlaying(!videoPlaying);
    }
  };

  const handleItemClick = (item: typeof galleryItems[0]) => {
    setSelectedItem(item);
    setVideoPlaying(item.type === 'video');
  };

  return (
    <section id="galeria" className="py-24 relative z-10 overflow-hidden bg-gradient-to-b from-white via-rose-50/20 to-white stardust-bg">
      {/* Immersive pink glow elements */}
      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-rose-300/10 rounded-full filter blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-pink-300/8 rounded-full filter blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-20 mb-16">
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-rose-100">
          <div>
            <span className="text-xs font-bold tracking-[0.25em] text-rose-500 uppercase block mb-4">
              Galeria de Excelência
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 font-semibold">
              Cuidado em <span className="text-gradient italic font-medium">Movimento & Arte</span>
            </h2>
          </div>
          
          <p className="text-stone-600 font-light text-base lg:text-lg max-w-md lg:mb-1 leading-relaxed">
            Explore os bastidores do consultório, os procedimentos estéticos minuciosos e a tecnologia aplicada ao cuidado do seu sorriso de forma dinâmica.
          </p>
        </div>
      </div>

      {/* Dual Row Looping Marquee container */}
      <div className="flex flex-col gap-6 w-full overflow-hidden select-none">
        
        {/* Row 1: Looping Left */}
        <div className="flex w-full overflow-hidden relative">
          <div className="flex gap-6 animate-marquee-left hover:[animation-play-state:paused] shrink-0 min-w-full">
            {row1Items.concat(row1Items).map((item, idx) => (
              <div
                key={`row1-${item.id}-${idx}`}
                onClick={() => handleItemClick(item)}
                className={`group relative rounded-[2rem] overflow-hidden bg-white border border-rose-100 hover:border-rose-300 hover:shadow-xl hover:shadow-rose-100 transition-all duration-500 cursor-pointer flex flex-col justify-between shrink-0 ${
                  item.type === 'video' ? 'w-[230px] aspect-[9/16]' : 'w-[230px] aspect-[4/5]'
                }`}
              >
                {item.type === 'image' ? (
                  <div className="absolute inset-0 z-0">
                    <img 
                      loading="lazy"
                      src={item.url} 
                      alt={item.title} 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                    />
                  </div>
                ) : (
                  <div className="absolute inset-0 z-0 bg-rose-50">
                    <video
                      preload="metadata"
                      src={item.url}
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-95 transition-opacity duration-700 pointer-events-none"
                      onMouseEnter={(e) => (e.target as HTMLVideoElement).play()}
                      onMouseLeave={(e) => {
                        const v = e.target as HTMLVideoElement;
                        v.pause();
                        v.currentTime = 0;
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-rose-500 group-hover:border-transparent transition-all duration-300 shadow-md">
                        <Play className="w-4 h-4 fill-white ml-0.5" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/10 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none z-10" />

                {/* Bottom text */}
                <div className="relative z-20 mt-auto p-5 text-left pointer-events-none">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-rose-300 mb-0.5 block">
                    {item.category === 'leticia' ? 'Dra. Letícia' : item.category === 'procedures' ? 'Estética Clínica' : 'Reels Clínico'}
                  </span>
                  <h3 className="text-white text-base font-serif font-medium mb-0.5 group-hover:text-rose-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-stone-200 font-light text-[10px] leading-relaxed line-clamp-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Looping Right */}
        <div className="flex w-full overflow-hidden relative">
          <div className="flex gap-6 animate-marquee-right hover:[animation-play-state:paused] shrink-0 min-w-full">
            {row2Items.concat(row2Items).map((item, idx) => (
              <div
                key={`row2-${item.id}-${idx}`}
                onClick={() => handleItemClick(item)}
                className={`group relative rounded-[2rem] overflow-hidden bg-white border border-rose-100 hover:border-rose-300 hover:shadow-xl hover:shadow-rose-100 transition-all duration-500 cursor-pointer flex flex-col justify-between shrink-0 ${
                  item.type === 'video' ? 'w-[230px] aspect-[9/16]' : 'w-[230px] aspect-[4/5]'
                }`}
              >
                {item.type === 'image' ? (
                  <div className="absolute inset-0 z-0">
                    <img 
                      loading="lazy"
                      src={item.url} 
                      alt={item.title} 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                    />
                  </div>
                ) : (
                  <div className="absolute inset-0 z-0 bg-rose-50">
                    <video
                      preload="metadata"
                      src={item.url}
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-95 transition-opacity duration-700 pointer-events-none"
                      onMouseEnter={(e) => (e.target as HTMLVideoElement).play()}
                      onMouseLeave={(e) => {
                        const v = e.target as HTMLVideoElement;
                        v.pause();
                        v.currentTime = 0;
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-rose-500 group-hover:border-transparent transition-all duration-300 shadow-md">
                        <Play className="w-4 h-4 fill-white ml-0.5" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/10 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none z-10" />

                {/* Bottom text */}
                <div className="relative z-20 mt-auto p-5 text-left pointer-events-none">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-rose-300 mb-0.5 block">
                    {item.category === 'leticia' ? 'Dra. Letícia' : item.category === 'procedures' ? 'Estética Clínica' : 'Reels Clínico'}
                  </span>
                  <h3 className="text-white text-base font-serif font-medium mb-0.5 group-hover:text-rose-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-stone-200 font-light text-[10px] leading-relaxed line-clamp-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Luxo Theater Modal Player (Pristine Light Rose and White Theme) */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-premium bg-rose-950/15"
          >
            <div className="absolute inset-0 cursor-pointer" onClick={() => setSelectedItem(null)} />
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-md aspect-[9/16] max-h-[85vh] bg-white border border-rose-100 rounded-[2.5rem] overflow-hidden shadow-2xl z-10 flex flex-col justify-end"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 z-30 p-2.5 bg-rose-50/80 hover:bg-rose-100 border border-rose-200/50 rounded-full text-rose-700 transition-all hover:scale-105 cursor-pointer flex items-center shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>

              {selectedItem.type === 'video' ? (
                // Video Modal View (Portrait style card)
                <div className="absolute inset-0 bg-stone-900 flex items-center justify-center">
                  <video
                    ref={modalVideoRef}
                    src={selectedItem.url}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-contain"
                    onClick={toggleModalPlay}
                    onPlay={() => setVideoPlaying(true)}
                    onPause={() => setVideoPlaying(false)}
                  />
                  {/* Centered play indicator */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    onClick={toggleModalPlay}
                  >
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: videoPlaying ? 0 : 1, scale: videoPlaying ? 0.8 : 1 }}
                      className="w-16 h-16 rounded-full bg-rose-500/20 backdrop-blur-md border border-rose-400/20 flex items-center justify-center text-rose-600 pointer-events-none shadow-lg"
                    >
                      {videoPlaying ? <Pause className="w-6 h-6 fill-rose-600" /> : <Play className="w-6 h-6 fill-rose-600 ml-0.5" />}
                    </motion.div>
                  </div>
                </div>
              ) : (
                // Photo Modal View (Direct fullscreen static image)
                <div className="absolute inset-0 bg-stone-900 flex items-center justify-center">
                  <img src={selectedItem.url} alt={selectedItem.title} className="w-full h-full object-contain" />
                </div>
              )}

              {/* bottom metadata overlay */}
              <div className="relative z-20 p-8 text-left bg-gradient-to-t from-white via-white/95 to-transparent pointer-events-none">
                <span className="text-rose-600 font-semibold tracking-widest text-[10px] uppercase mb-1.5 block">
                  {selectedItem.category === 'leticia' ? 'Dra. Letícia Barbosa' : selectedItem.category === 'procedures' ? 'Estética Clínica' : 'Reels Clínico'}
                </span>
                <h4 className="text-xl font-serif text-stone-900 mb-2 leading-tight">{selectedItem.title}</h4>
                <p className="text-stone-600 font-light text-xs leading-relaxed mb-4">
                  {selectedItem.desc}
                </p>
                <div className="border-t border-rose-100 pt-4 flex justify-between items-center text-[10px] text-stone-400 font-medium">
                  <span>{selectedItem.type === 'video' ? 'VÍDEO EM LOOP SILENCIOSO' : 'GALERIA FOTOGRÁFICA'}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
