"use client";

import { useState } from "react";
import workshopData from "../data/Workshop.json"; 
import Dropdown from "../components/Dropdown";

export default function Workshop() {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedTema, setSelectedTema] = useState("");
  const [selectedFokus, setSelectedFokus] = useState("");
  const [exercise, setExercise] = useState("");

  // Random helper
  const getRandom = (arr: string[]) =>
    arr[Math.floor(Math.random() * arr.length)];

  const handleGenerate = () => {
    if (!selectedGenre || !selectedTema || !selectedFokus) {
      alert("Vælg venligst alle tre muligheder.");
      return;
    }

    const genreOption = getRandom(workshopData.genre[selectedGenre]);
    const temaOption = getRandom(workshopData.tema[selectedTema]);
    const fokusOption = getRandom(workshopData.fokus[selectedFokus]);

    setExercise(`${genreOption} ${temaOption} ${fokusOption}`);
  };

  // NEW: Full random generator
  const handleGenerateRandom = () => {
    const randomGenreKey = getRandom(Object.keys(workshopData.genre));
    const randomTemaKey = getRandom(Object.keys(workshopData.tema));
    const randomFokusKey = getRandom(Object.keys(workshopData.fokus));

    const genreOption = getRandom(workshopData.genre[randomGenreKey]);
    const temaOption = getRandom(workshopData.tema[randomTemaKey]);
    const fokusOption = getRandom(workshopData.fokus[randomFokusKey]);

    setExercise(`${genreOption} ${temaOption} ${fokusOption}`);
  };

  return (
    <div className="bg-dark-green p-6 rounded-xl max-w-3xl mx-auto space-y-6 text-white">
      <h2 className="text-2xl font-display font-light">
        Træk en skriveøvelse og få gang i skriveriet!
      </h2>

      {/* Dropdowns */}
      <div className="flex flex-col md:flex-row gap-4">

        {/* GENRE */}
        <Dropdown
          label="Vælg genre"
          value={selectedGenre}
          options={Object.keys(workshopData.genre)}
          onChange={(val) => setSelectedGenre(val)}
        />

        {/* TEMA */}
        <Dropdown
          label="Vælg tema"
          value={selectedTema}
          options={Object.keys(workshopData.tema)}
          onChange={(val) => setSelectedTema(val)}
        />

        {/* FOKUS */}
        <Dropdown
          label="Vælg fokus"
          value={selectedFokus}
          options={Object.keys(workshopData.fokus)}
          onChange={(val) => setSelectedFokus(val)}
        />
      </div>

      {/* GENERATE BUTTON */}
      <button
        onClick={handleGenerate}
        className="bg-sand text-black px-6 py-2 rounded-3xl font-medium w-full hover:bg-yellow-600 hover:text-white"
      >
        Generér skriveøvelse
      </button>

      {/* FULL RANDOM BUTTON */}
      <button
        onClick={handleGenerateRandom}
        className="bg-standard-red text-black px-6 py-2 rounded-3xl font-medium w-full hover:bg-gray-200"
      >
        Træk en tilfældig skriveøvelse
      </button>

      {/* RESULT */}
      {exercise && (
        <div className="mt-6">
          <p className="mb-2 font-semibold">Din skriveøvelse lyder sådan:</p>
          <div className="bg-white text-black p-4 rounded-xl min-h-[100px]">
            {exercise}
          </div>
        </div>
      )}
    </div>
  );
}
