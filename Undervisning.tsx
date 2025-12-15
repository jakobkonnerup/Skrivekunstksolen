import React from "react";
import { useNavigate } from "react-router-dom";

import InfoCard from "../components/InfoCard";
import InfoCard2 from "../components/InfoCard2";
import BackButton from "../components/BackButton";

import UndervisningsInfo from "../assets/UndervisningsInfo.png";
import UndervisningsInfo2 from "../assets/UndervisningsInfo2.png";
import UndervisningsInfo3 from "../assets/UndervisningsInfo3.png";
import UndervisningsInfo4 from "../assets/UndervisningsInfo4.png";
import UndervisningsInfo5 from "../assets/UndervisningsInfo5.png";
import UndervisningsInfo6 from "../assets/UndervisningsInfo6.png";
import crowdsks from "../assets/crowdsks.png";

export default function Undervisning() {
  const navigate = useNavigate();

  return (
    <div className="bg-light-green">
      {/* Hero */}
      <div className="relative w-full h-[40vh]">
      <BackButton />
        <img
          src={UndervisningsInfo}
          alt="Undervisningen"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="absolute inset-0 flex items-center justify-center text-6xl font-display text-white">
          Undervisningen
        </h1>
      </div>

      {/* InfoCards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:p-20 gap-8 px-6 md:px-10 py-10 justify-items-center">
        <InfoCard2
          title="Forløbet"
          imageSrc={UndervisningsInfo2}
          text="Semestret er tilrettelagt i kortere tematiske forløb, der har fokus på litteraturens former, fx genrer. Forløbene kan også omhandle litteratur med politiske, økologiske, mytologiske eller kønsmæssige aspekter – uden at være begrænset hertil. Ofte er begge dele tilfældet."
        />

        <InfoCard
          title="Gæsteundervisere"
          imageSrc={UndervisningsInfo3}
          text="I løbet af semestret inviteres professionelle forfattere ind som gæsteundervisere. Det kan eksempelvis være med fokus på en særlig genre eller stil, som denne forfatter er kyndig i."
          buttonText="Undervisere"
          onButtonClick={() => navigate("/undervisere")}
        />

        <InfoCard2
          title="Rammerne"
          imageSrc={UndervisningsInfo6}
          text="Tryghed er essentielt for undervisningssituationen. Det gælder både, når vi taler om udgivet litteratur, og når vi læser hinandens tekster i kritisk øjemed. Der skal være plads til at udtrykke sig prøvende, og vi hjælper hinanden til konstruktive samtaler."
        />

        <InfoCard
          title="Hvad skriver vi på skolen?"
          imageSrc={UndervisningsInfo4}
          text="Der er ingen begrænsninger for, hvilke genrer eleverne skriver i, men al tekst betragtes som fiktion og skal være skrevet på dansk (eller et læseligt svensk eller norsk)."
          buttonText="Prøv vores skriveværktøjer"
          onButtonClick={() => navigate("/bliv-inspireret")}
        />

        <InfoCard2
          title="Udflugter"
          imageSrc={UndervisningsInfo5}
          text="Af og til tager vi på ekskursioner for at blive inspireret, styrke sammenholdet og skrive. Vi kan fx tage til Mols Bjerge, i Domkirken for at arbejde med rumlige beskrivelser eller i IKEA for at samle stof til dialoger."
        />

        <InfoCard2
          title="Praktisk info"
          imageSrc={crowdsks}
          text="Undervisningen er tilrettelagt med 20 timer om ugen kl. 10–15 alle hverdage med undtagelse af onsdage. Forårsforløbet varer 21 uger og efterårsforløbet varer 18 uger og starter henholdsvis i januar og august. Semestret afsluttes med en antologi med udvalgte elevtekster."
        />
      </div>
    </div>
  );
}
