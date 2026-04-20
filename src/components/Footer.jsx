import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contacto" className="py-24 px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8 font-display">
            ¿TRABAJAMOS <span className="text-gradient">JUNTOS?</span>
          </h2>
          <p className="text-white/40 text-xl mb-12 max-w-2xl mx-auto">
            Estoy siempre abierta a nuevas oportunidades y desafíos en el mundo de la comunicación y el marketing.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10">
            <a href="mailto:tuemail@ejemplo.com" className="boton flex items-center gap-2 group">
              Enviar Email <Mail size={20} />
            </a>
            <div className="flex gap-4">
              <a href="#" className="p-4 rounded-full glass border-white/10 hover:border-brand-orange/50 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="p-4 rounded-full glass border-white/10 hover:border-brand-coral/50 transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative gradient blur */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-full h-96 bg-brand-orange/10 blur-[150px] rounded-full"></div>
    </footer>
  );
};

export default Footer;
