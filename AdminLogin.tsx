"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qphaodcuzbvjeelpizsu.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwaGFvZGN1emJ2amVlbHBpenN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU0NDAyMzYsImV4cCI6MjA4MTAxNjIzNn0.UqkrPa1qix86xLuhY_MVwzC7B06OpCgxsUh6jn8m_1s";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    // 1) Log bruger ind
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg("Forkert email eller password.");
      setLoading(false);
      return;
    }

    // 2) Tjek om brugeren er admin
    const user = data.user;

    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("is_admin")
      .eq("id", user.id)
      .single();

    if (profileError || !profile?.is_admin) {
      setErrorMsg("Du har ikke adgang til adminpanelet.");
      setLoading(false);
      return;
    }

    // 3) Redirect til admin-panel
    navigate("/admin-langdigt");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-standard-blue p-6">
      <form
        onSubmit={handleLogin}
        className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md space-y-6"
      >
        <h2 className="text-3xl font-bold text-center">Admin Login</h2>

        {errorMsg && (
          <p className="text-red-600 bg-red-100 p-3 rounded-lg text-center">
            {errorMsg}
          </p>
        )}

        <div>
          <label className="block text-sm mb-1 font-semibold">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-3 rounded-full"
            placeholder="admin@skriv.dk"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 font-semibold">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-3 rounded-full"
            placeholder="•••••••••"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`
            w-full bg-standard-red text-white py-3 rounded-full font-semibold
            ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-red-700"}
          `}
        >
          {loading ? "Logger ind..." : "Log ind"}
        </button>
      </form>
    </div>
  );
}
