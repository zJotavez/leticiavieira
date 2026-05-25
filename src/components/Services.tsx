import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  HeartPulse, 
  ShieldAlert, 
  ChevronLeft, 
  ChevronDown, 
  Calendar, 
  HelpCircle,
  Clock,
  ShieldCheck
} from 'lucide-react';

const services = [
  {
    id: "estetica",
    title: "Estética Odontológica",
    icon: Sparkles,
    subtitle: "Seu sorriso com a harmonia e naturalidade que você merece.",
    shortDesc: "Restaurações estéticas de excelência e clareamento dental avançado para devolver a harmonia natural ao seu sorriso.",
    image: "/assets/proc-3.jpg",
    fullDesc: "Tratamentos estéticos altamente personalizados sob a ótica das mais avançadas técnicas do mercado. Unimos precisão clínica, materiais de última geração e uma análise facial minuciosa para restabelecer a harmonia do seu sorriso de forma sutil e sofisticada, respeitando a sua individualidade.",
    details: [
      "Planejamento estético personalizado sob a ótica do consagrado curso Croma.",
      "Clareamento dental avançado, seguro e altamente duradouro.",
      "Restaurações estéticas invisíveis com resinas de alta performance.",
      "Acabamentos e polimentos detalhados para resultados naturais e saudáveis."
    ],
    steps: [
      {
        title: "Análise Facial & Planejamento Digital",
        desc: "Fotografia profissional de alta definição e mapeamento das proporções faciais para desenhar o sorriso ideal antes de iniciar o procedimento."
      },
      {
        title: "Preparação & Seleção Estética",
        desc: "Preparo minimamente invasivo da estrutura dentária e seleção exata das resinas ou porcelanas de altíssima fidelidade cromática."
      },
      {
        title: "Escultura Estética Avançada",
        desc: "Aplicação estratificada de materiais de alta performance, replicando a opacidade, translucidez e textura natural do esmalte dentário."
      },
      {
        title: "Acabamento e Polimento Ultra-Brilho",
        desc: "Ajuste micrométrico da mordida e polimento em múltiplas etapas com discos e pastas especiais para brilho duradouro e saúde gengival."
      }
    ],
    benefits: [
      "Correção de imperfeições, fraturas e desgastes dentários com alta precisão.",
      "Fechamento de diastemas (espaço entre os dentes) com total naturalidade.",
      "Clareamento de manchas profundas e rejuvenescimento duradouro do sorriso.",
      "Utilização de materiais altamente biocompatíveis que preservam o esmalte natural.",
      "Aumento imediato da autoestima e da segurança em interações sociais."
    ],
    faq: [
      {
        q: "O clareamento desgasta ou enfraquece os dentes?",
        a: "Não. O clareamento dental seguro e supervisionado utiliza géis biocompatíveis que agem apenas nos pigmentos internos do dente, sem alterar a estrutura mineral ou desgastar o esmalte."
      },
      {
        q: "Quanto tempo duram as restaurações em resina estética?",
        a: "Com cuidados adequados de higiene bucal e visitas periódicas para manutenção e polimento, as resinas estéticas de alta performance duram muitos anos, mantendo o brilho e a integridade."
      },
      {
        q: "O tratamento causa dor ou sensibilidade?",
        a: "Os procedimentos são totalmente otimizados para o seu conforto. Em casos de clareamento, utilizamos protocolos com dessensibilizantes de última geração para evitar qualquer desconforto."
      }
    ]
  },
  {
    id: "prevencao",
    title: "Prevenção & Odontopediatria",
    icon: HeartPulse,
    subtitle: "Leveza, acolhimento e saúde para todas as idades.",
    shortDesc: "Cuidado completo e atendimento lúdico para crianças e adultos, focado em leveza, conforto e prevenção.",
    image: "/assets/proc-2.jpg",
    fullDesc: "Uma abordagem preventiva rigorosa e um atendimento de odontopediatria especializado e extremamente sensível. Criamos conexões reais e positivas com as crianças e adultos, desmistificando o tratamento e proporcionando consultas seguras, leves e totalmente confortáveis.",
    details: [
      "Profilaxia (limpeza) profunda e checkups preventivos completos.",
      "Atendimento odontopediátrico acolhedor, humanizado e livre de medos.",
      "Selantes, aplicação de flúor e educação em saúde bucal infantil.",
      "Conexão emocional próxima com o paciente desde a primeira infância."
    ],
    steps: [
      {
        title: "Acolhimento Lúdico e Sensorial",
        desc: "Apresentação calma do ambiente clínico de forma acolhedora para crianças e adultos, estabelecendo um vínculo de confiança mútua e eliminando a ansiedade."
      },
      {
        title: "Avaliação Clínica & Profilaxia Avançada",
        desc: "Exame detalhado de todas as estruturas e profilaxia profunda (limpeza preventiva) com técnicas de ultra-conforto para remoção de placa e tártaro."
      },
      {
        title: "Aplicação Protetiva (Flúor e Selantes)",
        desc: "Reforço do esmalte com flúor tópico de alta qualidade e aplicação de selantes nas superfícies dos dentes posteriores para máxima proteção contra cáries."
      },
      {
        title: "Plano Educativo Personalizado",
        desc: "Instrução detalhada de escovação, uso do fio dental e orientações dietéticas de forma prática e motivadora para o dia a dia."
      }
    ],
    benefits: [
      "Prevenção ativa de cáries, gengivite e problemas de oclusão (mordida).",
      "Desenvolvimento de uma relação positiva e sem medos com o dentista desde a infância.",
      "Monitoramento constante do crescimento dos maxilares e erupção dos dentes de leite.",
      "Manutenção de um hálito fresco e gengiva totalmente saudável em adultos e crianças.",
      "Redução drástica da necessidade de tratamentos cirúrgicos no futuro."
    ],
    faq: [
      {
        q: "A partir de qual idade a criança deve ir ao dentista?",
        a: "O recomendado é que a primeira consulta aconteça logo após o nascimento dos primeiros dentes de leite, estabelecendo hábitos preventivos e orientando os pais."
      },
      {
        q: "O que são selantes dentais e qual a sua função?",
        a: "Selantes são películas protetoras aplicadas nas superfícies de mastigação dos dentes posteriores (molares) para evitar que resíduos alimentares e bactérias causem cáries."
      },
      {
        q: "Com que frequência devo realizar a profilaxia preventiva?",
        a: "O ideal é realizar a limpeza clínica e o checkup a cada 6 meses para garantir a saúde bucal e diagnosticar precocemente qualquer alteração."
      }
    ]
  },
  {
    id: "cirurgia-urgencia",
    title: "Cirurgia Oral & Urgências",
    icon: ShieldAlert,
    subtitle: "Segurança cirúrgica avançada e suporte imediato com empatia.",
    shortDesc: "Cirurgias orais menores realizadas sob anestesia indolor, além de pronto suporte para quadros de urgência.",
    image: "/assets/proc-1.jpg",
    fullDesc: "Cirurgias orais menores realizadas sob rigoroso padrão de biossegurança e técnicas de anestesia indolor de alta tecnologia. Contamos também com atendimento emergencial humanizado e ágil para aliviar a dor e restabelecer o seu bem-estar físico e emocional com total suporte pós-operatório.",
    details: [
      "Frenectomias linguais e labiais (larga experiência em liga infantil).",
      "Cirurgias orais menores com técnicas de alto conforto e biossegurança.",
      "Atendimento ágil, humano e sensível para alívio de dor e urgências.",
      "Acompanhamento pós-operatório zeloso e de extrema confiança."
    ],
    steps: [
      {
        title: "Diagnóstico & Exames de Imagem",
        desc: "Avaliação clínica precisa e análise de radiografias de alta definição para planejar a intervenção cirúrgica com máxima segurança."
      },
      {
        title: "Protocolo de Anestesia Indolor",
        desc: "Aplicação técnica suave e otimizada com anestésicos modernos de alto poder de bloqueio para que o paciente não sinta absolutamente nenhum desconforto durante o procedimento."
      },
      {
        title: "Procedimento Cirúrgico Minimamente Invasivo",
        desc: "Execução rápida e precisa da cirurgia (como extrações de siso ou frenectomias) com técnicas modernas que preservam os tecidos moles."
      },
      {
        title: "Estabilização & Biossegurança",
        desc: "Sutura fina e confortável com fios de alta qualidade, seguida de orientações pós-operatórias detalhadas e medicação de suporte para uma cicatrização rápida."
      }
    ],
    benefits: [
      "Resolução rápida de quadros agudos de dor e infecções dentárias.",
      "Extrações de terceiros molares (sisos) de forma segura e com mínimo inchaço.",
      "Frenectomias linguais e labiais para liberação da fala, deglutição e amamentação (bebês e crianças).",
      "Biossegurança estrita com esterilização classe hospitalar para segurança total contra infecções.",
      "Suporte pós-operatório atencioso e medicação otimizada para máximo conforto."
    ],
    faq: [
      {
        q: "O procedimento cirúrgico dói?",
        a: "Absolutamente não. Utilizamos técnicas de anestesia avançadas e seguras que bloqueiam completamente qualquer estímulo de dor. A cirurgia é executada de forma muito leve."
      },
      {
        q: "Como é a recuperação de uma extração de siso?",
        a: "A recuperação é rápida quando seguidas as orientações: repouso nas primeiras 48 horas, alimentação líquida/gelada, compressas frias e uso rigoroso das medicações prescritas."
      },
      {
        q: "O que fazer em caso de dor de dente de urgência?",
        a: "Entre em contato conosco imediatamente. Priorizamos atendimentos de urgência para aliviar a dor do paciente no menor tempo possível com total acolhimento."
      }
    ]
  }
];

