import React from "react";

interface SocialProofCardProps {
  text: string;
  variant?: "dark" | "red" | "light" | "blue";
}

export default function SocialProofCard({
  text,
  variant = "red",
}: SocialProofCardProps) {
  const variantStyles: Record<string, string> = {
    dark: "bg-dark-green text-black",
    red: "bg-standard-red text-button-grey",
    light: "bg-light-green text-black",
    blue: "bg-standard-blue text-black",
  };

  return (
    <div className="relative">
      {/* The card itself */}
      <div
        className={`
          px-8 py-6 font-sans text-base leading-relaxed max-w-xl
          ${variantStyles[variant]}
        `}
      >
        {text}
      </div>

      {/* Triangle positioned relative to wrapper, not clipped by overflow */}
      <div
        className={`
          absolute w-8 h-8
          ${variantStyles[variant]}
          bottom-[-23px]
          right-[0px]
          [clip-path:polygon(100%_0%,0%_100%,100%_100%)]
          [transform:scaleY(-1)]
        `}
      />
    </div>
  );
}