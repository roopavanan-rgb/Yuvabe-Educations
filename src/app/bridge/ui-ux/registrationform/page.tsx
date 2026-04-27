"use client";

import { useState, useRef, type ChangeEvent, type FormEvent } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Link from "next/link";
import { Upload, CheckCircle2, AlertCircle, X } from "lucide-react";

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  age: string;
  location: string;
  education: string;
  isStudent: "yes" | "no" | "";
  currentYear: string;
  college: string;
  isEmployed: "yes" | "no" | "";
  organization: string;
  whyJoin: string;
  source: string;
  additionalNotes: string;
}

const initial: FormState = {
  fullName: "",
  email: "",
  phone: "",
  age: "",
  location: "",
  education: "",
  isStudent: "",
  currentYear: "",
  college: "",
  isEmployed: "",
  organization: "",
  whyJoin: "",
  source: "",
  additionalNotes: "",
};

const inputClass =
  "w-full rounded-xl border border-[rgba(28,27,46,0.15)] bg-white px-4 py-3 font-secondary text-sm text-[#1C1B2E] outline-none transition-all placeholder:text-[#1C1B2E]/30 focus:border-[#F26622] focus:ring-2 focus:ring-[#F26622]/10";

const labelClass = "block font-secondary text-xs font-semibold text-[#1C1B2E]/60 uppercase tracking-wide mb-1.5";

const errorClass = "mt-1 font-secondary text-xs text-red-500";

const sectionVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function RadioToggle({
  value,
  onChange,
  error,
}: {
  value: "yes" | "no" | "";
  onChange: (v: "yes" | "no") => void;
  error?: boolean;
}) {
  return (
    <div className={`flex gap-3 ${error ? "ring-1 ring-red-400 rounded-xl p-0.5" : ""}`}>
      {(["yes", "no"] as const).map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={`flex-1 rounded-xl border py-3 font-secondary text-sm font-medium capitalize transition-all cursor-pointer ${
            value === opt
              ? "border-[#F26622] bg-[rgba(242,102,34,0.07)] text-[#F26622]"
              : "border-[rgba(28,27,46,0.15)] text-[#1C1B2E]/50 hover:border-[rgba(28,27,46,0.3)]"
          }`}
        >
          {opt === "yes" ? "Yes" : "No"}
        </button>
      ))}
    </div>
  );
}

function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#F26622] text-white font-primary font-bold text-xs shrink-0">
        {number}
      </span>
      <h3 className="font-primary font-semibold text-[#1C1B2E] text-base">{title}</h3>
    </div>
  );
}

