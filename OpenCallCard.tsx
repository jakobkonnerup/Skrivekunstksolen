import React from "react";
import { CircleAlert } from "lucide-react";

export default function OpenCallCard() {
  return (
    <div className="flex justify-center mb-20 mt-4">
      {/* Card */}
      <div
        className="
          relative px-6 pt-2 pb-6 max-w-xl
          bg-standard-red text-black
          font-sans leading-relaxed
        "
      >
        <div className="flex flex-row items-center mb-2">
          <p className="font-sans text-6xl font-extra-bold text-button-grey">!</p>

          {/* Text content */}
          <h4 className="font-sans font-bold text-2xl pl-2">Løbende optag</h4>
        </div>

        <p className="text-base">
          Er der plads på holdet, er det muligt at blive optaget på skolen,
          selvom semestret er påbegyndt. For info herom kontakt skoleleder
          Christian Djurhuus på{" "}
          <a className="underline" href="mailto:djurhuus@litteraturen.nu">
            djurhuus@litteraturen.nu
          </a>
        </p>

        {/* Triangle bubble tip */}
        <div
          className="
            absolute w-8 h-8 
            bg-standard-red
            bottom-[-23px]
            right-0
            [clip-path:polygon(100%_0%,0%_100%,100%_100%)]
            [transform:scaleY(-1)]
          "
        />
      </div>
    </div>
  );
}
