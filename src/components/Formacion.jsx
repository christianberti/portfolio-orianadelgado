import React from "react";

const Formacion = () => {
  return (
    <section id="formacion" className="min-h-[70vh] my-8 p-10 scroll-mt-20">
        <h1 className="text-3xl md:text-5xl font-bold">FORMACIÓN</h1>
      
      <div className="text-2xl flex flex-col justify-center gap-10 p-8 px-12 p my-8">
        <div>
          <p className="italic">2020 - 2025</p>
          <h3 className="font-bold my-2">- Licenciatura en Comunicación Social</h3>
          <h2>Universidad Nacional de Lomas de Zamora</h2>
        </div>
        <div>
          <p className="italic">2025</p>
          <h3 className="font-bold my-2">- Marketing Digital</h3>
          <h2>Digital Ad Expert</h2>
        </div>
      </div>
    </section>
  );
};

export default Formacion;
