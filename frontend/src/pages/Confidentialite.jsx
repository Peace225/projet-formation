import React from "react";
import Navbar from "../components/Navbar";

export default function Confidentialite() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 pb-20">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 pt-16">
        <h1 className="text-3xl font-bold mb-8 text-slate-900 border-b pb-4">Politique de Confidentialité</h1>
        
        <div className="space-y-8 text-sm leading-relaxed text-slate-600">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 underline">1. Collecte des données</h2>
            <p>Lors de votre inscription, nous collectons votre nom, prénom, numéro de téléphone et adresse e-mail. Ces données sont nécessaires pour la gestion de votre ticket et la communication autour de l'événement.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 underline">2. Utilisation des données</h2>
            <p>Vos données sont strictement réservées à Life Team. Elles ne seront jamais vendues ou cédées à des tiers. Nous les utilisons uniquement pour vous contacter via WhatsApp ou E-mail concernant la Masterclass.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 underline">3. Droit d'accès et de suppression</h2>
            <p>Conformément aux lois en vigueur, vous disposez d'un droit d'accès et de suppression de vos données personnelles. Vous pouvez nous contacter à l'adresse : contact@lifeteam.ci pour toute demande.</p>
          </section>
        </div>
      </div>
    </div>
  );
}