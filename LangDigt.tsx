import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";

// Supabase klient
const supabaseUrl = "https://qphaodcuzbvjeelpizsu.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwaGFvZGN1emJ2amVlbHBpenN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU0NDAyMzYsImV4cCI6MjA4MTAxNjIzNn0.UqkrPa1qix86xLuhY_MVwzC7B06OpCgxsUh6jn8m_1s";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function LangDigt() {
  const [input, setInput] = useState("");
  const [vers, setVers] = useState<{ id: number; text: string }[]>([]);
  const [cooldown, setCooldown] = useState(0);
  const [clientId, setClientId] = useState("");

  // Håndter client_id og check tidligere cooldown
  useEffect(() => {
    let storedId = localStorage.getItem("client_id");
    if (!storedId) {
      storedId = uuidv4();
      localStorage.setItem("client_id", storedId);
    }
    setClientId(storedId);

    const lastAdded = localStorage.getItem("last_verse_time");
    if (lastAdded) {
      const diff = Math.floor((Date.now() - parseInt(lastAdded)) / 1000);
      if (diff < 600) setCooldown(600 - diff);
    }
  }, []);

  // Load eksisterende vers
  useEffect(() => {
    const fetchVers = async () => {
      const { data, error } = await supabase
        .from("verses")
        .select("id, text")
        .eq("is_deleted", false)
        .order("created_at", { ascending: true });
      if (error) console.error("Fejl ved hentning af vers:", error);
      else if (data) setVers(data);
    };
    fetchVers();
  }, []);

  // Cooldown timer, opdaterer hvert sekund
  useEffect(() => {
    if (cooldown <= 0) return;

    const interval = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [cooldown]);

  const handleAdd = async () => {
    if (input.trim() === "" || cooldown > 0) return;

    // Optimistisk opdatering i UI
    const tempId = Math.random(); // midlertidig nøgle
    setVers((prev) => [...prev, { id: tempId, text: input }]);

    // Start cooldown
    setCooldown(600);
    localStorage.setItem("last_verse_time", Date.now().toString());

    const { data, error } = await supabase.from("verses").insert({
      client_id: clientId,
      text: input,
    });

    if (error) {
      console.error("Fejl ved indsendelse:", error);
      setVers((prev) => prev.filter((v) => v.id !== tempId));
      return;
    }

    if (data) {
      // Erstat midlertidig ID med rigtig ID
      setVers((prev) =>
        prev.map((v) =>
          v.id === tempId ? { id: data[0].id, text: data[0].text } : v
        )
      );
    }

    setInput("");
  };

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="bg-standard-blue p-8 rounded-3xl space-y-6 max-w-3xl mx-auto">
      <h2 className="text-white font-display text-4xl">Skolens langdigt</h2>
      <p className="text-white font-sans text-2xl font-light">
        Tilføj dit vers herunder
      </p>

{/* TEXTBOX */}
<div className="bg-white p-6 rounded-xl min-h-[200px] max-h-[400px] shadow-inner space-y-2 font-sans overflow-y-auto">
  {vers.length === 0 && (
    <p className="text-gray-500 italic">
      Vær den første der bidrager til langdigtet...
    </p>
  )}

  {vers.map((line) => (
    <p key={line.id} className="text-black font-display">
      {line.text}
    </p>
  ))}
</div>

      {/* INPUT */}
      <input
        type="text"
        maxLength={78}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Skriv dit vers (max 78 tegn)"
        className="w-full p-3 rounded-3xl bg-white border text-black"
      />

      {/* BUTTON med visuel nedtælling */}
      <button
        onClick={handleAdd}
        disabled={cooldown > 0}
        className={`
          bg-sand px-6 py-3 rounded-3xl font-semibold w-full
          ${cooldown > 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-sand/80"}
        `}
      >
        {cooldown > 0 ? `Vent ${formatTime(cooldown)}` : "Tilføj vers"}
      </button>
    </div>
  );
}
