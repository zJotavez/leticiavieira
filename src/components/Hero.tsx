import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useRef, useState } from 'react';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Coordinates for Parallax Mouse Movement
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 30;
    const y = (e.clientY - rect.top - rect.height / 2) / 30;
    setMouseCoords({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseCoords({ x: 0, y: 0 });
  };

  const whatsappUrl = "https://wa.me/5585999999999?text=Olá%20Dra.%20Letícia!%20Gostaria%20de%20agendar%20uma%20consulta.";

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-28 pb-16 bg-gradient-to-b from-white via-rose-50/20 to-white"
    >
      {/* Cinematic High-Visibility Background Video Loop - Optimized Preload */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          preload="auto"
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-85 transition-opacity duration-1000"
        >
          <source src="/assets/video-4.mp4" type="video/mp4" />
        </video>
        {/* Soft high-tech clinical dynamic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none" />
        
        {/* Subtle pink/rose flare in the background */}
        <div className="absolute top-1/4 right-1/4 w-[40vw] h-[40vw] rounded-full bg-rose-200/10 blur-[130px] pointer-events-none" />
        
        {/* Animated Grid Lines for technological medical texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(214,116,132,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(214,116,132,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading and CTAs */}
          <div className="lg:col-span-7 text-left">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.05s', opacity: 0 }}>
              <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-sm font-semibold text-rose-600 mb-6 border border-rose-100/65 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse shadow-[0_0_8px_rgba(214,116,132,0.4)]" />
                Dra. Letícia Barbosa Vieira | Odontologia de Alta Performance
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-serif font-semibold leading-[1.12] text-stone-900 mb-6 animate-fade-in-up" style={{ animationDelay: '0.15s', opacity: 0 }}>
              Seu sorriso com a <span className="text-gradient-rose italic font-medium">naturalidade e a leveza</span> que você merece.
            </h1>

            <p className="text-lg md:text-xl text-stone-600 mb-10 max-w-2xl font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.25s', opacity: 0 }}>
              Com técnicas estéticas modernas e um cuidado verdadeiramente humanizado em Fortaleza, criamos a harmonia perfeita entre a saúde bucal e a beleza única do seu sorriso.
            </p>

            <div className="flex animate-fade-in-up" style={{ animationDelay: '0.35s', opacity: 0 }}>
              {/* Premium Magnetic CTA Button with Outer Pulsing Glow & Background Expand Effect */}
              <motion.a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  x: mouseCoords.x * 0.4,
                  y: mouseCoords.y * 0.4,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex items-center justify-center gap-3 px-10 py-5 bg-rose-500 text-white rounded-2xl overflow-hidden shadow-[0_10px_35px_rgba(214,116,132,0.18)] border border-white/10 magnetic-button btn-premium-fill cursor-pointer"
              >
                {/* Shining Overlay Flow */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] transition-transform pointer-events-none" />
                
                <span className="relative z-10 font-semibold tracking-wide text-lg">Agendar Consulta</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </motion.a>
            </div>
          </div>

          {/* Right Column: Premium High-Design Parallax Photo Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative mt-8 lg:mt-0 animate-fade-in-up" style={{ animationDelay: '0.35s', opacity: 0 }}>
            {/* Glowing soft blush borders behind portrait */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-rose-300 via-rose-200 to-rose-100 rounded-[2.8rem] opacity-30 blur-lg -z-10 animate-pulse pointer-events-none" style={{ animationDuration: '6s' }} />
            
            <motion.div
              style={{
                x: -mouseCoords.x * 0.6,
                y: -mouseCoords.y * 0.6,
                rotateX: -mouseCoords.y * 0.15,
                rotateY: mouseCoords.x * 0.15,
              }}
              className="relative w-full max-w-[360px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_rgba(214,116,132,0.08)] border-2 border-white bg-white/20 backdrop-blur-md group cursor-pointer"
            >
              <img 
                fetchPriority="high"
                src="/assets/leticia-main.jpg" 
                alt="Dra. Letícia Barbosa Vieira" 
                className="w-full h-full object-cover object-center transition-transform duration-[1.5s] ease-out group-hover:scale-105"
              />
              
              {/* Fine subtle overlay for high premium authority feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Glowing technological design rings */}
            <div className="absolute -inset-4 border-2 border-rose-300/10 rounded-[3rem] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '4s' }} />
            <div className="absolute -inset-8 border border-rose-200/10 rounded-[3.5rem] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '6s' }} />
          </div>

        </div>
      </div>
    </section>
  );
}


