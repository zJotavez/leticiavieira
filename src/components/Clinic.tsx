import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Shield, Star, Award, Sparkles } from 'lucide-react';

export function Clinic() {
  const images = [
    {
      url: "/assets/leticia-4.jpg",
      title: "Tecnologia e Cuidado",
      size: "col-span-2 row-span-2"
    },
    {
      url: "/assets/proc-2.jpg",
      title: "Biossegurança Estrita",
      size: "col-span-1 row-span-1"
    },
    {
      url: "/assets/proc-4.jpg",
      title: "Alta Performance",
      size: "col-span-1 row-span-1"
    },
    {
      url: "/assets/leticia-2.jpg",
      title: "Atendimento Humanizado",
      size: "col-span-2 lg:col-span-2 row-span-1"
    }
  ];

  return (
    <section id="clinica" className="py-24 md:py-32 relative z-10 overflow-hidden bg-nude-50/30">
      
      {/* Background Orbs */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[50rem] h-[50rem] bg-radial from-rose-300/10 to-transparent rounded-full pointer-events-none blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-radial from-rose-200/15 to-transparent rounded-full pointer-events-none blur-3xl -z-10" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold tracking-[0.25em] text-rose-500 uppercase block mb-3"
          >
            Nosso Espaço Clínico
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-stone-850 leading-tight mb-6"
          >
            Uma Estrutura Desenhada para o Seu <span className="text-gradient-rose">Conforto</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-stone-500 font-light text-base md:text-lg leading-relaxed"
          >
            Atendemos na conceituada <strong>Odonto Center Oficial</strong> em Fortaleza. Um espaço clínico sofisticado, equipado com as mais recentes inovações e projetado para oferecer tranquilidade e biossegurança.
          </motion.p>
        </div>

        {/* Media and Info Grid (Full Width Gallery) */}
        <div className="mb-24">
          
          {/* Photo Grid Gallery (Full Width - 12 Columns Grid) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`${img.size} rounded-3xl overflow-hidden shadow-md border border-rose-100/50 relative group aspect-[4/3] sm:aspect-auto sm:min-h-[220px] lg:min-h-[260px] card-lift`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent opacity-60 z-10" />
                <img 
                  loading="lazy"
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="text-xs font-semibold text-white/95 px-3 py-1 bg-black/35 backdrop-blur-md rounded-full border border-white/10 uppercase tracking-wider">
                    {img.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Location Section with Styled Map */}
        <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] border border-rose-100/70 shadow-xl shadow-rose-950/5 p-6 sm:p-10 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            
            {/* Map Info (5 Columns) */}
            <div className="lg:col-span-5 space-y-6 md:pr-4">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest bg-rose-50 border border-rose-100 text-rose-500 uppercase inline-block">
                Como Chegar
              </span>
              
              <h3 className="text-2xl font-serif font-semibold text-stone-900 leading-tight">
                Localização Privilegiada na <span className="text-gradient-rose">Aldeota</span>
              </h3>
              
              <p className="text-stone-500 font-light text-sm md:text-base leading-relaxed">
                Facilidade de acesso no coração de Fortaleza. Nosso consultório localiza-se na conceituada clínica odontológica Odonto Center Oficial, garantindo conveniência e infraestrutura corporativa de altíssimo nível.
              </p>

              <div className="space-y-4 pt-4 border-t border-rose-100/60">
                <div className="flex gap-3 items-center">
                  <div className="w-9 h-9 rounded-full bg-rose-50/50 border border-rose-100/60 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-rose-500" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-400 font-medium block">Endereço</span>
                    <span className="text-sm font-semibold text-stone-800">
                      Av. Dom Luís, Aldeota, Fortaleza - CE
                    </span>
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <div className="w-9 h-9 rounded-full bg-rose-50/50 border border-rose-100/60 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-rose-500" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-400 font-medium block">Horários de Atendimento</span>
                    <span className="text-sm font-semibold text-stone-850">
                      Segunda a Sexta • 08:00 às 18:00
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Google Map Widget (7 Columns) */}
            <div className="lg:col-span-7 h-[300px] md:h-[400px] rounded-3xl overflow-hidden border border-rose-100/60 shadow-xl shadow-rose-950/5 relative group">
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.3475960012204!2d-38.4984241253018!3d-3.733959143309252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c748648e562131%3A0x6b7720cfeb3709b!2sAv.%20Dom%20Lu%C3%ADs%20-%20Aldeota%2C%20Fortaleza%20-%20CE!5e0!3m2!1spt-BR!2sbr!4v1716335000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[20%] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
