import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import SocialProofCard from "./SocialProofCard";

export default function SocialProofSlider() {
  const cards = [
    {
      text: "»… med så mange dedikerede, vidt forskellige mennesker omkring bordet, havde du et panel af tilbagemeldere på dine tekster, som dårligt kan købes for penge.« ”",
      variant: "dark",
    },
    {
      text: "»… Jeg lærte meget af at få og give kritik og at blive præsenteret for ny litteratur. Jeg lærte at bruge sproget på nye måder. Det har gjort mig til en bedre læser.«",
      variant: "red",
    },
    {
      text: "»…Blandingen af at skrive og læse egen tekst op i trygge omgivelser med andre, har gjort at jeg har åbnet mig og fået det bedre psykisk. Det vil jeg ikke undvære.«",
      variant: "light",
    },
    {
      text: "»… På skolen anerkendes man som forfatter og som menneske. Man bliver mødt i øjenhøjde. Det fik mig til at tro på mig selv og modet til at dele mine tekster«",
      variant: "blue",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: prev,
    trackMouse: true,
  });

  return (
    <div className="w-full bg-sand my-16">
      <h2 className="text-4xl text-left font-display text-black mb-12 pl-8 md:pl-60">
        Vores tidligere elever siger…
      </h2>

     {/* Slider container with overflow-hidden */}
<div
  className="relative w-full overflow-hidden"
  {...swipeHandlers}
>
  <div
    className="flex transition-transform duration-500"
    style={{ transform: `translateX(-${index * 100}%)` }}
  >
    {cards.map((card, i) => (
      <div key={i} className="min-w-full flex justify-center px-6 pb-8">
        <SocialProofCard
          text={card.text}
          variant={card.variant}
        />
      </div>
    ))}
  </div>
</div>
    </div>
  );
}
