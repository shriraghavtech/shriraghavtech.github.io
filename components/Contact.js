// components/Contact.js
"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    });

    alert("Message sent!");
  };

  return (
    <section id="contact" className="py-20 text-center">
      <h2 className="text-3xl mb-6">Contact Us</h2>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        <input
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full p-3 text-black"
          required
        />
        <input
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full p-3 text-black"
          required
        />
        <textarea
          placeholder="Message"
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full p-3 text-black"
          required
        />

        <button className="bg-primary px-6 py-3 rounded-full">
          Send
        </button>
      </form>
    </section>
  );
}
