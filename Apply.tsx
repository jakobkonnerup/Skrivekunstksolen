import ApplyContactForm from "../components/ApplyContactForm";

export default function Apply() {
  return (
    <div className="w-full bg-sand">
      {/* ---------- HERO ---------- */}
      <div className="relative w-full h-[40vh] bg-light-green flex items-center justify-center">
        <h1 className="text-white font-display text-5xl md:text-6xl">
          Søg ind herunder
        </h1>
      </div>

      {/* ---------- CONTENT ---------- */}
      <section className="max-w-5xl mx-auto px-6 md:px-0 py-16 space-y-10">

        <ApplyContactForm />
      </section>
    </div>
  );
}
