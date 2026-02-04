"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import StepOne from "./StepOne";
import { FormData } from "../types/form";

const initialData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  linkedin: "",

  portfolio: "",
  tools: [],

  goals: "",
  challenge: "",
  source: "",
  notes: "",

  declaration: false,
};

export default function FormWrapper() {
  const [data, setData] = useState<FormData>(initialData);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (fields: Partial<FormData>) =>
    setData((prev) => ({ ...prev, ...fields }));

  const submit = async () => {
    if (!data.declaration || submitting) return;

    try {
      setSubmitting(true);

      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Submission failed");
      }

      // ✅ SUCCESS
      setSubmitted(true);
      setData(initialData); // clear form
    } catch (err) {
      console.error("Submission error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* SUCCESS STATE */}
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-2xl border border-green-200 bg-green-50 p-10 text-center"
          >
            <h2 className="text-2xl font-semibold text-green-700">
              Application submitted successfully 
            </h2>
            <p className="mt-3 text-gray-700">
              Thank you for applying. Our team will review your submission and
              get back to you with the next steps.
            </p>

            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 rounded-xl bg-[#592AC7] px-6 py-3 text-white font-medium hover:shadow-md"
            >
              Submit another response
            </button>
          </motion.div>
        ) : (
          <>
            <StepOne data={data} update={update} next={submit} />

            {submitting && (
              <p className="mt-4 text-sm text-gray-500 text-center">
                Submitting your application…
              </p>
            )}
          </>
        )}
      </motion.div>
    </div>
  );
}
