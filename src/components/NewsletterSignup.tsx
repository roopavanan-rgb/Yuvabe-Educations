"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
type Status = "idle" | "sending" | "done" | "error";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [gotcha, setGotcha] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;

    if (!EMAIL_RE.test(email.trim())) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, _gotcha: gotcha }),
      });
      const result = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus("done");
        setEmail("");
        setMessage(
          result.alreadySubscribed
            ? "You're already on our list. Thanks for staying with us!"
            : "Thank you for subscribing! You'll hear from us soon."
        );
      } else {
        setStatus("error");
        setMessage(result.message ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please check your connection and try again.");
    }
  };

  return (
    <div className="mt-8 w-full max-w-xl">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="relative flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
      >
        {/* Honeypot: hidden from people; bots tend to fill it */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <label>
            Leave this field empty
            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              value={gotcha}
              onChange={(e) => setGotcha(e.target.value)}
            />
          </label>
        </div>

        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error" || status === "done") setStatus("idle");
          }}
          aria-invalid={status === "error"}
          aria-describedby="newsletter-status"
          className={`flex-1 rounded-lg border bg-white px-4 py-3 text-black focus:outline-none focus:ring-2 ${
            status === "error" ? "border-red-400 focus:ring-red-300" : "border-gray-300 focus:ring-[#FFCA2D]"
          }`}
        />
        <button
          type="submit"
          disabled={status === "sending"}
          aria-busy={status === "sending"}
          className="flex min-w-[120px] items-center justify-center gap-2 rounded-lg bg-[#FFCA2D] px-6 py-3 font-medium text-black transition hover:bg-yellow-500 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "sending" ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/30 border-t-black" />
              Sending…
            </>
          ) : (
            "Subscribe"
          )}
        </button>
      </form>

      <div id="newsletter-status" aria-live="polite" className="mt-3 min-h-6">
        <AnimatePresence mode="wait">
          {message && (
            <motion.p
              key={message}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`text-sm ${status === "error" ? "text-red-200" : "text-white"}`}
            >
              {status === "done" && "✓ "}
              {message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
