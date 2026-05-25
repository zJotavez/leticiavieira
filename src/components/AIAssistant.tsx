import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Send, X, Sparkles, Check, Play } from 'lucide-react';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: Date;
}

const systemPrompt = `Você é Lehh, a assistente virtual inteligente e muito simpática da Dra. Letícia Barbosa Vieira, cirurgiã-dentista especialista em estética dental de alta performance na Odonto Center Oficial em Fortaleza, Ceará.
Seu objetivo é ajudar pacientes com dúvidas.
Suas diretrizes:
1. Responda SEMPRE em português, com muita simpatia, leveza e elegância.
2. Dê respostas CURTAS (máximo de 2-3 frases), diretas e bonitas, formatadas com emojis delicados relacionados a dentes ou estética (🌸, ✨, 💎, 📅, 👶).
3. Seus principais assuntos são:
   - Lentes de resina premium (esculpidas à mão, sem desgaste).
   - Clareamento dental avançado.
   - Odontopediatria e frenectomia infantil indolor.
   - Agendamento de consultas (diga para clicar no link do WhatsApp ou escolher um horário).
4. Jamais dê diagnósticos médicos. Seja acolhedora. Mantenha as mensagens super curtas!`;

// Local high-fidelity conversational clinical fallback engine
const getFallbackResponse = (query: string): string => {
  const q = query.toLowerCase();
  
  if (q.includes('agendar') || q.includes('marca') || q.includes('consulta') || q.includes('horario') || q.includes('whatsapp') || q.includes('falar')) {
    return "Agendar com a Dra. Letícia é simples! 📅 [Clique aqui para falar no WhatsApp](https://wa.me/5585999999999?text=Olá%20Dra.%20Letícia!%20Gostaria%20de%20agendar%20uma%20consulta.) e escolher o seu horário de atendimento exclusivo. 🌸";
  }
  
  if (q.includes('lente') || q.includes('resina') || q.includes('estetica') || q.includes('facet')) {
    return "As **Lentes de Resina Premium** corrigem imperfeições e dão brilho natural ao sorriso, esculpidas de forma artística sem desgaste invasivo dos dentes! ✨ Quer agendar uma avaliação para o seu caso?";
  }
  
  if (q.includes('clareamento') || q.includes('clarear') || q.includes('branco')) {
    return "O nosso **Clareamento Clínico Premium** combina laser terapêutico e géis dessensibilizantes avançados para clarear até 6 tons de forma totalmente segura e duradoura! 💎";
  }
  
  if (q.includes('odontopediatria') || q.includes('criança') || q.includes('infantil') || q.includes('frenectomia') || q.includes('bebe') || q.includes('filho')) {
    return "A Dra. Letícia é especialista em **Odontopediatria Preventiva**, criando consultas lúdicas e sem medos para crianças, além de frenectomia (língua/lábio) com técnica indolor! 👶🌸";
  }
  
  if (q.includes('onde') || q.includes('fica') || q.includes('endereco') || q.includes('local') || q.includes('clinica') || q.includes('odonto center')) {
    return "Atendemos no sofisticado espaço da **Odonto Center Oficial** em Fortaleza, Ceará. 📍 Agende a sua consulta e venha tomar um café conosco!";
  }
  
  if (q.includes('preco') || q.includes('valor') || q.includes('quanto') || q.includes('custo') || q.includes('orcamento')) {
    return "Cada planejamento é inteiramente sob medida para respeitar o seu sorriso. 💎 O ideal é agendarmos uma avaliação clínica rápida para definir a melhor conduta. [Clique aqui para falar no WhatsApp!](https://wa.me/5585999999999)";
  }
  
  if (q.includes('ola') || q.includes('oi') || q.includes('bom dia') || q.includes('boa tarde') || q.includes('boa noite') || q.includes('cumprimento')) {
    return "Olá! 🌸 Eu sou a **Lehh**, assistente inteligente da Dra. Letícia. Como posso te ajudar a conquistar o seu sorriso dos sonhos hoje? ✨";
  }

  return "Que ótima dúvida! 🌸 A Dra. Letícia realiza planejamentos estéticos de altíssima precisão e conforto na Odonto Center Oficial em Fortaleza. Para agendar sua avaliação personalizada, [fale conosco no WhatsApp!](https://wa.me/5585999999999) ✨";
};

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: 'Olá! Eu sou a **Lehh** 🌸, assistente virtual da Dra. Letícia. Como posso te ajudar a transformar o seu sorriso hoje? ✨',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const quickQuestions = [
    { text: "Lentes de Resina ✨", query: "lentes de resina" },
    { text: "Clareamento Premium 💎", query: "clareamento" },
    { text: "Agendar Consulta 📅", query: "agendar consulta" },
    { text: "Odontopediatria 👶", query: "odontopediatria" },
    { text: "Onde Fica? 📍", query: "onde fica" }
  ];

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Math.random().toString(),
      sender: 'user',
      text: text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate natural response latency (800ms to 1200ms)
    setTimeout(async () => {
      let botResponse = "";
      
      // Dynamic client-side live Gemini integration (parallel fetch with fallback)
      const apiKey = (process.env.GEMINI_API_KEY || (import.meta as any).env?.VITE_GEMINI_API_KEY) as string | undefined;
      
      if (apiKey && apiKey !== 'undefined') {
        try {
          const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [
                {
                  role: 'user',
                  parts: [{ text: `${systemPrompt}\n\nUsuário pergunta: ${text}\n\nLehh responde (concisa, 2-3 frases, simpática, com emojis):` }]
                }
              ],
              generationConfig: {
                maxOutputTokens: 150,
                temperature: 0.7
              }
            })
          });
          const data = await response.json();
          if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
            botResponse = data.candidates[0].content.parts[0].text.trim();
          }
        } catch (e) {
          console.warn("Gemini Live failed, falling back to local clinical response engine.", e);
        }
      }

      // Fallback if Gemini key is missing or api call fails
      if (!botResponse) {
        botResponse = getFallbackResponse(text);
      }

      const botMessage: Message = {
        id: Math.random().toString(),
        sender: 'bot',
        text: botResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  // Helper to render markdown-like links
  const renderMessageText = (text: string) => {
    // Regex for bold text (**bold**)
    let formattedText = text.split('**').map((part, i) => i % 2 === 1 ? `<strong class="font-semibold text-stone-900">${part}</strong>` : part).join('');
    
    // Regex for markdown links [text](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    formattedText = formattedText.replace(linkRegex, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-rose-600 hover:text-rose-700 underline font-medium">$1</a>');
    
    return <span dangerouslySetInnerHTML={{ __html: formattedText }} />;
  };

  return (
    <React.Fragment>
      {/* Floating Circular AI Assistant Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={() => setIsOpen(true)}
              className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-white shadow-[0_12px_40px_rgba(156,62,78,0.22)] cursor-pointer group flex items-center justify-center bg-rose-50"
            >
              {/* Pulsing visual halo rings */}
              <span className="absolute inset-0 rounded-full border-2 border-rose-300 opacity-60 animate-ping pointer-events-none" style={{ animationDuration: '3s' }} />
              
              {/* Doctor Drawing Photo Cover */}
              <img 
                src="/assets/lehh-avatar.jpg" 
                alt="Lehh AI"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
              />
              
              {/* Ambient gradient outline */}
              <span className="absolute inset-0 border border-white/20 rounded-full pointer-events-none" />
              
              {/* Small glowing status dot */}
              <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-white shadow-md z-10" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Chat Widget Window */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="w-[92vw] sm:w-[400px] h-[550px] max-h-[85vh] rounded-[2.5rem] overflow-hidden flex flex-col glass-panel shadow-[0_20px_50px_rgba(156,62,78,0.18)] border border-rose-100/70"
            >
              {/* Header */}
              <div className="p-5 flex items-center justify-between border-b border-rose-100 bg-white/70">
                <div className="flex items-center gap-3.5 text-left">
                  {/* Circular Avatar */}
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-rose-100/60 shadow-sm bg-rose-50">
                    <img 
                      src="/assets/lehh-avatar.jpg" 
                      alt="Lehh AI"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border border-white" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-stone-900 leading-tight">Lehh</h3>
                    <p className="text-[10px] tracking-wider text-rose-600 font-semibold uppercase flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Assistente IA Dra. Letícia
                    </p>
                  </div>
                </div>
                
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2.5 rounded-full bg-rose-50/50 hover:bg-rose-100/60 border border-rose-100/40 text-stone-500 hover:text-rose-600 transition-colors cursor-pointer flex items-center justify-center"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Message List Area */}
              <div className="flex-grow overflow-y-auto p-5 space-y-4 bg-gradient-to-b from-white/20 to-rose-50/10">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] px-5 py-4 shadow-sm text-sm text-left leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-rose-500 text-white rounded-[1.5rem] rounded-tr-none shadow-rose-950/5 font-medium'
                          : 'bg-white/90 backdrop-blur-sm text-stone-700 rounded-[1.5rem] rounded-tl-none border border-rose-100/40'
                      }`}
                    >
                      {renderMessageText(msg.text)}
                    </div>
                  </div>
                ))}
                
                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white/80 border border-rose-100/30 px-5 py-4 rounded-[1.5rem] rounded-tl-none shadow-sm flex gap-1.5 items-center">
                      <span className="w-2 h-2 rounded-full bg-rose-450 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 rounded-full bg-rose-450 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 rounded-full bg-rose-450 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Questions suggestion Chips */}
              <div className="flex gap-2 overflow-x-auto pb-3 pt-1 px-5 scrollbar-hide select-none shrink-0">
                {quickQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(q.query)}
                    className="px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap bg-white hover:bg-rose-50 border border-rose-100/80 text-stone-600 shadow-sm transition-all cursor-pointer hover:scale-102 flex items-center gap-1.5 shrink-0"
                  >
                    {q.text}
                  </button>
                ))}
              </div>

              {/* Input Area */}
              <div className="p-4 bg-white/70 border-t border-rose-100 flex items-center gap-3">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSend(inputValue);
                  }}
                  placeholder="Pergunte sobre resinas, clareamento..."
                  className="flex-1 px-5 py-3.5 rounded-2xl bg-white border border-rose-100 text-sm focus:outline-none focus:border-rose-400 text-stone-800 placeholder-stone-400 font-light"
                />
                
                {/* Send Button */}
                <button
                  onClick={() => handleSend(inputValue)}
                  disabled={!inputValue.trim()}
                  className="p-3.5 rounded-2xl bg-rose-500 hover:bg-rose-600 text-white disabled:opacity-40 disabled:hover:bg-rose-500 transition-all cursor-pointer flex items-center justify-center shadow-md shadow-rose-950/5 border border-rose-450/20"
                >
                  <Send className="w-4 h-4 fill-white" />
                </button>
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </React.Fragment>
  );
}
