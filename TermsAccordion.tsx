import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function TermsAccordion() {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="bg-standard-blue text-black mx-6 rounded-3xl p-3 cursor-pointer select-none transition-all duration-300 md:w-[48vw] mx-auto"
    >
      {/* Header */}
      <div className="flex justify-between items-center pl-4">
        <h3 className="text-xl font-semibold font-sans">Vilkår og betingelser</h3>

        <div className="transition-transform duration-300 text-white">
          {open ? <Minus size={24} /> : <Plus size={24} />}
        </div>
      </div>

      {/* Content */}
      <div
        className={`
          overflow-hidden transition-all duration-300 ease-in-out 
          ${open ? "max-h-[500px] mt-4" : "max-h-0"}
        `}
      >
        <p className="font-sans text-base leading-relaxed text-white font-thin">
          Køb af forløbet er ikke omfattet af fortrydelsesretten (jf. 
          forbrugeraftalelovens § 18 stk. 2). Tilmelding er <strong>bindende</strong>,
          men hvis du fortryder, kan du afmelde dig. Afmelding og tilbagebetaling kan
          ske indtil 10 dage før kursusstart mod et gebyr på 60 kr. Derefter er 
          tilmeldingen bindende. Afmelding er gældende, når du modtager en 
          afmeldingsmail. Ved senere afmelding/udeblivelse fra kurset betales fuldt 
          kursusgebyr.
        </p>
      </div>
    </div>
  );
}