export default function UiUxRegistrationForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [resume, setResume] = useState<File | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState | "resume", string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const set = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setResume(file);
    if (errors.resume) setErrors((prev) => ({ ...prev, resume: "" }));
  };

  const validate = () => {
    const e: typeof errors = {};
    if (!form.fullName.trim()) e.fullName = "Name is required.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email is required.";
    if (!form.phone.trim()) e.phone = "Contact number is required.";
    if (!form.age.trim()) e.age = "Age is required.";
    if (!form.location.trim()) e.location = "Location is required.";
    if (!form.education.trim()) e.education = "Highest education is required.";
    if (!form.isStudent) e.isStudent = "Please select an option.";
    if (form.isStudent === "yes" && !form.currentYear.trim()) e.currentYear = "Current year is required.";
    if (form.isStudent === "yes" && !form.college.trim()) e.college = "College / university name is required.";
    if (!form.isEmployed) e.isEmployed = "Please select an option.";
    if (form.isEmployed === "yes" && !form.organization.trim()) e.organization = "Organization and role is required.";
    if (!form.whyJoin.trim()) e.whyJoin = "This field is required.";
    if (!form.source.trim()) e.source = "Please tell us how you heard about this.";
    if (!resume) e.resume = "Resume is required.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate() || submitting) return;

    setSubmitting(true);
    setSubmitError("");

    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, v));
      if (resume) fd.append("resume", resume);

      const res = await fetch("/api/uiux-register", { method: "POST", body: fd });

      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Please try again or email us at bridge@yuvabe.com");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#F9F5F4] flex items-center justify-center px-5 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white rounded-3xl shadow-sm border border-[rgba(28,27,46,0.08)] p-10 md:p-14 max-w-lg w-full text-center"
        >
          <CheckCircle2 className="w-14 h-14 text-[#F26622] mx-auto mb-5" strokeWidth={1.5} />
          <h2 className="font-primary font-bold text-2xl md:text-3xl text-[#1C1B2E] mb-3">
            Application Received!
          </h2>
          <p className="font-secondary text-[#1C1B2E]/60 text-sm md:text-base leading-relaxed mb-8">
            Thank you for applying to the UI/UX Design Launchpad. Our team will review your application and reach out with the next steps within a few days.
          </p>
          <Link
            href="/bridge/ui-ux"
            className="inline-block bg-[#F26622] text-white font-primary font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-[#d9551a] transition-colors"
          >
            Back to Programme Page
          </Link>
        </motion.div>
      </main>
    );
  }

  return (
    <main>
      {/* Mini hero */}
      <section className="bg-[#1A2225] py-12 md:py-16">
        <div className="max-w-[1240px] mx-auto px-5 md:px-8 xl:px-0">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 font-secondary text-[11px] tracking-[0.18em] text-white/40 uppercase mb-6">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/bridge/ui-ux" className="hover:text-white/70 transition-colors">UI/UX Design Launchpad</Link>
            <span>/</span>
            <span className="text-[#F26622]">Apply</span>
          </div>
          <motion.h1
            className="font-primary font-bold text-3xl md:text-4xl xl:text-5xl text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Apply Now
          </motion.h1>
          <motion.p
            className="font-secondary text-white/50 text-sm md:text-base mt-2"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            UI/UX Design Launchpad &mdash; Bridge Program 2026 &middot; Auroville
          </motion.p>
        </div>
      </section>

      {/* Form */}
      <section className="bg-[#F9F5F4] py-12 md:py-20">
        <div className="max-w-[760px] mx-auto px-5 md:px-8 xl:px-0">
          <form onSubmit={handleSubmit} noValidate>
            <div className="flex flex-col gap-y-6">

              {/* ── Section 1: Personal Info ── */}
              <motion.div
                variants={sectionVariant}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="bg-white rounded-2xl border border-[rgba(28,27,46,0.07)] shadow-sm p-6 md:p-8"
              >
                <SectionHeader number="01" title="Personal Information" />
                <div className="flex flex-col gap-y-5">
                  {/* Name */}
                  <div>
                    <label className={labelClass}>
                      Full Name <span className="text-[#F26622]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Priya Sharma"
                      value={form.fullName}
                      onChange={(e) => set("fullName", e.target.value)}
                      className={`${inputClass} ${errors.fullName ? "border-red-400" : ""}`}
                    />
                    {errors.fullName && <p className={errorClass}>{errors.fullName}</p>}
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>
                        Email Address <span className="text-[#F26622]">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) => set("email", e.target.value)}
                        className={`${inputClass} ${errors.email ? "border-red-400" : ""}`}
                      />
                      {errors.email && <p className={errorClass}>{errors.email}</p>}
                    </div>
                    <div>
                      <label className={labelClass}>
                        Contact Number <span className="text-[#F26622]">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={(e) => set("phone", e.target.value)}
                        className={`${inputClass} ${errors.phone ? "border-red-400" : ""}`}
                      />
                      {errors.phone && <p className={errorClass}>{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Age + Location */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>
                        Age <span className="text-[#F26622]">*</span>
                      </label>
                      <input
                        type="number"
                        placeholder="e.g. 22"
                        min={15}
                        max={60}
                        value={form.age}
                        onChange={(e) => set("age", e.target.value)}
                        className={`${inputClass} ${errors.age ? "border-red-400" : ""}`}
                      />
                      {errors.age && <p className={errorClass}>{errors.age}</p>}
                    </div>
                    <div>
                      <label className={labelClass}>
                        Location <span className="text-[#F26622]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Pondicherry"
                        value={form.location}
                        onChange={(e) => set("location", e.target.value)}
                        className={`${inputClass} ${errors.location ? "border-red-400" : ""}`}
                      />
                      {errors.location && <p className={errorClass}>{errors.location}</p>}
                    </div>
                  </div>

                  {/* Highest Education */}
                  <div>
                    <label className={labelClass}>
                      Highest Education <span className="text-[#F26622]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. B.Tech, MBA, B.Sc"
                      value={form.education}
                      onChange={(e) => set("education", e.target.value)}
                      className={`${inputClass} ${errors.education ? "border-red-400" : ""}`}
                    />
                    {errors.education && <p className={errorClass}>{errors.education}</p>}
                  </div>
                </div>
              </motion.div>

              {/* ── Section 2: Background ── */}
              <motion.div
                variants={sectionVariant}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 }}
                className="bg-white rounded-2xl border border-[rgba(28,27,46,0.07)] shadow-sm p-6 md:p-8"
              >
                <SectionHeader number="02" title="Your Background" />
                <div className="flex flex-col gap-y-6">

                  {/* Student */}
                  <div>
                    <label className={labelClass}>
                      Are you currently a student? <span className="text-[#F26622]">*</span>
                    </label>
                    <RadioToggle
                      value={form.isStudent}
                      onChange={(v) => set("isStudent", v)}
                      error={!!errors.isStudent}
                    />
                    {errors.isStudent && <p className={errorClass}>{errors.isStudent}</p>}
                  </div>

                  <AnimatePresence initial={false}>
                    {form.isStudent === "yes" && (
                      <motion.div
                        key="student-fields"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-1">
                          <div>
                            <label className={labelClass}>
                              Current Year <span className="text-[#F26622]">*</span>
                            </label>
                            <input
                              type="text"
                              placeholder="e.g. B.E / 3rd Year"
                              value={form.currentYear}
                              onChange={(e) => set("currentYear", e.target.value)}
                              className={`${inputClass} ${errors.currentYear ? "border-red-400" : ""}`}
                            />
                            {errors.currentYear && <p className={errorClass}>{errors.currentYear}</p>}
                          </div>
                          <div>
                            <label className={labelClass}>
                              College / University <span className="text-[#F26622]">*</span>
                            </label>
                            <input
                              type="text"
                              placeholder="e.g. Anna University"
                              value={form.college}
                              onChange={(e) => set("college", e.target.value)}
                              className={`${inputClass} ${errors.college ? "border-red-400" : ""}`}
                            />
                            {errors.college && <p className={errorClass}>{errors.college}</p>}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Employed */}
                  <div>
                    <label className={labelClass}>
                      Are you currently employed? <span className="text-[#F26622]">*</span>
                    </label>
                    <RadioToggle
                      value={form.isEmployed}
                      onChange={(v) => set("isEmployed", v)}
                      error={!!errors.isEmployed}
                    />
                    {errors.isEmployed && <p className={errorClass}>{errors.isEmployed}</p>}
                  </div>

                  <AnimatePresence initial={false}>
                    {form.isEmployed === "yes" && (
                      <motion.div
                        key="employed-fields"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-1">
                          <label className={labelClass}>
                            Organization &amp; Role <span className="text-[#F26622]">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. TCS — Frontend Developer"
                            value={form.organization}
                            onChange={(e) => set("organization", e.target.value)}
                            className={`${inputClass} ${errors.organization ? "border-red-400" : ""}`}
                          />
                          {errors.organization && <p className={errorClass}>{errors.organization}</p>}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* ── Section 3: Application ── */}
              <motion.div
                variants={sectionVariant}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.16 }}
                className="bg-white rounded-2xl border border-[rgba(28,27,46,0.07)] shadow-sm p-6 md:p-8"
              >
                <SectionHeader number="03" title="Your Application" />
                <div className="flex flex-col gap-y-5">

                  {/* Why join */}
                  <div>
                    <label className={labelClass}>
                      Why do you want to join this programme? <span className="text-[#F26622]">*</span>
                    </label>
                    <textarea
                      placeholder="Tell us what draws you to UI/UX design and what you hope to build or achieve."
                      value={form.whyJoin}
                      onChange={(e) => set("whyJoin", e.target.value)}
                      rows={4}
                      className={`${inputClass} resize-none ${errors.whyJoin ? "border-red-400" : ""}`}
                    />
                    {errors.whyJoin && <p className={errorClass}>{errors.whyJoin}</p>}
                  </div>

                  {/* Source */}
                  <div>
                    <label className={labelClass}>
                      How did you hear about this? <span className="text-[#F26622]">*</span>
                    </label>
                    <select
                      value={form.source}
                      onChange={(e) => set("source", e.target.value)}
                      className={`${inputClass} cursor-pointer ${errors.source ? "border-red-400" : ""} ${
                        form.source === "" ? "text-[#1C1B2E]/30" : "text-[#1C1B2E]"
                      }`}
                    >
                      <option value="" disabled>Select an option</option>
                      <option value="Instagram / Social Media">Instagram / Social Media</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Friend / Word of Mouth">Friend / Word of Mouth</option>
                      <option value="Yuvabe Website">Yuvabe Website</option>
                      <option value="College Campus / Notice Board">College Campus / Notice Board</option>
                      <option value="WhatsApp Group">WhatsApp Group</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.source && <p className={errorClass}>{errors.source}</p>}
                  </div>

                  {/* Additional notes */}
                  <div>
                    <label className={labelClass}>
                      Anything else you&apos;d like us to know?{" "}
                      <span className="text-[#1C1B2E]/35 normal-case tracking-normal text-[10px]">(optional)</span>
                    </label>
                    <textarea
                      placeholder="Any questions, context, or things we should know about you."
                      value={form.additionalNotes}
                      onChange={(e) => set("additionalNotes", e.target.value)}
                      rows={3}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* Resume upload */}
                  <div>
                    <label className={labelClass}>
                      Upload Your Resume <span className="text-[#F26622]">*</span>
                    </label>
                    <label
                      className={`flex flex-col items-center justify-center w-full rounded-xl border-2 border-dashed cursor-pointer transition-all py-8 px-4 ${
                        errors.resume
                          ? "border-red-400 bg-red-50"
                          : resume
                          ? "border-[#F26622]/50 bg-[rgba(242,102,34,0.04)]"
                          : "border-[rgba(28,27,46,0.18)] bg-white hover:border-[#F26622]/40 hover:bg-[rgba(242,102,34,0.02)]"
                      }`}
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        onChange={handleFile}
                      />
                      {resume ? (
                        <div className="flex items-center gap-3 text-center">
                          <CheckCircle2 className="w-5 h-5 text-[#F26622] shrink-0" />
                          <span className="font-secondary text-sm text-[#1C1B2E] font-medium">
                            {resume.name}
                          </span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              setResume(null);
                              if (fileInputRef.current) fileInputRef.current.value = "";
                            }}
                            className="text-[#1C1B2E]/40 hover:text-red-500 transition-colors cursor-pointer"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <>
                          <Upload className="w-6 h-6 text-[#1C1B2E]/30 mb-2" strokeWidth={1.5} />
                          <span className="font-secondary text-sm text-[#1C1B2E]/50">
                            Drop your resume here or{" "}
                            <span className="text-[#F26622] underline underline-offset-2">browse</span>
                          </span>
                          <span className="font-secondary text-xs text-[#1C1B2E]/35 mt-1">
                            PDF, DOC, or DOCX &middot; Max 5 MB
                          </span>
                        </>
                      )}
                    </label>
                    {errors.resume && <p className={errorClass}>{errors.resume}</p>}
                  </div>
                </div>
              </motion.div>

              {/* Error banner */}
              <AnimatePresence>
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-5 py-4"
                  >
                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <p className="font-secondary text-sm text-red-600">{submitError}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit */}
              <div className="flex flex-col items-center gap-y-3 pb-4">
                <motion.button
                  type="submit"
                  disabled={submitting}
                  whileHover={{ scale: submitting ? 1 : 1.03 }}
                  whileTap={{ scale: submitting ? 1 : 0.97 }}
                  transition={{ type: "spring", stiffness: 340, damping: 22 }}
                  className="bg-[#F26622] text-white font-primary font-semibold text-base px-12 py-4 rounded-full disabled:opacity-60 disabled:cursor-not-allowed hover:bg-[#d9551a] transition-colors cursor-pointer"
                >
                  {submitting ? "Submitting…" : "Submit Application →"}
                </motion.button>
                <p className="font-secondary text-xs text-[#1C1B2E]/35 text-center">
                  By submitting you agree to be contacted by the Yuvabe team regarding this programme.
                </p>
              </div>

            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
