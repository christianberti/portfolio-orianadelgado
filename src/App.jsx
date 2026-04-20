import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SobreMi from "./components/SobreMi";
import Educacion from "./components/Educacion";
import Proyectos from "./components/Proyectos";
import ContactoMinimal from "./components/ContactoMinimal";
import ProjectDetail from "./pages/ProjectDetail";

const Home = () => (
  <>
    <SobreMi />
    <Educacion />
    <Proyectos />
    <ContactoMinimal />
  </>
);

const App = () => {
  return (
    <div className="bg-[#0d0d0d] min-h-screen text-[#cbd5e1] selection:bg-steel-slate/30 selection:text-white">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyecto/:id" element={<ProjectDetail />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
