import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, MapPin, Phone, Mail, Instagram, ExternalLink } from 'lucide-react';

export function FooterCTA() {
  const whatsappUrl = "https://wa.me/5585999999999?text=Olá%20Dra.%20Letícia!%20Gostaria%20de%20agendar%20uma%20avaliação.";
  const doubtsUrl = "https://wa.me/5585999999999?text=Olá%20Dra.%20Letícia!%20Tenho%20algumas%20dúvidas%20sobre%20os%20procedimentos.";

  return (
    <footer className="relative z-10 pt-24 pb-12 overflow-hidden bg-nude-50 border-t border-rose-100/50 stardust-bg text-stone-800">
      
      {/* Aurora glow effects in footer */}
      <div className="absolute bottom-0 right-0 w-[50rem] h-[50rem] bg-radial from-rose-200/10 to-transparent rounded-full pointer-events-none blur-3xl -z-10" />
      <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-radial from-rose-100/10 to-transparent rounded-full pointer-events-none blur-3xl -z-10" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Floating Giant Glassmorphic CTA Card */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[3rem] overflow-hidden border border-rose-100/60 shadow-xl mb-24 min-h-[450px] flex items-center justify-center bg-white/70 backdrop-blur-md"
        >
          {/* Clinical Real Image Background */}
          <div className="absolute inset-0 z-0">
            <img 
              loading="lazy"
              src="/assets/leticia-4.jpg" 
              alt="Dra. Letícia no atendimento" 
              className="w-full h-full object-cover object-center opacity-20 filter brightness-105 contrast-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/30" />
          </div>

          {/* Floating glass content overlay */}
          <div className="relative z-10 max-w-3xl text-center px-6 sm:px-12 py-16">
            <motion.span 
              initial={{ scale: 0.9 }}
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider bg-rose-100/65 text-rose-600 border border-rose-200/50 uppercase mb-6"
            >
              Odontologia de Luxo & Conectividade
            </motion.span>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold text-stone-900 leading-tight mb-6">
              Seu novo sorriso começa com um <span className="text-gradient-rose">atendimento único.</span>
            </h2>
            
            <p className="text-stone-600 text-lg font-light leading-relaxed mb-10 max-w-2xl mx-auto">
              Agende sua avaliação presencial e dê o primeiro passo para o sorriso que você sempre sonhou na Odonto Center Oficial.
            </p>

            <div className="flex items-center justify-center">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center gap-2.5 px-10 py-5 rounded-2xl font-semibold tracking-wide text-white bg-rose-500 transition-all duration-300 hover:scale-105 w-full sm:w-auto text-base btn-premium-fill border border-rose-450/20 shadow-xl shadow-rose-950/10 cursor-pointer"
              >
                <span>Agendar Minha Consulta</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* 4 Column High-End Sitemap Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-rose-100/40">
          
          {/* Col 1 - Name & Bio (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h3 className="font-serif text-2xl font-medium tracking-wide text-stone-900">
              Dra. Letícia <br />
              <span className="text-gradient-rose font-semibold">Barbosa Vieira</span>
            </h3>
            <p className="text-stone-600 text-sm font-light leading-relaxed max-w-sm">
              Cirurgiã-dentista clínica e estética focada em proporcionar sorrisos autênticos com o máximo de precisão, sensibilidade e tecnologia inovadora em Fortaleza, Ceará.
            </p>
            <div className="text-xs text-stone-500 font-medium tracking-wider">
              CRO-CE: XXXXX (Clínica Geral)
            </div>
          </div>

          {/* Col 2 - Specialties (2.5 Cols) */}
          <div className="lg:col-span-3 lg:col-start-6 flex flex-col gap-4">
            <h4 className="text-sm font-bold tracking-[0.15em] text-stone-900 uppercase">
              Especialidades
            </h4>
            <ul className="flex flex-col gap-3 text-stone-600 text-sm font-light">
              <li>
                <a href="#especialidades" className="hover:text-rose-500 transition-colors">Estética Odontológica</a>
              </li>
              <li>
                <a href="#especialidades" className="hover:text-rose-500 transition-colors">Prevenção Integrada</a>
              </li>
              <li>
                <a href="#especialidades" className="hover:text-rose-500 transition-colors">Odontopediatria Acolhedora</a>
              </li>
              <li>
                <a href="#especialidades" className="hover:text-rose-500 transition-colors">Cirurgia Oral Menor</a>
              </li>
            </ul>
          </div>

          {/* Col 3 - Navigation (2 Cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-sm font-bold tracking-[0.15em] text-stone-900 uppercase">
              Navegação
            </h4>
            <ul className="flex flex-col gap-3 text-stone-600 text-sm font-light">
              <li>
                <a href="#" className="hover:text-rose-500 transition-colors">Início</a>
              </li>
              <li>
                <a href="#especialidades" className="hover:text-rose-500 transition-colors">Sobre Letícia</a>
              </li>
              <li>
                <a href="#antes-depois" className="hover:text-rose-500 transition-colors">Casos Clínicos</a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-rose-500 transition-colors">Depoimentos</a>
              </li>
            </ul>
          </div>

          {/* Col 4 - Location & Socials (2.5 Cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-sm font-bold tracking-[0.15em] text-stone-900 uppercase">
              Contato & Local
            </h4>
            <ul className="flex flex-col gap-3.5 text-stone-600 text-sm font-light">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span className="leading-snug">Odonto Center Oficial<br />Fortaleza - CE</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-rose-500 shrink-0" />
                <span>+55 (85) 99999-9999</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-rose-500 shrink-0" />
                <span>contato@draleticia.com.br</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits & Signature */}
        <div className="pt-10 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-stone-500 text-xs font-light text-center sm:text-left">
            © {new Date().getFullYear()} Dra. Letícia Barbosa Vieira. Todos os direitos reservados.
          </div>
          
          {/* Mandatory Premium Creator Credit Line */}
          <div className="flex items-center gap-2 bg-rose-50/50 border border-rose-100/50 py-2 px-4.5 rounded-full shadow-inner select-none hover:border-rose-200/50 hover:bg-rose-100/20 transition-all duration-300">
            <span className="text-stone-500 text-xs font-light">
              Site criado por
            </span>
            <a 
              href="https://www.instagram.com/jvsitepro/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-rose-500 hover:text-rose-600 transition-colors uppercase tracking-wider"
            >
              jvsitepro
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="flex gap-4">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-rose-100/50 text-stone-500 hover:text-rose-500 hover:border-rose-200/50 transition-all shadow-sm"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
