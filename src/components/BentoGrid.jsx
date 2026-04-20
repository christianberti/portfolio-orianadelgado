import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Rocket, Star } from "lucide-react";

const BentoGrid = () => {
  const cards = [
    {
      title: "Sobre Mí",
      content: "Mi nombre es Oriana Delgado, Licenciada en Comunicación Social. Apasionada por los medios y el deporte, busco transformar la realidad a través de mensajes con impacto.",
      className: "md:col-span-2 md:row-span-1 bg-[#0a0a0a] border-white/5",
      icon: <Star className="text-brand-orange" />
    },
    {
      title: "Formación",
      content: "Lic. en Comunicación Social - UNLZ (2020-2025)",
      className: "md:col-span-1 bg-gradient-to-br from-brand-orange/10 to-transparent",
      icon: <GraduationCap className="text-brand-orange" />
    },
    {
      title: "Marketing Digital",
      content: "Certificación en Digital Ad Expert.",
      className: "md:col-span-1 border-white/10",
      icon: <Rocket className="text-brand-coral" />
    }
  ];

  return (
    <section id="sobre-mi" className="py-24 px-8 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-4xl font-bold font-display uppercase tracking-tight">
          Perfil <span className="text-gradient">Profesional</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`p-8 rounded-[32px] glass flex flex-col border border-white/5 group hover:border-brand-orange/30 transition-colors ${card.className}`}
          >
            <div className="mb-6 p-3 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform">
              {card.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 font-display">{card.title}</h3>
            {card.content && <p className="text-white/60 leading-relaxed">{card.content}</p>}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BentoGrid;
