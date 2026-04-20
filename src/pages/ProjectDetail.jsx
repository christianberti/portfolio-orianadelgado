import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, TrendingUp, Users, Target } from "lucide-react";
import { projects } from "../data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return <div className="text-white p-20">Proyecto no encontrado.</div>;

  return (
    <div className="bg-[#0d0d0d] min-h-screen text-silver-light pb-20">
      {/* Header */}
      <div className="relative h-[60vh] flex items-end px-8 md:px-20 pb-20 border-b border-seamless overflow-hidden">
         <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-700"></div>
       
         
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="relative z-20 max-w-4xl"
         >
           <Link to="/" className="inline-flex items-center gap-2 text-steel-slate hover:text-white mb-8 transition-colors uppercase text-xs font-bold tracking-widest">
              <ArrowLeft size={16} /> Volver al Inicio
           </Link>
           <p className="text-steel-slate font-bold uppercase tracking-[0.3em] text-sm mb-4">{project.subtitle}</p>
           <h1 className="text-6xl md:text-8xl font-black text-white leading-none uppercase tracking-tighter">
             {project.title}
           </h1>
         </motion.div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-8 md:px-20 py-24 grid grid-cols-1 md:grid-cols-3 gap-20">
         
         {/* Left Column: Role & Context */}
         <div className="md:col-span-1 space-y-12">
            <div>
               <h3 className="text-steel-slate text-xs uppercase font-black mb-6 tracking-widest">Rol & Habilidades</h3>
               <p className="text-white text-lg font-medium leading-relaxed mb-6">{project.role}</p>
               <div className="flex flex-wrap gap-2">
                 {project.skills?.map(skill => (
                   <span key={skill} className="px-3 py-1 bg-white/5 border border-white/5 text-[10px] uppercase font-bold tracking-wider text-steel-slate">
                     {skill}
                   </span>
                 ))}
               </div>
            </div>

            <div>
               <h3 className="text-steel-slate text-xs uppercase font-black mb-6 tracking-widest">Experiencia</h3>
               <p className="text-silver-light/60 leading-relaxed italic border-l border-steel-slate/30 pl-4">
                 {project.experience?.details}
               </p>
            </div>
         </div>

         {/* Right Column: Objectives & Metrics */}
         <div className="md:col-span-2 space-y-20">
            <div>
               <h2 className="text-3xl font-bold text-white mb-12 uppercase tracking-tight flex items-center gap-4">
                 <Target className="text-steel-slate" size={28} /> Objetivos Alcanzados
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                 {project.objectives?.map((obj, i) => (
                   <div key={i} className="space-y-4">
                      <h4 className="text-white font-bold uppercase text-sm tracking-wide border-b border-steel-slate/20 pb-2">{obj.title}</h4>
                      <p className="text-silver-light/60 text-base leading-relaxed">{obj.desc}</p>
                   </div>
                 ))}
               </div>
            </div>

            <div className="bg-white/5 p-10 border border-seamless">
               <div className="flex items-center gap-6 mb-8 text-steel-slate">
                  <TrendingUp size={40} />
                  <h3 className="text-2xl font-bold text-white uppercase tracking-tighter">Resultados & Métricas</h3>
               </div>
               <p className="text-silver-light text-xl leading-relaxed italic">
                 "{project.metrics}"
               </p>
            </div>
         </div>
      </div>
      
      {/* Footer detail */}
      <div className="max-w-6xl mx-auto px-8 md:px-20 pt-20 text-center">
         <Link to="/" className="boton-minimal inline-block">
            Explorar más proyectos
         </Link>
      </div>
    </div>
  );
};

export default ProjectDetail;
