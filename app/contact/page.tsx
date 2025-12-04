"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    // Simulate async submission (no backend configured in this lab)
    setTimeout(() => {
      setStatus("sent");
    }, 800);
  }

  return (
    <main className="py-5">
      <div className="container">
        <h1 className="mb-3">Contact Us</h1>

        <p>If you have questions or feedback, send us a message.</p>

        <form onSubmit={handleSubmit} className="mt-4" noValidate>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input className="form-control" name="name" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" name="email" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea className="form-control" name="message" rows={5} required />
          </div>

          <div>
            <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>

        {status === "sent" && (
          <div className="alert alert-success mt-4" role="alert">
            Thank you — your message was submitted (demo only).
          </div>
        )}
      </div>
    </main>
  );
}
