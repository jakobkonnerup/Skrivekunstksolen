import React from "react";
import CTAButton from "./CTAButton";

interface InfoCardProps {
  title: string;
  imageSrc: string;
  text: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export default function InfoCard({ title, imageSrc, text, buttonText, onButtonClick }: InfoCardProps) {
  return (
    <div className=" bg-white rounded-lg overflow-hidden mx-4 pb-4 md:w-[30vw] md:mt-20">
      {/* Billede */}
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />

      {/* Indhold */}
      <div className="p-6 flex flex-col items-center text-left">
        <h2 className="text-4xl font-display mb-4">{title}</h2>
        <p  className="text-gray-700 mb-6" >{text}</p>
        <CTAButton onClick={onButtonClick}>{buttonText}</CTAButton>
      </div>
    </div>
  );
}
