"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import CTAButton from "../components/CTAButton";
import { createClient } from "@supabase/supabase-js";

// Supabase klient – brug miljøvariabler i produktion
const supabaseUrl = "https://qphaodcuzbvjeelpizsu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwaGFvZGN1emJ2amVlbHBpenN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU0NDAyMzYsImV4cCI6MjA4MTAxNjIzNn0.UqkrPa1qix86xLuhY_MVwzC7B06OpCgxsUh6jn8m_1s";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function ApplyContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    hold: "Forårsholdet",
    message: "",
  });

  const [documents, setDocuments] = useState<{ aboutMe?: File; fiction?: File }>({});
  const [status, setStatus] = useState<null | "success" | "error">(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleFileChange(
    e: React.ChangeEvent<HTMLInputElement>,
    type: "aboutMe" | "fiction"
  ) {
    if (e.target.files && e.target.files[0]) {
      setDocuments((prev) => ({ ...prev, [type]: e.target.files![0] }));
    }
  }

  // Upload fil til Supabase Storage
  async function uploadFile(file: File, folder: string) {
    if (!file) return null;
    const sanitizedFileName = file.name
      .replace(/\s+/g, "_")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Z0-9_.-]/g, "");
    const fileName = `${folder}/${Date.now()}_${sanitizedFileName}`;
  
    const { data, error } = await supabase.storage
      .from("applications")
      .upload(fileName, file, { upsert: true });
  
    if (error) {
      console.error("Upload fejl:", error);
      return null;
    }
  
    const { publicUrl } = supabase.storage.from("applications").getPublicUrl(fileName);
    return publicUrl;
  }

  async function sendEmail(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);

    // Upload dokumenter
    const aboutMeUrl = documents.aboutMe ? await uploadFile(documents.aboutMe, "aboutMe") : null;
    const fictionUrl = documents.fiction ? await uploadFile(documents.fiction, "fiction") : null;

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      hold: formData.hold,
      message: formData.message,
      aboutMeUrl: aboutMeUrl || "Ingen fil",
      fictionUrl: fictionUrl || "Ingen fil",
      time: new Date().toLocaleString(),
    };

    emailjs
      .send("service_09ap2er", "template_dpyby48", templateParams, "0sc30gaTHz2df-y48")
      .then(() => {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          hold: "Forårsholdet",
          message: "",
        });
        setDocuments({});
      })
      .catch(() => setStatus("error"));
  }

  return (
    <div className="bg-dark-green max-w-3xl mx-auto rounded-3xl shadow-xl p-10 space-y-6 text-white min-h-full">
      <h2 className="text-3xl font-display mb-6 text-center">
        Udfyld formularen for at søge ind på skrivekunstskolen!
      </h2>

      <p>
        Send os op til tre sider skønlitterær tekst. <br /><br />
        Send 1 side om dig selv, hvad læser du? hvorfor skriver du? osv.
      </p>

      <form onSubmit={sendEmail} className="space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Navn..."
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-3xl text-black"
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email..."
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border rounded-3xl text-black"
          required
        />

        <input
          name="phone"
          type="text"
          placeholder="Telefonnummer..."
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 border rounded-3xl text-black"
          required
        />

        <select
          name="hold"
          value={formData.hold}
          onChange={handleChange}
          className="w-full p-2 px-1 border rounded-3xl text-black"
        >
          <option>Forårsholdet</option>
          <option>Efterårsholdet</option>
        </select>

        <h3>Om dig:</h3>
        <input
          type="file"
          accept=".doc,.docx"
          onChange={(e) => handleFileChange(e, "aboutMe")}
          className="w-full text-black"
        />

        <h3>Din tekst:</h3>
        <input
          type="file"
          accept=".doc,.docx"
          onChange={(e) => handleFileChange(e, "fiction")}
          className="w-full text-black"
        />

        <textarea
          name="message"
          placeholder="Evt. ekstra besked..."
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border rounded-3xl h-32 text-black"
        />

        <div className="flex justify-end">
          <CTAButton variant="red">Send ansøgning</CTAButton>
        </div>

        {status === "success" && (
          <p className="flex justify-end text-light-blue pt-2">
            Din ansøgning blev sendt ✔️
          </p>
        )}
        {status === "error" && (
          <p className="flex justify-end text-red-300 pt-2">
            Der opstod en fejl. Prøv igen.
          </p>
        )}
      </form>
    </div>
  );
}
