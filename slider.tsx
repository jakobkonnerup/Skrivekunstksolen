import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.png";
import slider3 from "../assets/slider3.png";

interface Slide {
  imageSrc: string;
  text: string;
}

const slides: Slide[] = [
  {
    imageSrc: slider1,
    text: "Skrivekunstskolen er for unge i alderen 17-30, som vil prøve kræfter med kreativ skrivning. ",
  },
  {
    imageSrc: slider2,
    text: "Der kræves ingen særlige forudsætninger for at deltage.",
  },
  {
    imageSrc: slider3,
    text: "Kun lysten til at arbejde med den kreative proces, som er tekstproduktion og tekstkritik",
  },
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    trackMouse: true,
  });

  return (
    <div
  className="
    relative 
    w-full 
    bg-dark-green 
    overflow-hidden
    px-4
    py-8
    md:px-0
    md:py-0
    lg:h-[80vh]
  "
  {...swipeHandlers}
>
      {/* Glide-container */}
      <div
  className="
    flex
    transition-transform
    duration-500
    md:justify-center
  "
  style={{
    transform:
      window.innerWidth < 768
        ? `translateX(-${currentIndex * 100}%)`
        : "none",
  }}
>
{slides.map((slide, index) => (
  <div
    key={index}
    className="
      w-full
      flex-shrink-0
      px-4
      md:w-[30vw]
      md:px-4
      flex
      flex-col
      items-center
    "
  >
    <img
      src={slide.imageSrc}
      alt={`Slide ${index + 1}`}
      className="
      p-4
        w-full
        h-96
        object-cover
        object-center
        rounded-sm
        md:h-[60vh]
        md:pt-14
      "
    />

    {/* Desktop tekst */}
    <p
      className="
        hidden
        md:block
        mt-6
        text-grey
        text-2xl
        font-display
        text-center
        max-w-sm
      "
    >
      {slide.text}
    </p>

    {/* Mobil tekst (kun aktiv slide) */}
    <p
      className={`
        md:hidden
        mt-6
        text-grey
        text-lg
        font-display
        text-center
        transition-opacity
        ${currentIndex === index ? "opacity-100" : "opacity-0 h-0 overflow-hidden"}
      `}
    >
      {slide.text}
    </p>
  </div>
))}

      </div>

      {/* Tekst under */}
      {/*<p
        className="
        text-center 
        mt-6 
        text-grey 
        text-xl 
        md:text-2xl 
        lg:text-3xl 
        font-display 
        leading-relaxed 
        max-w-3xl 
        mx-auto
        px-6 
        pb-8
      "
        dangerouslySetInnerHTML={{ __html: slides[currentIndex].text }}
        /> */}
        

      {/* Cirkel-indikatorer */}
      <div className="flex justify-center mt-4 space-x-3 md:hidden">

        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentIndex === index ? "bg-standard-red" : "bg-sand"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
