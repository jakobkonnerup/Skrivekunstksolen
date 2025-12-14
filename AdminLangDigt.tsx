"use client";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";

// Supabase klient med session persistence
const supabaseUrl = "https://qphaodcuzbvjeelpizsu.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwaGFvZGN1emJ2amVlbHBpenN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU0NDAyMzYsImV4cCI6MjA4MTAxNjIzNn0.UqkrPa1qix86xLuhY_MVwzC7B06OpCgxsUh6jn8m_1s";

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: true, autoRefreshToken: true },
});

interface Verse {
  id: number;
  text: string;
  client_id: string;
  is_deleted: boolean;
}

export default function AdminLangDigt() {
  const navigate = useNavigate();
  const [vers, setVers] = useState<Verse[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  // 1️⃣ Check admin login og redirect hvis ikke admin
  useEffect(() => {
    const checkAdmin = async () => {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        navigate("/admin-login", { replace: true });
        return;
      }

      const { data: profile, error } = await supabase
        .from("profiles")
        .select("is_admin")
        .eq("id", user.id)
        .single();

      if (error || !profile?.is_admin) {
        navigate("/admin-login", { replace: true });
        return;
      }

      setIsAdmin(true);
      setLoading(false);
    };

    checkAdmin();
  }, [navigate]);

  // 2️⃣ Hent alle vers hvis admin
  useEffect(() => {
    if (!isAdmin) return;

    const loadVers = async () => {
      const { data, error } = await supabase
        .from("verses")
        .select("*")
        .order("created_at", { ascending: true });

      if (error) console.error("Fejl ved hentning af vers:", error);
      else setVers(data as Verse[]);
    };

    loadVers();
  }, [isAdmin]);

  // 3️⃣ Start redigering
  const startEdit = (id: number, text: string) => {
    setEditingId(id);
    setEditingText(text);
  };

  // 4️⃣ Gem redigering
  const saveEdit = async () => {
    if (!editingId) return;

    const { error } = await supabase
      .from("verses")
      .update({ text: editingText, updated_at: new Date().toISOString() })
      .eq("id", editingId);

    if (error) return console.error(error);

    setVers((prev) =>
      prev.map((v) => (v.id === editingId ? { ...v, text: editingText } : v))
    );

    setEditingId(null);
    setEditingText("");
  };

  // 5️⃣ Slet (soft-delete)
  const deleteVerse = async (id: number) => {
    const { error } = await supabase
      .from("verses")
      .update({ is_deleted: true, updated_at: new Date().toISOString() })
      .eq("id", id);

    if (error) return console.error(error);

    setVers((prev) =>
      prev.map((v) => (v.id === id ? { ...v, is_deleted: true } : v))
    );
  };

  // 6️⃣ Gendan slettet vers
  const restoreVerse = async (id: number) => {
    const { error } = await supabase
      .from("verses")
      .update({ is_deleted: false, updated_at: new Date().toISOString() })
      .eq("id", id);

    if (error) return console.error(error);

    setVers((prev) =>
      prev.map((v) => (v.id === id ? { ...v, is_deleted: false } : v))
    );
  };

  if (loading) return <p>Loader...</p>;

  return (
    <div className="p-10 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Admin — Langdigt</h1>
      <p className="text-gray-600">
        Her kan du redigere og slette indsendte vers.
      </p>

      <div className="space-y-4">
        {vers.map((v) => (
          <div
            key={v.id}
            className={`p-4 border rounded-xl ${
              v.is_deleted ? "bg-red-100" : "bg-white"
            }`}
          >
            {editingId === v.id ? (
              <div className="space-y-2">
                <input
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  className="w-full border p-2 rounded"
                />
                <button
                  onClick={saveEdit}
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Gem
                </button>
                <button
                  onClick={() => setEditingId(null)}
                  className="bg-gray-400 text-white px-4 py-2 rounded ml-2"
                >
                  Annuller
                </button>
              </div>
            ) : (
              <>
                <p className="text-black">{v.text}</p>
                <p className="text-sm text-gray-500">
                  ID: {v.id} • {v.client_id}
                </p>

                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => startEdit(v.id, v.text)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    Rediger
                  </button>

                  {!v.is_deleted ? (
                    <button
                      onClick={() => deleteVerse(v.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Slet
                    </button>
                  ) : (
                    <button
                      onClick={() => restoreVerse(v.id)}
                      className="bg-green-600 text-white px-3 py-1 rounded"
                    >
                      Gendan
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
