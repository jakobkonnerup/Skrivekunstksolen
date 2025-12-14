import React from "react";

export default function Footer() {
  return (
    <footer className="relative w-full">
      {/* GOOGLE MAPS (interaktivt iframe) */}
      <div className="relative w-full min-h-[1800px] overflow-hidden">
      <iframe
  title="Google Maps"
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d555.5480560126533!2d10.193595!3d56.205981!3m2!1i1024!2i768!4f40.1!3m3!1m2!1s0x464c3fed0b3fbe3f%3A0xf7048b2152da7fad!2sKjeld%20Tolstrups%20Gade%203%2C%208000%20Aarhus%2C%20Denmark!5e0!3m2!1sen!2sus!4v1765297963316!5m2!1sen!2sus&z=12"
  className="absolute inset-0 w-full h-full border-0"
  loading="lazy"
  allowFullScreen
></iframe>


        {/* InfoCard container - positioned with margin from edges */}
        <div className="absolute inset-0 flex items-start justify-center pt-16 pb-64 px-6 md:px-14 pointer-events-none">
          <div className="bg-sand max-w-3xl w-full p-8 md:p-10 shadow-2xl rounded-xl font-sans text-black leading-relaxed pointer-events-auto">
            <h2 className="text-2xl font-display text-black mb-4">Adresse</h2>
            <p>
              Godsbanen<br />
              Kjeld Tolstrups Gade 3<br />
              Indgang H, Vogn 1<br />
              8000, Aarhus C
            </p>

            <h2 className="text-2xl font-display text-black mt-8">Telefon</h2>
            <p>+45 2096 7454</p>

            <h2 className="text-2xl font-display text-black mt-8">Email</h2>
            <p>djurhuus@litteraturen.nu</p>

            <h2 className="text-2xl font-display text-black mt-8">Fotos</h2>
            <p>
              Anthon Jackson<br />
              Mads Bech<br />
              Søren Zeuth
            </p>

            <h2 className="text-2xl font-display text-black mt-8">Instagram</h2>
            <p>
              @skrivekunstskolen<br />
              @aarhuslitteraturcenter<br />
              @fo_aarhus<br />
              @godsbanen
            </p>

            <div className="my-10 text-black font-light">
              <p>
                Skrivekunstskolen er en dansk forfatterskole med base på Godsbanen i Aarhus.
                På skolen beskæftiger eleverne sig med kreativ skrivning, læsninger af udgivet
                litteratur og kritik.
              </p>
              <p className="mt-4">
                Skolen blev oprettet i 2013 af Jette Sunesen, Ruth Morell og Christian Djurhuus,
                hvoraf sidstnævnte er daglig leder. Derudover er der gæsteundervisning af flere
                forfattere. Skolen er en del af Aarhus Litteraturcenter i samarbejde med FO-Aarhus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}