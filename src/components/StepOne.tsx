"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FormData } from "@/types/form";

export default function StepOne({
  data,
  update,
  next, // now acts as SUBMIT
}: {
  data: FormData;
  update: (d: Partial<FormData>) => void;
  next: () => void;
}) {
  const toggleArrayValue = (key: "tools", value: string) => {
    const current = data[key];
    update({
      [key]: current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value],
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!data.declaration) return;
        next();
      }}
      className="space-y-12"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-2"
      >
        <h2 className="text-2xl md:text-4xl font-semibold text-[#f95a35] font-primary">
          Participant Information
        </h2>
        <p className="text-gray-600 font-secondary">
          Please share the details below to help us review your application.
        </p>
      </motion.div>

      {/* SECTION 1 */}
      <Section title="Basic Details">
        <Input
          label="Full Name"
          required
          onChange={(v) => update({ fullName: v })}
        />

        {/* <Input
          label="Email Address"
          type="email"
          required
          helper="We’ll send your confirmation here"
          onChange={(v) => update({ email: v })}
        /> */}

        <Input
          label="Phone Number"
          required
          onChange={(v) => update({ phone: v })}
        />

        <Input
          label="LinkedIn Profile URL"
          helper="This will be used to verify your professional background"
          required
          onChange={(v) => update({ linkedin: v })}
        />
      </Section>

      {/* SECTION 2 */}
      <Section title="Work & Tools">
        <Textarea
          label="Portfolio / Work Link"
          required
          helper="Share a link to your UX or design work (view access enabled)"
          onChange={(v) => update({ portfolio: v })}
        />

        <CheckboxGroup
        
          label="Tools you are comfortable with"
          options={[
            "Figma",
            "Miro",
            "Adobe XD",
            "PowerPoint / Canva",
            "Other design tools",
          ]}
          values={data.tools}
          
          onToggle={(v) => toggleArrayValue("tools", v)}
          
        />
      </Section>

      {/* SECTION 3 */}
      <Section title="Intent & Motivation">
        <Textarea
          label="What are you hoping to learn, build, or gain from this 5-day journey?"
          required
          onChange={(v) => update({ goals: v })}
        />

        <AnimatedSelect
          label="What do you find most challenging today in your design career?"
          value={data.challenge}
          
          options={[
            "Framing the right problem",
            "Research",
            "Validation",
            "Storytelling",
            "Pitching",
            "Other",
          ]}
          onChange={(v) => update({ challenge: v })}
        />

        <AnimatedSelect
          label="How did you hear about this workshop?"
          value={data.source}
          options={[
            "Instagram",
            "LinkedIn",
            "Friend / Colleague",
            "Yuvabe community",
            "Other",
          ]}
          onChange={(v) => update({ source: v })}
        />

        <Textarea
          label="Anything else you’d like the facilitators to know? (optional)"
          onChange={(v) => update({ notes: v })}
        />
      </Section>

      {/* Declaration */}
      <motion.label
        whileTap={{ scale: 0.98 }}
        className="flex items-start gap-3 p-2"
      >
        <input
          type="checkbox"
          required
          checked={data.declaration}
          onChange={(e) => update({ declaration: e.target.checked })}
          className="mt-1 accent-[#592AC7]"
        />
        <span className="text-sm text-gray-700">
          I confirm that the information shared above is accurate, and I
          understand that submission of this form does not guarantee selection.
          Selected participants will receive a confirmation email with payment
          instructions.
        </span>
      </motion.label>

      {/* Action */}
      <div className="flex justify-start pb-12">
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          disabled={!data.declaration}
          className={`rounded-xl px-6 py-3 font-medium transition
            ${
              data.declaration
                ? "bg-[#592AC7] text-white hover:shadow-md"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
        >
          Submit Application →
        </motion.button>
      </div>
    </form>
  );
}

/* ===================== */
/* UI COMPONENTS        */
/* ===================== */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="space-y-6"
    >
      <h3 className="text-2xl font-semibold text-[#5829c7]">{title}</h3>
      <div className="flex flex-col gap-5">{children}</div>
    </motion.div>
  );
}

function Input({
  label,
  helper,
  type = "text",
  required = false,
  onChange,
}: {
  label: string;
  helper?: string;
  type?: string;
  required?: boolean;
  onChange: (v: string) => void;
}) {
  return (
    <motion.div
      animate={{ scale: 1 }}
      onFocus={() => {}}
      whileFocus={{ scale: 1.01 }}
      transition={{ duration: 0.15 }}
      className="flex flex-col gap-1"
    >
      <label className="text-lg font-medium text-gray-800">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      {helper && <p className="text-md text-gray-500">{helper}</p>}
      <input
        type={type}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-xl border border-violet-300 px-4 py-3
                   focus:outline-none focus:ring-2 focus:ring-[#592AC7]/30"
      />
    </motion.div>
  );
}

function Textarea({
  label,
  helper,
  required = false,
  onChange,
}: {
  label: string;
  helper?: string;
  required?: boolean;
  onChange: (v: string) => void;
}) {
  return (
    <motion.div
      tabIndex={-1}
      whileFocus={{ scale: 1.01 }}
      transition={{ duration: 0.15 }}
      className="flex flex-col gap-1"
    >
      <label className="text-lg font-medium text-gray-800">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      {helper && <p className="text-md text-gray-500">{helper}</p>}
      <textarea
        rows={4}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-xl border border-violet-300 px-4 py-3
                   focus:outline-none focus:ring-2 focus:ring-[#592AC7]/30"
      />
    </motion.div>
  );
}

function CheckboxGroup({
  label,
  options,
  values,
  onToggle,
}: {
  label: string;
  options: string[];
  values: string[];
  onToggle: (v: string) => void;
}) {
  return (
    <div className="space-y-3">
      <p className="text-lg font-medium text-gray-800">{label}</p>
      <div className="flex flex-col gap-2">
        {options.map((opt) => (
          <motion.label
            key={opt}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 text-lg text-gray-700"
          >
            <input
              type="checkbox"
              checked={values.includes(opt)}
              onChange={() => onToggle(opt)}
              className="accent-[#592AC7]"
            />
            {opt}
          </motion.label>
        ))}
      </div>
    </div>
  );
}

/* ===================== */
/* ANIMATED SELECT      */
/* ===================== */

function AnimatedSelect({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value?: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex flex-col gap-1">
      <label className="text-lg font-medium text-gray-800">{label}</label>

      <motion.button
        type="button"
        whileTap={{ scale: 0.98 }}
        onClick={() => setOpen((o) => !o)}
        className="flex items-center justify-between rounded-xl border border-violet-300
                   bg-violet px-4 py-3 text-left
                   focus:outline-none focus:ring-2 focus:ring-[#592AC7]/30"
      >
        <span className={value ? "text-black" : "text-gray-400"}>
          {value || "Select one"}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          ▾
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute z-20 top-full mt-2 w-full overflow-hidden
                       rounded-xl border border-violet-400 bg-white shadow-lg"
          >
            {options.map((opt) => (
              <motion.li
                key={opt}
                whileHover={{ backgroundColor: "#592AC710" }}
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                className="cursor-pointer px-4 py-3 text-sm text-gray-800"
              >
                {opt}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
