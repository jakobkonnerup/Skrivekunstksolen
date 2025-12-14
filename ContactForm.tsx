import { useState } from "react";
import emailjs from "emailjs-com";
import CTAButton from "./CTAButton";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<null | "success" | "error">(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function sendEmail(e: React.FormEvent) {
    e.preventDefault();

    const templateParams = {
      name: formData.name,        // {{name}} i template
      email: formData.email,      // {{email}} i template
      message: formData.message,  // {{message}} i template
      time: new Date().toLocaleString(), // {{time}} i template
    };

    emailjs
      .send("service_09ap2er", "template_dpyby48", templateParams, "0sc30gaTHz2df-y48")
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => setStatus("error"));
  }

  return (
    <form
      onSubmit={sendEmail}
      className="bg-standard-blue shadow-xl rounded-2xl p-6 space-y-4 mb-20"
    >
      <h2 className="text-3xl font-display text-white mb-4">Kontakt os</h2>
      <p className="text-white font-thin">
        <strong>Skoleleder og underviser</strong> <br />Christian Djurhuus <br />Telefon +45 2096 7454 <br />Email: djurhuus@litteraturen.nu
      </p>
      <h3 className="text-white text-4xl font-display pt-8">Spørgsmål?</h3>
      <h4 className="text-white text-2xl font-sans font-extralight pl-10 pb-6">Send en besked her!</h4>

      <input
        name="name"
        type="text"
        placeholder="Navn..."
        value={formData.name}
        onChange={handleChange}
        className="w-full p-3 border rounded-3xl"
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-3 border rounded-3xl"
        required
      />

      <textarea
        name="message"
        placeholder="Din besked…"
        value={formData.message}
        onChange={handleChange}
        className="w-full p-3 border rounded-3xl h-32"
        required
      />

      <div className="flex justify-end">
        <CTAButton variant="blue">Send besked</CTAButton>
      </div>

      <p className="text-white font-thin py-10"><strong>Infomøde</strong><br />
      Du kan til hver en tid henvende dig til skolen, hvis du er nysgerrig på at høre mere og overvejer, om det er noget for dig. For infomøde skal du tage kontakt til skoleleder Christian Djurhuus, djurhuus@litteraturen.nu
      </p>

      {status === "success" && (
        <p className="flex justify-end text-light-blue pt-2 ">Din besked blev sendt ✔️</p>
      )}
      {status === "error" && (
        <p className="fle justify-end text-red-300 pt-2">Der opstod en fejl. Prøv igen.</p>
      )}
    </form>
  );
}
