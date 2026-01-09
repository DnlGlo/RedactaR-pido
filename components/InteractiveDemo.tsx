import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wand2, Copy, Check, Loader2, Sparkles, Lock } from 'lucide-react';
import { ContentType, ToneType } from '../types';
import { generateText } from '../services/geminiService';

const InteractiveDemo: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [type, setType] = useState<ContentType>(ContentType.EMAIL);
  const [tone, setTone] = useState<ToneType>(ToneType.PROFESSIONAL);
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [hasUsedFreeTrial, setHasUsedFreeTrial] = useState(false);

  const handleGenerate = async () => {
    // Si ya usó la prueba gratuita, redirigir a precios
    if (hasUsedFreeTrial) {
      window.location.href = "#pricing";
      return;
    }

    if (!topic.trim()) return;
    
    setIsLoading(true);
    setOutput('');
    
    try {
      const result = await generateText({ topic, type, tone });
      setOutput(result);
      setHasUsedFreeTrial(true); // Marcar como usado
    } catch (e) {
      console.error(e);
      setOutput("Error generando el contenido. Por favor intenta de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getButtonText = () => {
    if (isLoading) return "Generando...";
    if (hasUsedFreeTrial) return "Desbloquear Acceso Ilimitado";
    return "Redactar Contenido (Prueba Gratis)";
  };

  return (
    <section id="demo" className="py-20 bg-[#020617] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Pruébalo tú mismo
          </h2>
          <p className="text-gray-400">
            Genera contenido real ahora mismo. <span className="text-cyan-400 font-semibold">1 Redacción de prueba (Máx 2500 palabras).</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Inputs */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`bg-[#0f172a] border rounded-2xl p-6 md:p-8 shadow-xl transition-all duration-500 ${hasUsedFreeTrial ? 'border-yellow-500/50 grayscale-[0.5]' : 'border-gray-800'}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-2 rounded-lg ${hasUsedFreeTrial ? 'bg-yellow-500/20' : 'bg-brand-primary/20'}`}>
                {hasUsedFreeTrial ? <Lock className="w-6 h-6 text-yellow-500" /> : <Wand2 className="w-6 h-6 text-brand-accent" />}
              </div>
              <h3 className="text-xl font-bold text-white">Configuración</h3>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-400 mb-2">¿Sobre qué quieres escribir?</label>
                <textarea 
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="Ej: Una oferta de verano para mi tienda de zapatos..."
                  disabled={hasUsedFreeTrial}
                  className="w-full h-32 bg-[#1e293b] border border-gray-700 rounded-xl p-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none resize-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Tipo de contenido</label>
                  <select 
                    value={type}
                    onChange={(e) => setType(e.target.value as ContentType)}
                    disabled={hasUsedFreeTrial}
                    className="w-full bg-[#1e293b] border border-gray-700 rounded-xl p-3 text-white focus:ring-2 focus:ring-cyan-500 outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {Object.values(ContentType).map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Tono</label>
                  <select 
                    value={tone}
                    onChange={(e) => setTone(e.target.value as ToneType)}
                    disabled={hasUsedFreeTrial}
                    className="w-full bg-[#1e293b] border border-gray-700 rounded-xl p-3 text-white focus:ring-2 focus:ring-cyan-500 outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {Object.values(ToneType).map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button 
                onClick={handleGenerate}
                disabled={isLoading || (!topic.trim() && !hasUsedFreeTrial)}
                className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all transform ${
                  isLoading || (!topic.trim() && !hasUsedFreeTrial)
                    ? 'bg-gray-700 cursor-not-allowed' 
                    : hasUsedFreeTrial
                      ? 'bg-yellow-600 hover:bg-yellow-500 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] animate-pulse'
                      : 'bg-gradient-to-r from-brand-gradientStart to-brand-gradientEnd hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:-translate-y-1'
                }`}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> {getButtonText()}
                  </>
                ) : hasUsedFreeTrial ? (
                   <>
                    <Lock className="w-5 h-5" /> {getButtonText()}
                   </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" /> {getButtonText()}
                  </>
                )}
              </button>
              
              {hasUsedFreeTrial && (
                <p className="text-center text-yellow-500 text-sm font-medium">
                  Has consumido tu prueba gratuita. <br/>
                  <span className="underline cursor-pointer" onClick={() => window.location.href="#pricing"}>Mejora tu plan para continuar.</span>
                </p>
              )}
            </div>
          </motion.div>

          {/* Output */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0f172a] border border-gray-800 rounded-2xl p-6 md:p-8 shadow-xl relative min-h-[400px] flex flex-col"
          >
             <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Resultado</h3>
                {output && (
                  <button 
                    onClick={handleCopy}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 text-sm bg-[#1e293b] px-3 py-1 rounded-full"
                  >
                    {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    {copied ? 'Copiado' : 'Copiar'}
                  </button>
                )}
             </div>

             <div className="flex-grow bg-[#1e293b] rounded-xl p-6 border border-gray-700 overflow-y-auto max-h-[500px]">
                {isLoading ? (
                  <div className="h-full flex flex-col items-center justify-center text-gray-500 gap-4">
                    <div className="w-12 h-12 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin"></div>
                    <p className="animate-pulse">La IA está pensando...</p>
                  </div>
                ) : output ? (
                  <div className="prose prose-invert max-w-none whitespace-pre-line">
                    {output}
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-gray-500">
                    <Wand2 className="w-12 h-12 mb-4 opacity-20" />
                    <p>Tu contenido generado aparecerá aquí.</p>
                  </div>
                )}
             </div>
             
             {/* Decorative element resembling the comparison tool in original HTML */}
             <div className="mt-4 flex justify-center gap-4">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/50">
                  <span className="text-xs text-green-500 font-bold">IA</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-700/50 flex items-center justify-center">
                  <span className="text-xs text-gray-500">H</span>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;