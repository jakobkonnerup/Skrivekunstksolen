import CTAButton from "../components/CTAButton";
import InfoCard2 from "../components/InfoCard2";
import BackButton from "../components/BackButton";

import djuurhus from "../assets/djuurhus.jpg";
import nymo from "../assets/nymo.jpg";
import dalgas from "../assets/dalgas.jpg";
import mygind from "../assets/mygind.png";
import kaempe from "../assets/kaempe.jpg";
import bess from "../assets/bess.png";

export default function Undervisere() {
  return (
    <div className="w-full bg-light-red">

      {/* ---------- HERO (rød baggrund) ---------- */}
      <div className="relative w-full h-[35vh] bg-standard-red flex items-center justify-center">
      <BackButton />
        <h1 className="text-white font-display text-5xl md:text-6xl">
          Undervisere
        </h1>
      </div>

      {/* ---------- SKOLELEDER SECTION ---------- */}
      <section className="max-w-lg mx-auto px-2 md:px-0 py-12 space-y-6">
        <h2 className="text-2xl font-sans text-black pl-10 md:text-4xl">
          Skoleleder og underviser
        </h2>

        <InfoCard2
        imageSrc={djuurhus}
          title="Christian Djurhuus"
          text="Christian Djurhuus (f. 1980) BA ved Litteraturhistorie og Æstetik og kultur og daglig Leder af Litteraturen på Scenen (LIPS). Christian Djurhuus har været tilknyttet Aarhus Litteraturcenter siden 2012 og startede sammen med Jette Sunesen og Ruth Morell Skrivekunstskolen i januar 2013. Han er udgivet i Hvedekorn og andre tidsskrifter"
        />
      </section>

      {/* ---------- GÆSTEUNDERVISERE ---------- */}
      
      <section className="mx-auto px-2 md:px-0 space-y-6">
        <h3 className="text-4xl font-display text-black pl-10 md:text-6xl m">
          Gæsteundervisere
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:p-20 gap-8 px-6 md:px-10 py-10 justify-items-center justify-between">
          <InfoCard2
          imageSrc={dalgas}
            title="Gry Stokkendahl Dalgas"
            text="Gry Stokkendahl Dalgas (f. 1990) dimitterede i 2019 fra Talentskolens forfatterlinje, og samme år udkom hendes debutdigtsamling Det er herfra jeg vil begynde at tale, disse ord kan finde vej, for hvilken hun modtog Bodil og Jørgen Munch-Christensens debutantpris. I 2022 udgav hun langdigtet Kudan; eller Kalven på forlaget Ovbidat og det anmelderroste hybridværk At performe transkønnet vrede. "
          />

          <InfoCard2
          imageSrc={nymo}
            title="Ingrid Nymo"
            text="Ingrid Nymo (f. 1992) tog i 2016 hun afgang fra Talentskolens Forfatterlinje – Dansk Center for Kunstnerisk Talentudvikling. Nymo har tidligere undervist i 6 år Testrup Højskoles skrivelinje og har siden 2011 publiceret poesi og prosa i forskellige tidsskrifter. Hun debuterede i 2021 med romanen Kloster på forlaget Kronstork og har senest udgivet romanen Den røde hane (2024) på samme forlag."
          />

          <InfoCard2
          imageSrc={kaempe}
            title="Jens Kæmpe"
            text="Jens Kæmpe (f. 1993) har gået på Skrivekunstskolen og på Forfatterskolen. Han debuterede 28. marts 2019 med digtsamlingen Kunstens regler på Det københavnske forlag Cris & Guldmann. Året efter udgav han Pinseliljer og i 2021 udkom Det Store Selskab. Kæmpe underviser til daglig på Askov Højskole."
          />

        <InfoCard2
          imageSrc={mygind}
            title="Mads Mygind"
            text="Mads Mygind (f. 1984) udgav i 2010 pamfletten Tilbage er et sart pulver af oprør og debuterede i 2011 med digtsamlingen Før vi har set os omkring på forlaget Edition After Hand. Han har bidraget med digte og kortere prosa til diverse antologier og en række litterære tidsskrifter som Hvedekorn, Apparatur, Reception, Den Blå Port, Øverste Kirurgiske, Banana Split, m.fl. Mygind har senest udgivet digtsamlingen I min hule hånd (2023) på forlaget Kronstork."
          />

          <InfoCard2
          imageSrc={bess}
            title="Emma Bess"
            text="Emma Bess (f. 1989) er uddannet fra Forfatterskolen I 2015. Hun debuterede I 2018 med novellesamlingen Mødre, døtre, søstre, som hun modtog Bodil og Jørgen Munch-Christensens debutantpris for. I 2022 udgav hun romanen Ly. Hun er desuden cand. mag. i filosofi og litteraturhistorie fra Aarhus Universitet og har oversat svenske Stig Larssons debutværk Autisterne for forlaget Basilisk."
          />
        </div>
      </section>

      {/* SPACING */}
      <div className="pb-20"></div>
    </div>
  );
}
