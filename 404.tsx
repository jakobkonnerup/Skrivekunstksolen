import React from "react";
import { useNavigate } from "react-router-dom";
import errorImage from "../assets/error-writing.png"; // evt. et billede af skrivning, pen eller papir

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-sand flex flex-col items-center justify-center p-12 text-center">
      {/* Billede */}
      <img
        src={errorImage}
        alt="Skrivekunstskolen - fejlside"
        className="w-full max-w-lg mb-12 rounded-md object-cover"
      />

      {/* Overskrift */}
      <h1 className="text-6xl font-display text-dark-green mb-6">
        404
      </h1>

      {/* Underoverskrift */}
      <h2 className="text-3xl font-display text-black mb-4">
        Siden blev væk… ligesom en ufuldendt novelle
      </h2>

      {/* Brødtekst */}
      <p className="text-lg font-sans text-black mb-8 leading-relaxed max-w-xl">
        Vi kunne ikke finde siden, du ledte efter. Måske er den endnu ikke skrevet – 
        eller også er den blevet slettet som et udkast. Prøv at gå tilbage til forsiden og begynd din skriveproces igen.
      </p>

      {/* CTA-knap */}
      <button
        onClick={() => navigate("/")}
        className="relative px-8 py-4 font-bold uppercase tracking-wide bg-standard-red text-button-grey hover:bg-dark-green transition-colors rounded"
      >
        Til forsiden
      </button>
    </div>
  );
}
