import { motion } from 'motion/react';
import { Sparkles, Calendar } from 'lucide-react';

export function MidCTA() {
  // WhatsApp link generator
  const whatsappUrl = "https://wa.me/5585999999999?text=Olá%20Dra.%20Letícia!%20Gostaria%20de%20agendar%20uma%20consulta%20e%20saber%20mais%20sobre%20os%20seus%20atendimentos.";

  return (
    <section className="relative z-10 py-36 overflow-hidden bg-gradient-to-r from-nude-50 to-rose-50/60">
      
      {/* High-res Clinical Background Image & Luxury Glow */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          loading="lazy"
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 0.50, scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          viewport={{ once: true }}
          src="/assets/proc-5.jpg"
          alt="Clínica Letícia Iluminação"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent" />
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-rose-200/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[30vw] h-[30vw] bg-rose-200/15 blur-[130px] rounded-full pointer-events-none" />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <div className="max-w-2xl">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider bg-rose-50 text-rose-600 border border-rose-100 uppercase mb-6">
              <Sparkles className="w-3 h-3 text-rose-500" /> Cuidado Exclusivo & Estética
            </span>
            
            <h2 className="text-4xl md:text-6xl font-serif font-semibold text-stone-900 mb-6 leading-tight">
              A harmonia e saúde do seu sorriso em <span className="text-gradient">boas mãos.</span>
            </h2>
            
            <p className="text-stone-600 text-lg font-light mb-12 leading-relaxed max-w-xl">
              Dê o primeiro passo em direção ao sorriso dos seus sonhos. Desenvolvemos planejamentos sob medida com rigor técnico exemplar e o acolhimento acolhedor que você merece.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.08,
                boxShadow: "0px 20px 40px rgba(156, 62, 78, 0.1)"
              }}
              whileTap={{ scale: 0.96 }}
              animate={{ 
                boxShadow: [
                  "0px 10px 25px rgba(214, 116, 132, 0.1)",
                  "0px 10px 35px rgba(214, 116, 132, 0.2)",
                  "0px 10px 25px rgba(214, 116, 132, 0.1)"
                ] 
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                scale: {
                  type: "spring",
                  stiffness: 400,
                  damping: 15
                }
              }}
              className="relative inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-semibold tracking-wide text-white bg-rose-500 transition-all duration-300 cursor-pointer shadow-lg overflow-hidden group btn-premium-fill border border-rose-450/20"
            >
              {/* Shiny reflection sweep bar */}
              <motion.div 
                animate={{ 
                  left: ["-100%", "200%"] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  repeatDelay: 2
                }}
                className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 pointer-events-none" 
              />
              
              <Calendar className="w-5 h-5 text-white" />
              <span>Agendar Minha Consulta de Excelência</span>
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
