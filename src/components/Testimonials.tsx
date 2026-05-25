import { motion } from 'motion/react';
import { Quote, ShieldCheck } from 'lucide-react';

const testimonials = [
  {
    name: "Carolina Vasconcelos",
    role: "Tratamento de Lentes de Resina",
    text: "O cuidado e a sensibilidade da Dra. Letícia são sensacionais. Fiz meu tratamento estético de clareamento e resinas com ela, e o resultado ficou super natural. Ela explica cada etapa e passa muita segurança.",
  },
  {
    name: "Amanda Silveira",
    role: "Mãe do Pedro (Odontopediatria)",
    text: "Sempre tive muito receio de levar meu filho pequeno ao dentista, mas a Dra. Letícia foi maravilhosa. Com muita paciência, carinho e uma abordagem lúdica, ela realizou o procedimento dele com total leveza.",
  },
  {
    name: "Fernanda Ribeiro",
    role: "Reabilitação Estética Integrada",
    text: "Estava buscando uma dentista em Fortaleza que unisse técnica moderna e atendimento verdadeiramente humano. Na Odonto Center Oficial, a Dra. Letícia superou todas as minhas expectativas. Indico de olhos fechados!",
  },
  {
    name: "Carlos Eduardo Costa",
    role: "Cirurgia Oral Menor",
    text: "Fui muito bem atendido na cirurgia do siso. Estava extremamente tenso, mas a Dra. Letícia utilizou uma técnica anestésica super tranquila e indolor. Acompanhamento pós-operatório zeloso e atencioso.",
  },
  {
    name: "Letícia Cavalcante",
    role: "Clareamento Clínico Premium",
    text: "Experiência impecável do início ao fim. O clareamento foi super rápido, sem nenhuma sensibilidade chata, e o atendimento na clínica é de alto padrão. Me senti muito acolhida!",
  },
  {
    name: "Mateus Bezerra",
    role: "Estudo Estético Personalizado",
    text: "Trabalho técnico irretocável. O planejamento digital 3D me deu total segurança sobre os resultados antes mesmo de iniciarmos as resinas. O resultado final ficou incrível, recomendo demais.",
  }
];

export function Testimonials() {
  // We duplicate the testimonials list to achieve a seamless loop in the marquee track
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section id="depoimentos" className="py-32 relative z-10 overflow-hidden bg-gradient-to-b from-white via-nude-50/50 to-white">
      
      {/* Visual Tech Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-radial from-rose-300/10 to-transparent rounded-full pointer-events-none blur-3xl -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[50rem] h-[50rem] bg-radial from-rose-200/15 to-transparent rounded-full pointer-events-none blur-3xl -z-10" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold tracking-[0.25em] text-rose-500 uppercase block mb-4"
          >
            Histórias de Satisfação
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-serif font-semibold text-stone-850 mb-6"
          >
            O Reflexo de nossa <span className="text-gradient-rose">Dedicação</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-stone-500 font-light text-lg leading-relaxed"
          >
            Confira o relato espontâneo de pacientes reais que confiaram seu sorriso e bem-estar à Dra. Letícia Barbosa Vieira.
          </motion.p>
        </div>
      </div>

      {/* Infinite Horizontal Sliding Track (Marquee) */}
      <div className="w-full overflow-hidden py-10 relative flex select-none whitespace-nowrap">
        {/* Soft edge blur vignettes to blend the scrolling track into the margins */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

        {/* Marquee sliding track container */}
        <div className="flex gap-8 animate-marquee-left shrink-0 hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
          {duplicatedTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="inline-block w-[380px] sm:w-[420px] p-8 sm:p-10 rounded-[2rem] bg-white/70 backdrop-blur-md border border-rose-100/85 shadow-md hover:border-rose-200 transition-all duration-300 pointer-events-auto card-lift"
            >
              <div className="flex items-center justify-between mb-6">
                <Quote className="w-10 h-10 text-rose-200 shrink-0" />
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider bg-rose-500/10 border border-rose-500/20 text-rose-600 uppercase select-none">
                  <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                  <span>Paciente Verificado</span>
                </div>
              </div>

              <p className="text-stone-600 font-light leading-relaxed mb-8 text-sm sm:text-base italic whitespace-normal">
                "{t.text}"
              </p>

              <div className="pt-4 border-t border-rose-100/60 flex flex-col">
                <h4 className="font-semibold text-stone-900 text-base">{t.name}</h4>
                <span className="text-xs text-rose-500 font-semibold tracking-wider uppercase mt-1">
                  {t.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
