"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";

// Defined once at module level so it isn't re-created (and the animation
// restarted) on every keystroke.
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

type Field = "name" | "email" | "message";
type Errors = Partial<Record<Field, string>>;
type Status = "idle" | "sending" | "sent" | "error";

const LIMITS = { name: 100, message: 5000 } as const;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const EMPTY = { name: "", email: "", message: "", _gotcha: "" };

/** Mirrors the checks in /api/contact so people get instant feedback. */
function validate(data: typeof EMPTY): Errors {
  const errors: Errors = {};
  const name = data.name.trim();
  const email = data.email.trim();
  const message = data.message.trim();

  if (name.length < 2) errors.name = "Please enter your name.";
  else if (name.length > LIMITS.name) errors.name = `Name must be under ${LIMITS.name} characters.`;

  if (!email) errors.email = "Please enter your email.";
  else if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";

  if (message.length < 10) errors.message = "Please write a message of at least 10 characters.";
  else if (message.length > LIMITS.message)
    errors.message = `Message must be under ${LIMITS.message} characters.`;

  return errors;
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1 text-sm text-red-600">
      {message}
    </p>
  );
}

export default function ConnectWithUsPage() {
  const [formData, setFormData] = useState(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const next = { ...formData, [e.target.name]: e.target.value };
    setFormData(next);
    // Re-check live once the visitor has left a field at least once
    if (touched[e.target.name as Field]) setErrors(validate(next));
    if (status === "error") setStatus("idle");
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
    setErrors(validate(formData));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;

    const found = validate(formData);
    setErrors(found);
    setTouched({ name: true, email: true, message: true });
    if (Object.keys(found).length) {
      const first = (["name", "email", "message"] as Field[]).find((f) => found[f]);
      if (first) document.getElementById(`contact-${first}`)?.focus();
      return;
    }

    setStatus("sending");
    setServerMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json().catch(() => ({}));

      if (response.ok) {
        setStatus("sent");
        setFormData(EMPTY);
        setTouched({});
        setErrors({});
      } else {
        if (result.errors) setErrors(result.errors);
        setServerMessage(result.message ?? "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setServerMessage("Something went wrong. Please check your connection and try again.");
      setStatus("error");
    }
  };

  const showError = (f: Field) => (touched[f] ? errors[f] : undefined);
  const fieldClass = (f: Field) =>
    `w-full p-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
      showError(f)
        ? "border-red-500 focus:ring-red-400 bg-red-50/40"
        : "border-gray-300 focus:ring-[#592AC7]"
    }`;
  const a11y = (f: Field) => ({
    "aria-invalid": !!showError(f),
    "aria-describedby": showError(f) ? `contact-${f}-error` : undefined,
  });

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white pt-22 pb-16 px-6 md:px-12 lg:px-16">
        <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Left Content */}
          <motion.div
            className="w-full max-w-[1240px] text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h1
              className="text-[42px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-semibold text-[#592AC7] font-primary leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Connect With Us
            </motion.h1>

            <motion.p
              className="mt-6 text-[#000000] text-[18px] font-secondary max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            >
              Let’s team up and make things happen! Whether you&apos;re looking to
              scale, innovate, or create impact, we’re here to help you turn
              goals into results. Reach out, and let’s explore how we can grow
              together!
            </motion.p>
          </motion.div>

          {/* Right Side Image and Shapes */}
          <motion.div
            className="w-full max-w-md lg:max-w-lg xl:max-w-xl relative flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          >
            {/* Lottie Animation */}
            <div className="overflow-hidden w-full">
              <Player
                autoplay
                keepLastFrame
                loop={false}
                src="/images/keerthana.json"
                className="w-[300px] sm:w-[350px] md:w-[450px] lg:w-[500px] xl:w-[600px] h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#592AC7] py-24 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row gap-18">
          {/* Google Map */}
          <motion.div
            className="w-full md:w-[604px] h-[500px] lg:h-[470px] rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <iframe
              title="Google Map"
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d153657.29575596304!2d79.71871412674747!3d12.015441634909148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5367b9d4c5c56d%3A0x606d45d5c7ec5c42!2sYuvabe!5e1!3m2!1sen!2sin!4v1732948683259!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="relative w-full md:w-[60%] bg-white shadow-lg rounded-lg p-6 md:p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-[36px] font-primary font-semibold text-[#592AC7] mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-6">
              We&apos;d love to hear from you! Fill out the form below:
            </p>

            {status === "sent" ? (
              <motion.div
                role="status"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center gap-3 rounded-lg bg-[#F7F3FF] p-8 text-center"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#592AC7] text-2xl text-white">
                  ✓
                </span>
                <p className="font-primary text-xl font-semibold text-[#592AC7]">
                  Thank you! Your message has been sent.
                </p>
                <p className="text-gray-600">We&apos;ll get back to you soon.</p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-[#592AC7] underline underline-offset-2"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                {/* Honeypot: hidden from people; bots tend to fill it */}
                <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                  <label>
                    Leave this field empty
                    <input
                      type="text"
                      name="_gotcha"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData._gotcha}
                      onChange={handleChange}
                    />
                  </label>
                </div>

                <div>
                  <label htmlFor="contact-name" className="sr-only">
                    Name
                  </label>
                  <motion.input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Name"
                    autoComplete="name"
                    maxLength={LIMITS.name}
                    className={fieldClass("name")}
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    {...a11y("name")}
                    whileFocus={{ scale: 1.02 }}
                  />
                  <FieldError id="contact-name-error" message={showError("name")} />
                </div>
                <div>
                  <label htmlFor="contact-email" className="sr-only">
                    Email
                  </label>
                  <motion.input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="Email id"
                    autoComplete="email"
                    className={fieldClass("email")}
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    {...a11y("email")}
                    whileFocus={{ scale: 1.02 }}
                  />
                  <FieldError id="contact-email-error" message={showError("email")} />
                </div>
                <div>
                  <label htmlFor="contact-message" className="sr-only">
                    Message
                  </label>
                  <motion.textarea
                    id="contact-message"
                    name="message"
                    placeholder="Your message"
                    maxLength={LIMITS.message}
                    className={`${fieldClass("message")} h-24 resize-none`}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    {...a11y("message")}
                    whileFocus={{ scale: 1.02 }}
                  ></motion.textarea>
                  <FieldError id="contact-message-error" message={showError("message")} />
                </div>

                {status === "error" && serverMessage && (
                  <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                    {serverMessage}
                  </p>
                )}

                <motion.div className="flex justify-end">
                  <motion.button
                    type="submit"
                    disabled={status === "sending"}
                    aria-busy={status === "sending"}
                    className="flex w-[142px] h-[56px] items-center justify-center gap-2 bg-[#ffcc00] text-black font-semibold rounded-lg shadow-md hover:bg-[#e6b800] transition duration-300 disabled:cursor-not-allowed disabled:opacity-70"
                    whileHover={status === "sending" ? undefined : { scale: 1.05 }}
                  >
                    {status === "sending" ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/30 border-t-black" />
                        Sending…
                      </>
                    ) : (
                      "Send"
                    )}
                  </motion.button>
                </motion.div>
              </form>
            )}
          </motion.div>
        </div>
        <p className="mt-8 md:mt-12 lg:mt-24 text-white font-secondary text-base sm:text-lg  m-auto lg:max-w-8xl  px-4 md:px-8 lg:px-12 text-center">
          Yuvabe Education has CSR1 Certification to accept CSR funds from
          corporates.
          <br />
          <br />
          For any queries, please reach out to us via email :{" "}
          <Link href="mailto:donation@yuvabe.com" className="underline">
            donation@yuvabe.com
          </Link>
        </p>
      </section>
    </>
  );
}
