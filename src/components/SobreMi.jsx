import React from "react";
import { motion } from "framer-motion";

const SobreMi = () => {
  return (
    <section id="sobre-mi" className="min-h-screen flex flex-col md:flex-row items-center justify-center py-20 px-8 md:px-20 gap-20">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex flex-col items-center justify-center border-r border-seamless pr-10"
      >
        <h1 className="text-5xl md:text-8xl font-black text-white leading-none mb-4">
          SOBRE <br /> <span className="text-steel-slate">MÍ.</span>
        </h1>
        <div className="w-24 h-px bg-steel-slate/30 mt-6 hidden md:block"></div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full md:w-1/2 flex flex-col gap-8"
      >
        <div className="space-y-6 text-lg md:text-xl text-silver-light/80 leading-relaxed font-light">
          <p>
            Mi nombre es <span className="text-white font-semibold">Oriana Delgado</span>, tengo 23 años y soy
            <span className="text-white font-semibold italic"> Licenciada en Comunicación Social</span>. 
          </p>
          <p>
            Me apasiona la comunicación en todas sus formas: medios tradicionales, plataformas digitales y el periodismo deportivo. He encontrado en estos ámbitos el espacio ideal para aplicar mi visión crítica y proactiva.
          </p>
          <p>
            Estoy enfocada en construir una trayectoria profesional donde la creatividad y el rigor periodístico se encuentren, siempre con la iniciativa necesaria para seguir aprendiendo y afrontar nuevos desafíos.
          </p>
        </div>
        
        <div className="mt-4 pt-10">
          <a href="#proyectos" className="boton-minimal">
            Ver Proyectos
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default SobreMi;
