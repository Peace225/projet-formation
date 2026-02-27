import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Success from "./pages/Success";
import Admin from "./pages/Admin";
import Footer from "./components/Footer";
import CGV from "./pages/CGV";
import Confidentialite from "./pages/Confidentialite";

export default function App() {
  return (
    <BrowserRouter>
      {/* On entoure tout d'une div Flexbox pour s'assurer que 
        le footer reste bien en bas si la page est courte.
      */}
      <div className="flex flex-col min-h-screen">
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/success" element={<Success />} />
            <Route path="/cgv" element={<CGV />} />
            <Route path="/confidentialite" element={<Confidentialite />} />
            
            {/* La page Admin gère elle-même la connexion et le tableau de bord */}
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>

        {/* En le plaçant ici, le Footer s'affichera AUTOMATIQUEMENT 
          sur toutes les pages de ton site.
        */}
        <Footer />
        
      </div>
    </BrowserRouter>
  );
}