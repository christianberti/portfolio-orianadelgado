import React from "react";
import { motion } from "framer-motion";

const Educacion = () => {
  const items = [
    {
      year: "2020 - 2025",
      title: "Licenciatura en Comunicación Social",
      inst: "Universidad Nacional de Lomas de Zamora",
    },
    {
      year: "2025",
      title: "Marketing Digital",
      inst: "Digital Ad Expert",
    }
  ];

  return (
    <section id="formacion" className="py-32 px-8 md:px-20 max-w-6xl mx-auto border-t border-seamless">
       <div className="flex flex-col md:flex-row gap-20">
          <div className="md:w-1/3">
             <h2 className="text-4xl font-bold text-white uppercase tracking-widest">
               Formación <span className="text-steel-slate">Académica</span>
             </h2>
          </div>
          
          <div className="md:w-2/3 space-y-16">
            {items.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative pl-8 border-l border-steel-slate/20 hover:border-steel-slate transition-colors"
              >
                <div className="absolute top-0 left-[-1px] w-px h-0 bg-white group-hover:h-full transition-all duration-500"></div>
                <p className="text-xs font-bold text-steel-slate uppercase tracking-widest mb-2">{item.year}</p>
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-silver-light/60 text-lg italic">{item.inst}</p>
              </motion.div>
            ))}
          </div>
       </div>
    </section>
  );
};

export default Educacion;
