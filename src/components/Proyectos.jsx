import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";

const Proyectos = () => {
  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="proyectos" className="py-32 px-8 md:px-20 max-w-6xl mx-auto border-t border-seamless">
      <div className="mb-20">
        <h2 className="text-4xl font-bold text-white uppercase tracking-widest border-l-4 border-steel-slate pl-6">
          Proyectos <span className="text-steel-slate">Seleccionados</span>
        </h2>
      </div>

      {/* PROYECTO PRINCIPAL (FEATURED) */}
      <div className="mb-32">
        {featuredProject && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative flex flex-col md:flex-row gap-16 items-center bg-white/5 p-8 md:p-16 border border-seamless hover:border-steel-slate/40 transition-all duration-700"
          >
             <div className="md:w-1/2 aspect-square md:aspect-video bg-black/40 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white/5 text-9xl font-black italic select-none">
                   JLR
                </div>
                <div className="relative z-10 w-24 h-px bg-steel-slate/40 group-hover:w-48 transition-all duration-500"></div>
             </div>

             <div className="md:w-1/2">
                <p className="text-xs font-bold text-steel-slate uppercase tracking-[0.4em] mb-6">Proyecto Destacado</p>
                <h3 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter transition-transform group-hover:translate-x-2 duration-500">
                  {featuredProject.title}
                </h3>
                <p className="text-silver-light/60 text-lg mb-10 leading-relaxed max-w-md">
                   {featuredProject.experience.intro}
                </p>
                <div className="flex items-center gap-8">
                   <Link 
                     to={`/proyecto/${featuredProject.id}`} 
                     className="boton-minimal !px-10 flex items-center gap-3 group/btn"
                   >
                     Ver más Detalles <ArrowUpRight className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" size={18} />
                   </Link>
                </div>
             </div>
          </motion.div>
        )}
      </div>

      {/* PROYECTOS SECUNDARIOS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {otherProjects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group p-10 border border-seamless hover:border-white/10 transition-colors flex flex-col h-full"
          >
            <p className="text-[10px] font-bold text-steel-slate uppercase tracking-widest mb-4">{project.subtitle}</p>
            <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight group-hover:text-steel-slate transition-colors">{project.title}</h3>
            <p className="text-silver-light/50 text-sm leading-relaxed mb-10 flex-grow">
               {project.desc}
            </p>
            <div className="pt-6 border-t border-white/5 mt-auto flex justify-between items-center">
               <span className="text-[10px] text-white/20 uppercase font-black tracking-widest">{project.achievements}</span>
               {/* Estos por ahora no llevan a detalle según tu instrucción (menor desarrollo) */}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Proyectos;
