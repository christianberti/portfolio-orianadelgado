import React from "react";

const SobreMi = () => {
  return (
    <section
      id="introduction"
      className="min-h-[70vh] flex my-8 p-10 scroll-mt-20"
    >
      <div className="min-w-[30%] flex flex-col justify-between ">
        <h1 className="text-3xl md:text-5xl font-bold">
          SOBRE MI
        </h1>
        <img src="#" alt="" />
      </div>
      <div className="text-xl flex flex-col justify-center gap-6 p-8">
        <p>
          Mi nombre es <span className="font-bold">Oriana Delgado</span>, tengo 23 años y en diciembre del 2025 me
          recibí de <span className="font-bold">Licenciada en Comunicación Social</span>. 
        </p>
        <p>
          Soy apasionada por la comunicación, los medios, las redes sociales y el deporte, y encuentro
          en ellos un espacio donde puedo expresar mi creatividad, pensamiento
          crítico y vocación profesional. 
        </p>
        <p>
          Estoy abierta a nuevos desafíos y enfocada en construir una trayectoria profesional que combine mis
          conocimientos con la práctica, siempre con responsabilidad, iniciativa
          y una actitud proactiva para seguir aprendiendo y creciendo.
        </p>
      </div>
    </section>
  );
};

export default SobreMi;
