import { useNavigate } from "react-router-dom";
import CTAButton from "../components/CTAButton";
import InfoCard2 from "../components/InfoCard2";
import InfoCard from "../components/InfoCard";
import arrangementer from "../assets/arrangementer.png";
import arrangInfo1 from "../assets/arrangInfo1.png";
import arrangInfo2 from "../assets/arrangInfo2.png";
import arrangInfo3 from "../assets/arrangInfo3.png";

export default function Arrangementer() {
    const navigate = useNavigate();
    
  return (
    <div className="w-full bg-dust-blue">
      {/* ---------- HERO ---------- */}
      <div className="relative w-full h-[40vh]">
        <img
          src={arrangementer}
          alt="Arrangementer"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Title */}
        <h1 className="absolute inset-0 flex items-center justify-center text-6xl font-display text-white">
          Arrangementer
        </h1>
      </div>

      {/* ---------- INTRO TEXT + CTA ---------- */}
      <section className="max-w-4xl mx-auto px-6 md:px-0 py-12 space-y-6">
        <p className="text-lg leading-relaxed font-sans md:text-xl">
        Tre gange pr semester afholdes oplæsninger på skolen ifm. undervisningsforløbet.
        </p>
        <p className="text-lg leading-relaxed font-sans md:text-xl" >Se nuværende begivenheder på vores facebookside</p>
        <div className="flex justify-end">
  <a
    href="https://www.facebook.com/Skrivekunstskolen/events"
    target="_blank"
    rel="noopener noreferrer"
  >
    <CTAButton variant="red">Gå til Facebook</CTAButton>
  </a>
</div>
        
      </section>

      {/* ---------- INFOCARDS ---------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:p-20 gap-8 px-6 md:px-10 py-10 justify-items-center justify-between">
        <InfoCard2
            imageSrc={arrangInfo1}
          title="B-16 oplæsning"
          text="Midtvejs i undervisningsforløbet afholdes reception, hvor eleverne præsenterer deres B16-udgivelser med oplæsninger. B16 er en lille (A6) bog med i alt 16 sider."
        />

        <InfoCard2
        imageSrc={arrangInfo2}
          title="Afgangsoplæsning"
          text="Hvert semester rundes af med afgangsoplæsning, reception og fest for de dimitterende elever. Ved samme lejlighed udgives skolens afgangsantologi."
        />

        <InfoCard
        imageSrc={arrangInfo3}
          title="Læreroplæsning"
          text="Læreroplæsningen finder også sted en gang pr. semester, og her kan man høre skolens lærere læse op fra deres seneste eller kommende udgivelser. Læs om hvem der underviser på Skrivekunstskolen"
          buttonText="Undervisere"
          onButtonClick={() => navigate("/undervisere")}
        />
      </div>
    </div>
  );
}