export function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // WhatsApp link generator
  const getWhatsappUrl = (serviceTitle: string) => {
    return `https://wa.me/5585999999999?text=Olá%20Dra.%20Letícia!%20Gostaria%20de%20agendar%20uma%20consulta%20para%20${encodeURIComponent(serviceTitle)}.`;
  };

  const handleSelectService = (service: typeof services[0]) => {
    setSelectedService(service);
    setOpenFaqIndex(null); // reset FAQ index
    setTimeout(() => {
      const el = document.getElementById('especialidades');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  const handleBack = () => {
    setSelectedService(null);
    setTimeout(() => {
      const el = document.getElementById('especialidades');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  return (
    <section id="especialidades" className="py-24 md:py-32 relative z-10 overflow-hidden bg-gradient-to-b from-white via-rose-50/10 to-white">
      
      {/* Background radial light rings */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] bg-radial from-rose-400/5 to-transparent rounded-full pointer-events-none blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <AnimatePresence mode="wait">
          {!selectedService ? (
            // GRID VIEW
            <motion.div
              key="grid-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
                <div>
                  <motion.span 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-xs font-semibold tracking-[0.2em] text-rose-500 uppercase block mb-3"
                  >
                    Tecnologia & Sensibilidade
                  </motion.span>
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-stone-900 leading-tight"
                  >
                    Nossas <span className="text-gradient-rose">Especialidades</span>
                  </motion.h2>
                </div>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-stone-500 font-light text-base md:text-lg max-w-md md:text-right"
                >
                  Tratamentos individualizados com foco em precisão científica, conforto extremo e harmonia visual.
                </motion.p>
              </div>

              {/* Specialties Cards Grid */}
              <div className="flex overflow-x-auto snap-x snap-mandatory pb-6 gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-10 scrollbar-hide">
                {services.map((service, idx) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => handleSelectService(service)}
                    className="group cursor-pointer rounded-[2rem] overflow-hidden bg-white/75 backdrop-blur-md border border-rose-100 flex flex-col h-full shrink-0 w-[85vw] sm:w-[350px] md:w-auto snap-center card-lift"
                  >
                    <div className="aspect-[4/3] overflow-hidden relative bg-slate-950">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity z-10" />
                      <motion.img 
                        whileHover={{ scale: 1.06 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        loading="lazy"
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Floating Luxury Icon */}
                      <div className="absolute top-6 left-6 z-20 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center border border-rose-100 shadow-md group-hover:bg-rose-500 transition-all duration-300">
                        <service.icon className="w-5 h-5 text-stone-800 group-hover:text-white transition-colors" strokeWidth={1.8} />
                      </div>
                    </div>
                    
                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                      <h3 className="text-xl md:text-2xl font-serif font-medium text-slate-900 mb-4 group-hover:text-rose-500 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-500 font-light text-sm md:text-base leading-relaxed mb-6 md:mb-8 flex-grow">
                        {service.shortDesc}
                      </p>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        <span className="text-xs md:text-sm font-semibold tracking-wider text-slate-700 group-hover:text-rose-500 uppercase transition-colors">
                          Ver Detalhes do Caso
                        </span>
                        <div className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-rose-500 group-hover:text-white group-hover:translate-x-1.5 transition-all duration-300">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            // IMMERSIVE FULL SCREEN VIEW
            <motion.div
              key="detail-view"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="bg-white/80 backdrop-blur-md rounded-[2.5rem] border border-slate-100/90 shadow-2xl p-6 sm:p-10 md:p-14 overflow-hidden relative"
            >
              {/* Back Button Header */}
              <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={handleBack}
                  className="flex items-center gap-2 text-sm font-semibold text-stone-600 hover:text-rose-600 transition-colors group px-4 py-2 rounded-full bg-rose-50/40 hover:bg-rose-100/50 border border-rose-100/50"
                >
                  <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  Voltar para Todos os Tratamentos
                </button>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-semibold text-stone-500 uppercase tracking-widest">
                    Procedimento Disponível
                  </span>
                </div>
              </div>

              {/* Title Section */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start mb-14">
                <div className="lg:col-span-8 text-left">
                  <span className="text-xs font-bold tracking-[0.25em] text-rose-500 uppercase mb-3 block">
                    Protocolo Clínico Integrado
                  </span>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-slate-900 mb-6 leading-tight">
                    {selectedService.title}
                  </h1>
                  <p className="text-slate-600 text-lg font-light leading-relaxed border-l-2 border-rose-400 pl-5 mb-6">
                    {selectedService.subtitle}
                  </p>
                  <p className="text-slate-500 font-light text-base leading-relaxed">
                    {selectedService.fullDesc}
                  </p>
                </div>

                <div className="lg:col-span-4 rounded-2xl overflow-hidden aspect-[16/10] lg:aspect-square relative shadow-xl border border-rose-100 group">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent z-10" />
                  <img
                    loading="lazy"
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="px-3.5 py-1.5 rounded-xl text-[10px] font-bold tracking-wider bg-white/95 backdrop-blur-md border border-rose-100 uppercase text-stone-800 shadow-sm flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-rose-500" />
                      Altíssima Biossegurança
                    </span>
                  </div>
                </div>
              </div>

              <hr className="border-slate-100 mb-14" />

              {/* Splitted Details Section */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">
                
                {/* Highlights and Details Column */}
                <div className="lg:col-span-7 space-y-12 text-left">
                  <div>
                    <h3 className="text-xl md:text-2xl font-serif font-medium text-slate-900 mb-6 flex items-center gap-3">
                      Diferenciais do Procedimento
                    </h3>
                    <div className="space-y-4">
                      {selectedService.details.map((detail, idx) => (
                        <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-rose-50/20 border border-rose-100/40 hover:bg-rose-50/50 transition-all duration-300">
                          <CheckCircle2 className="w-5.5 h-5.5 text-rose-500 shrink-0 mt-0.5" />
                          <span className="text-slate-600 text-sm font-light leading-relaxed">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Interactive FAQ Accordions */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-serif font-medium text-slate-900 mb-6 flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-rose-500" />
                      Dúvidas Frequentes
                    </h3>
                    
                    <div className="space-y-4">
                      {selectedService.faq.map((item, idx) => {
                        const isOpen = openFaqIndex === idx;
                        return (
                          <div 
                            key={idx} 
                            className="bg-white rounded-2xl border border-rose-100 overflow-hidden transition-all duration-300"
                          >
                            <button
                              onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                              className="w-full p-4 flex items-center justify-between text-left font-medium text-stone-700 hover:text-rose-500 transition-colors gap-3"
                            >
                              <span className="text-sm font-semibold">{item.q}</span>
                              <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-rose-500' : 'text-slate-400'}`} />
                            </button>
                            
                            <AnimatePresence initial={false}>
                              {isOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <p className="p-4 pt-0 border-t border-slate-50 text-slate-500 text-sm font-light leading-relaxed">
                                    {item.a}
                                  </p>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Right Column: Exclusive Booking Widget */}
                <div className="lg:col-span-5 space-y-8 text-left">
                  {/* High-End Booking Widget */}
                  <div className="bg-gradient-to-tr from-rose-950 to-rose-900 text-white p-6 md:p-8 rounded-3xl border border-rose-800/40 shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-radial from-rose-500/10 via-transparent to-transparent pointer-events-none -z-10" />
                    
                    <span className="px-3 py-1 rounded-full text-[9px] font-bold tracking-widest bg-rose-500/20 border border-rose-500/30 text-rose-300 uppercase inline-block mb-4">
                      Agendamento Exclusivo
                    </span>
                    
                    <h4 className="text-xl md:text-2xl font-serif font-medium text-white mb-4">
                      Agende seu Diagnóstico
                    </h4>
                    
                    <p className="text-slate-200 font-light text-sm leading-relaxed mb-6">
                      Reserve sua avaliação na Odonto Center Oficial e realize o planejamento estético completo sob medida.
                    </p>
                    
                    <div className="space-y-3.5 mb-8">
                      <div className="flex items-center gap-3 text-xs text-slate-300 font-light">
                        <Clock className="w-4 h-4 text-rose-300" />
                        <span>Duração aproximada: 45 min a 1h30</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-slate-300 font-light">
                        <Calendar className="w-4 h-4 text-rose-200" />
                        <span>Atendimento com Hora Marcada</span>
                      </div>
                    </div>
                    
                    <a
                      href={getWhatsappUrl(selectedService.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 px-6 rounded-2xl font-semibold text-center text-white bg-rose-500 transition-all duration-300 shadow-xl shadow-rose-950/10 hover:scale-[1.02] flex items-center justify-center gap-2 group btn-premium-fill border border-rose-450/20 cursor-pointer"
                    >
                      Agendar no WhatsApp
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
