import React from "react";
import Navbar from "../components/Navbar";

export default function Success() {
  const message = "Bonjour la Life Team ! Je viens de m'inscrire pour la Masterclass du 07 Avril et je souhaite finaliser ma place.";
  
  // Les deux numéros WhatsApp avec l'indicatif 225
  const lienWhatsApp1 = `https://wa.me/2250565284437?text=${encodeURIComponent(message)}`;
  const lienWhatsApp2 = `https://wa.me/2250708176324?text=${encodeURIComponent(message)}`;
  
  // ✅ Ton lien de groupe WhatsApp officiel
  const lienGroupeWhatsApp = "https://chat.whatsapp.com/KL1Y0yqbgef8Ultfy5nBP4?mode=hq1tcla";

  return (
    <div className="min-h-screen bg-slate-900 font-sans selection:bg-amber-200 flex flex-col relative overflow-hidden">
      
      <Navbar />

      {/* 🌟 Effets de lumière en fond */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="flex-grow flex items-center justify-center p-4 sm:p-6 relative z-10 my-8">
        <div className="bg-slate-800/80 backdrop-blur-xl p-8 sm:p-10 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.3)] w-full max-w-2xl border border-slate-700 relative overflow-hidden">
          
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>

          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-3xl font-extrabold text-white mb-3 tracking-tight">Inscription Confirmée !</h2>
            <p className="text-slate-300 text-base">
              Félicitations, votre place est pré-réservée. Pour finaliser votre inscription, veuillez suivre les deux étapes ci-dessous.
            </p>
          </div>
          
          {/* ========================================== */}
          {/* ETAPE 1 : CONTACTER UN CONSEILLER          */}
          {/* ========================================== */}
          <div className="text-center pt-8 border-t border-slate-700">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500 text-slate-900 font-bold">1</span>
              <p className="font-bold text-white text-lg">Validez votre ticket d'accès</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href={lienWhatsApp1} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto bg-[#25D366] text-white text-sm font-bold py-3 px-6 rounded-xl shadow-lg hover:bg-[#1ebd5b] hover:-translate-y-1 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 0C5.383 0 0 5.383 0 12.031c0 2.128.552 4.195 1.6 6.002L.113 23.88l5.966-1.564c1.745.955 3.731 1.458 5.766 1.458 6.648 0 12.031-5.383 12.031-12.031C24.062 5.383 18.679 0 12.031 0zm.016 21.616c-1.801 0-3.565-.483-5.115-1.402l-.367-.217-3.804.997 1.018-3.709-.238-.378c-1.009-1.603-1.542-3.468-1.542-5.389 0-5.467 4.448-9.915 9.915-9.915s9.915 4.448 9.915 9.915-4.448 9.915-9.915 9.915zm5.437-7.424c-.298-.149-1.763-.871-2.036-.971-.273-.1-.472-.149-.671.149-.199.298-.77 1.02-.944 1.219-.174.199-.348.224-.646.075-.298-.149-1.258-.464-2.396-1.482-.886-.791-1.484-1.768-1.658-2.066-.174-.298-.019-.46.13-.609.134-.134.298-.348.447-.522.149-.174.199-.298.298-.497.1-.199.05-.373-.025-.522-.075-.149-.671-1.616-.919-2.213-.243-.582-.489-.504-.671-.513-.174-.009-.373-.009-.572-.009-.199 0-.522.075-.795.373-.273.298-1.044 1.02-1.044 2.486s1.069 2.884 1.218 3.083c.149.199 2.103 3.207 5.095 4.498.712.308 1.268.492 1.7.63.714.227 1.365.195 1.88.118.575-.086 1.763-.721 2.011-1.418.248-.696.248-1.293.174-1.418-.074-.124-.273-.199-.571-.348z" />
                </svg>
                Conseiller 1 : 05 65 28 44 37
              </a>

              <a 
                href={lienWhatsApp2} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto bg-[#25D366] text-white text-sm font-bold py-3 px-6 rounded-xl shadow-lg hover:bg-[#1ebd5b] hover:-translate-y-1 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 0C5.383 0 0 5.383 0 12.031c0 2.128.552 4.195 1.6 6.002L.113 23.88l5.966-1.564c1.745.955 3.731 1.458 5.766 1.458 6.648 0 12.031-5.383 12.031-12.031C24.062 5.383 18.679 0 12.031 0zm.016 21.616c-1.801 0-3.565-.483-5.115-1.402l-.367-.217-3.804.997 1.018-3.709-.238-.378c-1.009-1.603-1.542-3.468-1.542-5.389 0-5.467 4.448-9.915 9.915-9.915s9.915 4.448 9.915 9.915-4.448 9.915-9.915 9.915zm5.437-7.424c-.298-.149-1.763-.871-2.036-.971-.273-.1-.472-.149-.671.149-.199.298-.77 1.02-.944 1.219-.174.199-.348.224-.646.075-.298-.149-1.258-.464-2.396-1.482-.886-.791-1.484-1.768-1.658-2.066-.174-.298-.019-.46.13-.609.134-.134.298-.348.447-.522.149-.174.199-.298.298-.497.1-.199.05-.373-.025-.522-.075-.149-.671-1.616-.919-2.213-.243-.582-.489-.504-.671-.513-.174-.009-.373-.009-.572-.009-.199 0-.522.075-.795.373-.273.298-1.044 1.02-1.044 2.486s1.069 2.884 1.218 3.083c.149.199 2.103 3.207 5.095 4.498.712.308 1.268.492 1.7.63.714.227 1.365.195 1.88.118.575-.086 1.763-.721 2.011-1.418.248-.696.248-1.293.174-1.418-.074-.124-.273-.199-.571-.348z" />
                </svg>
                Conseiller 2 : 07 08 17 63 24
              </a>
            </div>
          </div>

          {/* ========================================== */}
          {/* ETAPE 2 : REJOINDRE LE GROUPE VIP          */}
          {/* ========================================== */}
          <div className="text-center pt-8 mt-8 border-t border-slate-700">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 text-slate-900 font-bold">2</span>
              <p className="font-bold text-white text-lg">Rejoignez la communauté</p>
            </div>
            
            <a 
              href={lienGroupeWhatsApp} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full bg-slate-900 border border-emerald-500/50 text-emerald-400 text-base font-bold py-4 px-8 rounded-xl hover:bg-emerald-500/10 transition-all duration-300"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 0C5.383 0 0 5.383 0 12.031c0 2.128.552 4.195 1.6 6.002L.113 23.88l5.966-1.564c1.745.955 3.731 1.458 5.766 1.458 6.648 0 12.031-5.383 12.031-12.031C24.062 5.383 18.679 0 12.031 0zm.016 21.616c-1.801 0-3.565-.483-5.115-1.402l-.367-.217-3.804.997 1.018-3.709-.238-.378c-1.009-1.603-1.542-3.468-1.542-5.389 0-5.467 4.448-9.915 9.915-9.915s9.915 4.448 9.915 9.915-4.448 9.915-9.915 9.915zm5.437-7.424c-.298-.149-1.763-.871-2.036-.971-.273-.1-.472-.149-.671.149-.199.298-.77 1.02-.944 1.219-.174.199-.348.224-.646.075-.298-.149-1.258-.464-2.396-1.482-.886-.791-1.484-1.768-1.658-2.066-.174-.298-.019-.46.13-.609.134-.134.298-.348.447-.522.149-.174.199-.298.298-.497.1-.199.05-.373-.025-.522-.075-.149-.671-1.616-.919-2.213-.243-.582-.489-.504-.671-.513-.174-.009-.373-.009-.572-.009-.199 0-.522.075-.795.373-.273.298-1.044 1.02-1.044 2.486s1.069 2.884 1.218 3.083c.149.199 2.103 3.207 5.095 4.498.712.308 1.268.492 1.7.63.714.227 1.365.195 1.88.118.575-.086 1.763-.721 2.011-1.418.248-.696.248-1.293.174-1.418-.074-.124-.273-.199-.571-.348z" />
              </svg>
              Rejoindre le groupe WhatsApp VIP
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}