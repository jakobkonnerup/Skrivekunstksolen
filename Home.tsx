import React from "react";
import CTAButton from "../components/CTAButton";
import Slider from "../components/Slider";
import InfoCard from "../components/InfoCard";
import InfoCard2 from "../components/InfoCard2";
import Efter from "../components/Efter";
import SocialProofSlider from "../components/SocialProofSlider";
import UndervisInfo from "../assets/UndervisInfo.png";
import faellesInfo from "../assets/faellesInfo.png";
import vogn1 from "../assets/vogn1.png";
import vogn2 from "../assets/vogn2.png";
import vogn3 from "../assets/vogn3.png";
import { useNavigate } from "react-router-dom";


export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-sand pb-20">
      {/* Full-width video */}
      <div className="w-full aspect-video">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/v7S5Vut_BVc"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Indhold */}
      <div className="flex flex-col">
  {/* HERO TEXT */}
  <div className="max-w-4xl mx-auto px-6 py-16 text-center md:text-left">
    <h1 className="
      font-display text-black
      text-4xl md:text-5xl lg:text-6xl
      mb-6
    ">
      Skrivekunstskolen
    </h1>

    <p className="
      text-black text-left font-sans font-light
      text-lg md:text-xl lg:text-2xl
      leading-relaxed
      max-w-3xl
    ">
      Ønsker du at blive bedre til at skrive og læse skønlitteratur? <br />
      Til at forholde dig kritisk til det du selv og andre skriver? <br />
      Kunne du tænke dig at bruge et halvt år på at fordybe dig i din egen og andres litteratur?
    </p>

    <div className="mt-8 md:mt-10">
      <CTAButton variant="red" onClick={() => navigate("/ansog")}>
        Søg ind nu
      </CTAButton>
    </div>
  </div>

  <Slider />
</div>

<div className="max-w-6xl mx-auto px-6 pt-16">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    <InfoCard
      title="Undervisningen"
      imageSrc={UndervisInfo}
      text="Undervisningen er tilrettelagt med 20 timer om ugen kl. 10-15 alle hverdage med undtagelse af onsdage. Forårsforløbet varer 21 uger og efterårsforløbet varer 18 uger og starter i hhv. januar og august. 
      Semestret afsluttes med en antologi, der samler et udvalg af elevernes tekster."
      buttonText="Læs om vores undervisning"
      onButtonClick={() => navigate("/undervisning")}
    />

    <InfoCard
      title="Fællesskabet"
      imageSrc={faellesInfo}
      text="På Skrivekunstskolen vægtes det sociale fællesskab på lige fod med det faglige. Vi tror på, at kunsten lever sit mest fyldestgørende liv, når den opleves og produceres sammen med andre. Derfor er det vigtigt for os, at eleverne har det godt, mens de går på skolen.  Det betyder, at vi altid bestræber os på at skabe et trygt rum, hvor der er plads til at være sårbar, og hvor man kan finde modet til at udfordre sig selv."
      buttonText="Læs om det sociale"
      onButtonClick={() => navigate("/arrangementer")}
    />
  </div>
</div>

      <SocialProofSlider />
      <Efter/>
      <div className="max-w-6xl mx-auto px-6 pt-20">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    <InfoCard2
      title="Vogn 1"
      imageSrc={vogn1}
      text="Vogn 1 er skolens base – et sted med hyggelige sofakroge, bordtennisbord og en kaffemaskine, der altid summer."
    />

    <InfoCard2
      title="Rammer"
      imageSrc={vogn2}
      text="Her mødes eleverne både i pauserne og efter skoletid, hvor rummet danner ramme om et rigt socialt og kulturelt liv."
    />

    <InfoCard
      title="Der sker en masse"
      imageSrc={vogn3}
      text="Oplæsninger, workshops, forfattertalks og selvfølgelig også skolens egne arrangementer."
      buttonText="Læs om vores arrangementer"
      onButtonClick={() => navigate("/arrangementer")}
    />
  </div>
</div>
    </div>
  );
}
