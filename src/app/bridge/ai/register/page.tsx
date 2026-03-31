"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Helper components for the Dark AI form UI

function Section({
  title,
  children,
  icon,
}: {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="space-y-6"
    >
      <div className="flex items-center gap-3">
        {icon}
        <h3 className="text-xl md:text-2xl font-bold font-primary text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          {title}
        </h3>
      </div>
      <div className="flex flex-col gap-6">{children}</div>
    </motion.div>
  );
}

function Input({
  label,
  helper,
  type = "text",
  required = false,
  value,
  onChange,
}: any) {
  return (
    <motion.div className="flex flex-col gap-1.5 text-slate-300 focus-within:text-cyan-400 transition-colors">
      <label className="text-base font-semibold">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {helper && <p className="text-sm text-slate-500">{helper}</p>}
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-xl border border-slate-700/50 px-4 py-3 bg-slate-900/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500/40 transition-all shadow-inner shadow-black/20"
      />
    </motion.div>
  );
}

function Select({ label, options, value, onChange, required = false }: any) {
  return (
    <div className="flex flex-col gap-1.5 text-slate-300 focus-within:text-cyan-400 transition-colors">
      <label className="text-base font-semibold">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <select
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-xl border border-slate-700/50 px-4 py-3 appearance-none bg-slate-900/50 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500/40 transition-all shadow-inner shadow-black/20"
        >
          <option value="" disabled className="text-slate-500 bg-slate-800">
            Select an option
          </option>
          {options.map((opt: string) => (
            <option key={opt} value={opt} className="bg-slate-800">
              {opt}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Textarea({ label, helper, required = false, value, onChange }: any) {
  return (
    <div className="flex flex-col gap-1.5 text-slate-300 focus-within:text-cyan-400 transition-colors">
      <label className="text-base font-semibold">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {helper && <p className="text-sm text-slate-500">{helper}</p>}
      <textarea
        rows={4}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-xl border border-slate-700/50 px-4 py-3 bg-slate-900/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500/40 transition-all shadow-inner shadow-black/20 resize-y"
      />
    </div>
  );
}

function FileInput({ label, required = false, value, onChange }: any) {
  return (
    <div className="flex flex-col gap-1.5 text-slate-300 focus-within:text-cyan-400 transition-colors">
      <label className="text-base font-semibold">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative group">
        <input
          type="file"
          required={required && !value}
          onChange={(e) => {
            if (e.target.files?.[0]) {
              onChange(e.target.files[0]);
            }
          }}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
        />
        <div
          className={`rounded-xl border-2 border-dashed px-4 py-8 text-center transition-all flex flex-col items-center justify-center gap-2 ${
            value
              ? "border-green-500/50 bg-green-900/10"
              : "border-slate-700 group-hover:border-cyan-500/50 bg-slate-900/30"
          }`}
        >
          {value ? (
            <>
              <svg
                className="w-8 h-8 text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="text-sm font-medium text-green-400">
                {value.name} uploaded successfully!
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Click to replace file
              </p>
            </>
          ) : (
            <>
              <svg
                className="w-8 h-8 text-slate-500 group-hover:text-cyan-400 transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <p className="text-sm text-slate-400 group-hover:text-cyan-300">
                Click to upload your resume
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// Background decor for the AI Tech vibe
function BackgroundGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute top-[0%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#002B8C]/40 blur-[140px]" />
      <div className="absolute top-[30%] right-[-10%] w-[40%] h-[60%] rounded-full bg-cyan-900/20 blur-[140px]" />
      <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[50%] rounded-full bg-[#002B8C]/30 blur-[120px]" />
      <svg
        className="absolute w-full h-full opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="white"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

export default function Page() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    isStudent: "",
    studentYear: "",
    collegeName: "",
    degree: "",
    village: "",
    isEmployed: "",
    organizationAndRole: "",
    whyJoin: "",
    pythonLevel: "",
    howDidYouKnow: "",
    anythingElse: "",
  });
  const [resume, setResume] = useState<File | null>(null);

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (fields: Partial<typeof data>) =>
    setData((prev) => ({ ...prev, ...fields }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resume) {
      alert("Please upload your resume.");
      return;
    }

    setSubmitting(true);

    try {
      // 1. Convert file to Base64
      const reader = new FileReader();
      reader.readAsDataURL(resume);
      reader.onload = async () => {
        const base64String = reader.result?.toString().split(",")[1];

        const payload = {
          ...data,
          resumeData: base64String,
          resumeName: resume.name,
          resumeMimeType: resume.type,
        };

        // 2. Send to our Next.js API route
        const res = await fetch("/api/ai-register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!res.ok) {
          const errorData = await res.json().catch(() => ({}));
          throw new Error(
            errorData.error || errorData.details || "Submission failed",
          );
        }

        setSubmitting(false);
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      };

      reader.onerror = () => {
        throw new Error("File reading failed");
      };
    } catch (err: any) {
      console.error("Error submitting form:", err);
      alert(`There was an issue submitting your application: ${err.message}`);
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="relative bg-[#000B24] py-12 min-h-screen text-slate-200 overflow-hidden ">
        <BackgroundGlow />

        <div className="relative z-10 max-w-7xl mx-auto p-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="  p-8 md:p-12 font-secondary"
          >
            {/* Header section matching the reference structure but Dark/AI themed */}
            <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
              <div className="space-y-3 flex-1">
                <h1 className="text-3xl md:text-5xl leading-tight font-extrabold font-primary text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-[#697389] to-white flex items-center gap-3">
                  <svg
                    className="w-10 h-10 text-cyan-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v4a2 2 0 0 0 2 2h4M12 22v-4a2 2 0 0 0-2-2H6M2 12h4a2 2 0 0 0 2-2V6M22 12h-4a2 2 0 0 0-2 2v4" />
                    <circle
                      cx="12"
                      cy="12"
                      r="4"
                      className="text-[#002B8C] fill-[#002B8C]/40"
                    />
                  </svg>
                  AI Product Builder Program
                </h1>
                <p className="text-lg text-slate-400">
                  Unlock the skills tech companies demand. Work on real-world
                  projects, collaborate with industry mentors and boost your
                  portfolio. Fill out the application form !!
                </p>
              </div>

              {/* Animated AI SVG */}
              <motion.div
                className="w-48 h-48 md:w-70 md:h-64 flex-shrink-0"
                animate={{ y: [0, -15, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
              >
                <img
                  src="/images/svgs/ai.svg"
                  alt="AI Concept"
                  className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(0,43,140,0.6)]"
                />
              </motion.div>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl border border-cyan-500/30 bg-cyan-900/20 p-10 text-center backdrop-blur-md shadow-[0_0_30px_rgba(6,182,212,0.15)]"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-cyan-500/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-cyan-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-cyan-300">
                  Application submitted successfully
                </h2>
                <p className="mt-4 text-slate-300">
                  Thank you for applying. Our team will review your submission
                  and get back to you with the next steps.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setData({
                      name: "",
                      email: "",
                      phone: "",
                      age: "",
                      isStudent: "",
                      studentYear: "",
                      collegeName: "",
                      degree: "",
                      village: "",
                      isEmployed: "",
                      organizationAndRole: "",
                      whyJoin: "",
                      pythonLevel: "",
                      howDidYouKnow: "",
                      anythingElse: "",
                    });
                    setResume(null);
                  }}
                  className="mt-8 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3.5 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all"
                >
                  Submit another application
                </button>
              </motion.div>
            ) : (
              <form onSubmit={submit} className="space-y-14">
                <Section
                  title="Basic Details"
                  icon={
                    <svg
                      className="w-6 h-6 text-purple-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  }
                >
                  <Input
                    label="Name"
                    required
                    value={data.name}
                    onChange={(v: string) => update({ name: v })}
                  />
                  <Input
                    label="Email"
                    type="email"
                    required
                    value={data.email}
                    onChange={(v: string) => update({ email: v })}
                  />
                  <Input
                    label="Contact Number"
                    type="tel"
                    required
                    value={data.phone}
                    onChange={(v: string) => update({ phone: v })}
                  />
                  <Input
                    label="Age"
                    type="number"
                    required
                    value={data.age}
                    onChange={(v: string) => update({ age: v })}
                  />
                  <Input
                    label="Residential Village Name"
                    helper="(eg: Pondicherry)"
                    required
                    value={data.village}
                    onChange={(v: string) => update({ village: v })}
                  />
                </Section>

                <Section
                  title="Education & Employment"
                  icon={
                    <svg
                      className="w-6 h-6 text-cyan-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  }
                >
                  <Select
                    label="Are you a student?"
                    required
                    options={["Yes", "No"]}
                    value={data.isStudent}
                    onChange={(v: string) => update({ isStudent: v })}
                  />

                  <AnimatePresence>
                    {data.isStudent === "Yes" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-6 overflow-hidden pt-2"
                      >
                        <Input
                          label="Current Year"
                          helper="( Eg: B.E / 3rd year )"
                          value={data.studentYear}
                          onChange={(v: string) => update({ studentYear: v })}
                        />
                        <Input
                          label="College Name"
                          value={data.collegeName}
                          onChange={(v: string) => update({ collegeName: v })}
                        />
                        <Input
                          label="Degree / Department"
                          helper="(eg: B.Tech / IT)"
                          value={data.degree}
                          onChange={(v: string) => update({ degree: v })}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="pt-2">
                    <Select
                      label="Are you Employed?"
                      required
                      options={["Yes", "No"]}
                      value={data.isEmployed}
                      onChange={(v: string) => update({ isEmployed: v })}
                    />
                  </div>

                  <AnimatePresence>
                    {data.isEmployed === "Yes" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-6 overflow-hidden pt-2"
                      >
                        <Input
                          label="Organization & Role"
                          helper="( Ex : Full stack developer at Yuvabe )"
                          value={data.organizationAndRole}
                          onChange={(v: string) =>
                            update({ organizationAndRole: v })
                          }
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Section>

                <Section
                  title="Program Specifics"
                  icon={
                    <svg
                      className="w-6 h-6 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  }
                >
                  <Textarea
                    label="Why do you want to join the program?"
                    required
                    value={data.whyJoin}
                    onChange={(v: string) => update({ whyJoin: v })}
                  />
                  <Select
                    label="Your Python proficiency Level?"
                    required
                    options={[
                      "Beginner (Just started)",
                      "Intermediate (Can write basic scripts)",
                      "Advanced (Comfortable with frameworks/libraries)",
                    ]}
                    value={data.pythonLevel}
                    onChange={(v: string) => update({ pythonLevel: v })}
                  />
                  <Select
                    label="How do you know about this course?"
                    required
                    options={[
                      "Instagram",
                      "LinkedIn",
                      "Friend / Colleague",
                      "Yuvabe community",
                      "Other",
                    ]}
                    value={data.howDidYouKnow}
                    onChange={(v: string) => update({ howDidYouKnow: v })}
                  />
                  <Textarea
                    label="Anything else you’d like us to know? (optional)"
                    value={data.anythingElse}
                    onChange={(v: string) => update({ anythingElse: v })}
                  />

                  <div className="pt-2">
                    <FileInput
                      label="Resume Upload"
                      required
                      value={resume}
                      onChange={(file: File) => setResume(file)}
                    />
                  </div>
                </Section>

                <div className="flex justify-start pt-8">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={submitting}
                    className={`relative overflow-hidden rounded-xl px-12 py-4 text-base tracking-wide font-bold transition-all ${
                      submitting
                        ? "bg-slate-700 cursor-not-allowed text-slate-400"
                        : "bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                    }`}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {submitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Submitting Mission...
                        </>
                      ) : (
                        <>
                          Submit Application
                          <svg
                            className="w-5 h-5 ml-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </>
                      )}
                    </span>
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
}
