import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Ripple/Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-primary opacity-20 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>
      <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-blue-600 opacity-10 rounded-full blur-[100px] -z-10 animate-blob"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-cyan-400 font-semibold tracking-wide uppercase text-sm md:text-base mb-4"
        >
          ¿Imaginas que tus mensajes se escribieran solos?
        </motion.h2>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight"
        >
          Crea textos <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">profesionales</span><br />
          con Inteligencia Artificial
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Utiliza la IA mejor entrenada en español para redactar emails, artículos y posts 
          que conectan con tu audiencia. Sin bloqueos creativos.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a 
            href="#demo"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-gradientStart to-brand-gradientEnd text-white text-lg font-bold rounded-full shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all transform hover:-translate-y-1 inline-block"
          >
            Probar Gratis Ahora
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-6 md:gap-12"
        >
          {[
            "Optimizado para SEO",
            "Cualquier nicho",
            "100% Original"
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
               <div className="bg-gradient-to-r from-cyan-900 to-blue-900 rounded-full p-1">
                 <CheckCircle2 className="w-4 h-4 text-cyan-400" />
               </div>
               <span className="text-gray-300 font-medium">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;