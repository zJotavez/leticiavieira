import { motion } from 'motion/react';
import { Sparkles, Shield, Heart, Play } from 'lucide-react';

const reasons = [
  { 
    icon: Heart, 
    title: "Odontologia Humanizada", 
    desc: "Abordagem acolhedora e sensível focada em consultas leves, seguras e tranquilas para adultos e crianças." 
  },
  { 
    icon: Sparkles, 
    title: "Estética de Alta Performance", 
    desc: "Sorrisos harmônicos e saudáveis desenhados com resinas compostas premium e materiais estéticos de última geração." 
  },
  { 
    icon: Shield, 
    title: "Compromisso e Dedicação", 
    desc: "Rigor técnico e atualização contínua pela Faculdade Paulo Picanço e curso Croma para assegurar excelência clínica." 
  }
];

export function WhyChooseUs() {
  return (
    <section id="diferenciais" className="py-24 md:py-32 relative z-10 overflow-hidden bg-gradient-to-b from-white via-rose-50/10 to-white">
      
      {/* Visual background lights */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-radial from-rose-300/10 to-transparent rounded-full pointer-events-none blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-[40rem] h-[40rem] bg-radial from-rose-200/15 to-transparent rounded-full pointer-events-none blur-3xl -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Centered Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold tracking-[0.2em] text-rose-500 uppercase block mb-4"
          >
            Diferenciais Clínicos
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-serif font-semibold text-stone-850 mb-6 leading-tight"
          >
            Cuidado que Inspira <span className="text-gradient">Confiança Real</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-stone-500 font-light text-base md:text-lg leading-relaxed"
          >
            Unimos o que há de mais moderno em tecnologia com um atendimento acolhedor para transformar sua experiência odontológica.
          </motion.p>
        </div>

        {/* 4-Column Grid: 3 reasons + 1 immersive loop video card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          
          {reasons.map((reason, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel p-8 rounded-[2.5rem] border border-rose-100 bg-white/60 flex flex-col justify-between items-center text-center shadow-lg hover:shadow-xl transition-all duration-300 relative group min-h-[300px] card-lift"
            >
              {/* Card Header Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-rose-50 to-rose-100 border border-rose-100/60 flex items-center justify-center shadow-md shadow-rose-950/5 group-hover:bg-rose-500 group-hover:scale-110 transition-all duration-300">
                <reason.icon className="w-7 h-7 text-rose-500 group-hover:text-white transition-colors" strokeWidth={1.5} />
              </div>
              
              {/* Card Content */}
              <div className="my-6">
                <h3 className="text-xl font-semibold text-stone-850 mb-3 group-hover:text-rose-600 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-stone-500 font-light text-sm leading-relaxed">
                  {reason.desc}
                </p>
              </div>
              
              {/* Subtle decorative gold details */}
              <div className="w-8 h-[2px] bg-gradient-to-r from-rose-350 to-rose-400 opacity-60 rounded-full" />
            </motion.div>
          ))}

          {/* 4th Card: Immersive Clinical Video Loop Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.36, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-[2.5rem] overflow-hidden border border-rose-100/50 shadow-lg bg-rose-50 min-h-[300px] flex flex-col justify-end card-lift"
          >
            <video 
              preload="metadata"
              autoPlay 
              muted 
              loop 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-1000"
            >
              <source src="/assets/video-3.mp4" type="video/mp4" />
            </video>
            
            {/* Elegant dark tech grid layout and vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent pointer-events-none" />
            
            {/* Ambient neon outline */}
            <div className="absolute inset-4 border border-white/20 rounded-[2rem] pointer-events-none flex flex-col justify-end p-4 z-10">
              <div className="glass-panel p-4 rounded-2xl border border-rose-100/35 shadow-xl backdrop-blur-md">
                <span className="inline-flex items-center gap-1.2 px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-wider bg-rose-500 text-white uppercase mb-1">
                  <Play className="w-2 h-2 fill-current" /> Clínica Digital
                </span>
                <p className="text-stone-800 font-serif italic text-xs leading-snug">
                  Tecnologia e biossegurança classe hospitalar.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
