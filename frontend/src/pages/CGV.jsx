import React from "react";
import Navbar from "../components/Navbar";

export default function CGV() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 pb-20">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 pt-16">
        <h1 className="text-3xl font-bold mb-8 text-slate-900 border-b pb-4">Conditions Générales de Vente (CGV)</h1>
        
        <div className="space-y-8 text-sm leading-relaxed text-slate-600">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 underline">1. Objet</h2>
            <p>Les présentes CGV régissent la vente des places pour la Masterclass organisée par Life Team. Toute inscription implique l'acceptation sans réserve de ces conditions.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 underline">2. Inscription et Tarifs</h2>
            <p>Le tarif est fixé à 25 000 FCFA par personne. L'inscription n'est validée qu'après confirmation du paiement par nos services. Life Team se réserve le droit de refuser l'accès si le paiement n'est pas effectif.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 underline">3. Annulation et Remboursement</h2>
            <p>En raison de la logistique et du nombre limité de places, aucun remboursement ne sera effectué en cas d'absence du participant. Toutefois, une place peut être cédée à un tiers après information préalable de Life Team.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 underline">4. Responsabilité</h2>
            <p>Life Team s'engage à fournir un contenu de qualité. Toutefois, les conseils prodigués lors de la formation sont d'ordre général et ne sauraient remplacer une consultation juridique personnalisée adaptée à votre cas spécifique.</p>
          </section>
        </div>
      </div>
    </div>
  );
}