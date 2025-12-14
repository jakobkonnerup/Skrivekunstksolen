import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Undervisning from "./pages/Undervisning";
import PriserKontakt from "./pages/PriserKontakt";
import Apply from "./pages/Apply";
import Undervisere from "./pages/Undervisere";
import Arrangementer from "./pages/Arrangementer";
import Inspire from "./pages/Inspire";
import Politik from "./pages/Politik";
import BackButton from "./components/BackButton";
import AdminLogin from "./pages/AdminLogin";
import AdminLangDigt from "./pages/AdminLangDigt";
import NotFound from "./pages/404";


export default function App() {
  return (
        <div className="flex flex-col min-h-screen">
      <Header />
      <ScrollToTop />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/undervisning" element={<Undervisning />} />
          <Route path="/priser-kontakt" element={<PriserKontakt />} />
          <Route path="/undervisere" element={<Undervisere />} />
          <Route path="/arrangementer" element={<Arrangementer />} />
          <Route path="/bliv-inspireret" element={<Inspire />} />
          <Route path="/adfaerdspolitik" element={<Politik />} />
          <Route path="/ansog" element={<Apply />} />
          <Route path="/404" element={<NotFound />} />
          {/* ---------------- ADMIN ROUTES ---------------- */}
          <Route path="/admin-login" element={<AdminLogin />} />

          <Route
            path="/admin-langdigt"
            element={
                <AdminLangDigt />
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}


