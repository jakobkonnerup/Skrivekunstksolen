import PriceCard from "../components/PriceCard";
import ContactForm from "../components/ContactForm";
import TermsAccordion from "../components/TermsAccordion";
import optagelseHero from "../assets/optagelse-hero.png";
import OpenCallCard from "../components/OpenCallCard";
import BackButton from "../components/BackButton";



export default function OptagelseOgPriser() {
  return (
    <div className="w-full bg-gold">

      {/* HERO */}
      <div className="relative w-full h-[40vh]">
      <BackButton />
  <img
    src={optagelseHero}
    alt="Undervisningen"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/40"></div>

  <h1 className="absolute inset-0 flex items-center justify-center text-5xl font-display text-white">
    Optagelse & Priser
  </h1>
</div>

      {/* INTRO TEKST */}
      <div className="max-w-3xl mx-auto p-6 space-y-6 text-black">

        <h2 className="text-3xl font-display">
          Sådan søger du
        </h2>

        <p className="text-lg text-black font-bold leading-relaxed">
          Send os:
        </p>

        <ul className="list-disc list-inside text-lg text-black space-y-2">
          <li>Op til 3 sider skønlitterær tekst (på dansk, norsk eller svensk)</li>
          <li>
            1 side om dig selv, hvor du beskriver:
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>Hvad du læser</li>
              <li>Hvorfor du skriver</li>
              <li>Hvad der inspirerer dig</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-3xl font-display pt-6">
          Ansøgningsfrist
        </h2>
        <p className="text-lg">
          Der er løbende optag.
        </p>

        <h2 className="text-3xl font-display pt-6">
          Efter du har søgt
        </h2>
        <p className="text-lg ">
          Hvis vi vurderer, at du kan være en relevant kandidat, bliver du indkaldt til en samtale.  
          Vi aftaler tidspunktet via mail.
        </p>

        <h2 className="text-3xl font-display pt-6">
          Til samtalen
        </h2>
        <p className="text-lg">
          Du får en introduktion til:
        </p>
        <ul className="list-disc list-inside text-lg space-y-1">
          <li>hvad du kan forvente af at gå på skolen</li>
          <li>hvad skolen forventer af dig</li>
        </ul>
        <p className="text-lg pt-2">
          Kort efter samtalen får du besked om, hvorvidt du er optaget.
        </p>

        <h2 className="text-3xl font-display  pt-6">
          Når du er optaget
        </h2>
        <p className="text-lg">
          Får du tilsendt et betalingslink til forløbet.
        </p>
      </div>

      {/* PRICE CARDS */}
      <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-8">
        <PriceCard
          title="Forårsholdet"
          duration="13/1 → 13/6"
          hours="420 timer"
          price="12.600 kr."
        />

        <PriceCard
          title="Efterårsholdet"
          duration="15/8 → 15/12"
          hours="380 timer"
          price="11.800 kr."
        />
      </div>
      <OpenCallCard />
      <div>

      </div>
      <TermsAccordion />
      {/* KONTAKTFORM */}
      <div className="max-w-3xl mx-auto p-6">
        <ContactForm />
      </div>
    </div>
  );
}
