import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Eye, Info } from 'lucide-react';

const cases = [
  {
    id: "lentes",
    title: "Lentes de Resina Premium",
    subtitle: "Estética de Alta Costura",
    description: "Correção de imperfeições, formato e tonalidade dos dentes utilizando resinas compostas de última geração, esculpidas artesanalmente para máxima naturalidade.",
    before: "/assets/proc-8.jpg",
    after: "/assets/proc-9.jpg",
    details: ["4 sessões de planejamento e execução", "Design personalizado milimétrico", "Sem desgaste invasivo dos dentes", "Brilho e textura idênticos ao esmalte natural"]
  },
  {
    id: "clareamento",
    title: "Clareamento Clínico Premium",
    subtitle: "Luminosidade & Brilho",
    description: "Remoção profunda de manchas e pigmentações através da combinação de laser terapêutico e gel clareador fotoativado de alta concentração.",
    before: "/assets/proc-6.jpg",
    after: "/assets/proc-7.jpg",
    details: ["Apenas 2 sessões clínicas", "Fórmula exclusiva dessensibilizante", "Ganho de até 6 tons na escala profissional", "Preservação integral do esmalte dentário"]
  },
  {
    id: "reabilitacao",
    title: "Reabilitação Oral Estética",
    subtitle: "Restaurando Sorrisos e Função",
    description: "Tratamento multidisciplinar para recomposição de estruturas dentárias danificadas ou ausentes, recuperando estética e função mastigatória de alto padrão.",
    before: "/assets/proc-3.jpg",
    after: "/assets/proc-4.jpg",
    details: ["Abordagem integrada estética/funcional", "Uso de guias digitais de alta precisão", "Recuperação da autoescala facial", "Resultado ultra-duradouro e funcional"]
  },
  {
    id: "ortodontia",
    title: "Ortodontia Estética",
    subtitle: "Sorriso Alinhado e Discreto",
    description: "Correção ortodôntica moderna utilizando alinhadores invisíveis e transparentes, garantindo conforto, previsibilidade digital e máxima discrição ao longo do tratamento.",
    before: "/assets/proc-1.jpg",
    after: "/assets/proc-2.jpg",
    details: ["Planejamento virtual 3D computadorizado", "Alinhadores estéticos 100% invisíveis", "Tratamento mais rápido e confortável", "Sem braquetes ou fios metálicos clássicos"]
  },
  {
    id: "odontopediatria",
    title: "Odontopediatria Preventiva",
    subtitle: "Cuidado e Sensibilidade Infantil",
    description: "Prevenção e acompanhamento odontológico especializado para bebês e crianças, focado em criar memórias positivas e sorrisos saudáveis desde a infância.",
    before: "/assets/proc-5.jpg",
    after: "/assets/proc-6.jpg",
    details: ["Atendimento lúdico e sem traumas", "Prevenção ativa contra cáries", "Orientação de higiene para pais e filhos", "Ambiente preparado para mitigar a ansiedade"]
  }
];

