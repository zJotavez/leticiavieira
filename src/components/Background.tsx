import { motion } from 'motion/react';

export function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-nude-50">
      {/* Soft noise texture overlay for a premium high-end tactile feel */}
      <div 
        className="absolute inset-0 opacity-[0.02] mix-blend-multiply"
        style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}
      />
      
      {/* Aurora Active Tech Orbs (Animates slowly in background) */}
      <motion.div
        animate={{
          x: ['-20%', '10%', '-20%'],
          y: ['-15%', '15%', '-15%'],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-[15%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-rose-300/12 blur-[130px]"
      />
      
      <motion.div
        animate={{
          x: ['15%', '-10%', '15%'],
          y: ['10%', '-20%', '10%'],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[20%] -right-[15%] w-[60vw] h-[60vw] rounded-full bg-rose-200/10 blur-[120px]"
      />
      
      <motion.div
        animate={{
          x: ['-10%', '15%', '-10%'],
          y: ['20%', '-10%', '20%'],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-[20%] left-[10%] w-[80vw] h-[60vw] rounded-full bg-rose-300/8 blur-[140px]"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.15, 0.4, 0.15],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[40%] left-[40%] -translate-x-1/2 -translate-y-1/2 w-[55vw] h-[55vw] rounded-full bg-rose-200/8 blur-[150px]"
      />
    </div>
  );
}

