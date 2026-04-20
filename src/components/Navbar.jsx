import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Función para determinar el href según si estamos en Home o no
  const getPath = (section) => isHome ? `#${section}` : `/#${section}`;

  return (
    <nav className="w-full flex justify-between items-center py-10 px-8 md:px-20 absolute top-0 left-0 bg-transparent z-50">
      <div className="text-xl font-bold tracking-tighter text-white">
        <Link to="/" className="hover:text-steel-slate transition-colors">
          Oriana Delgado<span className="text-steel-slate">.</span>
        </Link>
      </div>
      
      <ul className="hidden md:flex space-x-12 items-center">
        <li><a href={getPath("sobre-mi")} className="enlace-menu text-xs uppercase font-bold">Perfil</a></li>
        <li><a href={getPath("formacion")} className="enlace-menu text-xs uppercase font-bold">Formación</a></li>
        <li><a href={getPath("proyectos")} className="enlace-menu text-xs uppercase font-bold">Proyectos</a></li>
        <li>
          <a href={getPath("contacto")} className="border-b border-steel-slate hover:border-white text-white text-xs uppercase font-bold transition-colors">
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
