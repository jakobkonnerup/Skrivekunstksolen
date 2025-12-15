import Accordion from "../components/Accordion";
import BackButton from "../components/BackButton";


export default function Politik() {
  return (
    <div className="w-full bg-dust-blue">

      {/* ---------- HERO ---------- */}
      <div className="relative w-full h-[35vh] bg-dark-green flex items-center justify-center">
      <BackButton />
        <h1 className="text-white font-display text-5xl md:text-6xl drop-shadow-lg">
          Adfærdspolitik
        </h1>
      </div>

      {/* ---------- Formål ---------- */}
      <section className="max-w-4xl mx-auto px-10 md:px-0 py-12 space-y-6">
        <h2 className="text-4xl font-display text-black">Formålet</h2>
        <p className="text-lg font-sans leading-relaxed">
          Politikken er rettet imod særlige mulige problemområder i skolens daglige liv.
          Formålet med politikken er at understrege, at Skrivekunstskolen tager klart afstand fra adfærdsformer som chikane, mobning, vold og voldelig adfærd, at skolen tager disse problemområder alvorligt, at skolen har fastlagt og løbende vil justere retningslinjer for forebyggelse af chikane, mobning, vold og voldelig adfærd, samt at Skrivekunstskolen har fastlagt procedurer for håndtering og eventuelt sanktioner, hvis disse adfærdsformer alligevel forekommer.
        </p>
      </section>

      {/* ---------- Målsætning ---------- */}
      <section className="max-w-4xl mx-auto px-10 md:px-0 py-12 space-y-6">
        <h2 className="text-3xl font-semibold font-sans text-black">Målsætning for adfærdspolitikken</h2>
        <p className="text-lg font-sans leading-relaxed">
          Chikane, mobning, vold og voldelig adfærd tolereres ikke på Skrivekunstskolen.
          Adfærd af disse typer kan medføre advarsel, afskedigelse eller udmeldelse.
          Studerende og medarbejdere skal vide, at Skrivekunstskolen ikke accepterer chikane, mobning, vold eller voldelig adfærd, og at der er et ønske om, at såvel kolleger som elever hjælper den krænkede, uanset hvem krænkeren er.
          Elever og medarbejdere på Skrivekunstskolen skal vide, hvordan de skal agere, hvis de bliver vidne til chikane, mobning, vold eller voldelig adfærd, og kende til de handlemuligheder (og evt. pligter), som de har.
          Der skal foreligge klare procedurer og iværksættes eventuelle sanktioner i tilfælde af konkrete sager ang. chikane, mobning, vold eller voldelig adfærd.
        </p>
      </section>

      {/* ---------- Retningslinjer ---------- */}
      <section className="max-w-4xl mx-auto px-10 md:px-0 py-12 space-y-6">
        <h3 className="text-3xl font-semibold font-sans text-black">Retningslinjer</h3>
        <p className="text-lg font-sans leading-relaxed">
          Som elev eller medarbejder i almindelighed: Respektér altid, hvis du har en medelev eller kollega, der siger fra over for dine eller andres handlinger eller udtalelser. Også selv om du selv synes, at der er tale om uskyldig adfærd, at det bare er for sjov mm.
        </p>

        <div className="space-y-4 mt-6">
          <Accordion
            title="Som krænket"
            content="Hvis du bliver udsat for en adfærd, du ikke ønsker, herunder fx seksuelle tilnærmelser eller pression af den ene eller anden art, skal du helst hurtigst muligt sige fra over for de handlinger, som du ikke ønsker. Det at sige fra kan også have betydning for en eventuel sags forløb. I mange sager om fx chikane eller mobning påstår chikanøren/mobberen, at denne opfattede situationen på den måde, at der ikke forelå chikane/mobning, men derimod en accept hos begge parter om den udviste adfærd. Derfor er det vigtigt at sige fra.
            Hvis du synes, at du er i stand til at gå videre end at sige fra, evt. tage en samtale med den, du føler dig krænket af, så kan en sådan samtale nogle gange stoppe krænkelsen – særligt, hvis den, du føler dig krænket af, har haft en anden opfattelse af situationen. Du har ikke pligt til at søge denne samtale.
            Hvis chikanen eller mobningen fortsætter, efter at du har sagt fra over for den uønskede adfærd, eller hvis det af en eller anden grund har været umuligt at sige direkte fra, bør du hurtigst muligt melde det til en lærer eller skolelederen. Du kan også vælge at søge hjælp og støtte hos en medelev."
          />
          <Accordion
            title="Som elev, lærer eller kollega"
            content="Hvis du som elev, lærer eller kollega bliver vidne til chikane, mobning, vold eller voldelig adfærd, skal du ikke forsøge at undgå de situationer, du oplever, men sige tydeligt fra over for den, der fx chikanerer, og du skal støtte den, det går ud over. Din opbakning kan være væsentlig for en evt. sags forløb, og din opbakning til den krænkede kan i øvrigt være afgørende for, at denne kommer godt igennem forløbet. Nogle gange føler en krænket person, at vedkommende selv er delvist skyld i situationen. Som elev, lærer eller kollega kan du hjælpe den krænkede til ikke at påtage sig en skyld, som ikke er vedkommendes.
            Du kan eventuelt tage en samtale med den fx formodet chikanerende eller mobbende part med henblik på at få afklaret sagen og/eller bragt denne adfærd til ophør. En sådan samtale skal dog alene tages, hvis den krænkede part ønsker det.
            Hvis du oplever, at den uønskede adfærd fortsætter, efter at du eller den krænkede part har gjort, hvad I kunne, skal du hjælpe til, at det bliver meldt til en lærer eller skolelederen. Du skal sikre dig, at den krænkede er indforstået med, at du bringer sagen videre."
          />

          <Accordion
            title="Som skoleleder eller lærer"
            content="Som skoleleder eller lærer skal du altid tage det alvorligt, hvis en elev eller kollega anmelder chikane, mobning, vold eller voldelig adfærd – ligegyldigt hvem den påståede chikanør, mobber eller voldsudøver er. Du skal altid iværksætte en procedure, der kan afklare sagen og/eller bringe den uønskede adfærd til ophør øjeblikkeligt."
          />
          <Accordion
            title="Procedure"
            content="Hvis en elev eller medarbejder har været udsat for eller vidne til chikane, mobning, vold eller voldelig adfærd på skolen eller udøvet af personer med tilknytning til skolen, bør vedkommende oftest (se dog ovenstående beskrivelser af mulige handlemåder) melde det til skolelederen eller en lærer.
            Proceduren vil herefter være, at skolelederen (som ledelsesansvarlig) inden for få dage efter en anmeldelse skal tage en samtale med anmelderen, den chikanerede, mobbede eller voldsramte, eventuelle vidner og den påståede chikanerende, mobber eller voldsudøvende (samlet eller hver især) for at afklare sagens forløb. I visse tilfælde kan flere samtaler være nødvendige. Skolelederen kan vælge at inddrage andre (fx kolleger blandt lærerne) i samtalerne, hvilket dog kun kan ske efter accept af de i sagen implicerede parter."
          />
          <Accordion
            title="Sanktioner"
            content="Hvis anmeldelsen findes berettiget, skal skolelederen (som ledelsesansvarlig) anvende skolens mulige sanktioner over for den chikanerende, mobberen eller voldsudøveren. Grove tilfælde af chikane, mobning, vold eller voldelig adfærd vil føre til udmeldelse, mens der i milde tilfælde kan blive tale om periodisk udmeldelse eller en advarsel med påmindelse om, at gentagelse vil føre til udmeldelse."
          />
          <Accordion
            title="Særlige retningslinjer"
            content="Skrivekunstskolen har valgt at formulere nogle retningslinjer angående tre særlige mulige problemområder: chikane og mobning, undertrykkende og voldelig adfærd, og alkohol. Vi opfatter først og fremmest disse retningslinjer som præventive, men de kan også fungere som rettesnore for handling i tilfælde af enkeltsager."
          />
          <Accordion
            title="Chikane og mobning"
            content="Skrivekunstskolen har en nultolerancepolitik over for chikane og mobning. Det betyder selvfølgelig, at chikane og mobning ikke tolereres på skolen, men også, at vi tager chikane og mobning alvorligt, sådan at alle elever og medarbejdere på skolen véd, at vi ikke vil tolerere disse adfærdsformer.
            Chikane og mobning betragtes under et, fordi de ofte vurderes parallelt i juridiske sammenhænge. Med chikane tænkes ikke kun på direkte fysiske overgreb, også verbale overgreb, dvs. nedgørende eller udskammende tale, og seksuelt præget pression (fx igennem sms'er, sociale medier mm.) regnes for chikane. Fortsatte tilnærmelser til en person, som har markeret, at denne adfærd er uønsket, regnes også som pression og dermed chikane. Chikane kan desuden have karakter af undertrykkende adfærd, som umuliggør et trygt fællesskab. Det kan fx være, at chikanøren via passiv aggressiv adfærd (eller anden adfærd af særligt manipulerende karakter) forhindrer et konstruktivt undervisningsmiljø.
            Med mobning tænkes især på en fortsat nedgørende og nedværdigende adfærd over for enkeltpersoner eller grupper.
            Elever eller medarbejdere, som er udsat for eller vidne til chikane eller mobning på skolen eller udøvet af personer tilknyttet skolen, bør ikke affinde sig med denne adfærd. Så vidt muligt bør man straks sige fra over for den chikanerende eller mobberen, hvilket formentlig vil være nok til at standse chikanen/mobningen i de fleste tilfælde. Hvis chikanen eller mobningen fortsætter, hvis den har forekommet særlig alvorlig, eller hvis det af en eller anden grund har været umuligt at sige direkte fra, bør den medarbejder eller elev, som har været udsat for eller vidne til chikane eller mobning, melde det til skolelederen. Det er nu skolens ansvar at igangsætte en procedure for afklaring af sagen, hvor alle implicerede skal høres, og skolen kan eventuelt anvende sanktioner over for den chikanerende/mobberen."
          />
        </div>
      </section>

      <div className="pb-20"></div>
    </div>
  );
}
