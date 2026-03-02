import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans selection:bg-amber-200">
      
      <Navbar />

      {/* 🎯 HÉRO SECTION */}
      <header className="relative pt-20 pb-32 sm:pt-28 sm:pb-48 px-4 sm:px-6 lg:px-8 overflow-hidden z-0 bg-[url('/images/formation.png')] bg-cover bg-top bg-no-repeat">
        
        {/* OVERLAY SOMBRE */}
        <div className="absolute inset-0 bg-slate-900/85 z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Badge Mobile Friendly */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-slate-800/80 border border-slate-700 text-amber-400 text-[10px] sm:text-sm font-bold tracking-wide uppercase mb-6 sm:mb-8 shadow-lg backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            Masterclass Abidjan • Places limitées
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 sm:mb-8 tracking-tight leading-tight uppercase">
            Votre entreprise est-elle <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
              vraiment à l'abri ?
            </span>
          </h1>
          
          <p className="text-base sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed px-2">
            Imaginez-vous rater un financement d'une banque, un partenariat solide ou perdre un intant, des années de sacrifice et de dur labeur, à cause d'un manque de structuration juridique ou fiscale. <br/>
            <strong className="text-white font-semibold"> Prenez le contrôle avant qu'il ne soit trop tard.</strong>
          </p>
        </div>
      </header>

      {/* 👑 SECTION CONTENU (Grille responsive) */}
      <main id="programme" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-28 relative z-10 pb-24">
        
        {/* GRILLE DES CARTES : 1 col sur mobile, 3 sur desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 sm:mb-24">
          
          {/* CARTE 1 */}
          <div className="group bg-slate-900/95 backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-2xl border border-slate-700 hover:border-amber-500/50 hover:-translate-y-2 transition-all duration-300 relative">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">Bouclier Juridique</h2>
            <p className="text-slate-400 mb-6 leading-relaxed text-sm">
              Bâtissez des fondations inébranlables. Sécurisez chaque aspect de votre business.
            </p>
            <ul className="space-y-3 text-slate-300 text-xs sm:text-sm">
              <li className="flex gap-3"><span className="text-amber-500 font-bold">✔</span> Rédaction de contrats</li>
              <li className="flex gap-3"><span className="text-amber-500 font-bold">✔</span> Choix des statuts</li>
            </ul>
          </div>

          {/* CARTE 2 (Mise en avant sur desktop) */}
          <div className="group bg-gradient-to-b from-slate-800 to-slate-900 p-6 sm:p-8 rounded-3xl shadow-2xl border border-amber-500/30 md:-mt-4 md:mb-4 relative">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">Optimisation Fiscale</h2>
            <p className="text-slate-300 mb-6 leading-relaxed text-sm">
              Ne payez que ce que vous devez. Utilisez la loi à votre avantage.
            </p>
            <ul className="space-y-3 text-slate-200 text-xs sm:text-sm font-medium">
              <li className="flex gap-3"><span className="text-amber-400 font-bold">✔</span> Réduction de la pression fiscale</li>
              <li className="flex gap-3"><span className="text-amber-400 font-bold">✔</span> Éviter les pénalités</li>
            </ul>
          </div>

          {/* CARTE 3 */}
          <div className="group bg-slate-900/95 p-6 sm:p-8 rounded-3xl shadow-2xl border border-slate-700 relative">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">Sérénité Absolue</h2>
            <p className="text-slate-400 mb-6 leading-relaxed text-sm">
             Bâtir une entreprise durable, structuré et sécurisée.
            </p>
            <ul className="space-y-3 text-slate-300 text-xs sm:text-sm">
              <li className="flex gap-3"><span className="text-amber-500 font-bold">✔</span> Assistance juridique</li>
              <li className="flex gap-3"><span className="text-amber-500 font-bold">✔</span> Gestion administrative</li>
            </ul>
          </div>
        </div>

        {/* 🎫 TICKET D'ACCÈS (Vertical sur mobile, Horizontal sur desktop) */}
        <div id="infos" className="max-w-4xl mx-auto bg-white rounded-[2rem] shadow-xl overflow-hidden flex flex-col md:flex-row border border-slate-200 relative">
          
          {/* Bandelette déco (Verticale à gauche) */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-orange-400 to-orange-600"></div>
          
          {/* INFOS GAUCHE */}
          <div className="p-8 sm:p-12 md:w-2/3 border-b md:border-b-0 md:border-r border-dashed border-slate-200">
            <h3 className="text-[10px] font-bold tracking-[0.2em] text-orange-600 uppercase mb-3">Accès Exclusif</h3>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8 leading-tight">Informations Pratiques</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-lg shrink-0 border border-slate-100">📅</div>
                <div>
                  <p className="text-slate-400 text-[10px] uppercase font-bold mb-1">Date & Heure</p>
                  <p className="font-bold text-slate-900 text-sm sm:text-base">07 Avril 2026</p>
                  <p className="text-slate-600 text-xs">10h00 - 12h00</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-lg shrink-0 border border-slate-100">📍</div>
                <div>
                  <p className="text-slate-400 text-[10px] uppercase font-bold mb-1">Lieu</p>
                  <p className="font-bold text-slate-900 text-sm sm:text-base">Hôtel la Rose Blanche</p>
                  <p className="text-slate-600 text-xs">Angré, Abidjan</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* PRIX ET ACTION DROITE */}
          <div className="bg-slate-50/50 p-8 sm:p-12 md:w-1/3 flex flex-col justify-center items-center text-center">
            <p className="text-orange-500 font-bold mb-1 line-through text-[10px] uppercase tracking-wider">Normal : 50 000 F</p>
            <div className="text-4xl sm:text-5xl font-black text-slate-900 mb-1">25 000</div>
            <p className="text-slate-500 font-bold mb-8 text-xs uppercase tracking-widest">FCFA / Personne</p>
            
            <Link to="/register" className="w-full bg-orange-500 text-white font-black py-4 px-6 rounded-2xl hover:bg-slate-900 hover:shadow-2xl transition-all duration-300 transform active:scale-95 uppercase text-xs tracking-widest">
              Je réserve ma place
            </Link>
          </div>
        </div>

      </main>
    </div>
  );
}