import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function PrivateRoute({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Firebase vérifie si quelqu'un est connecté en arrière-plan
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); // La vérification est terminée
    });

    return () => unsubscribe();
  }, []);

  // Pendant que Firebase cherche, on affiche un petit message d'attente
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-amber-500 font-bold animate-pulse">Vérification des accès sécurisés...</div>
      </div>
    );
  }

  // 🚨 Si la personne n'est PAS connectée, on la jette vers la page /login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // ✅ Si la personne est connectée, on la laisse entrer sur la page demandée
  return children;
}