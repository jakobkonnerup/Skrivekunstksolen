import React from "react";
import efterImg from "../assets/efter.jpg";

export default function Efter() {
  return (
    <div
      className="w-full h-[800px] bg-cover bg-center flex items-baseline justify-end"
      style={{ backgroundImage: `url(${efterImg})`, backgroundPosition: "82% center", backgroundSize: "300% auto"}}
    >
        
      {/* Content container */}
      <div className=" text-white pl-12 pt-12">
      <h2 className="text-6xl font-display mb-6 md:pl-80">Efter forløbet</h2>
      <div className="text-left flex justify-end md:rounded-xl md:justify-center">
        
        <p className="text-base font-sans font-normal pr-4 leading-7 w-2/3 md:pt-40 md:pl-48 md:text-xl md:font-light"
        >
        Skrivekunstskolen tjener blandt andet som forberedende til Nordens forfatterskoler og har sendt elever videre til optagelse på Forfatterskolen (DK), Skrivekunstakademiet i Bergen (N), Forfatterstudiet i Bø (N) og Biskops Arnö (S).<br/><br/>  

Også Det Jyske                   Kunstakademi og Dramatikeruddannelsen har modtaget talenter fra skolen. <br/><br/>

Flere af skolens tidligere elever er debuteret som forfattere og/eller arbejder som redaktører, journalister, undervisere mv. 
        </p>
      </div>
      </div>

    </div>
  );
}