export function BeforeAfter() {
  const [activeCaseIdx, setActiveCaseIdx] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // 0 to 100 percentage
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const activeCase = cases[activeCaseIdx];

  // Reset slider position on case change
  useEffect(() => {
    setSliderPosition(50);
  }, [activeCaseIdx]);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    
    // Bounds check
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1 || isDragging.current) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleStartDrag = () => {
    isDragging.current = true;
  };

  const handleEndDrag = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    const handleMouseUpGlobal = () => {
      isDragging.current = false;
    };
    window.addEventListener('mouseup', handleMouseUpGlobal);
    return () => {
      window.removeEventListener('mouseup', handleMouseUpGlobal);
    };
  }, []);

  return (
    <section id="antes-depois" className="py-32 relative z-10 overflow-hidden bg-gradient-to-b from-white via-rose-50/20 to-white text-stone-800 stardust-bg">
      
      {/* Cinematic grid lines overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(214,116,132,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(214,116,132,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-radial from-rose-200/15 to-transparent rounded-full pointer-events-none blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[50rem] h-[50rem] bg-radial from-rose-100/20 to-transparent rounded-full pointer-events-none blur-3xl" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold tracking-[0.25em] text-rose-500 uppercase block mb-4"
          >
            Galeria de Resultados Reais
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-serif font-semibold leading-tight mb-6"
          >
            A Transformação de <span className="text-gradient">Sorrisos Reais</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-stone-500 font-light text-lg leading-relaxed"
          >
            Interaja com a galeria arrastando a barra central para conferir a precisão biológica e estética alcançada em nossos procedimentos.
          </motion.p>
        </div>

        {/* Case Switcher Tabs */}
        <div className="flex justify-center flex-wrap gap-4 mb-16">
          {cases.map((c, idx) => (
            <button
              key={c.id}
              onClick={() => setActiveCaseIdx(idx)}
              className={`px-6 py-3 rounded-full text-sm font-semibold tracking-wider transition-all duration-300 flex items-center gap-2 border ${
                activeCaseIdx === idx
                  ? "bg-gradient-to-r from-rose-500 to-rose-600 border-rose-450 shadow-lg shadow-rose-950/10 text-white scale-105 cursor-pointer"
                  : "bg-white hover:bg-rose-50/50 border-rose-100/60 text-stone-600 shadow-sm cursor-pointer"
              }`}
            >
              <Sparkles className={`w-4 h-4 ${activeCaseIdx === idx ? "text-white" : "text-rose-500"}`} />
              {c.title.split(" ")[0]} {c.title.split(" ")[1] || ""}
            </button>
          ))}
        </div>

        {/* Dynamic Interactive Frame Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Slider Side - 7 Cols */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            {/* Draggable Slider Window */}
            <div 
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onMouseDown={handleStartDrag}
              onTouchStart={handleStartDrag}
              onMouseLeave={handleEndDrag}
              onTouchEnd={handleEndDrag}
              className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden select-none border border-rose-100 ring-1 ring-rose-50/50 shadow-2xl shadow-rose-950/5 cursor-ew-resize bg-rose-50"
            >
              {/* BEFORE IMAGE (Always Underneath) */}
              <img 
                loading="lazy"
                src={activeCase.before} 
                alt="Antes" 
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
              <div className="absolute top-6 left-6 z-20 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider bg-white/80 backdrop-blur-md border border-rose-100 uppercase text-stone-600 shadow-sm">
                Antes
              </div>

              {/* AFTER IMAGE (Overlay on Top, clipped width based on sliderPosition) */}
              <div 
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
              >
                <img 
                  loading="lazy"
                  src={activeCase.after} 
                  alt="Depois" 
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  style={{ width: containerRef.current?.getBoundingClientRect().width }}
                />
              </div>
              <div 
                className="absolute top-6 right-6 z-20 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider bg-rose-500/85 backdrop-blur-md border border-rose-300/20 uppercase text-white shadow-sm"
                style={{ opacity: sliderPosition < 90 ? 1 : 0, transition: 'opacity 0.2s' }}
              >
                Depois
              </div>

              {/* DRAG HANDLE BAR */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-rose-450 cursor-ew-resize z-30 shadow-[0_0_10px_rgba(214,116,132,0.4)]"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Glowing Interactive Bubble */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white text-rose-600 border border-rose-200 shadow-2xl flex items-center justify-center transition-transform duration-300 hover:scale-110 active:scale-95">
                  <div className="flex gap-1">
                    <span className="text-xs font-black">◀</span>
                    <span className="text-xs font-black">▶</span>
                  </div>
                </div>
              </div>

              {/* Drag instruction overlay (vanishes on slide) */}
              {sliderPosition === 50 && (
                <div className="absolute inset-x-0 bottom-8 flex justify-center pointer-events-none z-20 animate-bounce">
                  <div className="px-6 py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-rose-100 text-stone-600 flex items-center gap-2 text-xs font-medium tracking-wide shadow-lg">
                    <Eye className="w-4 h-4 text-rose-500" />
                    <span>Deslize a barra para comparar</span>
                  </div>
                </div>
              )}
            </div>

            {/* Slider Legend */}
            <p className="text-stone-500 font-light text-xs mt-4 flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-rose-500" />
              Fotos clínicas reais, autorizadas e sem filtros digitais.
            </p>

          </div>

          {/* Text Description Side - 5 Cols */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-xs font-bold tracking-[0.2em] text-rose-500 uppercase mb-3 block">
              {activeCase.subtitle}
            </span>
            <h3 className="text-3xl md:text-4xl font-serif font-semibold text-stone-900 mb-6 leading-tight">
              {activeCase.title}
            </h3>
            <p className="text-stone-600 font-light leading-relaxed text-lg mb-8">
              {activeCase.description}
            </p>

            <hr className="border-rose-100 mb-8" />

            <h4 className="text-sm font-semibold tracking-wider uppercase text-rose-600 mb-4">
              Características & Entregáveis
            </h4>
            <ul className="space-y-3.5">
              {activeCase.details.map((detail, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-rose-500/10 border border-rose-400/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  </span>
                  <span className="text-stone-600 font-light text-sm">{detail}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 flex">
              <a
                href={`https://wa.me/5585999999999?text=Olá%20Dra.%20Letícia!%20Gostaria%20de%20conversar%20sobre%20o%20tratamento%20de%20${encodeURIComponent(activeCase.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl font-bold tracking-wide text-white bg-rose-500 transition-all duration-500 hover:scale-105 btn-premium-fill border border-rose-450/20 shadow-lg shadow-rose-950/10 cursor-pointer"
              >
                Solicitar Meu Estudo Estético
              </a>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
