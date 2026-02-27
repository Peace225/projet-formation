import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erreur, setErreur] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErreur("");
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin"); // Redirection vers le tableau de bord
    } catch (error) {
      setErreur("Accès refusé. Identifiants incorrects.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 font-sans selection:bg-amber-200 flex flex-col relative overflow-hidden">
      <Navbar />

      <div className="flex-grow flex items-center justify-center p-4 relative z-10">
        <div className="bg-slate-800/50 backdrop-blur-md p-8 sm:p-10 rounded-3xl shadow-2xl w-full max-w-md border border-slate-700/50">
          
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-700 shadow-inner">
              <span className="text-2xl">🛡️</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Accès Restreint</h2>
            <p className="text-slate-400 text-sm">Espace réservé à l'administration</p>
          </div>

          <form className="space-y-5" onSubmit={handleLogin}>
            
            {erreur && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-3 rounded-lg text-sm text-center font-medium">
                {erreur}
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Email Admin</label>
              <input type="email" required 
                className="w-full bg-slate-900 text-white p-3 border border-slate-700 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Mot de passe</label>
              <input type="password" required 
                className="w-full bg-slate-900 text-white p-3 border border-slate-700 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button type="submit" disabled={loading}
              className="w-full bg-amber-500 text-slate-900 py-3 mt-4 rounded-xl font-bold hover:bg-amber-400 transition-colors disabled:opacity-50">
              {loading ? "Authentification..." : "Déverrouiller l'accès"}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}