import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-8 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-orange/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-coral/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-brand-orange/30 text-brand-orange text-sm font-semibold mb-6"
          >
            <Sparkles size={16} />
            <span>Lic. en Comunicación Social</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight font-display">
            HAGO QUE TUS <br />
            <span className="text-gradient">IDEAS</span> VIBREN.
          </h1>
          
          <p className="text-xl text-white/60 mb-10 max-w-lg leading-relaxed">
            Especialista en medios, marketing digital y deportes. Transformo conceptos en experiencias de comunicación con impacto y propósito.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#proyectos" className="boton group">
              Ver Proyectos 
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a href="#sobre-mi" className="px-8 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-all font-semibold">
              Sobre Mí
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="relative w-[500px] h-[500px] mx-auto">
            <div className="absolute inset-0 bg-gradient-brand rounded-[40px] rotate-6 opacity-20"></div>
            <div className="absolute inset-0 glass rounded-[40px] overflow-hidden border-white/20">
              <div className="w-full h-full bg-[#111] flex items-center justify-center">
                 {/* Placeholder para la foto real de Oriana */}
                 <span className="text-white/20 text-8xl font-black">OD</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
