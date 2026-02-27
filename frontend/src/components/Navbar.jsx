import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const allerVersSection = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-[#01034e] border-b border-slate-800 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 flex justify-between items-center">
        
        {/* 1. Logo */}
        <Link to="/" className="flex items-center gap-3 relative z-[60]">
          <img src="/images/logo.jpeg" alt="Logo" className="h-8 sm:h-10 w-auto object-contain rounded" />
          <span className="text-lg sm:text-xl font-bold text-white tracking-widest uppercase">
            <span className="text-orange-500">Life</span> Team
          </span>
        </Link>

        {/* 2. Liens Centraux (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={(e) => allerVersSection(e, "programme")} className="text-sm font-semibold text-slate-300 hover:text-orange-500">
            Programme
          </button>
          <button onClick={(e) => allerVersSection(e, "infos")} className="text-sm font-semibold text-slate-300 hover:text-orange-500">
            Infos Pratiques
          </button>
        </div>

        {/* 3. Actions Droite (Bouton + Admin + Burger) */}
        <div className="flex items-center gap-3 sm:gap-4 relative z-[60]">
          
          {/* 👇 LIEN ADMIN (Visible sur ordinateur maintenant) */}
          <Link to="/admin" className="hidden md:block text-xs text-slate-400 hover:text-white transition-colors mr-2">
            Admin
          </Link>

          <Link to="/register" className="text-xs sm:text-sm font-bold text-slate-900 bg-amber-500 px-4 sm:px-6 py-2 rounded-full hover:bg-orange-500 transition-all">
            S'inscrire
          </Link>

          {/* Burger Mobile */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* 📱 Menu Mobile */}
      <div className={`md:hidden absolute w-full bg-[#01034e] border-b border-slate-800 transition-all duration-300 ${isOpen ? "top-full opacity-100" : "top-[-300px] opacity-0 pointer-events-none"}`}>
        <div className="flex flex-col p-6 gap-5">
          <button onClick={(e) => allerVersSection(e, "programme")} className="text-left text-lg font-medium text-slate-300 border-b border-slate-800 pb-2">
            Programme
          </button>
          <button onClick={(e) => allerVersSection(e, "infos")} className="text-left text-lg font-medium text-slate-300 border-b border-slate-800 pb-2">
            Infos Pratiques
          </button>
          {/* 👇 LIEN ADMIN (Mobile) */}
          <Link to="/admin" onClick={() => setIsOpen(false)} className="text-orange-500 text-sm font-bold bg-orange-500/10 p-3 rounded-lg">
            🔐 Accès Administrateur
          </Link>
        </div>
      </div>
    </nav>
  );
}