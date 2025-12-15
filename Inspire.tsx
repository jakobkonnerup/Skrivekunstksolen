import LangDigt from "../components/LangDigt";
import Workshop from "../components/Workshop";
import BackButton from "../components/BackButton";


export default function Inspire() {
  return (
    <div className="w-full bg-sand">
      {/* ---------- HERO ---------- */}
      <div className="relative w-full h-[40vh] bg-orange flex items-center justify-center">
      <BackButton />
        <h1 className="text-white font-display text-5xl md:text-6xl">
          Bliv Inspireret!
        </h1>
      </div>

      {/* ---------- CONTENT ---------- */}
      <section className="max-w-5xl mx-auto px-6 md:px-0 py-16 space-y-10">
        <p className="text-lg leading-relaxed font-sans pl-1 max-w-3xl md:pl-32">
          På denne side kan du prøver kræfter med nogle af vores skriveværktøjer!
          Bidrag enten til vores kollektive langdigt, eller træk i vores skriveøvelsesautomat.
        </p>

        <LangDigt />
        <Workshop />
      </section>
    </div>
  );
}
