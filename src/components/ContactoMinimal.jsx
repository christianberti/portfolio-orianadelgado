import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";

const ContactoMinimal = () => {
  return (
    <footer id="contacto" className="py-40 px-8 bg-black/40 border-t border-seamless">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <p className="text-xs font-bold text-steel-slate uppercase tracking-widest mb-6">¿Iniciamos un proyecto?</p>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-12 uppercase tracking-tighter">
            Contáctame
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <a href="mailto:tuemail@ejemplo.com" className="group flex items-center gap-3 text-silver-light hover:text-white transition-colors">
               <span className="text-steel-slate group-hover:scale-110 transition-transform"><Mail size={24} /></span>
               <span className="text-lg font-medium border-b border-white/0 group-hover:border-white transition-all">Enviar Mail</span>
            </a>
            <a href="#" className="group flex items-center gap-3 text-silver-light hover:text-white transition-colors">
               <span className="text-steel-slate group-hover:scale-110 transition-transform"><Linkedin size={24} /></span>
               <span className="text-lg font-medium border-b border-white/0 group-hover:border-white transition-all">LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default ContactoMinimal;
