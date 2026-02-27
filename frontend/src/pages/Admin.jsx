import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import Navbar from "../components/Navbar";

export default function Admin() {
  // États pour l'authentification
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // États pour les données du Dashboard
  const [inscriptions, setInscriptions] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);

  // 1. Vérifier si l'admin est déjà connecté au chargement de la page
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // 2. Récupérer les données depuis Firebase SI l'admin est connecté
  useEffect(() => {
    if (user) {
      setDataLoading(true);
      const fetchData = async () => {
        try {
          const q = query(collection(db, "inscriptions"), orderBy("dateInscription", "desc"));
          const querySnapshot = await getDocs(q);
          const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setInscriptions(data);
        } catch (error) {
          console.error("Erreur lors de la récupération:", error);
        } finally {
          setDataLoading(false);
        }
      };
      fetchData();
    }
  }, [user]);

  // 3. Fonction pour se connecter
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError("");
    setIsLoggingIn(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // La page va automatiquement se mettre à jour grâce au onAuthStateChanged
    } catch (error) {
      setLoginError("Accès refusé. Identifiants incorrects.");
    } finally {
      setIsLoggingIn(false);
    }
  };

  // 4. Fonction pour se déconnecter
  const handleLogout = async () => {
    await signOut(auth);
  };

  // ÉCRAN D'ATTENTE (Pendant que Firebase vérifie la session)
  if (authLoading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-amber-500 font-bold animate-pulse">Vérification des accès sécurisés...</div>
      </div>
    );
  }

  // ==========================================
  // ÉCRAN 1 : FORMULAIRE DE CONNEXION (Si non connecté)
  // ==========================================
  if (!user) {
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
              <p className="text-slate-400 text-sm">Identifiez-vous pour accéder au Dashboard</p>
            </div>

            <form className="space-y-5" onSubmit={handleLogin}>
              {loginError && (
                <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-3 rounded-lg text-sm text-center font-medium">
                  {loginError}
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
              <button type="submit" disabled={isLoggingIn}
                className="w-full bg-amber-500 text-slate-900 py-3 mt-4 rounded-xl font-bold hover:bg-amber-400 transition-colors disabled:opacity-50">
                {isLoggingIn ? "Authentification..." : "Déverrouiller l'accès"}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // ÉCRAN 2 : LE DASHBOARD (Si connecté)
  // ==========================================
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-amber-200">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* En-tête du Dashboard avec bouton Déconnexion */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Espace Administration
            </h1>
            <p className="text-slate-500 mt-1">Gérez les inscriptions de votre Masterclass</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 bg-slate-900 py-2 px-5 rounded-xl shadow-lg border border-slate-700">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              <span className="text-amber-500 font-bold text-xl">{inscriptions.length}</span>
              <span className="text-white text-sm font-medium uppercase tracking-wider">Inscrits</span>
            </div>
            {/* Bouton pour quitter l'espace Admin */}
            <button onClick={handleLogout} className="bg-red-50 text-red-600 font-bold px-4 py-2 rounded-lg border border-red-200 hover:bg-red-100 transition-colors text-sm flex items-center gap-2">
              Déconnexion
            </button>
          </div>
        </div>

        {/* Tableau des données */}
        <div className="bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded-2xl overflow-hidden border border-slate-200">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-max">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="p-5 font-semibold tracking-wider text-sm uppercase">Nom & Prénoms</th>
                  <th className="p-5 font-semibold tracking-wider text-sm uppercase">Téléphone</th>
                  <th className="p-5 font-semibold tracking-wider text-sm uppercase">Email</th>
                  <th className="p-5 font-semibold tracking-wider text-sm uppercase">Statut</th>
                  <th className="p-5 font-semibold tracking-wider text-sm uppercase">Date d'inscription</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {dataLoading ? (
                  <tr>
                    <td colSpan="5" className="p-12 text-center text-slate-500 font-medium text-lg">
                      <span className="animate-pulse">Chargement sécurisé des données...</span>
                    </td>
                  </tr>
                ) : inscriptions.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="p-12 text-center text-slate-500 font-medium">
                      Aucun inscrit pour le moment. Partagez votre lien de réservation !
                    </td>
                  </tr>
                ) : (
                  inscriptions.map((item) => (
                    <tr key={item.id} className="hover:bg-amber-50/50 transition duration-150">
                      <td className="p-5 font-bold text-slate-800">{item.nom}</td>
                      <td className="p-5 font-mono text-slate-600 font-medium">{item.telephone}</td>
                      <td className="p-5 text-slate-600">{item.email}</td>
                      <td className="p-5">
                        <span className="bg-amber-100 text-amber-700 px-3 py-1.5 rounded-lg text-xs font-bold border border-amber-200 uppercase tracking-wide">
                          {item.statutPaiement || "En attente"}
                        </span>
                      </td>
                      <td className="p-5 text-slate-500 text-sm font-medium">
                        {new Date(item.dateInscription).toLocaleDateString('fr-FR', {
                          day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
                        })}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}