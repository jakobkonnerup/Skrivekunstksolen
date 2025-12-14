import { useState } from "react";
import { Link } from "react-router-dom";
import skslogo from "../assets/skslogo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed bottom-0 left-0 w-full bg-sand text-white font-sans shadow-md z-50">
      <div className="flex items-center justify-between p-4 md:p-6">
        {/* Logo */}
        <div className="flex items-center">
        <Link to="/">
          <img src={skslogo} alt="Skrivekunstskolen Logo" className="h-14 w-auto" />
          </Link>
        </div>

        {/* Burger menu til mobil */}
        <button
          className="md:hidden text-black text-6xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "☰" : "☰"}
        </button>

        {/* Navigation desktop */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/undervisning" className="text-black hover:text-standard-blue">Undervisningen</Link>
          <Link to="/priser-kontakt" className="text-black hover:text-standard-blue">Optagelse & Priser</Link>
          <Link to="/undervisere" className="text-black hover:text-standard-blue">Undervisere</Link>
          <Link to="/arrangementer" className="text-black hover:text-standard-blue">Arrangementer</Link>
          <Link to="/bliv-inspireret" className="text-black hover:text-standard-blue">Bliv inspireret!</Link>
          <Link to="/adfaerdspolitik" className="text-black hover:text-standard-blue">Adfærdspolitik</Link>
        </nav>
      </div>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-end transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className={`absolute bottom-0 rounded-tl-lg bg-dark-green w-4/5 h-4/5 p-6 md:hidden transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-y-0" : "translate-y-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <nav className="flex flex-col items-left justify-top space-y-6 h-full">
            <Link to="/undervisning" className="text-white text-2xl" onClick={() => setMenuOpen(false)}>Undervisningen</Link>
            <Link to="/priser-kontakt" className="text-white text-2xl" onClick={() => setMenuOpen(false)}>Optagelse & Priser</Link>
            <Link to="/undervisere" className="text-white text-2xl" onClick={() => setMenuOpen(false)}>Undervisere</Link>
            <Link to="/arrangementer" className="text-white text-2xl" onClick={() => setMenuOpen(false)}>Arrangementer</Link>
            <Link to="/bliv-inspireret" className="text-white text-2xl" onClick={() => setMenuOpen(false)}>Bliv inspireret</Link>
            <Link to="/adfaerdspolitik" className="text-white text-2xl" onClick={() => setMenuOpen(false)}>Adfærdspolitik</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
