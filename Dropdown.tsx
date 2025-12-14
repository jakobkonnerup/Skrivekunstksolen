"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from 'lucide-react';

export default function Dropdown({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (val: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Luk dropdown når man klikker udenfor
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative w-full">
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full p-2 px-4 rounded-3xl bg-light-green text-black text-left flex items-center justify-between"
      >
        <span>{value || label}</span>

        {/* Pil */}
        <ChevronDown
  className={`
    w-5 h-5 transition-transform duration-300
    ${open ? "rotate-180" : "rotate-0"}
  `}
/>
      </button>

      {/* Dropdown-menu */}
      {open && (
        <div className="absolute left-0 top-full mt-1 w-full bg-light-green rounded-2xl shadow-lg z-50 max-h-40 overflow-scroll">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className="w-full text-left px-4 py-2 bg-extra-light-green text-black"
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
