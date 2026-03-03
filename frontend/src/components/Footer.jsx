import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-500 py-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grille principale du footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* 1. Bloc Marque & Description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-3 hover:opacity-80 transition-opacity">
              <img 
                src="/images/logo.jpeg" 
                alt="Logo Life Team" 
                className="h-6 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" 
              />
              <span className="text-ls font-bold text-white tracking-widest uppercase">
                <span className="text-amber-500">Life</span> Team
              </span>
            </Link>
            <p className="text-xs leading-relaxed max-w-sm text-slate-500">
              Communauté des entrepreneurs visionnaires dont la mission est de former et transformer pour l'excellence. 
            </p>
          </div>
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-3 hover:opacity-80 transition-opacity">
              <img 
                src="/images/logoSolex.jpeg" 
                alt="Logo Solex" 
                className="h-6 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" 
              />
              <span className="text-ls font-bold text-white tracking-widest uppercase">
                <span className="text-amber-500">Sol</span>ex
              </span>
            </Link>
            <p className="text-xs leading-relaxed max-w-sm text-slate-500">
              Cabinet de conformité juridique & Legaltech.
            </p>
            <p className="text-xs leading-relaxed max-w-sm text-slate-500">
              Sécuriser aujourd'hui. Garantir demain
            </p>
          </div>

          {/* 2. Liens Rapides */}
          <div>
            <h4 className="text-slate-300 font-bold uppercase tracking-wider text-[11px] mb-4">Navigation</h4>
            <ul className="space-y-2 text-[13px]">
              <li><a href="/#programme" className="hover:text-amber-500 transition-colors">Programme</a></li>
              <li><a href="/#infos" className="hover:text-amber-500 transition-colors">Infos pratiques</a></li>
              <li><Link to="/register" className="hover:text-amber-500 transition-colors">S'inscrire</Link></li>
            </ul>
          </div>

          {/* 3. Contact */}
          <div>
            <h4 className="text-slate-300 font-bold uppercase tracking-wider text-[11px] mb-4">Contact</h4>
            <ul className="space-y-2 text-[13px]">
              <li className="flex items-center gap-2">
                <span className="text-xs">📍</span> Abidjan, CI
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xs">✉️</span> 
                <a href="mailto:contact@lifeteam.ci" className="hover:text-amber-500 transition-colors">contact@lifeteam.ci</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xs">📞</span> 
                <a href="https://wa.me/2250151104839" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">
                  +225 01 51 10 48 39
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Ligne du bas (Copyright & Mentions Légales) */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-slate-600">
          <p>&copy; {new Date().getFullYear()} Life Team. Tous droits réservés.</p>
          
          <div className="flex gap-4 font-medium">
            {/* 👇 Liens vers les nouvelles pages créées */}
            <Link to="/cgv" className="hover:text-slate-400 transition-colors">
              CGV
            </Link>
            <span className="text-slate-800">|</span>
            <Link to="/confidentialite" className="hover:text-slate-400 transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}