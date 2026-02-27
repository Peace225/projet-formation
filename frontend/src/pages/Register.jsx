import React, { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Register() {
  const [formData, setFormData] = useState({ 
    nom: "", telephone: "", email: "", password: "", formation: "Masterclass Fiscale & Juridique - 07/04" 
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      
      await setDoc(doc(db, "inscriptions", userCredential.user.uid), {
        nom: formData.nom,
        telephone: formData.telephone,
        email: formData.email,
        formation: formData.formation,
        statutPaiement: "En attente",
        dateInscription: new Date().toISOString()
      });

      navigate("/success"); // Redirection vers la page de paiement
    } catch (error) {
      alert("Erreur : " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 font-sans selection:bg-amber-200 flex flex-col relative overflow-hidden">
      <Navbar />

      {/* Effets de lumière en arrière-plan */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-700/30 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="flex-grow flex items-center justify-center p-4 relative z-10">
        <div className="bg-slate-800/80 backdrop-blur-xl p-8 sm:p-10 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)] w-full max-w-lg border border-slate-700 relative overflow-hidden">
          
          {/* Ligne dorée en haut de la carte */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600"></div>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-white mb-2">Réservation Exclusif</h2>
            <p className="text-amber-400 font-medium text-sm tracking-wide uppercase">
              Masterclass • 07 Avril 2026 • 25 000 FCFA
            </p>
          </div>
          
          <form onSubmit={handleRegister} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Nom et Prénoms</label>
              <input type="text" required 
                className="w-full bg-slate-900/50 text-white p-4 border border-slate-700 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all placeholder-slate-500" 
                placeholder="Ex: Jean Dupont"
                onChange={(e) => setFormData({...formData, nom: e.target.value})} />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Numéro WhatsApp / Appel</label>
              <input type="tel" required 
                className="w-full bg-slate-900/50 text-white p-4 border border-slate-700 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all placeholder-slate-500 font-mono" 
                placeholder="Ex: 01 02 03 04 05"
                onChange={(e) => setFormData({...formData, telephone: e.target.value})} />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Email Professionnel</label>
              <input type="email" required 
                className="w-full bg-slate-900/50 text-white p-4 border border-slate-700 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all placeholder-slate-500" 
                placeholder="votre.email@entreprise.com"
                onChange={(e) => setFormData({...formData, email: e.target.value})} />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Créer un mot de passe</label>
              <input type="password" required 
                className="w-full bg-slate-900/50 text-white p-4 border border-slate-700 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all placeholder-slate-500" 
                placeholder="Pour sécuriser votre accès"
                onChange={(e) => setFormData({...formData, password: e.target.value})} />
            </div>

            <button type="submit" disabled={loading} 
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 py-4 mt-6 rounded-xl font-extrabold text-lg hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2">
              {loading ? (
                <span className="animate-pulse">Sécurisation de la place...</span>
              ) : (
                <>Sécuriser ma place <span className="text-xl">🔒</span></>
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-slate-500">
              Vos données sont chiffrées et sécurisées de bout en bout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}