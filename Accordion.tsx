import { useState } from "react";

interface AccordionProps {
  title: string;
  content: string;
}

export default function Accordion({ title, content }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full md:w-[60vw] mx-auto">
      <div
        className="bg-standard-blue rounded-xl p-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-normal text-white">{title}</h3>
          <span className="text-white text-2xl">{isOpen ? "−" : "+"}</span>
        </div>
        {isOpen && (
          <p className="mt-4 text-white font-light leading-relaxed">{content}</p>
        )}
      </div>
    </div>
  );
}
