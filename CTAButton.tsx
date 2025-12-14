import React from "react";

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: "red" | "blue";
  onClick?: () => void;
}

export default function CTAButton({
  children,
  variant = "red",
  onClick,
}: CTAButtonProps) {
  const variantStyles = {
    red: "bg-standard-red text-button-grey",
    blue: "bg-light-blue text-button-grey",
  };

  return (
    <button
      onClick={onClick}
      className={`
        relative px-12 py-6 font-medium text-lg tracking-wide
        ${variantStyles[variant]}
      `}
    >
      {children}

      {/* Trekanten DER STIKKER UD */}
      <span
         className="
             absolute bottom-[-20px] right-[-24px]
             w-12 h-12
              bg-inherit
            [clip-path:polygon(50%_100%,50%_0%,100%_50%)]
            [transform:scalex(-1)]
             "
/>

    </button>
  );
}
